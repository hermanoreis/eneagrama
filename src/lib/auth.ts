import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { emailOTP } from "better-auth/plugins";
import { headers } from "next/headers";
import { defaultLocale } from "../i18n/config";
import { localeFromHeaders } from "../i18n/request-locale";
import { pool } from "./db";
import { sendOtpEmail } from "./email";

const siteUrl =
  process.env.BETTER_AUTH_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const auth = betterAuth({
  database: pool,
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: siteUrl,
  trustedOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://eneagrama.hermano.me",
    siteUrl,
    process.env.BETTER_AUTH_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "",
  ].filter((origin): origin is string => Boolean(origin)),
  emailAndPassword: {
    enabled: false,
  },
  plugins: [
    emailOTP({
      otpLength: 6,
      expiresIn: 600,
      async sendVerificationOTP({ email, otp }) {
        let locale = defaultLocale;
        try {
          locale = localeFromHeaders(await headers());
        } catch {
          /* outside a request — keep default */
        }
        await sendOtpEmail(email, otp, locale);
      },
    }),
    nextCookies(),
  ],
});
