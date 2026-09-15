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
  const m = getMessages(locale).synthesis;
  return localeMetadata(locale, m.title, m.description, "synthesis");
}

export default async function SintesePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);
  const pack = getPack(locale);

  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <h1 className="font-display text-5xl">{m.synthesis.h1}</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{m.synthesis.lead}</p>
      </header>

      <PaperMotion className="space-y-6">
        {pack.types.map((t) => (
          <article
            key={t.id}
            className="sintese-type paper-interactive paper-sheet grid gap-6 md:grid-cols-[10rem_1fr_1fr]"
          >
            <div className="flex items-start gap-4 md:block">
              <TypeAvatar id={t.id} size={160} />
              <div className="min-w-0">
                <Link href={href(locale, "type", { id: t.id })} className="font-display text-2xl hover:text-[color:var(--accent)]">
                  {t.id} {t.name}
                </Link>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{t.leadership}</p>
              </div>
            </div>
            <Column title={m.synthesis.strengths} items={t.strengths} />
            <Column title={m.synthesis.develop} items={t.develop} />
          </article>
        ))}
      </PaperMotion>
    </div>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-lg">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
