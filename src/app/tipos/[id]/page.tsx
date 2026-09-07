import Link from "next/link";
import { typeIntroductions } from "../../../data/copy";
import { publicMetadata } from "../../../lib/seo";
import { notFound } from "next/navigation";
import { TypeAvatar } from "../../../components/TypeAvatar";
import { PaperMotion } from "../../../components/PaperMotion";
import { arrowsByType } from "../../../data/map";
import { typeById, types, type TypeId } from "../../../data/types";

export function generateStaticParams() {
  return types.map((t) => ({ id: String(t.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = typeById[Number(id) as TypeId];
  if (!t || id !== String(t.id)) notFound();
  return publicMetadata(`Tipo ${t.id} do Eneagrama: ${t.name}`, typeIntroductions[t.id], `/tipos/${t.id}`, {
    url: `/tipos/${t.id}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: `Tipo ${t.id}: ${t.name}. Personagem papercraft do Eneagrama por Hermano Reis.`,
  });
}

export default async function TipoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const n = Number(id) as TypeId;
  const t = typeById[n];
  if (!t || id !== String(t.id)) notFound();

  const prev = typeById[(((t.id + 7) % 9) + 1) as TypeId];
  const next = typeById[(((t.id) % 9) + 1) as TypeId];

  return (
    <article className="space-y-12">
      <header className="grid items-start gap-8 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
            Tipo {t.id} · {t.center}
          </p>
          <h1 className="mt-2 font-display text-5xl leading-none sm:text-6xl">Tipo {t.id}: {t.name}</h1>
          <p className="mt-2 text-lg text-[color:var(--ink-soft)]">{t.alias}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{typeIntroductions[t.id]}</p>
        </div>
        <PaperMotion className="profile-character"><TypeAvatar id={t.id} size={280} eager /></PaperMotion>
      </header>

      <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--mute)]">Por Hermano Reis. Esta descrição apresenta conceitos do Eneagrama para reflexão. Os nomes dos tipos não definem profissões. <Link href="/sobre-o-teste" className="underline underline-offset-4">Como interpretar o resultado e seus limites</Link>.</p>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title="Medo fundamental" body={t.fear} />
        <Card title="Desejo fundamental" body={t.desire} />
        <Card title="Mensagem interior" body={t.innerMessage} />
        <Card title="Uma proposta de reflexão" body={`${t.essence}. ${t.healing}`} />
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
        <h2 className="font-display text-3xl">Os tipos vizinhos: as asas</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">No Eneagrama, as características dos tipos vizinhos podem complementar essa descrição. Compare o que você reconhece em cada um.</p>
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
        <h2 className="font-display text-3xl">Flechas</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-soft)]">
          As flechas representam relações entre tipos descritas nessa abordagem. São usadas para explorar reações em situações de crescimento e de estresse.{" "}
          <Link href="/mapa#flechas" className="underline underline-offset-4">
            Ver o mapa
          </Link>
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link
            href={`/tipos/${arrowsByType[t.id].growth}`}
            className="rounded-3xl border border-[color:var(--line)] p-5 hover:border-[color:var(--ink)]"
          >
            <p className="text-sm text-[color:var(--mute)]">Integração · tipo {arrowsByType[t.id].growth}</p>
            <h3 className="mt-1 font-display text-xl">{arrowsByType[t.id].growthName}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              {arrowsByType[t.id].growthText}
            </p>
          </Link>
          <Link
            href={`/tipos/${arrowsByType[t.id].stress}`}
            className="rounded-3xl border border-[color:var(--line)] p-5 hover:border-[color:var(--ink)]"
          >
            <p className="text-sm text-[color:var(--mute)]">Stress · tipo {arrowsByType[t.id].stress}</p>
            <h3 className="mt-1 font-display text-xl">{arrowsByType[t.id].stressName}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              {arrowsByType[t.id].stressText}
            </p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl">Sugestões para experimentar</h2>
        <ol className="mt-4 space-y-2">
          {t.practices.map((p) => (
            <li key={p} className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 leading-relaxed">
              {p}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl bg-[color:var(--ink)] px-6 py-8 text-[color:var(--paper)]">
        <p className="text-xs uppercase tracking-[0.2em] opacity-70">Reflexões sobre liderança</p>
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
