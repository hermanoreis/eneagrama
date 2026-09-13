import { InferAgentUIMessage, stepCountIs, tool, ToolLoopAgent } from "ai";
import { z } from "zod";
import { getPack } from "../../data/pack";
import type { MapTopic, TypeId } from "../../data/schema";
import type { Locale } from "../../i18n/config";
import { interpolate } from "../../i18n/format";
import { href } from "../../i18n/pathnames";
import { getMessages } from "../../messages";
import { getLatestResult } from "../results";
import { getOpenRouter, MENTOR_MODEL } from "../openrouter";
import { resultLeaders, wingOf, type TypeScore } from "../quiz";
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
  leadingTypes: number[];
  wing: MentorWing | null;
  scores: { id: number; name: string; score: number; max: number; percent: number }[];
};

const MAP_TOPICS = ["tipo", "triade", "variante", "nivel", "asa", "flecha"] as const;

export function mentorInstructions(portrait: MentorPortrait, locale: Locale) {
  const prompt = getMessages(locale).mentorPrompt;
  const ranking = portrait.hasResult
    ? portrait.scores.map((s) => `${s.id} ${s.name}: ${s.score}/${s.max} (${s.percent}%)`).join("\n")
    : prompt.noResult;

  const typeLine =
    portrait.leadingTypes.length > 1
      ? interpolate(prompt.tie, { ids: portrait.leadingTypes.join(", ") })
      : portrait.primaryType
        ? interpolate(prompt.primary, { id: portrait.primaryType })
        : interpolate(prompt.invite, { testPath: href(locale, "test") });

  const wingLine = !portrait.wing
    ? prompt.wingNone
    : portrait.wing.tied
      ? interpolate(prompt.wingTied, { left: portrait.wing.left, right: portrait.wing.right })
      : interpolate(prompt.wingOf, { id: portrait.wing.id ?? "", name: portrait.wing.name ?? "" });

  return `${prompt.languageLine}

${portrait.name} (${portrait.email}).
${typeLine}
${wingLine}

${ranking}

${prompt.how}`;
}

export function createMentorAgent(portrait: MentorPortrait, locale: Locale) {
  const prompt = getMessages(locale).mentorPrompt;
  const pack = getPack(locale);
  return new ToolLoopAgent({
    model: getOpenRouter()(MENTOR_MODEL),
    instructions: mentorInstructions(portrait, locale),
    stopWhen: stepCountIs(8),
    tools: {
      consultarTipo: tool({
        description: prompt.toolType,
        inputSchema: z.object({
          tipo: z.number().int().min(1).max(9),
        }),
        execute: async ({ tipo }) => {
          if (!isTypeId(tipo)) return { error: prompt.invalidType };
          return serializeType(tipo, locale);
        },
      }),
      consultarMapa: tool({
        description: prompt.toolMap,
        inputSchema: z.object({
          conceito: z.enum(MAP_TOPICS),
          tipo: z.number().int().min(1).max(9).optional(),
        }),
        execute: async ({ conceito, tipo }) => pack.serializeMap(conceito as MapTopic, tipo),
      }),
      retratoDoUsuario: tool({
        description: prompt.toolPortrait,
        inputSchema: z.object({}),
        execute: async () => ({
          portrait,
          tipos: listTypeNames(locale),
        }),
      }),
    },
  });
}

export type MentorUIMessage = InferAgentUIMessage<ReturnType<typeof createMentorAgent>>;

function wingFromScores(primaryType: number | null, scores: TypeScore[], locale: Locale): MentorWing | null {
  if (!primaryType || !isTypeId(primaryType) || scores.length === 0) return null;
  const pack = getPack(locale);
  const w = wingOf(primaryType, scores);
  return {
    id: w.id,
    name: w.id ? pack.typeById[w.id].name : null,
    tied: w.tied,
    left: w.left,
    right: w.right,
  };
}

export async function portraitForUser(
  user: { id: string; name?: string | null; email: string },
  locale: Locale,
) {
  const latest = await getLatestResult(user.id);
  const storedScores = (latest?.scores ?? []) as TypeScore[];
  const pack = getPack(locale);
  const prompt = getMessages(locale).mentorPrompt;
  const leaders = resultLeaders(storedScores);
  const scores = leaders.length
    ? storedScores.map((score) => ({
        ...score,
        name: pack.typeById[score.id as TypeId]?.name ?? score.name,
      }))
    : [];
  const primaryType = leaders.length === 1 ? leaders[0].id : null;
  return {
    name: user.name || prompt.you,
    email: user.email,
    hasResult: leaders.length > 0,
    primaryType,
    leadingTypes: leaders.map((type) => type.id),
    wing: wingFromScores(primaryType, scores, locale),
    scores,
  } satisfies MentorPortrait;
}
