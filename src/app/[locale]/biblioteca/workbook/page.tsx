import Link from "next/link";
import { interpolate } from "@/i18n/format";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).workbook;
  return localeMetadata(locale, m.title, m.description, "workbook");
}

export default async function WorkbookPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);

  return (
    <article className="mx-auto max-w-2xl space-y-12">
      <header>
        <p className="text-sm text-[color:var(--mute)]">
          <Link href={href(locale, "library")} className="underline underline-offset-4">
            {m.workbook.back}
          </Link>
        </p>
        <h1 className="mt-3 font-display text-5xl">{m.workbook.h1}</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{m.workbook.lead}</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.workbook.innerH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.workbook.innerP}</p>
        <ol className="space-y-3">
          <li className="paper-sheet leading-relaxed">{m.workbook.like}</li>
          <li className="paper-sheet leading-relaxed">{m.workbook.dislike}</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.workbook.ninesH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.workbook.ninesLead}</p>
        <ul className="space-y-3">
          {m.workbook.nines.map((n) => (
            <li key={n.id} className="paper-sheet">
              <p className="font-display text-xl">
                {n.id} {n.p}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{n.q}</p>
              <Link href={href(locale, "type", { id: n.id })} className="mt-2 inline-block text-sm underline underline-offset-4">
                {interpolate(m.workbook.profile, { id: n.id })}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">{m.workbook.planH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.workbook.planP1}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.workbook.planP2}</p>
      </section>
    </article>
  );
}
