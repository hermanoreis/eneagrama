import { neighborIds, type MapTopic, type TypeArrows, type TypeId, type WingSide } from "../schema";
import { typeById } from "./types";

export { neighborIds };
export type { MapTopic, TypeArrows, WingSide };

export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7, growthName: "明るい熱中する人",
    growthText: "罪の意識なしに、別の現実を試す。教条が薄れ、自然で開いた感じになる。失敗が世界の終わりではなくなる。",
    stress: 4, stressName: "責め苛まれる人",
    stressText: "世界の重さが空想と羞恥と憂鬱に変わる。原則を捨て、行き過ぎを正当化することもある。",
  },
  2: {
    growth: 4, growthName: "自分に気づく人",
    growthText: "検閲せずに自分の気持ちにつながる。愛は通貨ではないと見る。他にいない自分として表す。",
    stress: 8, stressName: "中傷する人",
    stressText: "ベルベットの手袋の下に鉄の拳。相手が期待どおりに反応しないと、請求し、中傷し、攻める。",
  },
  3: {
    growth: 6, growthName: "関わる忠実な人",
    growthText: "人と原則に身を置き、カメレオンの仮面を下ろし、本物の自尊心を得る。",
    stress: 9, stressName: "怠り、崩れる人",
    stressText: "いつも最善でいる圧のもとで切る。怠り、場を去り、二番手のもので自分を埋める。",
  },
  4: {
    growth: 1, growthName: "賢い現実家",
    growthText: "現実の世界に降り、正しいやり方を探す。救い手を待つことをやめ、自分の苦悶を扱う。",
    stress: 2, stressName: "依存する犠牲者",
    stressText: "解を相手に置く。訴え、救ってくれる人を理想化し、危機で場を染める。",
  },
  5: {
    growth: 8, growthName: "いまにいる賢者",
    growthText: "主張し、遅い分析を離れ、場所を取り、脳から身体へ行く。世界に向かう。",
    stress: 7, stressName: "恐怖の孤立者",
    stressText: "孤立では足りない。動き回り、やりすぎ、刺激を追い、何も満たさない。奇妙な関心や癖も含めて。",
  },
  6: {
    growth: 9, growthName: "落ち着いた均衡",
    growthText: "恐れを下ろし、自分を信じ、本能センターにつながる。パニックが静かになる。",
    stress: 3, stressName: "敵意ある過活動",
    stressText: "過活動の仮面の下に恐れを隠す。約束を増やし、競争し、見えない力に敵意を向ける。",
  },
  7: {
    growth: 5, growthName: "客観的な探検者",
    growthText: "控えと観察を育てる。表面を集めるのではなく、体験を味わう。",
    stress: 1, stressName: "容赦ないせっかち",
    stressText: "喜びを冷たい真面目さに替える。批評し、人の無能に我慢できず、すべてに欠点を探す。",
  },
  8: {
    growth: 2, growthName: "損得のない利他",
    growthText: "人の必要に目を向け、忠実で親しいやり方で、力を助けに使う。",
    stress: 5, stressName: "妄想する猜疑",
    stressText: "敵を分析するために引き、全力で戻る。「行く。ただし、できる限り連れていく。」",
  },
  9: {
    growth: 3, growthName: "自信を持った人",
    growthText: "自分の価値を認め、時間と注意を求め、世界に踏み出し、いまに関わる。",
    stress: 6, stressName: "マゾヒスト",
    stressText: "怯え、迷い、服従する。自足を下ろし、何でもないことに苦しむ。",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "本能トライアド",
    types: [8, 9, 1] as TypeId[],
    time: "現在",
    feeling: "怒り",
    seek: "自主",
    concern: "抵抗と、環境の支配",
    problem: "攻撃と抑圧",
    text: "身体、生命力、生存。根底にある課題は怒りだ。どう出るか、消えるか、圧力鍋になるか。",
    energy: { 8: "エネルギーは外へ、環境に向かう。", 9: "エネルギーは外と内、両義的。", 1: "エネルギーは内へ、内の衝動に向かう。" } as Record<number, string>,
    slogan: { 8: "力のある者は泣かない。", 9: "ゆっくり、着実に。", 1: "地獄への道は善意で舗装されている。" } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "感情トライアド",
    types: [2, 3, 4] as TypeId[],
    time: "過去",
    feeling: "羞恥",
    seek: "注目",
    concern: "偽りの自己と自己イメージへの愛",
    problem: "アイデンティティと敵意",
    text: "自分が誰か、どうあるか。根底にある課題は羞恥だ。愛されるに足る自分を、どう組み立てるか。",
    energy: { 2: "自己イメージは外へ、人に向けて示す。", 3: "自己イメージは自分にも人にも。", 4: "自己イメージは内へ、自分に向けて。" } as Record<number, string>,
    slogan: { 2: "与えることによって、受け取る。", 3: "友情は友情、仕事は仕事。", 4: "持つより、求めるほうがいい。" } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "思考トライアド",
    types: [5, 6, 7] as TypeId[],
    time: "未来",
    feeling: "恐れ",
    seek: "安全",
    concern: "戦略と確信",
    problem: "不安定と不安",
    text: "内の支えと方角。根底にある課題は恐れだ。危険をどう先回りし、避け、溶かしていくか。",
    energy: { 5: "内へ逃げる。外の世界への恐れ。", 6: "内と外へ逃げる。両方の世界への恐れ。", 7: "外へ逃げる。内の世界への恐れ。" } as Record<number, string>,
    slogan: { 5: "悪い仲間より、独りがまし。", 6: "転ばぬ先の杖。", 7: "一つでは足りない。二つは良い。三つはもっと良い。" } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "有能さ", types: [1, 3, 5] as TypeId[], text: "正しさ、結果、分析で解く。" },
  { label: "前向きな見通し", types: [2, 7, 9] as TypeId[], text: "助け、可能性、平和で衝突を柔らかくする。" },
  { label: "反応型", types: [4, 6, 8] as TypeId[], text: "感情の強さ、警戒、力で答える。" },
  { label: "従う型", types: [1, 2, 6] as TypeId[], text: "相手、ルール、権威で方角を取る。" },
  { label: "主張型", types: [3, 7, 8] as TypeId[], text: "先に出る。目標、快、衝撃。" },
  { label: "離れる型", types: [4, 5, 9] as TypeId[], text: "内、頭、心地よさへ退く。" },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "自己保存",
    also: "生存",
    figure: "母親",
    focus: "私 / 私",
    summary: "生き続ける本能が、幼少期にもっとも歪んだ。注意は食べ物、住まい、健康、金、リズム、補給に向く。自分を賄えないとき、危機が出る。",
    palmer: "パーマーの読みでは、注意は生体の安全のまわりに組織される。相手は「自分は安全か」のあとだ。",
  },
  {
    id: "sexual",
    label: "セクシャル",
    also: "関係・同調",
    figure: "兄弟姉妹",
    focus: "私 / あなた",
    summary: "特定の一人との絆の本能が、もっとも強く刻まれた。注意は強さ、選択、引力、「誰が自分といるか」に向く。情熱、所有、明け渡しが一緒に走る。",
    palmer: "パーマーはこの焦点を同調のレーダーとして描く。人は群れでも備蓄でもなく、二人のあいだの場を読む。",
  },
  {
    id: "social",
    label: "ソーシャル",
    also: "所属・集団",
    figure: "父親",
    focus: "私 / 私たち",
    summary: "集団のなかの場所の本能が、もっとも強く刻まれた。注意は忠実、序列、集団の公正、「自分はどこに収まるか」に向く。敬意を感じたときだけ、守りが下りる。",
    palmer: "ソーシャルの視線は地位、所属、場の空気を読む。沈黙の問いは「自分は私たちの一人か」だ。",
  },
] as const;

export const healthLevels = {
  intro:
    "発達の段階は、リソとハドソンの系譜（および UFRGS/NEH の切り口）では、同じタイプの内側の動きを示す。人はより明瞭な帯とより狭い帯のあいだを揺れ、均衡へ傾く。タイプ同士の順位ではない。",
  bands: [
    {
      id: "saudavel",
      label: "健康な帯",
      levels: [
        { n: 1, name: "解放", text: "本質が現れる。タイプは牢ではなく、道具になる。" },
        { n: 2, name: "能力", text: "心理的な才能が、共感と選択とともに十分に使われる。" },
        { n: 3, name: "社会的価値", text: "タイプの贈り物が、舞台を必要とせず周囲に仕える。" },
      ],
    },
    {
      id: "media",
      label: "平均の帯",
      levels: [
        { n: 4, name: "不均衡", text: "タイプとの同一化が固まり始める。" },
        { n: 5, name: "対人的な支配", text: "相手が、自我の戦略の駒になる。" },
        { n: 6, name: "過剰補償", text: "同じものの増量。タイプの薬が過量になる。" },
      ],
    },
    {
      id: "nao-saudavel",
      label: "不健康な帯",
      levels: [
        { n: 7, name: "侵害", text: "限界が落ちる。防御が近くの人を傷つけ、自分も傷つける。" },
        { n: 8, name: "強迫", text: "パターンが独走し、選択への入口が少ない。" },
        { n: 9, name: "病理的な破壊", text: "構造の崩壊。ここでは地図は学習だけでなく、臨床の助けを求める。" },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "タイプ＋ウィング＋本能バリアント（サブタイプ）＋発達の段階＋統合または崩壊の動き＋その日の調子。",
  note: "どのタイプが良くも悪くもない。番号は順位ではない。各タイプは独自だ。誰もタイプではない。人はタイプの中にいる。",
};

export const essencePersonality = {
  essence: "霊的な意味で、本当の私たち。本物の自己。満ち、癒し、つくられたものではない。",
  personality: "本質を守るために被る仮面。信念、恐れ、防御、補償。",
  bridge:
    "育つにつれ、本質とパーソナリティのあいだに層をつくり、それが本物の自己を制限し、眠らせる。エニアグラムはその層を記述する。診断に置き換えるものではない。",
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
      note: "ヘレン・パーマーはトライアドを知性のセンター（身体、感情、思考）として読む。UFRGS の切り口は時間（現在、過去、未来）と、底にある感情（怒り、羞恥、恐れ）を加える。",
    };
  }
  if (topic === "variante") {
    return {
      topic, variants,
      note: "同じタイプの人でも、いちばん強く刻まれた本能によって振る舞いは違う。タイプの本質、つまり動機は同じままだ。",
    };
  }
  if (topic === "nivel") {
    return {
      topic, ...healthLevels,
      caution: "135項目のテストは段階を測らない。動きを話すための語彙として使い、病理を診断しない。",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "ウィングは円の隣のタイプだ。タイプを色づける。置き換えはしない。テストでは、点数の高いほうの隣が、ありそうなウィングだ。同点なら、均衡したウィング。",
      forType: id
        ? { type: id, name: typeById[id].name, wings: wingsFor(id) }
        : Object.fromEntries(([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [n, { name: typeById[n].name, wings: wingsFor(n) }])),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "矢印は動きを記述する。運命ではない。統合（成長）は、記号の古典的な矢印に逆らう。崩壊（ストレス）は矢印に従う。リソとハドソンは各タイプの内側に9つの段階を置く。矢印は、安全のタイプかストレスのタイプへ向かう移りだ。",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return { topic: "tipo", whatIsAType, essencePersonality, formulaNote: whatIsAType.formula };
}
