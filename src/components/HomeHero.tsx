import Link from "next/link";
import { PaperFamily } from "./PaperFamily";

type Props = {
  testHref: string;
  startLabel: string;
  loggedIn: boolean;
  eyebrow: string;
  h1: string;
  lead: string;
  meetTypes: string;
  typesHref: string;
  loggedInHint: string;
  loggedOutHint: string;
};

export function HomeHero({
  testHref,
  startLabel,
  loggedIn,
  eyebrow,
  h1,
  lead,
  meetTypes,
  typesHref,
  loggedInHint,
  loggedOutHint,
}: Props) {
  return (
    <section className="home-hero">
      <div className="home-hero-grid">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium text-[color:var(--cta)]">{eyebrow}</p>
          <h1 className="font-display hero-title">{h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">{lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={testHref} className="btn-primary">
              {startLabel}
            </Link>
            <Link href={typesHref} className="hero-secondary">
              {meetTypes}
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--mute)]">
            {loggedIn ? loggedInHint : loggedOutHint}
          </p>
        </div>
        <PaperFamily />
      </div>
    </section>
  );
}
