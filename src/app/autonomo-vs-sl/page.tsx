import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Autónomo vs SL: Comparativa Fiscal Completa 2026",
  description:
    "Comparativa detallada entre autónomo y sociedad limitada: impuestos, cotizaciones, responsabilidad, costes y cuándo conviene cada opción.",
  keywords: [
    "autónomo vs SL",
    "autónomo o sociedad limitada",
    "constituir SL",
    "comparativa fiscal",
  ],
};

const data = {
  badge: "Comparativa",
  h1: (
    <>
      Autónomo vs. SL:{" "}
      <span className="text-gradient-gold">¿qué te conviene?</span>
    </>
  ),
  subtitle:
    "Análisis detallado con cifras reales de 2026. No te quedes con respuestas genéricas.",
  intro: `
    <p>"¿Me conviene más ser autónomo o montar una SL?" Es, sin duda, una de las preguntas más frecuentes que recibimos en nuestra asesoría. Y la respuesta honesta es que <strong>depende de tu situación concreta</strong>: nivel de ingresos, gastos, patrimonio personal, planes de crecimiento y tolerancia al riesgo.</p>
    <p>El problema es que la mayoría de la información disponible en internet se queda en respuestas genéricas o en reglas simplistas del tipo "si facturas más de X, monta una SL". La realidad es mucho más matizada, y <strong>una decisión equivocada puede costarte miles de euros al año</strong> en impuestos innecesarios o en costes de estructura que no necesitas.</p>
    <p>En esta guía comparamos ambas opciones con cifras actualizadas a 2026, analizando cada factor relevante para que puedas tomar una decisión informada —o, mejor aún, para que llegues a la consulta con tu asesor fiscal con las preguntas correctas.</p>
  `,
  sections: [
    {
      title: "Tributación: IRPF vs. Impuesto de Sociedades",
      content: `
        <p>Esta es la diferencia más conocida y, generalmente, la que más peso tiene en la decisión. El autónomo tributa por el <strong>IRPF con tipos progresivos</strong> que van del 19% al 47% (o más, dependiendo de la comunidad autónoma). Esto significa que cuanto más ganas, mayor porcentaje pagas.</p>
        <p>La sociedad limitada, en cambio, tributa por el <strong>Impuesto de Sociedades a un tipo fijo del 25%</strong>. Además, las empresas de nueva creación disfrutan de un tipo reducido del <strong>15% durante los dos primeros ejercicios con base imponible positiva</strong>, lo que supone un ahorro significativo en los primeros años.</p>
        <p>Sin embargo, hay un matiz crucial que muchos olvidan: el dinero que queda en la SL no es tuyo hasta que no lo sacas. Si te pagas un sueldo, ese sueldo tributa igualmente por IRPF. Si repartes dividendos, pagas un <strong>19-26% adicional</strong> sobre el importe distribuido. Por tanto, la ventaja fiscal real solo es clara cuando puedes <strong>reinvertir beneficios dentro de la sociedad</strong> en lugar de extraerlos.</p>
      `,
    },
    {
      title: "Cotizaciones y Seguridad Social",
      content: `
        <p>Desde 2023, el sistema de cotización para autónomos se basa en los <strong>rendimientos netos reales</strong>, con un sistema de tramos progresivos. En 2026, las bases mínimas y máximas se han ajustado, pero el rango de cuotas mensuales oscila entre aproximadamente <strong>230 € y 530 €</strong> dependiendo de tu nivel de ingresos.</p>
        <p>El administrador de una SL cotiza al RETA (Régimen Especial de Trabajadores Autónomos) si posee el control efectivo de la sociedad, es decir, si tiene más del 25% del capital (o más del 33% sin funciones de dirección). En la práctica, la mayoría de socios-administradores de SL unipersonales o con pocos socios <strong>están obligados a darse de alta como autónomos societarios</strong>.</p>
        <p>La diferencia es que el autónomo societario tiene una <strong>base mínima de cotización más alta</strong> que el autónomo persona física. Esto supone una cuota mensual superior (en torno a 370-400 € como mínimo en 2026), lo que es un coste fijo adicional que debes contemplar en tu análisis.</p>
      `,
    },
    {
      title: "Responsabilidad patrimonial",
      content: `
        <p>Este es un factor que muchos subestiman hasta que surge un problema. El autónomo responde de las deudas de su negocio con <strong>todo su patrimonio personal</strong>: vivienda, ahorros, vehículos, inversiones. No hay separación entre el patrimonio personal y el profesional.</p>
        <p>La sociedad limitada, como su nombre indica, <strong>limita la responsabilidad al capital aportado</strong>. Si la empresa contrae deudas que no puede pagar, en principio solo responde el patrimonio de la sociedad. Tu casa y tus ahorros personales quedan protegidos.</p>
        <p>Hay excepciones importantes a esta protección:</p>
        <ul>
          <li><strong>Deudas con la Seguridad Social y Hacienda:</strong> la administración tributaria puede derivar la responsabilidad al administrador en ciertos supuestos</li>
          <li><strong>Administración negligente:</strong> si se demuestra que has actuado con dolo o negligencia grave, los acreedores pueden solicitar la responsabilidad personal</li>
          <li><strong>Avales personales:</strong> si has firmado un aval personal para un préstamo de la empresa, respondes igualmente con tu patrimonio</li>
        </ul>
        <p>Aun con estas excepciones, la SL ofrece una <strong>capa de protección significativamente mayor</strong> que operar como autónomo persona física.</p>
      `,
    },
    {
      title: "Costes de constitución y mantenimiento",
      content: `
        <p>Constituir una SL implica unos <strong>costes iniciales de entre 600 y 1.200 euros</strong>, incluyendo notaría, Registro Mercantil y el capital social mínimo de 1 euro (aunque lo habitual sigue siendo aportar 3.000 euros). El proceso tarda entre 1 y 3 semanas, o incluso menos si optas por la constitución telemática a través del PAE.</p>
        <p>Los costes de mantenimiento son la diferencia más relevante a largo plazo. Una SL necesita:</p>
        <ul>
          <li><strong>Contabilidad oficial:</strong> libros contables, cuentas anuales, legalización en el Registro Mercantil (entre 100 y 300 € anuales)</li>
          <li><strong>Impuesto de Sociedades:</strong> liquidación anual, además de los pagos fraccionados (modelos 200 y 202)</li>
          <li><strong>Asesoría fiscal y contable:</strong> una SL requiere más trabajo administrativo, lo que se traduce en honorarios más altos (entre 150 y 400 € mensuales dependiendo de la complejidad)</li>
        </ul>
        <p>En total, el <strong>sobrecoste anual de mantener una SL frente a operar como autónomo</strong> puede situarse entre 1.500 y 4.000 euros. Este coste solo tiene sentido si la estructura societaria te aporta un ahorro fiscal o una protección patrimonial que lo compense.</p>
      `,
    },
    {
      title: "Cuándo dar el paso",
      content: `
        <p>La regla general que manejamos en nuestra asesoría es que la SL empieza a ser fiscalmente ventajosa cuando el <strong>beneficio neto anual supera los 40.000-60.000 euros</strong>, siempre que puedas dejar parte de esos beneficios dentro de la sociedad. Si necesitas extraer todo el beneficio para vivir, el ahorro se reduce considerablemente.</p>
        <p>Más allá del umbral fiscal, hay otros indicadores que sugieren que puede ser momento de constituir una SL:</p>
        <ul>
          <li><strong>Vas a contratar empleados:</strong> la SL ofrece mayor seguridad jurídica como empleador</li>
          <li><strong>Tu actividad implica riesgo:</strong> si trabajas en sectores donde las reclamaciones son habituales, la protección patrimonial es valiosa</li>
          <li><strong>Quieres reinvertir:</strong> si planeas comprar equipos, local o expandir el negocio, la SL permite reinvertir con una tributación más baja</li>
          <li><strong>Tienes socios o los tendrás:</strong> la estructura societaria facilita la entrada de socios, la distribución de beneficios y la toma de decisiones</li>
        </ul>
        <p>Nuestra recomendación: <strong>no tomes esta decisión basándote solo en un artículo de internet</strong>. Cada caso tiene particularidades que pueden inclinar la balanza en uno u otro sentido. Un análisis personalizado con cifras reales es la única forma de acertar.</p>
      `,
    },
  ],
  checklist: [
    "Calcular tu beneficio neto anual real (no facturación bruta)",
    "Evaluar si necesitas reinvertir beneficios en el negocio",
    "Considerar tu situación patrimonial y nivel de riesgo",
    "Valorar si vas a contratar empleados a corto plazo",
    "Consultar con un asesor fiscal antes de decidir",
  ],
  faq: [
    {
      question: "¿A partir de qué facturación conviene montar una SL?",
      answer:
        "No existe un umbral único porque lo relevante no es la facturación bruta sino el beneficio neto. Como referencia general, la SL empieza a ser ventajosa con beneficios netos superiores a 40.000-60.000 euros anuales, especialmente si puedes reinvertir parte de esos beneficios. Pero factores como tu situación patrimonial, la necesidad de protección frente a deudas o la existencia de socios pueden adelantar o retrasar ese punto de equilibrio.",
    },
    {
      question: "¿Puedo pasar de autónomo a SL sin cerrar mi actividad?",
      answer:
        "Sí. Lo más habitual es constituir la SL y traspasar la actividad a la nueva sociedad. El autónomo puede cesar su actividad por cuenta propia y pasar a ser administrador y/o empleado de la SL. El proceso requiere planificación fiscal para evitar tributaciones innecesarias en el traspaso de activos, clientes o contratos.",
    },
    {
      question: "¿Es verdad que con una SL pago menos impuestos?",
      answer:
        "No necesariamente. La SL paga un 25% de Impuesto de Sociedades sobre sus beneficios, frente al tipo progresivo del IRPF (hasta el 47%). Pero cuando extraes el dinero como sueldo o dividendos, tributas de nuevo por IRPF. La ventaja real aparece cuando puedes dejar beneficios dentro de la sociedad para reinvertir. Si necesitas extraer todo el beneficio, la ventaja se diluye significativamente.",
    },
    {
      question: "¿Puedo ser autónomo y tener una SL al mismo tiempo?",
      answer:
        "Sí, es perfectamente legal. Puedes mantener una actividad como autónomo persona física y, simultáneamente, ser socio o administrador de una o varias SL. De hecho, es una estructura habitual en profesionales que combinan consultoría individual con proyectos empresariales. Eso sí, debes tener cuidado con la gestión administrativa y con la asignación correcta de ingresos y gastos a cada actividad.",
    },
  ],
  relatedPosts: [
    {
      slug: "autonomo-o-sl-que-te-conviene-2026",
      title: "Autónomo o SL: ¿qué te conviene en 2026?",
    },
    {
      slug: "planificacion-fiscal-pymes",
      title: "Planificación fiscal para pymes",
    },
  ],
  relatedLandings: [
    {
      href: "/asesoria-fiscal-para-autonomos",
      label: "Asesoría para autónomos",
    },
    { href: "/asesoria-fiscal-para-pymes", label: "Asesoría para pymes" },
  ],
};

export default function AutonomoVsSlPage() {
  return <TOFUTemplate data={data} />;
}
