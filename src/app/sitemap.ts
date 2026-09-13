import type { MetadataRoute } from "next";
import { locales } from "../i18n/config";
import { href, languageAlternates, type HrefParams, type RouteName } from "../i18n/pathnames";
import { SITE_URL } from "../lib/seo";

const pages: { route: RouteName; params?: HrefParams }[] = [
  { route: "home" },
  { route: "types" },
  { route: "map" },
  { route: "synthesis" },
  { route: "library" },
  { route: "readings" },
  { route: "workbook" },
  { route: "overview" },
  { route: "about" },
  ...([1, 2, 3, 4, 5, 6, 7, 8, 9] as const).map((id) => ({ route: "type" as const, params: { id } })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map(({ route, params }) => {
      const path = href(locale, route, params);
      const languages = Object.fromEntries(
        Object.entries(languageAlternates(route, params)).map(([lang, alt]) => [
          lang,
          alt === "/" ? SITE_URL : `${SITE_URL}${alt}`,
        ]),
      );
      return {
        url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
        alternates: { languages },
      };
    }),
  );
}
