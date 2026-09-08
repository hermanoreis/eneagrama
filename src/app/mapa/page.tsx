import { publicMetadata } from "../../lib/seo";
import Link from "next/link";
import { EnneagramMark } from "../../components/EnneagramMark";
import { PaperMotion } from "../../components/PaperMotion";
import { TypeAvatar } from "../../components/TypeAvatar";
import {
  arrowsByType,
  healthLevels,
  otherTriads,
  triads,
  variants,
  whatIsAType,
} from "../../data/map";
import { typeById, types, type TypeId } from "../../data/types";

export const metadata = publicMetadata("O que é Eneagrama? Tipos, asas e conceitos", "Entenda o que é o Eneagrama e conheça tipos, centros, asas e flechas, com explicações para quem está começando.", "/mapa");

export default function MapaPage() {
  return (
    <article className="space-y-20">
      <header className="max-w-2xl">
        <h1 className="font-display text-5xl sm:text-6xl">O que é o Eneagrama e como ele funciona</h1>
        <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">
          Entenda os nove tipos e os conceitos que aparecem nas descrições. Comece pela visão geral e aprofunde o que fizer sentido para você.
        </p>
      </header>

      <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)]">
        <div className="max-w-xl space-y-4">
          <h2 className="font-display text-4xl">O que é um tipo?</h2>
          <p className="text-lg leading-relaxed">O Eneagrama descreve nove padrões de personalidade. Cada tipo reúne motivações, hábitos de atenção e formas de reagir. As descrições podem ajudar você a comparar esses padrões com a sua experiência.</p>
          <p className="leading-relaxed text-[color:var(--ink-soft)]">{whatIsAType.note}</p>
          <p className="leading-relaxed text-[color:var(--ink-soft)]">
            Essência e personalidade são conceitos usados nessa abordagem para refletir sobre o que valorizamos e os hábitos que desenvolvemos. O teste não mede esses conceitos nem oferece um diagnóstico.
          </p>
        </div>
        <EnneagramMark interactive size={280} className="text-[color:var(--ink)]" />
      </section>

      <section id="triades" className="scroll-mt-24">
        <h2 className="font-display text-4xl">Tríades</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">
          Os nove tipos são organizados em três grupos, também chamados de centros: instinto, sentimento e pensamento. Esses grupos ajudam a estudar as motivações descritas no Eneagrama.
        </p>
        <PaperMotion className="mt-8 grid gap-5 md:grid-cols-3">
          {Object.values(triads).map((t) => (
            <article
              key={t.id}
              className="triad-card relative rounded-[28px] border border-[color:var(--line)] bg-white p-6 shadow-[0_12px_32px_rgba(27,36,48,0.05)]"
            >
              <div className="triad-cast" aria-hidden>
                {t.types.map((id) => (
                  <TypeAvatar key={id} id={id} size={112} className="triad-cast-member" />
                ))}
              </div>
              <h3 className="font-display text-2xl">{t.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">{t.text}</p>
              <p className="mt-4 text-sm">
                {t.time} · {t.feeling} · busca {t.seek.toLowerCase()}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.types.map((id) => (
                  <li key={id}>
                    <Link href={`/tipos/${id}`} className="underline underline-offset-4">
                      {id} {typeById[id].name}
                    </Link>
                    <span className="block text-[color:var(--mute)]">{t.energy[id]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </PaperMotion>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {otherTriads.map((g) => (
            <p key={g.label} className="rounded-2xl bg-[color:var(--wash)] px-4 py-3 text-sm leading-relaxed">
              <span className="font-medium">{g.label}. </span>
              <span className="text-[color:var(--ink-soft)]">
                Tipos {g.types.join(", ")}. {g.text}
              </span>
            </p>
          ))}
        </div>
      </section>

      <section id="variantes" className="scroll-mt-24">
        <h2 className="font-display text-4xl">Variantes instintivas</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">
          Na abordagem do Eneagrama, as variantes descrevem diferentes prioridades ligadas à preservação, aos vínculos e à vida em grupo. São uma forma de explorar diferenças entre pessoas que se reconhecem no mesmo tipo. Este questionário não mede variantes instintivas.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {variants.map((v) => (
            <article
              key={v.id}
              className="rounded-[28px] border border-[color:var(--line)] p-6"
            >
              <h3 className="font-display text-2xl">{v.label}</h3>
              <p className="mt-1 text-sm text-[color:var(--mute)]">
                {v.also} · {v.figure} · {v.focus}
              </p>
              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{v.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--mute)]">{v.palmer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="niveis" className="scroll-mt-24">
        <h2 className="font-display text-4xl">Níveis de desenvolvimento</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">
          {healthLevels.intro}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {healthLevels.bands.map((band) => (
            <article
              key={band.id}
              className="rounded-[28px] bg-white p-6 shadow-[0_12px_32px_rgba(27,36,48,0.05)]"
            >
              <h3 className="font-display text-2xl">{band.label}</h3>
              <ol className="mt-5 space-y-4">
                {band.levels.map((lv) => (
                  <li key={lv.n}>
                    <p className="font-medium">
                      {lv.n}. {lv.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                      {lv.text}
                    </p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section id="asas" className="scroll-mt-24">
        <h2 className="font-display text-4xl">Asas</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">
          Asas são os dois tipos vizinhos no círculo. Dentro dessa abordagem, suas características podem complementar a descrição de um tipo. Quando há um único tipo com mais pontos, o resultado compara as pontuações dos vizinhos. Um empate entre eles não comprova equilíbrio entre essas influências.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <li key={t.id} className="rounded-2xl border border-[color:var(--line)] p-4">
              <Link href={`/tipos/${t.id}`} className="font-display text-xl">
                {t.id} {t.name}
              </Link>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                {t.wings.map((w) => `${w.id} ${w.name}`).join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section id="flechas" className="scroll-mt-24">
        <h2 className="font-display text-4xl">Flechas</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[color:var(--ink-soft)]">
          Integração (crescimento) vai contra as setas clássicas do símbolo.
          Desintegração (stress) segue as setas. Riso e Hudson descrevem isso
          como movimento para o tipo de segurança ou de stress. Não é destino.
          É um recorte do humor do dia e da faixa em que a pessoa está.
        </p>
        <ol className="mt-8 space-y-4">
          {([1, 2, 3, 4, 5, 6, 7, 8, 9] as TypeId[]).map((id) => {
            const a = arrowsByType[id];
            return (
              <li
                key={id}
                className="rounded-[24px] border border-[color:var(--line)] p-5 md:grid md:grid-cols-[8rem_1fr_1fr] md:gap-6"
              >
                <p className="font-display text-xl">
                  {id} {typeById[id].name}
                </p>
                <p className="mt-3 text-sm leading-relaxed md:mt-0">
                  <span className="font-medium">Integração {a.growth}.</span>{" "}
                  <span className="text-[color:var(--ink-soft)]">{a.growthText}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed md:mt-0">
                  <span className="font-medium">Stress {a.stress}.</span>{" "}
                  <span className="text-[color:var(--ink-soft)]">{a.stressText}</span>
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--mute)]">
        Por Hermano Reis. Conheça as <Link href="/biblioteca/leituras" className="underline underline-offset-4">referências de leitura</Link> e os <Link href="/sobre-o-teste" className="underline underline-offset-4">limites do questionário</Link>.
      </p>
    </article>
  );
}
