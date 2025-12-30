import { pgTable, text, serial, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'training', 'advocacy', 'community'
  imageUrl: text("image_url"),
  gallery: json("gallery").$type<{ type: 'image' | 'video', src: string }[]>(),
});

export const stories = pgTable("stories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  beneficiaryName: text("beneficiary_name").notNull(),
  imageUrl: text("image_url"),
});

// === SCHEMAS ===
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true, createdAt: true });
export const insertProgramSchema = createInsertSchema(programs).omit({ id: true });
export const insertStorySchema = createInsertSchema(stories).omit({ id: true });

// === TYPES ===
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

export type Program = typeof programs.$inferSelect;
export type Story = typeof stories.$inferSelect;
