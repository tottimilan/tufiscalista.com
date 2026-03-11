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
    <section className="py-14 md:py-28 bg-bg-secondary/40">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Posicionamiento"
          title="No es para todos. Y eso es lo que lo hace diferente."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="rounded-lg border border-accent/20 bg-accent-muted p-6 md:p-8">
              <p className="text-accent font-medium text-sm tracking-widest uppercase mb-5">
                Para quién es
              </p>
              <ul className="space-y-3.5">
                {forWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-primary rounded-md p-2 -mx-2 hover:bg-white/5 transition-colors"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-lg border border-border bg-bg-primary/60 p-6 md:p-8">
              <p className="text-text-muted font-medium text-sm tracking-widest uppercase mb-5">
                Para quién no es
              </p>
              <ul className="space-y-3.5">
                {notForWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary rounded-md p-2 -mx-2 hover:bg-white/5 transition-colors"
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
