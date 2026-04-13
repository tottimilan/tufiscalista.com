import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Notificaciones de Hacienda | Gestión y Respuesta Profesional",
  description:
    "Gestionamos tus notificaciones electrónicas de Hacienda: las monitorizamos, analizamos y respondemos dentro de plazo para que no pierdas derechos.",
  keywords: [
    "notificaciones Hacienda",
    "notificaciones electrónicas AEAT",
    "buzón electrónico Hacienda",
    "DEHú",
  ],
};

const data = {
  badge: "Notificaciones de Hacienda",
  h1: (
    <>
      Notificaciones de Hacienda:{" "}
      <span className="text-gradient-gold">no pierdas ninguna</span>
    </>
  ),
  subtitle:
    "Las notificaciones electrónicas no esperan. Si no las abres, los plazos corren igualmente. Te las monitorizamos.",
  pains: [
    {
      title: "No revisas el buzón electrónico y se te pasan notificaciones",
      desc: "Hacienda envía notificaciones a tu Dirección Electrónica Habilitada y, si no las abres en 10 días naturales, se dan por notificadas igualmente. Muchos contribuyentes pierden derechos sin saberlo.",
    },
    {
      title: "Los plazos empiezan a correr aunque no hayas leído la notificación",
      desc: "Una vez notificado —abras o no el mensaje—, los plazos para recurrir, alegar o pagar empiezan a contar. Cuando te enteras, puede ser demasiado tarde para reaccionar.",
    },
    {
      title: "No entiendes el contenido técnico de lo que te notifican",
      desc: "Liquidaciones provisionales, providencias de apremio, diligencias de embargo… El lenguaje de Hacienda es opaco y sin ayuda profesional es difícil saber qué implica cada notificación.",
    },
    {
      title: "Tienes varias empresas o actividades y es imposible controlarlo todo",
      desc: "Si gestionas más de un NIF o tienes actividad como autónomo y sociedad, el volumen de notificaciones se multiplica. Sin un sistema de monitorización, algo se acaba escapando.",
    },
  ],
  benefits: [
    "Monitorización diaria de tu buzón electrónico (DEHú y Sede Electrónica)",
    "Alerta inmediata cuando recibes una nueva notificación de la AEAT",
    "Análisis profesional del contenido y las implicaciones de cada notificación",
    "Respuesta dentro de plazo: nunca más se te pasará un vencimiento",
    "Gestión centralizada si tienes varios NIF o actividades económicas",
    "Tranquilidad de saber que alguien vigila tu relación con Hacienda por ti",
  ],
  method: [
    {
      step: "Conexión a tu buzón electrónico",
      desc: "Configuramos el acceso autorizado a tu Dirección Electrónica Habilitada (DEHú) y a la Sede Electrónica de la AEAT para poder monitorizar las notificaciones en tu nombre.",
    },
    {
      step: "Monitorización diaria",
      desc: "Revisamos tu buzón cada día laborable. Si llega una notificación, la abrimos dentro del plazo seguro y analizamos su contenido para determinar qué acción requiere.",
    },
    {
      step: "Alerta y análisis",
      desc: "Te informamos de inmediato con un resumen claro: qué te notifican, qué plazo tienes y qué opciones hay. Sin tecnicismos innecesarios, con recomendaciones concretas.",
    },
    {
      step: "Respuesta y seguimiento",
      desc: "Si la notificación requiere acción, la gestionamos dentro de plazo: alegaciones, recursos, pagos o trámites. Te mantenemos informado hasta que el asunto quede resuelto.",
    },
  ],
  faq: [
    {
      question: "¿Qué es la DEHú y estoy obligado a tener una?",
      answer:
        "La DEHú (Dirección Electrónica Habilitada única) es el buzón digital donde las administraciones públicas te envían notificaciones. Las sociedades y ciertos profesionales están obligados a recibir notificaciones electrónicas. Los autónomos pueden estarlo según su actividad.",
    },
    {
      question: "¿Qué pasa si no abro una notificación electrónica a tiempo?",
      answer:
        "Si pasan 10 días naturales sin que la abras, se entiende notificada automáticamente. Los plazos para actuar empiezan a contar desde ese momento, lo que puede significar perder el derecho a recurrir o alegar.",
    },
    {
      question: "¿Puedo delegar la gestión de mis notificaciones?",
      answer:
        "Sí. Mediante un apoderamiento ante la AEAT, puedes autorizar a un profesional a recibir y gestionar tus notificaciones electrónicas. Nosotros te ayudamos con el trámite de apoderamiento.",
    },
    {
      question: "¿Con qué frecuencia revisáis el buzón?",
      answer:
        "Todos los días laborables. Las notificaciones tienen un período de gracia de 10 días naturales, pero nosotros actuamos mucho antes para maximizar el tiempo disponible de respuesta y evitar cualquier riesgo.",
    },
  ],
};

export default function NotificacionesHaciendaPage() {
  return <LandingTemplate data={data} />;
}
