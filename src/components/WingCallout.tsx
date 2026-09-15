"use client";

import Link from "next/link";
import type { TypeId } from "@/data/schema";
import { useI18n } from "@/i18n/provider";
import type { WingResult } from "@/lib/quiz";
import { TypeAvatar } from "@/components/TypeAvatar";

export function WingCallout({ primary, wing }: { primary: TypeId; wing: WingResult }) {
  const { messages: m, pack, href, t } = useI18n();
  const typeById = pack.typeById;
  const wingId = wing.id;
  const wingType = wingId ? typeById[wingId] : null;
  return (
    <section className="paper-sheet">
      <h2 className="font-display text-3xl">{m.wing.title}</h2>
      {wing.tied || !wingType || !wingId ? (
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          {t(m.wing.tied, {
            left: wing.left,
            leftName: typeById[wing.left].name,
            right: wing.right,
            rightName: typeById[wing.right].name,
          })}
        </p>
      ) : (
        <>
          <p className="mt-4 font-display text-4xl tracking-tight">
            {primary}w{wingId}
          </p>
          <p className="mt-2 text-lg text-[color:var(--ink-soft)]">{t(m.wing.with, { primary, wing: wingId })}</p>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
            {t(m.wing.explain, {
              left: wing.left,
              right: wing.right,
              wing: wingId,
              name: wingType.name,
            })}
          </p>
        </>
      )}
      <div className="mt-5 flex flex-wrap gap-6">
        {[wing.left, wing.right].map((id) => (
          <Link key={id} href={href("type", { id })} className="block">
            <TypeAvatar id={id} size={96} />
            <span className="mt-2 inline-block underline underline-offset-4">
              {id} {typeById[id].name}
            </span>
          </Link>
        ))}
        <Link href={href("map", { hash: "asas" })} className="self-end underline underline-offset-4">
          {m.wing.understand}
        </Link>
      </div>
    </section>
  );
}
