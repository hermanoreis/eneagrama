import Link from "next/link";
import { typeById, type TypeId } from "../data/types";
import type { WingResult } from "../lib/quiz";
import { TypeAvatar } from "./TypeAvatar";

export function WingCallout({ primary, wing }: { primary: TypeId; wing: WingResult }) {
  const wingType = wing.id ? typeById[wing.id] : null;
  return (
    <section className="rounded-3xl border border-[color:var(--line)] p-6">
      <h2 className="font-display text-3xl">Asa</h2>
      {wing.tied || !wingType ? (
        <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
          Os vizinhos {wing.left} · {typeById[wing.left].name} e {wing.right} · {typeById[wing.right].name} empataram.
          Isso não inventa uma asa única, nem comprova que essas influências sejam equilibradas na sua vida.
        </p>
      ) : (
        <>
          <p className="mt-4 font-display text-4xl tracking-tight">
            {primary}w{wing.id}
          </p>
          <p className="mt-2 text-lg text-[color:var(--ink-soft)]">
            Tipo {primary} com asa {wing.id}
          </p>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
            Entre os vizinhos {wing.left} e {wing.right}, o tipo {wing.id} · {wingType.name} teve mais pontos nas suas respostas.
          </p>
        </>
      )}
      <div className="mt-5 flex flex-wrap gap-6">
        {[wing.left, wing.right].map((id) => (
          <Link key={id} href={`/tipos/${id}`} className="block">
            <TypeAvatar id={id} size={96} />
            <span className="mt-2 inline-block underline underline-offset-4">
              {id} · {typeById[id].name}
            </span>
          </Link>
        ))}
        <Link href="/mapa#asas" className="self-end underline underline-offset-4">
          Entender as asas
        </Link>
      </div>
    </section>
  );
}
