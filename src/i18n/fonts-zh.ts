import { Noto_Sans_SC } from "next/font/google";

/** Loaded only from the zh-Hans layout branch. `preload: false` is required for CJK. */
export const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cjk",
  preload: false,
  adjustFontFallback: false,
});
