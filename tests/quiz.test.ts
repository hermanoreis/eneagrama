import assert from "node:assert/strict";
import { test } from "node:test";
import { questions } from "../src/data/questions";
import { answeredCount, completeAnswers, loadAnswers, resultLeaders, scoreTypes, wingOf, type Answers } from "../src/lib/quiz";

function answersFor(values: Record<number, number> = {}): Answers {
  return Object.fromEntries(questions.map((question) => [question.id, values[question.type] ?? 3]));
}

test("only all 135 valid integer responses can produce a persisted result", () => {
  const answers = answersFor();
  assert.equal(answeredCount(answers), 135);
  assert.deepEqual(completeAnswers(answers), answers);
  delete answers[questions[0].id];
  assert.equal(completeAnswers(answers), null);
  for (const value of [0, 6, 2.5, "3", null, NaN]) {
    const invalid = { ...answersFor(), [questions[0].id]: value };
    assert.equal(completeAnswers(invalid), null);
  }
  assert.equal(completeAnswers(null), null);
  assert.equal(completeAnswers([]), null);
});

test("response validation discards unrelated fields before scoring and storing", () => {
  const answers = answersFor({ 8: 5 });
  const normalized = completeAnswers({ ...answers, 999: 5, primaryType: 1 });
  assert.deepEqual(normalized, answers);
  assert.equal(scoreTypes(normalized!)[0].id, 8);
});

test("full questionnaire has equal weighting and preserves a nine-way tie", () => {
  const scores = scoreTypes(answersFor());
  assert.equal(scores.length, 9);
  assert.ok(scores.every((s) => s.score === 45 && s.max === 75 && s.percent === 60));
  assert.deepEqual(resultLeaders(scores).map((s) => s.id), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("a two-way tie is retained regardless of score ordering", () => {
  const scores = scoreTypes(answersFor({ 4: 5, 8: 5 }));
  assert.deepEqual(resultLeaders(scores.reverse()).map((s) => s.id), [4, 8]);
});

test("account and mentor reject legacy partial results instead of declaring a type", () => {
  const answers = answersFor({ 4: 5 });
  delete answers[questions[0].id];
  assert.deepEqual(resultLeaders(scoreTypes(answers)), []);
  assert.deepEqual(resultLeaders(scoreTypes({ [questions[0].id]: 5 })), []);
  assert.deepEqual(resultLeaders([]), []);
});

test("one leading type and tied neighbors remain different concepts", () => {
  const scores = scoreTypes(answersFor({ 9: 5 }));
  assert.deepEqual(resultLeaders(scores).map((s) => s.id), [9]);
  const wing = wingOf(9, scores);
  assert.equal(wing.tied, true);
  assert.equal(wing.id, null);
});

test("malformed, duplicated or out-of-range saved scores are not complete results", () => {
  const scores = scoreTypes(answersFor());
  assert.deepEqual(resultLeaders([...scores.slice(1), scores[1]]), []);
  assert.deepEqual(resultLeaders(scores.map((s, i) => i ? s : { ...s, score: 76 })), []);
});

test("local answer snapshots are stable and corrupt values cannot manufacture a result", () => {
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  let raw = JSON.stringify(answersFor());
  Object.defineProperty(globalThis, "window", { value: {}, configurable: true });
  Object.defineProperty(globalThis, "localStorage", { value: { getItem: () => raw }, configurable: true });
  try {
    const first = loadAnswers();
    assert.strictEqual(loadAnswers(), first);
    raw = '{broken';
    assert.deepEqual(loadAnswers(), {});
    assert.strictEqual(loadAnswers(), loadAnswers());
    raw = JSON.stringify({ 1: 2.5, 2: "5", 3: 4 });
    assert.deepEqual(loadAnswers(), { 3: 4 });
  } finally {
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else Reflect.deleteProperty(globalThis, "window");
    if (originalStorage) Object.defineProperty(globalThis, "localStorage", originalStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
