"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { typeById } from "../data/types";
import { typeIntroductions } from "../data/copy";
import { TypeAvatar } from "./TypeAvatar";
import { PaperMotion } from "./PaperMotion";
import {
  completeAnswers, loadAnswers, answeredCount, scoreTypes, resultLeaders,
  wingOf, subscribeAnswers, serverAnswersSnapshot, type Answers,
} from "../lib/quiz";
import { questions } from "../data/questions";

type SaveState = { answers: Answers; status: "saved" | "error" } | null;

export function ResultClient() {
  const answers = useSyncExternalStore(subscribeAnswers, loadAnswers, serverAnswersSnapshot);
  const [saveState, setSaveState] = useState<SaveState>(null);
  const [attempt, setAttempt] = useState(0);
  const pending = useRef<{ answers: Answers; attempt: number; request: Promise<boolean> } | null>(null);

  useEffect(() => {
    if (!answers || !completeAnswers(answers)) return;
    let active = true;
    // Reuse the in-flight request during Strict Mode effect replay.
    if (!pending.current || pending.current.answers !== answers || pending.current.attempt !== attempt) {
      pending.current = {
        answers, attempt,
        request: fetch("/api/results", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers }),
        }).then((res) => res.ok).catch(() => false),
      };
    }
    pending.current.request.then((ok) => {
      if (active) setSaveState({ answers, status: ok ? "saved" : "error" });
    });
    return () => { active = false; };
  }, [answers, attempt]);

  if (!answers) return <p role="status">Lendo suas respostas…</p>;
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

  const scores = scoreTypes(answers);
  const leaders = resultLeaders(scores);
  const tied = leaders.length > 1;
  const profile = typeById[leaders[0].id];
  const wing = tied ? null : wingOf(profile.id, scores);
  const status = saveState?.answers === answers ? saveState.status : "saving";

  return (
    <div className="space-y-10">
      <div role="status" className="rounded-2xl bg-[color:var(--wash)] px-5 py-4 text-sm">
        {status === "saved" ? <>Resultado salvo na sua conta. <Link href="/conta" className="underline underline-offset-4">Ir para minha conta</Link></> : status === "error" ? (
          <><p>Não conseguimos guardar este resultado na sua conta. Suas respostas continuam neste navegador.</p><button type="button" className="mt-3 underline underline-offset-4" onClick={() => { setSaveState(null); setAttempt((value) => value + 1); }}>Tentar salvar novamente</button></>
        ) : "Guardando seu resultado na conta…"}
      </div>
      <header className="max-w-3xl space-y-4">
        <p className="text-sm text-[color:var(--mute)]">{tied ? "Mais de um tipo teve a maior pontuação" : "O tipo com mais pontos nas suas respostas"}</p>
        <h1 className="font-display text-5xl">{tied ? "Seu resultado tem um empate" : `${profile.id} · ${profile.name}`}</h1>
        <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">{tied ? `Os tipos ${leaders.map((type) => type.id).join(", ")} tiveram a mesma pontuação. Leia as descrições e compare suas motivações.` : "Comece por esta descrição e compare com situações da sua vida. Você também pode explorar os outros tipos que pontuaram mais."}</p>
        <p className="text-sm text-[color:var(--mute)]">O resultado é um ponto de partida para reflexão. Não é um diagnóstico nem descreve tudo sobre você.</p>
      </header>
      <div className={`grid gap-5 ${tied ? "sm:grid-cols-2" : "md:grid-cols-[1fr_220px]"}`}>
        {leaders.map((leader) => (
          <article key={leader.id} className="rounded-3xl border border-[color:var(--line)] p-6">
            {tied ? <TypeAvatar id={leader.id} size={140} /> : null}
            <h2 className="font-display text-3xl">{leader.id} · {typeById[leader.id].name}</h2>
            <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{typeIntroductions[leader.id]}</p>
            <Link href={`/tipos/${leader.id}`} className="mt-5 inline-block underline underline-offset-4">Conhecer o tipo {leader.id}</Link>
          </article>
        ))}
        {!tied ? <PaperMotion><TypeAvatar id={profile.id} size={220} eager /></PaperMotion> : null}
      </div>
      {wing ? (
        <section className="rounded-3xl border border-[color:var(--line)] p-6">
          <h2 className="font-display text-3xl">Compare também os tipos vizinhos</h2>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">No Eneagrama, os dois tipos vizinhos são chamados de asas. Suas características podem complementar a descrição que você leu.</p>
          <p className="mt-3 text-sm">{wing.tied ? `Os vizinhos ${wing.left} e ${wing.right} tiveram a mesma pontuação. Isso não comprova que essas influências sejam equilibradas na sua vida.` : `Entre os vizinhos ${wing.left} e ${wing.right}, o tipo ${wing.id} teve mais pontos nas suas respostas.`}</p>
          <div className="mt-4 flex flex-wrap gap-5">
            {[wing.left, wing.right].map((id) => <Link key={id} href={`/tipos/${id}`} className="underline underline-offset-4">{id} · {typeById[id].name}</Link>)}
            <Link href="/mapa#asas" className="underline underline-offset-4">Entender as asas</Link>
          </div>
        </section>
      ) : null}
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
