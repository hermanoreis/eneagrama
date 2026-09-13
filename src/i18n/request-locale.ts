import { parseLocale, type Locale } from "./config";
import { resolvePublicPath } from "./pathnames";

export function localeFromHeaders(headers: Headers): Locale {
  const explicit = headers.get("x-eneagrama-locale");
  if (explicit) return parseLocale(explicit);

  const referer = headers.get("referer") ?? headers.get("referrer");
  if (referer) {
    try {
      return resolvePublicPath(new URL(referer).pathname).locale;
    } catch {
      /* ignore malformed referer */
    }
  }

  return parseLocale(null);
}
