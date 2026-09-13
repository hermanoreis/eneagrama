import type { Locale } from "../i18n/config";
import type { Messages } from "./pt-BR";
import { messages as en } from "./en";
import { messages as es } from "./es";
import { messages as fr } from "./fr";
import { messages as ptBR } from "./pt-BR";

const catalogs: Record<Locale, Messages> = { "pt-BR": ptBR, en, es, fr };
export function getMessages(locale: Locale): Messages { return catalogs[locale]; }
export type { Messages };
