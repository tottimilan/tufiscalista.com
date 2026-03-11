import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-bg-secondary/50 p-6 md:p-8",
        hover &&
          "transition-all duration-300 hover:border-accent/30 hover:bg-bg-secondary hover:shadow-lg hover:shadow-accent/5",
        className
      )}
    >
      {children}
    </div>
  );
}
