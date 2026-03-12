import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ApplyForm } from "@/components/forms/ApplyForm";
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
              <a
                href="https://cal.com/el-asesor-fiscal/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-muted px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/10 hover:border-accent/50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Reunión 15 min
              </a>
              <a
                href="https://cal.com/el-asesor-fiscal/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent-muted px-5 py-2.5 text-sm font-medium text-accent transition-all hover:bg-accent/10 hover:border-accent/50"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Reunión 30 min
              </a>
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
