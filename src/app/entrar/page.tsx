import { privateMetadata } from "../../lib/seo";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { LoginClient } from "../../components/LoginClient";
import { getSession } from "../../lib/session";

export const metadata = privateMetadata("Entrar na sua conta");

export default async function EntrarPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string | string[] }>;
}) {
  const session = await getSession();
  if (session?.user) redirect("/conta");
  const params = await searchParams;
  const next = Array.isArray(params.next) ? params.next[0] : params.next;
  const goingToTest = Boolean(next?.startsWith("/teste"));
  return (
    <Suspense fallback={<p>Carregando…</p>}>
      <LoginClient goingToTest={goingToTest} />
    </Suspense>
  );
}
