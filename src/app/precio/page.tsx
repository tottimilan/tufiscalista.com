import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Precio",
  description:
    "Plan premium de asesoría fiscal boutique. Descubre qué incluye y solicita tu diagnóstico gratuito.",
  alternates: { canonical: "/precio" },
};

export default function PrecioPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">Plan premium</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Una cuota.{" "}
            <span className="text-gradient-gold">Todo incluido.</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sin extras ocultos, sin letra pequeña. Un plan mensual que cubre
            todas las necesidades fiscales de tu negocio.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="rounded-xl border-2 border-accent/30 bg-bg-secondary/80 p-8 md:p-12">
                <div className="text-center mb-10">
                  <Badge variant="gold">Cuota personalizada</Badge>
                  <p className="mt-6 text-text-secondary leading-relaxed">
                    La cuota se adapta a la complejidad de tu caso, tipo de
                    actividad y volumen de facturación. En tu diagnóstico
                    gratuito te daremos un precio cerrado, sin sorpresas.
                  </p>
                </div>

                <div className="border-t border-border pt-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
                    Qué incluye tu cuota mensual
                  </p>
                  <ul className="space-y-4">
                    {SERVICES.map((service) => (
                      <li
                        key={service.title}
                        className="flex items-start gap-3"
                      >
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
                        <div>
                          <p className="font-medium text-text-primary text-sm">
                            {service.title}
                          </p>
                          <p className="text-text-muted text-xs mt-0.5">
                            {service.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 text-center">
                  <Button
                    href="/aplicar"
                    size="lg"
                    className="w-full"
                    trackAs="click_cta_primary"
                  >
                    Solicitar diagnóstico y precio
                  </Button>
                  <p className="mt-3 text-xs text-text-muted">
                    Sin compromiso. Precio cerrado tras el diagnóstico.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              Lo que no vas a encontrar en nuestra cuota
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Sin permanencia",
                  desc: "Si no estás satisfecho, puedes irte cuando quieras. Sin penalizaciones.",
                },
                {
                  title: "Sin extras ocultos",
                  desc: "Todo está incluido. No hay conceptos adicionales por consultas o gestiones.",
                },
                {
                  title: "Sin letra pequeña",
                  desc: "Desde el primer día sabes exactamente qué incluye y qué no.",
                },
                {
                  title: "Sin sorpresas",
                  desc: "Tu cuota es fija. Solo cambia si tu negocio crece y necesitas más servicios.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <Card hover className="h-full">
                    <h3 className="font-semibold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
