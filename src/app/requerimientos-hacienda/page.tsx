import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Requerimientos de Hacienda | Respuesta Profesional Urgente",
  description:
    "¿Has recibido un requerimiento de Hacienda? Te ayudamos a responder dentro de plazo, preparar alegaciones y defender tu posición ante la AEAT.",
  keywords: [
    "requerimiento Hacienda",
    "responder requerimiento AEAT",
    "alegaciones Hacienda",
    "carta Hacienda",
  ],
  alternates: { canonical: "/requerimientos-hacienda" },
};

const data = {
  badge: "Requerimientos de Hacienda",
  h1: (
    <>
      ¿Requerimiento de Hacienda?{" "}
      <span className="text-gradient-gold">Actuamos en 24 horas</span>
    </>
  ),
  subtitle:
    "Analizamos tu notificación, preparamos la respuesta y la presentamos dentro de plazo. Sin demoras, sin errores.",
  pains: [
    {
      title: "Has recibido una carta de Hacienda y no sabes qué hacer",
      desc: "El lenguaje técnico, los plazos y las posibles consecuencias te generan ansiedad. No estás seguro de qué te piden exactamente ni de cómo responder sin perjudicarte.",
    },
    {
      title: "El plazo de respuesta se acaba y no tienes todo claro",
      desc: "Los requerimientos tienen plazos estrictos. Cada día que pasa sin responder reduce tu margen de actuación y puede derivar en sanciones o en que Hacienda decida por ti.",
    },
    {
      title: "No sabes si lo que te piden es correcto o si puedes rebatirlo",
      desc: "A veces la AEAT comete errores o aplica criterios discutibles. Sin asesoramiento profesional, podrías aceptar algo que no te corresponde o pagar más de lo debido.",
    },
    {
      title: "Tu gestor actual no te da prioridad o no domina el procedimiento",
      desc: "Necesitas a alguien que conozca los procedimientos tributarios, que actúe rápido y que te explique cada paso. No puedes permitirte respuestas genéricas en un asunto así.",
    },
  ],
  benefits: [
    "Análisis detallado de tu requerimiento en las primeras 24 horas",
    "Preparación de alegaciones técnicas adaptadas a tu caso concreto",
    "Presentación dentro de plazo con acuse de recibo y seguimiento",
    "Experiencia acumulada en cientos de procedimientos con la AEAT",
    "Comunicación clara: te explicamos qué piden, qué respondemos y por qué",
    "Estrategia de defensa orientada a minimizar el impacto económico",
  ],
  method: [
    {
      step: "Recepción y análisis urgente",
      desc: "Revisamos tu notificación el mismo día que nos la envías. Identificamos qué te piden, cuál es el plazo y cuál es la mejor estrategia de respuesta.",
    },
    {
      step: "Recopilación de documentación",
      desc: "Te indicamos exactamente qué documentos necesitamos y te ayudamos a reunirlos. Nada de listas interminables ni dudas: te guiamos paso a paso.",
    },
    {
      step: "Preparación de la respuesta",
      desc: "Redactamos las alegaciones con argumentación técnica sólida, adjuntamos las pruebas pertinentes y te explicamos el contenido antes de presentarlo.",
    },
    {
      step: "Presentación y seguimiento",
      desc: "Presentamos la respuesta telemáticamente dentro de plazo. Hacemos seguimiento del expediente y te informamos de cualquier novedad hasta su resolución.",
    },
  ],
  faq: [
    {
      question: "¿Cuánto plazo tengo para responder a un requerimiento?",
      answer:
        "Depende del tipo de requerimiento, pero lo habitual son 10 días hábiles desde la notificación. Es fundamental actuar rápido: cuanto antes nos lo envíes, más margen tenemos para preparar una respuesta sólida.",
    },
    {
      question: "¿Qué ocurre si no respondo o se me pasa el plazo?",
      answer:
        "Si no respondes, Hacienda puede resolver con los datos que tenga, lo que suele traducirse en liquidaciones desfavorables y posibles sanciones. En algunos casos también se pierde el derecho a recurrir. Por eso es crítico no dejar pasar los plazos.",
    },
    {
      question: "¿Cuánto cuesta responder a un requerimiento con vosotros?",
      answer:
        "El coste depende de la complejidad del caso. En el diagnóstico gratuito evaluamos tu situación y te damos un presupuesto cerrado antes de empezar. Sin sorpresas ni costes ocultos.",
    },
    {
      question: "¿Qué tipos de requerimientos gestionáis?",
      answer:
        "Gestionamos todo tipo: requerimientos de información, de documentación, comprobaciones limitadas, liquidaciones provisionales y paralelas. Sea cual sea el que hayas recibido, lo analizamos y te asesoramos.",
    },
  ],
  relatedResources: [
    {
      href: "/blog/requerimiento-hacienda-que-hacer",
      title: "Qué hacer si recibes un requerimiento de Hacienda",
      type: "blog" as const,
    },
    {
      href: "/calendario-fiscal",
      title: "Calendario fiscal 2026: plazos importantes",
      type: "guia" as const,
    },
    {
      href: "/sanciones-fiscales",
      title: "Sanciones fiscales: recurso y reducción",
      type: "guia" as const,
    },
  ],
};

export default function RequerimientosHaciendaPage() {
  return <LandingTemplate data={data} />;
}
