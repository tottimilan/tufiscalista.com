import type { Metadata } from "next";
import Image from "next/image";
import { SITE, PLAZAS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { VideoIntro } from "@/components/sections/VideoIntro";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce a Tu Fiscalista. Asesoría fiscal boutique con un modelo diferente: máximo 20 clientes, atención real.",
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
  return (
    <>
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

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-xl border border-border bg-bg-secondary/80 overflow-hidden aspect-square relative">
                <Image
                  src="/ali.jpg"
                  alt={`${SITE.advisor} — Fundador de ${SITE.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-primary/90 to-transparent p-6">
                  <p className="font-serif text-2xl font-bold text-text-primary">
                    {SITE.advisor}
                  </p>
                  <p className="text-text-secondary text-sm">
                    Fundador &amp; Asesor Fiscal
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="font-serif text-3xl font-semibold text-text-primary mb-6">
                  La persona detrás del modelo
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Después de años trabajando en grandes firmas de asesoría,
                    Ali decidió que había una forma mejor de hacer las cosas:
                    menos clientes, más profundidad, más criterio.
                  </p>
                  <p>
                    Así nació {SITE.name}: un modelo boutique donde cada
                    cliente tiene acceso directo a su asesor, reuniones
                    periódicas y una estrategia fiscal diseñada a medida.
                  </p>
                  <p>
                    No es un servicio para todo el mundo. Es un servicio para
                    quienes valoran la diferencia entre &quot;presentar
                    impuestos&quot; y &quot;tener un partner fiscal&quot;.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <VideoIntro />

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

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            El primer paso es un diagnóstico gratuito. Sin compromiso, sin
            presión.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Solicitar diagnóstico
          </Button>
        </div>
      </section>
    </>
  );
}
