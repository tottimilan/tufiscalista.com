/**
 * Fecha real de última modificación por ruta. Se usa en el sitemap para
 * enviar a Google una señal de freshness fiable (Google ignora `priority`
 * y `changefreq`, pero sí confía en `lastmod` cuando es coherente).
 *
 * Convención: actualizar la fecha (YYYY-MM-DD) cuando se modifique de forma
 * sustantiva el contenido de esa ruta. No hace falta cambiarla por retoques
 * de estilos.
 */
export const ROUTE_DATES: Record<string, string> = {
  // Core
  "": "2026-04-23",
  "/aplicar": "2026-04-23",
  "/servicio-premium": "2026-04-10",
  "/como-trabajamos": "2026-04-10",
  "/precio": "2026-04-10",
  "/casos": "2026-04-10",
  "/sobre-nosotros": "2026-04-10",
  "/contacto": "2026-04-10",
  "/faq": "2026-04-10",
  "/blog": "2026-04-23",
  "/calculadora": "2026-03-12",
  "/recursos": "2026-04-10",
  "/testimonios": "2026-04-10",
  "/comparativa-boutique-vs-gestoria": "2026-04-10",

  // BOFU
  "/asesoria-fiscal-premium": "2026-03-11",
  "/gestoria-premium-autonomos": "2026-03-11",
  "/asesoria-premium-pymes": "2026-03-11",
  "/cambiar-de-asesoria": "2026-03-11",
  "/asesor-fiscal-espana": "2026-03-11",
  "/asesoria-fiscal-para-autonomos": "2026-03-11",
  "/asesoria-fiscal-para-pymes": "2026-03-11",
  "/asesoria-declaracion-renta-autonomos": "2026-04-23",

  // Urgent
  "/requerimientos-hacienda": "2026-04-10",
  "/inspeccion-hacienda": "2026-04-10",
  "/notificaciones-hacienda": "2026-04-10",
  "/sanciones-fiscales": "2026-04-10",

  // TOFU
  "/guia-factura-electronica": "2026-04-10",
  "/verifactu-que-es": "2026-04-10",
  "/gastos-deducibles-autonomos": "2026-04-10",
  "/autonomo-vs-sl": "2026-04-10",
  "/modelos-trimestrales-autonomos": "2026-04-10",
  "/calendario-fiscal": "2026-04-10",
  "/errores-frecuentes-autonomos": "2026-04-10",
  "/como-pagar-menos-impuestos-legalmente": "2026-04-10",
  "/declaracion-renta-2026": "2026-04-23",

  // Legal
  "/politica-privacidad": "2026-03-11",
  "/aviso-legal": "2026-03-11",
};

export function getRouteDate(path: string): Date {
  const stamp = ROUTE_DATES[path];
  return stamp ? new Date(stamp) : new Date();
}
