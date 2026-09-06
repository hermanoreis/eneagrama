import { headers } from "next/headers";
import { auth } from "./auth";

export async function getSession() {
  try {
    return await auth.api.getSession({
      headers: await headers(),
    });
  } catch {
    return null;
  }
}

export async function requireUser() {
  const session = await getSession();
  if (!session?.user) return null;
  return session.user;
}
