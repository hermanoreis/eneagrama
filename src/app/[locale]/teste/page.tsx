import { redirect } from "next/navigation";
import { QuizClient } from "@/components/QuizClient";
import { getPack } from "@/data/pack";
import { interpolate } from "@/i18n/format";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { privateMetadata } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  return privateMetadata(getMessages(locale).test.title);
}

export default async function TestePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const session = await getSession();
  if (!session?.user) redirect(href(locale, "signIn", { next: href(locale, "test") }));
  const m = getMessages(locale);
  const pack = getPack(locale);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header>
        <h1 className="font-display text-5xl">{m.test.h1}</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{m.test.lead}</p>
        <p className="mt-4 text-sm text-[color:var(--mute)]">{m.test.hint}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm text-[color:var(--mute)]">
          {pack.SCALE.map((s) => (
            <li key={s.value} className="rounded-[4px] border border-[color:var(--line)] px-3 py-1">
              {interpolate(m.test.scaleTrue, { value: s.value, label: s.label })}
            </li>
          ))}
        </ul>
      </header>
      <QuizClient />
    </div>
  );
}
