import { Context } from "hono";
import { Env } from "@/types/bindings";
import { createD1Connection } from "@repo/db-schema/db";
import { MessageRepository } from "@repo/db-schema/db/repositories";

export function createMessageRepository(context: Context<{ Bindings: Env }>) {
  const db = createD1Connection(context.env.DB);
  return new MessageRepository(db);
}
