import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { PhoneLink } from "@/components/ui/PhoneLink";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Tu Fiscalista. Email, teléfono y formulario de solicitud.",
  alternates: { canonical: "/contacto" },
};

const contactMethods = [
  {
    title: "Llamada directa",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
    desc: `${SITE.hours}. Atención directa con el asesor.`,
    type: "phone" as const,
  },
  {
    title: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    desc: "Para consultas generales o enviar documentación.",
    type: "email" as const,
  },
  {
    title: "Agendar reunión",
    value: "Reunión de 15 o 30 min",
    href: "https://cal.com/el-asesor-fiscal/30min",
    desc: "Elige un hueco en nuestra agenda y hablamos directamente.",
    type: "cal" as const,
  },
  {
    title: "Solicitar plaza",
    value: "Formulario de aplicación",
    href: "/aplicar",
    desc: "Si quieres trabajar con nosotros, empieza aquí.",
    type: "internal" as const,
  },
];

export default function ContactoPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">Contacto</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Hablemos
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Si tienes preguntas o quieres explorar si encajamos, estamos a un
            mensaje de distancia.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto space-y-6">
            {contactMethods.map((method, i) => {
              const cardContent = (
                <Card hover>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-2">
                        {method.title}
                      </p>
                      <p className="font-serif text-xl font-semibold text-accent mb-1">
                        {method.value}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {method.desc}
                      </p>
                    </div>
                    <span className="text-accent text-xl mt-2">→</span>
                  </div>
                </Card>
              );

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  {method.type === "cal" ? (
                    <TrackedCalLink
                      href={method.href}
                      source="contacto_page"
                      className="block"
                    >
                      {cardContent}
                    </TrackedCalLink>
                  ) : method.type === "phone" ? (
                    <PhoneLink
                      source="contacto_page"
                      showIcon={false}
                      showLabel={false}
                      className="block"
                    >
                      {cardContent}
                    </PhoneLink>
                  ) : (
                    <a href={method.href} className="block">
                      {cardContent}
                    </a>
                  )}
                </ScrollReveal>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto mt-16">
            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-border bg-bg-secondary/30 p-8">
                <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">
                  Envíanos un mensaje
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="rounded-xl border border-border bg-bg-secondary/30 p-8">
              <h2 className="font-serif text-2xl font-semibold text-text-primary mb-3">
                Dónde estamos
              </h2>
              <address className="not-italic text-text-secondary">
                <p className="font-medium">{SITE.name}</p>
                <p>{SITE.street}</p>
                <p>
                  {SITE.postalCode} {SITE.city} ({SITE.district})
                </p>
              </address>
              <p className="text-text-muted text-sm mt-3">
                {SITE.hours}
              </p>
              <a
                href="https://maps.google.com/?q=Calle+de+Abtao+44+Madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:underline"
              >
                Ver en Google Maps →
              </a>
              <p className="text-text-muted text-xs mt-4 border-t border-border pt-4">
                También trabajamos de forma remota con clientes en toda España.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Preparado para dar el paso?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito y descubrirás cómo podemos
            ayudarte.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Aplicar a una plaza
          </Button>
        </div>
      </section>
    </>
  );
}
