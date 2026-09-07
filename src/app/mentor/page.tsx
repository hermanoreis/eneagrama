import { privateMetadata } from "../../lib/seo";
import { redirect } from "next/navigation";
import { MentorClient } from "../../components/MentorClient";
import type { MentorUIMessage } from "../../lib/mentor/agent";
import { loadMentorMessages } from "../../lib/mentor/store";
import { getLatestResult } from "../../lib/results";
import { getSession } from "../../lib/session";
import { typeById } from "../../data/types";
import { resultLeaders } from "../../lib/quiz";

export const metadata = privateMetadata("Mentor com IA");

export default async function MentorPage() {
  const session = await getSession();
  if (!session?.user) redirect("/entrar?next=/mentor");

  const [messages, latest] = await Promise.all([
    loadMentorMessages(session.user.id),
    getLatestResult(session.user.id),
  ]);
  const leaders = latest ? resultLeaders(latest.scores) : [];
  const primaryLabel = leaders.length
    ? (leaders.length > 1 ? "Empate: " : "") + leaders.map((type) => `${type.id} · ${typeById[type.id].name}`).join(", ")
    : null;

  return (
    <MentorClient
      initialMessages={messages as MentorUIMessage[]}
      primaryLabel={primaryLabel}
      configured={Boolean(process.env.OPENROUTER_API_KEY)}
    />
  );
}
