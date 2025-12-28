import { db } from "./db";
import {
  messages,
  programs,
  stories,
  type InsertMessage,
  type Message,
  type Program,
  type Story
} from "@shared/schema";

export interface IStorage {
  createMessage(message: InsertMessage): Promise<Message>;
  getPrograms(): Promise<Program[]>;
  getStories(): Promise<Story[]>;
  seedData(): Promise<void>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, Message>;
  private programs: Map<number, Program>;
  private stories: Map<number, Story>;
  private messageId: number;

  constructor() {
    this.messages = new Map();
    this.programs = new Map();
    this.stories = new Map();
    this.messageId = 1;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageId++;
    const message: Message = { ...insertMessage, id, createdAt: new Date(), subject: insertMessage.subject || null };
    this.messages.set(id, message);
    return message;
  }

  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getStories(): Promise<Story[]> {
    return Array.from(this.stories.values());
  }

  async seedData(): Promise<void> {
    const mockPrograms: Program[] = [
      {
        id: 1,
        title: "Inclusion Training",
        description: "Workshops and seminars for schools and businesses to foster inclusive environments.",
        category: "training",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
      },
      {
        id: 2,
        title: "Community Empowerment",
        description: "Grassroots initiatives supporting social and economic independence.",
        category: "community",
        imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
      },
      {
        id: 3,
        title: "Disability Advocacy",
        description: "Championing policy changes and rights for persons with disabilities.",
        category: "advocacy",
        imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
      }
    ];

    const mockStories: Story[] = [
      {
        id: 1,
        title: "Finding My Voice",
        content: "Through the advocacy program, I learned to speak up for my rights and now mentor others.",
        beneficiaryName: "Sarah M.",
        imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
      },
      {
        id: 2,
        title: "Skills for Life",
        content: "The vocational training gave me the skills to start my own tailoring business.",
        beneficiaryName: "David O.",
        imageUrl: "https://images.unsplash.com/photo-1529390003868-6c04176d091e?auto=format&fit=crop&q=80"
      }
    ];

    mockPrograms.forEach(p => this.programs.set(p.id, p));
    mockStories.forEach(s => this.stories.set(s.id, s));
  }
}

export class DatabaseStorage implements IStorage {
  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async getPrograms(): Promise<Program[]> {
    return await db.select().from(programs);
  }

  async getStories(): Promise<Story[]> {
    return await db.select().from(stories);
  }

  async seedData(): Promise<void> {
    const existingPrograms = await this.getPrograms();
    if (existingPrograms.length === 0) {
      await db.insert(programs).values([
        {
          title: "Inclusion Training",
          description: "Workshops and seminars for schools and businesses to foster inclusive environments.",
          category: "training",
          imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
        },
        {
          title: "Community Empowerment",
          description: "Grassroots initiatives supporting social and economic independence.",
          category: "community",
          imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80"
        },
        {
          title: "Disability Advocacy",
          description: "Championing policy changes and rights for persons with disabilities.",
          category: "advocacy",
          imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
        }
      ]);
    }

    const existingStories = await this.getStories();
    if (existingStories.length === 0) {
      await db.insert(stories).values([
        {
          title: "Finding My Voice",
          content: "Through the advocacy program, I learned to speak up for my rights and now mentor others.",
          beneficiaryName: "Sarah M.",
          imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80"
        },
        {
          title: "Skills for Life",
          content: "The vocational training gave me the skills to start my own tailoring business.",
          beneficiaryName: "David O.",
          imageUrl: "https://images.unsplash.com/photo-1529390003868-6c04176d091e?auto=format&fit=crop&q=80"
        }
      ]);
    }
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
