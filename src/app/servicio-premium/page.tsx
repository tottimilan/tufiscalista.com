import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicio Premium",
  description:
    "Asesoría fiscal integral para autónomos y pymes. Fiscalidad, contabilidad, asesoramiento a extranjeros, legal y seguimiento estratégico.",
  alternates: { canonical: "/servicio-premium" },
};

export default function ServicioPremiumPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">Servicio integral</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Todo lo que tu negocio necesita.{" "}
            <span className="text-gradient-gold">Un solo interlocutor.</span>
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Nuestro plan premium cubre fiscalidad, contabilidad, extranjeros, legal
            y seguimiento estratégico. Sin sorpresas, sin extras ocultos.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Qué incluye"
            title="Cada área cubierta, cada detalle controlado"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <Card hover className="h-full">
                  <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Lo que nos diferencia"
              title="No somos una gestoría más"
            />
            <div className="space-y-6">
              {[
                {
                  title: "Máximo 20 clientes",
                  desc: "No trabajamos en volumen. Cada cliente recibe el tiempo y la atención que merece.",
                },
                {
                  title: "Proactividad real",
                  desc: "No esperamos a que vengas con un problema. Te avisamos antes de que suceda.",
                },
                {
                  title: "Criterio, no solo tramitación",
                  desc: "No presentamos modelos sin más. Analizamos, planificamos y te damos opciones para decidir mejor.",
                },
                {
                  title: "Acceso directo",
                  desc: "Tu asesor siempre disponible, sin intermediarios ni centralitas. Respuesta en menos de 24h.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex gap-4 items-start p-6 rounded-lg border border-border bg-bg-secondary/30 hover:border-accent/20 hover:bg-bg-secondary/50 transition-all duration-300 group">
                    <span className="mt-1 text-accent text-lg shrink-0 group-hover:scale-110 transition-transform">
                      ✦
                    </span>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Encaja con lo que necesitas?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito y descubre cómo podemos ayudarte.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Aplicar a una plaza
          </Button>
        </div>
      </section>
    </>
  );
}
