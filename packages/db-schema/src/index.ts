import { drizzle } from "drizzle-orm/d1";
import { type D1Database } from "@cloudflare/workers-types";
import * as schema from "./db/schema";

export function createD1Connection(connection: D1Database) {
  return drizzle(connection, { schema: schema });
}

export type DbClient = ReturnType<typeof createD1Connection>;
