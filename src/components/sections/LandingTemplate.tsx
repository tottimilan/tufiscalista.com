"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { Avatar } from "@/components/ui/Avatar";
import { trackEvent } from "@/lib/tracking";
import { TESTIMONIALS, PLAZAS, SITE } from "@/lib/constants";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

interface RelatedResource {
  href: string;
  title: string;
  type: string;
}

interface LandingData {
  badge: string;
  h1: React.ReactNode;
  /** Texto plano del título de la página, usado para BreadcrumbList. */
  pageTitle?: string;
  subtitle: string;
  pains: { title: string; desc: string }[];
  benefits: string[];
  method: { step: string; desc: string }[];
  faq: { question: string; answer: string }[];
  relatedResources?: RelatedResource[];
}

function prettyFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w, i) => (i === 0 ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function LandingSchemas({ data, pathname }: { data: LandingData; pathname: string }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  const name = data.pageTitle ?? (slug ? prettyFromSlug(slug) : "Inicio");
  const url = `${SITE.url}${pathname}`;

  const breadcrumb = breadcrumbSchema([
    { name: "Inicio", url: "/" },
    { name },
  ]);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description: data.subtitle,
    url,
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: { "@type": "Country", name: "España" },
    serviceType: "Asesoría fiscal",
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE.url}#organization` },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumb)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(service)} />
    </>
  );
}

export function LandingTemplate({ data }: { data: LandingData }) {
  const tracked = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("view_landing", { badge: data.badge });
    }
  }, [data.badge]);

  const remaining = PLAZAS.total - PLAZAS.ocupadas;

  return (
    <>
      <LandingSchemas data={data} pathname={pathname} />
      <section className="pt-28 pb-14 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">{data.badge}</Badge>
          <h1 className="mt-5 font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto text-balance">
            {data.h1}
          </h1>
          <p className="mt-5 text-text-secondary text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Solo {PLAZAS.total} clientes
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Respuesta en &lt;24h
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Sin permanencia
            </span>
            {remaining <= 8 && (
              <span className="flex items-center gap-1.5 text-accent font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {remaining} plazas disponibles
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
                Solicitar diagnóstico gratuito
              </Button>
              <Button href="/como-trabajamos" variant="secondary" size="lg">
                Ver cómo trabajamos
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-2 text-sm">
              <a
                href="https://cal.com/el-asesor-fiscal/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent"
                onClick={() => trackEvent("book_call", { source: "landing_hero" })}
              >
                Agenda una llamada de 15 min
              </a>
              <span className="hidden sm:inline text-text-muted">·</span>
              <PhoneLink
                source="landing_hero"
                className="text-text-muted hover:text-accent"
              >
                <span className="underline underline-offset-4 decoration-border">{SITE.phoneDisplay}</span>
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28 bg-bg-secondary/40">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
              ¿Te identificas con esto?
            </h2>
            <div className="space-y-3">
              {data.pains.map((pain, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <Card hover>
                    <h3 className="font-medium text-text-primary mb-1">
                      {pain.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {pain.desc}
                    </p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
              Lo que obtienes con nosotros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.benefits.map((b, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 p-4 rounded-md border border-border bg-bg-secondary/30 hover:border-accent/20 hover:bg-bg-secondary/50 transition-all duration-300 group">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-text-primary">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28 bg-bg-secondary/40">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
              Así trabajamos
            </h2>
            <div className="space-y-4">
              {data.method.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex gap-5 items-start p-4 rounded-lg hover:bg-white/5 transition-colors group">
                    <span className="font-serif text-4xl font-bold text-accent/20 leading-none group-hover:text-accent/35 transition-colors">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-text-primary mb-1">{m.step}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TESTIMONIALS.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="rounded-lg border border-border bg-bg-secondary/50 p-6 h-full hover:border-accent/20 hover:bg-bg-secondary/70 transition-all duration-300">
                    <p className="font-serif text-lg font-bold text-accent mb-3">{t.result}</p>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <div className="pt-3 border-t border-border flex items-center gap-2.5">
                      <Avatar name={t.name} size="sm" />
                      <div>
                        <p className="text-sm font-medium text-text-primary">{t.name}</p>
                        <p className="text-xs text-text-muted">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="rounded-xl border border-accent/20 bg-accent-muted/30 p-6 md:p-8 flex items-center gap-5">
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-accent/30 shrink-0">
                  <Image
                    src="/ali.jpg"
                    alt={`${SITE.advisor}, asesor fiscal`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    quality={75}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium tracking-widest uppercase text-accent mb-1">
                    Tu asesor responsable
                  </p>
                  <p className="font-serif text-xl md:text-2xl font-semibold text-text-primary mb-1">
                    {SITE.advisor}
                  </p>
                  <p className="text-sm text-text-secondary">
                    Asesor fiscal con +10 años de experiencia. Yo personalmente reviso tu caso, te llamo y respondo a tus dudas. No es un departamento ni un becario.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-28 bg-bg-secondary/40">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
              Preguntas frecuentes
            </h2>
            <Accordion items={data.faq} />
          </div>
        </div>
      </section>

      {data.relatedResources && data.relatedResources.length > 0 && (
        <section className="py-10 md:py-16">
          <div className="container-premium">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-sm font-medium tracking-widest uppercase text-text-muted mb-5 text-center">
                Recursos relacionados
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.relatedResources.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="flex items-start gap-3 p-4 rounded-lg border border-border bg-bg-secondary/30 hover:border-accent/30 hover:bg-bg-secondary/50 transition-all group"
                  >
                    <span className="mt-0.5 text-accent text-xs font-semibold tracking-wider uppercase shrink-0">
                      {r.type === "blog" ? "Blog" : "Guía"}
                    </span>
                    <span className="text-sm text-text-primary group-hover:text-accent transition-colors">
                      {r.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-14 md:py-28">
        <div className="container-premium text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-4">
            ¿Listo para dar el paso?
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
            Solicita tu diagnóstico gratuito. Sin compromiso, sin presión.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
              Aplicar a una plaza
            </Button>
            <a
              href="https://cal.com/el-asesor-fiscal/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent"
              onClick={() => trackEvent("book_call", { source: "landing_bottom_cta" })}
            >
              ¿Prefieres hablar primero? Agenda una llamada →
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
