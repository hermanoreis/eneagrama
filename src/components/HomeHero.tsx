"use client";

import Link from "next/link";
import { EnneagramMark } from "./EnneagramMark";

type Props = {
  testHref: string;
  startLabel: string;
  loggedIn: boolean;
};

export function HomeHero({ testHref, startLabel, loggedIn }: Props) {
  return (
    <section className="-mt-8 flex min-h-[calc(100svh-4.75rem)] items-center sm:-mt-12">
      <div className="grid w-full items-center gap-10 py-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-6 lg:gap-12">
        <div className="max-w-xl">
          <h1 className="font-display text-5xl leading-[1.04] sm:text-7xl">
            É incrível finalmente se entender.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            O retrato sai de 135 afirmativas da pasta de estudo, com ranking
            salvo na conta. Depois o mentor conversa a partir desse ranking, não
            de um quiz genérico.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={testHref} className="btn-primary">
              {startLabel}
            </Link>
            <Link href="/tipos" className="btn-ghost">
              Ver os nove tipos
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--mute)]">
            {loggedIn
              ? "O teste fica na sua conta. Pode parar e voltar."
              : "Primeiro um código no e-mail, sem senha. Depois 135 frases, uns 15 minutos. Pode parar e voltar."}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:mx-0 md:ml-auto md:max-w-none md:w-[min(100%,28rem)]">
          <EnneagramMark interactive size={440} className="text-[color:var(--ink)]" />
        </div>
      </div>
    </section>
  );
}
