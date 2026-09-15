import Link from "next/link";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { localeMetadata } from "@/lib/seo";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale).library;
  return localeMetadata(locale, m.title, m.description, "library");
}

export default async function BibliotecaPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const m = getMessages(locale);
  const kinds = m.library.kinds;
  const items = [
    { slug: "tipos", kind: "perfil" as const, href: href(locale, "types"), ...m.library.items.tipos },
    { slug: "teste", kind: "teste" as const, href: href(locale, "test"), ...m.library.items.teste },
    { slug: "sintese", kind: "sintese" as const, href: href(locale, "synthesis"), ...m.library.items.sintese },
    { slug: "mapa", kind: "estudo" as const, href: href(locale, "map"), ...m.library.items.mapa },
    { slug: "workbook", kind: "estudo" as const, href: href(locale, "workbook"), ...m.library.items.workbook },
    { slug: "resumao", kind: "estudo" as const, href: href(locale, "overview"), ...m.library.items.resumao },
    { slug: "leituras", kind: "leitura" as const, href: href(locale, "readings"), ...m.library.items.leituras },
  ];

  return (
    <div className="space-y-10">
      <header className="max-w-2xl">
        <h1 className="font-display text-5xl">{m.library.h1}</h1>
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{m.library.lead}</p>
      </header>

      <ul className="divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
        {items.map((item) => (
          <li key={item.slug}>
            <Link href={item.href} className="grid gap-2 py-4 sm:grid-cols-[88px_1fr] sm:items-baseline">
              <span className="text-sm text-[color:var(--mute)]">{kinds[item.kind]}</span>
              <span>
                <span className="font-display text-xl">{item.title}</span>
                <span className="mt-1 block text-sm text-[color:var(--ink-soft)]">{item.note}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--mute)]">{m.library.driveNote}</p>
    </div>
  );
}
