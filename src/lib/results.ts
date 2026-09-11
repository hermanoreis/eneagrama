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
  resultId?: string | null;
}) {
  const scores = JSON.stringify(input.scores);
  const answers = JSON.stringify(input.answers);
  if (input.resultId) {
    const updated = await pool.query<{ id: string; created_at: Date }>(
      `UPDATE test_results
       SET scores = $3, answers = $4, primary_type = $5
       WHERE id = $1 AND user_id = $2
       RETURNING id, created_at`,
      [input.resultId, input.userId, scores, answers, input.primaryType],
    );
    if (updated.rows[0]) return updated.rows[0];
  }
  const inserted = await pool.query<{ id: string; created_at: Date }>(
    `INSERT INTO test_results (user_id, scores, answers, primary_type)
     VALUES ($1, $2, $3, $4)
     RETURNING id, created_at`,
    [input.userId, scores, answers, input.primaryType],
  );
  return inserted.rows[0];
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
