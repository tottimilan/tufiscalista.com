export type { BlogPost } from "./types";

import { post as autonomoOSl } from "./posts/autonomo-o-sl";
import { post as deduccionesAutonomos } from "./posts/deducciones-autonomos";
import { post as calendarioFiscal } from "./posts/calendario-fiscal-2026";
import { post as cambiarAsesoria } from "./posts/cambiar-de-asesoria";
import { post as planificacionPymes } from "./posts/planificacion-fiscal-pymes";
import { post as requerimientoHacienda } from "./posts/requerimiento-hacienda";

export const blogPosts = [
  autonomoOSl,
  deduccionesAutonomos,
  calendarioFiscal,
  cambiarAsesoria,
  planificacionPymes,
  requerimientoHacienda,
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
