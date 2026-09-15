import type { Locale } from "./config";

/**
 * Stylesheets loaded only in the CJK layouts. next/font would pull SC/KR/JP
 * @font-face into the shared [locale] CSS and ship those files on pt/en/es/fr.
 */
export const cjkStylesheet: Partial<Record<Locale, string>> = {
  "zh-Hans": "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&display=swap",
  ko: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap",
  ja: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap",
};
