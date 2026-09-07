import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp, { type OverlayOptions } from "sharp";
import { typeIntroductions } from "../data/copy";
import type { EnneaType, TypeId } from "../data/types";
import { OG_ALT, OG_CONTENT_TYPE, OG_IMAGE_PATH, OG_SIZE } from "./og-meta";

export { OG_ALT, OG_CONTENT_TYPE, OG_IMAGE_PATH, OG_SIZE };

const PAPER = "#f7f3eb";
const INK = "#073b33";
const INK_SOFT = "#395b53";
const MUTE = "#52695f";
const LINE = "#d3d5c8";

const STAGE_SIZE = 1254;
const OVERLAY_H = Math.round(STAGE_SIZE * (1 - 32 / 640));
const CHAR_W = Math.round(STAGE_SIZE * 0.29);
const POS: [number, number][] = [
  [18, 23],
  [40, 23],
  [62, 23],
  [9, 42],
  [37, 42],
  [64, 42],
  [4, 63],
  [34, 63],
  [65, 63],
];
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
  const composites: OverlayOptions[] = [];
  for (let i = 0; i < 9; i += 1) {
    const id = (i + 1) as TypeId;
    const left = Math.round((STAGE_SIZE * POS[i][0]) / 100);
    const top = Math.round((OVERLAY_H * POS[i][1]) / 100);
    composites.push({
      input: await sharp(characterPath(`type-${id}.webp`)).resize(CHAR_W, CHAR_W).png().toBuffer(),
      left,
      top,
    });
    composites.push(...(await eyeLayers(id, CHAR_W, left, top)));
  }
  const stage = await sharp(characterPath("stage.webp")).resize(STAGE_SIZE, STAGE_SIZE).png().toBuffer();
  return sharp(stage).composite(composites).resize(900, 900).png().toBuffer();
}

async function typePng(id: TypeId) {
  const size = 900;
  const body = await sharp(characterPath(`type-${id}.webp`)).resize(size, size).png().toBuffer();
  return sharp(body)
    .composite(await eyeLayers(id, size))
    .png()
    .toBuffer();
}

async function loadAssets(profile?: EnneaType) {
  const fontDir = join(process.cwd(), "src/assets/fonts");
  const [serifless, medium, art] = await Promise.all([
    readFile(join(fontDir, "outfit-600.ttf")),
    readFile(join(fontDir, "outfit-500.ttf")),
    profile ? typePng(profile.id) : familyPng(),
  ]);
  return {
    artSrc: `data:image/png;base64,${art.toString("base64")}`,
    fonts: [
      { name: "Outfit", data: serifless, weight: 600 as const, style: "normal" as const },
      { name: "Outfit", data: medium, weight: 500 as const, style: "normal" as const },
    ],
  };
}

export async function renderOgImage(profile?: EnneaType) {
  const { fonts, artSrc } = await loadAssets(profile);
  const artSize = profile ? 460 : 500;

  const body = (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: PAPER,
        color: INK,
        fontFamily: "Outfit",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 600,
          height: "100%",
          padding: "52px 28px 44px 56px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: INK,
              letterSpacing: 1.6,
              textTransform: "uppercase",
            }}
          >
            {profile ? `Tipo ${profile.id} · ${profile.center}` : "Teste de Eneagrama gratuito"}
          </div>
          <div
            style={{
              fontSize: profile ? 64 : 56,
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: -1.6,
              marginTop: 16,
            }}
          >
            {profile ? profile.name : "É incrível começar a se entender."}
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.35,
              color: INK_SOFT,
              marginTop: 22,
              fontWeight: 500,
              maxWidth: 500,
            }}
          >
            {profile
              ? typeIntroductions[profile.id]
              : "Um teste gratuito para explorar seus padrões nas relações, nas escolhas e no trabalho."}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 22,
            borderTop: `1.5px solid ${LINE}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.2 }}>Eneagrama por Hermano Reis</div>
          <div style={{ fontSize: 18, color: MUTE, marginTop: 4, fontWeight: 500 }}>eneagrama.hermano.me</div>
          <div style={{ fontSize: 18, color: MUTE, marginTop: 8, fontWeight: 500 }}>Nove formas de olhar para si.</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          paddingRight: 28,
        }}
      >
        <img src={artSrc} width={artSize} height={artSize} alt="" style={{ width: artSize, height: artSize, objectFit: "contain" }} />
      </div>
    </div>
  );

  return new ImageResponse(body, {
    ...OG_SIZE,
    fonts,
  });
}
