"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { typeById, type TypeId } from "../data/types";
import { typeIntroductions } from "../data/copy";
import { TypeAvatar } from "./TypeAvatar";
import { PaperMotion } from "./PaperMotion";
import { VersusDuel } from "./VersusDuel";
import { WingCallout } from "./WingCallout";
import { LikertEdit } from "./LikertEdit";
import {
  completeAnswers, loadAnswers, answeredCount, scoreTypes, resultLeaders,
  wingOf, subscribeAnswers, serverAnswersSnapshot, saveAnswers, tieReviewQuestions,
  type Answers,
} from "../lib/quiz";
import { createCoalescedPersister } from "../lib/persist-result";
import { loadSavedResultId, saveSavedResultId } from "../lib/saved-result-id";
import { questions } from "../data/questions";

type SaveState = { answers: Answers; status: "saved" | "error" } | null;

const EMPTY_ANSWERS: Answers = {};

export function ResultClient() {
  const stored = useSyncExternalStore(subscribeAnswers, loadAnswers, serverAnswersSnapshot);
  const [draft, setDraft] = useState<Answers | null>(null);
  const [storageError, setStorageError] = useState(false);
  const answers = draft ?? stored ?? EMPTY_ANSWERS;
  const [saveState, setSaveState] = useState<SaveState>(null);
  const [attempt, setAttempt] = useState(0);
  const resultId = useRef<string | null>(loadSavedResultId());
  const persister = useRef(createCoalescedPersister<Answers>(async (payload) => {
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
  }));

  useEffect(() => {
    if (!completeAnswers(answers)) return;
    const timer = window.setTimeout(() => {
      persister.current.enqueue(answers, (payload, ok, isLatest) => {
        if (isLatest) setSaveState({ answers: payload, status: ok ? "saved" : "error" });
      });
    }, draft ? 450 : 0);
    return () => window.clearTimeout(timer);
  }, [answers, attempt, draft]);

  const scores = scoreTypes(answers);
  const leaders = resultLeaders(scores);
  const tied = leaders.length > 1;
  const leaderIds = leaders.map((leader) => leader.id);
  const leaderKey = leaderIds.join("-");
  const reviewItems = useMemo(() => {
    const ids = leaderKey.split("-").map(Number).filter((id): id is TypeId => id >= 1 && id <= 9);
    if (ids.length < 2) return [];
    return tieReviewQuestions(answers, ids);
    // Freeze the phrase list while the same types remain tied so items do not swap mid-edit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaderKey]);

  if (!stored && !draft) return <p role="status">Lendo suas respostas…</p>;
  const done = answeredCount(answers);
  if (done < questions.length) {
    return (
      <section className="max-w-2xl space-y-5">
        <h1 className="font-display text-4xl">{done ? "Vamos completar o teste?" : "Seu resultado começa com suas respostas"}</h1>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{done ? `Você respondeu ${done} de 135 afirmativas. Termine o questionário para comparar os tipos com todas as respostas.` : "Ainda não há respostas neste navegador. Comece pelo teste para explorar os nove tipos."}</p>
        <Link href="/teste" className="btn-primary">{done ? "Continuar o teste" : "Fazer o teste gratuito"}</Link>
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
        {status === "saved" ? <>Resultado salvo na sua conta. <Link href="/conta" className="underline underline-offset-4">Ir para minha conta</Link></> : status === "error" ? (
          <><p>Não conseguimos guardar este resultado na sua conta. Suas respostas continuam neste navegador.</p><button type="button" className="mt-3 underline underline-offset-4" onClick={() => { setSaveState(null); setAttempt((value) => value + 1); }}>Tentar salvar novamente</button></>
        ) : "Guardando seu resultado na conta…"}
      </div>
      {storageError ? (
        <p role="alert" className="rounded-xl bg-[color:var(--wash)] p-4">
          Não foi possível guardar as notas revistas neste navegador.{" "}
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
            Tentar guardar respostas
          </button>
        </p>
      ) : null}
      <header className="max-w-3xl space-y-4">
        {tied ? (
          <>
            <h1 className="font-display text-5xl">Opa! Houve um empate em primeiro lugar</h1>
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Você é bastante versátil, hein? Que tal rever algumas das perguntas e desempatar, para ter clareza sobre o seu tipo?
            </p>
          </>
        ) : (
          <>
            <p className="text-sm text-[color:var(--mute)]">O tipo com mais pontos nas suas respostas</p>
            <h1 className="font-display text-5xl">{profile.id} · {profile.name}</h1>
            <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">Comece por esta descrição e compare com situações da sua vida. Você também pode explorar os outros tipos que pontuaram mais.</p>
          </>
        )}
        <p className="text-sm text-[color:var(--mute)]">O resultado é um ponto de partida para reflexão. Não é um diagnóstico nem descreve tudo sobre você.</p>
      </header>
      {tied ? (
        <VersusDuel ids={leaderIds} />
      ) : null}
      <div className={`grid gap-5 ${tied ? "sm:grid-cols-2" : "md:grid-cols-[1fr_220px]"}`}>
        {leaders.map((leader) => (
          <article key={leader.id} className="rounded-3xl border border-[color:var(--line)] p-6">
            <h2 className="font-display text-3xl">{leader.id} · {typeById[leader.id].name}</h2>
            <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{typeIntroductions[leader.id]}</p>
            <Link href={`/tipos/${leader.id}`} className="mt-5 inline-block underline underline-offset-4">Conhecer o tipo {leader.id}</Link>
          </article>
        ))}
        {!tied ? <PaperMotion><TypeAvatar id={profile.id} size={220} eager /></PaperMotion> : null}
      </div>
      {tied ? (
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-display text-3xl">Reveja algumas frases</h2>
            <p className="leading-relaxed text-[color:var(--ink-soft)]">
              Estas já estavam no teste: são as que mais empurraram o empate. A escala é a mesma, de 1 a 5.
              Cada mudança recalcula na hora. Se as somas deixarem de empatar, aparece um tipo principal e a asa.
              Se não mudar o suficiente, o empate permanece.
            </p>
          </div>
          {leaderIds.map((id) => {
            const items = reviewItems.filter((question) => question.type === id);
            if (!items.length) return null;
            return (
              <div key={id} className="space-y-4">
                <h3 className="font-display text-2xl">{id} · {typeById[id].name}</h3>
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
        <h2 className="font-display text-3xl">Como suas respostas se distribuíram</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[color:var(--ink-soft)]">A pontuação reúne suas respostas às afirmativas de cada tipo. Uma pontuação mais alta indica maior concordância com essas frases. Não é uma porcentagem de quem você é.</p>
        <p className="mt-2 text-sm text-[color:var(--mute)]">Cada tipo tem 15 afirmativas. A pontuação vai de 15 a 75.</p>
        <ol className="mt-6 space-y-4">
          {scores.map((score) => {
            const lead = leaders.some((type) => type.id === score.id);
            return (
              <li key={score.id}>
                <Link href={`/tipos/${score.id}`} className="block rounded-sm">
                  <div className="mb-2 flex justify-between gap-4 text-sm"><span className={lead ? "font-semibold" : ""}>{score.id} · {score.name}{lead ? " · maior pontuação" : ""}</span><span className="shrink-0 tabular-nums">{score.score}/75</span></div>
                  <div aria-hidden className="h-2 rounded-full bg-[color:var(--wash)]"><div className="h-full rounded-full" style={{ width: `${score.percent}%`, background: lead ? "var(--accent)" : "var(--ink)", opacity: lead ? 1 : 0.45 }} /></div>
                </Link>
              </li>
            );
          })}
        </ol>
        <Link href="/sobre-o-teste" className="mt-5 inline-block text-sm underline underline-offset-4">Como interpretar a pontuação e seus limites</Link>
      </section>
      <div className="flex flex-wrap gap-3">
        <Link href="/tipos" className="btn-ghost">Comparar os nove tipos</Link>
        {status === "saved" ? <Link href="/mentor" className="btn-primary">Conversar com o mentor</Link> : null}
        <Link href="/biblioteca/workbook" className="btn-ghost">Escolher um exercício</Link>
      </div>
    </div>
  );
}
