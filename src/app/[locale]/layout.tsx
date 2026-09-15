import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/SiteHeader";
import { I18nProvider } from "../../i18n/provider";
import { htmlLang, isLocale, locales, ogLocale, type Locale } from "../../i18n/config";
import { cjkStylesheet } from "../../i18n/cjk-stylesheet";
import { ICON_PAPER } from "../../lib/enneagram-icon";
import { defaultOgImage } from "../../lib/seo";
import { getMessages } from "../../messages";
import { getClientPack } from "../../data/pack";
import "../globals.css";

const sans = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: ICON_PAPER,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const messages = getMessages(raw);
  return {
    metadataBase: new URL("https://eneagrama.hermano.me"),
    title: { default: messages.home.title, template: "%s | Eneagrama" },
    authors: [{ name: "Hermano Reis", url: "https://hermano.me" }],
    description: messages.home.description,
    openGraph: {
      siteName: "Eneagrama por Hermano Reis",
      locale: ogLocale[raw],
      type: "website",
      images: [defaultOgImage],
    },
    twitter: { card: "summary_large_image", images: [defaultOgImage.url] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const messages = getMessages(locale);
  const pack = getClientPack(locale);
  const cjkHref = cjkStylesheet[locale];

  return (
    <html lang={htmlLang[locale]} className={`${sans.variable} h-full antialiased`}>
      {cjkHref ? <link rel="stylesheet" href={cjkHref} /> : null}
      <body className="flex min-h-full flex-col">
        <I18nProvider locale={locale} messages={messages} pack={pack}>
          <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[color:var(--paper)] focus:p-4">
            {messages.skip}
          </a>
          <SiteHeader locale={locale} />
          <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:py-12">
            {children}
          </main>
          <SiteFooter locale={locale} />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
