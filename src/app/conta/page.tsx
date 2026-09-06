import Link from "next/link";
import { redirect } from "next/navigation";
import { TypeAvatar } from "../../components/TypeAvatar";
import { typeById } from "../../data/types";
import { listResults } from "../../lib/results";
import { getSession } from "../../lib/session";

export const metadata = { title: "Sua conta — Eneagrama" };

export default async function ContaPage() {
  const session = await getSession();
  if (!session?.user) redirect("/entrar?next=/conta");

  const results = await listResults(session.user.id);
  const latest = results[0];
  const profile = latest ? typeById[latest.primaryType as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9] : null;

  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--mute)]">Conta</p>
          <h1 className="mt-2 font-display text-5xl">Olá, {session.user.name || "você"}</h1>
          <p className="mt-2 text-[color:var(--ink-soft)]">{session.user.email}</p>
        </div>
        <form action="/api/auth/logout" method="post">
          <button className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm" type="submit">
            Sair
          </button>
        </form>
      </header>

      {profile && latest ? (
        <section className="grid items-center gap-6 rounded-[32px] bg-white p-7 shadow-[0_16px_40px_rgba(27,36,48,0.06)] md:grid-cols-[auto_1fr]">
          <TypeAvatar id={profile.id} color={profile.color} size={110} />
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--mute)]">
              Último resultado · {new Date(latest.createdAt).toLocaleDateString("pt-BR")}
            </p>
            <h2 className="mt-1 font-display text-4xl">
              {profile.id} · {profile.name}
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-[color:var(--ink-soft)]">{profile.summary}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/mentor" className="btn-primary !py-2">
                Conversar com o mentor
              </Link>
              <Link href={`/tipos/${profile.id}`} className="btn-dark !py-2">
                Relêr o perfil
              </Link>
              <Link href="/teste" className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm">
                Fazer de novo
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="rounded-[32px] bg-white p-8 text-center shadow-[0_16px_40px_rgba(27,36,48,0.06)]">
          <h2 className="font-display text-3xl">Você ainda não fez o teste</h2>
          <p className="mt-2 text-[color:var(--ink-soft)]">
            135 afirmativas. O resultado fica salvo aqui para você voltar depois.
          </p>
          <Link href="/teste" className="btn-primary mt-6">
            Começar o teste
          </Link>
        </section>
      )}

      {results.length > 1 ? (
        <section>
          <h2 className="font-display text-3xl">Histórico</h2>
          <ul className="mt-4 divide-y divide-[color:var(--line)] rounded-[28px] border border-[color:var(--line)] bg-white">
            {results.map((r) => {
              const t = typeById[r.primaryType as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9];
              return (
                <li key={r.id} className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="font-medium">
                      {t.id} · {t.name}
                    </p>
                    <p className="text-sm text-[color:var(--mute)]">
                      {new Date(r.createdAt).toLocaleString("pt-BR")}
                    </p>
                  </div>
                  <Link href={`/tipos/${t.id}`} className="text-sm underline underline-offset-4">
                    Ver tipo
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
