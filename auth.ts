// auth.ts
import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/password"; // Utility to verify password
import { getUserFromDb } from "@/utils/db"; // Utility to get user from DB
import { ZodError } from "zod";
import { signInSchema } from "@/lib/zod"; // Zod schema for sign-in validation
import NextAuth, { NextAuthOptions } from "next-auth";
import "next-auth/jwt"

// Function to handle sign-in
export const signIn = async (provider: string, credentials?: { email: string, password: string }) => {
  try {
    // Trigger the sign-in process with the specified provider
    const result = await nextAuthSignIn(provider, {
      ...credentials, // Include credentials if using "credentials" provider
      redirect: false, // Disable automatic redirect after sign-in
    });

    // Handle error from sign-in
    if (result?.error) {
      throw new Error(result.error);
    }

    return result;
  } catch (error) {
    console.error("Sign-in failed:", error);
    return null;
  }
};

// Function to handle sign-out
export const signOut = async () => {
  try {
    await nextAuthSignOut({ redirect: false });
  } catch (error) {
    console.error("Sign-out failed:", error);
  }
};

// NextAuth configuration options
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        try {
          // Zod validation using the schema
          const { email, password } = await signInSchema.parseAsync(credentials);

          // Retrieve user from the database
          const user = await getUserFromDb(email);
          if (!user) throw new Error("No user found with the given email.");

          // Check if the provided password matches the stored hash
          const isPasswordValid = await verifyPassword(password, user.passwordHash);
          if (!isPasswordValid) throw new Error("Invalid credentials.");

          // Return user object if authentication is successful
          return { id: String(user.id), name: user.name, email: user.email }; // Ensure id is a string
        } catch (error: unknown) {
          // Handle the error based on its type
          if (error instanceof ZodError) {
            console.error("Zod validation error:", error.errors);
          } else if (error instanceof Error) {
            console.error("Authentication error:", error.message);
          } else {
            console.error("Unknown error:", error);
          }
          return null; // Return null if authentication fails
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    error: "/error",
    signOut: "/signout",
    verifyRequest: "/verify-request",
    newUser: "/new-user",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.email = token.email;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export NextAuth instance directly for handling
export default NextAuth(authOptions);
