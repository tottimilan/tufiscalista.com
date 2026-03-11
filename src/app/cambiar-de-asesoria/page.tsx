import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Cambiar de Gestoría | Cambio Fácil y Sin Riesgos | Tu Fiscalista",
  description:
    "¿Descontento con tu gestoría actual? Cambiar de asesor fiscal es más sencillo de lo que crees. Te guiamos en todo el proceso y te acompañamos desde el primer día.",
};

const data = {
  badge: "Cambiar de Asesoría",
  h1: (
    <>
      Cambiar de asesoría puede ser <span className="text-gradient-gold">fácil</span>
    </>
  ),
  subtitle:
    "Estás descontento con tu gestor o gestoría pero te da pereza o miedo cambiar. Nosotros nos encargamos del traspaso: te guiamos paso a paso y en pocos días estarás con un equipo que sí te escucha.",
  pains: [
    {
      title: "No te responden, te dan largas o no entienden tu caso",
      desc: "Llevas semanas esperando una respuesta o te contestan con algo que no resuelve tu duda. Sientes que no eres prioritario y que tratan tu expediente como uno más del montón.",
    },
    {
      title: "Te da miedo que el cambio complique las cosas o genere errores",
      desc: "Temes que se pierda documentación, que caduquen plazos o que Hacienda reciba duplicados. La incertidumbre te hace seguir aguantando aunque no estés a gusto.",
    },
    {
      title: "No sabes ni por dónde empezar a cambiar de gestor",
      desc: "¿Qué hay que comunicar? ¿Quién avisa a Hacienda? ¿Cómo se pide la cesión de datos? El proceso parece enrevesado y prefieres no liarte.",
    },
    {
      title: "Has probado varias gestorías y ninguna te convence",
      desc: "Pasaste de una a otra buscando trato cercano, profesionalidad o precio justo. Ahora quieres alguien que de verdad te acompañe y no repetir la misma historia.",
    },
  ],
  benefits: [
    "Proceso de cambio guiado: te explicamos cada paso y los plazos a cumplir",
    "Coordinación con tu gestoría actual para la cesión de documentación",
    "Alta correcta en Hacienda y Seguridad Social sin duplicados ni errores",
    "Revisión de tu situación desde el primer día: detectamos lo que se puede mejorar",
    "Comunicación directa desde el minuto uno: sin esperas ni filtros",
    "Sin permanencia: si no encajamos, puedes marcharte con total libertad",
  ],
  method: [
    {
      step: "Diagnóstico gratuito",
      desc: "Contamos contigo qué nos gustaría revisar, cómo trabajamos y qué incluiría el cambio. Te explicamos el proceso de traspaso y resolvemos tus dudas. Sin compromiso.",
    },
    {
      step: "Solicitud de cesión y alta",
      desc: "Si decides seguir, te guiamos para comunicar el cambio a tu gestoría actual y solicitamos la cesión de datos. Paralelamente damos el alta en Hacienda y Seguridad Social para que todo quede legalmente al día.",
    },
    {
      step: "Recepción y arranque",
      desc: "Cuando recibimos la documentación, la revisamos y te ponemos al día. En pocos días estarás operativo con nosotros y con la tranquilidad de que todo ha quedado bien cerrado.",
    },
  ],
  faq: [
    {
      question: "¿Cuánto tarda en hacerse el cambio de gestoría?",
      answer:
        "Depende de la colaboración de tu gestoría actual. Lo habitual es que en 1–3 semanas tengamos la documentación y estés dado de alta con nosotros. Nosotros aceleramos todo lo posible y te mantenemos informado.",
    },
    {
      question: "¿Puedo cambiar en cualquier momento del año?",
      answer:
        "Sí. Puedes cambiar de gestoría en cualquier momento. Lo ideal es planificarlo para evitar coincidir con plazos críticos (por ejemplo, declaración de la renta o cierre anual), pero en general no hay restricciones.",
    },
    {
      question: "¿Mi gestoría actual puede negarse a ceder los datos?",
      answer:
        "No. Por normativa, tienen la obligación de ceder la documentación e información necesaria para la continuidad del servicio. Nosotros te guiamos en cómo solicitarlo y, si hace falta, en los pasos a seguir.",
    },
    {
      question: "¿Qué pasa con los impuestos que ya tengo presentados?",
      answer:
        "Los impuestos ya presentados quedan como están. Nosotros asumimos la gestión a partir del alta y nos encargamos de las siguientes obligaciones. Si detectamos algo en el historial que convenga revisar, te lo comentamos.",
    },
  ],
};

export default function CambiarDeAsesoriaPage() {
  return <LandingTemplate data={data} />;
}
