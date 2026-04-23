import type { Metadata } from "next";
import { LandingTemplate } from "@/components/sections/LandingTemplate";

export const metadata: Metadata = {
  title: "Asesor Declaración Renta Autónomos 2026 | Tu Fiscalista",
  description:
    "Tu Renta de autónomo, hecha por un asesor que conoce tu negocio. Maximizamos deducciones, evitamos sustos y planificamos el siguiente ejercicio. Diagnóstico gratuito.",
  keywords: [
    "asesor declaración renta autónomos",
    "gestor renta autónomo 2026",
    "hacer renta autónomo",
    "asesoría fiscal renta autónomos",
    "declaración renta autónomo",
  ],
  alternates: { canonical: "/asesoria-declaracion-renta-autonomos" },
};

const data = {
  badge: "Renta 2026 · Autónomos",
  h1: (
    <>
      Tu Renta de autónomo, hecha por un asesor que{" "}
      <span className="text-gradient-gold">conoce tu negocio</span>
    </>
  ),
  subtitle:
    "No es la app del banco ni el borrador automático. Es planificación fiscal real: deducciones bien aplicadas, gastos justificados y un asesor que responde a tus dudas. Plazas limitadas para campaña 2026.",
  pains: [
    {
      title: "Tienes dudas sobre qué gastos puedes deducir y cuáles no",
      desc: "Vehículo, dietas, suministros del hogar, formación, software, móvil, seguros... la lista es larga y los criterios cambian. Sin un asesor que conozca tu actividad, lo más probable es que dejes dinero sobre la mesa o cometas errores.",
    },
    {
      title: "Te preocupa que el borrador automático esté mal calculado",
      desc: "El borrador de Hacienda está pensado para asalariados con casos sencillos. Si eres autónomo, casi seguro que necesitas modificarlo. Aceptarlo sin revisarlo puede salirte caro o hacerte pagar de más.",
    },
    {
      title: "Tienes miedo a una sorpresa fiscal este año",
      desc: "Pagos a cuenta desproporcionados, cuotas de autónomos no aplicadas correctamente, ingresos atípicos no declarados como toca. Sin planificación, la Renta puede ser una losa que descubres en mayo y no puedes evitar.",
    },
    {
      title: "Tu gestor solo presenta, no planifica para el año siguiente",
      desc: "Una buena Renta no es solo cumplir con 2025. Es dejar el plan listo para optimizar 2026. Eso requiere alguien que mire tu negocio con perspectiva, no solo que rellene formularios.",
    },
  ],
  benefits: [
    "Revisión completa de gastos deducibles según tu actividad concreta",
    "Optimización del régimen (estimación directa simplificada/normal/módulos)",
    "Aplicación correcta de deducciones por suministros, vehículo, dietas, formación",
    "Cálculo y planificación de pagos a cuenta para evitar sustos",
    "Comprobación frente a errores del borrador automático de la AEAT",
    "Plan fiscal para el ejercicio siguiente entregado junto a la declaración",
  ],
  method: [
    {
      step: "Recogemos tu información",
      desc: "Subes tus facturas, ingresos y gastos (o nos das acceso a tu sistema). Revisamos también tu declaración del año anterior para detectar mejoras y corregir errores históricos si los hay.",
    },
    {
      step: "Analizamos y optimizamos",
      desc: "Nuestro asesor revisa tu caso, aplica todas las deducciones que te corresponden y prepara el borrador. Te explicamos qué hemos hecho, qué te toca pagar o devolver y por qué.",
    },
    {
      step: "Presentamos y planificamos",
      desc: "Presentamos la declaración dentro de plazo y te entregamos un plan fiscal personalizado para el siguiente ejercicio: qué cambiar, qué optimizar y cómo evitar sorpresas en 2026.",
    },
  ],
  faq: [
    {
      question: "¿Cuánto cuesta la declaración de la Renta de un autónomo con vosotros?",
      answer:
        "Depende del volumen de operaciones, complejidad y régimen fiscal. Como referencia, una Renta de autónomo en estimación directa simplificada suele estar entre 150 € y 350 €. En el diagnóstico gratuito te damos un presupuesto cerrado, sin sorpresas.",
    },
    {
      question: "¿Puedo deducir el coche, el móvil o los gastos de casa si trabajo desde aquí?",
      answer:
        "Sí, con matices. El vehículo solo es deducible al 100% en actividades específicas (transporte, comerciales, etc.); en el resto, hay reglas más restrictivas. El móvil se puede deducir si está afecto a la actividad. Los suministros del hogar son deducibles con la regla del 30% sobre la proporción de la vivienda usada profesionalmente. Lo revisamos caso a caso.",
    },
    {
      question: "¿Qué pasa si Hacienda me requiere algo después de presentar la Renta?",
      answer:
        "Si has presentado la Renta con nosotros y Hacienda te requiere documentación, te asesoramos en la respuesta. Trabajamos contigo para defender la declaración presentada y minimizar cualquier incidencia.",
    },
    {
      question: "¿Hasta cuándo puedo contratar este servicio para la Renta 2026?",
      answer:
        "La campaña de la Renta termina el 30 de junio de 2026. Recomendamos contratar antes del 15 de junio para tener margen de revisión. A partir de junio, la disponibilidad puede estar limitada por volumen.",
    },
  ],
  relatedResources: [
    { href: "/gastos-deducibles-autonomos", title: "Gastos deducibles para autónomos: guía completa", type: "guia" },
    { href: "/blog/declaracion-renta-2026-autonomos", title: "Declaración de la Renta 2026 para autónomos", type: "blog" },
    { href: "/blog/7-deducciones-autonomos", title: "7 deducciones que los autónomos se dejan cada año", type: "blog" },
    { href: "/calculadora", title: "Calculadora fiscal: simula tu impacto", type: "guia" },
  ],
};

export default function AsesoriaDeclaracionRentaAutonomosPage() {
  return <LandingTemplate data={data} />;
}
