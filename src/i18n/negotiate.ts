import { defaultLocale, isLocale, type Locale } from "./config";

export function localeFromAcceptLanguage(header: string | null | undefined): Locale {
  if (!header) return defaultLocale;
  const tags = header.split(",").map((part) => part.split(";")[0].trim().toLowerCase());
  for (const tag of tags) {
    if (tag === "pt-br" || tag === "pt") return "pt-BR";
    if (tag.startsWith("pt-")) return "pt-BR";
    if (tag === "en" || tag.startsWith("en-")) return "en";
    if (tag === "es" || tag.startsWith("es-")) return "es";
    if (tag === "fr" || tag.startsWith("fr-")) return "fr";
    if (tag === "zh-hans" || tag === "zh-cn" || tag === "zh-sg") return "zh-Hans";
    if (tag === "zh") return "zh-Hans";
    if (tag === "ko" || tag.startsWith("ko-")) return "ko";
    if (tag === "ja" || tag.startsWith("ja-")) return "ja";
  }
  return defaultLocale;
}

export function localeFromCookie(value: string | null | undefined): Locale | null {
  return isLocale(value) ? value : null;
}
