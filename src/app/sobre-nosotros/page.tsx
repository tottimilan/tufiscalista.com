import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, PLAZAS } from "@/lib/constants";
import { AUTHOR } from "@/lib/author";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { VideoIntro } from "@/components/sections/VideoIntro";

export const metadata: Metadata = {
  title: `Sobre ${AUTHOR.name} — Asesor Fiscal | ${SITE.name}`,
  description: `Conoce a ${AUTHOR.name}, asesor fiscal con ${AUTHOR.yearsExperience}+ años de experiencia. Especializado en fiscalidad para autónomos y pymes en España. Modelo boutique limitado a ${PLAZAS.total} clientes.`,
  alternates: { canonical: "/sobre-nosotros" },
};

const values = [
  {
    title: "Criterio sobre volumen",
    desc: "Preferimos hacer las cosas bien para pocos que mediocremente para muchos.",
  },
  {
    title: "Transparencia total",
    desc: "Sin letra pequeña, sin sorpresas, sin evasivas. Siempre sabes dónde estás.",
  },
  {
    title: "Proactividad",
    desc: "No esperamos a que vengas con un problema. Nos adelantamos.",
  },
  {
    title: "Relación a largo plazo",
    desc: "No buscamos clientes de un trimestre. Buscamos partners que crezcan con nosotros.",
  },
];

export default function SobreNosotrosPage() {
  const hasCredentials = AUTHOR.credentials.length > 0;
  const hasExperience = AUTHOR.experience.length > 0;
  const hasCases = AUTHOR.caseStudies.length > 0;
  const externalLinks = Object.entries(AUTHOR.socialProfiles).filter(
    ([, url]) => typeof url === "string" && url.length > 0,
  ) as [string, string][];

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="gold">La firma</Badge>
            <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              No somos una gestoría.{" "}
              <span className="text-gradient-gold">
                Somos tu departamento fiscal.
              </span>
            </h1>
            <p className="mt-6 text-text-secondary text-lg md:text-xl leading-relaxed">
              {SITE.name} nace de una convicción: la asesoría fiscal no
              puede funcionar bien con 300 clientes. Por eso limitamos nuestro
              cupo a {PLAZAS.total} y dedicamos a cada uno el tiempo que merece.
            </p>
          </div>
        </div>
      </section>

      {/* PERFIL PROFESIONAL DE ALI (E-E-A-T core) */}
      <section
        id="person"
        className="py-20 md:py-28 bg-bg-secondary/30 scroll-mt-24"
      >
        <div className="container-premium">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-start">
            <ScrollReveal direction="left">
              <div className="rounded-xl border border-border bg-bg-secondary/80 overflow-hidden aspect-square relative">
                <Image
                  src="/ali.jpg"
                  alt={`${AUTHOR.name}, ${AUTHOR.jobTitle} de ${SITE.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/95 to-transparent p-6">
                  <p className="font-serif text-2xl font-bold text-text-primary">
                    {AUTHOR.name}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {AUTHOR.jobTitle}
                  </p>
                </div>
              </div>

              {externalLinks.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {externalLinks.map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="inline-flex items-center text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border bg-bg-primary text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
                    >
                      {key === "googleBusiness" ? "Google" : key}
                    </a>
                  ))}
                </div>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary">
                La persona detrás del modelo
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
                {AUTHOR.yearsExperience > 0 && (
                  <span>{AUTHOR.yearsExperience}+ años de experiencia</span>
                )}
                <span aria-hidden>·</span>
                <span>Asesor fiscal en activo desde {AUTHOR.yearStartedPracticing}</span>
                <span aria-hidden>·</span>
                <span>{SITE.city}, España</span>
              </div>

              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                {AUTHOR.longBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Áreas de especialización */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-accent mb-3">
                  Áreas de especialización
                </h3>
                <div className="flex flex-wrap gap-2">
                  {AUTHOR.expertise.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center rounded-full bg-bg-primary px-3 py-1.5 text-xs font-medium text-text-secondary border border-border"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Idiomas */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-accent mb-2">
                  Idiomas
                </h3>
                <p className="text-text-secondary text-sm">
                  {AUTHOR.languages
                    .map((l) =>
                      l === "Spanish"
                        ? "Español"
                        : l === "English"
                          ? "Inglés"
                          : l === "Arabic"
                            ? "Árabe"
                            : l,
                    )
                    .join(" · ")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CREDENCIALES Y FORMACIÓN */}
      {hasCredentials && (
        <section className="py-20 md:py-28">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="gold">Formación y credenciales</Badge>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold">
                  Una base técnica verificable
                </h2>
                <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                  En fiscalidad, la titulación, las asociaciones profesionales y
                  la formación continua importan. Aquí están las credenciales
                  con las que respaldamos cada decisión que tomamos por ti.
                </p>
              </div>

              <ul className="space-y-3">
                {AUTHOR.credentials.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-bg-secondary/30 hover:border-accent/30 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent-muted border border-accent/20 flex items-center justify-center text-accent text-xs font-bold uppercase">
                      {c.type === "degree"
                        ? "Tit"
                        : c.type === "master"
                          ? "MSc"
                          : c.type === "certification"
                            ? "Cert"
                            : "Mbr"}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-text-primary">{c.name}</p>
                      <p className="text-sm text-text-secondary mt-0.5">
                        {c.institution}
                        {c.year && <span className="text-text-muted"> · {c.year}</span>}
                      </p>
                      {c.url && (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-xs text-accent hover:underline"
                        >
                          Verificar →
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* TRAYECTORIA PROFESIONAL */}
      {hasExperience && (
        <section className="py-20 md:py-28 bg-bg-secondary/30">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="gold">Trayectoria</Badge>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold">
                  Experiencia real con autónomos y pymes
                </h2>
              </div>

              <ol className="relative border-l-2 border-accent/30 ml-3 space-y-8">
                {AUTHOR.experience
                  .slice()
                  .sort((a, b) => b.yearStart - a.yearStart)
                  .map((e, i) => (
                    <li key={i} className="ml-6">
                      <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-accent border-2 border-bg-primary" />
                      <p className="text-xs font-semibold tracking-wider uppercase text-accent">
                        {e.yearStart} — {e.yearEnd ?? "actualidad"}
                      </p>
                      <p className="font-serif text-xl font-semibold text-text-primary mt-1">
                        {e.role}
                      </p>
                      <p className="text-text-secondary text-sm mt-0.5">
                        {e.company}
                      </p>
                      {e.description && (
                        <p className="text-text-secondary mt-2 leading-relaxed">
                          {e.description}
                        </p>
                      )}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* CASOS REPRESENTATIVOS */}
      {hasCases && (
        <section className="py-20 md:py-28">
          <div className="container-premium">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="gold">Casos representativos</Badge>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl font-semibold">
                  Trabajo real, resultados concretos
                </h2>
                <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                  Casos anonimizados por confidencialidad pero con datos reales.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {AUTHOR.caseStudies.map((c, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <div className="h-full p-6 rounded-xl border border-border bg-bg-secondary/30 hover:border-accent/30 transition-colors">
                      {c.sector && (
                        <p className="text-xs font-medium tracking-wider uppercase text-accent mb-2">
                          {c.sector}
                        </p>
                      )}
                      <h3 className="font-serif text-lg font-semibold text-text-primary">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <VideoIntro />

      {/* VALORES */}
      <section className="py-20 md:py-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
              Nuestros valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="rounded-lg border border-border bg-bg-secondary/30 p-6 h-full hover:border-accent/20 transition-colors">
                    <h3 className="font-semibold text-text-primary mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            El primer paso es un diagnóstico gratuito. Sin compromiso, sin
            presión.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
              Solicitar diagnóstico
            </Button>
            <Link
              href="/contacto"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              o contacta directamente →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
