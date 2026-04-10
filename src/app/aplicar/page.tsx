import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { PLAZAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aplicar a una plaza",
  description:
    "Solicita tu diagnóstico fiscal gratuito. Solo 20 plazas disponibles para asesoría fiscal premium.",
};

export default function AplicarPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-premium">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="gold">
              {PLAZAS.total - PLAZAS.ocupadas} plazas disponibles
            </Badge>
            <h1 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Aplica a una plaza
            </h1>
            <p className="mt-4 text-text-secondary text-lg leading-relaxed">
              Rellena el formulario y recibirás una respuesta personalizada en
              menos de 48h. Si encajamos, agendaremos un diagnóstico gratuito
              para revisar tu situación fiscal.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-bg-secondary/50 p-6 md:p-10">
            <ApplyForm />
          </div>

          <div className="mt-8 rounded-xl border border-border bg-bg-secondary/30 p-6 text-center">
            <p className="text-sm text-text-secondary mb-4">
              ¿Prefieres hablar directamente? Agenda una reunión:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <TrackedCalLink href="https://cal.com/el-asesor-fiscal/15min" source="aplicar_15min">
                Reunión 15 min
              </TrackedCalLink>
              <TrackedCalLink href="https://cal.com/el-asesor-fiscal/30min" source="aplicar_30min">
                Reunión 30 min
              </TrackedCalLink>
            </div>
            <p className="mt-3 text-xs text-text-muted">
              O escríbenos a{" "}
              <a
                href="mailto:info@tufiscalista.com"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                info@tufiscalista.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
