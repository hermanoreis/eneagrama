import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { localeCookie } from "./i18n/config";
import { localeFromAcceptLanguage } from "./i18n/negotiate";
import { canonicalPublicFromLocaleCode, href, isProtectedPublicPath, resolvePublicPath } from "./i18n/pathnames";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const canonical = canonicalPublicFromLocaleCode(pathname);
  if (canonical) {
    const dest = request.nextUrl.clone();
    dest.pathname = canonical;
    return NextResponse.redirect(dest);
  }

  const resolved = resolvePublicPath(pathname);
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = resolved.internalPath || `/${resolved.locale}`;

  if (isProtectedPublicPath(pathname)) {
    const sessionCookie = getSessionCookie(request);
    if (!sessionCookie) {
      const login = request.nextUrl.clone();
      login.pathname = href(resolved.locale, "signIn");
      login.searchParams.set("next", pathname + request.nextUrl.search);
      return NextResponse.redirect(login);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-eneagrama-locale", resolved.locale);
  const response = NextResponse.rewrite(rewriteUrl, {
    request: { headers: requestHeaders },
  });

  const existing = request.cookies.get(localeCookie)?.value;
  if (resolved.prefixed) {
    response.cookies.set(localeCookie, resolved.locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  } else if (!existing) {
    response.cookies.set(localeCookie, localeFromAcceptLanguage(request.headers.get("accept-language")), {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_next/data|.*\\..*).*)"],
};
