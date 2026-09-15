import Link from "next/link";
import { PaperMotion } from "@/components/PaperMotion";
import { TypeAvatar } from "@/components/TypeAvatar";
import { getPack } from "@/data/pack";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).overview;
  return localeMetadata(locale, m.title, m.description, "overview");
}

export default async function ResumaoPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);
  const pack = getPack(locale);

  return (
    <article className="mx-auto max-w-2xl space-y-12">
      <header>
        <p className="text-sm text-[color:var(--mute)]">
          <Link href={href(locale, "library")} className="underline underline-offset-4">
            {m.overview.back}
          </Link>
        </p>
        <h1 className="mt-3 font-display text-5xl">{m.overview.h1}</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{m.overview.lead}</p>
      </header>

      <section className="space-y-3">
        <h2 className="font-display text-3xl">{m.overview.reminders}</h2>
        <p className="leading-relaxed">{pack.whatIsAType.formula}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{pack.whatIsAType.note}</p>
        <ul className="list-disc space-y-2 pl-5 text-[color:var(--ink-soft)]">
          {m.overview.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-3xl">{m.overview.nineH2}</h2>
        <PaperMotion className="mt-6">
          {pack.types.map((t) => (
            <article key={t.id} className="type-resume paper-interactive">
              <TypeAvatar id={t.id} size={160} />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl">
                  {t.id} {t.name}
                </h3>
                <p className="mt-1 text-sm text-[color:var(--mute)]">{t.alias}</p>
                <p className="mt-3 leading-relaxed">{t.summary}</p>
                <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                  {m.overview.fear} {t.fear} {m.overview.desire} {t.desire}
                </p>
                <p className="mt-2 text-sm">
                  {m.overview.healing} {t.healing} {m.overview.essence} {t.essence}.
                </p>
                <Link href={href(locale, "type", { id: t.id })} className="mt-3 inline-block text-sm underline underline-offset-4">
                  {m.overview.open}
                </Link>
              </div>
            </article>
          ))}
        </PaperMotion>
      </section>
    </article>
  );
}
