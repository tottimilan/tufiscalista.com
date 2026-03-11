import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
