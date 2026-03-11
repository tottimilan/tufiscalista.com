import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/lib/constants";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre el servicio premium de Tu Fiscalista. Qué incluye, permanencia, precios y más.",
};

const extraFAQ = [
  {
    question: "¿Cuál es el precio del servicio?",
    answer:
      "La cuota se adapta a la complejidad de tu caso. En el diagnóstico gratuito te damos un precio cerrado, sin sorpresas ni extras ocultos.",
  },
  {
    question: "¿Puedo contratar solo un servicio concreto?",
    answer:
      "Nuestro modelo es integral. Trabajamos con un plan que cubre todas las áreas porque así obtenemos mejores resultados. No ofrecemos servicios sueltos.",
  },
  {
    question: "¿Cómo se gestionan las comunicaciones con Hacienda?",
    answer:
      "Nos encargamos de todo. Monitorizamos tus notificaciones electrónicas, respondemos a requerimientos y te informamos de cada paso.",
  },
  {
    question: "¿Ofrecéis servicio para sociedades con empleados?",
    answer:
      "Sí. Cubrimos la gestión laboral completa: nóminas, contratos, altas, bajas y todo lo relacionado con personal.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">FAQ</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Preguntas frecuentes
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas saber antes de dar el paso.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-premium">
          <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">
                Sobre el servicio
              </h2>
              <Accordion items={[...FAQ_ITEMS]} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">
                Precio y contratación
              </h2>
              <Accordion items={extraFAQ} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg-secondary/30">
        <div className="container-premium text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            ¿No encuentras tu pregunta?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Escríbenos directamente o solicita tu diagnóstico gratuito.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
              Solicitar diagnóstico
            </Button>
            <Button href="/contacto" variant="secondary" size="lg">
              Contactar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
