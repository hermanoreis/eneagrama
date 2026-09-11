import assert from "node:assert/strict";
import { test } from "node:test";
import { questions } from "../src/data/questions";
import { answeredCount, completeAnswers, loadAnswers, resultLeaders, scoreTypes, tieReviewQuestions, uniquePrimaryType, wingOf, type Answers } from "../src/lib/quiz";

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

test("tie review picks the highest Likert items of each leading type", () => {
  const answers = answersFor();
  const type4 = questions.filter((question) => question.type === 4);
  const type8 = questions.filter((question) => question.type === 8);
  const high4 = type4.slice(0, 4);
  const high8 = type8.slice(0, 4);
  for (const question of high4) answers[question.id] = 5;
  for (const question of type4.slice(4, 6)) answers[question.id] = 4;
  for (const question of high8) answers[question.id] = 5;
  const picked = tieReviewQuestions(answers, [4, 8]);
  assert.equal(picked.length, 8);
  assert.deepEqual(picked.filter((question) => question.type === 4).map((question) => question.id), high4.map((question) => question.id));
  assert.deepEqual(picked.filter((question) => question.type === 8).map((question) => question.id), high8.map((question) => question.id));
});

test("changing a reviewed score can break a two-way tie", () => {
  const answers = answersFor();
  for (const question of questions.filter((item) => item.type === 4).slice(0, 4)) answers[question.id] = 5;
  for (const question of questions.filter((item) => item.type === 8).slice(0, 4)) answers[question.id] = 5;
  assert.deepEqual(resultLeaders(scoreTypes(answers)).map((score) => score.id), [4, 8]);
  assert.equal(uniquePrimaryType(scoreTypes(answers)), null);
  const lower = tieReviewQuestions(answers, [4, 8]).find((question) => question.type === 4);
  assert.ok(lower);
  answers[lower.id] = 1;
  assert.deepEqual(resultLeaders(scoreTypes(answers)).map((score) => score.id), [8]);
  assert.equal(uniquePrimaryType(scoreTypes(answers)), 8);
});

test("three-way ties review three items per type, at most nine", () => {
  const answers = answersFor();
  for (const type of [1, 2, 3] as const) {
    for (const question of questions.filter((item) => item.type === type).slice(0, 3)) answers[question.id] = 5;
  }
  const picked = tieReviewQuestions(answers, [1, 2, 3]);
  assert.equal(picked.length, 9);
  assert.equal(picked.filter((question) => question.type === 1).length, 3);
  assert.equal(picked.filter((question) => question.type === 2).length, 3);
  assert.equal(picked.filter((question) => question.type === 3).length, 3);
});

test("nine-way ties keep one existing phrase per type", () => {
  const picked = tieReviewQuestions(answersFor(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  assert.equal(picked.length, 9);
  assert.deepEqual(picked.map((question) => question.type), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("wing wraps from 9 to 1 and from 1 to 9", () => {
  const fromNine = wingOf(9, scoreTypes(answersFor({ 9: 5, 1: 4 })));
  assert.equal(fromNine.id, 1);
  assert.equal(fromNine.tied, false);
  assert.equal(fromNine.left, 8);
  assert.equal(fromNine.right, 1);
  const fromOne = wingOf(1, scoreTypes(answersFor({ 1: 5, 9: 4 })));
  assert.equal(fromOne.id, 9);
  assert.equal(fromOne.tied, false);
  assert.equal(fromOne.left, 9);
  assert.equal(fromOne.right, 2);
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
