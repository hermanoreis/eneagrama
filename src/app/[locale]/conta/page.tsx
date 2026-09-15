import Link from "next/link";
import { redirect } from "next/navigation";
import { TypeAvatar } from "@/components/TypeAvatar";
import { WingCallout } from "@/components/WingCallout";
import { getPack } from "@/data/pack";
import { dateLocale } from "@/i18n/config";
import { interpolate } from "@/i18n/format";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { listResults } from "@/lib/results";
import { getSession } from "@/lib/session";
import { resultLeaders, wingOf } from "@/lib/quiz";
import { privateMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  return privateMetadata(getMessages(locale).account.title);
}

export default async function ContaPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const session = await getSession();
  if (!session?.user) redirect(href(locale, "signIn", { next: href(locale, "account") }));
  const results = await listResults(session.user.id);
  const latest = results[0];
  const leaders = latest ? resultLeaders(latest.scores) : [];
  const tied = leaders.length > 1;
  const primary = leaders.length === 1 ? leaders[0] : null;
  const wing = primary && latest ? wingOf(primary.id, latest.scores) : null;
  const m = getMessages(locale);
  const pack = getPack(locale);
  const dates = dateLocale[locale];

  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl">
            {interpolate(m.account.hello, { name: session.user.name || m.account.you })}
          </h1>
          <p className="mt-3 break-all text-[color:var(--ink-soft)]">{session.user.email}</p>
        </div>
        <form action="/api/auth/logout" method="post">
          <input type="hidden" name="locale" value={locale} />
          <button className="btn-ghost" type="submit">
            {m.account.signOut}
          </button>
        </form>
      </header>
      {leaders.length > 0 && latest ? (
        <section className="space-y-5">
          <p className="text-sm text-[color:var(--mute)]">
            {interpolate(m.account.latest, { date: new Date(latest.createdAt).toLocaleDateString(dates) })}
          </p>
          <h2 className="font-display text-3xl">
            {tied
              ? m.account.tieH2
              : primary
                ? `${primary.id} ${pack.typeById[primary.id].name}`
                : m.result.leadLabel}
          </h2>
          {tied ? <p>{m.account.tieP}</p> : null}
          <div className="grid gap-4 md:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.id} className="paper-sheet-plain p-6">
                <TypeAvatar id={leader.id} size={140} />
                <h3 className="mt-4 font-display text-3xl">
                  {leader.id} {pack.typeById[leader.id].name}
                </h3>
                <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{pack.typeIntroductions[leader.id]}</p>
                <Link href={href(locale, "type", { id: leader.id })} className="mt-5 inline-block underline underline-offset-4">
                  {interpolate(m.account.reread, { id: leader.id })}
                </Link>
              </article>
            ))}
          </div>
          {wing && primary ? <WingCallout primary={primary.id} wing={wing} /> : null}
          <p className="text-sm text-[color:var(--mute)]">{m.account.notDiagnosis}</p>
          <div className="flex flex-wrap gap-3">
            {tied ? (
              <Link href={href(locale, "result")} className="btn-primary">
                {m.account.goResult}
              </Link>
            ) : (
              <Link href={href(locale, "mentor")} className="btn-primary">
                {m.account.talkMentor}
              </Link>
            )}
            {tied ? (
              <Link href={href(locale, "mentor")} className="btn-ghost">
                {m.account.talkMentor}
              </Link>
            ) : null}
            <Link href={href(locale, "test")} className="btn-ghost">
              {m.account.backTest}
            </Link>
          </div>
        </section>
      ) : (
        <section className="paper-sheet-plain p-8">
          <h2 className="font-display text-3xl">{latest ? m.account.incompleteH2 : m.account.emptyH2}</h2>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
            {latest ? m.account.incompleteP : m.account.emptyP}
          </p>
          <Link href={href(locale, "test")} className="btn-primary mt-6">
            {latest ? m.account.continueTest : m.account.startTest}
          </Link>
        </section>
      )}
      {results.length > 1 ? (
        <section>
          <h2 className="font-display text-3xl">{m.account.history}</h2>
          <ul className="mt-5 divide-y divide-[color:var(--line)]">
            {results.map((result) => {
              const group = resultLeaders(result.scores);
              const one = group.length === 1 ? group[0] : null;
              const savedWing = one ? wingOf(one.id, result.scores) : null;
              return (
                <li key={result.id} className="space-y-3 py-5">
                  <p className="text-sm text-[color:var(--mute)]">{new Date(result.createdAt).toLocaleString(dates)}</p>
                  <p>{group.length > 1 ? m.account.tieBetween : one ? m.account.topType : m.account.incompleteRecord}</p>
                  <div className="flex flex-wrap gap-4">
                    {group.map((type) => (
                      <Link key={type.id} href={href(locale, "type", { id: type.id })} className="underline underline-offset-4">
                        {type.id} {pack.typeById[type.id].name}
                      </Link>
                    ))}
                  </div>
                  {one && savedWing ? (
                    <p className="text-sm text-[color:var(--ink-soft)]">
                      {savedWing.tied || !savedWing.id
                        ? interpolate(m.account.wingTied, { left: savedWing.left, right: savedWing.right })
                        : interpolate(m.account.wingOf, { primary: one.id, wing: savedWing.id })}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
