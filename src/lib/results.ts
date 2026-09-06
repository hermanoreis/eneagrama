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
  const { rows } = await pool.query<{ id: string; created_at: Date }>(
    `INSERT INTO test_results (user_id, scores, answers, primary_type)
     VALUES ($1, $2, $3, $4)
     RETURNING id, created_at`,
    [input.userId, JSON.stringify(input.scores), JSON.stringify(input.answers), input.primaryType],
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
