export const locales = ["pt-BR", "en", "es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeCookie = "eneagrama-locale";

export const htmlLang: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
  es: "es",
  fr: "fr",
};

export const ogLocale: Record<Locale, string> = {
  "pt-BR": "pt_BR",
  en: "en_US",
  es: "es_419",
  fr: "fr_FR",
};

export const dateLocale: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en-US",
  es: "es-419",
  fr: "fr-FR",
};

export const localePrefix: Record<Locale, string> = {
  "pt-BR": "",
  en: "/en",
  es: "/es",
  fr: "/fr",
};

export const prefixedLocales = ["en", "es", "fr"] as const;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "pt-BR" || value === "en" || value === "es" || value === "fr";
}

export function parseLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
