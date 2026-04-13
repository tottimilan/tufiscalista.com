import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Inspección de Hacienda | Defensa Fiscal Profesional",
  description:
    "Inspección de Hacienda: te representamos, preparamos la documentación y defendemos tu posición. Años de experiencia en procedimientos inspectores.",
  keywords: [
    "inspección Hacienda",
    "inspector fiscal",
    "defensa inspección AEAT",
    "procedimiento inspector",
  ],
};

const data = {
  badge: "Inspección de Hacienda",
  h1: (
    <>
      Inspección de Hacienda:{" "}
      <span className="text-gradient-gold">defensa profesional</span>
    </>
  ),
  subtitle:
    "La inspección fiscal no tiene por qué ser una pesadilla. Con preparación y representación adecuada, puedes defender tu posición.",
  pains: [
    {
      title: "Te han notificado el inicio de una inspección y no sabes cómo actuar",
      desc: "La sola palabra «inspección» genera alarma. No sabes qué van a revisar, cuánto puede durar ni qué consecuencias puede tener. La incertidumbre es lo peor.",
    },
    {
      title: "El procedimiento es complejo y las actuaciones se acumulan",
      desc: "Diligencias, comparecencias, requerimientos de documentación… La inspección avanza y necesitas a alguien que conozca el proceso por dentro para no cometer errores.",
    },
    {
      title: "No sabes qué derechos tienes ni hasta dónde puede llegar el inspector",
      desc: "La inspección tiene límites legales. Tienes derechos que puedes ejercer, pero si no los conoces, es fácil ceder más de lo necesario o no aprovechar las opciones que te da la ley.",
    },
    {
      title: "Las cantidades en juego son elevadas y el margen de error es cero",
      desc: "Una inspección puede terminar en regularizaciones importantes, con intereses y sanciones. Lo que se decide en este procedimiento tiene un impacto directo en tu patrimonio.",
    },
  ],
  benefits: [
    "Representación profesional ante la Inspección de la AEAT",
    "Preparación exhaustiva de la documentación antes de cada actuación",
    "Estrategia de defensa adaptada a los ejercicios y tributos inspeccionados",
    "Negociación técnica con el equipo inspector para minimizar regularizaciones",
    "Asesoramiento continuo durante todo el procedimiento, sin sorpresas",
    "Análisis de opciones post-inspección: actas, recursos y conformidad parcial",
  ],
  method: [
    {
      step: "Evaluación inicial de la situación",
      desc: "Analizamos la comunicación de inicio, identificamos el alcance de la inspección y evaluamos los ejercicios y tributos afectados. Te explicamos qué esperar y diseñamos la estrategia.",
    },
    {
      step: "Preparación de la documentación",
      desc: "Recopilamos y organizamos toda la documentación que va a necesitar el inspector. Revisamos cada dato para anticipar posibles discrepancias y preparar argumentos sólidos.",
    },
    {
      step: "Representación en las actuaciones",
      desc: "Asistimos en tu nombre a las comparecencias y diligencias. Gestionamos la interlocución con el equipo inspector para que no tengas que enfrentarte solo al proceso.",
    },
    {
      step: "Resolución y defensa del resultado",
      desc: "Analizamos las actas, negociamos cuando es posible y te asesoramos sobre firmar en conformidad, disconformidad o conformidad parcial. Si procede, preparamos el recurso.",
    },
  ],
  faq: [
    {
      question: "¿Cuánto suele durar una inspección de Hacienda?",
      answer:
        "El plazo máximo legal es de 18 meses (ampliable a 27 en casos complejos), aunque muchas inspecciones se resuelven antes. La duración depende del alcance, la documentación y la colaboración entre las partes.",
    },
    {
      question: "¿Qué derechos tengo durante la inspección?",
      answer:
        "Tienes derecho a ser informado del alcance de la inspección, a que se respeten los plazos legales, a no declarar contra ti mismo, a obtener copia de las actuaciones y a ser asistido por un representante profesional, entre otros.",
    },
    {
      question: "¿Puedo negarme a aportar determinada documentación?",
      answer:
        "Depende. Hay documentación que estás obligado a facilitar y otra que puede estar protegida por el secreto profesional o ser irrelevante para el objeto inspeccionado. Nosotros te asesoramos sobre qué entregar y qué no.",
    },
    {
      question: "¿Qué pasa si la inspección termina con un acta de disconformidad?",
      answer:
        "Si no estás de acuerdo con la regularización propuesta, se firma un acta de disconformidad y se abren los plazos para presentar alegaciones y, si es necesario, recurrir. Nosotros te acompañamos en cada fase hasta agotar las vías disponibles.",
    },
  ],
  relatedResources: [
    {
      href: "/blog/requerimiento-hacienda-que-hacer",
      title: "Qué hacer ante un requerimiento de Hacienda",
      type: "blog" as const,
    },
    {
      href: "/requerimientos-hacienda",
      title: "Requerimientos de Hacienda: respuesta profesional",
      type: "guia" as const,
    },
    {
      href: "/sanciones-fiscales",
      title: "Sanciones fiscales: recurso y reducción",
      type: "guia" as const,
    },
  ],
};

export default function InspeccionHaciendaPage() {
  return <LandingTemplate data={data} />;
}
