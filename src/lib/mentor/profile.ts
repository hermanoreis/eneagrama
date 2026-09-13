import { getPack } from "../../data/pack";
import { isTypeId, type TypeId } from "../../data/schema";
import type { Locale } from "../../i18n/config";

export { isTypeId };

export function serializeType(id: TypeId, locale: Locale) {
  const pack = getPack(locale);
  const t = pack.typeById[id];
  return {
    id: t.id,
    name: t.name,
    alias: t.alias,
    center: t.center,
    fear: t.fear,
    desire: t.desire,
    innerMessage: t.innerMessage,
    essence: t.essence,
    healing: t.healing,
    summary: t.summary,
    personality: t.personality,
    focus: t.focus,
    motivators: t.motivators,
    strengths: t.strengths,
    develop: t.develop,
    alert: t.alert,
    vocations: t.vocations,
    practices: t.practices,
    wings: t.wings,
    arrows: pack.arrowsByType[id],
    leadership: t.leadership,
  };
}

export function listTypeNames(locale: Locale) {
  return getPack(locale).types.map((t) => ({ id: t.id, name: t.name, alias: t.alias }));
}
