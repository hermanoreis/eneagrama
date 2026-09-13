import Image from "next/image";
import Link from "next/link";
import { EnneagramMark } from "@/components/EnneagramMark";
import { HomeHero } from "@/components/HomeHero";
import { JsonLd } from "@/components/JsonLd";
import { TypeGallery } from "@/components/TypeGallery";
import { getPack } from "@/data/pack";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { faqJsonLd, howToJsonLd } from "@/lib/jsonld";
import { localeMetadata } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).home;
  return localeMetadata(locale, m.title, m.description, "home");
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  const m = getMessages(locale);
  const pack = getPack(locale);
  const testHref = loggedIn ? href(locale, "test") : href(locale, "signIn", { next: href(locale, "test") });

  return (
    <div className="home-page space-y-16 md:space-y-20">
      <JsonLd data={faqJsonLd(pack.homeFaq)} />
      <JsonLd data={howToJsonLd(pack.howToTest.name, pack.howToTest.steps)} />
      <HomeHero
        locale={locale}
        testHref={testHref}
        startLabel={m.home.start}
        loggedIn={loggedIn}
        eyebrow={m.home.eyebrow}
        h1={m.home.h1}
        lead={m.home.lead}
        meetTypes={m.home.meetTypes}
        typesHref={href(locale, "types")}
        loggedInHint={m.home.loggedInHint}
        loggedOutHint={m.home.loggedOutHint}
      />
      <section id="nove-tipos" className="home-section scroll-mt-24">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{m.home.nineEyebrow}</p>
            <h2 className="font-display text-4xl">{m.home.nineH2}</h2>
          </div>
          <p className="max-w-md leading-relaxed text-[color:var(--ink-soft)]">{m.home.nineLead}</p>
        </div>
        <TypeGallery locale={locale} />
        <p className="mt-5 text-sm text-[color:var(--mute)]">{m.home.nineNote}</p>
      </section>

      <section className="max-w-3xl space-y-5">
        <h2 className="font-display text-4xl">{m.home.whatH2}</h2>
        <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">{m.home.whatP1}</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.home.whatP2}</p>
        <Link href={href(locale, "map")} className="inline-block underline underline-offset-4">
          {m.home.whatLink}
        </Link>
      </section>
      <section id="como-ajuda" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.home.useH2}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {m.home.useItems.map((item) => (
            <article key={item.title} className="editorial-column">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24">
        <h2 className="font-display text-4xl">{m.home.howH2}</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {m.home.howSteps.map((step, index) => (
            <li key={step.title} className="editorial-column">
              <p className="font-display text-3xl text-[color:var(--accent)]">{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link href={href(locale, "about")} className="mt-5 inline-block text-sm underline underline-offset-4">
          {m.home.howLink}
        </Link>
      </section>
      <section className="max-w-3xl space-y-5">
        <h2 className="font-display text-4xl">{m.home.mentorH2}</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">{m.home.mentorP}</p>
        <p className="rounded-2xl bg-[color:var(--wash)] p-5">{m.home.mentorQuote}</p>
        <p className="text-sm leading-relaxed text-[color:var(--mute)]">{m.home.mentorNote}</p>
        <Link href={href(locale, "mentor")} className="btn-ghost">
          {m.home.mentorCta}
        </Link>
      </section>
      <section id="sobre" className="grid items-center gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <figure
          className="author-portrait"
          tabIndex={0}
          aria-label={m.home.portraitLabel}
        >
          <Image
            src="/images/hermano-original.webp"
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="author-portrait-image author-portrait-photo"
          />
          <Image
            src="/images/hermano-papercraft-editorial.webp"
            alt={m.home.portraitAlt}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="author-portrait-image author-portrait-paper"
          />
        </figure>
        <div>
          <h2 className="font-display text-4xl">{m.home.authorH2}</h2>
          <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">{m.home.authorP1}</p>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{m.home.authorP2}</p>
          <p className="mt-6 font-display text-2xl">Hermano Reis</p>
          <a href="https://hermano.me" className="mt-3 inline-block text-sm underline underline-offset-4">
            {m.home.authorWork}
          </a>
        </div>
      </section>
      <section className="max-w-3xl">
        <h2 className="font-display text-4xl">{m.home.faqH2}</h2>
        <div className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {pack.homeFaq.map((item) => (
            <details key={item.question} className="py-5">
              <summary className="cursor-pointer text-lg font-medium">{item.question}</summary>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{item.answer}</p>
            </details>
          ))}
        </div>
        <Link href={href(locale, "about")} className="mt-5 inline-block text-sm underline underline-offset-4">
          {m.home.faqLink}
        </Link>
      </section>
      <section className="on-ink home-final-cta bg-[color:var(--ink)] px-8 py-12 text-white sm:px-10">
        <div className="home-final-cta-grid">
          <div>
            <h2 className="font-display text-4xl">{m.home.ctaH2}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[color:var(--ink-on-dark)]">{m.home.ctaP}</p>
            <Link href={testHref} className="btn-primary mt-7">
              {m.home.start}
            </Link>
          </div>
          <EnneagramMark interactive size={280} className="home-final-cta-mark" />
        </div>
      </section>
    </div>
  );
}
