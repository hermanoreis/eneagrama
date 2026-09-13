import { notFound } from "next/navigation";
import { getPack } from "@/data/pack";
import type { TypeId } from "@/data/schema";
import { localeFromParams } from "@/i18n/locale-params";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Eneagrama";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";

export default async function Image({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const locale = await localeFromParams(params);
  const { id } = await params;
  const pack = getPack(locale);
  const profile = pack.typeById[Number(id) as TypeId];
  if (!profile || id !== String(profile.id)) notFound();
  return renderOgImage(profile);
}
