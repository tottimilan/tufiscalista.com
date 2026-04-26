import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Cómo Pagar Menos Impuestos Legalmente en España | Guía",
  description:
    "Estrategias legales para reducir tu carga fiscal como autónomo o pyme en España: deducciones, planificación, timing de gastos y estructura societaria.",
  keywords: [
    "pagar menos impuestos",
    "ahorro fiscal legal",
    "optimización fiscal",
    "reducir impuestos autónomos",
  ],
  alternates: { canonical: "/como-pagar-menos-impuestos-legalmente" },
};

const data = {
  badge: "Optimización Fiscal",
  h1: (
    <>
      Cómo pagar menos impuestos{" "}
      <span className="text-gradient-gold">de forma 100% legal</span>
    </>
  ),
  subtitle:
    "No es evasión, es conocimiento. Estrategias fiscales que cualquier autónomo o pyme puede aplicar.",
  intro: `
    <p>Existe una diferencia fundamental entre <strong>evasión fiscal</strong> (ilegal) y <strong>optimización fiscal</strong> (perfectamente legal). La evasión consiste en ocultar ingresos o falsear datos para pagar menos. La optimización, en cambio, significa aprovechar todas las herramientas que la propia ley pone a tu disposición para reducir tu carga tributaria.</p>
    <p>La legislación fiscal española incluye deducciones, bonificaciones, regímenes especiales e incentivos diseñados para fomentar la inversión, la contratación y el crecimiento de las empresas. El problema es que muchos autónomos y pymes no los conocen o no saben cómo aplicarlos correctamente.</p>
    <p>En esta guía repasamos las <strong>estrategias de ahorro fiscal más efectivas</strong> que puedes poner en práctica de forma legal, segura y sin riesgo de sanción.</p>
  `,
  sections: [
    {
      title: "Maximiza tus deducciones",
      content: `
        <p>La primera línea de defensa contra una factura fiscal excesiva son las <strong>deducciones</strong>. Cada euro que deduces legítimamente reduce la base sobre la que se calcula tu IRPF o tu Impuesto sobre Sociedades.</p>
        <p>El catálogo de gastos deducibles para autónomos y pymes es más amplio de lo que muchos creen. Además de los gastos directos de la actividad (mercancía, materiales, herramientas), existen deducciones que a menudo se pasan por alto:</p>
        <ul>
          <li><strong>Suministros del hogar:</strong> Si trabajas desde casa, puedes deducir un porcentaje de luz, agua, gas e internet proporcional a la superficie afecta, con un 30 % adicional sobre esa proporción.</li>
          <li><strong>Cuota de autónomos:</strong> Deducible al 100 % como gasto de la actividad económica.</li>
          <li><strong>Seguros:</strong> Responsabilidad civil, seguro de salud (hasta 500 €/persona/año para autónomos), seguros de vida vinculados a la actividad.</li>
          <li><strong>Formación y suscripciones:</strong> Cursos, libros, herramientas digitales y suscripciones profesionales directamente relacionados con tu actividad.</li>
          <li><strong>Amortización de activos:</strong> Equipos informáticos, vehículos (con limitaciones), mobiliario de oficina y otros activos se deducen progresivamente a lo largo de su vida útil.</li>
        </ul>
        <p>El ejercicio más rentable que puedes hacer es sentarte con tu asesor y repasar, línea a línea, <strong>qué gastos tienes que no estás deduciendo</strong>. El resultado suele ser sorprendente.</p>
      `,
    },
    {
      title: "Elige la estructura adecuada",
      content: `
        <p>La forma jurídica bajo la que operas tiene un impacto directo en cuánto pagas de impuestos. Un autónomo tributa por IRPF con tipos progresivos que van del 19 % al 47 %, mientras que una <strong>sociedad limitada (SL)</strong> paga un tipo fijo del 25 % en el Impuesto sobre Sociedades (15 % los dos primeros años si es de nueva creación).</p>
        <p>Esto no significa que constituir una SL sea siempre mejor. La decisión depende de varios factores:</p>
        <ul>
          <li><strong>Nivel de beneficio:</strong> Como regla general, cuando el beneficio neto supera los 40.000-50.000 € anuales, la SL empieza a ser más eficiente fiscalmente. Por debajo, el autónomo suele pagar menos.</li>
          <li><strong>Necesidad de reinversión:</strong> Si reinviertes la mayor parte de los beneficios en el negocio, la SL permite mantener el dinero dentro de la sociedad tributando al 25 %, en lugar del tipo marginal de IRPF.</li>
          <li><strong>Responsabilidad patrimonial:</strong> La SL limita tu responsabilidad al capital aportado, lo cual es relevante si tu actividad implica riesgos económicos significativos.</li>
          <li><strong>Costes administrativos:</strong> Una SL tiene más obligaciones contables y registrales (cuentas anuales, libros oficiales, depósito en el Registro Mercantil), lo que incrementa el coste de gestión.</li>
        </ul>
        <p>La decisión de cambiar de estructura debe basarse en un <strong>análisis personalizado</strong> con proyecciones a 3-5 años, no en consejos genéricos. Tu asesor puede modelar ambos escenarios con tus cifras reales.</p>
      `,
    },
    {
      title: "Planifica el timing de ingresos y gastos",
      content: `
        <p>El momento en que reconoces un ingreso o realizas un gasto tiene consecuencias fiscales directas. La <strong>planificación del timing</strong> es una de las estrategias más infrautilizadas y, sin embargo, perfectamente legal.</p>
        <p>El principio es sencillo: si puedes decidir cuándo se produce un ingreso o un gasto dentro del marco legal, puedes influir en la base imponible de cada ejercicio fiscal.</p>
        <ul>
          <li><strong>Adelantar gastos:</strong> Si prevés un año con beneficios altos, adelanta compras e inversiones previstas para diciembre en lugar de enero. Esto reduce la base imponible del ejercicio en curso.</li>
          <li><strong>Diferir ingresos:</strong> Dentro de lo que permita la naturaleza de tu actividad, facturar un trabajo terminado en diciembre a principios de enero puede trasladar ese ingreso al ejercicio siguiente, donde quizá tu base sea menor.</li>
          <li><strong>Compras de activos:</strong> Adquirir un equipo informático o maquinaria antes de final de año permite iniciar la amortización en ese ejercicio, generando un gasto deducible inmediato (o acelerado, si aplica el incentivo).</li>
          <li><strong>Planes de pensiones y productos de ahorro:</strong> Las aportaciones a planes de pensiones reducen directamente la base imponible del IRPF, con un límite de 1.500 € anuales (o 8.500 € en planes de empleo).</li>
        </ul>
        <p><strong>Importante:</strong> Esta planificación debe hacerse con criterio y dentro de la legalidad. Retrasar facturas de forma artificial o simular operaciones es evasión, no optimización. Siempre consulta con tu asesor antes de tomar decisiones de timing significativas.</p>
      `,
    },
    {
      title: "Aprovecha los incentivos fiscales",
      content: `
        <p>La legislación fiscal española incluye incentivos específicos diseñados para fomentar la inversión, la innovación y el crecimiento de las empresas. Muchos de ellos están infrautilizados porque los autónomos y las pymes <strong>no saben que existen</strong> o creen que solo aplican a grandes corporaciones.</p>
        <ul>
          <li><strong>Reserva de capitalización:</strong> Las sociedades pueden reducir su base imponible en un 10 % del incremento de sus fondos propios, siempre que mantengan ese incremento durante 5 años. Es como una bonificación por no repartir todos los beneficios.</li>
          <li><strong>Amortización acelerada:</strong> Las empresas de reducida dimensión (cifra de negocios inferior a 10 millones de euros) pueden amortizar los activos al doble del coeficiente máximo de las tablas oficiales, duplicando el gasto deducible por depreciación.</li>
          <li><strong>Deducción por I+D+i:</strong> Si tu empresa invierte en investigación, desarrollo o innovación tecnológica, puedes deducir entre el 12 % y el 42 % de esos gastos en la cuota del Impuesto sobre Sociedades.</li>
          <li><strong>Incentivos de empleo:</strong> Existen bonificaciones en las cuotas de la Seguridad Social y deducciones fiscales por contratación de determinados colectivos (jóvenes, mayores de 45, personas con discapacidad).</li>
          <li><strong>Libertad de amortización:</strong> Bajo ciertas condiciones (creación de empleo, inversiones en activos nuevos), puedes amortizar libremente determinados activos, concentrando el gasto en el ejercicio que más te convenga.</li>
        </ul>
        <p>Un asesor fiscal proactivo no solo te tramita los modelos: revisa periódicamente si existen incentivos aplicables a tu situación y te propone su uso antes de que acabe el ejercicio.</p>
      `,
    },
    {
      title: "Trabaja con un asesor proactivo",
      content: `
        <p>Hay una diferencia enorme entre un asesor que <strong>tramita</strong> y un asesor que <strong>planifica</strong>. El primero se limita a presentar los modelos con los datos que le proporcionas. El segundo analiza tu situación, identifica oportunidades de ahorro y te propone acciones antes de que termine el ejercicio fiscal.</p>
        <p>La mayoría de las estrategias descritas en esta guía requieren tomar decisiones <strong>con antelación</strong>: no puedes adelantar un gasto en enero si ya estamos en febrero, ni constituir una SL retroactivamente. Por eso, la planificación fiscal no es algo que se haga una vez al año; es un proceso continuo que requiere un asesor implicado en tu negocio.</p>
        <ul>
          <li><strong>Revisión semestral:</strong> A mitad de año, tu asesor debería analizar tus cifras y proponer ajustes para el segundo semestre.</li>
          <li><strong>Planificación de cierre:</strong> En noviembre, con los datos casi completos del año, es el momento de tomar las últimas decisiones: adelantar gastos, ajustar amortizaciones, evaluar la estructura.</li>
          <li><strong>Disponibilidad real:</strong> Un buen asesor responde tus dudas en horas, no en semanas. Las decisiones fiscales muchas veces son urgentes y requieren respuesta rápida.</li>
          <li><strong>Comunicación proactiva:</strong> Tu asesor debe avisarte de cambios normativos que te afecten, no esperar a que tú preguntes.</li>
        </ul>
        <p>En resumen, el coste de un buen asesor fiscal se recupera con creces si ese asesor te ayuda a pagar menos impuestos de forma legal. La clave es que su rol no sea administrativo, sino <strong>estratégico</strong>.</p>
      `,
    },
  ],
  checklist: [
    "Listar todos los gastos deducibles que no estás aplicando",
    "Evaluar si tu estructura actual (autónomo/SL) es óptima",
    "Planificar compras e inversiones con visión fiscal",
    "Revisar incentivos disponibles para tu tamaño de empresa",
    "Agendar una revisión fiscal semestral con tu asesor",
  ],
  faq: [
    {
      question: "¿Es legal intentar pagar menos impuestos?",
      answer:
        "Sí, siempre que utilices los mecanismos que la propia ley prevé: deducciones, bonificaciones, incentivos y planificación del timing de operaciones. Lo ilegal es ocultar ingresos, falsear datos o simular operaciones inexistentes. La línea que separa la optimización de la evasión está claramente definida en la normativa.",
    },
    {
      question:
        "¿A partir de qué ingresos me conviene pasar de autónomo a SL?",
      answer:
        "No hay una cifra universal, pero como referencia orientativa, cuando el beneficio neto supera los 40.000-50.000 € anuales, la SL suele resultar más eficiente fiscalmente. Sin embargo, la decisión depende también de si reinviertes los beneficios, tu situación personal y familiar, y los costes administrativos adicionales de una sociedad. Lo ideal es hacer un análisis personalizado con tu asesor.",
    },
    {
      question:
        "¿Puedo deducir el coche si soy autónomo?",
      answer:
        "Depende del uso. Si el vehículo se utiliza exclusivamente para la actividad económica (transporte de mercancías, taxi, comercial), puedes deducir el 100 % del IVA y los gastos asociados. Si el uso es mixto (personal y profesional), Hacienda solo admite la deducción del 50 % del IVA y exige pruebas de afectación. En IRPF, la deducción de gastos del vehículo es aún más restrictiva.",
    },
    {
      question:
        "¿Cuánto puedo ahorrar realmente con planificación fiscal?",
      answer:
        "Varía según la situación, pero para un autónomo con beneficios de 30.000-60.000 € anuales, una buena planificación puede suponer un ahorro de entre 2.000 y 8.000 € al año, entre deducciones no aplicadas, optimización de la estructura y timing de operaciones. Para pymes, el ahorro puede ser significativamente mayor.",
    },
  ],
  relatedPosts: [
    {
      slug: "planificacion-fiscal-pymes",
      title: "Planificación fiscal para pymes",
    },
    {
      slug: "7-deducciones-autonomos",
      title: "7 deducciones que los autónomos se dejan",
    },
  ],
  relatedLandings: [
    {
      href: "/asesoria-fiscal-para-autonomos",
      label: "Asesoría para autónomos",
    },
    { href: "/asesoria-fiscal-premium", label: "Asesoría fiscal premium" },
  ],
};

export default function ComoPagarMenosImpuestosLegalmentePage() {
  return <TOFUTemplate data={data} />;
}
