// app/api/auth/session/route.ts
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth"; // Path to your NextAuth configuration

export const GET = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ error: "No session found" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(session), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
