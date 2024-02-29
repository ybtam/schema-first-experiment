import {pgTable, text, uuid} from "drizzle-orm/pg-core";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";
import {z} from "zod";

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
})

export const insertUserSchema = createInsertSchema(users, {
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email(),
});
const selectUserSchema = createSelectSchema(users, {
  email: z.string().email(),
});
