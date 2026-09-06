import Link from "next/link";
import { notFound } from "next/navigation";
import { EnneagramMark } from "../../../components/EnneagramMark";
import { typeById, types, type TypeId } from "../../../data/types";

export function generateStaticParams() {
  return types.map((t) => ({ id: String(t.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = typeById[Number(id) as TypeId];
  if (!t) return { title: "Tipo" };
  return { title: `Tipo ${t.id} · ${t.name} — Eneagrama` };
}

export default async function TipoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const n = Number(id) as TypeId;
  const t = typeById[n];
  if (!t) notFound();

  const prev = typeById[(((t.id + 7) % 9) + 1) as TypeId];
  const next = typeById[(((t.id) % 9) + 1) as TypeId];

  return (
    <article className="space-y-12">
      <header className="grid items-start gap-8 md:grid-cols-[1fr_200px]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
            Tipo {t.id} · {t.center}
          </p>
          <h1 className="mt-2 font-display text-5xl leading-none sm:text-6xl">{t.name}</h1>
          <p className="mt-2 text-lg text-[color:var(--ink-soft)]">{t.alias}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{t.summary}</p>
        </div>
        <EnneagramMark size={200} active={t.id} className="text-[color:var(--ink)]" />
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title="Medo fundamental" body={t.fear} />
        <Card title="Desejo fundamental" body={t.desire} />
        <Card title="Mensagem interior" body={t.innerMessage} />
        <Card title="Essência · cura" body={`${t.essence}. ${t.healing}`} />
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-display text-3xl">Personalidade</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{t.personality}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          <strong className="text-[color:var(--ink)]">Foco de atenção. </strong>
          {t.focus}
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <List title="Pontos fortes" items={t.strengths} />
        <List title="Aspectos a desenvolver" items={t.develop} />
        <List title="Motivadores" items={t.motivators} />
        <List title="Vocações" items={t.vocations} />
      </section>

      <section className="rounded-3xl border border-[color:var(--line)] p-6">
        <h2 className="font-display text-2xl">Sinal de alerta</h2>
        <p className="mt-3 leading-relaxed">{t.alert}</p>
      </section>

      <section>
        <h2 className="font-display text-3xl">Asas</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {t.wings.map((w) => (
            <Link
              key={w.id}
              href={`/tipos/${w.id}`}
              className="rounded-3xl border border-[color:var(--line)] p-5 hover:border-[color:var(--ink)]"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">
                Influência do tipo {w.id}
              </p>
              <h3 className="mt-1 font-display text-xl">{w.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{w.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl">Como desenvolver-se</h2>
        <ol className="mt-4 space-y-2">
          {t.practices.map((p) => (
            <li key={p} className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 leading-relaxed">
              {p}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl bg-[color:var(--ink)] px-6 py-8 text-[color:var(--paper)]">
        <p className="text-xs uppercase tracking-[0.2em] opacity-70">Paradigma de liderança</p>
        <p className="mt-3 font-display text-2xl leading-snug">{t.leadership}</p>
        <p className="mt-4 max-w-2xl text-sm opacity-80">{t.excelBlurb}</p>
      </section>

      <nav className="flex justify-between gap-4 border-t border-[color:var(--line)] pt-6 text-sm">
        <Link href={`/tipos/${prev.id}`} className="underline underline-offset-4">
          ← {prev.id} {prev.name}
        </Link>
        <Link href={`/tipos/${next.id}`} className="underline underline-offset-4">
          {next.id} {next.name} →
        </Link>
      </nav>
    </article>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-[color:var(--line)] p-5">
      <h3 className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">{title}</h3>
      <p className="mt-2 leading-relaxed">{body}</p>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-2xl">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-[color:var(--ink-soft)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
