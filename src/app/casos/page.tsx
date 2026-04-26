import type { Metadata } from "next";
import { TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Resultados reales de clientes que confían en Tu Fiscalista para su gestión fiscal.",
  alternates: { canonical: "/casos" },
};

const caseStudies = [
  {
    sector: "Hostelería y restauración",
    challenge:
      "Negocio con múltiples obligaciones fiscales y necesidad de un asesor que transmitiera confianza y claridad en cada paso del proceso.",
    solution:
      "Asesoría fiscal integral con comunicación directa, explicación clara de cada obligación y gestión proactiva de todos los trámites.",
    results: [
      "Proceso claro y sin complicaciones",
      "Confianza total en la gestión",
      "Atención cercana y profesional",
    ],
    quote:
      "Ali destaca por su gran profesionalidad, cercanía y excelente atención. Su labor en asesoría y gestoría fiscal transmite confianza y hace que todo el proceso resulte mucho más claro, fácil y tranquilo.",
    name: "Mohammed Makhi",
    role: "CEO, Palatino",
  },
  {
    sector: "Consultoría de marketing",
    challenge:
      "Venía de tener problemas con una empresa anterior. Necesitaba un asesor que se implicara de verdad, controlara cada detalle y anticipara los pagos de impuestos.",
    solution:
      "Revisión completa del historial fiscal, gestión de incidencias heredadas, previsión trimestral de impuestos y acompañamiento en todas las gestiones con Hacienda y Seguridad Social.",
    results: [
      "Previsión anticipada de impuestos",
      "Gestión de problemas heredados",
      "Sin sorpresas cada trimestre",
    ],
    quote:
      "Siempre nos informa con antelación de cuánto vamos a tener que pagar de impuestos. Lleva todo con tiempo, avisa antes de cada trimestre y explica las cosas de forma clara.",
    name: "Manuel Ramos",
    role: "Consultor de Marketing",
  },
  {
    sector: "Emprendimiento digital",
    challenge:
      "Emprendedora digital que necesitaba un asesor fiscal que entendiera su modelo de negocio y simplificara la complejidad fiscal.",
    solution:
      "Asesoría adaptada al modelo digital, comunicación directa y explicaciones accesibles para decisiones fiscales complejas.",
    results: [
      "Tranquilidad total con Hacienda",
      "Explicaciones claras y accesibles",
      "Decisiones con criterio fiscal",
    ],
    quote:
      "Me da mucha tranquilidad trabajar con Ali, es profesional, inteligente y habla ese idioma tan raro que solo entienden los economistas y los señores de Hacienda.",
    name: "Vera Khezina",
    role: "Emprendedora Digital",
  },
  {
    sector: "No residente fiscal",
    challenge:
      "Persona residente en otro país que necesitaba gestionar trámites fiscales en España a distancia, sin posibilidad de acudir presencialmente.",
    solution:
      "Gestión completa de trámites a distancia con comunicación constante, explicación de cada paso y resolución de toda la documentación necesaria.",
    results: [
      "Gestión 100% remota exitosa",
      "Comunicación fluida a distancia",
      "Todos los trámites resueltos",
    ],
    quote:
      "Aunque yo me encontraba en otro país, me acompañó y me ayudó en todo momento a distancia con mucha responsabilidad y profesionalidad.",
    name: "Tamta Martashvili",
    role: "No Residente Fiscal",
  },
  {
    sector: "Automoción",
    challenge:
      "Empresa que necesitaba un salto cualitativo en su gestión fiscal. Buscaba un asesor con conocimiento profundo y trato personalizado.",
    solution:
      "Asesoría integral con planificación fiscal adaptada, trato cercano y seguimiento continuo de todas las obligaciones.",
    results: [
      "Salto cualitativo en gestión fiscal",
      "Trato cercano y personalizado",
      "Experiencia totalmente positiva",
    ],
    quote:
      "Desde que empecé a trabajar con él he notado un salto cualitativo en la gestión fiscal, demostrando siempre un gran nivel de profesionalidad y conocimiento.",
    name: "Ayub Baach",
    role: "CEO, AutosMobax",
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
            Cada caso es real. Cada testimonio, auténtico. Así trabaja una
            asesoría que pone el criterio por delante del volumen.
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
                          El reto
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
                        — {cs.name}, {cs.role}
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
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {TESTIMONIALS.slice(0, 3).map((t, i) => (
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
