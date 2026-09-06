import type { UIMessage } from "ai";
import { pool } from "../db";

export async function ensureMentorTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS mentor_threads (
      user_id text PRIMARY KEY,
      messages jsonb NOT NULL DEFAULT '[]'::jsonb,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `);
}

export async function loadMentorMessages(userId: string): Promise<UIMessage[]> {
  await ensureMentorTable();
  const { rows } = await pool.query<{ messages: UIMessage[] }>(
    `SELECT messages FROM mentor_threads WHERE user_id = $1`,
    [userId],
  );
  return rows[0]?.messages ?? [];
}

export async function saveMentorMessages(userId: string, messages: UIMessage[]) {
  await ensureMentorTable();
  const trimmed = messages.slice(-40);
  await pool.query(
    `INSERT INTO mentor_threads (user_id, messages, updated_at)
     VALUES ($1, $2, now())
     ON CONFLICT (user_id)
     DO UPDATE SET messages = EXCLUDED.messages, updated_at = now()`,
    [userId, JSON.stringify(trimmed)],
  );
}
