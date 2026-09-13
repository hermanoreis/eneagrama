import type { Locale } from "../i18n/config";
import * as en from "./en";
import * as es from "./es";
import * as fr from "./fr";
import * as ptBR from "./pt-BR";

const packs = {
  "pt-BR": ptBR,
  en,
  es,
  fr,
} as const;

export type ContentPack = typeof ptBR;

export type ClientPack = Omit<ContentPack, "serializeMap" | "neighborIds" | "wingsFor" | "triadOf">;

export function getPack(locale: Locale): ContentPack {
  return packs[locale] as ContentPack;
}

export function getClientPack(locale: Locale): ClientPack {
  const pack = getPack(locale);
  const { serializeMap, neighborIds, wingsFor, triadOf, ...data } = pack;
  void serializeMap;
  void neighborIds;
  void wingsFor;
  void triadOf;
  return data;
}
