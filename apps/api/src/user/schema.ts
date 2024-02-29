import {pgTable, serial, text} from "drizzle-orm/pg-core";
import {createInsertSchema, createSelectSchema} from "drizzle-zod";
import {z} from "zod";

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
})

export const insertUserSchema = createInsertSchema(users, {
  name: z.string().min(2),
  email: z.string().email(),
});
const selectUserSchema = createSelectSchema(users, {
  email: z.string().email(),
});
