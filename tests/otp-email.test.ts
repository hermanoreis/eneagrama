import assert from "node:assert/strict";
import { test } from "node:test";
import { otpEmailHtml, otpEmailText } from "../src/lib/otp-email";

test("the access email uses the site palette, Outfit, and a copyable six-digit code", () => {
  const html = otpEmailHtml("12a34-56");
  assert.match(html, />123456</);
  assert.match(html, /font-family:Outfit/);
  assert.match(html, /family=Outfit/);
  assert.match(html, /#f7f3eb/);
  assert.match(html, /#073b33/);
  assert.match(html, /#395b53/);
  assert.match(html, /#c4a35a/);
  assert.match(html, /eneagrama\.hermano\.me\/entrar/);
  assert.equal(html.includes("Georgia"), false);
  assert.equal(html.includes("#2f9e6b"), false);
  assert.equal(html.includes("#5b4bdb"), false);
  assert.equal(html.includes("type-1.webp"), false);
  assert.equal(html.includes("characters/"), false);
});

test("the plain-text access email keeps the code and the sign-in URL", () => {
  const text = otpEmailText("987654");
  assert.match(text, /987654/);
  assert.match(text, /eneagrama\.hermano\.me\/entrar/);
  assert.match(text, /10 minutos/);
});
