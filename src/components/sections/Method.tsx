"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu situación fiscal actual, identificamos problemas, riesgos y oportunidades que no estás aprovechando.",
  },
  {
    number: "02",
    title: "Plan y estructura",
    description:
      "Diseñamos una estrategia fiscal personalizada, optimizamos tu estructura y organizamos toda tu documentación.",
  },
  {
    number: "03",
    title: "Seguimiento y mejora",
    description:
      "Reuniones periódicas, previsiones de impuestos, soporte directo y ajustes continuos para que siempre vayas un paso por delante.",
  },
];

export function Method() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Nuestro método"
          title="Tres pasos para dejar de improvisar"
          subtitle="Un proceso claro que reduce incertidumbre y te da el control que necesitas."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="relative rounded-lg border border-border bg-bg-secondary/80 p-8 h-full">
                <span className="font-serif text-5xl font-bold text-accent/20">
                  {step.number}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent/30 text-2xl">
                    →
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
