import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Asesoría Fiscal Premium | Tu Fiscalista de Confianza",
  description:
    "Asesoría fiscal premium con trato personalizado, gestión proactiva y visión estratégica. Deja atrás la gestoría tradicional y trabaja con expertos que entienden tu negocio.",
};

const data = {
  badge: "Asesoría Fiscal Premium",
  h1: (
    <>
      La asesoría fiscal que <span className="text-gradient-gold">mereces</span>
    </>
  ),
  subtitle:
    "No más gestorías impersonales ni respuestas automáticas. Trabaja con un equipo que te conoce, anticipa tus necesidades y te acompaña en cada decisión fiscal con criterio estratégico.",
  pains: [
    {
      title: "Tu gestor te responde con retraso o con plantillas genéricas",
      desc: "Llevas días esperando una respuesta y cuando llega, parece copiada de un manual. No entienden tu caso concreto ni te dan opciones reales para tomar decisiones.",
    },
    {
      title: "Sientes que pagas por un servicio que apenas te aporta valor",
      desc: "Cada trimestre firmas y pagas, pero nadie te explica qué significan los números ni qué podrías hacer mejor. No sabes si estás optimizando o dejando dinero sobre la mesa.",
    },
    {
      title: "Te preocupa la fiscalidad pero no tienes tiempo de formarte",
      desc: "Entre el día a día del negocio y la familia, la fiscalidad queda en segundo plano. Quieres estar tranquilo sin convertirte en experto ni buscar respuestas por tu cuenta.",
    },
    {
      title: "No confías en que te avisen a tiempo de plazos o cambios normativos",
      desc: "Has pasado sustos con fechas límite o te enteraste tarde de bonificaciones que hubieran podido aplicarte. Necesitas alguien que vigile por ti de forma proactiva.",
    },
  ],
  benefits: [
    "Asesor asignado que conoce tu situación y tu negocio de forma personal",
    "Revisión fiscal proactiva con recomendaciones antes de que caduquen plazos",
    "Comunicación por WhatsApp o llamada, sin esperas infinitas ni burocracia",
    "Orientación estratégica: no solo cumplir, sino optimizar y planificar",
    "Informes claros y reuniones periódicas para que entiendas tu situación fiscal",
    "Protección ante inspecciones y respaldo experto en caso de controversia",
  ],
  method: [
    {
      step: "Diagnóstico gratuito",
      desc: "Analizamos tu situación actual, tus objetivos y tus puntos de dolor. Te explicamos qué podemos mejorar y cómo trabajamos. Sin compromiso ni presión.",
    },
    {
      step: "Propuesta y onboarding",
      desc: "Recibes una propuesta clara, con alcance y precio. Si encaja, arrancamos con un proceso de onboarding ordenado para que en pocos días estés al día y tranquilo.",
    },
    {
      step: "Seguimiento y mejora continua",
      desc: "Trabajamos contigo de forma continua: no solo presentamos impuestos, sino que planificamos, anticipamos y te proponemos mejoras concretas en cada etapa del año.",
    },
  ],
  faq: [
    {
      question: "¿Qué incluye una asesoría fiscal premium?",
      answer:
        "Incluye un asesor asignado, gestión de obligaciones fiscales y contables, planificación tributaria estratégica, comunicación preferente y reuniones de seguimiento. El alcance se adapta a cada cliente según su complejidad.",
    },
    {
      question: "¿Cuánto cuesta una asesoría premium?",
      answer:
        "Las tarifas varían según la complejidad de cada caso: facturación, estructura societaria, número de operaciones, etc. Ofrecemos un diagnóstico gratuito donde te explicamos el alcance y el precio sin compromiso.",
    },
    {
      question: "¿Puedo contratar solo para una consulta puntual?",
      answer:
        "Nuestro modelo está pensado para clientes que buscan un acompañamiento continuo. Si solo necesitas una consulta puntual, podemos orientarte hacia otras opciones más adecuadas.",
    },
    {
      question: "¿Trabajáis con clientes de toda España?",
      answer:
        "Sí. Trabajamos de forma telemática con clientes en toda España. La sede física no importa; lo importante es la relación cercana y el seguimiento personalizado que ofrecemos.",
    },
  ],
};

export default function AsesoriaFiscalPremiumPage() {
  return <LandingTemplate data={data} />;
}
