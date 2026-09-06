import Link from "next/link";
import { types } from "../../data/types";

export const metadata = {
  title: "Síntese — Eneagrama",
};

export default function SintesePage() {
  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
          Matriz de liderança
        </p>
        <h1 className="mt-2 font-display text-5xl">Síntese de perfis</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Pontos fortes, aspectos a desenvolver e o paradigma de cada tipo — a
          mesma estrutura da síntese da pasta, para você e para o time.
        </p>
      </header>

      <div className="space-y-6">
        {types.map((t) => (
          <article
            key={t.id}
            className="grid gap-6 rounded-3xl border border-[color:var(--line)] p-6 md:grid-cols-[160px_1fr_1fr]"
          >
            <div>
              <Link href={`/tipos/${t.id}`} className="font-display text-2xl hover:text-[color:var(--accent)]">
                {t.id} · {t.name}
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {t.leadership}
              </p>
            </div>
            <Column title="Pontos fortes" items={t.strengths} />
            <Column title="A desenvolver" items={t.develop} />
          </article>
        ))}
      </div>
    </div>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}
