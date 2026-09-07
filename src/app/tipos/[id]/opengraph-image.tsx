import { notFound } from "next/navigation";
import { typeById, type TypeId } from "../../../data/types";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../../../lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";
export const alt = "Personagem papercraft de um tipo do Eneagrama, por Hermano Reis.";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = typeById[Number(id) as TypeId];
  if (!profile || id !== String(profile.id)) notFound();
  return renderOgImage(profile);
}
