export type TypeId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type CenterId = "instinto" | "sentimento" | "pensamento";

export type LikertQuestion = { id: number; text: string; type: TypeId };

export type ScaleOption = { value: 1 | 2 | 3 | 4 | 5; label: string };

export type EnneaType = {
  id: TypeId;
  name: string;
  alias: string;
  center: CenterId;
  color: string;
  ink: string;
  fear: string;
  desire: string;
  innerMessage: string;
  essence: string;
  healing: string;
  summary: string;
  personality: string;
  focus: string;
  motivators: string[];
  strengths: string[];
  develop: string[];
  alert: string;
  vocations: string[];
  practices: string[];
  wings: { id: TypeId; name: string; text: string }[];
  leadership: string;
  excelBlurb: string;
};

export type CenterCopy = {
  label: string;
  types: TypeId[];
  text: string;
};

export type ArrowKind = "integracao" | "desintegracao";

export type WingSide = {
  id: TypeId;
  name: string;
  text: string;
};

export type TypeArrows = {
  growth: TypeId;
  growthName: string;
  growthText: string;
  stress: TypeId;
  stressName: string;
  stressText: string;
};

export type MapTopic = "tipo" | "triade" | "variante" | "nivel" | "asa" | "flecha";

export const TYPE_IDS: TypeId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function neighborIds(id: TypeId): [TypeId, TypeId] {
  const left = (id === 1 ? 9 : ((id - 1) as TypeId));
  const right = (id === 9 ? 1 : ((id + 1) as TypeId));
  return [left, right];
}

export function isTypeId(value: number): value is TypeId {
  return Number.isInteger(value) && value >= 1 && value <= 9;
}
