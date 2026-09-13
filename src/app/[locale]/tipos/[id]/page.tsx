import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PaperMotion } from "@/components/PaperMotion";
import { TypeAvatar } from "@/components/TypeAvatar";
import { getPack } from "@/data/pack";
import type { TypeId } from "@/data/schema";
import { localeFromParams } from "@/i18n/locale-params";
import { interpolate } from "@/i18n/format";
import { href } from "@/i18n/pathnames";
import { faqJsonLd } from "@/lib/jsonld";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => ({ id: String(id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const locale = await localeFromParams(params);
  const { id } = await params;
  const pack = getPack(locale);
  const t = pack.typeById[Number(id) as TypeId];
  if (!t || id !== String(t.id)) notFound();
  const m = getMessages(locale);
  return localeMetadata(
    locale,
    interpolate(m.typePage.title, { id: t.id, name: t.name }),
    pack.typeIntroductions[t.id],
    "type",
    { id: t.id },
    {
      url: `${href(locale, "type", { id: t.id })}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: interpolate(m.typePage.ogAlt, { id: t.id, name: t.name }),
    },
  );
}

export default async function TipoPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const locale = await localeFromParams(params);
  const { id } = await params;
  const pack = getPack(locale);
  const n = Number(id) as TypeId;
  const t = pack.typeById[n];
  if (!t || id !== String(t.id)) notFound();
  const m = getMessages(locale);
  const prev = pack.typeById[(((t.id + 7) % 9) + 1) as TypeId];
  const next = pack.typeById[(((t.id) % 9) + 1) as TypeId];
  const faqs = pack.typeFaqs[t.id];
  const arrows = pack.arrowsByType[t.id];
  const centerLabel = pack.centers[t.center].label;

  return (
    <article className="space-y-12">
      <JsonLd data={faqJsonLd(faqs)} />
      <header className="grid items-start gap-8 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
            {interpolate(m.typePage.centerLine, { id: t.id, center: centerLabel })}
          </p>
          <h1 className="mt-2 font-display text-5xl leading-none sm:text-6xl">
            {interpolate(m.typePage.h1, { id: t.id, name: t.name })}
          </h1>
          <p className="mt-2 text-lg text-[color:var(--ink-soft)]">{t.alias}</p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">{pack.typeIntroductions[t.id]}</p>
        </div>
        <PaperMotion className="profile-character"><TypeAvatar id={t.id} size={280} eager /></PaperMotion>
      </header>

      <p className="max-w-3xl text-sm leading-relaxed text-[color:var(--mute)]">
        {m.typePage.byline}{" "}
        <Link href={href(locale, "about")} className="underline underline-offset-4">{m.typePage.limitsLink}</Link>.
      </p>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title={m.typePage.fear} body={t.fear} />
        <Card title={m.typePage.desire} body={t.desire} />
        <Card title={m.typePage.inner} body={t.innerMessage} />
        <Card title={m.typePage.reflection} body={`${t.essence}. ${t.healing}`} />
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="font-display text-3xl">{m.typePage.personality}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{t.personality}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          <strong className="text-[color:var(--ink)]">{m.typePage.focus}</strong>
          {t.focus}
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <List title={m.typePage.strengths} items={t.strengths} />
        <List title={m.typePage.develop} items={t.develop} />
        <List title={m.typePage.motivators} items={t.motivators} />
        <List title={m.typePage.vocations} items={t.vocations} />
      </section>

      <section className="rounded-3xl border border-[color:var(--line)] p-6">
        <h2 className="font-display text-2xl">{m.typePage.alert}</h2>
        <p className="mt-3 leading-relaxed">{t.alert}</p>
      </section>

      <section>
        <h2 className="font-display text-3xl">{m.typePage.wingsH2}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">{m.typePage.wingsLead}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {t.wings.map((w) => (
            <Link
              key={w.id}
              href={href(locale, "type", { id: w.id })}
              className="rounded-3xl border border-[color:var(--line)] p-5 hover:border-[color:var(--ink)]"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">
                {interpolate(m.typePage.wingInfluence, { id: w.id })}
              </p>
              <h3 className="mt-1 font-display text-xl">{w.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{w.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl">{m.typePage.arrowsH2}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--ink-soft)]">
          {m.typePage.arrowsLead}{" "}
          <Link href={href(locale, "map", { hash: "flechas" })} className="underline underline-offset-4">
            {m.typePage.arrowsMap}
          </Link>
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Link href={href(locale, "type", { id: arrows.growth })} className="rounded-3xl border border-[color:var(--line)] p-5 hover:border-[color:var(--ink)]">
            <p className="text-sm text-[color:var(--mute)]">{interpolate(m.typePage.integration, { id: arrows.growth })}</p>
            <h3 className="mt-1 font-display text-xl">{arrows.growthName}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{arrows.growthText}</p>
          </Link>
          <Link href={href(locale, "type", { id: arrows.stress })} className="rounded-3xl border border-[color:var(--line)] p-5 hover:border-[color:var(--ink)]">
            <p className="text-sm text-[color:var(--mute)]">{interpolate(m.typePage.stress, { id: arrows.stress })}</p>
            <h3 className="mt-1 font-display text-xl">{arrows.stressName}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{arrows.stressText}</p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl">{m.typePage.practices}</h2>
        <ol className="mt-4 space-y-2">
          {t.practices.map((p) => (
            <li key={p} className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 leading-relaxed">{p}</li>
          ))}
        </ol>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-3xl">{interpolate(m.typePage.faqH2, { id: t.id })}</h2>
        <div className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {faqs.map((item) => (
            <details key={item.question} className="py-5">
              <summary className="cursor-pointer text-lg font-medium">{item.question}</summary>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-[color:var(--ink)] px-6 py-8 text-[color:var(--paper)]">
        <p className="text-xs uppercase tracking-[0.2em] opacity-70">{m.typePage.leadershipEyebrow}</p>
        <p className="mt-3 font-display text-2xl leading-snug">{t.leadership}</p>
        <p className="mt-4 max-w-2xl text-sm opacity-80">{t.excelBlurb}</p>
      </section>

      <nav className="flex justify-between gap-4 border-t border-[color:var(--line)] pt-6 text-sm">
        <Link href={href(locale, "type", { id: prev.id })} className="underline underline-offset-4">
          ← {prev.id} {prev.name}
        </Link>
        <Link href={href(locale, "type", { id: next.id })} className="underline underline-offset-4">
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
