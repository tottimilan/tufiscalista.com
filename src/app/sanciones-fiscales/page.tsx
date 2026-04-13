import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Sanciones Fiscales | Recurso y Reducción de Multas",
  description:
    "¿Has recibido una sanción fiscal? Analizamos tu caso, evaluamos opciones de recurso y negociamos reducciones. Experiencia en procedimientos sancionadores.",
  keywords: [
    "sanciones fiscales",
    "multa Hacienda",
    "recurso sanción AEAT",
    "reducción sanción fiscal",
  ],
};

const data = {
  badge: "Sanciones Fiscales",
  h1: (
    <>
      Sanciones fiscales:{" "}
      <span className="text-gradient-gold">recurso y reducción</span>
    </>
  ),
  subtitle:
    "No toda sanción es definitiva. Analizamos tu caso, evaluamos si hay margen de recurso y negociamos la mejor solución.",
  pains: [
    {
      title: "Has recibido una sanción y la cuantía te preocupa seriamente",
      desc: "Las sanciones tributarias pueden ir del 50 % al 150 % de la cuota defraudada, más recargos e intereses. Las cifras asustan, pero no siempre son firmes ni definitivas.",
    },
    {
      title: "No sabes si puedes recurrir o si te conviene aceptar la reducción",
      desc: "Hacienda ofrece reducciones por conformidad y por pago voluntario, pero aceptarlas implica renunciar al recurso. Sin asesoramiento, es imposible saber qué opción te beneficia más.",
    },
    {
      title: "El procedimiento sancionador es un laberinto de plazos y tecnicismos",
      desc: "Resolución, alegaciones, recurso de reposición, reclamación económico-administrativa… Cada fase tiene sus propios plazos y requisitos. Un paso en falso puede costarte caro.",
    },
    {
      title: "Temes que la sanción pueda repetirse o escalar a algo peor",
      desc: "Una sanción puede ser indicativa de un problema mayor en tu cumplimiento fiscal. Si no se corrige la causa, es cuestión de tiempo que Hacienda vuelva a actuar.",
    },
  ],
  benefits: [
    "Análisis detallado de la sanción: tipo, graduación, base legal y posibles vicios",
    "Evaluación honesta de las opciones: recurso, conformidad o reducción negociada",
    "Preparación de alegaciones o recursos con argumentación técnica sólida",
    "Negociación de reducciones cuando la conformidad es la opción más ventajosa",
    "Representación en todas las fases: vía administrativa y económico-administrativa",
    "Plan de prevención para evitar sanciones futuras y regularizar tu situación",
  ],
  method: [
    {
      step: "Análisis de la sanción",
      desc: "Revisamos el acuerdo sancionador completo: el tipo de infracción, la graduación aplicada, los hechos imputados y la base legal. Identificamos posibles errores de forma o de fondo.",
    },
    {
      step: "Evaluación de opciones",
      desc: "Te presentamos las alternativas con sus pros y contras: recurrir, aceptar con reducción o negociar. Te damos nuestra recomendación profesional, pero la decisión siempre es tuya.",
    },
    {
      step: "Actuación y defensa",
      desc: "Si decidimos recurrir, preparamos alegaciones o recurso con argumentación técnica y jurisprudencia relevante. Si optas por la conformidad, gestionamos la reducción máxima aplicable.",
    },
    {
      step: "Resolución y prevención",
      desc: "Una vez resuelto el expediente, analizamos qué lo provocó y te proponemos medidas concretas para que no vuelva a ocurrir. Corregimos la causa, no solo el síntoma.",
    },
  ],
  faq: [
    {
      question: "¿Qué tipos de sanciones fiscales existen?",
      answer:
        "Las más habituales son las sanciones por presentar declaraciones fuera de plazo, por dejar de ingresar la deuda tributaria, por solicitar indebidamente devoluciones y por resistencia u obstrucción a la actuación administrativa. La gravedad y la cuantía varían según el tipo.",
    },
    {
      question: "¿Puedo conseguir una reducción de la sanción?",
      answer:
        "Sí. La ley prevé una reducción del 30 % por conformidad con la regularización y un 25 % adicional si se paga en período voluntario sin recurrir. En total se puede reducir hasta un 40 % la cuantía, pero hay que valorar si compensa frente a la opción de recurrir.",
    },
    {
      question: "¿Cuánto plazo tengo para recurrir una sanción?",
      answer:
        "Normalmente un mes desde la notificación del acuerdo sancionador para presentar recurso de reposición, o un mes para interponer reclamación económico-administrativa. Es fundamental no dejar pasar este plazo.",
    },
    {
      question: "¿Cómo puedo evitar sanciones en el futuro?",
      answer:
        "La mejor prevención es llevar la fiscalidad al día con asesoramiento profesional: presentar todo en plazo, aplicar correctamente las deducciones y conservar la documentación justificativa. Nosotros te ayudamos a establecer esos hábitos.",
    },
  ],
  relatedResources: [
    {
      href: "/requerimientos-hacienda",
      title: "Requerimientos de Hacienda: actuamos en 24h",
      type: "guia" as const,
    },
    {
      href: "/inspeccion-hacienda",
      title: "Inspección de Hacienda: defensa profesional",
      type: "guia" as const,
    },
    {
      href: "/blog/requerimiento-hacienda-que-hacer",
      title: "Qué hacer ante un requerimiento de Hacienda",
      type: "blog" as const,
    },
  ],
};

export default function SancionesFiscalesPage() {
  return <LandingTemplate data={data} />;
}
