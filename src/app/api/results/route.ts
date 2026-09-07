import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { getLatestResult, listResults, saveResult } from "../../../lib/results";
import { completeAnswers, scoreTypes } from "../../../lib/quiz";

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const latest = new URL(request.url).searchParams.get("latest");
  if (latest) {
    return NextResponse.json({ result: await getLatestResult(session.user.id) });
  }
  return NextResponse.json({ results: await listResults(session.user.id) });
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const body: unknown = await request.json().catch(() => null);
  const answers = completeAnswers(body && typeof body === "object" ? (body as { answers?: unknown }).answers : null);
  if (!answers) return NextResponse.json({ error: "Responda às 135 afirmativas antes de salvar o resultado." }, { status: 400 });
  const scores = scoreTypes(answers);
  const saved = await saveResult({
    userId: session.user.id,
    scores,
    answers,
    // Kept for compatibility with the existing table. All presentations derive
    // the full set of tied leaders from scores instead of using this field.
    primaryType: scores[0].id,
  });
  return NextResponse.json({ id: saved.id, createdAt: saved.created_at });
}
