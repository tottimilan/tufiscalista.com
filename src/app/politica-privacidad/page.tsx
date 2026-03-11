import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos de Tu Fiscalista.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-premium">
        <div className="max-w-3xl mx-auto prose-invert">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-8">
            Política de Privacidad
          </h1>

          <div className="space-y-8 text-text-secondary leading-relaxed text-sm">
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                1. Responsable del tratamiento
              </h2>
              <p>
                {SITE.advisor}, con domicilio en Madrid, España, es el
                responsable del tratamiento de los datos personales
                proporcionados a través de este sitio web.
              </p>
              <p className="mt-2">
                Email de contacto: info@tufiscalista.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                2. Datos recopilados
              </h2>
              <p>
                Recopilamos los datos que nos proporcionas voluntariamente a
                través de nuestros formularios: nombre, email, teléfono, tipo de
                actividad, facturación aproximada y cualquier información
                adicional que incluyas en tu mensaje.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                3. Finalidad del tratamiento
              </h2>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Gestionar tu solicitud de diagnóstico o contacto</li>
                <li>Proporcionarte información sobre nuestros servicios</li>
                <li>Cumplir con obligaciones legales aplicables</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                4. Base legal
              </h2>
              <p>
                El tratamiento de tus datos se basa en tu consentimiento
                expreso al enviar el formulario, así como en el interés legítimo
                de atender tu solicitud.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                5. Conservación de datos
              </h2>
              <p>
                Tus datos serán conservados durante el tiempo necesario para
                cumplir con la finalidad para la que fueron recogidos y para
                cumplir con las obligaciones legales aplicables.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                6. Derechos del usuario
              </h2>
              <p>
                Puedes ejercer tus derechos de acceso, rectificación,
                supresión, oposición, limitación y portabilidad enviando un
                email a info@tufiscalista.com.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                7. Cookies y analítica
              </h2>
              <p>
                Este sitio utiliza Google Analytics para analizar el uso del
                sitio web y mejorar nuestros servicios. Puedes desactivar las
                cookies en la configuración de tu navegador.
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
