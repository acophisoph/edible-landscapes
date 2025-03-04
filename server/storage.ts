import {
  type Contractor,
  type Project,
  type Quote,
  type InsertContractor,
  type InsertProject,
  type InsertQuote,
} from "@shared/schema";

export interface IStorage {
  getContractors(): Promise<Contractor[]>;
  getContractor(id: number): Promise<Contractor | undefined>;
  createContractor(contractor: InsertContractor): Promise<Contractor>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  createQuote(quote: InsertQuote): Promise<Quote>;
}

export class MemStorage implements IStorage {
  private contractors: Map<number, Contractor>;
  private projects: Map<number, Project>;
  private quotes: Map<number, Quote>;
  private currentContractorId: number;
  private currentProjectId: number;
  private currentQuoteId: number;

  constructor() {
    this.contractors = new Map();
    this.projects = new Map();
    this.quotes = new Map();
    this.currentContractorId = 1;
    this.currentProjectId = 1;
    this.currentQuoteId = 1;

    // Add some mock data
    this.initializeMockData();
  }

  async getContractors(): Promise<Contractor[]> {
    return Array.from(this.contractors.values());
  }

  async getContractor(id: number): Promise<Contractor | undefined> {
    return this.contractors.get(id);
  }

  async createContractor(contractor: InsertContractor): Promise<Contractor> {
    const id = this.currentContractorId++;
    const newContractor = { ...contractor, id };
    this.contractors.set(id, newContractor);
    return newContractor;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const newProject = { ...project, id };
    this.projects.set(id, newProject);
    return newProject;
  }

  async createQuote(quote: InsertQuote): Promise<Quote> {
    const id = this.currentQuoteId++;
    const newQuote = { ...quote, id };
    this.quotes.set(id, newQuote);
    return newQuote;
  }

  private initializeMockData() {
    // Add mock contractors
    const mockContractors: InsertContractor[] = [
      {
        name: "Green Thumb Gardens",
        email: "contact@greenthumb.com",
        phone: "(555) 123-4567",
        description: "Specializing in edible landscapes and sustainable garden design",
        serviceArea: "Greater Portland Area",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        rating: 5,
        specialties: ["Vegetable Gardens", "Fruit Trees", "Native Plants"],
      },
      {
        name: "Local Harvest Landscaping",
        email: "info@localharvest.com",
        phone: "(555) 987-6543",
        description: "Creating beautiful and productive gardens for over 10 years",
        serviceArea: "Seattle Metropolitan Area",
        imageUrl: "https://images.unsplash.com/photo-1497681883844-82b4f0a359a4",
        rating: 5,
        specialties: ["Herb Gardens", "Edible Flowers", "Garden Planning"],
      },
    ];

    mockContractors.forEach((contractor) => this.createContractor(contractor));

    // Add mock projects
    const mockProjects: InsertProject[] = [
      {
        title: "Urban Vegetable Paradise",
        description: "Transform a small backyard into a productive vegetable garden",
        imageUrl: "https://images.unsplash.com/photo-1507484467459-0c01be16726e",
        contractorId: 1,
      },
      {
        title: "Fruit Tree Haven",
        description: "Mixed fruit tree installation with understory herbs",
        imageUrl: "https://images.unsplash.com/photo-1695624736801-1f1ec77c8cca",
        contractorId: 2,
      },
    ];

    mockProjects.forEach((project) => this.createProject(project));
  }
}

export const storage = new MemStorage();
