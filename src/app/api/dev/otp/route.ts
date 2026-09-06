import { NextResponse } from "next/server";
import { allowDevOtp, peekDevOtp } from "../../../../lib/email";

export async function GET(request: Request) {
  if (!allowDevOtp()) {
    return NextResponse.json({ otp: null }, { status: 404 });
  }
  const email = new URL(request.url).searchParams.get("email") ?? "";
  return NextResponse.json({ otp: email ? peekDevOtp(email) : null });
}
