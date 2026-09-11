import assert from "node:assert/strict";
import { afterEach, mock, test } from "node:test";
import { POST } from "../src/app/api/results/route";
import { auth } from "../src/lib/auth";
import { pool } from "../src/lib/db";
import { questions } from "../src/data/questions";
import { parseResultId } from "../src/lib/saved-result-id";

afterEach(() => mock.restoreAll());
const request = (body: unknown) => new Request("http://localhost/api/results", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
});

function completeAnswers(fill: number | ((id: number) => number) = 3) {
  const value = typeof fill === "function" ? fill : () => fill;
  return Object.fromEntries(questions.map((q) => [q.id, value(q.id)]));
}

function sqlOf(call: { arguments: unknown[] }) {
  return String(call.arguments[0]);
}

test("result API requires a session before writing anything", async () => {
  mock.method(auth.api, "getSession", async () => null);
  const query = mock.method(pool, "query", async () => { throw new Error("Unexpected database access"); });
  const response = await POST(request({ answers: {} }));
  assert.equal(response.status, 401);
  assert.equal(query.mock.callCount(), 0);
});

test("result API rejects incomplete and malformed answers without saving", async () => {
  mock.method(auth.api, "getSession", async () => ({ user: { id: "test-user" } }));
  const query = mock.method(pool, "query", async () => { throw new Error("Unexpected database access"); });
  for (const answers of [{ 1: 5 }, null, [], {}]) {
    assert.equal((await POST(request({ answers }))).status, 400);
  }
  const malformed = new Request("http://localhost/api/results", { method: "POST", body: "{" });
  assert.equal((await POST(malformed)).status, 400);
  assert.equal(query.mock.callCount(), 0);
});

test("result API computes scores on the server and inserts a new attempt without a result id", async () => {
  mock.method(auth.api, "getSession", async () => ({ user: { id: "test-user" } }));
  const query = mock.method(pool, "query", async () => ({ rows: [{ id: "attempt-1", created_at: new Date(0) }] }));
  const answers = Object.fromEntries(questions.map((q) => [q.id, q.type === 8 ? 5 : 3]));
  const response = await POST(request({ answers, primaryType: 1, scores: [{ id: 1, score: 999 }] }));
  assert.equal(response.status, 200);
  assert.equal(query.mock.callCount(), 1);
  const sql = sqlOf(query.mock.calls[0]);
  assert.match(sql, /INSERT INTO test_results/i);
  assert.doesNotMatch(sql, /UPDATE test_results/i);
  const values = query.mock.calls[0].arguments[1] as unknown as [string, string, string, number];
  assert.equal(values[0], "test-user");
  assert.equal(values[3], 8);
  assert.deepEqual(JSON.parse(values[2]), answers);
  assert.equal(JSON.parse(values[1])[0].score, 75);
  assert.equal((await response.json()).id, "attempt-1");
});

test("result API revises the identified attempt instead of inserting a second history entry", async () => {
  mock.method(auth.api, "getSession", async () => ({ user: { id: "test-user" } }));
  const query = mock.method(pool, "query", async () => ({ rows: [{ id: "attempt-1", created_at: new Date(0) }] }));
  const first = completeAnswers(3);
  const revised = { ...first, [1]: 5 };
  const response = await POST(request({ answers: revised, resultId: "attempt-1" }));
  assert.equal(response.status, 200);
  assert.equal(query.mock.callCount(), 1);
  const sql = sqlOf(query.mock.calls[0]);
  assert.match(sql, /UPDATE test_results/i);
  assert.doesNotMatch(sql, /INSERT INTO test_results/i);
  const values = query.mock.calls[0].arguments[1] as unknown as [string, string, string, string, number];
  assert.equal(values[0], "attempt-1");
  assert.equal(values[1], "test-user");
  assert.deepEqual(JSON.parse(values[3]), revised);
});

test("a retake without a result id inserts a new attempt instead of overwriting the latest", async () => {
  mock.method(auth.api, "getSession", async () => ({ user: { id: "test-user" } }));
  let n = 0;
  const query = mock.method(pool, "query", async () => ({
    rows: [{ id: `attempt-${++n}`, created_at: new Date(0) }],
  }));
  const first = completeAnswers(3);
  const retake = completeAnswers(4);
  assert.equal((await POST(request({ answers: first }))).status, 200);
  const second = await POST(request({ answers: retake }));
  assert.equal(second.status, 200);
  assert.equal((await second.json()).id, "attempt-2");
  assert.equal(query.mock.callCount(), 2);
  for (const call of query.mock.calls) {
    const sql = sqlOf(call);
    assert.match(sql, /INSERT INTO test_results/i);
    assert.doesNotMatch(sql, /UPDATE test_results/i);
  }
});

test("unknown result id falls back to inserting a new attempt", async () => {
  mock.method(auth.api, "getSession", async () => ({ user: { id: "test-user" } }));
  const query = mock.method(pool, "query", async (sql: string) => {
    if (/UPDATE/i.test(sql)) return { rows: [] };
    return { rows: [{ id: "attempt-new", created_at: new Date(0) }] };
  });
  const answers = completeAnswers(3);
  const response = await POST(request({ answers, resultId: "missing-result" }));
  assert.equal(response.status, 200);
  assert.equal(query.mock.callCount(), 2);
  assert.match(sqlOf(query.mock.calls[0]), /UPDATE test_results/i);
  assert.match(sqlOf(query.mock.calls[1]), /INSERT INTO test_results/i);
  assert.equal((await response.json()).id, "attempt-new");
});

test("parseResultId accepts stored ids and rejects junk", () => {
  assert.equal(parseResultId("attempt-1"), "attempt-1");
  assert.equal(parseResultId("  abcdefgh-1234  "), "abcdefgh-1234");
  assert.equal(parseResultId("short"), null);
  assert.equal(parseResultId("not a valid id"), null);
  assert.equal(parseResultId(1), null);
});
