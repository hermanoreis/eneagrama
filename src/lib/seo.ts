import type { Metadata } from "next";
import { OG_ALT, OG_IMAGE_PATH, OG_SIZE } from "./og-meta";

export const SITE_URL = "https://eneagrama.hermano.me";

export const defaultOgImage = {
  url: OG_IMAGE_PATH,
  width: OG_SIZE.width,
  height: OG_SIZE.height,
  alt: OG_ALT,
};

export function publicMetadata(
  title: string,
  description: string,
  path: string,
  image = defaultOgImage,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Eneagrama por Hermano Reis",
      locale: "pt_BR",
      type: "website",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function privateMetadata(title: string): Metadata {
  return { title, robots: { index: false, follow: false } };
}
