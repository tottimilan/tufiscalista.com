# Diferencias de implementación respecto al blueprint

Referencia: `../arquitectura-web-asesoria-premium-1.md`

> **Última actualización:** 23 abril 2026 — Conversion overhaul (post-análisis Google Ads).
> Cambios incluidos: formulario en 2 pasos, teléfono visible (click-to-call), 2 landings nuevas de Renta, mejora landing /cambiar-de-asesoria, sticky CTA universal, exit intent específico /aplicar, schema ProfessionalService ampliado (telephone, geo, openingHours), MeetYourAdvisor section, Avatar en testimonios, Skip to content, ARIA labels, contraste WCAG mejorado, fonts optimizadas.

---

## Decisiones técnicas

| Blueprint | Implementación | Motivo |
|---|---|---|
| Three.js / React Three Fiber para hero background | Canvas 2D con animación de partículas | Menor peso del bundle (~200KB menos), rendimiento más predecible en dispositivos móviles |
| Calendly para agendamiento | Cal.com (cal.com/el-asesor-fiscal) | Open source, sin cuota mensual, integración mediante links directos |
| Cormorant Garamond (tipografía serif) | Playfair Display | Mejor legibilidad en pantalla a tamaños de título, disponible en Google Fonts |
| CMS (Strapi/Sanity) para blog | Blog hardcoded con archivos .ts individuales por post en `src/lib/blog/posts/` | Simplicidad, sin necesidad de infraestructura adicional ni costes de hosting de CMS |
| Formulario de contacto con Calendly embed | Formularios propios + links a Cal.com | Control total sobre tracking, anti-spam y validación |
| Lead magnets con descarga directa | Gate component con captura de email → descarga | Captura de leads antes de entregar el recurso |

---

## Estado de implementación por sección del sitemap

### Núcleo comercial — COMPLETO
- `/` Home ✅
- `/aplicar` ✅
- `/servicio-premium` ✅
- `/como-trabajamos` ✅
- `/precio` ✅
- `/casos` ✅
- `/sobre-nosotros` ✅
- `/contacto` ✅
- `/faq` ✅
- `/blog` + `/blog/[slug]` ✅ (6 artículos, arquitectura modular con posts individuales)
- `/calculadora` ✅ (Calculadora fiscal interactiva)
- `/recursos` ✅ (Hub de contenidos con links a todas las secciones)

### Landings BOFU — COMPLETO (8/8)
- `/asesoria-fiscal-premium` ✅
- `/gestoria-premium-autonomos` ✅
- `/asesoria-premium-pymes` ✅
- `/cambiar-de-asesoria` ✅ (rediseñada para mejor conversión, 23 abr)
- `/asesor-fiscal-espana` ✅
- `/asesoria-fiscal-para-autonomos` ✅
- `/asesoria-fiscal-para-pymes` ✅
- `/asesoria-declaracion-renta-autonomos` ✅ (NUEVO 23 abr — campaña Renta)

### Landings problema urgente — COMPLETO (4/4)
- `/requerimientos-hacienda` ✅
- `/inspeccion-hacienda` ✅
- `/notificaciones-hacienda` ✅
- `/sanciones-fiscales` ✅

### Landings TOFU — COMPLETO (9/9)
- `/guia-factura-electronica` ✅
- `/verifactu-que-es` ✅
- `/gastos-deducibles-autonomos` ✅
- `/autonomo-vs-sl` ✅
- `/modelos-trimestrales-autonomos` ✅
- `/calendario-fiscal` ✅
- `/errores-frecuentes-autonomos` ✅
- `/como-pagar-menos-impuestos-legalmente` ✅
- `/declaracion-renta-2026` ✅ (NUEVO 23 abr — campaña Renta general)

### Páginas de confianza / soporte — COMPLETO
- `/faq` ✅
- `/comparativa-boutique-vs-gestoria` ✅
- `/testimonios` ✅
- `/politica-privacidad` ✅
- `/aviso-legal` ✅

---

## Tracking implementado

| Evento | Ubicación | Estado |
|---|---|---|
| `view_landing` | LandingTemplate (BOFU + urgentes) y TOFUTemplate | ✅ |
| `click_cta_primary` | Button component (global) | ✅ |
| `click_cta_secondary` | Button component (global) | ✅ |
| `start_apply_form` | ApplyForm on focus | ✅ |
| `submit_apply_form` | ApplyForm on success | ✅ |
| `submit_contact_form` | ContactForm on success | ✅ |
| `book_call` | TrackedCalLink (Cal.com links globales) | ✅ |
| `click_whatsapp` | WhatsAppButton | ✅ |
| `download_lead_magnet` | LeadMagnetGate on success | ✅ |
| `scroll_50` / `scroll_90` | Analytics component (global) | ✅ |
| `compare_table_interaction` | Comparison section (hover/click) | ✅ |
| `calculator_used` | FiscalCalculator | ✅ |
| `exit_intent_shown` | ExitIntent popup | ✅ |

---

## Anti-spam y seguridad

- Honeypot fields en formularios ✅
- Timing check (>2s) ✅
- Rate limiting (3/min por IP) ✅
- Cloudflare Turnstile (invisible CAPTCHA) ✅
- Server-side Zod validation ✅
- CSRF Origin check ✅
- HTML sanitization ✅
- Security headers via middleware ✅
- WhatsApp number obfuscation ✅

---

## Integraciones

- Google Analytics 4 (GA4) ✅
- Meta Pixel ✅
- Vercel Analytics + Speed Insights ✅
- Google Ads conversions (via GA4 import) ✅
- Resend (transactional email) ✅
- Cal.com (scheduling) ✅
- Cloudflare Turnstile ✅

---

## Arquitectura del blog

El blog usa archivos `.ts` individuales en `src/lib/blog/posts/`:
- Cada post exporta un objeto `BlogPost` tipado con `slug`, `title`, `excerpt`, `date`, `category`, `tags`, `readTime`, `content`
- El barrel `src/lib/blog/index.ts` importa todos los posts, los ordena por fecha y exporta helpers (`getPostBySlug`, `getAllSlugs`, `getRelatedPosts`, `formatDate`)
- El `[slug]/page.tsx` genera metadata con `keywords` basados en tags y usa `getRelatedPosts` para artículos relacionados por coincidencia de tags
- Para añadir un nuevo post: crear un archivo `.ts` en `posts/`, importarlo en `index.ts` y añadirlo al array

## Componentes reutilizables

- `LandingTemplate` — Template BOFU y urgentes (badge, h1, pains, benefits, method, testimonials, faq, CTA)
- `TOFUTemplate` — Template TOFU (badge, h1, intro HTML, sections HTML, checklist, faq, related posts/landings, CTA)
- `LeadMagnetGate` — Gate de descarga con captura de email y tracking
- `TrackedCalLink` — Link a Cal.com con tracking `book_call` integrado
- `Turnstile` — Widget invisible de Cloudflare Turnstile
