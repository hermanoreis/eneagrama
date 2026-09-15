import { redirect } from "next/navigation";
import { ResultClient } from "@/components/ResultClient";
import { localeFromParams } from "@/i18n/locale-params";
import { href } from "@/i18n/pathnames";
import { privateMetadata } from "@/lib/seo";
import { getSession } from "@/lib/session";
import { getMessages } from "@/messages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  return privateMetadata(getMessages(locale).result.title);
}

export default async function ResultadoPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await localeFromParams(params);
  const session = await getSession();
  if (!session?.user) redirect(href(locale, "signIn", { next: href(locale, "result") }));

  return (
    <div className="space-y-6">
      <ResultClient />
    </div>
  );
}
