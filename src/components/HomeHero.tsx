import Link from "next/link";
import { PaperFamily } from "./PaperFamily";

type Props = {
  testHref: string;
  startLabel: string;
  loggedIn: boolean;
};

export function HomeHero({ testHref, startLabel, loggedIn }: Props) {
  return (
    <section className="home-hero">
      <div className="home-hero-grid">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-medium text-[color:var(--cta)]">Teste de Eneagrama gratuito</p>
          <h1 className="font-display hero-title">
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
            <Link href="/tipos" className="hero-secondary">
              Conhecer os nove tipos
            </Link>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--mute)]">
            {loggedIn
              ? "135 afirmativas. Cerca de 15 minutos. Pode continuar depois neste mesmo navegador."
              : "135 afirmativas. Cerca de 15 minutos. Você entra com seu e-mail e pode continuar depois neste mesmo navegador."}
          </p>
        </div>
        <PaperFamily />
      </div>
    </section>
  );
}
