import { Resend } from "resend";
import { defaultLocale, type Locale } from "../i18n/config";
import { interpolate } from "../i18n/format";
import { getMessages } from "../messages";
import { otpEmailHtml, otpEmailText } from "./otp-email";

const lastCodes = new Map<string, { otp: string; at: number }>();

export function allowDevOtp() {
  return process.env.NODE_ENV !== "production";
}

export function rememberDevOtp(email: string, otp: string) {
  if (!allowDevOtp()) return;
  lastCodes.set(email.toLowerCase(), { otp, at: Date.now() });
}

export function peekDevOtp(email: string) {
  if (!allowDevOtp()) return null;
  const row = lastCodes.get(email.toLowerCase());
  if (!row) return null;
  if (Date.now() - row.at > 10 * 60 * 1000) return null;
  return row.otp;
}

export async function sendOtpEmail(email: string, otp: string, locale: Locale = defaultLocale) {
  rememberDevOtp(email, otp);
  if (allowDevOtp()) {
    console.log(`[eneagrama] código para ${email}: ${otp}`);
  }

  const key = process.env.RESEND_API_KEY;
  const messages = getMessages(locale);
  if (!key) {
    if (allowDevOtp()) return { delivered: false as const };
    throw new Error("E-mail de acesso não está configurado.");
  }

  const resend = new Resend(key);
  const from = process.env.RESEND_FROM ?? "Eneagrama <eneagrama@hermano.me>";
  const code = otp.replace(/\D/g, "").slice(0, 6);
  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: interpolate(messages.email.subject, { otp: code }),
    html: otpEmailHtml(otp, locale),
    text: otpEmailText(otp, locale),
  });
  if (error) {
    throw new Error(error.message || "Não foi possível enviar o e-mail.");
  }
  return { delivered: true as const };
}
