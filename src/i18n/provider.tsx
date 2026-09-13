"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { ContentPack } from "../data/pack";
import type { Locale } from "./config";
import { interpolate } from "./format";
import { href, type HrefParams, type RouteName } from "./pathnames";
import type { Messages } from "../messages/pt-BR";

type I18nValue = {
  locale: Locale;
  messages: Messages;
  pack: ContentPack;
  href: (route: RouteName, params?: HrefParams) => string;
  t: (template: string, vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  pack,
  children,
}: {
  locale: Locale;
  messages: Messages;
  pack: ContentPack;
  children: ReactNode;
}) {
  const value: I18nValue = {
    locale,
    messages,
    pack,
    href: (route, params) => href(locale, route, params),
    t: interpolate,
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
