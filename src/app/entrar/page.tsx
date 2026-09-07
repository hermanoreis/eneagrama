import { Suspense } from "react";
import { redirect } from "next/navigation";
import { LoginClient } from "../../components/LoginClient";
import { getSession } from "../../lib/session";

export const metadata = { title: "Entrar · Eneagrama" };

export default async function EntrarPage() {
  const session = await getSession();
  if (session?.user) redirect("/conta");
  return (
    <Suspense fallback={<p>Carregando…</p>}>
      <LoginClient />
    </Suspense>
  );
}
