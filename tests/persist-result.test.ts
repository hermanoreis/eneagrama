import assert from "node:assert/strict";
import { test } from "node:test";
import { createCoalescedPersister } from "../src/lib/persist-result";

function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((next) => {
    resolve = next;
  });
  return { promise, resolve };
}

async function waitFor(check: () => boolean) {
  for (let i = 0; i < 40; i++) {
    if (check()) return;
    await Promise.resolve();
  }
  throw new Error("timed out waiting for persist work");
}

test("coalesced persister sends the latest snapshot and ignores stale completions", async () => {
  const payloads: number[] = [];
  const gates: ReturnType<typeof deferred<boolean>>[] = [];
  const persister = createCoalescedPersister(async (value: number) => {
    payloads.push(value);
    const gate = deferred<boolean>();
    gates.push(gate);
    return gate.promise;
  });
  const settled: { payload: number; ok: boolean; isLatest: boolean }[] = [];
  const track = (payload: number, ok: boolean, isLatest: boolean) => {
    settled.push({ payload, ok, isLatest });
  };

  persister.enqueue(1, track);
  await waitFor(() => payloads.length === 1);
  persister.enqueue(2, track);
  persister.enqueue(3, track);
  assert.deepEqual(payloads, [1]);

  gates[0].resolve(true);
  await waitFor(() => payloads.length === 2);
  assert.deepEqual(payloads, [1, 3]);
  assert.deepEqual(settled, [{ payload: 1, ok: true, isLatest: false }]);

  gates[1].resolve(true);
  await waitFor(() => settled.length === 2);
  assert.deepEqual(settled, [
    { payload: 1, ok: true, isLatest: false },
    { payload: 3, ok: true, isLatest: true },
  ]);
});
