import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal y condiciones de uso de Tu Fiscalista.",
};

export default function AvisoLegalPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
            Aviso Legal
          </h1>

          <div className="space-y-8 text-text-secondary leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                1. Datos identificativos
              </h2>
              <p>
                En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad
                de la Información y de Comercio Electrónico, se informa:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Titular: {SITE.advisor}</li>
                <li>Domicilio: Madrid, España</li>
                <li>Email: info@tufiscalista.com</li>
                <li>Sitio web: {SITE.url}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                2. Objeto
              </h2>
              <p>
                Este sitio web tiene como finalidad informar sobre los servicios
                de asesoría fiscal boutique ofrecidos por {SITE.name} y
                facilitar el contacto con potenciales clientes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                3. Propiedad intelectual
              </h2>
              <p>
                Todos los contenidos del sitio web (textos, imágenes, diseños,
                código fuente, logotipos y marca) son propiedad de{" "}
                {SITE.advisor} o de sus legítimos propietarios, y están
                protegidos por la legislación vigente en materia de propiedad
                intelectual e industrial.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                4. Condiciones de uso
              </h2>
              <p>
                El acceso al sitio web es gratuito y no requiere registro
                previo. El usuario se compromete a hacer un uso adecuado y
                lícito del sitio, conforme a la legislación vigente.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                5. Limitación de responsabilidad
              </h2>
              <p>
                La información contenida en este sitio tiene carácter
                informativo y no constituye asesoramiento fiscal o legal. Para
                obtener un servicio personalizado, es necesario solicitar un
                diagnóstico.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                6. Legislación aplicable
              </h2>
              <p>
                Para la resolución de posibles controversias, se aplicará la
                legislación española, y serán competentes los juzgados y
                tribunales de Madrid.
              </p>
            </div>

            <p className="text-text-muted text-xs pt-4 border-t border-border">
              Última actualización: marzo de 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
