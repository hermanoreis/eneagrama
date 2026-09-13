import type { Locale } from "./config";
import { href, type HrefParams, type RouteName } from "./pathnames";

export function interpolate(template: string, vars: Record<string, string | number> = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? `{${key}}`));
}

export type LocaleLink = {
  (locale: Locale, route: RouteName, params?: HrefParams): string;
};

export const localeHref: LocaleLink = href;
