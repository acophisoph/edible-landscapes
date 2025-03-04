import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // Get all contractors
  app.get("/api/contractors", async (_req, res) => {
    const contractors = await storage.getContractors();
    res.json(contractors);
  });

  // Get single contractor
  app.get("/api/contractors/:id", async (req, res) => {
    const contractor = await storage.getContractor(parseInt(req.params.id));
    if (!contractor) {
      res.status(404).json({ message: "Contractor not found" });
      return;
    }
    res.json(contractor);
  });

  // Get all projects
  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Submit quote request
  app.post("/api/quotes", async (req, res) => {
    try {
      const quoteData = insertQuoteSchema.parse(req.body);
      const quote = await storage.createQuote(quoteData);
      res.status(201).json(quote);
    } catch (error) {
      res.status(400).json({ message: "Invalid quote data" });
    }
  });

  return httpServer;
}
