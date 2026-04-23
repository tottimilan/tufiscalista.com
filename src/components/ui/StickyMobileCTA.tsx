"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";

interface StickyMobileCTAProps {
  /** Pixels of scroll before showing. Default 600 */
  showAfter?: number;
  /** Hide on these path prefixes. Default ['/aplicar', '/contacto'] */
  hideOnPaths?: string[];
  /** Primary CTA text. Default 'Solicitar diagnóstico' */
  ctaText?: string;
  /** Primary CTA href. Default '/aplicar' */
  ctaHref?: string;
  /** Show phone button next to CTA. Default true */
  showPhone?: boolean;
}

export function StickyMobileCTA({
  showAfter = 600,
  hideOnPaths = ["/aplicar", "/contacto"],
  ctaText = "Solicitar diagnóstico",
  ctaHref = "/aplicar",
  showPhone = true,
}: StickyMobileCTAProps) {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    if (hideOnPaths.some((p) => path.startsWith(p))) {
      setHidden(true);
      return;
    }

    function handleScroll() {
      setShow(window.scrollY > showAfter);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter, hideOnPaths]);

  if (hidden || !show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg-primary/95 backdrop-blur-sm border-t border-border p-3 flex items-center gap-2">
      <Button href={ctaHref} size="sm" trackAs="click_cta_primary" className="flex-1">
        {ctaText}
      </Button>
      {showPhone && (
        <PhoneLink
          source="sticky_mobile"
          showLabel={false}
          iconSize={20}
          className="w-12 h-12 rounded-md bg-accent-muted text-accent border border-accent/30 flex items-center justify-center hover:bg-accent/10"
        />
      )}
    </div>
  );
}
