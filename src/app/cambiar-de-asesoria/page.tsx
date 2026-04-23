import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Cambiar de Gestoría Sin Riesgos | Traspaso en 7 Días | Tu Fiscalista",
  description:
    "Cambia de gestoría en 7 días. Nos ocupamos del traspaso completo, sin perder un solo plazo, sin duplicar pagos. Tú solo firmas un documento. Diagnóstico gratuito.",
};

const data = {
  badge: "Cambiar de Asesoría",
  h1: (
    <>
      Cambia de gestoría en{" "}
      <span className="text-gradient-gold">7 días</span>, sin perder un solo plazo
    </>
  ),
  subtitle:
    "Tú solo firmas un documento. Nosotros nos encargamos de todo: comunicación con tu gestoría actual, recogida de documentación, alta en Hacienda y revisión de tu historial fiscal. Sin riesgo, sin estrés, sin permanencia.",
  pains: [
    {
      title: "Llevas meses pensando en cambiar pero te da pereza el papeleo",
      desc: "Sabes que tu gestoría no responde, no anticipa o cobra demás. Pero el cambio te suena a engorro. Buenas noticias: nosotros lo hacemos por ti. Tu trabajo se reduce a firmar un documento de cesión.",
    },
    {
      title: "Te preocupa perder algún plazo o que se duplique alguna presentación",
      desc: "Es la objeción nº1. Por eso planificamos el traspaso en función del calendario fiscal: si estamos cerca de un trimestre, coordinamos con tu gestoría actual para que no haya solapes. Cero plazos perdidos. Cero duplicados.",
    },
    {
      title: "Tu gestoría actual no quiere darte la documentación o no responde",
      desc: "Por ley, tienen obligación de cederte tus libros, modelos presentados y documentación. Si se ponen en plan difícil, sabemos exactamente qué pasos seguir para forzar la entrega. No es la primera vez que lo hacemos.",
    },
    {
      title: "No sabes si vas a salir ganando con el cambio",
      desc: "El primer mes con nosotros revisamos tu historial fiscal de los últimos años. Detectamos deducciones no aplicadas, errores históricos y oportunidades. La mayoría de clientes recupera el coste del primer trimestre solo con lo que detectamos en esta revisión.",
    },
  ],
  benefits: [
    "Traspaso gestionado por nosotros: tú solo firmas la cesión de datos",
    "Coordinación con tu gestoría actual para no perder ningún plazo",
    "Alta correcta en Hacienda y Seguridad Social en menos de 7 días",
    "Revisión completa de tu historial fiscal: detectamos errores y oportunidades",
    "Primer trimestre con seguimiento intensivo para que la transición sea limpia",
    "Sin permanencia: si no encajamos, te puedes ir cuando quieras",
  ],
  method: [
    {
      step: "Diagnóstico gratuito (día 0)",
      desc: "Analizamos tu situación: tipo de actividad, facturación, gestoría actual y motivos del cambio. Te explicamos cómo trabajamos y te damos un presupuesto cerrado. Sin compromiso.",
    },
    {
      step: "Firma de cesión y comunicación (día 1-2)",
      desc: "Si decides seguir, firmas un documento de cesión. Nosotros nos comunicamos con tu gestoría actual para solicitar la documentación. Tú no tienes que hablar con nadie.",
    },
    {
      step: "Recepción y alta (día 3-5)",
      desc: "Recibimos tu documentación, revisamos los últimos ejercicios para detectar mejoras, y te damos de alta como cliente nuestro. Coordinamos los plazos para que no haya solapes.",
    },
    {
      step: "Operativos (día 7)",
      desc: "Estás operativo con nosotros. Tienes asesor asignado, canal directo de comunicación y plan fiscal personalizado. Empezamos a trabajar como si lleváramos años contigo.",
    },
  ],
  faq: [
    {
      question: "¿Cuánto tiempo tarda el traspaso?",
      answer:
        "En condiciones normales, 7 días desde que firmas la cesión. Si tu gestoría actual colabora rápido, podemos cerrarlo en 3-4 días. Si se demoran, te mantenemos informado en todo momento y aceleramos lo que podemos. Cero riesgo de plazos perdidos: lo coordinamos con el calendario fiscal.",
    },
    {
      question: "¿Tengo que hablar yo con mi gestoría actual?",
      answer:
        "No. Te encargas únicamente de firmar el documento de cesión que te enviamos. Nosotros nos comunicamos con tu gestoría actual, solicitamos la documentación y gestionamos toda la transición. Si quieres avisarles tú primero por cortesía, perfecto, pero no es necesario.",
    },
    {
      question: "¿Qué pasa con los impuestos que ya estaban presentados?",
      answer:
        "Los modelos ya presentados quedan tal cual están. Nosotros asumimos la gestión a partir del alta. Como parte de la revisión inicial, miramos los últimos 4 ejercicios por si detectamos errores u oportunidades de rectificación. Si las hay, te las planteamos antes de actuar.",
    },
    {
      question: "¿Y si mi gestoría actual no quiere darme la documentación?",
      answer:
        "Por la Ley General Tributaria y el Código Deontológico, tienen obligación de cederte tu información. Si se resisten, te asesoramos en los pasos formales (requerimiento por escrito, etc.). En la práctica, la mayoría colabora en cuanto reciben la solicitud por escrito.",
    },
  ],
  relatedResources: [
    { href: "/comparativa-boutique-vs-gestoria", title: "Boutique vs gestoría de volumen: la diferencia real", type: "guia" },
    { href: "/blog/como-cambiar-de-asesoria", title: "Cómo cambiar de asesoría sin morir en el intento", type: "blog" },
    { href: "/errores-frecuentes-autonomos", title: "Errores frecuentes de autónomos que la gestoría no detecta", type: "guia" },
    { href: "/calculadora", title: "Calcula cuánto puedes ahorrar con un asesor proactivo", type: "guia" },
  ],
};

export default function CambiarDeAsesoriaPage() {
  return <LandingTemplate data={data} />;
}
