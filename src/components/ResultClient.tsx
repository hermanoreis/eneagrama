"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { typeById } from "../data/types";
import { EnneagramMark } from "./EnneagramMark";
import {
  answeredCount,
  loadAnswers,
  scoreTypes,
  type Answers,
  type TypeScore,
} from "../lib/quiz";
import { questions } from "../data/questions";

export function ResultClient() {
  const [answers, setAnswers] = useState<Answers | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setAnswers(loadAnswers());
  }, []);

  useEffect(() => {
    if (!answers || saved) return;
    const done = answeredCount(answers);
    if (done === 0) return;
    const scores = scoreTypes(answers);
    fetch("/api/results", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        scores,
        answers,
        primaryType: scores[0].id,
      }),
    })
      .then((res) => {
        if (res.ok) setSaved(true);
      })
      .catch(() => undefined);
  }, [answers, saved]);

  if (!answers) {
    return <p className="text-[color:var(--mute)]">Lendo suas respostas…</p>;
  }

  const done = answeredCount(answers);
  if (done === 0) {
    return (
      <div className="space-y-4">
        <p>Ainda não há respostas neste aparelho.</p>
        <Link href="/teste" className="underline underline-offset-4">
          Começar o teste
        </Link>
      </div>
    );
  }

  const scores = scoreTypes(answers);
  const top = scores[0];
  const second = scores[1];
  const profile = typeById[top.id];

  return (
    <div className="space-y-12">
      {saved ? (
        <p className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 text-sm">
          Resultado salvo na sua conta. Você pode relê-lo depois em{" "}
          <Link href="/conta" className="underline underline-offset-4">
            Conta
          </Link>
          .
        </p>
      ) : null}

      {done < questions.length ? (
        <p className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--wash)] px-4 py-3 text-sm">
          Você respondeu {done} de {questions.length}. O ranking já aparece; complete o teste
          para um recorte mais fiel.{" "}
          <Link href="/teste" className="underline underline-offset-4">
            Voltar às afirmativas
          </Link>
        </p>
      ) : null}

      <div className="grid items-center gap-10 md:grid-cols-[1fr_220px]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
            Tipo mais alto
          </p>
          <h1 className="mt-2 font-display text-5xl leading-none text-[color:var(--ink)]">
            {top.id} · {profile.name}
          </h1>
          <p className="mt-3 text-lg text-[color:var(--ink-soft)]">{profile.alias}</p>
          <p className="mt-5 max-w-xl leading-relaxed">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/tipos/${profile.id}`}
              className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm text-[color:var(--paper)]"
            >
              Abrir perfil completo
            </Link>
            <Link href="/sintese" className="rounded-full border border-[color:var(--line)] px-5 py-2 text-sm">
              Ver síntese de liderança
            </Link>
          </div>
        </div>
        <EnneagramMark size={220} active={top.id} className="mx-auto text-[color:var(--ink)]" />
      </div>

      <section>
        <h2 className="font-display text-2xl">Pontuação por tipo</h2>
        <p className="mt-1 text-sm text-[color:var(--mute)]">
          Soma das 15 afirmativas de cada tipo (1 a 5). Máximo 75.
        </p>
        <ol className="mt-6 space-y-3">
          {scores.map((s) => (
            <ScoreRow key={s.id} score={s} lead={s.id === top.id} />
          ))}
        </ol>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--line)] p-6">
          <h3 className="text-xs uppercase tracking-[0.18em] text-[color:var(--mute)]">
            Medo · desejo
          </h3>
          <p className="mt-3">
            <strong>Medo:</strong> {profile.fear}
          </p>
          <p className="mt-2">
            <strong>Desejo:</strong> {profile.desire}
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--line)] p-6">
          <h3 className="text-xs uppercase tracking-[0.18em] text-[color:var(--mute)]">
            Segundo mais alto
          </h3>
          <p className="mt-3 font-display text-2xl">
            {second.id} · {second.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
            {typeById[second.id].summary}
          </p>
          <Link
            href={`/tipos/${second.id}`}
            className="mt-4 inline-block text-sm underline underline-offset-4"
          >
            Ver tipo {second.id}
          </Link>
        </article>
      </section>
    </div>
  );
}

function ScoreRow({ score, lead }: { score: TypeScore; lead: boolean }) {
  return (
    <li>
      <Link href={`/tipos/${score.id}`} className="block">
        <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
          <span className={lead ? "font-medium" : ""}>
            {score.id} · {score.name}
          </span>
          <span className="tabular-nums text-[color:var(--mute)]">
            {score.score}/{score.max}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[color:var(--wash)]">
          <div
            className="h-full rounded-full"
            style={{
              width: `${score.percent}%`,
              background: lead ? "var(--accent)" : "var(--ink)",
              opacity: lead ? 1 : 0.45,
            }}
          />
        </div>
      </Link>
    </li>
  );
}
