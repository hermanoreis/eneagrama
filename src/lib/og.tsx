import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import type { EnneaType, TypeId } from "../data/types";
import { OG_ALT, OG_CONTENT_TYPE, OG_IMAGE_PATH, OG_SIZE } from "./og-meta";

export { OG_ALT, OG_CONTENT_TYPE, OG_IMAGE_PATH, OG_SIZE };

const PAPER = "#f7f3eb";
const INK = "#073b33";
const MUTE = "#52695f";

const FAMILY_SIZE = 620;
const TYPE_SIZE = 520;
const FACES: Record<TypeId, { eyes: [number, number, number, number]; width: number; height: number }> = {
  1: { eyes: [49, 33.2, 59, 32.4], width: 2.8, height: 3.5 },
  2: { eyes: [44, 32.5, 54, 32.5], width: 2.8, height: 3.5 },
  3: { eyes: [40, 25, 50.5, 25], width: 2.8, height: 3.5 },
  4: { eyes: [46, 29.5, 57, 29.5], width: 2.8, height: 3.5 },
  5: { eyes: [55.5, 37.5, 64.5, 37.5], width: 2.8, height: 3.5 },
  6: { eyes: [43, 32.5, 54, 32.5], width: 2.8, height: 3.5 },
  7: { eyes: [41.5, 28, 53, 28], width: 2.8, height: 3.5 },
  8: { eyes: [44, 34, 55, 34], width: 2.8, height: 3.5 },
  9: { eyes: [41.5, 29, 53.5, 29], width: 2.8, height: 3.5 },
};

function characterPath(file: string) {
  return join(process.cwd(), "public/images/characters", file);
}

async function eyePng(width: number, height: number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><ellipse cx="${width / 2}" cy="${height / 2}" rx="${width / 2}" ry="${height / 2}" fill="#332a20"/></svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}

function eyeLayers(id: TypeId, size: number, offsetX = 0, offsetY = 0) {
  const face = FACES[id];
  const ew = Math.max(4, Math.round((size * face.width) / 100));
  const eh = Math.max(4, Math.round((size * face.height) / 100));
  return Promise.all(
    [0, 2].map(async (start) => ({
      input: await eyePng(ew, eh),
      left: offsetX + Math.round((size * face.eyes[start]) / 100) - Math.round(ew / 2),
      top: offsetY + Math.round((size * face.eyes[start + 1]) / 100) - Math.round(eh / 2),
    })),
  );
}

async function familyPng() {
  return sharp(join(process.cwd(), "src/assets/og-family.png")).resize(FAMILY_SIZE, FAMILY_SIZE).png().toBuffer();
}

async function typePng(id: TypeId) {
  const body = await sharp(characterPath(`type-${id}.webp`)).resize(TYPE_SIZE, TYPE_SIZE).png().toBuffer();
  return sharp(body)
    .composite(await eyeLayers(id, TYPE_SIZE))
    .png()
    .toBuffer();
}

async function cardArt(profile?: EnneaType) {
  const artSize = profile ? TYPE_SIZE : FAMILY_SIZE;
  const art = profile ? await typePng(profile.id) : await familyPng();
  const left = OG_SIZE.width - artSize - 8;
  const top = Math.max(0, Math.round((OG_SIZE.height - artSize) / 2));
  return sharp({
    create: {
      width: OG_SIZE.width,
      height: OG_SIZE.height,
      channels: 4,
      background: { r: 247, g: 243, b: 235, alpha: 1 },
    },
  })
    .composite([{ input: art, left, top }])
    .png()
    .toBuffer();
}

async function loadAssets(profile?: EnneaType) {
  const fontDir = join(process.cwd(), "src/assets/fonts");
  const [bold, medium, art] = await Promise.all([
    readFile(join(fontDir, "outfit-600.ttf")),
    readFile(join(fontDir, "outfit-500.ttf")),
    cardArt(profile),
  ]);
  return {
    artSrc: `data:image/png;base64,${art.toString("base64")}`,
    fonts: [
      { name: "Outfit", data: bold, weight: 600 as const, style: "normal" as const },
      { name: "Outfit", data: medium, weight: 500 as const, style: "normal" as const },
    ],
  };
}

export async function renderOgImage(profile?: EnneaType) {
  const { fonts, artSrc } = await loadAssets(profile);

  const body = (
    <div
      style={{
        width: OG_SIZE.width,
        height: OG_SIZE.height,
        display: "flex",
        position: "relative",
        backgroundColor: PAPER,
        color: INK,
        fontFamily: "Outfit",
      }}
    >
      <img
        src={artSrc}
        width={OG_SIZE.width}
        height={OG_SIZE.height}
        alt=""
        style={{ position: "absolute", left: 0, top: 0, width: OG_SIZE.width, height: OG_SIZE.height }}
      />
      <div
        style={{
          position: "absolute",
          left: 56,
          top: 0,
          bottom: 0,
          width: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: MUTE,
          }}
        >
          {profile ? `Tipo ${profile.id}` : "Eneagrama"}
        </div>
        <div
          style={{
            fontSize: profile ? 58 : 46,
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: -1.2,
            marginTop: 10,
          }}
        >
          {profile ? profile.name : "É incrível começar a se entender."}
        </div>
      </div>
    </div>
  );

  return new ImageResponse(body, {
    ...OG_SIZE,
    fonts,
  });
}
