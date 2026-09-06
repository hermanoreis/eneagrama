"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SCALE } from "../data/questions";
import {
  PAGE_SIZE,
  answeredCount,
  clearAnswers,
  loadAnswers,
  pageCount,
  questionsForPage,
  saveAnswers,
  type Answers,
} from "../lib/quiz";
import { questions } from "../data/questions";

export function QuizClient() {
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [ready, setReady] = useState(false);
  const pages = pageCount();
  const slice = useMemo(() => questionsForPage(page), [page]);
  const done = answeredCount(answers);
  const complete = done === questions.length;

  useEffect(() => {
    setAnswers(loadAnswers());
    setReady(true);
  }, []);

  function setAnswer(id: number, value: number) {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      saveAnswers(next);
      return next;
    });
  }

  function reset() {
    if (!confirm("Apagar todas as respostas deste aparelho?")) return;
    clearAnswers();
    setAnswers({});
    setPage(0);
  }

  if (!ready) {
    return <p className="text-[color:var(--mute)]">Carregando o questionário…</p>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)]">
            {done} de {questions.length} · página {page + 1}/{pages}
          </p>
          <div className="mt-2 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-[color:var(--wash)]">
            <div
              className="h-full bg-[color:var(--accent)] transition-all"
              style={{ width: `${(done / questions.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex gap-3 text-sm">
          <button
            type="button"
            onClick={reset}
            className="text-[color:var(--mute)] underline-offset-4 hover:underline"
          >
            Recomeçar
          </button>
          {complete ? (
            <Link href="/teste/resultado" className="btn-primary !px-4 !py-1.5">
              Ver resultado
            </Link>
          ) : null}
        </div>
      </div>

      <ol className="space-y-8">
        {slice.map((q, i) => (
          <li key={q.id} className="border-t border-[color:var(--line)] pt-5">
            <p className="font-display text-lg leading-snug text-[color:var(--ink)]">
              <span className="mr-2 text-sm text-[color:var(--mute)]">
                {page * PAGE_SIZE + i + 1}.
              </span>
              {q.text}
            </p>
            <div
              className="mt-4 grid grid-cols-5 gap-1.5"
              role="radiogroup"
              aria-label={`Afirmativa ${q.id}`}
            >
              {SCALE.map((s) => {
                const on = answers[q.id] === s.value;
                return (
                  <button
                    key={s.value}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setAnswer(q.id, s.value)}
                    className={`rounded-xl border px-1 py-2.5 text-center text-[11px] leading-tight sm:text-xs ${
                      on
                        ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-[color:var(--paper)]"
                        : "border-[color:var(--line)] bg-[color:var(--paper)] text-[color:var(--ink-soft)] hover:border-[color:var(--ink)]"
                    }`}
                  >
                    <span className="block font-display text-base sm:text-lg">{s.value}</span>
                    {s.label}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ol>

      <div className="flex items-center justify-between gap-3 border-t border-[color:var(--line)] pt-6">
        <button
          type="button"
          disabled={page === 0}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm disabled:opacity-40"
        >
          Anterior
        </button>
        {page < pages - 1 ? (
          <button
            type="button"
            onClick={() => {
              setPage((p) => Math.min(pages - 1, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm text-[color:var(--paper)]"
          >
            Próxima
          </button>
        ) : (
          <Link href="/teste/resultado" className="btn-primary !px-5 !py-2 text-sm">
            Calcular perfil
          </Link>
        )}
      </div>
    </div>
  );
}
