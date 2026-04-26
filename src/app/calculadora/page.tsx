import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { FiscalCalculator } from "@/components/tools/FiscalCalculator";

export const metadata: Metadata = {
  title: "Calculadora Fiscal — Estima tu Ahorro",
  description:
    "Calcula cuánto podrías ahorrar en impuestos con una planificación fiscal profesional. Herramienta gratuita para autónomos y pymes en España.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="gold">Herramienta gratuita</Badge>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              ¿Cuánto podrías{" "}
              <span className="text-gradient-gold">ahorrar</span> en impuestos?
            </h1>
            <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed">
              Introduce tus datos y obtén una estimación del ahorro fiscal que
              podrías conseguir con una planificación profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-premium">
          <FiscalCalculator />
        </div>
      </section>
    </>
  );
}
