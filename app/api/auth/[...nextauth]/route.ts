import NextAuth from "@/auth"; // Default import from auth.ts

// The API route handler should be exported directly
export const handler = NextAuth;

// You can handle both GET and POST requests using the same handler in Next.js
export const GET = handler;
export const POST = handler;
