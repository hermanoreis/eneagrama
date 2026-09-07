import Link from "next/link";

export const metadata = {
  title: "Leituras · Eneagrama",
};

export default function LeiturasPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-12">
      <header>
        <p className="text-sm text-[color:var(--mute)]">
          <Link href="/biblioteca" className="underline underline-offset-4">
            Biblioteca
          </Link>
        </p>
        <h1 className="mt-3 font-display text-5xl">Leituras</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          A pasta de estudo traz dois volumes de referência. O site não
          reproduz os livros. Abaixo, o que cada um empresta a este mapa, em
          prosa nossa.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">Helen Palmer, O Eneagrama</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          Palmer lê o tipo como organização da atenção. O ponto não é a lista de
          traços, é o radar: para onde a pessoa olha primeiro, o que some do
          campo, como o corpo, o coração ou a mente tomam a frente. Os centros
          de inteligência (instinto, sentimento, pensamento) viram lentes, não
          caixinhas.
        </p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          O olhar relacional também vem daí. Tipo se reconhece no encontro: o
          que a pessoa pede do outro, o que evita, o que projeta. No mentor,
          isso vira pergunta concreta, não rótulo.
        </p>
        <p className="text-sm text-[color:var(--mute)]">
          No site: tríades e o modo de conversar do mentor.{" "}
          <Link href="/mapa#triades" className="underline underline-offset-4">
            Tríades
          </Link>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">Riso e Hudson, A sabedoria do Eneagrama</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          Riso e Hudson dão o eixo vertical: nove níveis de desenvolvimento
          dentro de cada tipo. A pessoa não “é o 4”. Ela se move em faixas
          saudáveis, médias e não-saudáveis, com o mesmo mapa e recursos muito
          diferentes. Asas coloram. Flechas descrevem o puxão de crescimento e
          o de stress.
        </p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          A trilha UFRGS traduz isso em nomes de faixa (liberação, capacidade,
          valor social; desequilíbrio, controle, supercompensação; violação,
          compulsão, destruição). O teste deste site não mede o nível. O
          vocabulário serve para honestidade, não para diagnóstico.
        </p>
        <p className="text-sm text-[color:var(--mute)]">
          No site:{" "}
          <Link href="/mapa#niveis" className="underline underline-offset-4">
            níveis
          </Link>
          ,{" "}
          <Link href="/mapa#asas" className="underline underline-offset-4">
            asas
          </Link>{" "}
          e{" "}
          <Link href="/mapa#flechas" className="underline underline-offset-4">
            flechas
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
