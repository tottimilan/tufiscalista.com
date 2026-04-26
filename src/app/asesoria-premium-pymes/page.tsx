import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Asesoría Premium para Pymes | Tu Socio Fiscal Estratégico",
  description:
    "Asesoría fiscal premium para pymes: planificación tributaria, optimización de estructura y acompañamiento en cada decisión. Un socio fiscal que piensa contigo, no solo te cumple.",
  alternates: { canonical: "/asesoria-premium-pymes" },
};

const data = {
  badge: "Asesoría Premium Pymes",
  h1: (
    <>
      La asesoría fiscal que tu pyme <span className="text-gradient-gold">necesita</span>
    </>
  ),
  subtitle:
    "Tu empresa crece y la fiscalidad se complica. Mereces un asesor que entienda tu sector, te ayude a tomar decisiones con criterio y optimice tus impuestos de forma legal y estratégica.",
  pains: [
    {
      title: "Tu asesoría solo presenta impuestos, no te asesora",
      desc: "Recibes liquidaciones para firmar y poco más. Nadie te explica alternativas, estrategias ni cómo prepararte para el siguiente ejercicio. Pagas por cumplir, no por optimizar.",
    },
    {
      title: "No sabes si tu estructura fiscal es la más adecuada",
      desc: "¿SL, SLU, autónomo societario, holding? ¿Estás pagando más de lo necesario? Te gustaría tener una visión clara pero no tienes tiempo ni conocimiento para profundizar.",
    },
    {
      title: "Las decisiones importantes se toman sin visión fiscal",
      desc: "Contratas, inviertes o vendes sin calcular bien el impacto tributario. Luego llegan sorpresas que podrían haberse planificado con anticipación.",
    },
    {
      title: "Te preocupa una inspección o una reclamación",
      desc: "No estás seguro de que todo esté bien llevado. Quieres un equipo que revise, prevenga y te respalde si Hacienda o Seguridad Social llaman a la puerta.",
    },
  ],
  benefits: [
    "Planificación tributaria estratégica anual, no solo cumplimiento puntual",
    "Revisión de estructura societaria y recomendaciones para optimizar",
    "Acompañamiento en decisiones: contrataciones, inversiones, ampliaciones",
    "Prevención de riesgos: revisión de criterios y preparación ante inspecciones",
    "Informes ejecutivos claros para que entiendas el impacto fiscal de cada paso",
    "Acceso directo a tu asesor: reuniones y comunicación fluida cuando lo necesites",
  ],
  method: [
    {
      step: "Diagnóstico gratuito",
      desc: "Analizamos tu empresa: facturación, estructura, impuestos que paga, puntos débiles. Te exponemos qué vemos, qué mejoraríamos y cómo trabajaríamos contigo. Sin compromiso.",
    },
    {
      step: "Propuesta y transición",
      desc: "Te entregamos una propuesta con alcance, servicios incluidos y precio. Si encaja, coordinamos la transición desde tu asesoría actual y el onboarding para que no se pierda detalle.",
    },
    {
      step: "Acompañamiento estratégico continuo",
      desc: "Trabajamos contigo todo el año: planificación, seguimiento de impuestos, apoyo en decisiones clave. No solo presentamos; pensamos contigo y te ayudamos a crecer de forma ordenada.",
    },
  ],
  faq: [
    {
      question: "¿Qué tamaño de empresa atendéis?",
      answer:
        "Trabajamos con pymes de distintos tamaños: desde facturaciones modestas hasta empresas de varios millones. Lo importante es que busquen un asesoramiento de calidad y estratégico, no solo una gestoría de cumplimiento.",
    },
    {
      question: "¿Podemos cambiar de asesoría a mitad de ejercicio?",
      answer:
        "Sí. Nos coordinamos con tu asesoría actual para la cesión de documentación y el traspaso de obligaciones. Planificamos el cambio para que no se pierda ningún plazo ni información relevante.",
    },
    {
      question: "¿Incluye contabilidad?",
      answer:
        "Depende de la propuesta. Podemos ofrecer un servicio integral (fiscal y contable) o centrarnos en la parte fiscal estratégica si ya tienes contabilidad cubierta. Lo definimos en el diagnóstico.",
    },
    {
      question: "¿Cómo se factura el servicio?",
      answer:
        "Normalmente con una cuota mensual o trimestral fija, según el alcance acordado. Evitamos sorpresas: el precio se define desde el inicio y solo cambia si el alcance del encargo varía.",
    },
  ],
  relatedResources: [
    { href: "/como-pagar-menos-impuestos-legalmente", title: "Cómo pagar menos impuestos de forma legal", type: "guia" },
    { href: "/blog/planificacion-fiscal-pymes", title: "Planificación fiscal para pymes", type: "blog" },
    { href: "/autonomo-vs-sl", title: "Autónomo frente a SL: qué te conviene", type: "guia" },
  ],
};

export default function AsesoriaPremiumPymesPage() {
  return <LandingTemplate data={data} />;
}
