"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { TypeId } from "@/data/schema";
import { TypeAvatar } from "@/components/TypeAvatar";
import { PaperMotion } from "@/components/PaperMotion";
import { VersusDuel } from "@/components/VersusDuel";
import { WingCallout } from "@/components/WingCallout";
import { LikertEdit } from "@/components/LikertEdit";
import { useI18n } from "@/i18n/provider";
import {
  completeAnswers,
  loadAnswers,
  answeredCount,
  scoreTypes,
  resultLeaders,
  wingOf,
  subscribeAnswers,
  serverAnswersSnapshot,
  saveAnswers,
  tieReviewQuestions,
  type Answers,
} from "@/lib/quiz";
import { createCoalescedPersister } from "@/lib/persist-result";
import { loadSavedResultId, saveSavedResultId } from "@/lib/saved-result-id";

type SaveState = { answers: Answers; status: "saved" | "error" } | null;

const EMPTY_ANSWERS: Answers = {};

export function ResultClient() {
  const { messages: m, pack, href, t } = useI18n();
  const typeById = pack.typeById;
  const questions = pack.questions;
  const stored = useSyncExternalStore(subscribeAnswers, loadAnswers, serverAnswersSnapshot);
  const [draft, setDraft] = useState<Answers | null>(null);
  const [storageError, setStorageError] = useState(false);
  const answers = draft ?? stored ?? EMPTY_ANSWERS;
  const [saveState, setSaveState] = useState<SaveState>(null);
  const [attempt, setAttempt] = useState(0);
  const resultId = useRef<string | null>(loadSavedResultId());
  const persister = useRef(
    createCoalescedPersister<Answers>(async (payload) => {
      const res = await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: payload, resultId: resultId.current }),
      });
      if (!res.ok) return false;
      const data: unknown = await res.json().catch(() => null);
      const id = data && typeof data === "object" && "id" in data && typeof data.id === "string" ? data.id : null;
      if (id) {
        resultId.current = id;
        saveSavedResultId(id);
      }
      return true;
    }),
  );

  useEffect(() => {
    if (!completeAnswers(answers)) return;
    const timer = window.setTimeout(() => {
      persister.current.enqueue(answers, (payload, ok, isLatest) => {
        if (isLatest) setSaveState({ answers: payload, status: ok ? "saved" : "error" });
      });
    }, draft ? 450 : 0);
    return () => window.clearTimeout(timer);
  }, [answers, attempt, draft]);

  const names = useMemo(
    () => Object.fromEntries(pack.types.map((type) => [type.id, type.name])) as Record<TypeId, string>,
    [pack.types],
  );
  const scores = scoreTypes(answers, names);
  const leaders = resultLeaders(scores);
  const tied = leaders.length > 1;
  const leaderIds = leaders.map((leader) => leader.id);
  const leaderKey = leaderIds.join("-");
  const reviewItems = useMemo(() => {
    const ids = leaderKey
      .split("-")
      .map(Number)
      .filter((id): id is TypeId => id >= 1 && id <= 9);
    if (ids.length < 2) return [];
    return tieReviewQuestions(answers, ids, questions);
    // Freeze the phrase list while the same types remain tied so items do not swap mid-edit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderKey, questions]);

  if (!stored && !draft) return <p role="status">{m.result.reading}</p>;
  const done = answeredCount(answers);
  if (done < questions.length) {
    return (
      <section className="max-w-2xl space-y-5">
        <h1 className="font-display text-4xl">{done ? m.result.incompleteH1Done : m.result.incompleteH1Empty}</h1>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          {done ? t(m.result.incompleteDone, { done }) : m.result.incompleteEmpty}
        </p>
        <Link href={href("test")} className="btn-primary">
          {done ? m.result.continueTest : m.result.startTest}
        </Link>
      </section>
    );
  }

  const profile = typeById[leaders[0].id];
  const wing = tied ? null : wingOf(profile.id, scores);
  const status = saveState?.answers === answers ? saveState.status : "saving";

  function setAnswer(id: number, value: number) {
    const next = { ...answers, [id]: value };
    setDraft(next);
    try {
      saveAnswers(next);
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }

  return (
    <div className="space-y-10">
      <div role="status" className="rounded-2xl bg-[color:var(--wash)] px-5 py-4 text-sm">
        {status === "saved" ? (
          <>
            {m.result.saved}{" "}
            <Link href={href("account")} className="underline underline-offset-4">
              {m.result.goAccount}
            </Link>
          </>
        ) : status === "error" ? (
          <>
            <p>{m.result.saveError}</p>
            <button
              type="button"
              className="mt-3 underline underline-offset-4"
              onClick={() => {
                setSaveState(null);
                setAttempt((value) => value + 1);
              }}
            >
              {m.result.retrySave}
            </button>
          </>
        ) : (
          m.result.saving
        )}
      </div>
      {storageError ? (
        <p role="alert" className="rounded-xl bg-[color:var(--wash)] p-4">
          {m.result.reviewStorage}{" "}
          <button
            type="button"
            className="underline underline-offset-4"
            onClick={() => {
              try {
                saveAnswers(answers);
                setStorageError(false);
              } catch {
                setStorageError(true);
              }
            }}
          >
            {m.result.retryAnswers}
          </button>
        </p>
      ) : null}
      <header className="max-w-3xl space-y-4">
        {tied ? (
          <>
            <h1 className="font-display text-5xl">{m.result.tieH1}</h1>
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">{m.result.tieLead}</p>
          </>
        ) : (
          <>
            <p className="text-sm text-[color:var(--mute)]">{m.result.leadLabel}</p>
            <h1 className="font-display text-5xl">
              {profile.id} · {profile.name}
            </h1>
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">{m.result.uniqueLead}</p>
          </>
        )}
        <p className="text-sm text-[color:var(--mute)]">{m.result.notDiagnosis}</p>
      </header>
      {tied ? <VersusDuel ids={leaderIds} /> : null}
      <div className={`grid gap-5 ${tied ? "sm:grid-cols-2" : "md:grid-cols-[1fr_220px]"}`}>
        {leaders.map((leader) => (
          <article key={leader.id} className="rounded-3xl border border-[color:var(--line)] p-6">
            <h2 className="font-display text-3xl">
              {leader.id} · {typeById[leader.id].name}
            </h2>
            <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{pack.typeIntroductions[leader.id]}</p>
            <Link href={href("type", { id: leader.id })} className="mt-5 inline-block underline underline-offset-4">
              {t(m.result.meetType, { id: leader.id })}
            </Link>
          </article>
        ))}
        {!tied ? (
          <PaperMotion>
            <TypeAvatar id={profile.id} size={220} eager />
          </PaperMotion>
        ) : null}
      </div>
      {tied ? (
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-display text-3xl">{m.result.reviewH2}</h2>
            <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.result.reviewP}</p>
          </div>
          {leaderIds.map((id) => {
            const items = reviewItems.filter((question) => question.type === id);
            if (!items.length) return null;
            return (
              <div key={id} className="space-y-4">
                <h3 className="font-display text-2xl">
                  {id} · {typeById[id].name}
                </h3>
                <ol className="space-y-8">
                  {items.map((question) => (
                    <LikertEdit
                      key={question.id}
                      question={question}
                      value={answers[question.id]}
                      onChange={(value) => setAnswer(question.id, value)}
                    />
                  ))}
                </ol>
              </div>
            );
          })}
        </section>
      ) : null}
      {wing ? <WingCallout primary={profile.id} wing={wing} /> : null}
      <section>
        <h2 className="font-display text-3xl">{m.result.distribution}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[color:var(--ink-soft)]">{m.result.distributionP}</p>
        <p className="mt-2 text-sm text-[color:var(--mute)]">{m.result.distributionNote}</p>
        <ol className="mt-6 space-y-4">
          {scores.map((score) => {
            const lead = leaders.some((type) => type.id === score.id);
            return (
              <li key={score.id}>
                <Link href={href("type", { id: score.id })} className="block rounded-sm">
                  <div className="mb-2 flex justify-between gap-4 text-sm">
                    <span className={lead ? "font-semibold" : ""}>
                      {score.id} · {score.name}
                      {lead ? ` · ${m.result.highest}` : ""}
                    </span>
                    <span className="shrink-0 tabular-nums">{score.score}/75</span>
                  </div>
                  <div aria-hidden className="h-2 rounded-full bg-[color:var(--wash)]">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${score.percent}%`, background: lead ? "var(--accent)" : "var(--ink)", opacity: lead ? 1 : 0.45 }}
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
        <Link href={href("about")} className="mt-5 inline-block text-sm underline underline-offset-4">
          {m.result.limitsLink}
        </Link>
      </section>
      <div className="flex flex-wrap gap-3">
        <Link href={href("types")} className="btn-ghost">
          {m.result.compare}
        </Link>
        {status === "saved" ? (
          <Link href={href("mentor")} className="btn-primary">
            {m.result.talkMentor}
          </Link>
        ) : null}
        <Link href={href("workbook")} className="btn-ghost">
          {m.result.pickExercise}
        </Link>
      </div>
    </div>
  );
}
