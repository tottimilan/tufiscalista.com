"use client";

import { COMPARISON } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Comparison() {
  return (
    <section className="py-14 md:py-28 bg-bg-secondary/40">
      <div className="container-premium">
        <SectionHeading
          eyebrow="La diferencia"
          title="Boutique vs. gestoría de volumen"
          subtitle="No todos los servicios fiscales son iguales. Compara y decide."
        />

        {/* Desktop table */}
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
                      <p className="text-xs text-accent font-medium">Tu Fiscalista</p>
                      <p className="text-sm text-text-primary">{row.boutique}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-text-muted shrink-0" />
                    <div>
                      <p className="text-xs text-text-muted font-medium">Tradicional</p>
                      <p className="text-sm text-text-muted">{row.traditional}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
