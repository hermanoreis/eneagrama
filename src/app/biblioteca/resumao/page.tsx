import Link from "next/link";
import { types } from "../../../data/types";
import { whatIsAType } from "../../../data/map";

export const metadata = {
  title: "Resumão · Eneagrama",
};

export default function ResumaoPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-12">
      <header>
        <p className="text-sm text-[color:var(--mute)]">
          <Link href="/biblioteca" className="underline underline-offset-4">
            Biblioteca
          </Link>
        </p>
        <h1 className="mt-3 font-display text-5xl">Resumão</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          O essencial da trilha de ensino, para reler rápido. O detalhe mora no
          perfil de cada tipo e no mapa.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-display text-3xl">Lembretes</h2>
        <p className="leading-relaxed">{whatIsAType.formula}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{whatIsAType.note}</p>
        <ul className="list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
          <li>Existem nove tipos. Cada pessoa se identifica com um.</li>
          <li>O tipo não muda. Nós mudamos.</li>
          <li>Temos traços de todos, mas a visão de mundo do nosso tipo nos domina.</li>
          <li>Paixão e fixação contam mais do que o comportamento típico.</li>
          <li>O tipo é defesa e estado de consciência reduzida.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-3xl">Nove tipos em uma página</h2>
        {types.map((t) => (
          <article key={t.id} className="border-t border-[color:var(--line)] pt-5">
            <h3 className="font-display text-2xl">
              {t.id} · {t.name}
            </h3>
            <p className="mt-1 text-sm text-[color:var(--mute)]">{t.alias}</p>
            <p className="mt-3 leading-relaxed">{t.summary}</p>
            <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
              Medo: {t.fear} Desejo: {t.desire}
            </p>
            <p className="mt-2 text-sm">
              Cura: {t.healing} Essência: {t.essence}.
            </p>
            <Link href={`/tipos/${t.id}`} className="mt-3 inline-block text-sm underline underline-offset-4">
              Abrir perfil
            </Link>
          </article>
        ))}
      </section>
    </article>
  );
}
