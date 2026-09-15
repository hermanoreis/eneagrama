import Link from "next/link";
import { EnneagramMark } from "@/components/EnneagramMark";
import { PaperMotion } from "@/components/PaperMotion";
import { TypeAvatar } from "@/components/TypeAvatar";
import { getPack } from "@/data/pack";
import type { TypeId } from "@/data/schema";
import { interpolate } from "@/i18n/format";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).mapPage;
  return localeMetadata(locale, m.title, m.description, "map");
}

export default async function MapaPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);
  const pack = getPack(locale);

  return (
    <article className="space-y-20">
      <header className="max-w-2xl">
        <h1 className="font-display text-5xl sm:text-6xl">{m.mapPage.h1}</h1>
        <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">{m.mapPage.lead}</p>
      </header>

      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
        <div className="max-w-xl space-y-4">
          <h2 className="font-display text-4xl">{m.mapPage.whatH2}</h2>
          <p className="text-lg leading-relaxed">{m.mapPage.whatP}</p>
          <p className="leading-relaxed text-[color:var(--ink-soft)]">{pack.whatIsAType.note}</p>
          <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.mapPage.essenceP}</p>
        </div>
        <EnneagramMark interactive size={280} className="text-[color:var(--ink)]" />
      </section>

      <section id="triades" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.mapPage.triadsH2}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">{m.mapPage.triadsLead}</p>
        <PaperMotion className="mt-8 grid gap-5 md:grid-cols-3">
          {Object.values(pack.triads).map((t) => (
            <article
              key={t.id}
              className="triad-card paper-sheet relative"
            >
              <div className="triad-cast" aria-hidden>
                {t.types.map((id) => (
                  <TypeAvatar key={id} id={id} size={112} className="triad-cast-member" />
                ))}
              </div>
              <h3 className="font-display text-2xl">{t.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{t.text}</p>
              <p className="mt-4 text-sm">
                {interpolate(m.mapPage.triadMeta, { time: t.time, feeling: t.feeling, seek: t.seek })}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.types.map((id) => (
                  <li key={id}>
                    <Link href={href(locale, "type", { id })} className="underline underline-offset-4">
                      {id} {pack.typeById[id].name}
                    </Link>
                    <span className="block text-[color:var(--mute)]">{t.energy[id]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </PaperMotion>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pack.otherTriads.map((g) => (
            <p key={g.label} className="paper-sheet text-sm leading-relaxed">
              <span className="font-medium">{g.label}. </span>
              <span className="text-[color:var(--ink-soft)]">
                {interpolate(m.mapPage.otherTypes, { list: g.types.join(", "), text: g.text })}
              </span>
            </p>
          ))}
        </div>
      </section>

      <section id="variantes" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.mapPage.variantsH2}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">{m.mapPage.variantsLead}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pack.variants.map((v) => (
            <article key={v.id} className="paper-sheet">
              <h3 className="font-display text-2xl">{v.label}</h3>
              <p className="mt-1 text-sm text-[color:var(--mute)]">
                {v.also}, {v.figure}, {v.focus}
              </p>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{v.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--mute)]">{v.palmer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="niveis" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.mapPage.levelsH2}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">{pack.healthLevels.intro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pack.healthLevels.bands.map((band) => (
            <article key={band.id} className="paper-sheet-plain p-6">
              <h3 className="font-display text-2xl">{band.label}</h3>
              <ol className="mt-5 space-y-4">
                {band.levels.map((lv) => (
                  <li key={lv.n}>
                    <p className="font-medium">
                      {lv.n}. {lv.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">{lv.text}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section id="asas" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.mapPage.wingsH2}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">{m.mapPage.wingsLead}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pack.types.map((t) => (
            <li key={t.id} className="paper-sheet">
              <Link href={href(locale, "type", { id: t.id })} className="font-display text-xl">
                {t.id} {t.name}
              </Link>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                {t.wings.map((w) => `${w.id} ${w.name}`).join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="flechas" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.mapPage.arrowsH2}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">{m.mapPage.arrowsLead}</p>
        <ol className="mt-8 space-y-4">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((id) => {
            const a = pack.arrowsByType[id];
            return (
              <li
                key={id}
                className="paper-sheet md:grid md:grid-cols-[8rem_1fr_1fr] md:gap-6"
              >
                <p className="font-display text-xl">
                  {id} {pack.typeById[id].name}
                </p>
                <p className="mt-3 text-sm leading-relaxed md:mt-0">
                  <span className="font-medium">{interpolate(m.mapPage.integration, { id: a.growth })}</span>{" "}
                  <span className="text-[color:var(--ink-soft)]">{a.growthText}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed md:mt-0">
                  <span className="font-medium">{interpolate(m.mapPage.stress, { id: a.stress })}</span>{" "}
                  <span className="text-[color:var(--ink-soft)]">{a.stressText}</span>
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--mute)]">
        {m.mapPage.byline}{" "}
        <Link href={href(locale, "readings")} className="underline underline-offset-4">
          {m.mapPage.readingsLink}
        </Link>{" "}
        {m.mapPage.and}{" "}
        <Link href={href(locale, "about")} className="underline underline-offset-4">
          {m.mapPage.limitsLink}
        </Link>
        .
      </p>
    </article>
  );
}
