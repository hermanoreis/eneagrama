import { OG_ALT, OG_CONTENT_TYPE, OG_SIZE, renderOgHome } from "../lib/og";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "nodejs";

export default async function Image() {
  return renderOgHome();
}
