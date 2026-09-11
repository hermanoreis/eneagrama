import Link from "next/link";
import { redirect } from "next/navigation";
import { TypeAvatar } from "../../components/TypeAvatar";
import { WingCallout } from "../../components/WingCallout";
import { typeById } from "../../data/types";
import { typeIntroductions } from "../../data/copy";
import { listResults } from "../../lib/results";
import { getSession } from "../../lib/session";
import { resultLeaders, wingOf } from "../../lib/quiz";
import { privateMetadata } from "../../lib/seo";

export const metadata = privateMetadata("Sua conta");

export default async function ContaPage() {
  const session = await getSession();
  if (!session?.user) redirect("/entrar?next=/conta");
  const results = await listResults(session.user.id);
  const latest = results[0];
  const leaders = latest ? resultLeaders(latest.scores) : [];
  const tied = leaders.length > 1;
  const primary = leaders.length === 1 ? leaders[0] : null;
  const wing = primary && latest ? wingOf(primary.id, latest.scores) : null;

  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="text-sm text-[color:var(--mute)]">Sua conta</p><h1 className="mt-2 font-display text-5xl">Olá, {session.user.name || "você"}</h1><p className="mt-3 break-all text-[color:var(--ink-soft)]">{session.user.email}</p></div>
        <form action="/api/auth/logout" method="post"><button className="btn-ghost" type="submit">Sair</button></form>
      </header>
      {leaders.length > 0 && latest ? (
        <section className="space-y-5">
          <p className="text-sm text-[color:var(--mute)]">Último resultado · {new Date(latest.createdAt).toLocaleDateString("pt-BR")}</p>
          <h2 className="font-display text-3xl">{tied ? "Opa! Houve um empate em primeiro lugar" : primary ? `${primary.id} · ${typeById[primary.id].name}` : "O tipo com mais pontos nas suas respostas"}</h2>
          {tied ? (
            <p>Você é bastante versátil, hein? Os tipos abaixo tiveram a mesma pontuação. Reveja algumas frases no resultado para desempatar, se quiser mais clareza sobre o seu tipo.</p>
          ) : null}
          <div className="grid gap-4 md:grid-cols-2">
            {leaders.map((leader) => (
              <article key={leader.id} className="rounded-3xl bg-white p-6">
                <TypeAvatar id={leader.id} size={140} />
                <h3 className="mt-4 font-display text-3xl">{leader.id} · {typeById[leader.id].name}</h3>
                <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">{typeIntroductions[leader.id]}</p>
                <Link href={`/tipos/${leader.id}`} className="mt-5 inline-block underline underline-offset-4">Reler o perfil do tipo {leader.id}</Link>
              </article>
            ))}
          </div>
          {wing && primary ? <WingCallout primary={primary.id} wing={wing} /> : null}
          <p className="text-sm text-[color:var(--mute)]">Este resultado é um ponto de partida para reflexão. Não é um diagnóstico.</p>
          <div className="flex flex-wrap gap-3">
            {tied ? <Link href="/teste/resultado" className="btn-primary">Ir ao resultado e desempatar</Link> : <Link href="/mentor" className="btn-primary">Conversar com o mentor</Link>}
            {tied ? <Link href="/mentor" className="btn-ghost">Conversar com o mentor</Link> : null}
            <Link href="/teste" className="btn-ghost">Voltar ao teste</Link>
          </div>
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
              const one = group.length === 1 ? group[0] : null;
              const savedWing = one ? wingOf(one.id, result.scores) : null;
              return <li key={result.id} className="space-y-3 py-5">
                <p className="text-sm text-[color:var(--mute)]">{new Date(result.createdAt).toLocaleString("pt-BR")}</p>
                <p>{group.length > 1 ? "Empate entre os tipos" : one ? "Tipo com mais pontos" : "Registro incompleto"}</p>
                <div className="flex flex-wrap gap-4">{group.map((type) => <Link key={type.id} href={`/tipos/${type.id}`} className="underline underline-offset-4">{type.id} · {typeById[type.id].name}</Link>)}</div>
                {one && savedWing ? (
                  <p className="text-sm text-[color:var(--ink-soft)]">
                    {savedWing.tied || !savedWing.id
                      ? `Asa: vizinhos ${savedWing.left} e ${savedWing.right} empatados.`
                      : `Asa: ${one.id}w${savedWing.id} · tipo ${one.id} com asa ${savedWing.id}.`}
                  </p>
                ) : null}
              </li>;
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
