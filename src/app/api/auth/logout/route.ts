import { NextResponse } from "next/server";
import { parseLocale } from "../../../../i18n/config";
import { href } from "../../../../i18n/pathnames";
import { localeFromHeaders } from "../../../../i18n/request-locale";
import { auth } from "../../../../lib/auth";

export async function POST(request: Request) {
  await auth.api.signOut({
    headers: request.headers,
  });

  let locale = localeFromHeaders(request.headers);
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("form")) {
    const form = await request.formData();
    const fromForm = form.get("locale");
    if (typeof fromForm === "string" && fromForm) locale = parseLocale(fromForm);
  }

  const dest = href(locale, "home");
  return NextResponse.redirect(new URL(dest, request.url), { status: 303 });
}
