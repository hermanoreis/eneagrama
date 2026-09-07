import Link from "next/link";
import { getSession } from "../lib/session";

const links = [
  { href: "/tipos", label: "Tipos" },
  { href: "/#como-ajuda", label: "Como ajuda" },
  { href: "/sintese", label: "Síntese de liderança" },
];

export async function SiteHeader() {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="font-display text-xl leading-none">
          Eneagrama
        </Link>
        <nav className="hidden items-center gap-2 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-sm">
          {loggedIn ? (
            <>
              <Link
                href="/mentor"
                className="rounded-full px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)]"
              >
                Mentor
              </Link>
              <Link
                href="/conta"
                className="hidden rounded-full px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] sm:inline"
              >
                Conta
              </Link>
            </>
          ) : (
            <Link
              href="/entrar"
              className="rounded-full px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)]"
            >
              Entrar
            </Link>
          )}
          <Link
            href={loggedIn ? "/teste" : "/entrar?next=/teste"}
            className="btn-primary btn-compact"
          >
            {loggedIn ? "Teste" : "Começar"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export async function SiteFooter() {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  const foot = [
    { href: "/tipos", label: "Tipos" },
    { href: "/sintese", label: "Síntese de liderança" },
    { href: "/biblioteca", label: "Biblioteca" },
    loggedIn
      ? { href: "/conta", label: "Conta" }
      : { href: "/entrar", label: "Entrar" },
  ];
  return (
    <footer className="mt-auto border-t border-[color:var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-[color:var(--mute)] sm:flex-row sm:items-start sm:justify-between">
        <p>Nove tipos. Um mapa para se entender, e para entender os outros.</p>
        <nav className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
          {foot.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="underline underline-offset-4 hover:text-[color:var(--ink)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
