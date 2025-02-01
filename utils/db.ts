import { prisma } from "@/utils/prisma"; // Example using Prisma ORM

export async function getUserFromDb(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}
