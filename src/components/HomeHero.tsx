import Link from "next/link";
import { EnneagramMark } from "./EnneagramMark";

type Props = {
  testHref: string;
  startLabel: string;
  loggedIn: boolean;
};

export function HomeHero({ testHref, startLabel, loggedIn }: Props) {
  return (
    <section className="-mt-8 flex min-h-[38rem] items-center sm:-mt-12">
      <div className="grid w-full items-center gap-10 py-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-6 lg:gap-12">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium text-[color:var(--cta)]">Teste de Eneagrama gratuito</p>
          <h1 className="font-display text-5xl leading-[1.04] sm:text-7xl">
            É incrível começar a se entender.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Um teste gratuito para explorar seus padrões nas relações, nas escolhas e no trabalho.
            Veja quais tipos se aproximam das suas respostas e use as descrições
            para observar o que faz sentido na sua vida.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={testHref} className="btn-primary">
              {startLabel}
            </Link>
            <Link href="/tipos" className="btn-ghost">
              Conhecer os nove tipos
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--mute)]">
            {loggedIn
              ? "135 afirmativas. Cerca de 15 minutos. Pode continuar depois neste mesmo navegador."
              : "135 afirmativas. Cerca de 15 minutos. Você entra com seu e-mail e pode continuar depois neste mesmo navegador."}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[22rem] sm:max-w-[26rem] md:mx-0 md:ml-auto md:max-w-none md:w-[min(100%,28rem)]">
          <EnneagramMark interactive size={440} className="text-[color:var(--ink)]" />
        </div>
      </div>
    </section>
  );
}
