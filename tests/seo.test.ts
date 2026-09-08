import assert from "node:assert/strict";
import { test } from "node:test";
import { publicMetadata } from "../src/lib/seo";

test("public pages share a large Open Graph card with the generated image", () => {
  const encoded = JSON.stringify(publicMetadata("Título", "Descrição", "/mapa"));
  assert.match(encoded, /"card":"summary_large_image"/);
  assert.match(encoded, /"url":"\/opengraph-image"/);
  assert.match(encoded, /"images":\["\/opengraph-image"\]/);
});

test("a type page can point to its own Open Graph image", () => {
  const encoded = JSON.stringify(
    publicMetadata("Tipo 4", "Texto", "/tipos/4", {
      url: "/tipos/4/opengraph-image",
      width: 1200,
      height: 630,
      alt: "Tipo 4",
    }),
  );
  assert.match(encoded, /"url":"\/tipos\/4\/opengraph-image"/);
});
