import Link from "next/link";
import { TypeAvatar } from "../components/TypeAvatar";
import { EnneagramMark } from "../components/EnneagramMark";
import { getSession } from "../lib/session";
import { types } from "../data/types";

export default async function Home() {
  const session = await getSession();
  const testHref = session?.user ? "/teste" : "/entrar?next=/teste";

  return (
    <div className="space-y-20">
      <section className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-medium text-[color:var(--accent)]">
            Teste gratuito · 15 minutos · resultado salvo
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-7xl">
            É incrível finalmente se entender.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            O Eneagrama descreve nove jeitos de sentir, decidir e se relacionar.
            Em 135 afirmativas, você recebe um retrato de como opera em casa, no
            amor e no trabalho.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={testHref} className="btn-primary">
              Fazer o teste
            </Link>
            <Link href="/tipos" className="btn-dark">
              Ver os nove tipos
            </Link>
          </div>
          <p className="mt-4 text-sm text-[color:var(--mute)]">
            Sem senha. Enviamos um código de acesso para o seu e-mail.
          </p>
        </div>
        <div className="flex justify-center">
          <EnneagramMark size={300} className="text-[color:var(--ink)]" />
        </div>
      </section>

      <section id="como-ajuda" className="scroll-mt-24 space-y-6">
        <h2 className="font-display text-4xl">Como o Eneagrama ajuda</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(27,36,48,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Vida pessoal
            </p>
            <h3 className="mt-2 font-display text-2xl">Relacionamentos com menos ruído</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">
              Você passa a ver o medo e o desejo por trás das reações, as suas e
              as das pessoas próximas. Menos julgamento, mais linguagem comum
              para conversas difíceis, família e intimidade.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-soft)]">
              <li>· Entender por que certas discussões se repetem</li>
              <li>· Nomear necessidades sem se reduzir a um rótulo</li>
              <li>· Criar espaço para o outro sem desaparecer de si</li>
            </ul>
          </article>
          <article className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(27,36,48,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--cta)]">
              Vida profissional
            </p>
            <h3 className="mt-2 font-display text-2xl">Liderança e colaboração</h3>
            <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">
              Cada tipo lidera com um paradigma diferente: qualidade, cuidado,
              resultado, sentido, análise, segurança, inovação, força ou
              harmonia. O mapa ajuda a montar times e a desenvolver o que trava.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--ink-soft)]">
              <li>· Ler o estilo de um colega sem estereotipar</li>
              <li>· Ajustar feedback ao que cada tipo escuta</li>
              <li>· Escolher papéis em que o talento aparece</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="font-display text-4xl">Como funciona</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Entre com o e-mail",
              d: "Recebe um código de 6 dígitos. Sem senha para lembrar.",
            },
            {
              n: "02",
              t: "Responda 135 frases",
              d: "Escala de nunca a sempre. O teste fica salvo na sua conta.",
            },
            {
              n: "03",
              t: "Leia o seu tipo",
              d: "Ranking, perfil completo e práticas. Volte quando quiser.",
            },
          ].map((s) => (
            <li key={s.n} className="rounded-[28px] border border-[color:var(--line)] p-6">
              <p className="font-display text-3xl text-[color:var(--accent)]">{s.n}</p>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl">Os nove tipos</h2>
          <Link href="/tipos" className="text-sm font-medium underline underline-offset-4">
            Ver todos
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <Link
              key={t.id}
              href={`/tipos/${t.id}`}
              className="rounded-[28px] bg-white p-5 shadow-[0_10px_28px_rgba(27,36,48,0.05)] transition hover:-translate-y-0.5"
            >
              <TypeAvatar id={t.id} color={t.color} size={72} />
              <h3 className="mt-3 font-display text-2xl">{t.name}</h3>
              <p className="text-sm text-[color:var(--mute)]">{t.alias}</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{t.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
        <div>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
            Fiz este site para devolver
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            O Eneagrama me ajudou bastante a me conhecer. Mudou minhas dinâmicas
            de trabalho, inclusive quando eu liderei equipes. Construí isto para
            que outras pessoas também tenham o Eneagrama à mão e se conheçam
            melhor.
          </p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[color:var(--mute)] md:text-right">
          Sou o Hermano. Teste, perfis e mentor estão aqui. O resultado é um
          começo, não um diagnóstico.
        </p>
      </section>

      <section className="rounded-[32px] bg-[color:var(--ink)] px-8 py-12 text-white">
        <h2 className="font-display text-4xl">Pronto para o retrato?</h2>
        <p className="mt-3 max-w-xl text-white/75">
          Crie sua conta com um código no e-mail, faça o teste e volte depois
          para reler o resultado.
        </p>
        <Link href={testHref} className="btn-primary mt-6">
          Começar agora
        </Link>
      </section>
    </div>
  );
}
