"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "../i18n/config";
import { switchLocalePath } from "../i18n/pathnames";
import { useI18n } from "../i18n/provider";

export function LanguageSwitcher() {
  const { locale, messages } = useI18n();
  const pathname = usePathname() || "/";
  return (
    <nav aria-label={messages.language} className="flex flex-wrap items-center gap-2 text-xs">
      {locales.map((item: Locale) => {
        const href = switchLocalePath(pathname, item);
        const current = item === locale;
        return (
          <Link
            key={item}
            href={href}
            hrefLang={item}
            aria-current={current ? "page" : undefined}
            className={current ? "font-semibold text-[color:var(--ink)]" : "text-[color:var(--mute)] underline-offset-4 hover:underline"}
          >
            {messages.languages[item]}
          </Link>
        );
      })}
    </nav>
  );
}
