"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { arrowsByType } from "../data/map";
import { typeById } from "../data/types";
import { EnneagramMark } from "./EnneagramMark";
import {
  answeredCount,
  loadAnswers,
  scoreTypes,
  wingOf,
  type TypeScore,
} from "../lib/quiz";
import { questions } from "../data/questions";

export function ResultClient() {
  const answers = useSyncExternalStore(
    () => () => undefined,
    loadAnswers,
    () => null,
  );
  const [saved, setSaved] = useState(false);

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
  const wing = wingOf(top.id, scores);
  const wingProfile = wing.id ? typeById[wing.id] : null;
  const wingCopy = wingProfile
    ? profile.wings.find((w) => w.id === wingProfile.id)
    : null;
  const secondIsWing = second.id === wing.id;
  const arrows = arrowsByType[top.id];

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
          <h1 className="font-display text-5xl leading-none text-[color:var(--ink)]">
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
            <Link href="/mapa" className="rounded-full border border-[color:var(--line)] px-5 py-2 text-sm">
              Ler o mapa
            </Link>
          </div>
        </div>
        <EnneagramMark size={220} active={top.id} className="mx-auto text-[color:var(--ink)]" />
      </div>

      <section className="rounded-[28px] border border-[color:var(--line)] bg-white p-7 shadow-[0_12px_32px_rgba(27,36,48,0.05)]">
        <h2 className="font-display text-3xl">Sua asa</h2>
        {wing.tied ? (
          <div className="mt-4 space-y-3">
            <p className="leading-relaxed">
              Os dois vizinhos empataram. Asas equilibradas: {wing.left}{" "}
              {typeById[wing.left].name} e {wing.right} {typeById[wing.right].name},
              ambos com {wing.leftScore}.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {profile.wings.map((w) => (
                <Link
                  key={w.id}
                  href={`/tipos/${w.id}`}
                  className="rounded-2xl bg-[color:var(--wash)] p-4"
                >
                  <p className="font-display text-xl">
                    {w.id} · {w.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{w.text}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : wingProfile && wingCopy ? (
          <div className="mt-4">
            <p className="font-display text-3xl">
              {top.id}w{wingProfile.id} · {wingCopy.name}
            </p>
            <p className="mt-3 max-w-2xl leading-relaxed">{wingCopy.text}</p>
            <p className="mt-3 text-sm text-[color:var(--mute)]">
              Entre os vizinhos {wing.left} ({wing.leftScore}) e {wing.right} ({wing.rightScore}),
              a pontuação mais alta foi a do tipo {wingProfile.id}.{" "}
              <Link href="/mapa#asas" className="underline underline-offset-4">
                Como a asa é lida
              </Link>
            </p>
            <Link
              href={`/tipos/${wingProfile.id}`}
              className="mt-4 inline-block text-sm underline underline-offset-4"
            >
              Ver tipo {wingProfile.id}
            </Link>
          </div>
        ) : null}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-[color:var(--line)] p-6">
          <h3 className="font-display text-xl">Medo e desejo</h3>
          <p className="mt-3">
            <strong>Medo:</strong> {profile.fear}
          </p>
          <p className="mt-2">
            <strong>Desejo:</strong> {profile.desire}
          </p>
        </article>
        <article className="rounded-3xl border border-[color:var(--line)] p-6">
          <h3 className="font-display text-xl">Flechas deste tipo</h3>
          <p className="mt-3 text-sm leading-relaxed">
            <span className="font-medium">Integração {arrows.growth}.</span> {arrows.growthText}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            <span className="font-medium">Stress {arrows.stress}.</span> {arrows.stressText}
          </p>
          <Link href="/mapa#flechas" className="mt-4 inline-block text-sm underline underline-offset-4">
            O mapa das flechas
          </Link>
        </article>
      </section>

      {!secondIsWing ? (
        <section className="rounded-3xl border border-[color:var(--line)] p-6">
          <h2 className="font-display text-2xl">Outro traço alto</h2>
          <p className="mt-2 text-sm text-[color:var(--mute)]">
            Segundo no ranking, e não é vizinho. Não é a asa.
          </p>
          <p className="mt-3 font-display text-2xl">
            {second.id} · {second.name}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[color:var(--ink-soft)]">
            {typeById[second.id].summary}
          </p>
          <Link
            href={`/tipos/${second.id}`}
            className="mt-4 inline-block text-sm underline underline-offset-4"
          >
            Ver tipo {second.id}
          </Link>
        </section>
      ) : null}

      <section>
        <h2 className="font-display text-2xl">Pontuação por tipo</h2>
        <p className="mt-1 text-sm text-[color:var(--mute)]">
          Soma das 15 afirmativas de cada tipo (1 a 5). Máximo 75.
        </p>
        <ol className="mt-6 space-y-3">
          {scores.map((s) => (
            <ScoreRow
              key={s.id}
              score={s}
              lead={s.id === top.id}
              wing={s.id === wing.id}
            />
          ))}
        </ol>
      </section>
    </div>
  );
}

function ScoreRow({
  score,
  lead,
  wing,
}: {
  score: TypeScore;
  lead: boolean;
  wing: boolean;
}) {
  return (
    <li>
      <Link href={`/tipos/${score.id}`} className="block">
        <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
          <span className={lead || wing ? "font-medium" : ""}>
            {score.id} · {score.name}
            {lead ? " · tipo" : wing ? " · asa" : ""}
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
              background: lead ? "var(--accent)" : wing ? "var(--cta)" : "var(--ink)",
              opacity: lead || wing ? 1 : 0.45,
            }}
          />
        </div>
      </Link>
    </li>
  );
}
