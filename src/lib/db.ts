import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL || "postgresql://127.0.0.1:5432/postgres";

const globalForDb = globalThis as typeof globalThis & { pool?: Pool };

export const pool =
  globalForDb.pool ??
  new Pool({
    connectionString,
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
    max: 8,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = pool;
}
