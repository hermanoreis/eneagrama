import { InferAgentUIMessage, stepCountIs, tool, ToolLoopAgent } from "ai";
import { z } from "zod";
import { getLatestResult } from "../results";
import { getOpenRouter, MENTOR_MODEL } from "../openrouter";
import { isTypeId, listTypeNames, serializeType } from "./profile";

export type MentorPortrait = {
  name: string;
  email: string;
  hasResult: boolean;
  primaryType: number | null;
  scores: { id: number; name: string; score: number; max: number; percent: number }[];
};

function mentorInstructions(portrait: MentorPortrait) {
  const ranking = portrait.hasResult
    ? portrait.scores
        .map((s) => `${s.id} ${s.name}: ${s.score}/${s.max} (${s.percent}%)`)
        .join("\n")
    : "Ainda não há resultado de teste salvo.";

  const typeLine = portrait.primaryType
    ? `Tipo mais alto: ${portrait.primaryType}.`
    : "A pessoa ainda não fez o teste. Convide com leveza a fazê-lo em /teste, mas já converse.";

  return `Você é um mentor-coach de Eneagrama. Fala em português do Brasil, com calor, clareza e sem jargão vazio.

Quem conversa: ${portrait.name} (${portrait.email}).
${typeLine}

Ranking do último teste:
${ranking}

Como atuar:
- Ajude a pessoa a se entender no espiritual (essência, cura, mensagem interior), no pessoal (relações, medo, desejo, práticas) e no trabalho (liderança, vocação, pontos fortes e a desenvolver).
- Use o Eneagrama como mapa, não como sentença. Ninguém é um tipo: a pessoa está um tipo.
- Nenhum tipo é melhor que outro. Não estereotipe, não diagnostique patologia, não substitua terapia.
- Ofereça uma pergunta ou um exercício concreto quando couber. Seja específico para o tipo e para o que a pessoa trouxe.
- Se ela falar de outro tipo (chefe, par, filho), use consultarTipo e ensine a conversar com aquele mapa.
- Quando precisar de detalhe de um tipo, chame consultarTipo. Quando quiser o retrato atual, chame retratoDoUsuario.
- Respostas curtas o bastante para caber numa conversa: em geral 1 a 3 parágrafos, mais uma prática ou pergunta.`;
}

export function createMentorAgent(portrait: MentorPortrait) {
  return new ToolLoopAgent({
    model: getOpenRouter()(MENTOR_MODEL),
    instructions: mentorInstructions(portrait),
    stopWhen: stepCountIs(6),
    tools: {
      consultarTipo: tool({
        description:
          "Lê o perfil completo de um tipo do Eneagrama (1 a 9): medo, desejo, asas, práticas, liderança.",
        inputSchema: z.object({
          tipo: z.number().int().min(1).max(9),
        }),
        execute: async ({ tipo }) => {
          if (!isTypeId(tipo)) return { error: "Tipo inválido" };
          return serializeType(tipo);
        },
      }),
      retratoDoUsuario: tool({
        description: "Devolve o ranking do último teste e a lista dos nove tipos.",
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

export async function portraitForUser(user: { id: string; name?: string | null; email: string }) {
  const latest = await getLatestResult(user.id);
  return {
    name: user.name || "você",
    email: user.email,
    hasResult: Boolean(latest),
    primaryType: latest?.primaryType ?? null,
    scores: latest?.scores ?? [],
  } satisfies MentorPortrait;
}
