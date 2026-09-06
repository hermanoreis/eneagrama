import { NextResponse } from "next/server";
import { peekDevOtp } from "../../../../lib/email";

export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production" && process.env.RESEND_API_KEY) {
    return NextResponse.json({ otp: null });
  }
  const email = new URL(request.url).searchParams.get("email") ?? "";
  return NextResponse.json({ otp: email ? peekDevOtp(email) : null });
}
