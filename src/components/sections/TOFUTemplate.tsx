"use client";

import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { trackEvent } from "@/lib/tracking";
import Link from "next/link";

interface TOFUData {
  badge: string;
  h1: React.ReactNode;
  subtitle: string;
  intro: string;
  sections: { title: string; content: string }[];
  checklist?: string[];
  faq: { question: string; answer: string }[];
  relatedPosts?: { slug: string; title: string }[];
  relatedLandings?: { href: string; label: string }[];
}

export function TOFUTemplate({ data }: { data: TOFUData }) {
  const tracked = useRef(false);
  useEffect(() => {
    if (!tracked.current) {
      tracked.current = true;
      trackEvent("view_landing", { badge: data.badge });
    }
  }, [data.badge]);

  return (
    <>
      <section className="pt-28 pb-14 md:pt-40 md:pb-20">
        <div className="container-premium text-center">
          <Badge variant="gold">{data.badge}</Badge>
          <h1 className="mt-5 font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mx-auto text-balance">
            {data.h1}
          </h1>
          <p className="mt-5 text-text-secondary text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-premium max-w-3xl mx-auto">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: data.intro }}
          />
        </div>
      </section>

      {data.sections.map((section, i) => (
        <section
          key={i}
          className={`py-10 md:py-16 ${i % 2 === 0 ? "bg-bg-secondary/40" : ""}`}
        >
          <div className="container-premium max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6">
                {section.title}
              </h2>
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="py-10 md:py-16">
        <div className="container-premium max-w-3xl mx-auto">
          <BlogCTA />
        </div>
      </section>

      {data.checklist && data.checklist.length > 0 && (
        <section className="py-14 md:py-20 bg-bg-secondary/40">
          <div className="container-premium max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-center mb-8">
              Checklist rápido
            </h2>
            <div className="space-y-2">
              {data.checklist.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="flex items-start gap-3 p-3 rounded-md border border-border hover:border-accent/20 transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent mt-0.5 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-text-primary">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 md:py-20">
        <div className="container-premium max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-center mb-8">
            Preguntas frecuentes
          </h2>
          <Accordion items={data.faq} />
        </div>
      </section>

      {data.relatedPosts && data.relatedPosts.length > 0 && (
        <section className="py-10 md:py-16 bg-bg-secondary/40">
          <div className="container-premium max-w-3xl mx-auto">
            <h2 className="font-serif text-xl md:text-2xl font-semibold mb-6">
              Artículos relacionados
            </h2>
            <div className="space-y-2">
              {data.relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="block p-4 rounded-lg border border-border hover:border-accent/30 hover:bg-bg-secondary/60 transition-all group"
                >
                  <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {rp.title} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.relatedLandings && data.relatedLandings.length > 0 && (
        <section className="py-10 md:py-12">
          <div className="container-premium max-w-3xl mx-auto">
            <h3 className="text-sm font-medium tracking-widest uppercase text-text-muted mb-4">
              Servicios relacionados
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.relatedLandings.map((rl) => (
                <Link
                  key={rl.href}
                  href={rl.href}
                  className="inline-flex items-center rounded-full bg-accent-muted px-4 py-1.5 text-xs font-medium text-accent border border-accent/20 hover:bg-accent/10 transition-colors"
                >
                  {rl.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 md:py-20">
        <div className="container-premium text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-4">
            ¿Necesitas ayuda con tu situación fiscal?
          </h2>
          <p className="text-text-secondary text-base md:text-lg mb-8 max-w-xl mx-auto">
            Solicita un diagnóstico gratuito y revisamos tu caso sin compromiso.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>
    </>
  );
}
