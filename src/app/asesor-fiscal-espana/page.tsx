import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Asesor Fiscal España | Asesoría Fiscal Online España de Confianza",
  description:
    "Encuentra a tu asesor fiscal en España. Asesoría fiscal online profesional con trato cercano, planificación estratégica y seguimiento proactivo. Para particulares y negocios en toda España.",
  alternates: { canonical: "/asesor-fiscal-espana" },
};

const data = {
  badge: "Asesor Fiscal España",
  h1: (
    <>
      Tu asesor fiscal en España, <span className="text-gradient-gold">a un clic</span>
    </>
  ),
  subtitle:
    "En toda España hay quien necesita un asesor fiscal de verdad: alguien que gestione, planifique y te acompañe con criterio. No más gestorías anónimas. Encuentra tu socio fiscal de confianza.",
  pains: [
    {
      title: "Tu gestor actual está lejos, tarda en responder o no habla tu idioma",
      desc: "La distancia o la comunicación por correo te hace perder tiempo. Necesitas alguien accesible que entienda tu situación y te explique las cosas con claridad, sin tecnicismos innecesarios.",
    },
    {
      title: "No sabes si estás pagando de más en impuestos",
      desc: "Cada año firmas declaraciones sin entender del todo qué representan. Te gustaría saber si hay deducciones, bonificaciones o cambios normativos que estés dejando pasar.",
    },
    {
      title: "Te preocupa equivocarte con Hacienda o llegar tarde a un plazo",
      desc: "Los plazos fiscales se acumulan y la normativa cambia. Quieres estar tranquilo sabiendo que alguien competente vigila por ti y te avisa con tiempo suficiente.",
    },
    {
      title: "Buscas alguien que entienda tu situación personal y profesional",
      desc: "Tu realidad fiscal es única: trabajo, inversiones, familia, patrimonio. No quieres un servicio genérico; necesitas un asesor que adapte su criterio a tu caso concreto.",
    },
  ],
  benefits: [
    "Asesoría fiscal online España: atención telemática sin perder calidad ni cercanía",
    "Asesor asignado que conoce tu perfil y te responde en plazos razonables",
    "Planificación fiscal adaptada a tu nivel de ingresos y situación familiar",
    "Cumplimiento de plazos y obligaciones sin que tengas que preocuparte",
    "Orientación clara ante cambios normativos y oportunidades de ahorro legal",
    "Soporte ante inspecciones y controversias con Hacienda",
  ],
  method: [
    {
      step: "Solicita tu diagnóstico gratuito",
      desc: "Cuéntanos tu situación: particulares, autónomos o empresa. Analizamos tu caso y te explicamos qué podemos mejorar y cómo trabajamos. Sin compromiso.",
    },
    {
      step: "Recibe una propuesta clara",
      desc: "Te presentamos el alcance, el precio y el modo de trabajo. Si encaja con lo que buscas, arrancamos de forma ordenada y en pocos días tienes todo al día.",
    },
    {
      step: "Acompañamiento continuo",
      desc: "No solo presentamos impuestos: planificamos, anticipamos y te mantenemos informado de plazos y oportunidades. Trabajamos contigo de forma proactiva durante todo el año.",
    },
  ],
  faq: [
    {
      question: "¿Podéis ayudarme si vivo en cualquier parte de España?",
      answer:
        "Sí. Trabajamos por videollamada, correo y WhatsApp con clientes en toda España. La ubicación no es un problema: la cercanía y el seguimiento personalizado se mantienen igual.",
    },
    {
      question: "¿Qué diferencia hay entre asesor fiscal y gestoría?",
      answer:
        "Una gestoría suele centrarse en la cumplimentación de modelos y plazos. Un asesor fiscal va más allá: planificación tributaria, optimización, criterio estratégico y acompañamiento ante decisiones importantes.",
    },
    {
      question: "¿Cuánto cuesta una asesoría fiscal en España?",
      answer:
        "Depende de tu perfil: particulares, autónomos o sociedades tienen necesidades distintas. Ofrecemos un diagnóstico gratuito donde te indicamos el alcance y el precio sin ningún compromiso.",
    },
    {
      question: "¿Necesito desplazarme a una oficina?",
      answer:
        "No. Nuestro modelo es 100 % online y telemático. Toda la documentación, reuniones y comunicación se realizan por canales digitales, sin que tengas que acudir físicamente a ningún sitio.",
    },
  ],
  relatedResources: [
    { href: "/calendario-fiscal", title: "Calendario fiscal: plazos y obligaciones", type: "guia" },
    { href: "/gastos-deducibles-autonomos", title: "Gastos deducibles para autónomos", type: "guia" },
    { href: "/blog/autonomo-o-sl-que-te-conviene-2026", title: "Autónomo o SL: qué te conviene en 2026", type: "blog" },
  ],
};

export default function AsesorFiscalEspanaPage() {
  return <LandingTemplate data={data} />;
}
