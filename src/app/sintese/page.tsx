import { publicMetadata } from "../../lib/seo";
import Link from "next/link";
import { PaperMotion } from "../../components/PaperMotion";
import { TypeAvatar } from "../../components/TypeAvatar";
import { types } from "../../data/types";

export const metadata = publicMetadata("Eneagrama no trabalho: comunicação e colaboração", "Compare os tipos do Eneagrama em situações de cobrança, comunicação e colaboração. Reflita sobre sua participação no time.", "/sintese");

export default function SintesePage() {
  return (
    <div className="space-y-12">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
          Comunicação e colaboração
        </p>
        <h1 className="mt-2 font-display text-5xl">O Eneagrama no trabalho</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Compare como cada tipo é descrito em situações de cobrança, comunicação e colaboração. Use o conteúdo para observar sua participação no time. As descrições não determinam a profissão ou o papel de alguém na equipe.
        </p>
      </header>

      <PaperMotion className="space-y-6">
        {types.map((t) => (
          <article
            key={t.id}
            className="sintese-type paper-interactive grid gap-6 rounded-3xl border border-[color:var(--line)] p-6 md:grid-cols-[10rem_1fr_1fr]"
          >
            <div className="flex items-start gap-4 md:block">
              <TypeAvatar id={t.id} size={160} />
              <div className="min-w-0">
                <Link href={`/tipos/${t.id}`} className="font-display text-2xl hover:text-[color:var(--accent)]">
                  {t.id} · {t.name}
                </Link>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  {t.leadership}
                </p>
              </div>
            </div>
            <Column title="Pontos fortes" items={t.strengths} />
            <Column title="A desenvolver" items={t.develop} />
          </article>
        ))}
      </PaperMotion>
    </div>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm leading-relaxed">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}
