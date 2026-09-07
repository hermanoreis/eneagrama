import { QuizClient } from "../../components/QuizClient";
import { SCALE } from "../../data/questions";

export const metadata = {
  title: "Teste · Eneagrama",
};

export default function TestePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
          Questionário
        </p>
        <h1 className="mt-2 font-display text-5xl">135 afirmativas</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Nove seções, quinze frases por tipo. Classifique cada sentença conforme ela
          descreve o seu comportamento e pensamento. Ao terminar, o resultado entra
          na sua conta para você voltar depois.
        </p>
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
