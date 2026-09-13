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
  }
  return defaultLocale;
}

export function localeFromCookie(value: string | null | undefined): Locale | null {
  return isLocale(value) ? value : null;
}
