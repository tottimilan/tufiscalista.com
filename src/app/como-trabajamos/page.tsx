import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Cómo trabajamos",
  description:
    "Nuestro método en 3 pasos: diagnóstico, plan y estructura, seguimiento y mejora continua.",
};

const steps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    subtitle: "Entender tu situación real",
    details: [
      "Revisión completa de tu situación fiscal actual",
      "Identificación de errores, riesgos y oportunidades",
      "Análisis de estructura (autónomo vs. SL)",
      "Evaluación de deducciones no aplicadas",
      "Informe claro con conclusiones y recomendaciones",
    ],
    duration: "1–2 semanas",
  },
  {
    number: "02",
    title: "Plan y estructura",
    subtitle: "Diseñar tu estrategia",
    details: [
      "Diseño de estrategia fiscal personalizada",
      "Optimización de estructura societaria si procede",
      "Planificación de pagos y previsiones trimestrales",
      "Organización documental y acceso digital",
      "Traspaso desde tu asesoría anterior (si aplica)",
    ],
    duration: "2–3 semanas",
  },
  {
    number: "03",
    title: "Seguimiento y mejora",
    subtitle: "Acompañamiento continuo",
    details: [
      "Reuniones periódicas de seguimiento",
      "Previsión de impuestos antes de cada trimestre",
      "Soporte directo por email y teléfono",
      "Alertas proactivas ante cambios normativos",
      "Ajustes continuos de estrategia según tu negocio evolucione",
    ],
    duration: "Continuo",
  },
];

export default function ComoTrabajamosPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">Nuestro método</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Un proceso claro.{" "}
            <span className="text-gradient-gold">Sin improvisación.</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Trabajamos con un método estructurado que reduce incertidumbre y te
            da el control que necesitas sobre tu fiscalidad.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-bg-secondary/50 p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <span className="font-serif text-5xl md:text-6xl font-bold text-accent/20 leading-none">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-text-primary">
                        {step.title}
                      </h2>
                      <p className="text-accent text-sm mt-1">{step.subtitle}</p>
                      <ul className="mt-6 space-y-3">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-text-secondary"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span className="leading-relaxed">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Duración: {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            El primer paso es el diagnóstico
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Gratuito, sin compromiso. Analizamos tu caso y te damos una
            respuesta clara.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>
    </>
  );
}
