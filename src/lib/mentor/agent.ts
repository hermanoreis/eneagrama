import { InferAgentUIMessage, stepCountIs, tool, ToolLoopAgent } from "ai";
import { z } from "zod";
import { serializeMap, type MapTopic } from "../../data/map";
import { typeById } from "../../data/types";
import { getLatestResult } from "../results";
import { getOpenRouter, MENTOR_MODEL } from "../openrouter";
import { wingOf, type TypeScore } from "../quiz";
import { isTypeId, listTypeNames, serializeType } from "./profile";

export type MentorWing = {
  id: number | null;
  name: string | null;
  tied: boolean;
  left: number;
  right: number;
};

export type MentorPortrait = {
  name: string;
  email: string;
  hasResult: boolean;
  primaryType: number | null;
  wing: MentorWing | null;
  scores: { id: number; name: string; score: number; max: number; percent: number }[];
};

const MAP_TOPICS = ["tipo", "triade", "variante", "nivel", "asa", "flecha"] as const;

function mentorInstructions(portrait: MentorPortrait) {
  const ranking = portrait.hasResult
    ? portrait.scores
        .map((s) => `${s.id} ${s.name}: ${s.score}/${s.max} (${s.percent}%)`)
        .join("\n")
    : "Ainda não há resultado de teste salvo.";

  const typeLine = portrait.primaryType
    ? `Tipo mais alto: ${portrait.primaryType}.`
    : "A pessoa ainda não fez o teste. Convide com leveza a fazê-lo em /teste, mas já converse.";

  const wingLine = !portrait.wing
    ? "Asa ainda não calculada."
    : portrait.wing.tied
      ? `Asas equilibradas entre os vizinhos ${portrait.wing.left} e ${portrait.wing.right}.`
      : `Asa mais alta: ${portrait.wing.id} ${portrait.wing.name}.`;

  return `Você é um mentor-coach de Eneagrama. Fala em português do Brasil, com calor, clareza e sem jargão vazio.

Quem conversa: ${portrait.name} (${portrait.email}).
${typeLine}
${wingLine}

Ranking do último teste:
${ranking}

Como atuar:
- Ajude a pessoa a se entender no espiritual (essência, cura, mensagem interior), no pessoal (relações, medo, desejo, práticas) e no trabalho (liderança, vocação, pontos fortes e a desenvolver).
- Use o Eneagrama como mapa, não como sentença. Ninguém é um tipo: a pessoa está um tipo.
- Nenhum tipo é melhor que outro. Não estereotipe, não diagnostique patologia, não substitua terapia.
- Ofereça uma pergunta ou um exercício concreto quando couber. Seja específico para o tipo, para a asa e para o que a pessoa trouxe.
- Se ela falar de outro tipo (chefe, par, filho), use consultarTipo e ensine a conversar com aquele mapa.
- Quando o assunto for tríade, variante instintiva, nível de desenvolvimento, asa ou flecha, chame consultarMapa. Não recete um subtipo nem um nível a partir só das 135 frases. Use o vocabulário para perguntar e iluminar.
- Quando precisar de detalhe de um tipo, chame consultarTipo. Quando quiser o retrato atual, chame retratoDoUsuario.
- Se citar Palmer ou Riso e Hudson, cite a linhagem. Não recete capítulo de livro.
- Respostas curtas o bastante para caber numa conversa: em geral 1 a 3 parágrafos, mais uma prática ou pergunta.`;
}

export function createMentorAgent(portrait: MentorPortrait) {
  return new ToolLoopAgent({
    model: getOpenRouter()(MENTOR_MODEL),
    instructions: mentorInstructions(portrait),
    stopWhen: stepCountIs(8),
    tools: {
      consultarTipo: tool({
        description:
          "Lê o perfil completo de um tipo do Eneagrama (1 a 9): medo, desejo, asas, flechas, práticas, liderança.",
        inputSchema: z.object({
          tipo: z.number().int().min(1).max(9),
        }),
        execute: async ({ tipo }) => {
          if (!isTypeId(tipo)) return { error: "Tipo inválido" };
          return serializeType(tipo);
        },
      }),
      consultarMapa: tool({
        description:
          "Lê o mapa conceitual: o que é um tipo, tríades, variantes instintivas, níveis, asas e flechas. Passe tipo quando o recorte for de um número específico.",
        inputSchema: z.object({
          conceito: z.enum(MAP_TOPICS),
          tipo: z.number().int().min(1).max(9).optional(),
        }),
        execute: async ({ conceito, tipo }) => serializeMap(conceito as MapTopic, tipo),
      }),
      retratoDoUsuario: tool({
        description: "Devolve o ranking do último teste, a asa calculada e a lista dos nove tipos.",
        inputSchema: z.object({}),
        execute: async () => ({
          portrait,
          tipos: listTypeNames(),
        }),
      }),
    },
  });
}

export type MentorUIMessage = InferAgentUIMessage<ReturnType<typeof createMentorAgent>>;

function wingFromScores(primaryType: number | null, scores: TypeScore[]): MentorWing | null {
  if (!primaryType || !isTypeId(primaryType) || scores.length === 0) return null;
  const w = wingOf(primaryType, scores);
  return {
    id: w.id,
    name: w.id ? typeById[w.id].name : null,
    tied: w.tied,
    left: w.left,
    right: w.right,
  };
}

export async function portraitForUser(user: { id: string; name?: string | null; email: string }) {
  const latest = await getLatestResult(user.id);
  const scores = (latest?.scores ?? []) as TypeScore[];
  return {
    name: user.name || "você",
    email: user.email,
    hasResult: Boolean(latest),
    primaryType: latest?.primaryType ?? null,
    wing: wingFromScores(latest?.primaryType ?? null, scores),
    scores,
  } satisfies MentorPortrait;
}
