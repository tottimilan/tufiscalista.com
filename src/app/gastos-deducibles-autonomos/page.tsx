import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Gastos Deducibles para Autónomos en 2026 | Guía Completa",
  description:
    "Lista completa de gastos deducibles para autónomos en España: suministros, vehículo, dietas, formación, seguros y más. Ahorra en tu declaración.",
  keywords: [
    "gastos deducibles autónomos",
    "deducciones autónomos",
    "IRPF autónomos",
    "gastos deducibles 2026",
  ],
  alternates: { canonical: "/gastos-deducibles-autonomos" },
};

const data = {
  badge: "Guía de Deducciones",
  h1: (
    <>
      Gastos deducibles para autónomos:{" "}
      <span className="text-gradient-gold">guía completa 2026</span>
    </>
  ),
  subtitle:
    "Todos los gastos que puedes deducir como autónomo en España, con explicaciones claras y ejemplos prácticos.",
  intro: `
    <p>La mayoría de autónomos en España <strong>pagan más impuestos de los que deberían</strong>. No porque Hacienda les cobre de más, sino porque desconocen los gastos que legalmente pueden deducir en su actividad. Cada factura no deducida es dinero que sale de tu bolsillo sin necesidad.</p>
    <p>El problema suele ser doble: por un lado, falta de información clara sobre qué se puede y qué no se puede deducir; por otro, <strong>miedo a deducir "de más"</strong> y recibir un requerimiento de la Agencia Tributaria. El resultado es que muchos profesionales autónomos optan por el camino conservador y dejan cientos (o miles) de euros sobre la mesa cada año.</p>
    <p>En esta guía repasamos las principales categorías de gastos deducibles para autónomos en 2026, con las reglas actualizadas y ejemplos prácticos. Si quieres optimizar tu fiscalidad sin riesgos, sigue leyendo.</p>
  `,
  sections: [
    {
      title: "Suministros del hogar",
      content: `
        <p>Si trabajas desde casa —total o parcialmente—, puedes deducirte una parte de los gastos de suministros: <strong>agua, luz, gas, internet y telefonía</strong>. Desde 2018, Hacienda permite aplicar un porcentaje del 30% sobre la proporción de la vivienda afecta a la actividad.</p>
        <p>Por ejemplo, si tu despacho ocupa el 20% de la superficie total de tu vivienda, puedes deducir el 30% de ese 20%, es decir, <strong>un 6% del total de tus suministros</strong>. Es un cálculo sencillo, pero muchos autónomos no lo aplican por desconocimiento.</p>
        <p>Para aplicar esta deducción correctamente necesitas tener el <strong>modelo 036/037 actualizado</strong> indicando el porcentaje de afectación de la vivienda. Además, las facturas de suministros deben estar a tu nombre o, al menos, ser titular del contrato.</p>
      `,
    },
    {
      title: "Vehículo y desplazamientos",
      content: `
        <p>La deducción del vehículo es una de las más consultadas y también de las más limitadas. Con carácter general, un autónomo puede deducirse el <strong>50% del IVA soportado</strong> en la adquisición, renting o mantenimiento del vehículo, salvo que demuestre una afectación mayor a la actividad.</p>
        <p>Existen excepciones donde la deducción es del 100%: <strong>agentes comerciales, transportistas, repartidores, autoescuelas</strong> y otros profesionales cuya actividad principal requiere el uso del vehículo. En estos casos, tanto el IVA como el gasto en IRPF son plenamente deducibles.</p>
        <p>Además del vehículo, son deducibles los gastos de desplazamiento vinculados a la actividad:</p>
        <ul>
          <li><strong>Peajes y aparcamiento</strong> con factura o justificante</li>
          <li><strong>Combustible</strong> con factura completa (no tickets simplificados)</li>
          <li><strong>Billetes de transporte</strong> (AVE, avión, taxi) para viajes profesionales</li>
          <li><strong>Kilometraje</strong> en vehículo propio a 0,26 €/km si no deduces el vehículo directamente</li>
        </ul>
      `,
    },
    {
      title: "Dietas y manutención",
      content: `
        <p>Los gastos de comida y alojamiento durante desplazamientos profesionales son deducibles, pero con límites específicos. La normativa establece un máximo de <strong>26,67 € diarios en España</strong> (48,08 € en el extranjero) para gastos de manutención sin pernocta.</p>
        <p>Si hay pernocta, los límites suben a <strong>53,34 € diarios en España</strong> y 91,35 € en el extranjero. Estos importes son los que Hacienda acepta sin necesidad de justificar que el gasto es "razonable", siempre que se cumplan los requisitos formales.</p>
        <p>Los requisitos son claros y conviene cumplirlos escrupulosamente:</p>
        <ul>
          <li>El desplazamiento debe ser fuera del <strong>municipio del centro de trabajo</strong></li>
          <li>El pago debe realizarse por <strong>medios electrónicos</strong> (tarjeta, transferencia, Bizum)</li>
          <li>Debe existir <strong>factura o documento justificativo</strong> del establecimiento</li>
          <li>La relación con la actividad profesional debe ser acreditable</li>
        </ul>
      `,
    },
    {
      title: "Formación y suscripciones",
      content: `
        <p>Todo gasto de formación vinculado a tu actividad profesional es deducible sin límite. Esto incluye <strong>cursos, másteres, seminarios, libros técnicos, suscripciones a plataformas de formación</strong> y asistencia a congresos o ferias profesionales.</p>
        <p>También son deducibles las <strong>suscripciones a software profesional</strong> (herramientas de diseño, contabilidad, gestión de proyectos, almacenamiento en la nube), así como las cuotas de colegios profesionales y asociaciones del sector.</p>
        <p>La clave aquí es la <strong>vinculación con la actividad</strong>. Un diseñador gráfico puede deducir una suscripción a Adobe Creative Cloud sin problema; un abogado difícilmente podría justificarla. Mantén siempre la coherencia entre tus gastos formativos y tu epígrafe de actividad en el IAE.</p>
      `,
    },
    {
      title: "Seguros",
      content: `
        <p>Las primas de seguros vinculadas a tu actividad profesional son plenamente deducibles. Esto incluye el <strong>seguro de responsabilidad civil</strong> (obligatorio en muchas profesiones), el seguro del local u oficina y el seguro de mercancías o equipos profesionales.</p>
        <p>Un caso especial es el <strong>seguro médico privado</strong>. Como autónomo, puedes deducir las primas de tu seguro de salud hasta un máximo de <strong>500 euros anuales por persona</strong> (1.500 € en caso de discapacidad). Esta deducción se extiende a tu cónyuge e hijos menores de 25 años que convivan contigo.</p>
        <p>Es importante distinguir entre la deducción en IRPF y en IVA. Las primas de seguros están exentas de IVA, por lo que no generan IVA deducible. Sin embargo, su coste íntegro sí reduce la base imponible del IRPF, lo que supone un ahorro real en la declaración de la renta.</p>
      `,
    },
    {
      title: "Amortización de equipos",
      content: `
        <p>Los bienes de inversión (equipos informáticos, mobiliario, maquinaria, vehículos) no se deducen de golpe en el año de compra, sino a lo largo de su <strong>vida útil mediante tablas de amortización</strong> establecidas por la AEAT.</p>
        <p>Los coeficientes más habituales para autónomos son:</p>
        <ul>
          <li><strong>Equipos informáticos:</strong> hasta el 25% anual (vida útil de 4 años)</li>
          <li><strong>Mobiliario:</strong> hasta el 10% anual (vida útil de 10 años)</li>
          <li><strong>Útiles y herramientas:</strong> hasta el 25% anual</li>
          <li><strong>Vehículos:</strong> hasta el 16% anual (vida útil de 6,25 años)</li>
        </ul>
        <p>Si tu cifra de negocios es inferior a 10 millones de euros, puedes aplicar la <strong>libertad de amortización para bienes de escaso valor</strong>: aquellos con un valor unitario inferior a 300 euros pueden deducirse íntegramente en el año de adquisición, hasta un máximo global de 25.000 euros anuales.</p>
      `,
    },
  ],
  checklist: [
    "Guardar todas las facturas con NIF y desglose de IVA",
    "Pagar siempre por medios electrónicos (no efectivo)",
    "Separar gastos personales de profesionales",
    "Comunicar a tu asesor cualquier compra significativa",
    "Revisar las tablas de amortización de la AEAT",
  ],
  faq: [
    {
      question: "¿Puedo deducir gastos si trabajo desde casa?",
      answer:
        "Sí. Los autónomos que trabajan desde casa pueden deducir un porcentaje de los suministros (agua, luz, gas, internet) aplicando la regla del 30% sobre la proporción de la vivienda afecta a la actividad. Para ello, debes tener actualizado tu modelo 036/037 indicando el porcentaje de afectación.",
    },
    {
      question: "¿Qué ocurre si deduzco un gasto que Hacienda no acepta?",
      answer:
        "Si Hacienda considera que un gasto no es deducible, te requerirá el pago de la diferencia más los intereses de demora correspondientes. En casos de negligencia evidente, podría aplicar una sanción adicional. Por eso es fundamental mantener la coherencia entre tus gastos y tu actividad, y conservar toda la documentación justificativa.",
    },
    {
      question: "¿Es obligatorio pagar por transferencia para deducir un gasto?",
      answer:
        "No es obligatorio en todos los casos, pero sí altamente recomendable. Para las dietas y gastos de manutención, el pago electrónico es un requisito legal. Para el resto de gastos, pagar por medios trazables (tarjeta, transferencia, Bizum) refuerza la justificación documental ante una posible inspección.",
    },
    {
      question:
        "¿Puedo deducir la cuota de autónomos de la Seguridad Social?",
      answer:
        "Sí. La cuota mensual del RETA (Régimen Especial de Trabajadores Autónomos) es un gasto plenamente deducible en el IRPF. Es uno de los gastos más significativos para la mayoría de autónomos y reduce directamente la base imponible general del impuesto.",
    },
  ],
  relatedPosts: [
    {
      slug: "7-deducciones-autonomos",
      title: "7 deducciones que los autónomos se dejan cada año",
    },
    {
      slug: "autonomo-o-sl-que-te-conviene-2026",
      title: "Autónomo o SL: ¿qué te conviene en 2026?",
    },
  ],
  relatedLandings: [
    {
      href: "/asesoria-fiscal-para-autonomos",
      label: "Asesoría para autónomos",
    },
    {
      href: "/modelos-trimestrales-autonomos",
      label: "Modelos trimestrales",
    },
  ],
};

export default function GastosDeduciblesAutonomosPage() {
  return <TOFUTemplate data={data} />;
}
