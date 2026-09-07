import Link from "next/link";
import { EnneagramMark } from "../components/EnneagramMark";
import { getSession } from "../lib/session";
import { centers, typeById } from "../data/types";

const centerBlurb = {
  instinto: "Corpo, ação e energia. A questão de fundo é a raiva.",
  sentimento: "Imagem, afeto e valor. A questão de fundo é a vergonha.",
  pensamento: "Mente, segurança e possibilidades. A questão de fundo é o medo.",
} as const;

export default async function Home() {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  const testHref = loggedIn ? "/teste" : "/entrar?next=/teste";
  const startLabel = loggedIn ? "Continuar o teste" : "Receber código e começar";

  return (
    <div className="space-y-16 md:space-y-24">
      <section className="grid items-start gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
        <div>
          <h1 className="font-display text-5xl leading-[1.04] sm:text-7xl">
            É incrível finalmente se entender.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
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
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[color:var(--mute)]">
            {loggedIn
              ? "O teste fica na sua conta. Pode parar e voltar."
              : "Primeiro um código no e-mail, sem senha. Depois 135 frases, uns 15 minutos. Pode parar e voltar."}
          </p>
        </div>
        <Link
          href="/tipos"
          className="mx-auto block w-[168px] opacity-95 transition-opacity hover:opacity-100 motion-reduce:transition-none sm:w-[220px] md:mx-0 md:ml-auto md:w-[280px] md:pt-1"
          aria-label="Ver os nove tipos"
        >
          <EnneagramMark size={280} className="h-auto w-full text-[color:var(--ink)]" />
        </Link>
      </section>

      <section id="como-ajuda">
        <h2 className="font-display text-4xl">Como o Eneagrama ajuda</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(27,36,48,0.06)]">
            <h3 className="font-display text-2xl">Relacionamentos com menos ruído</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">
              Você passa a ver o medo e o desejo por trás das reações, as suas e
              as das pessoas próximas. Menos julgamento, mais linguagem comum
              para conversas difíceis, família e intimidade.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--ink-soft)]">
              <li>Entender por que certas discussões se repetem</li>
              <li>Nomear necessidades sem se reduzir a um rótulo</li>
              <li>Criar espaço para o outro sem desaparecer de si</li>
            </ul>
          </article>
          <article className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(27,36,48,0.06)]">
            <h3 className="font-display text-2xl">Liderança e colaboração</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">
              Cada tipo lidera de um jeito: qualidade, cuidado, resultado,
              sentido, análise, segurança, inovação, força ou harmonia. O mapa
              ajuda a montar times e a desenvolver o que trava.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--ink-soft)]">
              <li>Ler o estilo de um colega sem estereotipar</li>
              <li>Ajustar feedback ao que cada tipo escuta</li>
              <li>Escolher papéis em que o talento aparece</li>
            </ul>
          </article>
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl">Como funciona</h2>
        <ol className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "1",
              t: "Código no e-mail",
              d: "Seis dígitos. Sem senha para lembrar.",
            },
            {
              n: "2",
              t: "135 frases",
              d: "Nove seções. Pode parar. O teste fica salvo na conta.",
            },
            {
              n: "3",
              t: "Tipo, ranking e mentor",
              d: "Perfil e práticas. O mentor lê o seu último resultado.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-[28px] border border-[color:var(--line)] p-6">
              <p className="font-display text-3xl leading-none tabular-nums text-[color:var(--accent)]">
                {s.n}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl">Três centros, nove tipos</h2>
          <Link
            href="/tipos"
            className="text-sm font-medium text-[color:var(--mute)] underline underline-offset-4 hover:text-[color:var(--ink)]"
          >
            Ver os nove tipos
          </Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {Object.entries(centers).map(([key, c]) => (
            <Link
              key={key}
              href="/tipos"
              className="rounded-[28px] border border-[color:var(--line)] p-6 transition hover:border-[color:var(--ink)] motion-reduce:transition-none"
            >
              <h3 className="font-display text-2xl">{c.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                {centerBlurb[key as keyof typeof centerBlurb]}
              </p>
              <p className="mt-4 text-sm text-[color:var(--mute)]">
                {c.types.map((id) => typeById[id].name).join(", ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="sobre">
        <h2 className="font-display text-4xl leading-[1.08] sm:text-5xl">
          Fiz este site para devolver
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
          O Eneagrama me ajudou bastante a me conhecer. Mudou minhas dinâmicas
          de trabalho, inclusive quando eu liderei equipes. Construí isto para
          que outras pessoas também tenham o Eneagrama à mão e se conheçam
          melhor.
        </p>
        <p className="mt-8 font-display text-3xl leading-none">Hermano</p>
        <p className="mt-3 max-w-xl text-[color:var(--ink-soft)]">
          Teste, perfis e mentor estão aqui. O mentor conversa a partir do seu
          ranking, quando você quiser.
        </p>
      </section>

      <section className="on-ink rounded-[32px] bg-[color:var(--ink)] px-8 py-12 text-white sm:px-10 sm:py-14">
        <h2 className="font-display text-4xl">Pronto para o retrato?</h2>
        <p className="mt-4 max-w-xl text-[color:var(--ink-on-dark)]">
          {loggedIn
            ? "Continue as 135 frases. O ranking e o mentor ficam na sua conta."
            : "Um código no e-mail, depois as 135 frases. O ranking fica na conta para o mentor ler."}
        </p>
        <Link href={testHref} className="btn-primary mt-7">
          {startLabel}
        </Link>
      </section>
    </div>
  );
}
