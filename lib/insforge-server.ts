import { createClient } from "@insforge/sdk";
import { cookies } from "next/headers";

const anonKey = process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY ?? process.env.NEXT_PUBLIC_ANON_KEY;

export const createInsforgeServer = async () => {
  const cookieStore = await cookies();

  return createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL!,
    anonKey: anonKey!,
    global: {
      headers: {
        cookie: cookieStore.getAll().map((cookie) => `${cookie.name}=${cookie.value}`).join("; "),
      },
    },
  });
};
