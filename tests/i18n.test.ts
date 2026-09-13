import assert from "node:assert/strict";
import { test } from "node:test";
import sitemap from "../src/app/sitemap";
import { instrument } from "../src/data/instrument";
import { getPack } from "../src/data/pack";
import { locales, type Locale } from "../src/i18n/config";
import { localeFromAcceptLanguage } from "../src/i18n/negotiate";
import {
  href,
  languageAlternates,
  resolvePublicPath,
  switchLocalePath,
} from "../src/i18n/pathnames";
import { localeFromHeaders } from "../src/i18n/request-locale";
import { mentorInstructions, type MentorPortrait } from "../src/lib/mentor/agent";
import { otpEmailHtml, otpEmailText } from "../src/lib/otp-email";
import { scoreTypes, type Answers } from "../src/lib/quiz";
import { getMessages } from "../src/messages";

const banks = Object.fromEntries(locales.map((locale) => [locale, getPack(locale).questions])) as Record<
  Locale,
  ReturnType<typeof getPack>["questions"]
>;

function answersFor(values: Record<number, number> = {}): Answers {
  return Object.fromEntries(instrument.map((question) => [question.id, values[question.type] ?? 3]));
}

const emptyPortrait: MentorPortrait = {
  name: "Ada",
  email: "ada@example.com",
  hasResult: false,
  primaryType: null,
  leadingTypes: [],
  wing: null,
  scores: [],
};

test("every locale bank has 135 items with the same id and type as the instrument", () => {
  assert.equal(instrument.length, 135);
  const byType = new Map<number, number>();
  for (const item of instrument) {
    byType.set(item.type, (byType.get(item.type) ?? 0) + 1);
  }
  assert.deepEqual([...byType.values()], Array(9).fill(15));

  for (const locale of locales) {
    const questions = banks[locale];
    assert.equal(questions.length, 135, locale);
    for (let i = 0; i < instrument.length; i++) {
      assert.equal(questions[i].id, instrument[i].id, `${locale} id at ${i}`);
      assert.equal(questions[i].type, instrument[i].type, `${locale} type at ${i}`);
      assert.ok(questions[i].text.trim().length > 8, `${locale} text at ${questions[i].id}`);
    }
  }
});

test("the same answers produce the same scores in every language bank", () => {
  const answers = answersFor({ 4: 5, 8: 1 });
  const baseline = scoreTypes(answers).map((row) => ({ id: row.id, score: row.score, max: row.max, percent: row.percent }));
  for (const locale of locales) {
    const named = scoreTypes(
      answers,
      Object.fromEntries(getPack(locale).types.map((type) => [type.id, type.name])) as Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9, string>,
    );
    assert.deepEqual(
      named.map((row) => ({ id: row.id, score: row.score, max: row.max, percent: row.percent })),
      baseline,
      locale,
    );
    assert.equal(named.find((row) => row.id === 4)?.name, getPack(locale).typeById[4].name);
  }
});

test("pt-BR stays unprefixed and other languages use public slugs", () => {
  assert.equal(href("pt-BR", "home"), "/");
  assert.equal(href("pt-BR", "types"), "/tipos");
  assert.equal(href("pt-BR", "type", { id: 4 }), "/tipos/4");
  assert.equal(href("en", "home"), "/en");
  assert.equal(href("en", "types"), "/en/types");
  assert.equal(href("en", "type", { id: 4 }), "/en/types/4");
  assert.equal(href("es", "synthesis"), "/es/sintesis");
  assert.equal(href("fr", "about"), "/fr/a-propos-du-test");
  assert.equal(href("en", "signIn"), "/en/sign-in");
  assert.equal(href("fr", "result"), "/fr/test/resultat");

  assert.equal(resolvePublicPath("/en/types/4").internalPath, "/en/tipos/4");
  assert.equal(resolvePublicPath("/tipos/4").internalPath, "/pt-BR/tipos/4");
  assert.equal(resolvePublicPath("/").locale, "pt-BR");
  assert.equal(switchLocalePath("/tipos/4", "en"), "/en/types/4");
  assert.equal(switchLocalePath("/en/types/4", "pt-BR"), "/tipos/4");
});

test("hreflang maps every page to pt-BR as x-default", () => {
  const languages = languageAlternates("type", { id: 4 });
  assert.equal(languages["pt-BR"], "/tipos/4");
  assert.equal(languages.en, "/en/types/4");
  assert.equal(languages.es, "/es/tipos/4");
  assert.equal(languages.fr, "/fr/types/4");
  assert.equal(languages["x-default"], "/tipos/4");
});

test("Accept-Language is only a default guess, never a reason to leave /", () => {
  assert.equal(localeFromAcceptLanguage("en-US,en;q=0.9"), "en");
  assert.equal(localeFromAcceptLanguage("es-MX,es;q=0.8"), "es");
  assert.equal(localeFromAcceptLanguage("fr-FR"), "fr");
  assert.equal(localeFromAcceptLanguage("zh-CN,zh;q=0.9"), "pt-BR");
});

test("API locale follows the page header or referer, not Accept-Language", () => {
  assert.equal(
    localeFromHeaders(new Headers({ "x-eneagrama-locale": "en", "accept-language": "pt-BR" })),
    "en",
  );
  assert.equal(
    localeFromHeaders(new Headers({ referer: "https://eneagrama.hermano.me/fr/connexion" })),
    "fr",
  );
  assert.equal(localeFromHeaders(new Headers({ "accept-language": "en" })), "pt-BR");
});

test("mentor instructions and type names follow the session locale", () => {
  const en = mentorInstructions(emptyPortrait, "en");
  const es = mentorInstructions(emptyPortrait, "es");
  const fr = mentorInstructions(emptyPortrait, "fr");
  const pt = mentorInstructions(emptyPortrait, "pt-BR");
  assert.match(en, /Speak English/);
  assert.match(en, /\/en\/test/);
  assert.equal(en.includes("português do Brasil"), false);
  assert.match(es, /español latinoamericano|Habla español/i);
  assert.match(fr, /parles français/i);
  assert.match(pt, /português do Brasil/);
  assert.equal(getPack("en").typeById[1].name, "Reformer");
  assert.equal(getPack("es").typeById[2].name, "Ayudador");
  assert.equal(getPack("fr").typeById[7].name, "Épicurien");
});

test("English type pages use a question-shaped H1 for AEO", () => {
  assert.equal(getMessages("en").typePage.h1, "What is Enneagram Type {id} ({name})?");
  assert.match(getPack("en").typeFaqs[1][0].question, /What is Enneagram Type 1/);
  assert.ok(getPack("en").homeFaq.length >= 4);
  assert.ok(getPack("en").howToTest.steps.length >= 3);
});

test("the sitemap lists every locale with hreflang including x-default", () => {
  const entries = sitemap();
  const home = entries.find((item) => item.url === "https://eneagrama.hermano.me");
  const englishType = entries.find((item) => item.url === "https://eneagrama.hermano.me/en/types/4");
  assert.ok(home);
  assert.ok(englishType);
  assert.equal(home?.alternates?.languages?.["x-default"], "https://eneagrama.hermano.me");
  assert.equal(home?.alternates?.languages?.en, "https://eneagrama.hermano.me/en");
  assert.equal(englishType?.alternates?.languages?.["pt-BR"], "https://eneagrama.hermano.me/tipos/4");
  assert.equal(entries.length, locales.length * 18);
});

test("English OTP mail uses /en/sign-in and keeps the six-digit code", () => {
  const html = otpEmailHtml("12a34-56", "en");
  const text = otpEmailText("987654", "en");
  assert.match(html, /lang="en"/);
  assert.match(html, />123456</);
  assert.match(html, /eneagrama\.hermano\.me\/en\/sign-in/);
  assert.match(text, /987654/);
  assert.match(text, /eneagrama\.hermano\.me\/en\/sign-in/);
  assert.match(text, /10 minutes/);
});

test("the papercraft stage caption is localized, not a leftover PT string", () => {
  const pt = getMessages("pt-BR").home.stageCaption;
  assert.equal(pt, "Nove formas de olhar para si.");
  assert.equal(getMessages("en").home.stageCaption, "Nine ways of looking at yourself.");
  assert.equal(getMessages("es").home.stageCaption, "Nueve formas de mirarte.");
  assert.equal(getMessages("fr").home.stageCaption, "Neuf façons de se regarder.");
  for (const locale of ["en", "es", "fr"] as const) {
    assert.notEqual(getMessages(locale).home.stageCaption, pt);
    assert.notEqual(getMessages(locale).home.markHint, getMessages("pt-BR").home.markHint);
  }
});
