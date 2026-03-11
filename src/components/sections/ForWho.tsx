"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const forWho = [
  "Autónomos con cierto volumen o complejidad fiscal",
  "Pequeñas empresas que valoran rapidez y criterio",
  "Perfiles que quieren acompañamiento, no solo tramitación",
];

const notForWho = [
  "Quien busca la opción más barata del mercado",
  "Quien solo quiere presentar modelos y ya",
  "Quien no valora planificación ni relación a largo plazo",
];

export function ForWho() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Posicionamiento"
          title="No es para todos. Y eso es lo que lo hace diferente."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-accent/20 bg-accent-muted p-8">
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-6">
                Para quién es
              </p>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-primary"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-lg border border-border bg-bg-secondary/50 p-8">
              <p className="text-text-muted font-medium text-sm tracking-widest uppercase mb-6">
                Para quién no es
              </p>
              <ul className="space-y-4">
                {notForWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
