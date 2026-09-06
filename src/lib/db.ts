import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const globalForDb = globalThis as typeof globalThis & { pool?: Pool };

export const pool =
  globalForDb.pool ??
  new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 8,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = pool;
}
