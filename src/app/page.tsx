import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "../components/HomeHero";
import { getSession } from "../lib/session";
import { types } from "../data/types";
import { homeFaq, typeIntroductions } from "../data/copy";
import { publicMetadata } from "../lib/seo";

export const metadata = publicMetadata(
  "Teste de Eneagrama gratuito: conheça os 9 tipos",
  "Faça o teste gratuito de Eneagrama, conheça os nove tipos e explore seus padrões nas relações e no trabalho. Conteúdo em português por Hermano Reis.",
  "/",
);

export default async function Home() {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  const testHref = loggedIn ? "/teste" : "/entrar?next=/teste";
  const startLabel = "Fazer o teste gratuito";

  return (
    <div className="space-y-16 md:space-y-24">
      <HomeHero testHref={testHref} startLabel={startLabel} loggedIn={loggedIn} />
      <section className="max-w-3xl space-y-5">
        <h2 className="font-display text-4xl">O que é o Eneagrama?</h2>
        <p className="text-lg leading-relaxed text-[color:var(--ink-soft)]">O Eneagrama é um modelo que descreve nove padrões de personalidade, com diferentes motivações e formas de reagir. Aqui, você pode conhecer esses padrões, responder a um questionário e comparar as descrições com a sua experiência.</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">O resultado serve como ponto de partida para reflexão. Não é um diagnóstico.</p>
        <Link href="/mapa" className="inline-block underline underline-offset-4">Entender como o Eneagrama funciona</Link>
      </section>
      <section id="como-ajuda" className="scroll-mt-24">
        <h2 className="font-display text-4xl">O que você pode fazer com o resultado?</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { title: "Reconhecer hábitos que se repetem", text: "Você costuma se cobrar mesmo quando fez um bom trabalho? Ou concorda com algo para evitar um conflito? Compare as descrições dos tipos com situações que você conhece." },
            { title: "Encontrar palavras para uma conversa", text: "Use os perfis para refletir sobre o que você precisa, o que costuma evitar e o que gostaria de explicar melhor a alguém." },
            { title: "Escolher algo para experimentar", text: "Cada perfil traz sugestões de prática. Você pode começar por uma delas e observar como reage ao longo da semana." },
          ].map((item) => (
            <article key={item.title} className="rounded-[28px] bg-white p-7 shadow-[0_16px_40px_rgba(27,36,48,0.06)]">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-display text-4xl">Conheça os nove tipos do Eneagrama</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">Você pode se reconhecer em mais de uma descrição. Leia com curiosidade e procure situações que ajudem a entender o que faz sentido para você.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type) => (
            <Link key={type.id} href={`/tipos/${type.id}`} className="flex flex-col rounded-3xl border border-[color:var(--line)] p-6 transition-colors hover:border-[color:var(--ink)]">
              <h3 className="font-display text-2xl"><span className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-lg" style={{ background: type.color, color: type.ink }}>{type.id}</span>{type.name}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">{typeIntroductions[type.id]}</p>
              <span className="mt-5 text-sm underline underline-offset-4">Conhecer o tipo {type.id}</span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-[color:var(--mute)]">Os nomes ajudam a organizar as descrições. Nenhum tipo é melhor que outro, e eles não definem uma profissão.</p>
      </section>
      <section id="como-funciona" className="scroll-mt-24">
        <h2 className="font-display text-4xl">Como funciona</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { title: "Entre com seu e-mail", text: "Você recebe um código para acessar o teste. Não precisa criar uma senha." },
            { title: "Responda no seu ritmo", text: "São 135 afirmativas sobre hábitos e formas de reagir. Se precisar de uma pausa, volte neste mesmo navegador para continuar." },
            { title: "Compare as descrições", text: "Ao concluir, veja quais tipos tiveram mais pontos e leia os perfis. Depois, explore as práticas ou converse com o mentor com IA." },
          ].map((step, index) => (
            <li key={step.title} className="rounded-[28px] border border-[color:var(--line)] p-6">
              <p className="font-display text-3xl text-[color:var(--accent)]">{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{step.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/sobre-o-teste" className="mt-5 inline-block text-sm underline underline-offset-4">Como a pontuação funciona e quais são seus limites</Link>
      </section>
      <section className="max-w-3xl space-y-5">
        <h2 className="font-display text-4xl">Quer pensar sobre uma situação da sua vida?</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">Você pode conversar com uma IA que consulta seu último resultado e o conteúdo do Eneagrama disponível aqui. Conte o que aconteceu e peça uma pergunta ou um exercício para começar a refletir.</p>
        <p className="rounded-2xl bg-[color:var(--wash)] p-5">“Tenho dificuldade para dizer não no trabalho. O que posso observar?”</p>
        <p className="text-sm leading-relaxed text-[color:var(--mute)]">O mentor pode errar. Use a conversa como apoio à reflexão; ela não substitui acompanhamento profissional.</p>
        <Link href="/mentor" className="btn-ghost">Conhecer o mentor</Link>
      </section>
      <section id="sobre" className="grid items-center gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Image src="/images/hermano-papercraft.png" alt="Retrato em papel de Hermano Reis, criador do site." width={800} height={800} sizes="(max-width: 768px) 80vw, 320px" className="mx-auto h-auto w-full max-w-xs rounded-[32px]" />
        <div>
          <h2 className="font-display text-4xl">O Eneagrama me ajudou. Quis compartilhar.</h2>
          <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">O Eneagrama me ajudou a me conhecer melhor e mudou a forma como eu lidava com situações no trabalho, inclusive quando liderei equipes.</p>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">Criei este site para compartilhar o que aprendi e deixar esse conteúdo disponível gratuitamente. Você pode fazer o teste, conhecer os tipos e voltar quando quiser estudar um pouco mais.</p>
          <p className="mt-6 font-display text-2xl">Hermano Reis</p>
          <a href="https://hermano.me" className="mt-3 inline-block text-sm underline underline-offset-4">Conheça meu trabalho</a>
        </div>
      </section>
      <section className="max-w-3xl">
        <h2 className="font-display text-4xl">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {homeFaq.map((item) => (
            <details key={item.question} className="py-5">
              <summary className="cursor-pointer text-lg font-medium">{item.question}</summary>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{item.answer}</p>
            </details>
          ))}
        </div>
        <Link href="/sobre-o-teste" className="mt-5 inline-block text-sm underline underline-offset-4">Entenda o questionário, as referências e o resultado</Link>
      </section>
      <section className="on-ink rounded-[32px] bg-[color:var(--ink)] px-8 py-12 text-white sm:px-10">
        <h2 className="font-display text-4xl">Quer começar pelo teste?</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-[color:var(--ink-on-dark)]">Responda pensando em como você costuma agir. Depois, leia as descrições com calma e veja o que reconhece na sua experiência.</p>
        <Link href={testHref} className="btn-primary mt-7">{startLabel}</Link>
      </section>
    </div>
  );
}
