"use client";

import Image from "next/image";
import { FEATURE_FLAGS, CLIENT_LOGOS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ClientLogos() {
  if (!FEATURE_FLAGS.showClientLogos) return null;

  return (
    <section className="py-12 md:py-16 border-y border-border/50">
      <div className="container-premium">
        <ScrollReveal>
          <p className="text-center text-xs uppercase tracking-widest text-text-muted mb-8">
            Confían en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
