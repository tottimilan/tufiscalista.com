import { Button } from "@/components/ui/Button";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { PLAZAS } from "@/lib/constants";

export function BlogCTA() {
  const remaining = PLAZAS.total - PLAZAS.ocupadas;

  return (
    <aside className="my-10 rounded-xl border border-accent/20 bg-accent-muted/40 p-6 md:p-8 text-center">
      <p className="font-serif text-xl md:text-2xl font-semibold text-text-primary mb-2">
        ¿Te suena esta situación?
      </p>
      <p className="text-text-secondary text-sm mb-5 max-w-md mx-auto">
        Podemos ayudarte. Solo{" "}
        <span className="text-accent font-semibold">
          {remaining} plazas disponibles
        </span>{" "}
        este trimestre.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button href="/aplicar" size="sm" trackAs="click_cta_primary">
          Solicitar diagnóstico gratuito
        </Button>
        <TrackedCalLink
          href="https://cal.com/el-asesor-fiscal/15min"
          source="blog_cta"
          className="text-sm text-text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
        >
          Agendar llamada →
        </TrackedCalLink>
      </div>
    </aside>
  );
}
