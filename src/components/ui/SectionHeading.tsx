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
        "mb-10 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
