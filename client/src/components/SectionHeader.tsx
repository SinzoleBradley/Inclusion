import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, className, light = false }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl mb-12", centered && "mx-auto text-center", className)}>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-display",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg md:text-xl leading-relaxed",
          light ? "text-white/80" : "text-muted-foreground"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 rounded-full mt-6 bg-secondary",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
}
