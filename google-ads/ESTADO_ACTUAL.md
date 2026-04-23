# Estado Actual — Google Ads Tu Fiscalista
## Actualizado: 23 abril 2026 (sesión 4 — primer informe + overhaul web)

---

## TAREA URGENTE: Crear Ad Group nuevo "AG4 Renta Autónomos" (campaña Renta)

Acabamos de publicar la landing **`/asesoria-declaracion-renta-autonomos`** específica para la campaña de Renta (abril-junio = pico anual). Hay que crear un Ad Group dedicado para captar este tráfico.

### Pasos en Google Ads

1. Google Ads → Campañas → **TF | Search | Asesoría Fiscal**
2. Click en **Grupos de anuncios** → **+** (nuevo grupo de anuncios)
3. Nombre: `AG4 | Renta Autónomos`

### Keywords a añadir

**Concordancia exacta:**
```
[asesor declaración renta autónomos]
[gestor renta autónomo]
[hacer la renta autónomo]
[asesoría fiscal renta autónomos]
[declaración renta autónomo 2026]
```

**Concordancia de frase:**
```
"declaración renta autónomos"
"asesor renta autónomo"
"gestor renta autónomos"
"hacer la renta autónomo"
"renta 2026 autónomo"
"asesoría renta autónomos"
"renta autónomos online"
```

### RSA — Títulos (15, máx 30 caracteres)

```
Asesor Renta Autónomos 2026
Tu Renta Hecha Por Expertos
Declaración Renta Autónomo
Maximiza Tus Deducciones
Sin Sustos En Tu Renta
Renta + Plan Fiscal 2026
Asesor Que Conoce Tu Negocio
Diagnóstico Renta Gratis
Plazas Limitadas Campaña 26
Antes Del 30 Junio
Renta Autónomos: Profesional
Sin Errores · Sin Sustos
Tu Asesor Personal Renta
Solo 20 Clientes al Año
Tu Renta En Buenas Manos
```

### RSA — Descripciones (4, máx 90 caracteres)

```
Asesor experto en Renta autónomos. Maximizamos deducciones y planificamos 2026. Sin sustos.
No es la app del banco. Es planificación real con un asesor que conoce tu negocio.
Diagnóstico gratuito antes del 30 de junio. Solo 20 clientes al año, plazas limitadas.
Tu Renta de autónomo, hecha por un asesor que la revisa, la optimiza y te llama.
```

**URL final:** `https://tufiscalista.com/asesoria-declaracion-renta-autonomos`
**Ruta visible:** tufiscalista.com/renta/autonomos

### Tras publicar el Ad Group

- Pausar las búsquedas de "renta" en otros Ad Groups que estén canibalizando
- Vigilar términos de búsqueda durante primeros 5 días
- CPC esperado: 1-3 € (similar al resto de tu cuenta)
- Conversión esperada: superior al promedio actual por intención muy alta y landing dedicada

---

---

## Completado

### Paso 1: Vinculación GA4 con Google Ads
- GA4 (G-1NFWSRKB2F) vinculado con Google Ads (460-714-6998)
- Enhanced Measurement activado
- Etiqueta de Google detectada en tufiscalista.com

### Paso 2: Conversiones importadas en Google Ads (todas activas)
- `start_apply_form` → Envío de formulario para clientes potenciales
- `click_cta_primary` → Envío de formulario para clientes potenciales
- `submit_apply_form` → Envío de formulario para clientes potenciales ✅ (importado 10 abril)
- `book_call` → Solicitud de cita ✅ (importado 10 abril)
- `click_whatsapp` → Contacto ✅ (importado 10 abril)
- `submit_contact_form` → Contacto ✅ (importado 10 abril)

### Paso 3: Campañas creadas y publicadas

**Campaña 1: TF | Search | Asesoría Fiscal**
- Presupuesto: 10€/día
- Puja: Maximizar clics
- Ubicación: España | Idioma: Español
- Redes: Solo Google Search
- AI Max: Desactivado
- EU Political Ads: No
- Ad Group: AG1 | Asesoría Autónomos (10 keywords exact+phrase)
- 1 RSA con 15 títulos + 4 descripciones
- 6 sitelinks configurados
- Landing: /asesoria-fiscal-para-autonomos

**Campaña 2: TF | Search | Cambiar de Gestoría**
- Presupuesto: 7€/día
- Puja: Maximizar clics
- Ubicación: España | Idioma: Español
- Redes: Solo Google Search
- AI Max: Desactivado
- EU Political Ads: No
- Ad Group: AG1 | Cambiar Gestoría (12 keywords exact+phrase)
- 1 RSA con 15 títulos + 4 descripciones
- 6 sitelinks configurados
- Landing: /cambiar-de-asesoria

### Paso 4: Keywords negativas completas
- ~25 términos negativos iniciales + 96 términos adicionales (10 abril)
- Total: ~121 negativos en ambas campañas
- Excluidos intencionalmente de negativas: "contratar asesor", "comparativa", "ranking", "opiniones", "reviews", "mejor gestoría", "top gestorías", "listado gestorías", "versus", "vs", "guía gratis" (son búsquedas de consideración válidas)

### Mejoras al código web (sesión 1)
- Tracking `book_call` añadido a enlaces Cal.com (HeroHome, ApplySection)
- EventName type ampliado con `calculator_used` y `exit_intent_shown`
- Eliminados los `as never` de ExitIntent y FiscalCalculator

### Mejoras al código web (sesión 2) — NUEVO
- **EventName ampliado** con `click_whatsapp` y `submit_contact_form`
- **WhatsAppButton.tsx** — añadido `trackEvent("click_whatsapp")` al clic del botón flotante
- **ExitIntent.tsx** — añadido `trackEvent("book_call", { source: "exit_intent" })` al enlace Cal.com
- **Página /aplicar** — enlaces Cal.com (15min y 30min) ahora disparan `book_call` con source `aplicar_15min` / `aplicar_30min` (via nuevo componente `TrackedCalLink`)
- **BlogCTA.tsx** — enlace Cal.com ahora dispara `book_call` con source `blog_cta`
- **Página /contacto** — tarjeta "Agendar reunión" ahora dispara `book_call` con source `contacto_page`
- **ContactForm.tsx** — añadido `trackEvent("submit_contact_form")` al envío exitoso del formulario de contacto
- **LandingTemplate.tsx** — añadido enlace Cal.com con tracking `book_call` en hero (source: `landing_hero`) y en CTA final (source: `landing_bottom_cta`). Esto cubre todas las landings BOFU: `/asesoria-fiscal-para-autonomos`, `/asesoria-fiscal-para-pymes`, `/asesoria-fiscal-premium`, `/cambiar-de-asesoria`, `/gestoria-premium-autonomos`, `/asesor-fiscal-espana`
- **Nuevo componente `TrackedCalLink`** — componente client reutilizable para enlaces Cal.com con tracking integrado

---

## Pendiente

### ~~Deploy del código~~ ✅ COMPLETADO (10 abril)

### ~~Importar conversiones nuevas en GA4~~ ✅ COMPLETADO (10 abril)

### ~~Fase 2 del blueprint~~ ✅ COMPLETADO (10 abril)
- 8 landings TOFU, 4 landings urgentes, /recursos, /comparativa, /testimonios
- Blog refactorizado a arquitectura modular
- Tracking gaps corregidos (view_landing, compare_table_interaction)
- LeadMagnetGate + API route
- Sitemap actualizado con 19 nuevas rutas

### Tu parte: Google Ads — Añadir Ad Groups restantes

#### Ad Group 2 en Campaña 1: PYMES/Empresas

1. Ve a Google Ads → Campañas → **TF | Search | Asesoría Fiscal**
2. Click en **Grupos de anuncios** → **+** (nuevo grupo de anuncios)
3. Nombre: `AG2 | Asesoría PYMES Empresas`

**Keywords** (copia y pega exacto):
```
[asesoría fiscal pymes]
[asesoría fiscal para empresas]
[asesor fiscal para pymes]
[asesoría fiscal y contable]
[contratar asesoría fiscal empresa]
"asesoría fiscal empresas pequeñas"
"gestoría para pymes España"
"asesoría integral pymes"
"asesoría fiscal estratégica empresa"
"departamento fiscal externo"
```

**RSA — Títulos** (15 títulos, max 30 caracteres cada uno):
```
Asesoría Fiscal Para PYMES
Asesor Fiscal de Empresas
Gestoría Integral PYMES
Fiscal + Contable + Laboral
Respuesta en Menos de 24h
Previsión de Impuestos
Reuniones de Seguimiento
Solicita Diagnóstico Gratis
Pide Tu Plaza Ahora
Habla Con Tu Asesor Hoy
Solo 20 Clientes al Año
Tu Departamento Fiscal
Sin Permanencia · Premium
Quedan Solo 5 Plazas
Plazas Limitadas Trimestre
```

**RSA — Descripciones** (4, max 90 caracteres):
```
No somos gestoría de volumen. Solo 20 clientes. Fiscal, contable, laboral y legal.
Diagnóstico gratuito para tu empresa. Planificación fiscal y reuniones periódicas.
Tu empresa merece un asesor que responda en 24h y anticipe problemas fiscales.
Asesoría integral premium. Previsión de impuestos, soporte directo y seguimiento.
```

**URL final**: `https://tufiscalista.com/asesoria-fiscal-para-pymes`
**Ruta visible**: tufiscalista.com/asesoria/pymes

---

#### Ad Group 3 en Campaña 1: Premium/Boutique

1. Mismo proceso: **Grupos de anuncios** → **+**
2. Nombre: `AG3 | Asesoría Premium Boutique`

**Keywords**:
```
[asesoría fiscal premium]
[asesoría fiscal personalizada]
[asesor fiscal dedicado]
[asesoría fiscal boutique]
"asesoría fiscal con seguimiento"
"asesoría fiscal proactiva"
"asesor fiscal personal"
"asesoría fiscal con reuniones"
```

**RSA — Títulos** (15):
```
Asesoría Fiscal Premium
Asesor Fiscal Personalizado
Asesoría Boutique España
Respuesta Real en 24 Horas
Planificación Estratégica
Soporte Directo · Criterio
No Más Gestorías Genéricas
Pide Tu Diagnóstico Gratis
Solicita Tu Plaza Ahora
Agenda Consulta Gratuita
Solo 20 Clientes al Año
Asesor Que Te Conoce
Sin Permanencia Ni Letra
Quedan Solo 5 Plazas
Últimas Plazas Trimestre
```

**RSA — Descripciones** (4):
```
Asesoría que va más allá del trámite. Criterio estratégico para cada decisión.
Tu asesor te conoce, anticipa y responde en 24h. No eres un número más.
Reuniones periódicas, previsión de impuestos y soporte. Diagnóstico gratuito.
Deja la gestoría de volumen. Trabaja con un equipo que anticipa por ti.
```

**URL final**: `https://tufiscalista.com/asesoria-fiscal-premium`
**Ruta visible**: tufiscalista.com/asesoria/premium

---

### ~~Completar keywords negativas~~ ✅ COMPLETADO (10 abril)

Ir a cada campaña → **Palabras clave** → **Palabras clave negativas** → **+** → Pegar las siguientes:

**Bloque 1 — Software/Apps** (phrase match):
```
software
programa
aplicación
excel
contaplus
sage
a3
contasol
holded
quipu
factorial
declarando
programa contabilidad
software fiscal
erp
```

**Bloque 2 — Países fuera de España** (phrase match):
```
méxico
mexico
argentina
colombia
chile
perú
peru
venezuela
ecuador
estados unidos
usa
francia
italia
reino unido
latinoamérica
latinoamerica
```

**Bloque 3 — Trámites DIY / Hacienda** (phrase match):
```
sede electrónica
hacienda cita
agencia tributaria
modelo 390
modelo 349
modelo 036
modelo 037
modelo 100
modelo 200
certificado digital
clave pin
declaración renta gratis
borrador renta
renta web
presentar declaración solo
```

**Bloque 4 — Formación / Educación** (phrase match):
```
máster
master
carrera
grado
estudiar
universidad
escuela
certificación
temario
apuntes
examen
oposición asesor
estudiar fiscalidad
```

**Bloque 5 — Servicios no ofrecidos** (phrase match):
```
abogado
abogada
penal
hipoteca
inmobiliaria
notario
registro mercantil
seguro
seguros
banco
crédito
extranjería
inmigración
visado
```

**Bloque 6 — Comparativas / Reviews** (phrase match):
```
comparativa
ranking
opiniones
reviews
mejor gestoría
top gestorías
listado gestorías
versus
vs
```

**Bloque 7 — Extras** (phrase match):
```
vacante
vacantes
ofertas empleo
bolsa de trabajo
cv
curriculum
contratar asesor
busco empleo
oferta de trabajo
se busca asesor
trabajar de asesor
cuánto gana un asesor
sueldo asesor fiscal
qué es
tutorial
definición
guía gratis
manual
cómo hacer la renta
cómo declarar
cómo rellenar
modelo ejemplo
calculadora irpf gratis
free
más barata
39 euros
desde 39
la más barata
precio bajo
tarifa plana 39
gestoría barata
```

---

### Prioridad Media (semana 2-3)

5. **Configurar scripts de automatización**
   - Script 03: Optimización semanal (programar lunes 8:00)
   - Script 04: Alerta de presupuesto (programar diario 22:00)

6. **Revisar términos de búsqueda**
   - Tras 3-5 días de datos, revisar qué busca la gente y añadir más negativas

7. **Monitorizar Quality Score**
   - Objetivo: >6 en semana 1, >8 en mes 2

### Prioridad Baja (mes 2+)

8. **Migrar bidding a Maximize Conversions** (cuando haya 15+ conversiones)
9. **Añadir textos destacados (callouts)** si no se añadieron
10. **Considerar campaña de Remarketing Display** (con budget extra)

---

## Resumen de eventos trackeados

| Evento | Dónde se dispara | Estado |
|---|---|---|
| `click_cta_primary` | Button component (todas las CTAs principales) | Activo en GA4 |
| `click_cta_secondary` | Button component (CTAs secundarias) | Activo en GA4 |
| `start_apply_form` | ApplyForm (primer focus) | Activo en GA4 |
| `submit_apply_form` | ApplyForm (envío exitoso) | ✅ Activo en GA4 + Google Ads |
| `submit_contact_form` | ContactForm (envío exitoso) | ✅ Activo en GA4 + Google Ads |
| `book_call` | HeroHome, ApplySection, ExitIntent, /aplicar, BlogCTA, /contacto, LandingTemplate, TOFUTemplate | ✅ Activo en GA4 + Google Ads |
| `click_whatsapp` | WhatsAppButton (flotante) | ✅ Activo en GA4 + Google Ads |
| `calculator_used` | FiscalCalculator | Activo en GA4 |
| `exit_intent_shown` | ExitIntent popup | Activo en GA4 |
| `scroll_50` | ScrollTracker | Activo en GA4 |
| `scroll_90` | ScrollTracker | Activo en GA4 |

---

## Presupuesto actual

| Campaña | €/día | €/mes (est.) |
|---|---|---|
| TF \| Search \| Asesoría Fiscal | 10€ | ~300€ |
| TF \| Search \| Cambiar de Gestoría | 7€ | ~210€ |
| **Total** | **17€** | **~510€** |
