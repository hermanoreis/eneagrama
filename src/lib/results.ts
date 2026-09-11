import { pool } from "./db";
import type { TypeScore } from "./quiz";

export type SavedResult = {
  id: string;
  primaryType: number;
  scores: TypeScore[];
  createdAt: string;
};

export async function saveResult(input: {
  userId: string;
  scores: TypeScore[];
  answers: Record<number, number>;
  primaryType: number;
}) {
  const scores = JSON.stringify(input.scores);
  const answers = JSON.stringify(input.answers);
  // Revise the latest row so tie-review and retries do not fill the 20-entry
  // history or let an older in-flight insert become "latest" for /conta.
  const { rows } = await pool.query<{ id: string; created_at: Date }>(
    `WITH latest AS (
       SELECT id FROM test_results
       WHERE user_id = $1
       ORDER BY created_at DESC
       LIMIT 1
     ),
     updated AS (
       UPDATE test_results AS t
       SET scores = $2, answers = $3, primary_type = $4
       FROM latest
       WHERE t.id = latest.id
       RETURNING t.id, t.created_at
     ),
     inserted AS (
       INSERT INTO test_results (user_id, scores, answers, primary_type)
       SELECT $1, $2, $3, $4
       WHERE NOT EXISTS (SELECT 1 FROM updated)
       RETURNING id, created_at
     )
     SELECT id, created_at FROM updated
     UNION ALL
     SELECT id, created_at FROM inserted`,
    [input.userId, scores, answers, input.primaryType],
  );
  return rows[0];
}

export async function listResults(userId: string): Promise<SavedResult[]> {
  const { rows } = await pool.query<{
    id: string;
    primary_type: number;
    scores: TypeScore[];
    created_at: Date;
  }>(
    `SELECT id, primary_type, scores, created_at
     FROM test_results
     WHERE user_id = $1
     ORDER BY created_at DESC
     LIMIT 20`,
    [userId],
  );
  return rows.map((r) => ({
    id: r.id,
    primaryType: r.primary_type,
    scores: r.scores,
    createdAt: r.created_at.toISOString(),
  }));
}

export async function getLatestResult(userId: string) {
  const all = await listResults(userId);
  return all[0] ?? null;
}
