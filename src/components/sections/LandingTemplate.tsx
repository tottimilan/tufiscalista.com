"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

interface LandingData {
  badge: string;
  h1: React.ReactNode;
  subtitle: string;
  pains: { title: string; desc: string }[];
  benefits: string[];
  method: { step: string; desc: string }[];
  faq: { question: string; answer: string }[];
}

export function LandingTemplate({ data }: { data: LandingData }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">{data.badge}</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
            {data.h1}
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
              Solicitar diagnóstico gratuito
            </Button>
            <Button href="/como-trabajamos" variant="secondary" size="lg">
              Ver cómo trabajamos
            </Button>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              ¿Te identificas con esto?
            </h2>
            <div className="space-y-4">
              {data.pains.map((pain, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <Card hover>
                    <h3 className="font-medium text-text-primary mb-1">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {pain.desc}
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              Lo que obtienes con nosotros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.benefits.map((b, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 p-4 rounded-md border border-border bg-bg-secondary/30">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-text-primary">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              Así trabajamos
            </h2>
            <div className="space-y-6">
              {data.method.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <span className="font-serif text-4xl font-bold text-accent/20 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {m.step}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-lg border border-border bg-bg-secondary/80 p-6 h-full">
                    <p className="font-serif text-lg font-bold text-accent mb-3">
                      {t.result}
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm font-medium text-text-primary">
                        {t.name}
                      </p>
                      <p className="text-xs text-text-muted">{t.role}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              Preguntas frecuentes
            </h2>
            <Accordion items={data.faq} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Listo para dar el paso?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito. Sin compromiso, sin presión.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Aplicar a una plaza
          </Button>
        </div>
      </section>
    </>
  );
}
