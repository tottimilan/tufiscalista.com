"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  trackAs?: "click_cta_primary" | "click_cta_secondary";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-bg-primary hover:bg-accent-hover font-semibold shadow-lg shadow-accent/10",
  secondary:
    "bg-bg-secondary text-text-primary border border-border hover:border-accent/40 hover:text-accent",
  ghost: "text-text-secondary hover:text-accent hover:bg-accent-muted",
  outline:
    "border border-border text-text-primary hover:border-accent hover:text-accent",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  trackAs,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-sans transition-all duration-300 cursor-pointer whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  function handleClick() {
    if (trackAs) trackEvent(trackAs);
    onClick?.();
  }

  if (href) {
    return (
      <Link href={href} className={classes} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
