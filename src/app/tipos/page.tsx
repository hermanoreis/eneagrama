import { publicMetadata } from "../../lib/seo";
import Link from "next/link";
import { TypeGallery } from "../../components/TypeGallery";
import { centers } from "../../data/types";

export const metadata = publicMetadata("Os 9 tipos do Eneagrama: características e diferenças", "Compare os nove tipos do Eneagrama: motivações, hábitos e sugestões de reflexão. Observe o que faz sentido na sua vida.", "/tipos");

export default function TiposPage() {
  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">Galeria</p>
        <h1 className="mt-2 font-display text-5xl">Os nove tipos do Eneagrama</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Conheça as motivações de cada tipo e compare as descrições com situações da sua vida. Você pode começar pelo que chamou sua atenção.{" "}
          <Link href="/mapa" className="underline underline-offset-4">
            Entenda os conceitos do Eneagrama
          </Link>.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(centers).map(([key, c]) => (
          <article key={key} className="rounded-3xl border border-[color:var(--line)] p-5">
            <h2 className="font-display text-xl">{c.label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{c.text}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">
              Tipos {c.types.join(" · ")}
            </p>
          </article>
        ))}
      </div>

      <TypeGallery headingLevel={2} />
    </div>
  );
}
