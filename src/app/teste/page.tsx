import { privateMetadata } from "../../lib/seo";
import { QuizClient } from "../../components/QuizClient";
import { SCALE } from "../../data/questions";

export const metadata = privateMetadata("Teste de Eneagrama");

export default function TestePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
          Questionário
        </p>
        <h1 className="mt-2 font-display text-5xl">Responda pensando no seu dia a dia</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Leia cada afirmativa e escolha a opção que melhor descreve como você costuma agir ou pensar. Considere situações que se repetem, em vez de responder pelo que você gostaria de fazer.
        </p>
        <p className="mt-4 text-sm text-[color:var(--mute)]">São 135 afirmativas. Suas respostas em andamento ficam guardadas neste navegador.</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em] text-[color:var(--mute)]">
          {SCALE.map((s) => (
            <li key={s.value} className="rounded-full border border-[color:var(--line)] px-3 py-1">
              {s.value} · {s.label} é verdadeira
            </li>
          ))}
        </ul>
      </header>
      <QuizClient />
    </div>
  );
}
