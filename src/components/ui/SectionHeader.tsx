import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  heading,
  subheading,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" ? "text-center max-w-3xl mx-auto" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{heading}</h2>
      {subheading && (
        <p className="text-lg text-muted-foreground leading-relaxed">{subheading}</p>
      )}
    </div>
  );
}
