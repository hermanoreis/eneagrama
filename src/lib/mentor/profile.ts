import { typeById, types, type TypeId } from "../../data/types";

export function isTypeId(value: number): value is TypeId {
  return Number.isInteger(value) && value >= 1 && value <= 9;
}

export function serializeType(id: TypeId) {
  const t = typeById[id];
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
    leadership: t.leadership,
  };
}

export function listTypeNames() {
  return types.map((t) => ({ id: t.id, name: t.name, alias: t.alias }));
}
