import { neighborIds, type MapTopic, type TypeArrows, type TypeId, type WingSide } from "../schema";
import { typeById } from "./types";

export { neighborIds };
export type { MapTopic, TypeArrows, WingSide };

export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7, growthName: "가벼운 열정가",
    growthText: "죄책감 없이 다른 현실을 시도한다. 덜 독단적이고, 더 자연스럽고 열린다. 실패가 세상의 끝이 아니게 된다.",
    stress: 4, stressName: "괴로워하는 사람",
    stressText: "세상 무게가 환상, 수치, 우울이 된다. 원칙을 놓고, 지나침을 정당화하기도 한다.",
  },
  2: {
    growth: 4, growthName: "자기를 아는 사람",
    growthText: "검열 없이 자기 감정에 닿는다. 사랑이 화폐가 아님을 본다. 유일한 사람으로 표현한다.",
    stress: 8, stressName: "헐뜯는 사람",
    stressText: "벨벳 장갑 아래 쇠주먹. 상대가 기대한 대로 안 반응하면 따지고, 헐뜯고, 공격한다.",
  },
  3: {
    growth: 6, growthName: "마음을 여는 충성가",
    growthText: "사람과 원칙에 마음을 붙이고, 카멜레온 가면을 벗고, 실제 자존을 얻는다.",
    stress: 9, stressName: "손을 놓고 풀어지는 사람",
    stressText: "늘 최고여야 하는 압박 아래 끊는다. 소홀하고, 자리를 비우고, 부차적인 일에 머문다.",
  },
  4: {
    growth: 1, growthName: "지혜로운 현실주의자",
    growthText: "실제 세상에 내려와, 일을 바른 방식으로 하는 길을 찾는다. 구원자를 기다리지 않고, 자기 고통을 다룬다.",
    stress: 2, stressName: "기대는 피해자",
    stressText: "해법을 상대에게 둔다. 불평하고, 구해 줄 사람을 이상화하고, 위기로 자리를 물들인다.",
  },
  5: {
    growth: 8, growthName: "자리에 있는 현자",
    growthText: "분명해지고, 느린 분석을 떠나, 자리를 주장하고, 머리에서 몸으로 간다. 세상을 마주한다.",
    stress: 7, stressName: "겁먹은 은둔자",
    stressText: "고립만으로는 부족하다. 들뜨고, 너무 많이 하고, 자극을 쫓고, 이상한 관심과 습관을 포함해 아무것도 채우지 못한다.",
  },
  6: {
    growth: 9, growthName: "안정되고 균형 잡힌 사람",
    growthText: "두려움을 놓고, 자신을 믿고, 본능 센터에 연결된다. 공황이 고요해진다.",
    stress: 3, stressName: "적대적인 과잉활동",
    stressText: "과잉활동하는 가면 아래 두려움을 숨긴다. 약속을 늘리고, 겨루고, 숨은 힘에 적대를 보낸다.",
  },
  7: {
    growth: 5, growthName: "객관적인 탐구가",
    growthText: "절제와 관찰을 기른다. 겉면만 모으지 않고, 경험을 맛본다.",
    stress: 1, stressName: "가차 없는 조급함",
    stressText: "기쁨을 차가운 진지함과 바꾼다. 비판하고, 남의 무능에 참을성을 잃고, 모든 것에서 흠을 찾는다.",
  },
  8: {
    growth: 2, growthName: "이해관계 없는 이타주의자",
    growthText: "남의 필요에 주의를 두고, 충성하고 친근한 방식으로 힘을 돕기에 쓴다.",
    stress: 5, stressName: "의심에 빠진 사람",
    stressText: "적을 분석하려고 물러났다가, 전력을 다해 돌아온다. “가긴 가는데, 갈 수 있는 한 많이 데려간다.”",
  },
  9: {
    growth: 3, growthName: "자기 자리를 아는 사람",
    growthText: "자기 가치를 알아보고, 시간과 주의를 요청하고, 세상으로 들어가 지금에 참여한다.",
    stress: 6, stressName: "자학하는 사람",
    stressText: "겁먹고, 주저하고, 순종한다. 자립을 놓고, 아무것도 아닌 일로 고생한다.",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "본능 삼원",
    types: [8, 9, 1] as TypeId[],
    time: "현재",
    feeling: "분노",
    seek: "자율",
    concern: "저항, 그리고 환경의 통제",
    problem: "공격과 억압",
    text: "몸, 생명력, 생존. 밑바탕 과제는 분노다. 어떻게 나오고, 사라지고, 압력솥이 되는가.",
    energy: { 8: "에너지가 바깥으로, 환경을 향해.", 9: "에너지가 바깥과 안으로, 양가적.", 1: "에너지가 안으로, 안의 충동을 향해." } as Record<number, string>,
    slogan: { 8: "힘이 세면 덜 운다.", 9: "천천히, 꾸준히.", 1: "지옥으로 가는 길은 선의로 깔려 있다." } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "감정 삼원",
    types: [2, 3, 4] as TypeId[],
    time: "과거",
    feeling: "수치",
    seek: "주의",
    concern: "거짓 나와 자기 이미지에 대한 사랑",
    problem: "정체성과 적대",
    text: "우리가 누구인가, 어떻게 있는가. 밑바탕 과제는 수치다. 사랑받을 나를 어떻게 만들어 내는가.",
    energy: { 2: "자기 이미지를 바깥으로, 남에게 내놓음.", 3: "자기 이미지를 나와 남 모두에게.", 4: "자기 이미지를 안으로, 자신에게." } as Record<number, string>,
    slogan: { 2: "줄 때 받는다.", 3: "친구는 친구, 일은 일.", 4: "갖는 것보다 원하는 쪽이 낫다." } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "사고 삼원",
    types: [5, 6, 7] as TypeId[],
    time: "미래",
    feeling: "두려움",
    seek: "안전",
    concern: "전략과 확신",
    problem: "불안정과 불안",
    text: "안의 버팀과 방향. 밑바탕 과제는 두려움이다. 위험을 어떻게 미리 보고, 피하고, 녹이는가.",
    energy: { 5: "안으로 달아남, 바깥 세상에 대한 두려움.", 6: "안과 밖으로 달아남, 두 세상에 대한 두려움.", 7: "바깥으로 달아남, 안 세상에 대한 두려움." } as Record<number, string>,
    slogan: { 5: "나쁜 무리보다는 혼자가 낫다.", 6: "돌다리도 두들겨 보고 건너라.", 7: "하나는 적고, 둘은 괜찮고, 셋이 더 좋다." } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "유능", types: [1, 3, 5] as TypeId[], text: "바르게 하거나, 결과로 하거나, 분석으로 푼다." },
  { label: "긍정 전망", types: [2, 7, 9] as TypeId[], text: "도움, 가능성, 평화로 갈등을 부드럽게 한다." },
  { label: "반응", types: [4, 6, 8] as TypeId[], text: "감정의 강도, 경계, 힘으로 답한다." },
  { label: "순응", types: [1, 2, 6] as TypeId[], text: "상대, 규칙, 권위에 맞춰 방향을 잡는다." },
  { label: "주장", types: [3, 7, 8] as TypeId[], text: "먼저 간다. 목표, 즐거움, 충격." },
  { label: "위축", types: [4, 5, 9] as TypeId[], text: "내면, 머리, 편안함 쪽으로 물러난다." },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "자기보존",
    also: "생존",
    figure: "어머니",
    focus: "나 / 나",
    summary: "살아남으려는 본능이 어린 시절에 가장 많이 비틀렸다. 주의가 음식, 집, 건강, 돈, 리듬, 공급에 가 있다. 스스로를 챙기지 못할 때 위기가 온다.",
    palmer: "팔머의 읽기에서, 주의는 몸의 안전을 중심으로 모인다. 상대는 “내가 안전한가?” 다음에 온다.",
  },
  {
    id: "sexual",
    label: "일대일",
    also: "관계 · 조율",
    figure: "형제자매",
    focus: "나 / 너",
    summary: "특정한 한 사람과의 유대 본능이 가장 뚜렷했다. 주의가 강도, 선택, 끌림, “누가 나와 있는가”에 가 있다. 열정, 소유, 맡김이 같이 간다.",
    palmer: "팔머는 이 초점을 조율 레이더로 본다. 무리가 아니라, 쌓아 둔 것도 아니라, 둘 사이의 장을 읽는다.",
  },
  {
    id: "social",
    label: "사회",
    also: "소속 · 무리",
    figure: "아버지",
    focus: "나 / 우리",
    summary: "무리 안의 자리 본능이 가장 뚜렷했다. 주의가 충성, 위계, 집단의 정의, “나는 어디에 맞는가”에 가 있다. 존중을 느낄 때만 경계가 내려간다.",
    palmer: "사회적 시선은 지위, 소속, 자리의 공기를 읽는다. 말하지 않는 질문은 “내가 우리 중 하나인가?”다.",
  },
] as const;

export const healthLevels = {
  intro:
    "발달 수준은 리소와 허드슨 계열(그리고 UFRGS/NEH의 구분)에서, 같은 유형 안의 움직임을 보여 준다. 사람은 더 맑은 구간과 더 좁은 구간 사이를 오가며, 어떤 균형 쪽으로 기울어진다. 유형 사이의 순위가 아니다.",
  bands: [
    {
      id: "saudavel",
      label: "건강한 구간",
      levels: [
        { n: 1, name: "놓아 줌", text: "본질이 나타난다. 유형이 감옥이 아니라 도구가 된다." },
        { n: 2, name: "능력", text: "심리적 재능을 충분히 쓰며, 공감과 선택이 있다." },
        { n: 3, name: "사회적 가치", text: "유형의 선물이 무대 없이도 주변을 돕는다." },
      ],
    },
    {
      id: "media",
      label: "평균 구간",
      levels: [
        { n: 4, name: "불균형", text: "유형과의 동일시가 굳어지기 시작한다." },
        { n: 5, name: "대인 통제", text: "상대가 자아 전략의 조각이 된다." },
        { n: 6, name: "과잉보상", text: "같은 것을 더. 유형의 약이 과량이 된다." },
      ],
    },
    {
      id: "nao-saudavel",
      label: "건강하지 않은 구간",
      levels: [
        { n: 7, name: "침해", text: "한계가 무너진다. 방어가 곁의 사람과 자기를 다치게 한다." },
        { n: 8, name: "강박", text: "패턴이 혼자 돌아가고, 선택에 거의 닿지 못한다." },
        { n: 9, name: "병리적 붕괴", text: "구조가 무너진다. 여기서 지도는 공부만이 아니라, 임상적 도움을 요청한다." },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "유형 + 날개 + 본능 변형(하위유형) + 발달 수준 + 통합이나 분열의 움직임 + 그날의 기분.",
  note: "어떤 유형도 더 낫거나 못하지 않다. 번호는 순위가 아니다. 각 유형은 유일하다. 아무도 유형이 아니다. 사람은 유형 안에 있다.",
};

export const essencePersonality = {
  essence: "영적인 의미에서 우리가 진짜로 있는 것. 참된 나. 가득하고, 치유하고, 만들어 내지 않은 것.",
  personality: "본질을 지키려고 쓰는 가면. 믿음, 두려움, 방어, 보상.",
  bridge:
    "자라면서 본질과 성격 사이에 층을 만들어, 참된 나를 제한하고 잠재운다. 에니어그램은 그 층을 설명한다. 진단으로 바꾸지 않는다.",
};

export function wingsFor(id: TypeId): WingSide[] {
  return typeById[id].wings.map((w) => ({ id: w.id, name: w.name, text: w.text }));
}

export function triadOf(id: TypeId) {
  if (triads.instinto.types.includes(id)) return triads.instinto;
  if (triads.sentimento.types.includes(id)) return triads.sentimento;
  return triads.pensamento;
}

export function serializeMap(topic: MapTopic, tipo?: number) {
  if (topic === "triade") {
    return {
      topic, triads, otherTriads,
      note: "헬렌 팔머는 삼원을 지능의 센터(몸, 가슴, 머리)로 읽는다. UFRGS 쪽 구분에서는 시간(현재, 과거, 미래)과 밑바탕 감정(분노, 수치, 두려움)을 더한다.",
    };
  }
  if (topic === "variante") {
    return {
      topic, variants,
      note: "같은 유형의 사람도 가장 뚜렷한 본능에 따라 행동이 달라진다. 유형의 본질, 곧 동기는 같다.",
    };
  }
  if (topic === "nivel") {
    return {
      topic, ...healthLevels,
      caution: "135문항 테스트는 수준을 재지 않는다. 움직임을 이야기하는 말로 쓰고, 병리를 진단하지 마세요.",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "날개는 원 위의 이웃이다. 유형에 색을 입히고, 유형을 대체하지 않는다. 테스트에서는 점수가 더 높은 이웃이 그럴듯한 날개다. 동점이면 날개가 균형 잡힌 것으로 본다.",
      forType: id
        ? { type: id, name: typeById[id].name, wings: wingsFor(id) }
        : Object.fromEntries(([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [n, { name: typeById[n].name, wings: wingsFor(n) }])),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "화살은 움직임을 설명하지, 운명을 설명하지 않는다. 통합(성장)은 상징의 고전 화살을 거슬러 간다. 분열(스트레스)은 화살을 따른다. 리소와 허드슨은 각 유형 안에 아홉 수준을 그린다. 화살은 안전 유형 쪽, 또는 스트레스 유형 쪽으로의 이동이다.",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return { topic: "tipo", whatIsAType, essencePersonality, formulaNote: whatIsAType.formula };
}
