import type { Metadata, Viewport } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/SiteHeader";
import { I18nProvider } from "../../i18n/provider";
import { htmlLang, isLocale, locales, type Locale } from "../../i18n/config";
import { ICON_PAPER } from "../../lib/enneagram-icon";
import { defaultOgImage } from "../../lib/seo";
import { getMessages } from "../../messages";
import { getPack } from "../../data/pack";
import "../globals.css";

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
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
      locale: raw === "pt-BR" ? "pt_BR" : raw === "es" ? "es_419" : raw === "fr" ? "fr_FR" : "en_US",
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
  const pack = getPack(locale);

  return (
    <html lang={htmlLang[locale]} className={`${sans.variable} ${mono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <I18nProvider locale={locale} messages={messages} pack={pack}>
          <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:p-4">
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
