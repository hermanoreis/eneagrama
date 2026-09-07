import Link from "next/link";
import { publicMetadata } from "../../lib/seo";

export const metadata = publicMetadata(
  "Como funciona o teste de Eneagrama e como ler o resultado",
  "Conheça a pontuação do teste de Eneagrama, o tratamento de empates, as referências e os limites do resultado.",
  "/sobre-o-teste",
);

export default function SobreTestePage() {
  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header>
        <h1 className="font-display text-5xl">Como funciona este teste</h1>
        <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">
          O questionário organiza suas respostas para ajudar você a explorar os nove tipos.
          Aqui você encontra o que a pontuação significa e os limites dessa leitura.
        </p>
        <p className="mt-4 text-sm text-[color:var(--mute)]">Por Hermano Reis</p>
      </header>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Como a pontuação é calculada?</h2>
        <p>São 135 afirmativas, com 15 relacionadas a cada tipo, distribuídas ao longo do questionário. Cada resposta vale de 1 a 5 pontos. Ao concluir, cada tipo pode somar de 15 a 75 pontos.</p>
        <p>Uma pontuação mais alta indica maior concordância com aquelas frases. Não é uma probabilidade de você ser um tipo, nem uma medida de valor pessoal.</p>
        <p>O resultado é apresentado depois de todas as respostas. Quando dois ou mais tipos têm a mesma pontuação mais alta, mostramos o empate para você comparar as descrições.</p>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">O que são as asas?</h2>
        <p>No Eneagrama, os tipos vizinhos no círculo são chamados de asas. Quando há um único tipo com mais pontos, o site compara os dois vizinhos e mostra suas pontuações. Um empate entre eles não comprova que essas influências sejam equilibradas na sua vida.</p>
        <Link href="/mapa#asas" className="underline underline-offset-4">Entender o conceito de asas</Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">O que o resultado pode dizer?</h2>
        <p>Ele reúne suas respostas e indica descrições para explorar. Compare o que leu com situações reais e considere também os pontos com que você não se identifica.</p>
        <p>Este teste não oferece diagnóstico, não mede níveis de desenvolvimento ou variantes instintivas e não deve ser usado para decidir a profissão ou o papel de alguém em uma equipe.</p>
        <p>A pesquisa sobre o Eneagrama tem limites. Uma revisão de estudos encontrou evidências mistas de confiabilidade e validade. Não apresentamos este questionário como um instrumento de diagnóstico validado.</p>
        <a href="https://pubmed.ncbi.nlm.nih.gov/33332604/" className="inline-block underline underline-offset-4">Ler a revisão de Hook e colaboradores, publicada em 2021</a>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Quais são as referências?</h2>
        <p>As explicações do site recorrem a conceitos apresentados por Helen Palmer e por Don Richard Riso e Russ Hudson. A biblioteca indica as obras para continuar estudando.</p>
        <p>Essas leituras ajudam a contextualizar o Eneagrama. Citá-las não equivale a comprovar a origem de cada afirmativa nem a validar este questionário específico.</p>
        <Link href="/biblioteca/leituras" className="inline-block underline underline-offset-4">Conhecer as referências de leitura</Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-display text-3xl">Onde ficam minhas respostas?</h2>
        <p>Durante o teste, as respostas ficam neste navegador. Ao abrir o resultado completo, o site tenta guardar suas respostas e pontuações na sua conta e informa se conseguiu. Na conta, você pode consultar os tipos registrados no seu histórico.</p>
        <p>O mentor é uma IA e pode consultar seu último resultado completo e os materiais do site. Ele pode sugerir perguntas e exercícios, mas pode errar e não substitui acompanhamento profissional.</p>
      </section>
      <Link href="/teste" className="btn-primary">Fazer o teste gratuito</Link>
    </article>
  );
}
