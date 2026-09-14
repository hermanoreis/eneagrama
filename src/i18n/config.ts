export const locales = ["pt-BR", "en", "es", "fr", "zh-Hans", "ko", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt-BR";

export const localeCookie = "eneagrama-locale";

export const htmlLang: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
  es: "es",
  fr: "fr",
  "zh-Hans": "zh-Hans",
  ko: "ko",
  ja: "ja",
};

export const ogLocale: Record<Locale, string> = {
  "pt-BR": "pt_BR",
  en: "en_US",
  es: "es_419",
  fr: "fr_FR",
  "zh-Hans": "zh_CN",
  ko: "ko_KR",
  ja: "ja_JP",
};

export const dateLocale: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en-US",
  es: "es-419",
  fr: "fr-FR",
  "zh-Hans": "zh-CN",
  ko: "ko-KR",
  ja: "ja-JP",
};

/** Public URL prefix. `zh-Hans` is served at `/zh`. */
export const localePrefix: Record<Locale, string> = {
  "pt-BR": "",
  en: "/en",
  es: "/es",
  fr: "/fr",
  "zh-Hans": "/zh",
  ko: "/ko",
  ja: "/ja",
};

export const prefixedLocales = ["en", "es", "fr", "zh-Hans", "ko", "ja"] as const;

export const cjkLocales = ["zh-Hans", "ko", "ja"] as const;

export type CjkLocale = (typeof cjkLocales)[number];

export function isCjkLocale(value: string | null | undefined): value is CjkLocale {
  return value === "zh-Hans" || value === "ko" || value === "ja";
}

const prefixToLocale: Record<string, Locale> = {
  en: "en",
  es: "es",
  fr: "fr",
  zh: "zh-Hans",
  ko: "ko",
  ja: "ja",
};

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromUrlPrefix(segment: string | null | undefined): Locale | null {
  if (!segment) return null;
  return prefixToLocale[segment] ?? null;
}

export function parseLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}
