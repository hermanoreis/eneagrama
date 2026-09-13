import { Noto_Sans_KR } from "next/font/google";

/** Loaded only from the ko layout branch. `preload: false` is required for CJK. */
export const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cjk",
  preload: false,
  adjustFontFallback: false,
});
