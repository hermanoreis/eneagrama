import { typeById, type TypeId } from "./types";

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

export function neighborIds(id: TypeId): [TypeId, TypeId] {
  const left = (id === 1 ? 9 : ((id - 1) as TypeId));
  const right = (id === 9 ? 1 : ((id + 1) as TypeId));
  return [left, right];
}

/** Integração contra as setas do hexágono/triângulo; desintegração a favor. UFRGS / Riso-Hudson. */
export const arrowsByType: Record<TypeId, TypeArrows> = {
  1: {
    growth: 7,
    growthName: "O Entusiasta feliz",
    growthText:
      "Experimenta outras realidades sem culpa. Fica menos dogmático, mais natural e aberto. Falhar deixa de ser o fim do mundo.",
    stress: 4,
    stressName: "O Atormentado",
    stressText:
      "O peso do mundo vira fantasia, vergonha e melancolia. Pode abrir mão dos princípios e justificar excessos.",
  },
  2: {
    growth: 4,
    growthName: "O Autoconsciente",
    growthText:
      "Conecta-se aos próprios sentimentos sem censura. Percebe que amor não é moeda. Expressa-se como único.",
    stress: 8,
    stressName: "O Caluniador",
    stressText:
      "Debaixo da luva de veludo, o punho de ferro. Cobra, calunia e ataca quando o outro não reage como esperava.",
  },
  3: {
    growth: 6,
    growthName: "O Leal cativante",
    growthText:
      "Compromete-se com pessoas e princípios, larga a máscara camaleônica e conquista autoestima de verdade.",
    stress: 9,
    stressName: "O Negligente desagregado",
    stressText:
      "Pifa com o stress de ser sempre o melhor. Negligencia, distancia-se da cena e se ocupa do secundário.",
  },
  4: {
    growth: 1,
    growthName: "O Sábio realista",
    growthText:
      "Cai no mundo real e busca o jeito certo de fazer. Larga a espera por um salvador e resolve as próprias angústias.",
    stress: 2,
    stressName: "A Vítima dependente",
    stressText:
      "Deposita no outro a solução. Reclama, idealiza quem vai salvar e contamina o entorno com a crise.",
  },
  5: {
    growth: 8,
    growthName: "O Sábio presente",
    growthText:
      "Fica assertivo, sai da análise lenta, reclama espaço e vai do cérebro para o corpo. Enfrenta o mundo.",
    stress: 7,
    stressName: "O Isolado fóbico",
    stressText:
      "O isolamento não basta. Agita-se, faz demais, busca estímulos e nada satisfaz, inclusive vícios e interesses bizarros.",
  },
  6: {
    growth: 9,
    growthName: "O Estável equilibrado",
    growthText:
      "Larga o medo, confia em si, liga-se ao centro instintivo. O pânico vira tranquilidade.",
    stress: 3,
    stressName: "O Hiperativo hostil",
    stressText:
      "Esconde o medo sob uma persona hiperativa. Multiplica compromissos, compete e hostiliza forças ocultas.",
  },
  7: {
    growth: 5,
    growthName: "O Explorador objetivo",
    growthText:
      "Cultiva reserva e observação. Saboreia a experiência em vez de colecionar superfícies.",
    stress: 1,
    stressName: "O Impaciente implacável",
    stressText:
      "Troca a alegria pela seriedade fria. Critica, impacienta-se com a incompetência alheia e busca defeito em tudo.",
  },
  8: {
    growth: 2,
    growthName: "O Altruísta desinteressado",
    growthText:
      "Presta atenção nas necessidades dos outros e usa a força para ajudar, de forma amiga e leal.",
    stress: 5,
    stressName: "O Paranoico delirante",
    stressText:
      "Afasta-se para analisar inimigos e voltar com toda a força. “Eu vou, mas levo comigo quantos eu puder.”",
  },
  9: {
    growth: 3,
    growthName: "O Seguro de si",
    growthText:
      "Reconhece o próprio valor, pede tempo e atenção para si, lança-se ao mundo e envolve-se no presente.",
    stress: 6,
    stressName: "O Masoquista",
    stressText:
      "Fica amedrontado, hesitante e submisso. Abandona a autossuficiência e sofre à toa.",
  },
};

export const triads = {
  instinto: {
    id: "instinto" as const,
    label: "Tríade do instinto",
    types: [8, 9, 1] as TypeId[],
    time: "Presente",
    feeling: "Raiva",
    seek: "Autonomia",
    concern: "Resistência e controle do ambiente",
    problem: "Agressividade e repressão",
    text: "Corpo, força vital, sobrevivência. A questão de fundo é a raiva: como ela sai, some ou vira panela de pressão.",
    energy: {
      8: "Energia para fora, contra o ambiente.",
      9: "Energia para fora e para dentro, ambivalente.",
      1: "Energia para dentro, contra impulsos internos.",
    } as Record<number, string>,
    slogan: {
      8: "Quem pode mais chora menos.",
      9: "Devagar se vai ao longe.",
      1: "De boa intenção o inferno está cheio.",
    } as Record<number, string>,
  },
  sentimento: {
    id: "sentimento" as const,
    label: "Tríade do sentimento",
    types: [2, 3, 4] as TypeId[],
    time: "Passado",
    feeling: "Vergonha",
    seek: "Atenção",
    concern: "Amor ao falso eu e à autoimagem",
    problem: "Identidade e hostilidade",
    text: "Quem somos, como somos. A questão de fundo é a vergonha: como se constrói um eu que mereça amor.",
    energy: {
      2: "Autoimagem apresentada para fora, para os outros.",
      3: "Autoimagem para si e para os outros.",
      4: "Autoimagem para dentro, para si mesmo.",
    } as Record<number, string>,
    slogan: {
      2: "É dando que se recebe.",
      3: "Amigos, amigos, negócios à parte.",
      4: "Desejar é melhor que ter.",
    } as Record<number, string>,
  },
  pensamento: {
    id: "pensamento" as const,
    label: "Tríade do pensamento",
    types: [5, 6, 7] as TypeId[],
    time: "Futuro",
    feeling: "Medo",
    seek: "Segurança",
    concern: "Estratégias e convicções",
    problem: "Insegurança e ansiedade",
    text: "Apoio e orientação interior. A questão de fundo é o medo: como se antecipa, evita ou dissolve o perigo.",
    energy: {
      5: "Foge para dentro, medo do mundo exterior.",
      6: "Foge para dentro e para fora, medo dos dois mundos.",
      7: "Foge para fora, medo do mundo interior.",
    } as Record<number, string>,
    slogan: {
      5: "Antes só do que mal acompanhado.",
      6: "Prevenir é melhor que remediar.",
      7: "Um é pouco, dois é bom, três é melhor.",
    } as Record<number, string>,
  },
};

export const otherTriads = [
  { label: "Competência", types: [1, 3, 5] as TypeId[], text: "Resolvem pelo fazer certo, pelo resultado ou pela análise." },
  { label: "Atitude positiva", types: [2, 7, 9] as TypeId[], text: "Suavizam o conflito com ajuda, possibilidade ou paz." },
  { label: "Reativos", types: [4, 6, 8] as TypeId[], text: "Respondem com intensidade emocional, vigilância ou força." },
  { label: "Aquiescentes", types: [1, 2, 6] as TypeId[], text: "Orientam-se pelo outro, pela regra ou pela autoridade." },
  { label: "Assertivos", types: [3, 7, 8] as TypeId[], text: "Vão na frente: meta, prazer ou impacto." },
  { label: "Retraídos", types: [4, 5, 9] as TypeId[], text: "Recuam para o interior, a mente ou o conforto." },
];

export const variants = [
  {
    id: "autopreservacao",
    label: "Autopreservação",
    also: "Sobrevivência",
    figure: "Mãe",
    focus: "Eu / Eu",
    summary:
      "O instinto de se manter vivo foi o mais distorcido na infância. Atenção em comida, teto, saúde, dinheiro, ritmo e suprimento. A crise aparece quando não consegue se auto-prover.",
    palmer:
      "Na leitura de Palmer, a atenção se organiza em torno da segurança do organismo. O outro entra depois do “estou a salvo?”.",
  },
  {
    id: "sexual",
    label: "Sexual",
    also: "Relacionamentos · sintonia",
    figure: "Irmãos",
    focus: "Eu / Você",
    summary:
      "O instinto de vínculo a um outro específico foi o mais marcado. Atenção em intensidade, escolha, atração e “quem está comigo”. Paixão, possessividade e entrega andam juntas.",
    palmer:
      "Palmer descreve esse foco como radar de sintonia: a pessoa lê o campo entre dois, não a manada nem o estoque.",
  },
  {
    id: "social",
    label: "Social",
    also: "Aceitação · grupo",
    figure: "Pai",
    focus: "Eu / Nós",
    summary:
      "O instinto de lugar no grupo foi o mais marcado. Atenção em lealdade, hierarquia, justiça do coletivo e “onde eu caibo”. Só baixa a guarda quando percebe respeito.",
    palmer:
      "O olhar social lê status, pertencimento e o clima da sala. A pergunta silenciosa é “sou um de nós?”.",
  },
] as const;

export const healthLevels = {
  intro:
    "Os níveis de desenvolvimento, na linhagem de Riso e Hudson (e no recorte da trilha UFRGS/NEH), mostram movimento dentro do mesmo tipo. A pessoa oscila entre faixas mais lúcidas e mais estreitas, tendendo a um equilíbrio. Não é ranking entre tipos.",
  bands: [
    {
      id: "saudavel",
      label: "Faixa saudável",
      levels: [
        { n: 1, name: "Liberação", text: "A essência aparece. O tipo vira instrumento, não prisão." },
        { n: 2, name: "Capacidade", text: "Talento psicológico em uso pleno, com empatia e escolha." },
        { n: 3, name: "Valor social", text: "O dom do tipo serve o entorno sem exigir palco." },
      ],
    },
    {
      id: "media",
      label: "Faixa média",
      levels: [
        { n: 4, name: "Desequilíbrio", text: "A identificação com o tipo começa a endurecer." },
        { n: 5, name: "Controle interpessoal", text: "O outro vira peça da estratégia do ego." },
        { n: 6, name: "Supercompensação", text: "Mais do mesmo: o remédio do tipo vira overdose." },
      ],
    },
    {
      id: "nao-saudavel",
      label: "Faixa não-saudável",
      levels: [
        { n: 7, name: "Violação", text: "Limites caem. A defesa fere quem está perto, e a si." },
        { n: 8, name: "Compulsão", text: "O padrão roda sozinho, com pouco acesso à escolha." },
        { n: 9, name: "Destruição patológica", text: "Colapso da estrutura. Aqui o mapa pede ajuda clínica, não só estudo." },
      ],
    },
  ],
};

export const whatIsAType = {
  formula:
    "Um tipo + uma asa + uma variante instintiva (subtipo) + um nível de desenvolvimento + o movimento de integração ou desintegração + o humor do dia.",
  note: "Não existe tipo melhor ou pior. A numeração não é ranking. Cada tipo é único. Ninguém é um tipo: a pessoa está um tipo.",
};

export const essencePersonality = {
  essence:
    "Aquilo que realmente somos no sentido espiritual. O verdadeiro eu: pleno, curador, não fabricado.",
  personality:
    "As máscaras que assumimos para proteger a essência. Crenças, medos, defesas, compensações.",
  bridge:
    "Ao crescer, criamos uma camada entre essência e personalidade que limita e adormece o verdadeiro eu. O Eneagrama descreve essa camada, não a substitui por um diagnóstico.",
};

export function wingsFor(id: TypeId): WingSide[] {
  return typeById[id].wings.map((w) => ({
    id: w.id,
    name: w.name,
    text: w.text,
  }));
}

export function triadOf(id: TypeId) {
  if (triads.instinto.types.includes(id)) return triads.instinto;
  if (triads.sentimento.types.includes(id)) return triads.sentimento;
  return triads.pensamento;
}

export type MapTopic = "tipo" | "triade" | "variante" | "nivel" | "asa" | "flecha";

export function serializeMap(topic: MapTopic, tipo?: number) {
  if (topic === "triade") {
    return {
      topic,
      triads,
      otherTriads,
      note: "Helen Palmer lê as tríades como centros de inteligência (corpo, coração, mente). O recorte UFRGS acrescenta tempo (presente, passado, futuro) e o sentimento subjacente (raiva, vergonha, medo).",
    };
  }
  if (topic === "variante") {
    return {
      topic,
      variants,
      note: "Pessoas do mesmo tipo diferem no comportamento segundo o instinto mais marcado. A essência do tipo, a motivação, continua a mesma.",
    };
  }
  if (topic === "nivel") {
    return {
      topic,
      ...healthLevels,
      caution:
        "O teste de 135 frases não mede o nível. Use o vocabulário para conversar sobre o movimento, sem diagnosticar patologia.",
    };
  }
  if (topic === "asa") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general:
        "Asas são os vizinhos no círculo. Elas coloram o tipo, não o substituem. No teste, a asa provável é o vizinho com maior pontuação. Empate: asas equilibradas.",
      forType: id
        ? {
            type: id,
            name: typeById[id].name,
            wings: wingsFor(id),
          }
        : Object.fromEntries(
            ([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((n) => [
              n,
              { name: typeById[n].name, wings: wingsFor(n) },
            ]),
          ),
    };
  }
  if (topic === "flecha") {
    const id = tipo && tipo >= 1 && tipo <= 9 ? (tipo as TypeId) : undefined;
    return {
      topic,
      general:
        "Flechas descrevem movimento, não destino. Integração (crescimento) vai contra as setas clássicas do símbolo. Desintegração (stress) segue as setas. Riso e Hudson mapeiam nove níveis dentro de cada tipo; as flechas são o deslocamento para o tipo de segurança ou de stress.",
      forType: id ? { type: id, name: typeById[id].name, ...arrowsByType[id] } : arrowsByType,
    };
  }
  return {
    topic: "tipo",
    whatIsAType,
    essencePersonality,
    formulaNote: whatIsAType.formula,
  };
}
