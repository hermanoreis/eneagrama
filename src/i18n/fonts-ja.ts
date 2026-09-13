import { Noto_Sans_JP } from "next/font/google";

/** Loaded only from the ja layout branch. `preload: false` is required for CJK. */
export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cjk",
  preload: false,
  adjustFontFallback: false,
});
