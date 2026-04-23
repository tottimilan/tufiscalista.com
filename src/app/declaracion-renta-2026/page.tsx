import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Declaración de la Renta 2026: Guía Completa | Tu Fiscalista",
  description:
    "Todo sobre la campaña de la Renta 2026: calendario, novedades, deducciones generales, errores frecuentes y cuándo conviene contratar un asesor. Guía actualizada.",
  keywords: [
    "declaración renta 2026",
    "como hacer la renta",
    "calendario renta 2026",
    "borrador renta 2026",
    "renta 2026 novedades",
    "deducciones renta 2026",
  ],
  alternates: { canonical: "/declaracion-renta-2026" },
};

const data = {
  badge: "Guía Renta 2026",
  h1: (
    <>
      Declaración de la Renta 2026:{" "}
      <span className="text-gradient-gold">guía completa actualizada</span>
    </>
  ),
  subtitle:
    "Calendario, novedades 2026, deducciones, errores que evitar y cuándo merece la pena contratar un asesor. Todo lo que necesitas saber para no pagar de más ni llevarte sustos.",
  intro: `
    <p>La <strong>campaña de la Renta 2026</strong> (correspondiente al ejercicio fiscal 2025) arrancó el 8 de abril y termina el 30 de junio. Es el momento del año en el que millones de contribuyentes en España revisan, ajustan y presentan su declaración del IRPF.</p>
    <p>Este año hay novedades importantes: el control reforzado sobre transacciones digitales (Bizum, plataformas), nuevos límites de cotización para autónomos, ajustes en deducciones autonómicas y mayor escrutinio sobre criptomonedas y rentas en el extranjero. Si tu situación fiscal incluye alquileres, autónomo, ingresos en plataformas digitales o cualquier complejidad, este año conviene revisar la declaración con criterio profesional.</p>
    <p>En esta guía te explicamos paso a paso lo esencial de la Renta 2026: calendario, modos de presentación, deducciones que no debes olvidar, errores frecuentes y cuándo contratar un asesor te sale a cuenta.</p>
  `,
  sections: [
    {
      title: "Calendario y plazos clave de la Renta 2026",
      content: `
        <p>La <strong>campaña arrancó el 8 de abril de 2026</strong> con la apertura de la presentación online a través de la web de la AEAT. Las fechas clave son:</p>
        <ul>
          <li><strong>8 de abril:</strong> Apertura de la presentación telemática (Renta WEB).</li>
          <li><strong>6 de mayo:</strong> Comienza la atención telefónica (cita previa para Plan "Le Llamamos").</li>
          <li><strong>3 de junio:</strong> Inicio de la atención presencial en oficinas (cita previa).</li>
          <li><strong>25 de junio:</strong> Fecha límite si vas a domiciliar el pago en cuenta.</li>
          <li><strong>30 de junio:</strong> Fin de la campaña — último día para presentar la declaración.</li>
        </ul>
        <div class="callout-warning"><strong>Aviso:</strong> Presentar fuera de plazo conlleva recargos del 1% mensual hasta los 12 meses, más intereses de demora. Si no se presenta nunca, la sanción puede ir del 50% al 150% del importe no declarado.</div>
      `,
    },
    {
      title: "Novedades fiscales 2026 que afectan a tu Renta",
      content: `
        <p>El ejercicio 2025 (que se declara en 2026) trae varios cambios relevantes:</p>
        <ul>
          <li><strong>Control de Bizum y pagos digitales:</strong> Las entidades financieras reportan a la AEAT todos los movimientos digitales sin importe mínimo. Cualquier incongruencia entre lo declarado y los movimientos bancarios puede generar requerimientos.</li>
          <li><strong>Nuevos tramos de cotización para autónomos:</strong> El sistema de cuotas por ingresos reales sigue ajustándose. Los autónomos deben regularizar su cuota en función de los rendimientos netos declarados.</li>
          <li><strong>Criptomonedas bajo lupa:</strong> Hacienda ha incrementado el cruce de datos con exchanges. Las ganancias y pérdidas patrimoniales por cripto deben declararse correctamente.</li>
          <li><strong>Plataformas digitales (DAC7):</strong> Si has facturado por Wallapop, Vinted, Airbnb, Etsy, etc., los datos están reportados. Toca cuadrarlos.</li>
          <li><strong>Tipo reducido microempresas (IS):</strong> Si tienes una pequeña SL, el IS pasa a 19%/21% en 2026 (afecta al ejercicio fiscal correspondiente).</li>
        </ul>
        <div class="callout-info"><strong>Importante:</strong> Si en 2025 tuviste ingresos por plataformas digitales, alquileres, criptomonedas o trabajo autónomo, esta Renta es más compleja que las anteriores. Revisar bien antes de presentar es la mejor defensa.</div>
      `,
    },
    {
      title: "Deducciones que muchos olvidan aplicar",
      content: `
        <p>Estas son las deducciones más frecuentemente olvidadas o mal aplicadas en la Renta:</p>
        <ul>
          <li><strong>Deducción por maternidad:</strong> 1.200 € anuales hasta los 3 años del menor (compatible con prestaciones).</li>
          <li><strong>Deducción por familia numerosa o discapacidad de ascendientes/descendientes:</strong> 1.200 € anuales por cada situación.</li>
          <li><strong>Aportaciones a planes de pensiones:</strong> Hasta 1.500 € anuales reducen la base imponible (límite reducido en los últimos años).</li>
          <li><strong>Donativos:</strong> 80% deducible los primeros 250 €, 35-40% el resto.</li>
          <li><strong>Cuotas sindicales y colegios profesionales:</strong> 100% deducibles como gasto del trabajo.</li>
          <li><strong>Alquiler de vivienda habitual:</strong> Sigue vigente para contratos anteriores a 2015 (hasta cierto límite).</li>
          <li><strong>Deducciones autonómicas:</strong> Cada CCAA tiene las suyas — vivienda, hijos, mayores, alquiler, etc. Revisarlas según tu residencia fiscal.</li>
        </ul>
        <div class="callout-tip"><strong>Consejo:</strong> Las deducciones autonómicas son las más olvidadas porque cambian cada año y por comunidad. Revisa específicamente las de tu CCAA antes de presentar.</div>
      `,
    },
    {
      title: "Errores frecuentes (y caros) en la Renta",
      content: `
        <p>Estos son los errores más comunes que detectamos cada año al revisar declaraciones presentadas por particulares:</p>
        <ol>
          <li><strong>Aceptar el borrador sin revisar.</strong> El borrador es un punto de partida, no la verdad fiscal. Casi siempre falta algo: deducciones autonómicas, gastos deducibles, rectificaciones por situaciones especiales.</li>
          <li><strong>No declarar la primera vivienda alquilada o vendida.</strong> Si has alquilado en Airbnb, vendido un piso, recibido una herencia o ganado con criptomonedas, hay que declararlo correctamente.</li>
          <li><strong>Olvidar el cambio de domicilio fiscal.</strong> Si te mudaste de CCAA en 2025, las deducciones autonómicas que aplican son las de tu residencia fiscal a 31 de diciembre.</li>
          <li><strong>No declarar bienes en el extranjero (modelo 720).</strong> Si tienes activos fuera de España por valor superior a 50.000 €, hay obligación de informarlo. Las sanciones por no hacerlo son altas.</li>
          <li><strong>Confundir "tributación conjunta" vs "individual".</strong> En matrimonios o parejas con hijos, una de las dos suele salir mejor. Compararlas antes de elegir es básico.</li>
        </ol>
      `,
    },
    {
      title: "¿Cuándo merece la pena contratar un asesor?",
      content: `
        <p>No todo el mundo necesita un asesor para la Renta. Si eres asalariado con un único pagador y sin situaciones complejas, el borrador suele ser suficiente con una revisión mínima.</p>
        <p><strong>Sí merece la pena contratar un asesor cuando:</strong></p>
        <ul>
          <li>Eres autónomo o tienes una pequeña sociedad.</li>
          <li>Tienes varios pagadores (por ejemplo, dos trabajos, prestación + trabajo, etc.).</li>
          <li>Tienes ingresos por alquileres, criptomonedas o plataformas digitales.</li>
          <li>Has vendido inmuebles, acciones o has recibido herencias en 2025.</li>
          <li>Vives o has vivido fuera de España, o tienes residencia mixta.</li>
          <li>Tienes obligación de presentar el modelo 720 (bienes en el extranjero).</li>
          <li>Quieres planificar mejor el ejercicio siguiente y no solo cumplir con 2025.</li>
        </ul>
        <p>El coste de un asesor para la Renta suele estar entre <strong>80 € y 400 €</strong> según complejidad. En la mayoría de casos donde merece la pena contratarlo, el ahorro o la prevención de sanciones supera con creces ese coste.</p>
      `,
    },
  ],
  checklist: [
    "Revisa los datos fiscales en el borrador antes de aceptar",
    "Comprueba todas las deducciones autonómicas de tu CCAA",
    "Declara todos los ingresos digitales (Bizum, Wallapop, Airbnb, cripto)",
    "Si tienes varios pagadores, recalcula porque puedes tener que pagar más",
    "Compara tributación conjunta vs individual si tienes pareja/hijos",
    "Si eres autónomo, revisa la cuota de RETA y posibles regularizaciones",
    "No esperes al último día — si necesitas asesor, contrátalo antes del 15 de junio",
  ],
  faq: [
    {
      question: "¿Cuándo es la fecha límite para presentar la Renta 2026?",
      answer:
        "El plazo termina el 30 de junio de 2026. Si vas a domiciliar el pago en cuenta, debes presentarla antes del 25 de junio. Presentar fuera de plazo conlleva recargos del 1% mensual durante el primer año.",
    },
    {
      question: "¿Tengo obligación de presentar la Renta?",
      answer:
        "Tienen obligación quienes obtuvieron en 2025 ingresos del trabajo superiores a 22.000 € de un solo pagador, 15.000 € de varios pagadores, autónomos en estimación directa o módulos, o quienes han tenido ganancias patrimoniales superiores a 1.000 €. Hay otros casos específicos que conviene revisar.",
    },
    {
      question: "¿Cómo puedo presentar la Renta?",
      answer:
        "Hay tres formas: online a través de Renta WEB (con Cl@ve, certificado digital o número de referencia), por teléfono con cita previa desde el 6 de mayo (Plan Le Llamamos), o presencialmente en oficinas de la AEAT desde el 3 de junio. Los autónomos deben presentarla obligatoriamente por vía electrónica.",
    },
    {
      question: "¿Qué pasa si me equivoco al presentar la Renta?",
      answer:
        "Si detectas el error antes de que Hacienda te lo señale, puedes presentar una declaración complementaria (si pagas más) o una rectificativa (si te devuelven más o el error no afecta a la cuota). Hacerlo voluntariamente reduce o elimina las posibles sanciones.",
    },
  ],
  relatedPosts: [
    { slug: "declaracion-renta-2026-autonomos", title: "Declaración de la Renta 2026 para autónomos" },
    { slug: "7-deducciones-autonomos", title: "7 deducciones que los autónomos se dejan cada año" },
    { slug: "bizum-hacienda-controla-movimientos", title: "Bizum y Hacienda: ¿controlan tus movimientos en 2026?" },
  ],
  relatedLandings: [
    { href: "/asesoria-declaracion-renta-autonomos", label: "Asesoría Renta para autónomos" },
    { href: "/gastos-deducibles-autonomos", label: "Gastos deducibles" },
    { href: "/calendario-fiscal", label: "Calendario fiscal 2026" },
  ],
};

export default function DeclaracionRenta2026Page() {
  return <TOFUTemplate data={data} />;
}
