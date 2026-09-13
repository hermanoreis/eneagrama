import { Suspense } from "react";
import { redirect } from "next/navigation";
import { LoginClient } from "@/components/LoginClient";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { privateMetadata } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  return privateMetadata(getMessages(locale).login.title);
}

export default async function EntrarPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ next?: string | string[] }>;
}) {
  const locale = await localeFromParams(params);
  const session = await getSession();
  if (session?.user) redirect(href(locale, "account"));
  const query = await searchParams;
  const next = Array.isArray(query.next) ? query.next[0] : query.next;
  const goingToTest = Boolean(next?.startsWith(href(locale, "test")));
  const m = getMessages(locale);
  return (
    <Suspense fallback={<p>{m.login.loading}</p>}>
      <LoginClient goingToTest={goingToTest} />
    </Suspense>
  );
}
