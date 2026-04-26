import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Asesoría Fiscal para PYMES | Gestión y Estrategia Fiscal Empresarial",
  description:
    "Asesoría fiscal para PYMES con visión estratégica y gestión proactiva. Optimización fiscal, cumplimiento normativo y apoyo en decisiones de negocio para que tu empresa crezca con seguridad.",
  alternates: { canonical: "/asesoria-fiscal-para-pymes" },
};

const data = {
  badge: "Asesoría Fiscal para PYMES",
  h1: (
    <>
      Asesoría fiscal para PYMES que <span className="text-gradient-gold">cuida tu negocio</span>
    </>
  ),
  subtitle:
    "La fiscalidad de tu empresa no puede ser un lastre. Necesitas un asesor que entienda tu negocio, anticipe obligaciones, optimice la carga tributaria y te ayude a tomar decisiones con criterio.",
  pains: [
    {
      title: "Tu gestoría actual solo presenta impuestos, no te aconseja",
      desc: "Recibes modelos firmados a tiempo, pero nadie te explica qué significan para el negocio ni qué alternativas tienes. Tomas decisiones fiscales sin el soporte que necesitas.",
    },
    {
      title: "No tienes visibilidad sobre la carga fiscal real de tu empresa",
      desc: "Impuesto de sociedades, IVA, retenciones, pagos a cuenta... La foto global de tu fiscalidad es un puzzle que nadie te suministra de forma clara y accionable.",
    },
    {
      title: "Te preocupan las inspecciones y las obligaciones formales",
      desc: "Facturación electrónica, libros contables, documentación de operaciones. Quieres cumplir sin convertirlo en una pesadilla administrativa ni exponerte a riesgos innecesarios.",
    },
    {
      title: "Quieres escalar el negocio pero la fiscalidad te frena",
      desc: "Contratar, invertir, facturar más o abrir nueva actividad implica decisiones fiscales. Necesitas un socio que te ayude a anticipar el impacto y a estructurar el crecimiento.",
    },
  ],
  benefits: [
    "Gestión fiscal integral con visión del negocio, no solo cumplimiento de plazos",
    "Planificación tributaria y análisis de estructura societaria para optimizar carga fiscal",
    "Informes periódicos claros sobre la situación fiscal y recomendaciones concretas",
    "Asesor dedicado que conoce tu empresa y responde con criterio ante tus consultas",
    "Cumplimiento de obligaciones formales: factura electrónica, libros y documentación",
    "Respaldo experto ante inspecciones, requerimientos y controversias con Hacienda",
  ],
  method: [
    {
      step: "Análisis y diagnóstico gratuito",
      desc: "Revisamos tu estructura societaria, facturación, operaciones y obligaciones. Te explicamos qué podemos mejorar y cómo trabajamos. Sin compromiso.",
    },
    {
      step: "Propuesta y onboarding",
      desc: "Te presentamos el alcance, el precio y el calendario de trabajo. Si encaja, organizamos la transición desde tu gestoría actual y establecemos el seguimiento habitual.",
    },
    {
      step: "Acompañamiento estratégico continuo",
      desc: "No solo presentamos impuestos: planificamos, te anticipamos escenarios, te apoyamos en decisiones de inversión o ampliación y mantenemos tu empresa al día y protegida.",
    },
  ],
  faq: [
    {
      question: "¿Qué incluye la asesoría fiscal para PYMES?",
      answer:
        "Gestión de impuesto de sociedades, IVA, retenciones, declaraciones y obligaciones formales; planificación tributaria; informes de seguimiento; y asesoramiento en decisiones empresariales con impacto fiscal. El alcance se adapta al tamaño y complejidad de cada PYME.",
    },
    {
      question: "¿Podemos cambiar de gestoría a mitad de ejercicio?",
      answer:
        "Sí. Gestionamos la baja con la gestoría anterior y el alta en las obligaciones a nuestro cargo. El proceso se planifica para que no se pierda información ni haya solapamientos.",
    },
    {
      question: "¿Trabajáis con sociedades limitadas y otro tipo de empresas?",
      answer:
        "Sí. Trabajamos con SL, SA, cooperativas y otras formas societarias. Adaptamos el servicio al régimen fiscal de cada tipo de empresa y a su nivel de actividad.",
    },
    {
      question: "¿Cómo se calcula el precio para una PYME?",
      answer:
        "Consideramos facturación, número de operaciones, estructura societaria y complejidad. En el diagnóstico gratuito te indicamos el alcance del servicio y el precio sin compromiso.",
    },
  ],
  relatedResources: [
    { href: "/autonomo-vs-sl", title: "Autónomo frente a SL: qué te conviene", type: "guia" },
    { href: "/como-pagar-menos-impuestos-legalmente", title: "Cómo pagar menos impuestos de forma legal", type: "guia" },
    { href: "/blog/planificacion-fiscal-pymes", title: "Planificación fiscal para pymes", type: "blog" },
  ],
};

export default function AsesoriaFiscalParaPymesPage() {
  return <LandingTemplate data={data} />;
}
