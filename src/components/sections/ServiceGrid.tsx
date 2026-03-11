"use client";

import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
  ),
  book: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
  ),
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  calendar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  ),
  message: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  trending: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  ),
  folder: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
  ),
};

export function ServiceGrid() {
  return (
    <section className="py-14 md:py-28">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Servicio integral"
          title="Todo lo que necesitas, con un solo interlocutor"
          subtitle="Nuestro plan premium cubre todas las áreas que tu negocio necesita. Sin sorpresas, sin extras."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <Card hover className="h-full">
                <div className="w-10 h-10 rounded-md bg-accent-muted flex items-center justify-center text-accent mb-4">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-semibold text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
