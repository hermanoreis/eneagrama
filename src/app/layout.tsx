import type { Metadata } from "next";
import { Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
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
  title: "Eneagrama, descubra o seu tipo",
  description:
    "Um retrato de como você pensa, sente e age, na vida pessoal e no trabalho. Teste de 135 afirmativas, resultado salvo na sua conta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:py-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
