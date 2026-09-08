import type { Metadata, Viewport } from "next";
import { Geist_Mono, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import { ICON_PAPER } from "../lib/enneagram-icon";
import { defaultOgImage } from "../lib/seo";
import "./globals.css";

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eneagrama.hermano.me"),
  title: { default: "Eneagrama por Hermano Reis", template: "%s | Eneagrama" },
  authors: [{ name: "Hermano Reis", url: "https://hermano.me" }],
  description:
    "Teste gratuito e materiais em português para explorar os nove tipos do Eneagrama.",
  openGraph: {
    siteName: "Eneagrama por Hermano Reis",
    locale: "pt_BR",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: { card: "summary_large_image", images: [defaultOgImage.url] },
};

export const viewport: Viewport = {
  themeColor: ICON_PAPER,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:p-4">Pular para o conteúdo</a>
        <SiteHeader />
        <main id="conteudo" tabIndex={-1} className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:py-12">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
