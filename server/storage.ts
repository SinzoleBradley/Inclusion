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
        title: "Sign Language Training Sessions",
        description: "Trainings and seminars for schools and businesses to foster inclusive environments.",
        category: "training",
        imageUrl: "/images/placeholder.png",
        gallery: [
          { type: 'video', src: '/videos/inclusion-training.mp4' },
          { type: 'image', src: '/images/class.png' },
          { type: 'video', src: '/videos/speller.mp4' },
          { type: 'video', src: '/videos/children.mp4' },
          { type: 'video', src: '/videos/classes.mp4' },
          { type: 'video', src: '/videos/program-highlight.mp4' }
        ]
      },
      {
        id: 2,
        title: "Community Empowerment",
        description: "Grassroots initiatives supporting social and economic independence.",
        category: "community",
        imageUrl: "/images/placeholder.png",
        gallery: [
          { type: 'image', src: '/images/placeholder.png' },
          { type: 'image', src: '/images/placeholder.png' },
          { type: 'image', src: '/images/placeholder.png' }
        ]
      },
      {
        id: 3,
        title: "Skills Development and Linkages for Persons with Disabilities",
        description: "We equip persons with disabilities with life skills and technical skills that enhance independence, employability, and meaningful participation in society. Our rights-based trainings strengthen confidence, leadership, communication, and practical competencies aligned to diverse livelihood and career pathways.",
        category: "advocacy",
        imageUrl: "/images/placeholder.png",
        gallery: [
          { type: 'image', src: '/images/placeholder.png' },
          { type: 'image', src: '/images/placeholder.png' },
          { type: 'image', src: '/images/placeholder.png' }
        ]
      }
    ];

    const mockStories: Story[] = [
      {
        id: 1,
        title: "Finding My Voice",
        content: "Through the advocacy program, I learned to speak up for my rights and now mentor others.",
        beneficiaryName: "Sarah M.",
        imageUrl: "/images/placeholder.png"
      },
      {
        id: 2,
        title: "Skills for Life",
        content: "The vocational training gave me the skills to start my own tailoring business.",
        beneficiaryName: "David O.",
        imageUrl: "/images/placeholder.png"
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
          title: "Sign Language Training Sessions",
          description: "We offer Basic and Advanced Kenya Sign Language (KSL) training for children and adults, designed for individual learners and organizations seeking inclusive communication skills.",
          category: "training",
          imageUrl: "/images/placeholder.png",
        gallery: [
          { type: 'video', src: '/videos/inclusion-training.mp4' },
          { type: 'image', src: '/images/class.png' },
          { type: 'video', src: '/videos/speller.mp4' },
          { type: 'video', src: '/videos/children.mp4' },
          { type: 'video', src: '/videos/classes.mp4' },
          { type: 'video', src: '/videos/program-highlight.mp4' }
        ]
      },
        {
          title: "Community Empowerment",
          description: "We partner with organizations, communities, and event organizers to build disability-inclusive spaces. Through participatory accessibility assessments, tailored trainings, and co-created solutions with persons with disabilities, we support inclusive, responsive, and community-owned initiatives.",
          category: "community",
          imageUrl: "/images/placeholder.png",
          gallery: [
            { type: 'image', src: '/images/placeholder.png' },
            { type: 'image', src: '/images/placeholder.png' },
            { type: 'image', src: '/images/placeholder.png' }
          ]
        },
        {
          title: "Skills Development and Linkages for Persons with Disabilities",
          description: "We equip persons with disabilities with life skills and technical skills that enhance independence, employability, and meaningful participation in society. Our rights-based trainings strengthen confidence, leadership, communication, and practical competencies aligned to diverse livelihood and career pathways.",
          category: "advocacy",
          imageUrl: "/images/placeholder.png",
          gallery: [
            { type: 'image', src: '/images/placeholder.png' },
            { type: 'image', src: '/images/placeholder.png' },
            { type: 'image', src: '/images/placeholder.png' }
          ]
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
          imageUrl: "/images/placeholder.png"
        },
        {
          title: "Skills for Life",
          content: "The vocational training gave me the skills to start my own tailoring business.",
          beneficiaryName: "David O.",
          imageUrl: "/images/placeholder.png"
        }
      ]);
    }
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
