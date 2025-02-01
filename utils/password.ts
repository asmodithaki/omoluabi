import bcryptjs from "bcryptjs"; // Correctly import bcryptjs

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcryptjs.compare(password, hash);
}
