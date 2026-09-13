import Link from "next/link";
import { TypeGallery } from "@/components/TypeGallery";
import { getPack } from "@/data/pack";
import { interpolate } from "@/i18n/format";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).typesIndex;
  return localeMetadata(locale, m.title, m.description, "types");
}

export default async function TiposPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);
  const pack = getPack(locale);

  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">{m.typesIndex.eyebrow}</p>
        <h1 className="mt-2 font-display text-5xl">{m.typesIndex.h1}</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          {m.typesIndex.lead}{" "}
          <Link href={href(locale, "map")} className="underline underline-offset-4">
            {m.typesIndex.leadLink}
          </Link>
          .
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(pack.centers).map(([key, c]) => (
          <article key={key} className="rounded-3xl border border-[color:var(--line)] p-5">
            <h2 className="font-display text-xl">{c.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{c.text}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">
              {interpolate(m.typesIndex.typesLabel, { list: c.types.join(" · ") })}
            </p>
          </article>
        ))}
      </div>

      <TypeGallery locale={locale} headingLevel={2} />
    </div>
  );
}
