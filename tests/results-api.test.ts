import assert from "node:assert/strict";
import { afterEach, mock, test } from "node:test";
import { POST } from "../src/app/api/results/route";
import { auth } from "../src/lib/auth";
import { pool } from "../src/lib/db";
import { questions } from "../src/data/questions";

afterEach(() => mock.restoreAll());
const request = (body: unknown) => new Request("http://localhost/api/results", {
  method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
});

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

test("result API computes scores on the server and ignores a supplied primary type", async () => {
  mock.method(auth.api, "getSession", async () => ({ user: { id: "test-user" } }));
  const query = mock.method(pool, "query", async () => ({ rows: [{ id: "test-result", created_at: new Date(0) }] }));
  const answers = Object.fromEntries(questions.map((q) => [q.id, q.type === 8 ? 5 : 3]));
  const response = await POST(request({ answers, primaryType: 1, scores: [{ id: 1, score: 999 }] }));
  assert.equal(response.status, 200);
  assert.equal(query.mock.callCount(), 1);
  const values = query.mock.calls[0].arguments[1] as unknown as [string, string, string, number];
  assert.equal(values[0], "test-user");
  assert.equal(values[3], 8);
  assert.deepEqual(JSON.parse(values[2]), answers);
  assert.equal(JSON.parse(values[1])[0].score, 75);
});
