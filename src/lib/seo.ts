import type { Metadata } from "next";
import { htmlLang, locales, ogLocale, type Locale } from "../i18n/config";
import { href, languageAlternates, type HrefParams, type RouteName } from "../i18n/pathnames";
import { OG_ALT, OG_IMAGE_PATH, OG_SIZE } from "./og-meta";

export const SITE_URL = "https://eneagrama.hermano.me";

export const defaultOgImage = {
  url: OG_IMAGE_PATH,
  width: OG_SIZE.width,
  height: OG_SIZE.height,
  alt: OG_ALT,
};

export function publicMetadata(
  title: string,
  description: string,
  path: string,
  image = defaultOgImage,
  locale: Locale = "pt-BR",
  route?: RouteName,
  params?: HrefParams,
): Metadata {
  const languages = route ? languageAlternates(route, params) : undefined;
  const ogLanguages = locales.filter((item) => item !== locale).map((item) => ogLocale[item]);
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Eneagrama por Hermano Reis",
      locale: ogLocale[locale],
      alternateLocale: ogLanguages,
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function privateMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: false } };
}

export function localeMetadata(
  locale: Locale,
  title: string,
  description: string,
  route: RouteName,
  params?: HrefParams,
  image?: typeof defaultOgImage,
): Metadata {
  const path = href(locale, route, params);
  const og =
    image ??
    (route === "home"
      ? { ...defaultOgImage, url: `${href(locale, "home") === "/" ? "" : href(locale, "home")}${OG_IMAGE_PATH}` }
      : defaultOgImage);
  return {
    ...publicMetadata(title, description, path, og, locale, route, params),
    other: { language: htmlLang[locale] },
  };
}
