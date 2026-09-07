import Link from "next/link";
import { kindLabel, library } from "../../data/library";

export const metadata = {
  title: "Biblioteca · Eneagrama",
};

export default function BibliotecaPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <h1 className="font-display text-5xl">Biblioteca</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          O material de ensino vive aqui, no próprio site. Perfis, teste,
          síntese, workbook, resumão e o mapa. Os livros da pasta entram como
          guia de leitura, não como PDF.
        </p>
      </header>

      <ul className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
        {library.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              className="grid gap-2 py-4 sm:grid-cols-[88px_1fr] sm:items-baseline"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">
                {kindLabel[item.kind]}
              </span>
              <span>
                <span className="font-display text-xl">{item.title}</span>
                <span className="mt-1 block text-sm text-[color:var(--ink-soft)]">{item.note}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
