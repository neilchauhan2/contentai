import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Output = pgTable("output", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  slug: varchar("slug").notNull(),
  response: text("response"),
  createdBy: varchar("email").notNull(),
  createdAt: varchar("createdAt"),
});
