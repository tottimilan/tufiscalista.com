"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Avatar } from "@/components/ui/Avatar";

export function SocialProof() {
  const featured = TESTIMONIALS.slice(0, 3);
  const extra = TESTIMONIALS.slice(3);

  return (
    <section className="py-14 md:py-28">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Resultados reales"
          title="Lo que dicen nuestros clientes"
          subtitle="Testimonios reales de profesionales que confían en nosotros."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {featured.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="rounded-lg border border-border bg-bg-secondary/50 p-6 md:p-8 h-full flex flex-col hover:border-accent/20 hover:bg-bg-secondary/70 transition-all duration-300">
                <p className="font-serif text-xl md:text-2xl font-bold text-accent mb-3 md:mb-4">
                  {t.result}
                </p>
                <blockquote className="text-text-secondary text-sm md:text-base leading-relaxed flex-1 mb-5 md:mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <Avatar name={t.name} size="md" />
                  <div>
                    <p className="font-medium text-text-primary text-sm">
                      {t.name}
                    </p>
                    <p className="text-text-muted text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {extra.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto mt-4 md:mt-8">
            {extra.map((t, i) => (
              <ScrollReveal key={i} delay={(i + 3) * 0.1}>
                <div className="rounded-lg border border-border bg-bg-secondary/50 p-6 md:p-8 h-full flex flex-col hover:border-accent/20 hover:bg-bg-secondary/70 transition-all duration-300">
                  <p className="font-serif text-lg md:text-xl font-bold text-accent mb-3">
                    {t.result}
                  </p>
                  <blockquote className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-border flex items-center gap-3">
                    <Avatar name={t.name} size="md" />
                    <div>
                      <p className="font-medium text-text-primary text-sm">
                        {t.name}
                      </p>
                      <p className="text-text-muted text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
