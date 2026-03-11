"use client";

import { useEffect, useState } from "react";
import { SceneFallback } from "./SceneFallback";
import { PremiumHeroCanvas } from "./PremiumHeroCanvas";

export function HeroBackground() {
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;
    setCanAnimate(true);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 25% 35%, rgba(200, 169, 119, 0.07) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 50% at 75% 55%, rgba(94, 143, 121, 0.05) 0%, transparent 55%)",
            "radial-gradient(ellipse 90% 70% at 50% 80%, rgba(200, 169, 119, 0.03) 0%, transparent 50%)",
            "linear-gradient(180deg, #0B0F14 0%, #0e1420 40%, #111827 100%)",
          ].join(", "),
        }}
      />

      {canAnimate && (
        <>
          <div className="absolute inset-0 animate-mesh-drift" />
          <PremiumHeroCanvas />
        </>
      )}
    </div>
  );
}
