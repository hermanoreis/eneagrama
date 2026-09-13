import Link from "next/link";
import { getSession } from "../lib/session";
import { href } from "../i18n/pathnames";
import { getMessages } from "../messages";
import type { Locale } from "../i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export async function SiteHeader({ locale }: { locale: Locale }) {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  const m = getMessages(locale);
  const links = [
    { href: href(locale, "types"), label: m.nav.types },
    { href: href(locale, "map"), label: m.nav.map },
    { href: href(locale, "library"), label: m.nav.library },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href={href(locale, "home")} className="flex shrink-0 flex-col gap-1 font-display text-xl leading-none lg:flex-row lg:items-baseline lg:gap-3">
          Eneagrama <span className="text-[10px] font-normal tracking-normal sm:text-xs">{m.brandBy}</span>
        </Link>
        <nav aria-label={m.nav.mainNav} className="hidden items-center gap-2 text-sm md:flex">
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
          <MobileNav
            loggedIn={loggedIn}
            menuLabel={m.nav.menu}
            navLabel={m.nav.mobileNav}
            links={[
              ...links,
              ...(loggedIn
                ? [
                    { href: href(locale, "account"), label: m.nav.myAccount },
                    { href: href(locale, "mentor"), label: m.nav.mentor },
                  ]
                : [{ href: href(locale, "signIn"), label: m.nav.signIn }]),
            ]}
          />
          {loggedIn ? (
            <>
              <Link
                href={href(locale, "mentor")}
                className="hidden rounded px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] md:inline"
              >
                {m.nav.mentor}
              </Link>
              <Link
                href={href(locale, "account")}
                className="hidden rounded-full px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] sm:inline"
              >
                {m.nav.account}
              </Link>
            </>
          ) : (
            <Link
              href={href(locale, "signIn")}
              className="hidden rounded px-3 py-2 text-[color:var(--ink-soft)] hover:bg-[color:var(--wash)] hover:text-[color:var(--ink)] md:inline"
            >
              {m.nav.signIn}
            </Link>
          )}
          <Link
            href={loggedIn ? href(locale, "test") : href(locale, "signIn", { next: href(locale, "test") })}
            className="btn-primary btn-compact"
          >
            {loggedIn ? m.nav.myTest : m.nav.takeTest}
          </Link>
        </div>
      </div>
    </header>
  );
}

export async function SiteFooter({ locale }: { locale: Locale }) {
  const session = await getSession();
  const loggedIn = Boolean(session?.user);
  const m = getMessages(locale);
  const foot = [
    { href: href(locale, "types"), label: m.nav.types },
    { href: href(locale, "map"), label: m.nav.map },
    { href: href(locale, "synthesis"), label: m.footer.synthesis },
    { href: href(locale, "library"), label: m.nav.library },
    { href: href(locale, "about"), label: m.footer.about },
    loggedIn
      ? { href: href(locale, "account"), label: m.nav.account }
      : { href: href(locale, "signIn"), label: m.nav.signIn },
  ];
  return (
    <footer className="mt-auto border-t border-[color:var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-[color:var(--mute)] sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <p>{m.footer.blurb}</p>
          <LanguageSwitcher />
        </div>
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
