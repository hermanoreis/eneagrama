import Link from "next/link";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).readings;
  return localeMetadata(locale, m.title, m.description, "readings");
}

export default async function LeiturasPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);

  return (
    <article className="mx-auto max-w-2xl space-y-10">
      <header>
        <Link href={href(locale, "library")} className="text-sm underline underline-offset-4">
          {m.readings.back}
        </Link>
        <h1 className="mt-4 font-display text-5xl">{m.readings.h1}</h1>
        <p className="mt-5 leading-relaxed text-[color:var(--ink-soft)]">{m.readings.lead}</p>
        <p className="mt-4 text-sm text-[color:var(--mute)]">{m.readings.by}</p>
      </header>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.readings.palmerH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.readings.palmerP1}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.readings.palmerP2}</p>
        <Link href={href(locale, "types")} className="inline-block underline underline-offset-4">
          {m.readings.palmerLink}
        </Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.readings.risoH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.readings.risoP1}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.readings.risoP2}</p>
        <Link href={href(locale, "map")} className="inline-block underline underline-offset-4">
          {m.readings.risoLink}
        </Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.readings.researchH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.readings.researchP1}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.readings.researchP2}</p>
        <a href="https://pubmed.ncbi.nlm.nih.gov/33332604/" className="inline-block underline underline-offset-4">
          {m.readings.researchLink}
        </a>
      </section>
      <Link href={href(locale, "about")} className="inline-block underline underline-offset-4">
        {m.readings.aboutLink}
      </Link>
    </article>
  );
}
