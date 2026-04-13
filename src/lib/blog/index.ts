export type { BlogPost } from "./types";

import { post as autonomoOSl } from "./posts/autonomo-o-sl";
import { post as deduccionesAutonomos } from "./posts/deducciones-autonomos";
import { post as calendarioFiscal } from "./posts/calendario-fiscal-2026";
import { post as cambiarAsesoria } from "./posts/cambiar-de-asesoria";
import { post as planificacionPymes } from "./posts/planificacion-fiscal-pymes";
import { post as requerimientoHacienda } from "./posts/requerimiento-hacienda";
import { post as queHaceAsesor } from "./posts/que-hace-asesor-fiscal";
import { post as comoElegirAsesoria } from "./posts/como-elegir-asesoria";
import { post as impuestoSociedades } from "./posts/impuesto-sociedades-pymes-2026";
import { post as ivaAutonomos } from "./posts/iva-autonomos-guia";
import { post as altaAutonomo } from "./posts/alta-autonomo-paso-a-paso";
import { post as renta2026Autonomos } from "./posts/renta-2026-autonomos";
import { post as cuantoCuestaAsesor } from "./posts/cuanto-cuesta-asesor-fiscal";
import { post as bizumHacienda } from "./posts/bizum-hacienda-control";
import { post as cotizacionesAutonomos } from "./posts/cotizaciones-autonomos-2026";
import { post as inspeccionesHacienda } from "./posts/inspecciones-hacienda-2026";

export const blogPosts = [
  autonomoOSl,
  deduccionesAutonomos,
  calendarioFiscal,
  cambiarAsesoria,
  planificacionPymes,
  requerimientoHacienda,
  queHaceAsesor,
  comoElegirAsesoria,
  impuestoSociedades,
  ivaAutonomos,
  altaAutonomo,
  renta2026Autonomos,
  cuantoCuestaAsesor,
  bizumHacienda,
  cotizacionesAutonomos,
  inspeccionesHacienda,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return blogPosts.map((p) => p.slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getPostBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);

  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => current.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => current.tags.includes(t)).length;
      if (bShared !== aShared) return bShared - aShared;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
