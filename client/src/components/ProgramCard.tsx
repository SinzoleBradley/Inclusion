import { Program } from "@shared/schema";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      <div className="aspect-video relative overflow-hidden bg-gray-100">
        <img 
          src={program.imageUrl || "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"} // Fallback image
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
          {program.category}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors font-display">
          {program.title}
        </h3>
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {program.description}
        </p>
        <Link href={`/programs/${program.id}`} className="inline-flex items-center text-primary font-semibold hover:text-secondary-foreground transition-colors group/link mt-auto">
          Learn More 
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
