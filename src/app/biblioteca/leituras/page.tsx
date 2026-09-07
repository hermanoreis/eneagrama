import Link from "next/link";
import { publicMetadata } from "../../../lib/seo";

export const metadata = publicMetadata(
  "Livros sobre Eneagrama: referências para estudar",
  "Conheça as obras de Helen Palmer, Don Richard Riso e Russ Hudson citadas no site e os temas que abordam.",
  "/biblioteca/leituras",
);

export default function LeiturasPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-10">
      <header>
        <Link href="/biblioteca" className="text-sm underline underline-offset-4">Materiais de estudo</Link>
        <h1 className="mt-4 font-display text-5xl">Referências para estudar Eneagrama</h1>
        <p className="mt-5 leading-relaxed text-[color:var(--ink-soft)]">Conheça os livros citados neste site e os temas que cada um aborda. As explicações abaixo apresentam conceitos; não reproduzem os livros nem validam o questionário.</p>
        <p className="mt-4 text-sm text-[color:var(--mute)]">Por Hermano Reis</p>
      </header>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Helen Palmer: O Eneagrama</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">Uma das ideias exploradas por Palmer é a relação entre personalidade e atenção: o que uma pessoa percebe primeiro, o que tende a deixar de lado e como isso aparece nas relações.</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">Essa leitura pode acompanhar uma pergunta simples: em uma situação que se repete, para onde vai a minha atenção? Compare o que você observa com as descrições dos tipos.</p>
        <Link href="/tipos" className="inline-block underline underline-offset-4">Conhecer os nove tipos</Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Riso e Hudson: A sabedoria do Eneagrama</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">Don Richard Riso e Russ Hudson apresentam descrições dos tipos, asas e níveis de desenvolvimento. Esses conceitos ampliam o estudo das motivações e das formas de reagir.</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">Os níveis pertencem a essa abordagem teórica. O teste deste site não mede o nível de desenvolvimento ou a saúde mental de uma pessoa.</p>
        <Link href="/mapa" className="inline-block underline underline-offset-4">Entender os conceitos do Eneagrama</Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">E o que a pesquisa diz?</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">Uma revisão de estudos publicada por Hook e colaboradores em 2021 encontrou evidências mistas de confiabilidade e validade do Eneagrama. Ela também aponta pouca pesquisa sobre aspectos como asas e movimentos entre tipos.</p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">É por isso que apresentamos o resultado como apoio à reflexão, com limites. A experiência pessoal com o Eneagrama não comprova a precisão de um questionário.</p>
        <a href="https://pubmed.ncbi.nlm.nih.gov/33332604/" className="inline-block underline underline-offset-4">Ler a revisão no Journal of Clinical Psychology</a>
      </section>
      <Link href="/sobre-o-teste" className="inline-block underline underline-offset-4">Como este teste calcula o resultado e quais são seus limites</Link>
    </article>
  );
}
