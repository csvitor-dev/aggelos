import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messageTable = sqliteTable("message", {
  id: int().primaryKey({ autoIncrement: true }),
  author: text({ length: 100 }).notNull(),
  body: text().notNull(),
});
