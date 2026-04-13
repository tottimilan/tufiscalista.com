import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Recursos Fiscales Gratuitos | Tu Fiscalista",
  description:
    "Guías, herramientas y artículos gratuitos para autónomos y pymes. Calendario fiscal, calculadora de impuestos, blog y más.",
};

const herramientas = [
  {
    href: "/calculadora-fiscal",
    title: "Calculadora fiscal",
    desc: "Estima tus impuestos como autónomo o pyme en menos de 2 minutos.",
  },
  {
    href: "/calendario-fiscal",
    title: "Calendario fiscal 2026",
    desc: "Todas las fechas clave de Hacienda y Seguridad Social para este año.",
  },
  {
    href: "/blog",
    title: "Blog fiscal",
    desc: "Artículos prácticos sobre fiscalidad, contabilidad y gestión de negocio.",
  },
];

const guias = [
  {
    href: "/guia-factura-electronica",
    title: "Factura electrónica",
    desc: "Todo lo que necesitas saber sobre la obligación de facturación electrónica.",
  },
  {
    href: "/verifactu-que-es",
    title: "VeriFactu",
    desc: "Qué es el sistema VeriFactu y cómo afecta a tu negocio.",
  },
  {
    href: "/gastos-deducibles-autonomos",
    title: "Gastos deducibles",
    desc: "Guía completa de gastos que puedes deducir como autónomo.",
  },
  {
    href: "/autonomo-vs-sl",
    title: "Autónomo vs SL",
    desc: "Compara ambas formas jurídicas y descubre cuál te conviene más.",
  },
  {
    href: "/modelos-trimestrales-autonomos",
    title: "Modelos trimestrales",
    desc: "Qué modelos debes presentar cada trimestre y cuándo.",
  },
  {
    href: "/errores-frecuentes-autonomos",
    title: "Errores comunes",
    desc: "Los errores fiscales más frecuentes entre autónomos y cómo evitarlos.",
  },
  {
    href: "/como-pagar-menos-impuestos-legalmente",
    title: "Optimización fiscal",
    desc: "Estrategias legales para reducir tu carga fiscal de forma inteligente.",
  },
];

const urgentes = [
  {
    href: "/requerimientos-hacienda",
    title: "Requerimientos",
    desc: "Qué hacer si recibes un requerimiento de Hacienda.",
  },
  {
    href: "/inspeccion-hacienda",
    title: "Inspección",
    desc: "Cómo actuar ante una inspección fiscal de la AEAT.",
  },
  {
    href: "/notificaciones-hacienda",
    title: "Notificaciones",
    desc: "Cómo gestionar las notificaciones electrónicas de Hacienda.",
  },
  {
    href: "/sanciones-fiscales",
    title: "Sanciones",
    desc: "Tipos de sanciones fiscales, cuantías y cómo recurrir.",
  },
];

function ResourceCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link href={href} className="group block h-full">
      <div className="rounded-xl border border-border bg-bg-secondary/30 p-6 h-full hover:border-accent/30 hover:bg-bg-secondary/60 transition-all duration-300">
        <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}

export default function RecursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="container-premium text-center">
          <Badge variant="gold">Recursos</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Recursos fiscales gratuitos
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Herramientas, guías y contenido práctico para que tomes mejores
            decisiones fiscales. Todo gratis, sin letra pequeña.
          </p>
        </div>
      </section>

      {/* Herramientas */}
      <section className="py-14 md:py-24 bg-bg-secondary/40">
        <div className="container-premium">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-10 md:mb-14">
            Herramientas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {herramientas.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.08}>
                <ResourceCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guías informativas */}
      <section className="py-14 md:py-24">
        <div className="container-premium">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-10 md:mb-14">
            Guías informativas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {guias.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.06}>
                <ResourceCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Situaciones urgentes */}
      <section className="py-14 md:py-24 bg-bg-secondary/40">
        <div className="container-premium">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-4">
            Situaciones urgentes
          </h2>
          <p className="text-text-secondary text-center mb-10 md:mb-14 max-w-xl mx-auto">
            Si Hacienda ha llamado a tu puerta, aquí tienes lo que necesitas
            saber.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {urgentes.map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.08}>
                <ResourceCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Necesitas ayuda personalizada?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Los recursos están bien para informarte, pero si quieres un plan
            fiscal a medida, hablemos.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>
    </>
  );
}
