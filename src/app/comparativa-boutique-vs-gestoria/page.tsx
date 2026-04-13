import type { Metadata } from "next";
import { COMPARISON } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Asesoría Boutique vs. Gestoría de Volumen | Comparativa",
  description:
    "Compara punto a punto una asesoría fiscal boutique con una gestoría de volumen: clientes, respuesta, proactividad, servicio y precio.",
};

const idealProfiles = [
  {
    title: "Facturas más de 30.000 € al año",
    desc: "Tu volumen justifica una planificación fiscal seria, no solo tramitación.",
  },
  {
    title: "Valoras el asesoramiento proactivo",
    desc: "Quieres que tu asesor te avise antes de que surjan problemas, no después.",
  },
  {
    title: "Tu tiempo vale más que el ahorro en honorarios",
    desc: "Prefieres invertir en un buen servicio que perseguir al gestor para que responda.",
  },
  {
    title: "Necesitas un partner estratégico",
    desc: "Buscas criterio fiscal en cada decisión de negocio, no solo alguien que presente modelos.",
  },
  {
    title: "Has tenido malas experiencias previas",
    desc: "Ya sabes lo que es cambiar de gestoría y no quieres repetir la experiencia.",
  },
  {
    title: "Operas como freelance o pyme en crecimiento",
    desc: "Tu situación fiscal evoluciona y necesitas alguien que evolucione contigo.",
  },
];

export default function ComparativaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-premium text-center">
          <Badge variant="gold">Comparativa</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
            Boutique vs. gestoría de volumen:{" "}
            <span className="text-gradient-gold">la diferencia real</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            No todos los servicios fiscales son iguales. Aquí tienes una
            comparativa punto a punto para que decidas con criterio.
          </p>
        </div>
      </section>

      {/* Comparison table (desktop) */}
      <section className="py-14 md:py-24 bg-bg-secondary/40">
        <div className="container-premium">
          <ScrollReveal>
            <div className="hidden md:block max-w-4xl mx-auto">
              <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-bg-primary/60">
                      <th className="text-left py-4 px-6 text-text-muted text-xs tracking-widest uppercase font-medium" />
                      <th className="text-left py-4 px-6 text-accent text-xs tracking-widest uppercase font-medium">
                        Tu Fiscalista
                      </th>
                      <th className="text-left py-4 px-6 text-text-muted text-xs tracking-widest uppercase font-medium">
                        Gestoría tradicional
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-border/50 hover:bg-bg-primary/40 transition-colors"
                      >
                        <td className="py-4 px-6 text-sm text-text-secondary font-medium">
                          {row.variable}
                        </td>
                        <td className="py-4 px-6 text-sm text-text-primary font-medium">
                          <span className="inline-flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {row.boutique}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-text-muted">
                          {row.traditional}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3 max-w-sm mx-auto">
            {COMPARISON.map((row, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="rounded-lg border border-border bg-bg-primary/60 p-4 hover:border-accent/20 transition-colors">
                  <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-2.5">
                    {row.variable}
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <div>
                        <p className="text-xs text-accent font-medium">
                          Tu Fiscalista
                        </p>
                        <p className="text-sm text-text-primary">
                          {row.boutique}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted shrink-0" />
                      <div>
                        <p className="text-xs text-text-muted font-medium">
                          Tradicional
                        </p>
                        <p className="text-sm text-text-muted">
                          {row.traditional}
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

      {/* Expanded explanation */}
      <section className="py-14 md:py-24">
        <div className="container-premium">
          <div className="prose-custom max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-8">
                Por qué el modelo boutique funciona mejor
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed mb-6">
                Una gestoría de volumen gestiona cientos de clientes con
                procesos estandarizados. Eso significa que tu expediente es uno
                más en una cola. Las consultas tardan días en responderse, las
                revisiones son superficiales y la planificación fiscal brilla
                por su ausencia. Tu asesor cambia cada pocos meses y nadie
                conoce tu situación en profundidad.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-text-secondary leading-relaxed mb-6">
                El modelo boutique es radicalmente distinto. Al limitar el
                número de clientes a un máximo de 20, cada negocio recibe la
                atención que merece. Tu asesor conoce tu facturación, tu
                estacionalidad, tus objetivos. No necesitas explicar tu
                situación cada vez que llamas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-text-secondary leading-relaxed mb-6">
                La diferencia se nota en los resultados: previsiones
                trimestrales precisas, alertas antes de cada vencimiento,
                optimización fiscal real basada en el conocimiento profundo de
                tu negocio. No es solo un servicio más caro; es un servicio
                estructuralmente diferente.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-text-secondary leading-relaxed">
                Quien ha probado ambos modelos no vuelve atrás. Porque cuando
                tu asesor fiscal es un partner estratégico y no un tramitador,
                las decisiones de negocio se toman con más criterio, menos
                miedo y mejores números.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ideal client profiles */}
      <section className="py-14 md:py-24 bg-bg-secondary/40">
        <div className="container-premium">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-4">
            ¿Para quién es la asesoría boutique?
          </h2>
          <p className="text-text-secondary text-center mb-10 md:mb-14 max-w-xl mx-auto">
            No es para todo el mundo. Es para quienes valoran el criterio por
            encima del precio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {idealProfiles.map((profile, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-bg-secondary/30 p-6 h-full hover:border-accent/30 hover:bg-bg-secondary/60 transition-all duration-300">
                  <div className="flex items-start gap-3">
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
                      <h3 className="font-semibold text-text-primary mb-1">
                        {profile.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {profile.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Te identificas?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito y descubre si el modelo boutique
            encaja con tu negocio.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Aplicar a una plaza
          </Button>
        </div>
      </section>
    </>
  );
}
