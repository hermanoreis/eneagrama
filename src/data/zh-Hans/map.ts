import { neighborIds, type MapTopic, type TypeArrows, type TypeId, type WingSide } from "../schema";
import { typeById } from "./types";

export { neighborIds };
export type { MapTopic, TypeArrows, WingSide };

export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7, growthName: "快活的活跃型",
    growthText: "没有愧疚地去试别的现实。少教条，更自然、更开。失败不再是世界末日。",
    stress: 4, stressName: "被折磨的人",
    stressText: "全世界的重量变成幻想、羞和忧郁。可能丢掉原则，为过度找理由。",
  },
  2: {
    growth: 4, growthName: "有觉察的人",
    growthText: "连上自己的感受，不审查。看见爱不是货币。把自己表达成独特的。",
    stress: 8, stressName: "诽谤者",
    stressText: "天鹅绒手套下面是铁拳。对方没按期望反应时，就索、谤、打。",
  },
  3: {
    growth: 6, growthName: "投入的忠诚型",
    growthText: "对人、对原则承诺，放下变色龙面具，换来真实的自尊。",
    stress: 9, stressName: "疏忽、散开的人",
    stressText: "在永远要当最好的压力下切出去。忽略、离场，去忙次要的。",
  },
  4: {
    growth: 1, growthName: "明白的现实派",
    growthText: "落到真实世界，找把事做对的方法。不再等救星，自己处理焦虑。",
    stress: 2, stressName: "依赖的受害者",
    stressText: "把解法放在别人身上。抱怨，理想化会来救自己的人，用危机污染房间。",
  },
  5: {
    growth: 8, growthName: "在场的智者",
    growthText: "变得断言，离开慢分析，要空间，从脑子走到身体。面对世界。",
    stress: 7, stressName: "恐惧的孤立者",
    stressText: "孤立还不够。他们搅动、做得太多、追刺激，什么都不满足——包括古怪的兴趣和习惯。",
  },
  6: {
    growth: 9, growthName: "稳、平衡的人",
    growthText: "放下惧，信自己，连上本能中心。恐慌变静。",
    stress: 3, stressName: "敌意的过动者",
    stressText: "把惧藏在过动的人格下面。叠承诺、竞争，敌视藏着的力量。",
  },
  7: {
    growth: 5, growthName: "客观的探索者",
    growthText: "培养保留和观察。品尝体验，而不是收集表面。",
    stress: 1, stressName: "不停的急性子",
    stressText: "把快活换成冷的严肃。批评，对别人的无能没耐心，在每件事里找瑕疵。",
  },
  8: {
    growth: 2, growthName: "不图回报的利他者",
    growthText: "留意别人的需要，用力量去帮，忠诚、友好。",
    stress: 5, stressName: "偏执的幻觉者",
    stressText: "退回去分析敌人，再全力回来。“我会走，但能带走多少带多少。”",
  },
  9: {
    growth: 3, growthName: "有把握的人",
    growthText: "认出自己的价值，要时间和关注，走进世界，跟当下交手。",
    stress: 6, stressName: "受虐者",
    stressText: "变得害怕、犹豫、顺从。丢掉自足，为没什么受苦。",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "本能三元",
    types: [8, 9, 1] as TypeId[],
    time: "现在",
    feeling: "怒",
    seek: "自主",
    concern: "对环境的抵抗和控制",
    problem: "攻击和压抑",
    text: "身体、生命力、生存。底下的课题是怒：它怎么出来、消失、或变成高压锅。",
    energy: { 8: "能量向外，对着环境。", 9: "能量向外也向内，两可。", 1: "能量向内，对着内在冲动。" } as Record<number, string>,
    slogan: { 8: "能者少哭。", 9: "慢而稳。", 1: "通往地狱的路是好意铺的。" } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "情感三元",
    types: [2, 3, 4] as TypeId[],
    time: "过去",
    feeling: "羞",
    seek: "关注",
    concern: "对虚假自我和自我形象的爱",
    problem: "身份和敌意",
    text: "我们是谁，我们怎样。底下的课题是羞：怎么造出一个配被爱的自己。",
    energy: { 2: "自我形象向外，给别人看。", 3: "自我形象给自己也给别人。", 4: "自我形象向内，给自己。" } as Record<number, string>,
    slogan: { 2: "施比受更有福。", 3: "朋友归朋友，生意归生意。", 4: "想要好过拥有。" } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "思考三元",
    types: [5, 6, 7] as TypeId[],
    time: "将来",
    feeling: "惧",
    seek: "安全",
    concern: "策略和信念",
    problem: "不安全和焦虑",
    text: "内在的支撑和方向。底下的课题是惧：危险怎么被预演、躲开、或化开。",
    energy: { 5: "逃向内，怕外在世界。", 6: "逃向内也向外，怕两个世界。", 7: "逃向外，怕内在世界。" } as Record<number, string>,
    slogan: { 5: "宁缺毋滥。", 6: "小心驶得万年船。", 7: "一个太少，两个刚好，三个更好。" } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "胜任", types: [1, 3, 5] as TypeId[], text: "靠做对、靠结果、或靠分析来解题。" },
  { label: "正面展望", types: [2, 7, 9] as TypeId[], text: "用帮忙、可能性或和平把冲突变软。" },
  { label: "反应", types: [4, 6, 8] as TypeId[], text: "用情感强度、警觉或力量来回应。" },
  { label: "顺应", types: [1, 2, 6] as TypeId[], text: "按对方、规则或权威来定向。" },
  { label: "断言", types: [3, 7, 8] as TypeId[], text: "先走：目标、快乐、或冲击。" },
  { label: "撤回", types: [4, 5, 9] as TypeId[], text: "退进内在、头脑、或舒服。" },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "自我保存",
    also: "生存",
    figure: "母亲",
    focus: "我 / 我",
    summary: "活下去的本能在童年被扭曲得最厉害。注意力在食物、住处、健康、钱、节奏和补给。没法养活自己时，危机会出现。",
    palmer: "在 Palmer 的读法里，注意力围着有机体的安全转。别人排在“我安全吗？”后面。",
  },
  {
    id: "sexual",
    label: "性 / 一对一",
    also: "关系 · 调谐",
    figure: "兄弟姐妹",
    focus: "我 / 你",
    summary: "跟某一个具体他人的联结本能被标得最重。注意力在强度、选择、吸引、“谁跟我在一起”。激情、占有和交出一起走。",
    palmer: "Palmer 把这个焦点形容成调谐雷达：人读的是两个人之间的场，不是羊群，也不是库存。",
  },
  {
    id: "social",
    label: "社会",
    also: "归属 · 团体",
    figure: "父亲",
    focus: "我 / 我们",
    summary: "在团体里位置的本能被标得最重。注意力在忠诚、层级、集体公正、“我嵌在哪”。感到被尊重时，守卫才会放下。",
    palmer: "社会的目光读地位、归属和房间的气候。无声的问题是“我是我们中的一个吗？”",
  },
] as const;

export const healthLevels = {
  intro:
    "发展水平，在 Riso 与 Hudson 的谱系里（以及 UFRGS/NEH 的切法），显示的是同一类型内部的移动。人在更清和更窄的带子之间摆，趋向一个平衡。这不是类型之间的排名。",
  bands: [
    {
      id: "saudavel",
      label: "健康带",
      levels: [
        { n: 1, name: "释放", text: "本质出现。类型成为工具，不是监狱。" },
        { n: 2, name: "能力", text: "心理才能充分使用，带着共情和选择。" },
        { n: 3, name: "社会价值", text: "类型的礼物服务周围，不需要舞台。" },
      ],
    },
    {
      id: "media",
      label: "中间带",
      levels: [
        { n: 4, name: "失衡", text: "对类型的认同开始变硬。" },
        { n: 5, name: "人际控制", text: "别人变成自我策略里的棋子。" },
        { n: 6, name: "过度补偿", text: "更多同样的：类型的药变成过量。" },
      ],
    },
    {
      id: "nao-saudavel",
      label: "不健康带",
      levels: [
        { n: 7, name: "越界", text: "界限倒下。防御伤到近处的人，也伤到自己。" },
        { n: 8, name: "强迫", text: "模式自己跑，几乎够不到选择。" },
        { n: 9, name: "病理性破坏", text: "结构塌掉。这里地图要的是临床帮助，不只是学习。" },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "一个类型 + 一个翼型 + 一个本能变体（亚型）+ 一个发展水平 + 整合或解体的移动 + 当天的心情。",
  note: "没有哪个类型更好或更差。编号不是排名。每个类型都独特。没有人是一个类型：人处在一个类型里。",
};

export const essencePersonality = {
  essence: "我们在灵性意义上真正是什么。真实的自己：满的、治愈的、不是造出来的。",
  personality: "我们戴上的面具，用来保护本质。信念、惧、防御、补偿。",
  bridge:
    "长大过程中，我们在本质和人格之间造了一层，限制并让真实的自己睡着。九型人格描述那一层；它不拿诊断去替换。",
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
      note: "Helen Palmer 把三元读成智能中心（身、心、意）。UFRGS 的切法加上时间（现在、过去、将来）和底下的感受（怒、羞、惧）。",
    };
  }
  if (topic === "variante") {
    return {
      topic, variants,
      note: "同一类型的人，行为会随最显著的本能而不同。类型的本质——动机——还是同一个。",
    };
  }
  if (topic === "nivel") {
    return {
      topic, ...healthLevels,
      caution: "这套 135 题测验不测量水平。用这个词汇谈移动，不要诊断病理。",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "翼型是圆上的邻居。它们给类型着色，不替换类型。测验里，较可能的翼是得分更高的邻居。平手：两翼均衡。",
      forType: id
        ? { type: id, name: typeById[id].name, wings: wingsFor(id) }
        : Object.fromEntries(([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [n, { name: typeById[n].name, wings: wingsFor(n) }])),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "箭头描述移动，不是命运。整合（成长）逆着符号上经典的箭头走。解体（压力）顺着箭头走。Riso 和 Hudson 在每个类型内部画出九个水平；箭头是朝安全类型或压力类型的偏移。",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return { topic: "tipo", whatIsAType, essencePersonality, formulaNote: whatIsAType.formula };
}
