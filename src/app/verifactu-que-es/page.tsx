import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "VeriFactu: Qué Es y Cómo Afecta a Tu Negocio | 2026",
  description:
    "VeriFactu es el sistema de la AEAT para verificar facturas en tiempo real. Descubre cómo funciona, cuándo es obligatorio y qué debes hacer.",
  keywords: [
    "VeriFactu",
    "AEAT",
    "verificación facturas",
    "sistema VeriFactu",
    "reglamento facturación",
  ],
  alternates: { canonical: "/verifactu-que-es" },
};

const data = {
  badge: "VeriFactu",
  h1: (
    <>
      VeriFactu: qué es y{" "}
      <span className="text-gradient-gold">cómo te afecta</span>
    </>
  ),
  subtitle:
    "El nuevo sistema de la Agencia Tributaria que cambia la forma de facturar en España. Te lo explicamos sin tecnicismos.",
  intro: `
    <p>VeriFactu es una de las piezas clave de la <strong>Ley 11/2021 de medidas de prevención y lucha contra el fraude fiscal</strong>, conocida comúnmente como Ley Antifraude. Se trata de un sistema diseñado por la Agencia Tributaria (AEAT) para garantizar que todas las facturas emitidas en España sean verificables, íntegras e inalterables desde el momento de su creación.</p>
    <p>En la práctica, VeriFactu obliga a que el <strong>software de facturación envíe un registro de cada factura a la AEAT</strong>, ya sea en tiempo real o de forma agrupada. El objetivo es acabar con la llamada "contabilidad B" y con los programas de doble uso que permitían manipular registros contables.</p>
    <p>Aunque el nombre pueda sonar técnico, su impacto es directo en cualquier negocio que emita facturas. En esta guía te explicamos en qué consiste, cuándo será obligatorio y qué pasos concretos debes dar para cumplir.</p>
  `,
  sections: [
    {
      title: "¿Qué es VeriFactu?",
      content: `
        <p>VeriFactu (acrónimo de <strong>Verificación de Facturas</strong>) es el sistema desarrollado por la AEAT que permite comprobar la autenticidad de cualquier factura emitida en España. Forma parte del nuevo Reglamento de los Sistemas Informáticos de Facturación, que establece las condiciones técnicas que deben cumplir todos los programas de facturación.</p>
        <p>El sistema funciona como una capa de seguridad añadida al proceso de facturación. Cada vez que se genera una factura, el software crea un <strong>registro de facturación firmado digitalmente</strong> que incluye un hash encadenado con los registros anteriores. Esto hace que sea prácticamente imposible modificar o eliminar una factura sin que quede constancia.</p>
        <p>VeriFactu no es un software en sí mismo, sino un <strong>estándar de cumplimiento</strong> que todo programa de facturación deberá respetar. Los clientes finales —autónomos, pymes y empresas— simplemente necesitan asegurarse de que su software esté adaptado.</p>
      `,
    },
    {
      title: "¿Cómo funciona?",
      content: `
        <p>El funcionamiento de VeriFactu se basa en tres principios técnicos: <strong>integridad, conservación e inalterabilidad</strong> de los registros de facturación. Cuando un usuario emite una factura, el software genera automáticamente un registro que incluye los datos esenciales de la operación.</p>
        <p>Ese registro se firma electrónicamente y se enlaza con el registro anterior mediante un <strong>hash criptográfico encadenado</strong>, similar a la tecnología blockchain. De esta forma, cualquier intento de alterar un registro rompería la cadena y sería inmediatamente detectable.</p>
        <p>El software tiene dos opciones de envío:</p>
        <ul>
          <li><strong>Envío en tiempo real:</strong> el registro se transmite a la AEAT en el momento de la emisión de la factura. Esta opción ofrece el sello "VeriFactu" en la propia factura.</li>
          <li><strong>Envío diferido:</strong> los registros se almacenan localmente y se envían periódicamente. En este caso, la AEAT puede solicitar los registros en cualquier momento durante una inspección.</li>
        </ul>
      `,
    },
    {
      title: "¿Cuándo es obligatorio?",
      content: `
        <p>El calendario de VeriFactu está vinculado al desarrollo reglamentario de la Ley Antifraude. El Reglamento de Sistemas Informáticos de Facturación ya ha sido publicado, y establece que <strong>todos los software de facturación deberán estar adaptados</strong> antes de la fecha de entrada en vigor.</p>
        <p>Las previsiones actuales sitúan la obligación para los <strong>desarrolladores de software</strong> durante 2025-2026, con la obligación de uso para los contribuyentes a partir de <strong>julio de 2026</strong>. No obstante, los contribuyentes que ya están acogidos al SII (Suministro Inmediato de Información) podrían tener un régimen transitorio diferente.</p>
        <p>Es importante distinguir entre la obligación de VeriFactu y la de factura electrónica B2B de la Ley Crea y Crece. Aunque ambas son complementarias, tienen calendarios y requisitos propios. <strong>VeriFactu afecta al software; la factura electrónica afecta al formato de intercambio.</strong></p>
      `,
    },
    {
      title: "Impacto práctico en tu negocio",
      content: `
        <p>Para la mayoría de autónomos y pymes, el impacto de VeriFactu será <strong>indirecto pero significativo</strong>. No tendrás que interactuar directamente con el sistema de la AEAT, pero sí necesitarás asegurarte de que tu programa de facturación cumple con los nuevos requisitos.</p>
        <p>Si actualmente utilizas un software de facturación en la nube (como Holded, Quipu, Billin o similares), es probable que tu proveedor ya esté trabajando en la adaptación. Sin embargo, si usas programas locales, hojas de cálculo o facturación manual, <strong>necesitarás migrar a una solución homologada</strong>.</p>
        <p>Más allá de la obligación legal, VeriFactu también aporta beneficios prácticos:</p>
        <ul>
          <li><strong>Mayor seguridad jurídica:</strong> tus facturas tienen validez reforzada ante la AEAT</li>
          <li><strong>Reducción de inspecciones:</strong> los negocios con registros verificables generan menos alertas</li>
          <li><strong>Transparencia con clientes:</strong> el sello VeriFactu en tus facturas transmite profesionalidad y confianza</li>
          <li><strong>Preparación para la factura electrónica:</strong> cumplir con VeriFactu te adelanta al siguiente paso regulatorio</li>
        </ul>
      `,
    },
  ],
  checklist: [
    "Verificar si tu software actual es compatible con VeriFactu",
    "Planificar la migración si necesitas cambiar de herramienta",
    "Asegurar conexión estable a internet en punto de facturación",
    "Revisar la configuración fiscal de tus facturas",
    "Informar a tu equipo sobre el nuevo flujo de facturación",
  ],
  faq: [
    {
      question: "¿Es lo mismo VeriFactu que la factura electrónica?",
      answer:
        "No. VeriFactu es un sistema de verificación de registros de facturación que afecta al software que utilizas para emitir facturas. La factura electrónica obligatoria (Ley Crea y Crece) se refiere al formato de intercambio entre empresas. Son normativas complementarias con calendarios distintos, pero ambas forman parte de la estrategia de digitalización fiscal en España.",
    },
    {
      question: "¿Qué pasa si mi software no cumple con VeriFactu?",
      answer:
        "Los desarrolladores de software que no adapten sus productos se enfrentan a sanciones de hasta 150.000 euros. Como usuario, no serás sancionado directamente por usar un software no adaptado, pero podrías tener problemas en caso de inspección al no poder presentar registros de facturación válidos. Lo más prudente es asegurarte de que tu proveedor confirme por escrito su cumplimiento.",
    },
    {
      question: "¿Tengo que hacer algo si ya uso el SII?",
      answer:
        "Los contribuyentes acogidos al SII (grandes empresas y grupos con facturación superior a 6 millones) ya envían información de facturación a la AEAT. El régimen de VeriFactu podría tener un tratamiento diferenciado para estos contribuyentes, pero igualmente necesitarán que su software cumpla los requisitos técnicos del nuevo reglamento.",
    },
    {
      question: "¿VeriFactu afecta a las facturas que recibo de proveedores?",
      answer:
        "VeriFactu afecta principalmente a las facturas que emites, no a las que recibes. Sin embargo, si tus proveedores empiezan a emitir facturas con el sello VeriFactu, podrás verificar su autenticidad directamente en la web de la AEAT. A largo plazo, esto mejora la trazabilidad de toda la cadena de facturación.",
    },
  ],
  relatedPosts: [
    {
      slug: "calendario-fiscal-2026",
      title: "Calendario fiscal 2026",
    },
  ],
  relatedLandings: [
    { href: "/guia-factura-electronica", label: "Guía factura electrónica" },
    {
      href: "/asesoria-fiscal-para-autonomos",
      label: "Asesoría para autónomos",
    },
  ],
};

export default function VerifactuQueEsPage() {
  return <TOFUTemplate data={data} />;
}
