import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Asesoría Fiscal para Autónomos | Gestión y Planificación Fiscal",
  description:
    "Asesoría fiscal para autónomos con seguimiento proactivo y planificación tributaria. Deja de perder tiempo con modelos trimestrales y optimiza tu fiscalidad con un equipo que entiende tu día a día.",
};

const data = {
  badge: "Asesoría Fiscal para Autónomos",
  h1: (
    <>
      Asesoría fiscal que <span className="text-gradient-gold">se adapta a ti</span>, autónomo
    </>
  ),
  subtitle:
    "Los modelos trimestrales, el IVA y la renta no deberían robarte horas que podrías dedicar a tu trabajo. Una asesoría fiscal para autónomos que planifica, anticipa y te deja tiempo libre.",
  pains: [
    {
      title: "Perdes horas con los modelos trimestrales y el papeleo fiscal",
      desc: "Cada trimestre es lo mismo: buscar facturas, entender conceptos y rezar por no equivocarte. Tu tiempo vale más que eso; mereces que alguien lo gestione bien.",
    },
    {
      title: "No sabes qué gastos deducir ni cómo optimizar tu IRPF",
      desc: "Te han dicho que hay deducciones por autónomos, cuotas a la Seguridad Social, gastos de oficina... pero nadie te explica de forma clara qué toca en tu caso y qué no.",
    },
    {
      title: "Tu gestor tarda semanas en responder y cuando lo hace, no resuelve",
      desc: "Necesitas respuestas rápidas ante dudas sobre facturación, retenciones o clientes. Las plantillas genéricas y los correos sin respuesta no te sirven para tomar decisiones.",
    },
    {
      title: "Te preocupa el pago a cuenta y la declaración de la renta",
      desc: "Sorpresas en la renta, pagos a cuenta desproporcionados o ajustes de último momento. Quieres una planificación que evite sustos y te permita prever tus obligaciones.",
    },
  ],
  benefits: [
    "Gestión integral de modelos trimestrales, IVA e IRPF sin que tengas que preocuparte",
    "Planificación fiscal adaptada a tu facturación y tipo de actividad",
    "Asesor disponible por WhatsApp o llamada para dudas urgentes",
    "Orientación sobre gastos deducibles y optimización de cuotas",
    "Alertas de plazos y cambios normativos que te afectan como autónomo",
    "Protección y apoyo ante inspecciones o requerimientos de Hacienda",
  ],
  method: [
    {
      step: "Diagnóstico gratuito",
      desc: "Revisamos tu situación: facturación, gastos, régimen de IVA y cuotas. Te explicamos qué podemos mejorar y cómo trabajamos. Sin compromiso ni presión.",
    },
    {
      step: "Propuesta y puesta en marcha",
      desc: "Te presentamos el alcance y el precio. Si encaja, iniciamos la gestión: alta en obligaciones, organización de documentación y planificación para el año en curso.",
    },
    {
      step: "Seguimiento trimestral y anual",
      desc: "Presentamos modelos, planificamos pagos a cuenta y te mantenemos informado de plazos y oportunidades. Tú te dedicas a tu negocio; nosotros cuidamos la parte fiscal.",
    },
  ],
  faq: [
    {
      question: "¿Qué incluye la asesoría fiscal para autónomos?",
      answer:
        "Gestión de modelos 303, 130/131, 390, declaración de la renta, alta y bajas en obligaciones fiscales, planificación tributaria y comunicación directa con tu asesor. El alcance se adapta a tu nivel de facturación y complejidad.",
    },
    {
      question: "¿Puedo deducir la cuota de autónomo?",
      answer:
        "Sí, con matices según tu régimen y tipo de actividad. En el diagnóstico revisamos tu situación para indicarte exactamente qué gastos puedes deducir y cómo optimizar tu carga fiscal.",
    },
    {
      question: "¿Trabajáis con autónomos de cualquier sector?",
      answer:
        "Sí. Trabajamos con autónomos de servicios, comercio, profesionales liberales y otros sectores. La fiscalidad se adapta a cada actividad y te explicamos las particularidades de tu caso.",
    },
    {
      question: "¿Cuánto cuesta la asesoría para un autónomo?",
      answer:
        "Depende de tu facturación, régimen de IVA y número de operaciones. Ofrecemos un diagnóstico gratuito donde te indicamos el alcance y el precio de forma clara, sin sorpresas.",
    },
  ],
};

export default function AsesoriaFiscalParaAutonomosPage() {
  return <LandingTemplate data={data} />;
}
