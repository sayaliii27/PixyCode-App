"use server";

import { currentUser } from "@clerk/nextjs/server";
import * as jose from "jose";

export const streamTokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated");

  const secret = new TextEncoder().encode(process.env.STREAM_SECRET_KEY!);

  const now = Math.floor(Date.now() / 1000);

  const token = await new jose.SignJWT({ user_id: user.id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now - 300)
    .setExpirationTime(now + 3600)
    .sign(secret);

  return token;
};
