import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Calendario Fiscal 2026 España | Todas las Fechas Clave",
  description:
    "Calendario fiscal 2026 completo para autónomos y pymes en España. Plazos de IVA, IRPF, Sociedades, Renta y todos los modelos trimestrales y anuales.",
  keywords: [
    "calendario fiscal 2026",
    "plazos fiscales",
    "fechas Hacienda",
    "modelos tributarios",
  ],
  alternates: { canonical: "/calendario-fiscal" },
};

const data = {
  badge: "Calendario Fiscal",
  h1: (
    <>
      Calendario fiscal 2026:{" "}
      <span className="text-gradient-gold">todas las fechas clave</span>
    </>
  ),
  subtitle:
    "No pierdas ningún plazo. Todos los vencimientos fiscales del año en un solo lugar.",
  intro: `
    <p>Cumplir con los plazos fiscales no es opcional. En España, la presentación fuera de plazo de cualquier modelo tributario genera <strong>recargos automáticos</strong> que oscilan entre el 1 % y el 15 %, más intereses de demora si se superan los doce meses de retraso.</p>
    <p>Para un autónomo o una pyme, un solo descuido puede suponer cientos de euros en sanciones innecesarias. Por eso, tener un calendario fiscal actualizado y bien organizado es una de las herramientas más sencillas y efectivas para proteger tu negocio.</p>
    <p>A continuación encontrarás todos los <strong>plazos fiscales de 2026</strong> organizados por trimestre, junto con consejos prácticos para que no se te escape ningún vencimiento.</p>
  `,
  sections: [
    {
      title: "Primer trimestre (enero – marzo)",
      content: `
        <p>El inicio del año fiscal es uno de los periodos con más carga administrativa. Coinciden las declaraciones del cuarto trimestre del año anterior con los resúmenes anuales, lo que concentra muchas obligaciones en pocas semanas.</p>
        <ul>
          <li><strong>Hasta el 30 de enero:</strong> Modelos 303 (IVA T4), 130/131 (IRPF T4), 111 (retenciones T4) y 115 (alquileres T4).</li>
          <li><strong>Hasta el 31 de enero:</strong> Resúmenes anuales: modelo 390 (resumen IVA), 190 (retenciones trabajo/profesionales), 180 (retenciones alquileres) y 349 (operaciones intracomunitarias).</li>
          <li><strong>Febrero:</strong> Modelo 347 (declaración de operaciones con terceros superiores a 3.005,06 €).</li>
        </ul>
        <p><strong>Consejo:</strong> Empieza a recopilar la documentación del año anterior en diciembre. Así llegarás a enero con los datos prácticamente listos y evitarás agobios de última hora.</p>
      `,
    },
    {
      title: "Segundo trimestre (abril – junio)",
      content: `
        <p>El segundo trimestre combina las declaraciones trimestrales habituales con el arranque de la <strong>campaña de la Renta</strong>, uno de los hitos fiscales más importantes del año para autónomos y particulares.</p>
        <ul>
          <li><strong>Hasta el 20 de abril:</strong> Modelos 303 (IVA T1), 130/131 (IRPF T1), 111 (retenciones T1) y 115 (alquileres T1).</li>
          <li><strong>Abril – junio:</strong> Campaña de la Renta (IRPF ejercicio 2025). El plazo exacto lo publica la AEAT, normalmente desde principios de abril hasta el 30 de junio.</li>
          <li><strong>Hasta el 30 de junio:</strong> Último día para presentar la declaración de la Renta (si el resultado es a ingresar con domiciliación, el plazo suele ser cinco días antes).</li>
        </ul>
        <p>Recuerda que si necesitas <strong>cita previa</strong> con la Agencia Tributaria para la confección de la Renta, conviene solicitarla con antelación. Las citas se agotan rápidamente en las primeras semanas de campaña.</p>
      `,
    },
    {
      title: "Tercer trimestre (julio – septiembre)",
      content: `
        <p>Julio marca el cierre del segundo trimestre fiscal y, para las sociedades, la fecha límite del <strong>Impuesto sobre Sociedades</strong>. Es un mes intenso que conviene planificar antes de las vacaciones de verano.</p>
        <ul>
          <li><strong>Hasta el 20 de julio:</strong> Modelos 303 (IVA T2), 130/131 (IRPF T2), 111 (retenciones T2) y 115 (alquileres T2).</li>
          <li><strong>Hasta el 25 de julio:</strong> Modelo 200 (Impuesto sobre Sociedades) para empresas cuyo ejercicio coincida con el año natural.</li>
          <li><strong>Septiembre:</strong> Sin modelos trimestrales relevantes, pero es buen momento para revisar la situación acumulada y anticipar el cierre del tercer trimestre.</li>
        </ul>
        <p><strong>Importante:</strong> Si tu empresa tiene la obligación de presentar el Impuesto sobre Sociedades y además eres autónomo, asegúrate de coordinar ambas presentaciones para evitar errores de imputación de rentas.</p>
      `,
    },
    {
      title: "Cuarto trimestre (octubre – diciembre)",
      content: `
        <p>El cuarto trimestre es momento de mirar al cierre del ejercicio. Además de las obligaciones regulares de octubre, los últimos meses del año son clave para tomar decisiones de <strong>planificación fiscal</strong> que afecten a la declaración del año en curso.</p>
        <ul>
          <li><strong>Hasta el 20 de octubre:</strong> Modelos 303 (IVA T3), 130/131 (IRPF T3), 111 (retenciones T3) y 115 (alquileres T3).</li>
          <li><strong>Noviembre – diciembre:</strong> Periodo clave para planificación fiscal: adelanto de gastos, aplazamiento de ingresos, inversiones con beneficios fiscales, revisión de amortizaciones.</li>
          <li><strong>31 de diciembre:</strong> Cierre del ejercicio fiscal (para empresas y autónomos con ejercicio natural).</li>
        </ul>
        <p>Una revisión fiscal en noviembre con tu asesor permite tomar decisiones informadas: ¿conviene adelantar una compra?, ¿es buen momento para constituir una SL?, ¿cómo va tu previsión de IRPF? Estas preguntas se responden con datos y margen de maniobra, no el 30 de diciembre.</p>
      `,
    },
    {
      title: "Cómo no perder ningún plazo",
      content: `
        <p>Tener un calendario fiscal colgado en la pared ya no es suficiente. La clave está en <strong>sistematizar los recordatorios</strong> y delegar la vigilancia del calendario a herramientas o personas que te avisen con antelación.</p>
        <ul>
          <li><strong>Alertas digitales:</strong> Configura recordatorios en Google Calendar, Outlook o tu aplicación de productividad al menos 7 días antes de cada vencimiento.</li>
          <li><strong>Automatización con tu asesor:</strong> Un buen asesor fiscal te avisa de cada plazo, te solicita la documentación con antelación y presenta los modelos sin que tengas que estar pendiente.</li>
          <li><strong>Revisión mensual:</strong> Dedica 15 minutos al inicio de cada mes a revisar qué obligaciones tienes ese mes y si tienes la documentación preparada.</li>
          <li><strong>Domiciliación de pagos:</strong> Domiciliar el pago evita olvidos el día del vencimiento, pero recuerda que el plazo de presentación con domiciliación suele ser cinco días antes.</li>
        </ul>
        <p>El flujo ideal es sencillo: tu asesor te pide la información con una semana de margen, tú la envías, él presenta y te confirma. Sin prisas, sin recargos, sin estrés.</p>
      `,
    },
  ],
  checklist: [
    "Configurar alertas 7 días antes de cada plazo",
    "Tener la documentación lista la primera semana del mes de presentación",
    "Revisar la cita previa de Hacienda para la Renta",
    "Planificar el cierre fiscal en noviembre-diciembre",
    "Verificar las domiciliaciones de pago",
  ],
  faq: [
    {
      question:
        "¿Qué recargo me aplican si presento un modelo fuera de plazo?",
      answer:
        "El recargo es del 1 % más un 1 % adicional por cada mes completo de retraso, hasta un máximo del 15 %. Si superas los 12 meses sin presentar, se añaden intereses de demora del 4,0625 % (tipo vigente en 2026) y Hacienda puede abrir un procedimiento sancionador.",
    },
    {
      question:
        "¿Puedo aplazar el pago de un modelo trimestral si no tengo liquidez?",
      answer:
        "Sí. La Agencia Tributaria permite solicitar aplazamiento o fraccionamiento de deudas tributarias. Para importes inferiores a 50.000 € no es necesario aportar garantía. El aplazamiento genera intereses de demora, pero evita el recargo por impago.",
    },
    {
      question:
        "¿La campaña de la Renta afecta a los autónomos igual que a los asalariados?",
      answer:
        "Sí, los autónomos también deben presentar la declaración de la Renta, pero con particularidades: declaran rendimientos de actividad económica, pueden aplicar deducciones específicas y deben cuadrar los datos con los modelos 130/131 presentados durante el año.",
    },
    {
      question:
        "¿Qué pasa si un plazo cae en fin de semana o festivo?",
      answer:
        "Si el último día del plazo es sábado, domingo o festivo (nacional o de la comunidad autónoma en cuestión), el vencimiento se traslada al siguiente día hábil. Aun así, no es recomendable apurar hasta el último día por posibles problemas técnicos en la sede electrónica.",
    },
  ],
  relatedPosts: [
    { slug: "calendario-fiscal-2026", title: "Calendario fiscal 2026" },
    {
      slug: "requerimiento-hacienda-que-hacer",
      title: "Qué hacer ante un requerimiento de Hacienda",
    },
  ],
  relatedLandings: [
    { href: "/modelos-trimestrales-autonomos", label: "Modelos trimestrales" },
    {
      href: "/asesoria-fiscal-para-autonomos",
      label: "Asesoría para autónomos",
    },
  ],
};

export default function CalendarioFiscalPage() {
  return <TOFUTemplate data={data} />;
}
