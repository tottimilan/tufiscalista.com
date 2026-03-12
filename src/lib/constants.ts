export const SITE = {
  name: "Tu Fiscalista",
  domain: "tufiscalista.com",
  url: "https://tufiscalista.com",
  description:
    "Asesoría fiscal boutique para autónomos y pymes. Máximo 20 clientes. Planificación, seguimiento y criterio para tu negocio.",
  advisor: "Ali El Yemlahy",
} as const;

export const PLAZAS = {
  total: 20,
  ocupadas: 15,
} as const;

export const NAV_LINKS = [
  { href: "/servicio-premium", label: "Servicio" },
  { href: "/como-trabajamos", label: "Método" },
  { href: "/precio", label: "Precio" },
  { href: "/casos", label: "Casos" },
  { href: "/calculadora", label: "Calculadora" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/blog", label: "Blog" },
] as const;

export const SERVICES = [
  {
    title: "Fiscalidad",
    description:
      "Planificación fiscal estratégica, optimización de impuestos y declaraciones trimestrales y anuales.",
    icon: "chart",
  },
  {
    title: "Contabilidad",
    description:
      "Contabilidad completa, cierre de ejercicio, cuentas anuales y seguimiento mensual.",
    icon: "book",
  },
  {
    title: "Laboral",
    description:
      "Nóminas, contratos, altas, bajas y toda la gestión de personal que necesites.",
    icon: "users",
  },
  {
    title: "Legal",
    description:
      "Asesoramiento en constitución de sociedades, contratos mercantiles y cumplimiento normativo.",
    icon: "shield",
  },
  {
    title: "Reuniones de seguimiento",
    description:
      "Revisiones periódicas para anticipar problemas y ajustar tu estrategia fiscal.",
    icon: "calendar",
  },
  {
    title: "Soporte directo",
    description:
      "Acceso directo a tu asesor, sin intermediarios. Respuesta en menos de 24h.",
    icon: "message",
  },
  {
    title: "Previsión de impuestos",
    description:
      "Estimaciones trimestrales para que nunca te pille desprevenido un pago.",
    icon: "trending",
  },
  {
    title: "Gestión documental",
    description:
      "Plataforma digital para subir, organizar y consultar todos tus documentos.",
    icon: "folder",
  },
] as const;

export const PROBLEMS = [
  {
    pain: "Pagas de más por falta de planificación",
    solution:
      "Diseñamos una estrategia fiscal antes de que llegue el trimestre, no después.",
  },
  {
    pain: "Vives con miedo a errores o sanciones",
    solution:
      "Revisamos cada movimiento con criterio y te mantenemos siempre al día.",
  },
  {
    pain: "Tu gestor responde tarde o no te acompaña",
    solution:
      "Con solo 20 clientes, tu mensaje nunca se pierde. Respuesta en menos de 24h.",
  },
  {
    pain: "Tomas decisiones sin visibilidad ni criterio",
    solution:
      "Te damos números claros, previsiones y reuniones para decidir con datos.",
  },
  {
    pain: "Necesitas pasar de trámite a partner estratégico",
    solution:
      "No somos una gestoría. Somos tu departamento fiscal externo.",
  },
] as const;

export const COMPARISON = [
  {
    variable: "Número de clientes",
    boutique: "Máximo 20",
    traditional: "200–500+",
  },
  {
    variable: "Tiempo de respuesta",
    boutique: "Menos de 24h",
    traditional: "3–7 días",
  },
  {
    variable: "Reuniones periódicas",
    boutique: "Mensuales o trimestrales",
    traditional: "Solo si las pides",
  },
  {
    variable: "Proactividad",
    boutique: "Te avisamos antes de que pase",
    traditional: "Reactiva, tras el problema",
  },
  {
    variable: "Continuidad del asesor",
    boutique: "Siempre el mismo",
    traditional: "Rotación frecuente",
  },
  {
    variable: "Profundidad del servicio",
    boutique: "Integral y estratégico",
    traditional: "Tramitación básica",
  },
  {
    variable: "Soporte en decisiones",
    boutique: "Criterio fiscal en cada paso",
    traditional: "Solo impuestos",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "¿Qué incluye exactamente el servicio premium?",
    answer:
      "Fiscalidad completa, contabilidad, laboral, asesoramiento legal básico, reuniones de seguimiento, previsión de impuestos, soporte directo y gestión documental digital. Todo lo que necesitas, con un solo interlocutor.",
  },
  {
    question: "¿Qué no incluye?",
    answer:
      "No incluimos servicios jurídicos complejos (litigios, procesos judiciales) ni auditorías externas. Si lo necesitas, te derivamos a profesionales de confianza.",
  },
  {
    question: "¿Hay permanencia?",
    answer:
      "No. Trabajamos sin permanencia. Si no estás satisfecho, puedes irte cuando quieras. Creemos que la mejor retención es un buen servicio, no un contrato.",
  },
  {
    question: "¿Cómo es el proceso de cambio de asesoría?",
    answer:
      "Nos encargamos de todo. Contactamos a tu asesoría anterior, gestionamos el traspaso de documentación y te dejamos operativo sin que pierdas un solo día.",
  },
  {
    question: "¿Cuánto tardáis en responder?",
    answer:
      "Menos de 24 horas en días laborables. Para temas urgentes, el mismo día. Al tener solo 20 clientes, tu consulta nunca queda enterrada.",
  },
  {
    question: "¿Solo trabajáis en España?",
    answer:
      "Sí, nos especializamos en fiscalidad española. Si tienes operaciones internacionales, te asesoramos en la parte española y coordinamos con profesionales locales si es necesario.",
  },
  {
    question: "¿Trabajáis con autónomos y con pymes?",
    answer:
      "Sí, con ambos. Nuestro modelo boutique se adapta tanto a autónomos con cierto volumen como a pequeñas empresas que valoran un servicio cercano y estratégico.",
  },
] as const;

export const FEATURE_FLAGS = {
  showClientLogos: false,
  showVideo: false,
} as const;

export const CLIENT_LOGOS = [
  { name: "Cliente 1", src: "/logos/client-1.svg" },
  { name: "Cliente 2", src: "/logos/client-2.svg" },
  { name: "Cliente 3", src: "/logos/client-3.svg" },
  { name: "Cliente 4", src: "/logos/client-4.svg" },
  { name: "Cliente 5", src: "/logos/client-5.svg" },
  { name: "Cliente 6", src: "/logos/client-6.svg" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Mohammed Makhi",
    role: "CEO, Palatino",
    quote:
      "Ali destaca por su gran profesionalidad, cercanía y excelente atención. Su labor en asesoría y gestoría fiscal transmite confianza y hace que todo el proceso resulte mucho más claro, fácil y tranquilo.",
    result: "Servicio altamente recomendable",
  },
  {
    name: "Manuel Ramos",
    role: "Consultor de Marketing",
    quote:
      "Siempre nos informa con antelación de cuánto vamos a tener que pagar de impuestos. Lleva todo con tiempo, avisa antes de cada trimestre y explica las cosas de forma clara. Todo resulta mucho más sencillo y sin sorpresas.",
    result: "Sin sorpresas cada trimestre",
  },
  {
    name: "Vera Khezina",
    role: "Emprendedora Digital",
    quote:
      "Me da mucha tranquilidad trabajar con Ali, es profesional, inteligente y habla ese idioma tan raro que solo entienden los economistas y los señores de Hacienda. Si te estás planteando trabajar con él, no lo dudes ni un segundo.",
    result: "Tranquilidad total con Hacienda",
  },
  {
    name: "Tamta Martashvili",
    role: "No Residente Fiscal",
    quote:
      "Aunque yo me encontraba en otro país, me acompañó y me ayudó en todo momento a distancia con mucha responsabilidad y profesionalidad. Gracias a su apoyo, todo el proceso fue mucho más fácil para mí.",
    result: "Gestión completa a distancia",
  },
  {
    name: "Ayub Baach",
    role: "CEO, AutosMobax",
    quote:
      "Desde que empecé a trabajar con él he notado un salto cualitativo en la gestión fiscal, demostrando siempre un gran nivel de profesionalidad y conocimiento. Ofrece un trato cercano y personalizado, adaptándose a las necesidades de cada situación.",
    result: "Salto cualitativo en gestión fiscal",
  },
] as const;
