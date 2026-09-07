import { publicMetadata } from "../../../lib/seo";
import Link from "next/link";

export const metadata = publicMetadata("Exercícios de Eneagrama para observar seus padrões", "Escolha um exercício de Eneagrama, anote o que percebeu e experimente uma prática no seu dia a dia.", "/biblioteca/workbook");

const nines = [
  { id: 1, p: "Perfeição", q: "Onde o padrão me protege, e onde ele me trava?" },
  { id: 2, p: "Presteza", q: "A quem eu sirvo antes de perguntar o que eu preciso?" },
  { id: 3, p: "Performance", q: "Se ninguém visse o resultado, o que ainda valeria a pena?" },
  { id: 4, p: "Profundidade", q: "Que falta eu cultivo para me sentir eu?" },
  { id: 5, p: "Privacidade", q: "O que eu recuso pedir, mesmo precisando?" },
  { id: 6, p: "Precaução", q: "Em que autoridade eu terceirizo a minha coragem?" },
  { id: 7, p: "Prazer", q: "Que dor eu troco por mais uma possibilidade?" },
  { id: 8, p: "Poder", q: "Onde a força vira muro, em vez de proteção?" },
  { id: 9, p: "Paz", q: "O que eu adiei para não desalinhar o ambiente?" },
];

export default function WorkbookPage() {
  return (
    <article className="mx-auto max-w-2xl space-y-12">
      <header>
        <p className="text-sm text-[color:var(--mute)]">
          <Link href="/biblioteca" className="underline underline-offset-4">
            Biblioteca
          </Link>
        </p>
        <h1 className="mt-3 font-display text-5xl">Exercícios para se observar no dia a dia</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Escolha uma proposta, anote o que percebeu e volte a ela depois de experimentar.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">Olhando para dentro</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          Duas frases, escritas sem editar. Vale o primeiro impulso.
        </p>
        <ol className="space-y-3">
          <li className="rounded-2xl bg-[color:var(--wash)] px-5 py-4 leading-relaxed">
            O que eu mais gosto em ser como eu sou é…
          </li>
          <li className="rounded-2xl bg-[color:var(--wash)] px-5 py-4 leading-relaxed">
            O que eu menos gosto em ser como eu sou é…
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">Os nove P</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          Cada palavra se relaciona a um dos tipos. Escolha uma pergunta que tenha a ver com uma situação que você está vivendo.
        </p>
        <ul className="space-y-3">
          {nines.map((n) => (
            <li key={n.id} className="rounded-2xl border border-[color:var(--line)] p-4">
              <p className="font-display text-xl">
                {n.id} · {n.p}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{n.q}</p>
              <Link href={`/tipos/${n.id}`} className="mt-2 inline-block text-sm underline underline-offset-4">
                Perfil {n.id}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-3xl">Plano mínimo</h2>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          Uma semana. Uma prática do seu tipo, a que já está no perfil. Um
          horário em que você vai notá-la. Se falhar, anote o que aconteceu
          antes de se corrigir.
        </p>
        <p className="leading-relaxed text-[color:var(--ink-soft)]">
          O tipo não muda. A gente muda a relação com ele. Auto-observação pede
          tempo, e nunca vira hábito perfeito.
        </p>
      </section>
    </article>
  );
}
