import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "default";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase",
        variant === "gold" &&
          "bg-accent-muted text-accent border border-accent/20",
        variant === "green" &&
          "bg-success-muted text-success border border-success/20",
        variant === "default" &&
          "bg-bg-secondary text-text-secondary border border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
