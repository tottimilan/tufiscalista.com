import { Button } from "@/components/ui/Button";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { PLAZAS } from "@/lib/constants";

export function BlogCTA() {
  const remaining = PLAZAS.total - PLAZAS.ocupadas;

  return (
    <aside
      className="my-10 rounded-xl border p-6 md:p-8 text-center"
      style={{
        backgroundColor: "#fefcf6",
        borderColor: "#e6dcc4",
      }}
    >
      <p className="font-serif text-xl md:text-2xl font-semibold mb-2" style={{ color: "#1a1a1a" }}>
        ¿Te suena esta situación?
      </p>
      <p className="text-sm mb-5 max-w-md mx-auto" style={{ color: "#4a4a4a" }}>
        Podemos ayudarte. Solo{" "}
        <span className="font-semibold" style={{ color: "#9c7c3a" }}>
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
          className="text-sm underline underline-offset-4 transition-colors"
          style={{ color: "#7a6b4f", textDecorationColor: "#c8a97755" }}
        >
          Agendar llamada →
        </TrackedCalLink>
      </div>
    </aside>
  );
}
