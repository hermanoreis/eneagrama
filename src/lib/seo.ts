import type { Metadata } from "next";

export const SITE_URL = "https://eneagrama.hermano.me";

export function publicMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "Eneagrama por Hermano Reis", locale: "pt_BR", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export function privateMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: false } };
}
