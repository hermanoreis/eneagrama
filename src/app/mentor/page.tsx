import { redirect } from "next/navigation";
import { MentorClient } from "../../components/MentorClient";
import type { MentorUIMessage } from "../../lib/mentor/agent";
import { loadMentorMessages } from "../../lib/mentor/store";
import { getLatestResult } from "../../lib/results";
import { getSession } from "../../lib/session";
import { typeById, type TypeId } from "../../data/types";
import { wingOf, type TypeScore } from "../../lib/quiz";

export const metadata = { title: "Mentor · Eneagrama" };

export default async function MentorPage() {
  const session = await getSession();
  if (!session?.user) redirect("/entrar?next=/mentor");

  const [messages, latest] = await Promise.all([
    loadMentorMessages(session.user.id),
    getLatestResult(session.user.id),
  ]);
  const profile = latest
    ? typeById[latest.primaryType as TypeId]
    : null;
  const wing =
    profile && latest
      ? wingOf(profile.id, latest.scores as TypeScore[])
      : null;
  const primaryLabel = profile
    ? wing?.tied
      ? `${profile.id} · ${profile.name}, asas equilibradas`
      : wing?.id
        ? `${profile.id}w${wing.id} · ${profile.name}`
        : `${profile.id} · ${profile.name}`
    : null;

  return (
    <MentorClient
      initialMessages={messages as MentorUIMessage[]}
      primaryLabel={primaryLabel}
      configured={Boolean(process.env.OPENROUTER_API_KEY)}
    />
  );
}
