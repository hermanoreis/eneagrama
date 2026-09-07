import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
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
