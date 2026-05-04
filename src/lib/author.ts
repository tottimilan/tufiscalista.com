/**
 * Datos profesionales del asesor (E-E-A-T).
 *
 * Centralizados aquí para alimentar tanto la UI (componentes AuthorBox,
 * página /sobre-nosotros) como el schema.org Person que enviamos a Google.
 *
 * IMPORTANTE: cuando se rellenen los datos REALES de Ali, sustituir cada
 * placeholder marcado con `// TODO`. NO publicar nada que no sea verificable
 * (Google penaliza fuerte la información falsa en YMYL como fiscalidad).
 */

import { SITE } from "./constants";

export interface Credential {
  type: "degree" | "master" | "certification" | "membership";
  name: string;
  institution: string;
  year?: number;
  /** URL pública para verificarlo (perfil de colegiado, etc.) */
  url?: string;
}

export interface Experience {
  role: string;
  company: string;
  yearStart: number;
  yearEnd?: number; // undefined = actualidad
  description?: string;
}

export interface AuthorProfile {
  name: string;
  shortName: string;
  jobTitle: string;
  shortBio: string;
  longBio: string[];
  yearsExperience: number;
  yearStartedPracticing: number;
  image: string;
  expertise: string[];
  languages: string[];
  credentials: Credential[];
  experience: Experience[];
  /** Perfiles externos para `sameAs` en schema.org Person */
  socialProfiles: {
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    medium?: string;
    reaf?: string;
    aedaf?: string;
    googleBusiness?: string;
    crunchbase?: string;
  };
  /** Casos representativos (anonimizados, con dato cuantitativo) */
  caseStudies: {
    title: string;
    description: string;
    sector?: string;
  }[];
}

export const AUTHOR: AuthorProfile = {
  name: SITE.advisor, // "Ali El Yemlahy"
  shortName: "Ali",
  jobTitle: "Asesor Fiscal y Fundador",
  image: `${SITE.url}/ali.jpg`,

  // ─────────────────────────────────────────────────────────────────────
  // BIO (placeholder hasta que Ali confirme datos exactos)
  // ─────────────────────────────────────────────────────────────────────
  shortBio:
    "Asesor fiscal y fundador de Tu Fiscalista. Especializado en fiscalidad para autónomos y pymes en España.",

  longBio: [
    // TODO: sustituir por bio real de Ali con datos verificables
    "Ali El Yemlahy es asesor fiscal con experiencia trabajando con autónomos y pymes en España. Tras años en grandes firmas, fundó Tu Fiscalista con un modelo boutique: máximo 20 clientes para ofrecer atención real, planificación estratégica y acompañamiento continuo.",
    "Su enfoque combina criterio técnico riguroso con cercanía y disponibilidad real. Cada cliente trabaja directamente con él, sin intermediarios ni rotación de gestores.",
  ],

  yearsExperience: 10, // TODO: confirmar con Ali
  yearStartedPracticing: 2016, // TODO: confirmar con Ali

  // ─────────────────────────────────────────────────────────────────────
  // ESPECIALIZACIÓN (alimenta knowsAbout en schema)
  // ─────────────────────────────────────────────────────────────────────
  expertise: [
    "Fiscalidad de autónomos",
    "Fiscalidad de pymes",
    "Planificación fiscal estratégica",
    "Fiscalidad de no residentes y residencia fiscal",
    "Defensa ante requerimientos e inspecciones de Hacienda",
    "Impuesto sobre Sociedades",
    "IRPF y declaración de la Renta",
    "IVA y operaciones intracomunitarias",
  ],

  languages: ["Spanish", "Arabic"],

  // ─────────────────────────────────────────────────────────────────────
  // CREDENCIALES (placeholder — pedir a Ali los datos exactos)
  // ─────────────────────────────────────────────────────────────────────
  credentials: [
    // TODO: sustituir por titulación real de Ali
    // Ejemplo de estructura:
    // {
    //   type: "degree",
    //   name: "Grado en Administración y Dirección de Empresas",
    //   institution: "Universidad Complutense de Madrid",
    //   year: 2014,
    // },
    // {
    //   type: "master",
    //   name: "Máster en Asesoría Fiscal",
    //   institution: "Centro de Estudios Financieros (CEF)",
    //   year: 2016,
    // },
    // {
    //   type: "membership",
    //   name: "Miembro del Registro de Economistas Asesores Fiscales (REAF)",
    //   institution: "Consejo General de Economistas",
    //   url: "https://reaf.economistas.es/...",
    // },
  ],

  // ─────────────────────────────────────────────────────────────────────
  // TRAYECTORIA PROFESIONAL (placeholder)
  // ─────────────────────────────────────────────────────────────────────
  experience: [
    // TODO: rellenar con despachos/empresas reales donde Ali haya trabajado
    // {
    //   role: "Asesor Fiscal Sénior",
    //   company: "Despacho XYZ",
    //   yearStart: 2018,
    //   yearEnd: 2023,
    //   description: "Cartera de 40+ pymes y autónomos del sector tecnológico.",
    // },
    {
      role: "Asesor Fiscal y Fundador",
      company: SITE.name,
      yearStart: 2024, // TODO: confirmar año fundación
      description:
        "Modelo boutique limitado a 20 clientes con foco en planificación estratégica.",
    },
  ],

  // ─────────────────────────────────────────────────────────────────────
  // PERFILES EXTERNOS (sameAs en schema.org — clave para autoridad)
  // ─────────────────────────────────────────────────────────────────────
  socialProfiles: {
    // TODO: rellenar con URLs REALES de Ali
    // linkedin: "https://www.linkedin.com/in/ali-el-yemlahy-...",
    // googleBusiness: "https://g.page/tufiscalista",
    // reaf: "https://reaf.economistas.es/profesional/...",
  },

  // ─────────────────────────────────────────────────────────────────────
  // CASOS REPRESENTATIVOS (anonimizados con dato cuantitativo)
  // ─────────────────────────────────────────────────────────────────────
  caseStudies: [
    // TODO: rellenar con 2-3 casos reales de Ali (anónimos, con cifra concreta)
    // {
    //   title: "Optimización fiscal de pyme tecnológica",
    //   sector: "SaaS B2B",
    //   description:
    //     "Restructuración de la operativa fiscal de una pyme con 1.2M€ de facturación, reduciendo la carga del Impuesto de Sociedades un 22% legalmente mediante deducciones por I+D y planificación de inversiones.",
    // },
  ],
};

/**
 * Devuelve las URLs `sameAs` no vacías para inyectar en schema.org Person.
 */
export function getAuthorSameAs(): string[] {
  return Object.values(AUTHOR.socialProfiles).filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );
}

/**
 * Schema.org Person enriquecido. Reemplaza al objeto inline en layout.tsx.
 */
export function buildPersonSchema() {
  const sameAs = getAuthorSameAs();

  const credentialsSchema = AUTHOR.credentials.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory:
      c.type === "degree"
        ? "degree"
        : c.type === "master"
          ? "degree"
          : c.type === "certification"
            ? "certification"
            : "membership",
    name: c.name,
    recognizedBy: {
      "@type": "Organization",
      name: c.institution,
      ...(c.url && { url: c.url }),
    },
    ...(c.year && { dateCreated: c.year.toString() }),
  }));

  const alumniOf = AUTHOR.credentials
    .filter((c) => c.type === "degree" || c.type === "master")
    .map((c) => ({
      "@type": "EducationalOrganization",
      name: c.institution,
    }));

  const memberOf = AUTHOR.credentials
    .filter((c) => c.type === "membership")
    .map((c) => ({
      "@type": "Organization",
      name: c.institution,
      ...(c.url && { url: c.url }),
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/sobre-nosotros#person`,
    name: AUTHOR.name,
    url: `${SITE.url}/sobre-nosotros`,
    image: AUTHOR.image,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.shortBio,
    worksFor: { "@id": `${SITE.url}#organization` },
    knowsAbout: AUTHOR.expertise,
    knowsLanguage: AUTHOR.languages,
    nationality: { "@type": "Country", name: "España" },
    ...(sameAs.length > 0 && { sameAs }),
    ...(alumniOf.length > 0 && { alumniOf }),
    ...(memberOf.length > 0 && { memberOf }),
    ...(credentialsSchema.length > 0 && {
      hasCredential: credentialsSchema,
    }),
  };
}
