import type { Metadata } from "next";
import { TOFUTemplate } from "@/components/sections/TOFUTemplate";

export const metadata: Metadata = {
  title: "Guía Factura Electrónica 2026 | Obligaciones y Plazos",
  description:
    "Todo sobre la factura electrónica obligatoria en España: plazos, requisitos técnicos, software homologado y cómo prepararte antes de que sea tarde.",
  keywords: [
    "factura electrónica",
    "factura electrónica obligatoria",
    "VeriFactu",
    "software facturación",
    "Ley Crea y Crece",
  ],
  alternates: { canonical: "/guia-factura-electronica" },
};

const data = {
  badge: "Guía Práctica",
  h1: (
    <>
      Factura electrónica obligatoria:{" "}
      <span className="text-gradient-gold">todo lo que necesitas saber</span>
    </>
  ),
  subtitle:
    "La factura electrónica será obligatoria para autónomos y pymes. Te explicamos los plazos, requisitos y cómo prepararte sin estrés.",
  intro: `
    <p>La <strong>Ley Crea y Crece</strong> (Ley 18/2022) estableció la obligación de facturar electrónicamente en todas las operaciones entre empresarios y profesionales en España. El objetivo es claro: reducir la morosidad, aumentar la transparencia fiscal y alinear a España con los estándares europeos de facturación digital.</p>
    <p>Aunque la normativa ya está aprobada, los plazos de implantación dependen del desarrollo reglamentario y del tamaño de cada empresa. Lo que sí está claro es que <strong>la factura en papel o en PDF sin estructura tiene los días contados</strong>. Y cuanto antes te prepares, más ventaja competitiva tendrás frente a quienes lo dejen para el último momento.</p>
    <p>En esta guía te explicamos, paso a paso, qué implica la factura electrónica, cuándo será obligatoria para tu negocio y qué acciones concretas puedes tomar hoy mismo para estar preparado.</p>
  `,
  sections: [
    {
      title: "¿Qué es la factura electrónica?",
      content: `
        <p>Una factura electrónica <strong>no es simplemente un PDF enviado por email</strong>. Es un documento digital con formato estructurado (como XML o Facturae) que puede ser leído, procesado y validado automáticamente por sistemas informáticos sin intervención humana.</p>
        <p>La diferencia clave está en la estructura de datos. Mientras que un PDF es una imagen visual del documento, una factura electrónica contiene campos estandarizados (emisor, receptor, base imponible, tipo de IVA, fecha de operación…) que permiten su integración directa en los sistemas contables de ambas partes.</p>
        <p>Esto supone un cambio radical en la forma de trabajar: menos errores de transcripción, conciliación automática, trazabilidad completa y reducción drástica de los tiempos de cobro. Para la Administración, además, significa un control fiscal en tiempo real que facilita la lucha contra el fraude.</p>
      `,
    },
    {
      title: "Plazos de implantación",
      content: `
        <p>La Ley Crea y Crece establece un calendario escalonado que diferencia por volumen de facturación. Las <strong>empresas con facturación superior a 8 millones de euros</strong> serán las primeras en estar obligadas, con un plazo de un año desde la aprobación del desarrollo reglamentario.</p>
        <p>Para el resto de <strong>pymes y autónomos</strong>, el plazo se extiende a dos años desde esa misma fecha. Aunque aún no se ha publicado el reglamento definitivo, todas las señales apuntan a que las grandes empresas deberán cumplir durante 2026 y el resto a lo largo de 2027.</p>
        <p>Es importante no confundir esta obligación con el sistema <strong>VeriFactu</strong>, que tiene su propio calendario vinculado al Reglamento de Facturación. Ambas normativas son complementarias y convergen en un mismo objetivo: la digitalización total del proceso de facturación en España.</p>
      `,
    },
    {
      title: "Requisitos técnicos",
      content: `
        <p>El formato oficial de factura electrónica en España es <strong>Facturae en su versión 3.2.2</strong>, un estándar XML definido por el Ministerio de Hacienda. Toda factura electrónica deberá incluir una firma digital basada en certificado electrónico reconocido que garantice su autenticidad e integridad.</p>
        <p>Además, con la entrada en vigor de VeriFactu, el software de facturación deberá ser capaz de generar un <strong>registro de facturación firmado electrónicamente</strong> y enviarlo a la AEAT en tiempo real o de forma periódica. Esto implica que tu programa de facturación debe estar homologado y cumplir con los requisitos del nuevo Reglamento de Facturación.</p>
        <p>Los requisitos técnicos también incluyen:</p>
        <ul>
          <li>Generación del código QR obligatorio en cada factura</li>
          <li>Capacidad de envío y recepción a través de la solución pública de la AEAT</li>
          <li>Almacenamiento seguro durante el período legal de conservación (4 años mínimo)</li>
          <li>Garantía de inalterabilidad del contenido una vez emitida</li>
        </ul>
      `,
    },
    {
      title: "Cómo prepararte ahora",
      content: `
        <p>No esperes a que la obligación entre en vigor para actuar. Prepararte ahora te permite <strong>hacer la transición sin prisas</strong>, formar a tu equipo y detectar posibles problemas antes de que haya sanciones de por medio.</p>
        <p>El primer paso es <strong>evaluar tu software de facturación actual</strong>. ¿Genera facturas en formato Facturae? ¿Es compatible con VeriFactu? Si la respuesta es no, es momento de explorar alternativas. Muchos proveedores ya ofrecen soluciones preparadas para el nuevo marco normativo.</p>
        <p>Otros pasos prácticos que puedes dar desde hoy:</p>
        <ul>
          <li><strong>Digitaliza tu archivo histórico:</strong> escanea y clasifica las facturas en papel que aún conserves</li>
          <li><strong>Obtén o renueva tu certificado digital:</strong> es imprescindible para firmar facturas electrónicas</li>
          <li><strong>Revisa tus flujos con clientes y proveedores:</strong> coordina con ellos cómo se intercambiarán las facturas electrónicas</li>
          <li><strong>Consulta con tu asesor fiscal:</strong> un profesional puede ayudarte a planificar la transición y aprovechar posibles deducciones por digitalización</li>
        </ul>
      `,
    },
  ],
  checklist: [
    "Verificar que tu software de facturación cumple con VeriFactu",
    "Obtener certificado digital actualizado",
    "Digitalizar archivo de facturas histórico",
    "Revisar flujo de facturación con clientes y proveedores",
    "Consultar con tu asesor fiscal el impacto en tus obligaciones",
  ],
  faq: [
    {
      question: "¿Cuándo será obligatoria la factura electrónica para autónomos?",
      answer:
        "El plazo para autónomos y pymes es de dos años desde la aprobación del desarrollo reglamentario de la Ley Crea y Crece. Según las previsiones actuales, la obligación entraría en vigor a lo largo de 2027, aunque las empresas con facturación superior a 8 millones tendrán que cumplir antes, previsiblemente en 2026.",
    },
    {
      question: "¿Qué sanciones hay por no emitir factura electrónica?",
      answer:
        "La Ley prevé sanciones de hasta 10.000 euros por no cumplir con la obligación de facturación electrónica. Además, el incumplimiento podría generar problemas en las relaciones B2B, ya que tus clientes empresariales necesitarán recibir facturas en formato electrónico para cumplir con sus propias obligaciones.",
    },
    {
      question: "¿Qué software es compatible con la factura electrónica?",
      answer:
        "El software debe ser capaz de generar facturas en formato Facturae 3.2.2 con firma electrónica y, cuando entre en vigor VeriFactu, enviar los registros de facturación a la AEAT. Consulta con tu proveedor si su solución ya cumple estos requisitos o tiene prevista una actualización.",
    },
    {
      question: "¿Puedo seguir enviando facturas en PDF?",
      answer:
        "Un PDF sin estructura de datos no se considera factura electrónica a efectos legales. Podrás seguir generando una representación visual en PDF como complemento, pero la factura oficial deberá estar en formato estructurado (Facturae) para cumplir con la normativa.",
    },
  ],
  relatedPosts: [
    {
      slug: "calendario-fiscal-2026",
      title: "Calendario fiscal 2026: todas las fechas clave",
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

export default function GuiaFacturaElectronicaPage() {
  return <TOFUTemplate data={data} />;
}
