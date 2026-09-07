import Link from "next/link";
import { redirect } from "next/navigation";
import { TypeAvatar } from "../../components/TypeAvatar";
import { typeById } from "../../data/types";
import { typeIntroductions } from "../../data/copy";
import { listResults } from "../../lib/results";
import { getSession } from "../../lib/session";
import { resultLeaders } from "../../lib/quiz";
import { privateMetadata } from "../../lib/seo";

export const metadata = privateMetadata("Sua conta");

export default async function ContaPage() {
  const session = await getSession();
  if (!session?.user) redirect("/entrar?next=/conta");
  const results = await listResults(session.user.id);
  const latest = results[0];
  const leaders = latest ? resultLeaders(latest.scores) : [];

  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-sm text-[color:var(--mute)]">Sua conta</p><h1 className="mt-2 font-display text-5xl">Olá, {session.user.name || "você"}</h1><p className="mt-3 break-all text-[color:var(--ink-soft)]">{session.user.email}</p></div>
        <form action="/api/auth/logout" method="post"><button className="btn-ghost" type="submit">Sair</button></form>
      </header>
      {leaders.length > 0 && latest ? (
        <section className="space-y-5">
          <p className="text-sm text-[color:var(--mute)]">Último resultado · {new Date(latest.createdAt).toLocaleDateString("pt-BR")}</p>
          <h2 className="font-display text-3xl">{leaders.length > 1 ? "Seu resultado tem um empate" : "O tipo com mais pontos nas suas respostas"}</h2>
          {leaders.length > 1 ? <p>Os tipos abaixo tiveram a mesma pontuação. Compare as descrições e suas motivações.</p> : null}
          <div className="grid gap-4 md:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.id} className="rounded-3xl bg-white p-6">
                <TypeAvatar id={leader.id} color={typeById[leader.id].color} size={88} />
                <h3 className="mt-4 font-display text-3xl">{leader.id} · {typeById[leader.id].name}</h3>
                <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{typeIntroductions[leader.id]}</p>
                <Link href={`/tipos/${leader.id}`} className="mt-5 inline-block underline underline-offset-4">Reler o perfil do tipo {leader.id}</Link>
              </article>
            ))}
          </div>
          <p className="text-sm text-[color:var(--mute)]">Este resultado é um ponto de partida para reflexão. Não é um diagnóstico.</p>
          <div className="flex flex-wrap gap-3"><Link href="/mentor" className="btn-primary">Conversar com o mentor</Link><Link href="/teste" className="btn-ghost">Voltar ao teste</Link></div>
        </section>
      ) : (
        <section className="rounded-3xl bg-white p-8">
          <h2 className="font-display text-3xl">{latest ? "Seu registro anterior está incompleto" : "Seu primeiro resultado começa aqui"}</h2>
          <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{latest ? "Esse registro não reúne todas as respostas necessárias para comparar os tipos. Volte ao teste para completar as 135 afirmativas." : "Responda às 135 afirmativas para explorar os nove tipos. Você pode continuar depois neste mesmo navegador."}</p>
          <Link href="/teste" className="btn-primary mt-6">{latest ? "Continuar o teste" : "Fazer o teste gratuito"}</Link>
        </section>
      )}
      {results.length > 1 ? (
        <section><h2 className="font-display text-3xl">Histórico</h2>
          <ul className="mt-5 divide-y divide-[color:var(--line)]">
            {results.map((result) => {
              const group = resultLeaders(result.scores);
              return <li key={result.id} className="space-y-3 py-5">
                <p className="text-sm text-[color:var(--mute)]">{new Date(result.createdAt).toLocaleString("pt-BR")}</p>
                <p>{group.length > 1 ? "Empate entre os tipos" : group.length === 1 ? "Tipo com mais pontos" : "Registro incompleto"}</p>
                <div className="flex flex-wrap gap-4">{group.map((type) => <Link key={type.id} href={`/tipos/${type.id}`} className="underline underline-offset-4">{type.id} · {typeById[type.id].name}</Link>)}</div>
              </li>;
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
