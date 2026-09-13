"use client";

import Link from "next/link";
import { useRef } from "react";

export function MobileNav({
  loggedIn,
  menuLabel,
  navLabel,
  links,
}: {
  loggedIn: boolean;
  menuLabel: string;
  navLabel: string;
  links: { href: string; label: string }[];
}) {
  const menu = useRef<HTMLDetailsElement>(null);
  void loggedIn;
  return (
    <details
      ref={menu}
      className="mobile-nav md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary className="cursor-pointer rounded px-3 py-2 text-sm">{menuLabel}</summary>
      <nav aria-label={navLabel} className="mobile-nav-panel">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              if (menu.current) menu.current.open = false;
            }}
            className="block rounded px-4 py-3 hover:bg-[color:var(--wash)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
