import { redirect } from "next/navigation";
import { MentorClient } from "@/components/MentorClient";
import { getPack } from "@/data/pack";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import type { MentorUIMessage } from "@/lib/mentor/agent";
import { loadMentorMessages } from "@/lib/mentor/store";
import { getLatestResult } from "@/lib/results";
import { getSession } from "@/lib/session";
import { resultLeaders } from "@/lib/quiz";
import { privateMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  return privateMetadata(getMessages(locale).mentor.title);
}

export default async function MentorPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const session = await getSession();
  if (!session?.user) redirect(href(locale, "signIn", { next: href(locale, "mentor") }));

  const [messages, latest] = await Promise.all([
    loadMentorMessages(session.user.id),
    getLatestResult(session.user.id),
  ]);
  const m = getMessages(locale);
  const pack = getPack(locale);
  const leaders = latest ? resultLeaders(latest.scores) : [];
  const primaryLabel = leaders.length
    ? (leaders.length > 1 ? m.mentor.tieLabel : "") +
      leaders.map((type) => `${type.id} · ${pack.typeById[type.id].name}`).join(", ")
    : null;

  return (
    <MentorClient
      initialMessages={messages as MentorUIMessage[]}
      primaryLabel={primaryLabel}
      configured={Boolean(process.env.OPENROUTER_API_KEY)}
    />
  );
}
