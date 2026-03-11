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

export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    role: "CEO, Startup tecnológica",
    quote:
      "Pasé de una gestoría de 300 clientes a Tu Fiscalista. La diferencia es abismal. Ahora tengo un asesor que conoce mi negocio y me avisa antes de que surjan problemas.",
    result: "Ahorro fiscal del 23% el primer año",
  },
  {
    name: "Laura S.",
    role: "Autónoma, Consultora de marketing",
    quote:
      "Por primera vez siento que tengo un partner fiscal, no alguien que solo presenta modelos. Las reuniones trimestrales me dan una tranquilidad que no tenía.",
    result: "De 3 sanciones al año a cero en 18 meses",
  },
  {
    name: "Javier R.",
    role: "Director, Agencia de diseño",
    quote:
      "El cambio fue inmediato. Nos ayudaron con todo el traspaso, optimizaron nuestra estructura fiscal y ahora tomamos decisiones con datos reales.",
    result: "Recuperación de 8.400€ en deducciones no aplicadas",
  },
] as const;
