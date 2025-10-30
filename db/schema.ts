import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const feeds = sqliteTable("feeds", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  url: text("url").notNull(),
  webUrl: text("web_url"),
  lang: text("lang"),
  category: integer("category_id")
    .notNull()
    .references(() => categories.id),
});

export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
});

// Export Task to use as an interface in your app
export type Feed = typeof feeds.$inferSelect;
