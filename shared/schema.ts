import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contractors = pgTable("contractors", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  description: text("description").notNull(),
  serviceArea: text("service_area").notNull(),
  imageUrl: text("image_url").notNull(),
  rating: integer("rating").notNull().default(5),
  specialties: text("specialties").array().notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  contractorId: integer("contractor_id").notNull(),
});

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  gardenSize: text("garden_size").notNull(),
  description: text("description").notNull(),
  preferredPlants: text("preferred_plants").array(),
});

export const insertContractorSchema = createInsertSchema(contractors).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertQuoteSchema = createInsertSchema(quotes).omit({ id: true });

export type Contractor = typeof contractors.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Quote = typeof quotes.$inferSelect;
export type InsertContractor = z.infer<typeof insertContractorSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertQuote = z.infer<typeof insertQuoteSchema>;
