import { neighborIds, type MapTopic, type TypeArrows, type TypeId, type WingSide } from "../schema";
import { typeById } from "./types";

export { neighborIds };
export type { MapTopic, TypeArrows, WingSide };

export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7, growthName: "L’Épicurien heureux",
    growthText: "Essaie d’autres réalités sans culpabilité. Moins dogmatique, plus naturel et ouvert. Échouer cesse d’être la fin du monde.",
    stress: 4, stressName: "Le Tourmenté",
    stressText: "Le poids du monde devient fantaisie, honte, et mélancolie. Peut lâcher les principes et justifier l’excès.",
  },
  2: {
    growth: 4, growthName: "Le Conscient de soi",
    growthText: "Se relie à ses propres sentiments sans les censurer. Voit que l’amour n’est pas une monnaie. S’exprime comme unique.",
    stress: 8, stressName: "Le Calomniateur",
    stressText: "Sous le gant de velours, le poing de fer. Réclame, calomnie, et attaque quand l’autre ne réagit pas comme prévu.",
  },
  3: {
    growth: 6, growthName: "Le Loyaliste attachant",
    growthText: "S’engage envers des gens et des principes, lâche le masque caméléon, et gagne une vraie estime de soi.",
    stress: 9, stressName: "Le Négligent qui se défait",
    stressText: "Se coupe sous le stress d’être toujours le meilleur. Néglige, quitte la scène, et s’occupe du secondaire.",
  },
  4: {
    growth: 1, growthName: "Le réaliste sage",
    growthText: "Tombe dans le monde réel et cherche la bonne façon de faire. Cesse d’attendre un sauveur et tient sa propre angoisse.",
    stress: 2, stressName: "La Victime dépendante",
    stressText: "Met la solution dans l’autre. Se plaint, idéalise qui va le sauver, et contamine le lieu avec la crise.",
  },
  5: {
    growth: 8, growthName: "Le sage présent",
    growthText: "S’affirme, quitte l’analyse lente, réclame de l’espace, et va du cerveau au corps. Affronte le monde.",
    stress: 7, stressName: "L’Isolé phobique",
    stressText: "L’isolement ne suffit pas. Il s’agite, en fait trop, chasse le stimulus, et rien ne satisfait, y compris des intérêts et des habitudes étranges.",
  },
  6: {
    growth: 9, growthName: "Le stable, équilibré",
    growthText: "Lâche la peur, se fait confiance, se relie au centre du corps. La panique devient calme.",
    stress: 3, stressName: "L’Hyperactif hostile",
    stressText: "Cache la peur sous un masque hyperactif. Multiplie les engagements, rivalise, et s’en prend à des forces cachées.",
  },
  7: {
    growth: 5, growthName: "L’Explorateur objectif",
    growthText: "Cultive la réserve et l’observation. Goûte l’expérience au lieu de collectionner les surfaces.",
    stress: 1, stressName: "L’Impatient implacable",
    stressText: "Échange la joie contre une gravité froide. Critique, perd patience avec l’incompétence des autres, et cherche le défaut dans tout.",
  },
  8: {
    growth: 2, growthName: "L’Altruiste désintéressé",
    growthText: "Fait attention aux besoins des autres et se sert de la force pour aider, de façon loyale et amicale.",
    stress: 5, stressName: "Le Paranoïaque égaré",
    stressText: "Se retire pour analyser les ennemis et revenir à pleine force. « J’y vais, mais j’en emmène autant que je peux. »",
  },
  9: {
    growth: 3, growthName: "Le sûr de soi",
    growthText: "Reconnaît sa propre valeur, demande du temps et de l’attention, entre dans le monde et s’engage avec le présent.",
    stress: 6, stressName: "Le Masochiste",
    stressText: "Devient effrayé, hésitant, et soumis. Lâche l’autosuffisance et souffre pour rien.",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "Triade de l’instinct",
    types: [8, 9, 1] as TypeId[],
    time: "Présent",
    feeling: "Colère",
    seek: "Autonomie",
    concern: "Résistance et contrôle de l’environnement",
    problem: "Agression et répression",
    text: "Corps, force vitale, survie. La question de fond, c’est la colère : comment elle sort, disparaît, ou devient une cocotte-minute.",
    energy: { 8: "Énergie vers le dehors, contre l’environnement.", 9: "Énergie vers le dehors et vers le dedans, ambivalente.", 1: "Énergie vers le dedans, contre les impulsions intérieures." } as Record<number, string>,
    slogan: { 8: "Qui peut le plus pleure le moins.", 9: "Qui va lentement va sûrement.", 1: "L’enfer est pavé de bonnes intentions." } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "Triade de l’émotion",
    types: [2, 3, 4] as TypeId[],
    time: "Passé",
    feeling: "Honte",
    seek: "Attention",
    concern: "Amour du faux soi et de l’image de soi",
    problem: "Identité et hostilité",
    text: "Qui nous sommes, comment nous sommes. La question de fond, c’est la honte : comment on construit un soi qui pourrait mériter d’être aimé.",
    energy: { 2: "Image de soi présentée vers le dehors, aux autres.", 3: "Image de soi pour soi et pour les autres.", 4: "Image de soi vers le dedans, pour soi." } as Record<number, string>,
    slogan: { 2: "C’est en donnant qu’on reçoit.", 3: "Les affaires sont les affaires.", 4: "Désirer vaut mieux qu’avoir." } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "Triade du mental",
    types: [5, 6, 7] as TypeId[],
    time: "Futur",
    feeling: "Peur",
    seek: "Sécurité",
    concern: "Stratégies et convictions",
    problem: "Insécurité et anxiété",
    text: "Soutien intérieur et orientation. La question de fond, c’est la peur : comment on anticipe le danger, on l’évite, ou on le dissout.",
    energy: { 5: "Fuit vers le dedans, peur du monde extérieur.", 6: "Fuit vers le dedans et vers le dehors, peur des deux mondes.", 7: "Fuit vers le dehors, peur du monde intérieur." } as Record<number, string>,
    slogan: { 5: "Mieux vaut être seul que mal accompagné.", 6: "Mieux vaut prévenir que guérir.", 7: "Un, c’est trop peu ; deux, c’est bien ; trois, c’est mieux." } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "Compétence", types: [1, 3, 5] as TypeId[], text: "Ils résolvent par le bien faire, par le résultat, ou par l’analyse." },
  { label: "Attitude positive", types: [2, 7, 9] as TypeId[], text: "Ils adoucissent le conflit avec l’aide, le possible, ou la paix." },
  { label: "Réactifs", types: [4, 6, 8] as TypeId[], text: "Ils répondent par l’intensité émotionnelle, la vigilance, ou la force." },
  { label: "Conformes", types: [1, 2, 6] as TypeId[], text: "Ils s’orientent par l’autre, par la règle, ou par l’autorité." },
  { label: "Assertifs", types: [3, 7, 8] as TypeId[], text: "Ils y vont les premiers : le but, le plaisir, ou l’impact." },
  { label: "Retirés", types: [4, 5, 9] as TypeId[], text: "Ils reculent dans l’intériorité, l’esprit, ou le confort." },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "Autopréservation",
    also: "Survie",
    figure: "Mère",
    focus: "Je / Je",
    summary: "L’instinct de rester en vie a été le plus déformé dans l’enfance. Attention sur la nourriture, le toit, la santé, l’argent, le rythme, et l’approvisionnement. La crise apparaît quand ils ne peuvent plus se pourvoir.",
    palmer: "Chez Palmer, l’attention s’organise autour de la sécurité de l’organisme. L’autre vient après « est-ce que je suis en sécurité ? »",
  },
  {
    id: "sexual",
    label: "Sexuel",
    also: "Relation · accordage",
    figure: "Frères et sœurs",
    focus: "Je / Tu",
    summary: "L’instinct de lien à un autre précis a été le plus marqué. Attention sur l’intensité, le choix, l’attraction, et « qui est avec moi ». Passion, possessivité, et don voyagent ensemble.",
    palmer: "Palmer décrit ce foyer comme un radar d’accordage : la personne lit le champ entre deux, pas le troupeau et pas le stock.",
  },
  {
    id: "social",
    label: "Social",
    also: "Appartenance · groupe",
    figure: "Père",
    focus: "Je / Nous",
    summary: "L’instinct de place dans le groupe a été le plus marqué. Attention sur la loyauté, la hiérarchie, la justice collective, et « où est-ce que je rentre ». La garde ne baisse que quand ils sentent le respect.",
    palmer: "Le regard social lit le statut, l’appartenance, et le climat du lieu. La question silencieuse, c’est « est-ce que je suis des nôtres ? »",
  },
] as const;

export const healthLevels = {
  intro:
    "Les niveaux de développement, dans la lignée de Riso et Hudson (et dans le découpage UFRGS/NEH), montrent le mouvement à l’intérieur du même type. Une personne oscille entre des bandes plus claires et plus étroites, en tendant vers un équilibre. Ce n’est pas un classement entre types.",
  bands: [
    {
      id: "saudavel",
      label: "Bande saine",
      levels: [
        { n: 1, name: "Libération", text: "L’essence apparaît. Le type devient un instrument, pas une prison." },
        { n: 2, name: "Capacité", text: "Le talent psychologique en plein usage, avec empathie et choix." },
        { n: 3, name: "Valeur sociale", text: "Le don du type sert l’entourage sans avoir besoin d’une scène." },
      ],
    },
    {
      id: "media",
      label: "Bande moyenne",
      levels: [
        { n: 4, name: "Déséquilibre", text: "L’identification au type commence à durcir." },
        { n: 5, name: "Contrôle interpersonnel", text: "L’autre devient une pièce dans la stratégie de l’ego." },
        { n: 6, name: "Surcompensation", text: "Plus de la même chose : le remède du type devient une overdose." },
      ],
    },
    {
      id: "nao-saudavel",
      label: "Bande malsaine",
      levels: [
        { n: 7, name: "Violation", text: "Les limites tombent. La défense blesse qui est près, et le soi." },
        { n: 8, name: "Compulsion", text: "Le schéma tourne tout seul, avec peu d’accès au choix." },
        { n: 9, name: "Destruction pathologique", text: "Effondrement de la structure. Ici la carte demande une aide clinique, pas seulement de l’étude." },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "Un type + une aile + une variante instinctive (sous-type) + un niveau de développement + le mouvement d’intégration ou de désintégration + l’humeur du jour.",
  note: "Aucun type n’est meilleur ou pire. La numérotation n’est pas un classement. Chaque type est unique. Personne n’est un type : on est dans un type.",
};

export const essencePersonality = {
  essence: "Ce que nous sommes vraiment au sens spirituel. Le vrai soi : plein, qui soigne, pas fabriqué.",
  personality: "Les masques que nous mettons pour protéger l’essence. Croyances, peurs, défenses, compensations.",
  bridge:
    "En grandissant, nous créons une couche entre essence et personnalité qui limite et endort le vrai soi. L’Ennéagramme décrit cette couche ; il ne la remplace pas par un diagnostic.",
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
      note: "Helen Palmer lit les triades comme des centres d’intelligence (corps, cœur, mental). Le découpage UFRGS ajoute le temps (présent, passé, futur) et le sentiment sous-jacent (colère, honte, peur).",
    };
  }
  if (topic === "variante") {
    return {
      topic, variants,
      note: "Les personnes du même type diffèrent dans le comportement selon l’instinct le plus marqué. L’essence du type, la motivation, reste la même.",
    };
  }
  if (topic === "nivel") {
    return {
      topic, ...healthLevels,
      caution: "Le test de 135 phrases ne mesure pas le niveau. Sers-toi du vocabulaire pour parler du mouvement, sans diagnostiquer une pathologie.",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "Les ailes sont les voisins sur le cercle. Elles colorent le type ; elles ne le remplacent pas. Dans le test, l’aile probable est le voisin avec le plus de points. Égalité : ailes équilibrées.",
      forType: id
        ? { type: id, name: typeById[id].name, wings: wingsFor(id) }
        : Object.fromEntries(([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [n, { name: typeById[n].name, wings: wingsFor(n) }])),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general: "Les flèches décrivent un mouvement, pas un destin. L’intégration (croissance) va contre les flèches classiques du symbole. La désintégration (stress) suit les flèches. Riso et Hudson cartographient neuf niveaux dans chaque type ; les flèches sont le déplacement vers le type de sécurité ou le type de stress.",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return { topic: "tipo", whatIsAType, essencePersonality, formulaNote: whatIsAType.formula };
}
