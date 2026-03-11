"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Resultados reales"
          title="Lo que dicen nuestros clientes"
          subtitle="No es branding. Son resultados medibles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="rounded-lg border border-border bg-bg-secondary/80 p-8 h-full flex flex-col">
                <p className="font-serif text-2xl font-bold text-accent mb-4">
                  {t.result}
                </p>
                <blockquote className="text-text-secondary leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
