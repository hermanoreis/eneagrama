import type { Locale } from "../i18n/config";
import type { Messages } from "./pt-BR";
import { messages as en } from "./en";
import { messages as es } from "./es";
import { messages as fr } from "./fr";
import { messages as ja } from "./ja";
import { messages as ko } from "./ko";
import { messages as ptBR } from "./pt-BR";
import { messages as zhHans } from "./zh-Hans";

const catalogs: Record<Locale, Messages> = {
  "pt-BR": ptBR,
  en,
  es,
  fr,
  "zh-Hans": zhHans,
  ko,
  ja,
};
export function getMessages(locale: Locale): Messages { return catalogs[locale]; }
export type { Messages };
