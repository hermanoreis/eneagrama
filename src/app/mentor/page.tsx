import { redirect } from "next/navigation";
import { MentorClient } from "../../components/MentorClient";
import type { MentorUIMessage } from "../../lib/mentor/agent";
import { loadMentorMessages } from "../../lib/mentor/store";
import { getLatestResult } from "../../lib/results";
import { getSession } from "../../lib/session";
import { typeById } from "../../data/types";

export const metadata = { title: "Mentor — Eneagrama" };

export default async function MentorPage() {
  const session = await getSession();
  if (!session?.user) redirect("/entrar?next=/mentor");

  const [messages, latest] = await Promise.all([
    loadMentorMessages(session.user.id),
    getLatestResult(session.user.id),
  ]);
  const profile = latest
    ? typeById[latest.primaryType as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]
    : null;

  return (
    <MentorClient
      initialMessages={messages as MentorUIMessage[]}
      primaryLabel={profile ? `${profile.id} · ${profile.name}` : null}
      configured={Boolean(process.env.OPENROUTER_API_KEY)}
    />
  );
}
