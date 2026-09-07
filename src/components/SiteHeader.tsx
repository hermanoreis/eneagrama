import Link from "next/link";
import { getSession } from "../lib/session";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "/tipos", label: "Os nove tipos" },
  { href: "/mapa", label: "Como funciona" },
  { href: "/biblioteca", label: "Materiais" },
];

export async function SiteHeader() {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex shrink-0 flex-col gap-1 font-display text-xl leading-none lg:flex-row lg:items-baseline lg:gap-3">
          Eneagrama <span className="text-[10px] font-normal tracking-normal sm:text-xs">por Hermano Reis</span>
        </Link>
        <nav aria-label="Navegação principal" className="hidden items-center gap-2 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden rounded px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] md:inline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 text-sm sm:gap-2">
          <MobileNav loggedIn={loggedIn} />
          {loggedIn ? (
            <>
              <Link
                href="/mentor"
                className="hidden rounded px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] md:inline"
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
              className="hidden rounded px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] md:inline"
            >
              Entrar
            </Link>
          )}
          <Link
            href={loggedIn ? "/teste" : "/entrar?next=/teste"}
            className="btn-primary btn-compact"
          >
            {loggedIn ? "Meu teste" : "Fazer o teste"}
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
    { href: "/tipos", label: "Os nove tipos" },
    { href: "/mapa", label: "Como funciona" },
    { href: "/sintese", label: "Síntese de liderança" },
    { href: "/biblioteca", label: "Materiais" },
    { href: "/sobre-o-teste", label: "Sobre o teste" },
    loggedIn
      ? { href: "/conta", label: "Conta" }
      : { href: "/entrar", label: "Entrar" },
  ];
  return (
    <footer className="mt-auto border-t border-[color:var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-[color:var(--mute)] sm:flex-row sm:items-start sm:justify-between">
        <p>Eneagrama gratuito, por Hermano Reis. Um ponto de partida para se observar.</p>
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
