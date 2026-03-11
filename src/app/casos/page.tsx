import type { Metadata } from "next";
import { TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Resultados reales de clientes que han pasado de una gestoría tradicional a Tu Fiscalista.",
};

const caseStudies = [
  {
    sector: "Startup tecnológica",
    challenge:
      "Llevaba 3 años con una gestoría de volumen que solo presentaba modelos. Pagaba de más por falta de planificación y acumulaba riesgos fiscales.",
    solution:
      "Diagnóstico completo, reestructuración fiscal de autónomo a SL, optimización de deducciones y plan de previsión trimestral.",
    results: [
      "Ahorro fiscal del 23% el primer año",
      "0 sanciones desde el cambio",
      "Previsión trimestral de impuestos",
    ],
    quote:
      "La diferencia es abismal. Ahora tengo un asesor que conoce mi negocio y me avisa antes de que surjan problemas.",
    name: "Carlos M.",
  },
  {
    sector: "Consultora de marketing",
    challenge:
      "3 sanciones al año por errores de su gestoría anterior. No tenía visibilidad sobre sus impuestos ni planificación.",
    solution:
      "Auditoría fiscal inicial, corrección de errores acumulados, implementación de previsiones y reuniones trimestrales.",
    results: [
      "De 3 sanciones/año a 0 en 18 meses",
      "Previsión clara cada trimestre",
      "Reuniones periódicas de seguimiento",
    ],
    quote:
      "Por primera vez siento que tengo un partner fiscal, no alguien que solo presenta modelos.",
    name: "Laura S.",
  },
  {
    sector: "Agencia de diseño",
    challenge:
      "Empresa con 8 empleados que necesitaba optimizar estructura fiscal y recuperar deducciones no aplicadas por su gestoría anterior.",
    solution:
      "Traspaso completo, revisión de 3 ejercicios anteriores, recuperación de deducciones y nueva estructura fiscal.",
    results: [
      "Recuperación de 8.400€ en deducciones",
      "Traspaso sin interrupciones",
      "Estructura fiscal optimizada",
    ],
    quote:
      "Nos ayudaron con todo el traspaso, optimizaron nuestra estructura y ahora tomamos decisiones con datos reales.",
    name: "Javier R.",
  },
];

export default function CasosPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">Resultados reales</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            No es branding.{" "}
            <span className="text-gradient-gold">Son resultados.</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Cada caso es real. Cada resultado, medible. Así trabaja una asesoría
            que pone el criterio por delante del volumen.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-10">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-bg-secondary/50 overflow-hidden">
                  <div className="p-8 md:p-10">
                    <Badge variant="default">{cs.sector}</Badge>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-3">
                          El problema
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-3">
                          Nuestra solución
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                        Resultados
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {cs.results.map((r, j) => (
                          <div
                            key={j}
                            className="rounded-md bg-accent-muted px-4 py-3"
                          >
                            <p className="text-sm font-medium text-accent">
                              {r}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <blockquote className="mt-8 pl-4 border-l-2 border-accent/30">
                      <p className="text-text-secondary italic leading-relaxed">
                        &ldquo;{cs.quote}&rdquo;
                      </p>
                      <p className="mt-2 text-sm text-text-muted font-medium">
                        — {cs.name}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              Más testimonios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-lg border border-border bg-bg-secondary/80 p-6 h-full text-left">
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

      <section className="py-20 md:py-28">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Quieres ser el próximo caso de éxito?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito y descubre cuánto puedes mejorar.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Aplicar a una plaza
          </Button>
        </div>
      </section>
    </>
  );
}
