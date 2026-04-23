import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { PhoneLink } from "@/components/ui/PhoneLink";

export function MeetYourAdvisor() {
  return (
    <section className="py-14 md:py-28 bg-bg-secondary/30">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-3">
                Tu asesor
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary">
                Trabajas directamente con quien te asesora
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center md:items-start">
              {/* Foto del asesor */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10">
                  <Image
                    src="/ali.jpg"
                    alt={`${SITE.advisor}, asesor fiscal y fundador de ${SITE.name}`}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover"
                    priority={false}
                    quality={80}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl font-semibold text-text-primary mb-1">
                  {SITE.advisor}
                </h3>
                <p className="text-accent font-medium mb-5">
                  Asesor fiscal · Fundador de {SITE.name}
                </p>

                <p className="text-text-secondary leading-relaxed mb-4">
                  Asesor fiscal con más de 10 años de experiencia trabajando
                  con autónomos y pymes en España. Especializado en
                  planificación fiscal estratégica, fiscalidad para extranjeros
                  y residencia, y defensa ante requerimientos de Hacienda.
                </p>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Mi modelo de trabajo se basa en pocos clientes con atención
                  real. Por eso solo acepto 20 clientes al año: para que cada
                  uno tenga el tiempo, la planificación y el criterio que
                  merece.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <TrackedCalLink
                    href="https://cal.com/el-asesor-fiscal/15min"
                    source="meet_advisor"
                  >
                    Hablar conmigo (15 min)
                  </TrackedCalLink>
                  <PhoneLink
                    source="meet_advisor"
                    className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors px-4 py-2.5"
                  />
                </div>

                <p className="mt-5 text-xs text-text-muted">
                  <Link
                    href="/sobre-nosotros"
                    className="underline underline-offset-4 decoration-border hover:text-accent hover:decoration-accent transition-colors"
                  >
                    Más sobre mi trayectoria y enfoque →
                  </Link>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
