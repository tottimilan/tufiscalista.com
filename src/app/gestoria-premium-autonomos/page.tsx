import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Gestoría Premium para Autónomos | Asesoría que Entiende tu Día a Día",
  description:
    "Gestoría premium para autónomos: trato cercano, optimización fiscal real y respuestas cuando las necesitas. Deja de sentirte un número y empieza a tener un socio fiscal de verdad.",
  alternates: { canonical: "/gestoria-premium-autonomos" },
};

const data = {
  badge: "Gestoría Premium Autónomos",
  h1: (
    <>
      Gestoría para autónomos que <span className="text-gradient-gold">te respeta</span>
    </>
  ),
  subtitle:
    "Eres autónomo, trabajas mucho y tienes poco tiempo. Mereces una gestoría que no te haga esperar, que te optimice de verdad y que hable contigo como persona, no como expediente.",
  pains: [
    {
      title: "Tu gestoría te trata como un número más en la cola",
      desc: "Cambias de comercial cada dos por tres, te responden con retraso y sientes que eres uno más. Nadie conoce tus circunstancias ni te ofrece alternativas adaptadas a ti.",
    },
    {
      title: "No sabes si estás pagando más impuestos de los necesarios",
      desc: "Los modelos 303, 130, 131... suenan a chino. Pagas lo que te dicen pero no tienes claro si hay deducciones, bonificaciones o regímenes que te convendrían más.",
    },
    {
      title: "Te estresan los plazos y las sorpresas de última hora",
      desc: "Cada trimestre es una carrera contra reloj. Llegan documentos cuando ya casi se vence el plazo y no tienes tiempo de revisar nada con calma.",
    },
    {
      title: "Quieres facturar más pero no sabes cómo afecta a Hacienda",
      desc: "Te gustaría escalar, cambiar de régimen o diversificar ingresos, pero no sabes qué implicaciones fiscales tiene. Temes tomar decisiones sin asesoramiento sólido.",
    },
  ],
  benefits: [
    "Asesor dedicado que conoce tu actividad y te acompaña en cada etapa",
    "Optimización real: análisis de deducciones, bonificaciones y mejor régimen para ti",
    "Recordatorios proactivos y gestión de plazos sin que tengas que preocuparte",
    "Comunicación directa (WhatsApp, llamada) sin esperas ni burocracia",
    "Explicaciones claras: sabrás qué pagas, por qué y qué puedes mejorar",
    "Apoyo para crecer: planificación cuando subas facturación o cambies de actividad",
  ],
  method: [
    {
      step: "Diagnóstico gratuito",
      desc: "Revisamos tu situación actual como autónomo: facturación, gastos deducibles, régimen, trimestres… Te decimos qué podemos mejorar y cómo te acompañaríamos. Sin compromiso.",
    },
    {
      step: "Propuesta y alta",
      desc: "Te enviamos una propuesta clara con lo que incluye y el precio. Si te encaja, coordinamos el alta y la tramitación del cambio de gestoría para que todo quede en orden.",
    },
    {
      step: "Seguimiento continuo",
      desc: "Trabajamos contigo todo el año: modelos trimestrales, retenciones, IRPF, cuotas de autónomos. Te avisamos, te explicamos y te asesoramos para que no te pille nada por sorpresa.",
    },
  ],
  faq: [
    {
      question: "¿Es más caro que una gestoría normal?",
      answer:
        "Depende. Una gestoría premium suele tener un coste mensual o trimestral algo superior a las ofertas básicas, pero el valor que aporta (optimización, tranquilidad, tiempo ahorrado) suele compensar con creces. En el diagnóstico te explicamos el precio concreto.",
    },
    {
      question: "¿Puedo cambiar de gestoría a mitad de año?",
      answer:
        "Sí. Puedes cambiar de gestoría en cualquier momento. Nos encargamos de coordinar la cesión de datos, el alta en Hacienda y Seguridad Social y de que no se pierda ningún plazo. El proceso suele ser más ágil de lo que imaginas.",
    },
    {
      question: "¿Qué tipos de autónomos atendéis?",
      answer:
        "Autónomos en módulos, estimación directa simplificada o directa, con una o varias actividades, facturación baja o alta. Si eres autónomo y buscas un trato de calidad, podemos ayudarte.",
    },
    {
      question: "¿Ofrecéis bonificación de cuota de autónomos?",
      answer:
        "Sí. Revisamos si cumples requisitos para las bonificaciones vigentes (tarifa plana, reducciones por maternidad, zonas económicas, etc.) y te guiamos en la tramitación ante la Seguridad Social.",
    },
  ],
  relatedResources: [
    { href: "/gastos-deducibles-autonomos", title: "Gastos deducibles para autónomos", type: "guia" },
    { href: "/blog/7-deducciones-autonomos", title: "7 deducciones que los autónomos se dejan", type: "blog" },
    { href: "/modelos-trimestrales-autonomos", title: "Modelos trimestrales para autónomos", type: "guia" },
  ],
};

export default function GestoriaPremiumAutonomosPage() {
  return <LandingTemplate data={data} />;
}
