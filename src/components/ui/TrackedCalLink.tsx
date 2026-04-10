"use client";

import { trackEvent } from "@/lib/tracking";

interface TrackedCalLinkProps {
  href: string;
  source: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

const defaultClassName =
  "inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-muted px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/10 hover:border-accent/50";

export function TrackedCalLink({
  href,
  source,
  children,
  className,
  showIcon = !className,
}: TrackedCalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("book_call", { source })}
      className={className ?? defaultClassName}
    >
      {showIcon && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )}
      {children}
    </a>
  );
}
