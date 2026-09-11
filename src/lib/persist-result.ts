export type PersistSettled<T> = (payload: T, ok: boolean, isLatest: boolean) => void;

/**
 * One in-flight write at a time. Newer snapshots replace the queue so a stale
 * request cannot finish after a later revision.
 */
export function createCoalescedPersister<T>(send: (payload: T) => Promise<boolean>) {
  let generation = 0;
  let inFlight = false;
  let queued: { payload: T; gen: number; onSettled: PersistSettled<T> } | null = null;

  async function pump() {
    if (inFlight) return;
    const next = queued;
    if (!next) return;
    queued = null;
    inFlight = true;
    let ok = false;
    try {
      ok = await send(next.payload);
    } catch {
      ok = false;
    } finally {
      inFlight = false;
    }
    next.onSettled(next.payload, ok, next.gen === generation);
    await pump();
  }

  return {
    enqueue(payload: T, onSettled: PersistSettled<T>) {
      generation += 1;
      queued = { payload, gen: generation, onSettled };
      void pump();
    },
  };
}
