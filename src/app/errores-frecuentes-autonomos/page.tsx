import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Errores Fiscales Frecuentes de Autónomos | Evítalos",
  description:
    "Los errores fiscales más comunes entre autónomos en España: deducciones mal aplicadas, plazos perdidos, mezcla de gastos y más. Aprende a evitarlos.",
  keywords: [
    "errores fiscales autónomos",
    "errores declaración renta",
    "multas Hacienda autónomos",
    "errores IVA",
  ],
};

const data = {
  badge: "Errores Comunes",
  h1: (
    <>
      Los errores fiscales que más{" "}
      <span className="text-gradient-gold">cuestan a los autónomos</span>
    </>
  ),
  subtitle:
    "Identificar estos errores antes de cometerlos puede ahorrarte miles de euros en sanciones y recargos.",
  intro: `
    <p>La fiscalidad del autónomo en España no es especialmente sencilla, y los errores se pagan caro. Según los datos de la propia Agencia Tributaria, una parte significativa de las sanciones y recargos que impone cada año recaen sobre trabajadores por cuenta propia que cometieron <strong>errores evitables</strong>.</p>
    <p>La buena noticia es que la mayoría de estos errores siguen un patrón predecible: se repiten año tras año y, una vez que los conoces, son relativamente fáciles de prevenir. No hace falta ser un experto en fiscalidad; basta con tener buenos hábitos y, cuando la complejidad lo requiera, el respaldo de un asesor que revise los datos.</p>
    <p>En esta guía repasamos los <strong>cinco errores fiscales más frecuentes</strong> entre autónomos, cómo te afectan económicamente y qué puedes hacer hoy para dejar de cometerlos.</p>
  `,
  sections: [
    {
      title: "Mezclar gastos personales y profesionales",
      content: `
        <p>Este es, sin duda, el error más extendido y uno de los primeros que revisa Hacienda en una inspección. Utilizar la misma cuenta bancaria para gastos personales y profesionales dificulta la justificación de las deducciones y abre la puerta a que la Agencia Tributaria <strong>rechace gastos legítimos</strong> por falta de trazabilidad.</p>
        <p>El problema no es solo fiscal; también es organizativo. Cuando todo se mezcla en una misma cuenta, es prácticamente imposible saber cuánto gasta realmente tu negocio, qué margen tienes y cuánto IVA soportado puedes deducir con seguridad.</p>
        <ul>
          <li><strong>Solución mínima:</strong> Abre una cuenta bancaria exclusiva para la actividad profesional. No tiene que ser una cuenta de empresa; basta con una segunda cuenta personal que uses solo para ingresos y gastos del negocio.</li>
          <li><strong>Beneficio inmediato:</strong> Cuadrar el IVA trimestral se simplifica enormemente y reduces el riesgo ante una comprobación.</li>
          <li><strong>Extra:</strong> Muchas fintech ofrecen cuentas sin comisiones que permiten categorizar gastos automáticamente.</li>
        </ul>
      `,
    },
    {
      title: "No deducir todo lo permitido",
      content: `
        <p>Tan grave como deducir lo que no toca es <strong>dejar de deducir lo que sí corresponde</strong>. Muchos autónomos, por desconocimiento o por miedo a una inspección, renuncian a deducciones perfectamente legales y terminan pagando más impuestos de los necesarios.</p>
        <p>La lista de gastos deducibles para un autónomo es más amplia de lo que la mayoría cree. Además de los gastos directos de la actividad (materiales, herramientas, software), existen deducciones por suministros del hogar si trabajas desde casa, cuotas de autónomo, formación profesional, seguros, amortización de equipos y más.</p>
        <ul>
          <li><strong>Gastos del hogar:</strong> Si trabajas desde casa, puedes deducir un porcentaje de los suministros (luz, agua, internet) proporcional a los metros cuadrados afectos a la actividad, con un 30 % adicional sobre esa proporción.</li>
          <li><strong>Cuota de autónomos:</strong> Deducible íntegramente como gasto de la actividad.</li>
          <li><strong>Formación:</strong> Cursos, libros y suscripciones relacionados con tu actividad profesional son deducibles.</li>
          <li><strong>Seguros:</strong> Seguro de responsabilidad civil, de salud (hasta 500 €/persona y año como incentivo fiscal para autónomos) y de vida vinculado a la actividad.</li>
        </ul>
        <p>Una revisión anual de tus deducciones con un asesor fiscal puede suponer un ahorro de varios cientos —o miles— de euros en tu declaración de la renta.</p>
      `,
    },
    {
      title: "Presentar fuera de plazo",
      content: `
        <p>Cada modelo tributario tiene un plazo de presentación estricto. Presentar fuera de ese plazo, aunque sea un solo día, <strong>genera un recargo automático</strong> que no admite excusas: ni vacaciones, ni saturación de la plataforma, ni desconocimiento.</p>
        <p>El sistema de recargos funciona así: un 1 % fijo más un 1 % adicional por cada mes completo de retraso. Si presentas cinco meses tarde, el recargo es del 6 %. A partir del mes 12, se añaden intereses de demora. Y si es Hacienda quien requiere la presentación (es decir, no lo haces voluntariamente), la sanción puede alcanzar entre el 50 % y el 150 % de la cuota.</p>
        <ul>
          <li><strong>Recargo voluntario (sin requerimiento):</strong> Del 1 % al 15 % según meses de retraso.</li>
          <li><strong>Sanción con requerimiento:</strong> Mínimo del 50 % de la cuota no ingresada, con posibles reducciones por conformidad y pronto pago.</li>
          <li><strong>Consecuencia adicional:</strong> Los retrasos reiterados pueden activar una inspección de ejercicios anteriores.</li>
        </ul>
        <p>La forma más eficaz de evitar este error es <strong>trabajar con un asesor</strong> que gestione los plazos y te pida la documentación con antelación suficiente. Si prefieres hacerlo tú, configura alertas al menos una semana antes de cada vencimiento.</p>
      `,
    },
    {
      title: "No guardar justificantes correctamente",
      content: `
        <p>Hacienda puede requerir las facturas y justificantes que soportan tus declaraciones durante un <strong>plazo de cuatro años</strong> (el plazo de prescripción). Si no puedes aportar una factura o un ticket que justifique un gasto deducido, pierdes la deducción y, potencialmente, te enfrentas a una regularización con intereses.</p>
        <p>El problema más habitual no es la falta de voluntad, sino la falta de sistema. Tickets que se pierden, facturas en PDF desperdigadas por el correo electrónico, recibos en papel que se borran con el tiempo... Sin un sistema de archivo, el riesgo es alto.</p>
        <ul>
          <li><strong>Digitaliza todo:</strong> Escanea o fotografía los tickets en el momento. Aplicaciones como CamScanner, Adobe Scan o la propia app de tu banco facilitan el proceso.</li>
          <li><strong>Organiza por trimestres:</strong> Crea carpetas (físicas o en la nube) por trimestre y tipo de gasto. Esto simplifica enormemente la preparación de modelos y la respuesta ante requerimientos.</li>
          <li><strong>Haz copia de seguridad:</strong> Almacenar los justificantes en un único dispositivo es arriesgado. Utiliza almacenamiento en la nube (Google Drive, Dropbox, OneDrive) como respaldo adicional.</li>
          <li><strong>Conserva al menos 5 años:</strong> Aunque el plazo de prescripción general es de 4 años, hay supuestos en los que puede ampliarse. Guardar 5 años es una buena práctica de seguridad.</li>
        </ul>
      `,
    },
    {
      title: "No planificar el IRPF",
      content: `
        <p>Muchos autónomos descubren en junio, al hacer la declaración de la renta, que deben pagar una cantidad inesperadamente alta. La razón casi siempre es la misma: <strong>no han planificado el IRPF durante el año</strong>.</p>
        <p>El IRPF es un impuesto progresivo: cuanto más ganas, mayor es el porcentaje que pagas. Si tus ingresos han crecido respecto al año anterior pero no has ajustado tus pagos fraccionados (modelo 130) ni has optimizado tus gastos deducibles, el resultado de la Renta puede ser un golpe importante a tu tesorería.</p>
        <ul>
          <li><strong>Haz una previsión a mitad de año:</strong> En julio, con los datos del primer semestre, tu asesor puede estimar cuánto pagarás en la Renta y proponer ajustes: adelantar gastos, ajustar amortizaciones o valorar cambios de estructura.</li>
          <li><strong>Ajusta los pagos fraccionados:</strong> Si tus ingresos varían mucho entre trimestres, los pagos del 130 pueden ser insuficientes o excesivos. Una buena planificación equilibra los pagos y evita sorpresas.</li>
          <li><strong>Evalúa la estructura:</strong> A partir de cierto nivel de beneficio, constituir una SL puede reducir la carga fiscal global. Esta decisión debe tomarse con datos y con tiempo, no en diciembre.</li>
        </ul>
        <p>La planificación fiscal no es un lujo; es la diferencia entre pagar lo justo y pagar de más por no haber anticipado tu situación. Un asesor proactivo te ayuda a tomar estas decisiones con margen suficiente.</p>
      `,
    },
  ],
  checklist: [
    "Usar cuentas bancarias separadas para negocio y personal",
    "Archivar facturas digitalmente con respaldo en la nube",
    "Marcar plazos fiscales en el calendario con recordatorios",
    "Revisar deducciones aplicables cada trimestre",
    "Hacer una previsión de IRPF a mitad de año",
  ],
  faq: [
    {
      question:
        "¿Cuánto puede costarme una inspección de Hacienda si encuentran errores?",
      answer:
        "Depende de la gravedad. Una regularización por gastos no justificados implica devolver la deducción más intereses de demora. Si se considera infracción, la sanción va del 50 % al 150 % de la cuota no ingresada, con reducciones por conformidad y pronto pago que pueden dejarla en torno al 25-35 %.",
    },
    {
      question:
        "¿Es cierto que Hacienda no revisa a los autónomos pequeños?",
      answer:
        "Es un mito. La Agencia Tributaria utiliza sistemas automatizados que cruzan datos de facturas, modelos trimestrales y declaraciones. Cualquier inconsistencia puede generar un requerimiento, independientemente del volumen de facturación del autónomo.",
    },
    {
      question:
        "¿Puedo corregir un modelo trimestral ya presentado si detecto un error?",
      answer:
        "Sí. Puedes presentar una declaración complementaria (si el resultado es mayor al declarado) o una solicitud de rectificación (si pagaste de más). Lo importante es corregir cuanto antes: el recargo y los intereses se calculan desde la fecha del plazo original.",
    },
    {
      question:
        "¿Qué hago si Hacienda me envía un requerimiento por un error pasado?",
      answer:
        "Lo primero es no ignorarlo: los plazos de respuesta son estrictos. Lee bien qué solicita Hacienda, recopila la documentación necesaria y, si el asunto es complejo, consulta con un asesor fiscal antes de responder. Una respuesta bien argumentada puede reducir o anular la sanción propuesta.",
    },
  ],
  relatedPosts: [
    {
      slug: "7-deducciones-autonomos",
      title: "7 deducciones que los autónomos se dejan",
    },
    {
      slug: "como-cambiar-de-asesoria",
      title: "Cómo cambiar de asesoría",
    },
  ],
  relatedLandings: [
    { href: "/gastos-deducibles-autonomos", label: "Gastos deducibles" },
    {
      href: "/asesoria-fiscal-para-autonomos",
      label: "Asesoría para autónomos",
    },
  ],
};

export default function ErroresFrecuentesAutonomosPage() {
  return <TOFUTemplate data={data} />;
}
