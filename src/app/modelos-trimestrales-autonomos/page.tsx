import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Modelos Trimestrales para Autónomos 2026 | Guía Completa",
  description:
    "Guía completa sobre los modelos trimestrales que debe presentar un autónomo: 303 IVA, 130 IRPF, 111 retenciones, plazos y cómo evitar errores.",
  keywords: [
    "modelos trimestrales autónomos",
    "modelo 303",
    "modelo 130",
    "IVA autónomos",
    "declaraciones trimestrales",
  ],
};

const data = {
  badge: "Modelos Trimestrales",
  h1: (
    <>
      Modelos trimestrales para autónomos:{" "}
      <span className="text-gradient-gold">guía práctica 2026</span>
    </>
  ),
  subtitle:
    "Qué modelos presentar, cuándo y cómo. Todo lo que necesitas para cumplir sin agobios.",
  intro: `
    <p>Cada trimestre, los autónomos en España deben presentar una serie de declaraciones fiscales ante la Agencia Tributaria. No hacerlo —o hacerlo mal— implica recargos, sanciones e incluso intereses de demora que pueden acumularse rápidamente.</p>
    <p>Sin embargo, cumplir con estas obligaciones no tiene por qué ser complicado. Con la información adecuada y un mínimo de organización, puedes gestionar tus modelos trimestrales con tranquilidad y sin sorpresas de última hora.</p>
    <p>En esta guía repasamos los <strong>modelos más habituales</strong>, sus plazos y los errores que conviene evitar para que tu relación con Hacienda sea lo más sencilla posible.</p>
  `,
  sections: [
    {
      title: "Modelo 303: IVA",
      content: `
        <p>El <strong>modelo 303</strong> es la autoliquidación trimestral del IVA. En él declaras la diferencia entre el IVA que has repercutido a tus clientes (IVA devengado) y el que has soportado en tus compras y gastos (IVA deducible).</p>
        <p>Si el resultado es positivo, tendrás que ingresar esa cantidad a Hacienda. Si es negativo, puedes compensarlo en trimestres posteriores o, en la declaración del cuarto trimestre, solicitar la devolución.</p>
        <ul>
          <li><strong>¿Quién lo presenta?</strong> Todo autónomo o empresa que realice actividades sujetas a IVA.</li>
          <li><strong>Base del cálculo:</strong> IVA repercutido menos IVA soportado deducible del trimestre.</li>
          <li><strong>Importante:</strong> Las facturas deben estar correctamente emitidas y registradas para que el IVA soportado sea deducible.</li>
        </ul>
        <p>Un error habitual es incluir gastos con IVA no deducible (como comidas no justificadas o vehículos de uso mixto sin la debida proporción). Revisa siempre qué gastos tienen derecho a deducción antes de cumplimentar el modelo.</p>
      `,
    },
    {
      title: "Modelo 130: Pago fraccionado IRPF",
      content: `
        <p>El <strong>modelo 130</strong> es el pago fraccionado del IRPF para autónomos en estimación directa. Funciona como un adelanto trimestral del impuesto sobre la renta: pagas un 20 % del rendimiento neto acumulado desde el 1 de enero hasta el último día del trimestre, descontando los pagos anteriores.</p>
        <p>Si estás en <strong>estimación directa simplificada</strong>, el cálculo es sencillo: ingresos menos gastos deducibles del periodo, multiplicado por el 20 %. A ese resultado le restas lo que ya has pagado en trimestres anteriores y las retenciones que te hayan practicado.</p>
        <ul>
          <li><strong>¿Quién lo presenta?</strong> Autónomos en estimación directa (normal o simplificada), salvo que más del 70 % de sus ingresos tengan retención.</li>
          <li><strong>Tip:</strong> Lleva un registro actualizado de ingresos y gastos para evitar descuadres al rellenar el modelo.</li>
          <li><strong>Atención:</strong> Si tus ingresos varían mucho entre trimestres, los pagos fraccionados pueden ser irregulares. Planifícalo con tu asesor.</li>
        </ul>
        <p>Este modelo es clave en la planificación fiscal del autónomo. Un buen control de los gastos deducibles trimestre a trimestre reduce la cantidad a ingresar y evita sorpresas en la declaración de la renta.</p>
      `,
    },
    {
      title: "Modelo 111: Retenciones",
      content: `
        <p>El <strong>modelo 111</strong> se utiliza para declarar e ingresar las retenciones e ingresos a cuenta del IRPF que has practicado a trabajadores, profesionales o empresarios. Es obligatorio si has pagado nóminas, facturas de profesionales con retención u otro tipo de rentas sujetas a retención.</p>
        <p>En la práctica, si contratas a un profesional externo (diseñador, abogado, consultor) y le retienes un porcentaje del IRPF en su factura, debes declarar esa retención a Hacienda a través de este modelo.</p>
        <ul>
          <li><strong>¿Quién lo presenta?</strong> Autónomos y empresas que hayan practicado retenciones durante el trimestre.</li>
          <li><strong>Tipos de retenciones habituales:</strong> Nóminas de empleados (rendimientos del trabajo) y facturas de profesionales (rendimientos de actividades económicas).</li>
          <li><strong>Modelo anual asociado:</strong> El modelo 190 resume todas las retenciones del año y se presenta en enero.</li>
        </ul>
        <p>Un error frecuente es no presentar el modelo 111 cuando no hay retenciones en un trimestre. Si estás obligado, debes presentarlo aunque sea con resultado cero ("declaración negativa").</p>
      `,
    },
    {
      title: "Plazos de presentación",
      content: `
        <p>Los modelos trimestrales tienen plazos fijos que se repiten cada año. Conocerlos y marcarlos en el calendario es la forma más sencilla de evitar recargos por presentación fuera de plazo.</p>
        <ul>
          <li><strong>Primer trimestre (T1):</strong> Del 1 al 20 de abril.</li>
          <li><strong>Segundo trimestre (T2):</strong> Del 1 al 20 de julio.</li>
          <li><strong>Tercer trimestre (T3):</strong> Del 1 al 20 de octubre.</li>
          <li><strong>Cuarto trimestre (T4):</strong> Del 1 al 30 de enero del año siguiente.</li>
        </ul>
        <p>Si el último día del plazo cae en sábado, domingo o festivo, se traslada al siguiente día hábil. Además, si domicilias el pago, el plazo suele finalizar cinco días antes (el día 15 en la mayoría de los casos).</p>
        <p><strong>Consejo práctico:</strong> No dejes la presentación para el último día. Los servidores de la Agencia Tributaria se saturan en las fechas límite y podrías tener problemas técnicos que no justifican un retraso ante Hacienda.</p>
      `,
    },
    {
      title: "Errores más comunes",
      content: `
        <p>Incluso con experiencia, los autónomos cometen errores recurrentes en la presentación de sus modelos trimestrales. Estos son los más frecuentes y las consecuencias que acarrean:</p>
        <ul>
          <li><strong>No cuadrar IVA soportado y repercutido:</strong> Incluir facturas incorrectas o duplicadas descuadra el modelo 303 y puede generar una comprobación de Hacienda.</li>
          <li><strong>Olvidar las retenciones practicadas:</strong> Si no declaras las retenciones en el 111, el profesional al que le retuviste no podrá deducirlas en su renta.</li>
          <li><strong>Presentar fuera de plazo:</strong> El recargo es automático: un 1 % más otro 1 % por cada mes de retraso. A partir del mes 12, se aplican intereses de demora.</li>
          <li><strong>No conservar justificantes:</strong> Hacienda puede requerir las facturas que soportan tus declaraciones durante cuatro años. Sin ellas, pierde la deducción.</li>
          <li><strong>Confundir estimación directa y objetiva:</strong> Aplicar el régimen incorrecto invalida todo el cálculo del modelo 130.</li>
        </ul>
        <p>La mayoría de estos errores se evitan con un <strong>sistema de archivo ordenado</strong>, revisiones trimestrales previas al envío y, siempre que sea posible, el apoyo de un asesor fiscal que verifique los datos antes de la presentación.</p>
      `,
    },
  ],
  checklist: [
    "Tener todas las facturas emitidas y recibidas del trimestre",
    "Verificar que los importes de IVA cuadran con tus registros",
    "Revisar las retenciones aplicadas a profesionales",
    "Presentar antes del día 20 del mes siguiente al trimestre",
    "Guardar justificante de presentación",
  ],
  faq: [
    {
      question: "¿Qué pasa si no presento un modelo trimestral a tiempo?",
      answer:
        "Se aplica un recargo automático del 1 % más un 1 % adicional por cada mes completo de retraso, hasta un máximo del 15 %. Superados los 12 meses, se añaden intereses de demora y posibles sanciones si Hacienda requiere la presentación.",
    },
    {
      question:
        "¿Puedo presentar los modelos trimestrales yo mismo o necesito asesor?",
      answer:
        "Puedes presentarlos tú mismo con certificado digital o Cl@ve PIN a través de la sede electrónica de la Agencia Tributaria. Sin embargo, un asesor fiscal te ayuda a verificar los datos, optimizar las deducciones y evitar errores que pueden salir más caros que el propio servicio.",
    },
    {
      question: "¿Todos los autónomos presentan los mismos modelos?",
      answer:
        "No. Depende de tu actividad, régimen de IVA y de si tienes trabajadores. El modelo 303 es casi universal, pero el 130 solo aplica a estimación directa, y el 111 solo si practicas retenciones. Un asesor puede indicarte exactamente cuáles son tus obligaciones.",
    },
    {
      question:
        "¿Qué diferencia hay entre el modelo 303 trimestral y el 390 anual?",
      answer:
        "El modelo 303 es la autoliquidación trimestral del IVA, donde pagas o compensas la diferencia cada tres meses. El modelo 390 es un resumen anual informativo que recopila los datos de los cuatro trimestres. No genera pago adicional, pero su contenido debe coincidir con los 303 presentados.",
    },
  ],
  relatedPosts: [
    { slug: "calendario-fiscal-2026", title: "Calendario fiscal 2026" },
    {
      slug: "7-deducciones-autonomos",
      title: "7 deducciones que los autónomos se dejan",
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

export default function ModelosTrimestralesAutonomosPage() {
  return <TOFUTemplate data={data} />;
}
