import Link from "next/link";
import { getSession } from "../lib/session";

const links = [
  { href: "/tipos", label: "Tipos" },
  { href: "/#como-ajuda", label: "Como ajuda" },
  { href: "/sintese", label: "Síntese" },
];

export async function SiteHeader() {
  const session = await getSession();
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl">Eneagrama</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-sm">
          {session?.user ? (
            <>
              <Link
                href="/mentor"
                className="rounded-full px-3 py-1.5 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)]"
              >
                Mentor
              </Link>
              <Link
                href="/conta"
                className="rounded-full px-3 py-1.5 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)]"
              >
                Conta
              </Link>
            </>
          ) : (
            <Link
              href="/entrar"
              className="rounded-full px-3 py-1.5 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)]"
            >
              Entrar
            </Link>
          )}
          <Link href={session?.user ? "/teste" : "/entrar?next=/teste"} className="btn-primary !px-4 !py-2">
            Fazer o teste
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[color:var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-[color:var(--mute)] sm:flex-row sm:justify-between">
        <p>Nove tipos. Um mapa para se entender — e entender os outros.</p>
        <p>O resultado é um ponto de partida, não um diagnóstico fechado.</p>
      </div>
    </footer>
  );
}
