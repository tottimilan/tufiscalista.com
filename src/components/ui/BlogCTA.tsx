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
      {/*
        Siempre en columna: así el botón principal queda centrado en el eje
        del bloque. En fila, justify-center centra el *par* botón+enlace y
        el botón parece desviado a la izquierda; además el enlace secundario
        debe leerse bien sobre el fondo claro.
      */}
      <div className="flex flex-col items-center gap-3 w-full max-w-md mx-auto">
        <Button href="/aplicar" size="sm" trackAs="click_cta_primary" className="w-full sm:w-auto">
          Solicitar diagnóstico gratuito
        </Button>
        <TrackedCalLink
          href="https://cal.com/el-asesor-fiscal/15min"
          source="blog_cta"
          className="text-sm font-medium text-[#5c4d32] underline underline-offset-4 decoration-[#b08d4c]/50 hover:text-[#3d331f] hover:decoration-[#b08d4c]"
        >
          Agendar llamada →
        </TrackedCalLink>
      </div>
    </aside>
  );
}
