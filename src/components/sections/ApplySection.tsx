"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ApplySection() {
  return (
    <section className="py-14 md:py-28 bg-bg-secondary/40">
      <div className="container-premium">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold">Plazas limitadas</Badge>

            <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              ¿Listo para trabajar con un modelo{" "}
              <span className="text-gradient-gold">diferente</span>?
            </h2>

            <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Con solo 20 plazas, cada cliente recibe la atención que merece.
              Solicita tu diagnóstico gratuito y descubre cómo podemos ayudarte.
            </p>

            <div className="mt-8">
              <Counter />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href="/aplicar"
                size="lg"
                trackAs="click_cta_primary"
              >
                Solicitar diagnóstico gratuito
              </Button>
              <Button
                href="/precio"
                variant="outline"
                size="lg"
              >
                Ver qué incluye
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
