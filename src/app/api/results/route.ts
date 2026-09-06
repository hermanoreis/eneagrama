import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { getLatestResult, listResults, saveResult } from "../../../lib/results";
import type { TypeScore } from "../../../lib/quiz";

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
  const body = (await request.json()) as {
    scores?: TypeScore[];
    answers?: Record<number, number>;
    primaryType?: number;
  };
  if (!body.scores || !body.answers || !body.primaryType) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const saved = await saveResult({
    userId: session.user.id,
    scores: body.scores,
    answers: body.answers,
    primaryType: body.primaryType,
  });
  return NextResponse.json({ id: saved.id, createdAt: saved.created_at });
}
