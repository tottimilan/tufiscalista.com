import type { Metadata } from "next";
import { TESTIMONIALS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Testimonios de Clientes | Tu Fiscalista",
  description:
    "Lo que dicen nuestros clientes sobre nuestra asesoría fiscal boutique. Resultados reales, opiniones verificadas.",
};

export default function TestimoniosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-premium text-center">
          <Badge variant="gold">Testimonios</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Lo que dicen nuestros clientes
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Resultados reales de autónomos y pymes que confiaron en un modelo
            fiscal diferente. Sin actores, sin guiones.
          </p>
        </div>
      </section>

      {/* Testimonial cards */}
      <section className="py-14 md:py-24">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-bg-secondary/50 p-8 md:p-10 h-full hover:border-accent/20 hover:bg-bg-secondary/70 transition-all duration-300 flex flex-col">
                  <p className="font-serif text-xl md:text-2xl font-bold text-accent mb-5">
                    {t.result}
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium text-text-primary">{t.name}</p>
                    <p className="text-sm text-text-muted">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Quieres resultados como estos?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito y descubre cómo podemos ayudarte.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Aplicar a una plaza
          </Button>
        </div>
      </section>
    </>
  );
}
