import { files, folder, folderViewUrl, kindLabel, viewUrl } from "../../data/resources";

export const metadata = {
  title: "Biblioteca — Eneagrama",
};

export default function BibliotecaPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--mute)]">
          Pasta pública
        </p>
        <h1 className="mt-2 font-display text-5xl">Biblioteca</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Os arquivos originais da pasta {folder.title}. Perfis, teste, síntese,
          workbook, slides e as referências de leitura.
        </p>
        <a
          href={folder.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-full bg-[color:var(--ink)] px-5 py-2 text-sm text-[color:var(--paper)]"
        >
          Abrir pasta no Drive
        </a>
      </header>

      <ul className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
        {files.map((f) => {
          const href = f.kind === "midia" ? folderViewUrl(f.id) : viewUrl(f.id);
          return (
            <li key={f.id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid gap-2 py-4 sm:grid-cols-[88px_1fr_auto] sm:items-baseline"
              >
                <span className="text-xs uppercase tracking-[0.16em] text-[color:var(--mute)]">
                  {kindLabel[f.kind]}
                </span>
                <span>
                  <span className="font-display text-xl">{f.name}</span>
                  <span className="mt-1 block text-sm text-[color:var(--ink-soft)]">{f.note}</span>
                </span>
                <span className="text-sm text-[color:var(--mute)]">{f.size}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
