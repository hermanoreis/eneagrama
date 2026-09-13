import { neighborIds, type MapTopic, type TypeArrows, type TypeId, type WingSide } from "../schema";
import { typeById } from "./types";

export { neighborIds };
export type { MapTopic, TypeArrows, WingSide };

export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7, growthName: "The happy Enthusiast",
    growthText: "Tries other realities without guilt. Less dogmatic, more natural and open. Failing stops being the end of the world.",
    stress: 4, stressName: "The Tormented",
    stressText: "The weight of the world turns into fantasy, shame, and melancholy. May drop principles and justify excess.",
  },
  2: {
    growth: 4, growthName: "The Self-aware",
    growthText: "Connects to their own feelings without censoring them. Sees that love is not a currency. Expresses themselves as unique.",
    stress: 8, stressName: "The Slanderer",
    stressText: "Under the velvet glove, the iron fist. Charges, slanders, and attacks when the other doesn’t react as hoped.",
  },
  3: {
    growth: 6, growthName: "The engaging Loyalist",
    growthText: "Commits to people and principles, drops the chameleon mask, and earns real self-esteem.",
    stress: 9, stressName: "The Negligent, coming apart",
    stressText: "Cuts out under the stress of always being the best. Neglects, leaves the scene, and occupies themselves with the secondary.",
  },
  4: {
    growth: 1, growthName: "The wise realist",
    growthText: "Drops into the real world and looks for the right way to do things. Stops waiting for a savior and handles their own anguish.",
    stress: 2, stressName: "The dependent Victim",
    stressText: "Puts the solution in the other person. Complains, idealizes who will save them, and contaminates the room with the crisis.",
  },
  5: {
    growth: 8, growthName: "The present sage",
    growthText: "Gets assertive, leaves slow analysis, claims space, and goes from the brain to the body. Faces the world.",
    stress: 7, stressName: "The phobic Isolate",
    stressText: "Isolation isn’t enough. They stir, do too much, chase stimulus, and nothing satisfies — including odd interests and habits.",
  },
  6: {
    growth: 9, growthName: "The steady, balanced one",
    growthText: "Drops the fear, trusts themselves, connects to the body center. Panic becomes quiet.",
    stress: 3, stressName: "The hostile Hyperactive",
    stressText: "Hides fear under a hyperactive persona. Multiplies commitments, competes, and hostilizes hidden forces.",
  },
  7: {
    growth: 5, growthName: "The objective Explorer",
    growthText: "Cultivates reserve and observation. Tastes the experience instead of collecting surfaces.",
    stress: 1, stressName: "The relentless Impatient",
    stressText: "Trades joy for cold seriousness. Criticizes, loses patience with other people’s incompetence, and looks for the flaw in everything.",
  },
  8: {
    growth: 2, growthName: "The disinterested Altruist",
    growthText: "Pays attention to other people’s needs and uses force to help, in a loyal, friendly way.",
    stress: 5, stressName: "The paranoid Deluded",
    stressText: "Withdraws to analyze enemies and come back at full force. “I’ll go, but I’ll take as many as I can with me.”",
  },
  9: {
    growth: 3, growthName: "The self-assured",
    growthText: "Recognizes their own worth, asks for time and attention, steps into the world and engages with the present.",
    stress: 6, stressName: "The Masochist",
    stressText: "Becomes frightened, hesitant, and submissive. Drops self-sufficiency and suffers for nothing.",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "Body triad",
    types: [8, 9, 1] as TypeId[],
    time: "Present",
    feeling: "Anger",
    seek: "Autonomy",
    concern: "Resistance and control of the environment",
    problem: "Aggression and repression",
    text: "Body, vital force, survival. The background issue is anger: how it comes out, disappears, or turns into a pressure cooker.",
    energy: { 8: "Energy outward, against the environment.", 9: "Energy outward and inward, ambivalent.", 1: "Energy inward, against inner impulses." } as Record<number, string>,
    slogan: { 8: "The one who can do more cries less.", 9: "Slow and steady.", 1: "The road to hell is paved with good intentions." } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "Heart triad",
    types: [2, 3, 4] as TypeId[],
    time: "Past",
    feeling: "Shame",
    seek: "Attention",
    concern: "Love of the false self and of self-image",
    problem: "Identity and hostility",
    text: "Who we are, how we are. The background issue is shame: how a self gets built so it might deserve love.",
    energy: { 2: "Self-image presented outward, to others.", 3: "Self-image for self and for others.", 4: "Self-image inward, for oneself." } as Record<number, string>,
    slogan: { 2: "It is in giving that we receive.", 3: "Friends are friends; business is business.", 4: "Wanting is better than having." } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "Head triad",
    types: [5, 6, 7] as TypeId[],
    time: "Future",
    feeling: "Fear",
    seek: "Safety",
    concern: "Strategies and convictions",
    problem: "Insecurity and anxiety",
    text: "Inner support and orientation. The background issue is fear: how danger is anticipated, avoided, or dissolved.",
    energy: { 5: "Flees inward, fear of the outer world.", 6: "Flees inward and outward, fear of both worlds.", 7: "Flees outward, fear of the inner world." } as Record<number, string>,
    slogan: { 5: "Better alone than in bad company.", 6: "Better safe than sorry.", 7: "One is too little; two is good; three is better." } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "Competence", types: [1, 3, 5] as TypeId[], text: "They solve by doing it right, by the result, or by analysis." },
  { label: "Positive outlook", types: [2, 7, 9] as TypeId[], text: "They soften conflict with help, possibility, or peace." },
  { label: "Reactive", types: [4, 6, 8] as TypeId[], text: "They answer with emotional intensity, vigilance, or force." },
  { label: "Compliant", types: [1, 2, 6] as TypeId[], text: "They orient by the other person, the rule, or authority." },
  { label: "Assertive", types: [3, 7, 8] as TypeId[], text: "They go first: goal, pleasure, or impact." },
  { label: "Withdrawn", types: [4, 5, 9] as TypeId[], text: "They recede into interiority, the mind, or comfort." },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "Self-preservation",
    also: "Survival",
    figure: "Mother",
    focus: "I / I",
    summary: "The instinct to stay alive was the most distorted in childhood. Attention on food, shelter, health, money, rhythm, and supply. Crisis shows up when they cannot provide for themselves.",
    palmer: "In Palmer’s reading, attention organizes around the safety of the organism. The other person comes after “am I safe?”",
  },
  {
    id: "sexual",
    label: "Sexual",
    also: "Relationship · attunement",
    figure: "Siblings",
    focus: "I / You",
    summary: "The instinct of bond to one specific other was the most marked. Attention on intensity, choice, attraction, and “who is with me.” Passion, possessiveness, and surrender travel together.",
    palmer: "Palmer describes this focus as an attunement radar: the person reads the field between two, not the herd and not the stockpile.",
  },
  {
    id: "social",
    label: "Social",
    also: "Belonging · group",
    figure: "Father",
    focus: "I / We",
    summary: "The instinct of place in the group was the most marked. Attention on loyalty, hierarchy, collective justice, and “where do I fit.” Guard drops only when they sense respect.",
    palmer: "The social gaze reads status, belonging, and the climate of the room. The silent question is “am I one of us?”",
  },
] as const;

export const healthLevels = {
  intro:
    "Levels of development, in the Riso and Hudson lineage (and in the UFRGS/NEH cut), show movement inside the same type. A person oscillates between clearer and narrower bands, tending toward an equilibrium. It is not a ranking among types.",
  bands: [
    {
      id: "saudavel",
      label: "Healthy band",
      levels: [
        { n: 1, name: "Release", text: "Essence appears. The type becomes an instrument, not a prison." },
        { n: 2, name: "Capacity", text: "Psychological talent in full use, with empathy and choice." },
        { n: 3, name: "Social value", text: "The gift of the type serves the surroundings without needing a stage." },
      ],
    },
    {
      id: "media",
      label: "Average band",
      levels: [
        { n: 4, name: "Imbalance", text: "Identification with the type starts to harden." },
        { n: 5, name: "Interpersonal control", text: "The other person becomes a piece in the ego’s strategy." },
        { n: 6, name: "Overcompensation", text: "More of the same: the type’s remedy becomes an overdose." },
      ],
    },
    {
      id: "nao-saudavel",
      label: "Unhealthy band",
      levels: [
        { n: 7, name: "Violation", text: "Limits fall. The defense hurts whoever is near, and the self." },
        { n: 8, name: "Compulsion", text: "The pattern runs on its own, with little access to choice." },
        { n: 9, name: "Pathological destruction", text: "Collapse of structure. Here the map asks for clinical help, not only study." },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "A type + a wing + an instinctual variant (subtype) + a level of development + the movement of integration or disintegration + the mood of the day.",
  note: "No type is better or worse. The numbering is not a ranking. Each type is unique. Nobody is a type: a person is in a type.",
};

export const essencePersonality = {
  essence: "What we really are in a spiritual sense. The true self: full, healing, not manufactured.",
  personality: "The masks we put on to protect essence. Beliefs, fears, defenses, compensations.",
  bridge:
    "As we grow, we create a layer between essence and personality that limits and puts the true self to sleep. The Enneagram describes that layer; it does not replace it with a diagnosis.",
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
      note: "Helen Palmer reads the triads as centers of intelligence (body, heart, mind). The UFRGS cut adds time (present, past, future) and the underlying feeling (anger, shame, fear).",
    };
  }
  if (topic === "variante") {
    return {
      topic, variants,
      note: "People of the same type differ in behavior according to the most marked instinct. The essence of the type — the motivation — stays the same.",
    };
  }
  if (topic === "nivel") {
    return {
      topic, ...healthLevels,
      caution: "The 135-item test does not measure level. Use the vocabulary to talk about movement, without diagnosing pathology.",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "Wings are the neighbors on the circle. They color the type; they don’t replace it. In the test, the likely wing is the neighbor with the higher score. Tie: balanced wings.",
      forType: id
        ? { type: id, name: typeById[id].name, wings: wingsFor(id) }
        : Object.fromEntries(([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [n, { name: typeById[n].name, wings: wingsFor(n) }])),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "Arrows describe movement, not destiny. Integration (growth) goes against the classic arrows of the symbol. Disintegration (stress) follows the arrows. Riso and Hudson map nine levels inside each type; arrows are the shift toward the security type or the stress type.",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return { topic: "tipo", whatIsAType, essencePersonality, formulaNote: whatIsAType.formula };
}
