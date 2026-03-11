"use client";

import { PROBLEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Problems() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Tu situación actual"
          title="¿Te suena alguno de estos problemas?"
          subtitle="Si te identificas con más de uno, probablemente necesitas un cambio de modelo."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {PROBLEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="rounded-lg border border-border bg-bg-secondary/50 p-6 md:p-8 group hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-danger text-lg">✕</span>
                      <p className="text-text-primary font-medium leading-relaxed">
                        {item.pain}
                      </p>
                    </div>
                  </div>
                  <div className="w-px bg-border hidden md:block self-stretch" />
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-accent text-lg">→</span>
                      <p className="text-text-secondary leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
