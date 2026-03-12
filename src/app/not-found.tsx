import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container-premium text-center">
        <p className="font-serif text-8xl md:text-9xl font-bold text-accent/20">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl font-semibold text-text-primary">
          Página no encontrada
        </h1>
        <p className="mt-4 text-text-secondary max-w-md mx-auto">
          La página que buscas no existe o ha sido movida. Vuelve al inicio para
          seguir navegando.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" size="lg">
            Volver al inicio
          </Button>
          <Button href="/contacto" variant="secondary" size="lg">
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
}
