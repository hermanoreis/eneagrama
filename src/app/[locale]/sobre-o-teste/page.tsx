import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getPack } from "@/data/pack";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { howToJsonLd } from "@/lib/jsonld";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).about;
  return localeMetadata(locale, m.title, m.description, "about");
}

export default async function SobreTestePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);
  const pack = getPack(locale);

  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <JsonLd data={howToJsonLd(pack.howToTest.name, pack.howToTest.steps)} />
      <header>
        <h1 className="font-display text-5xl">{m.about.h1}</h1>
        <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">{m.about.lead}</p>
        <p className="mt-4 text-sm text-[color:var(--mute)]">{m.about.by}</p>
      </header>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.about.scoreH2}</h2>
        <p>{m.about.scoreP1}</p>
        <p>{m.about.scoreP2}</p>
        <p>{m.about.scoreP3}</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.about.wingsH2}</h2>
        <p>{m.about.wingsP}</p>
        <Link href={href(locale, "map", { hash: "asas" })} className="underline underline-offset-4">
          {m.about.wingsLink}
        </Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.about.resultH2}</h2>
        <p>{m.about.resultP1}</p>
        <p>{m.about.resultP2}</p>
        <p>{m.about.resultP3}</p>
        <a href="https://pubmed.ncbi.nlm.nih.gov/33332604/" className="inline-block underline underline-offset-4">
          {m.about.hookLink}
        </a>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.about.refsH2}</h2>
        <p>{m.about.refsP1}</p>
        <p>{m.about.refsP2}</p>
        <Link href={href(locale, "readings")} className="inline-block underline underline-offset-4">
          {m.about.refsLink}
        </Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.about.dataH2}</h2>
        <p>{m.about.dataP1}</p>
        <p>{m.about.dataP2}</p>
      </section>
      <Link href={href(locale, "test")} className="btn-primary">
        {m.about.cta}
      </Link>
    </article>
  );
}
