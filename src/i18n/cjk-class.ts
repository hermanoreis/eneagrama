import type { Locale } from "./config";

/** Dynamic import keeps SC/KR/JP font files off latin (and off each other's) pages. */
export async function cjkFontVariable(locale: Locale): Promise<string> {
  if (locale === "zh-Hans") {
    const { notoSansSC } = await import("./fonts-zh");
    return notoSansSC.variable;
  }
  if (locale === "ko") {
    const { notoSansKR } = await import("./fonts-ko");
    return notoSansKR.variable;
  }
  if (locale === "ja") {
    const { notoSansJP } = await import("./fonts-ja");
    return notoSansJP.variable;
  }
  return "";
}
