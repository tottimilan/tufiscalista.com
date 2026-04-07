# Estrategia Google Ads — Tu Fiscalista (v2 optimizada)
## Presupuesto: 500€/mes | Objetivo: Captación de clientes

---

## 1. Análisis del Mercado

### Contexto competitivo
- **Sector**: Asesorías fiscales / gestorías en España
- **CPC medio sector**: 1,50€ – 6€ (long-tail), hasta 10-25€ en keywords genéricas Madrid/Barcelona
- **Competidores directos**: Gestorías de volumen (39€/mes), TaxBoutique, Adlanter, Lextax, TaxDown, gestorías locales
- **Tu diferencial**: Boutique (máx 20 clientes), precio premium, trato personal, España entera

### Datos de benchmarks 2026 (sector servicios profesionales España)
- CPC medio: 2-5€ (long-tail exact/phrase)
- Tasa de conversión web: 3-5% (landing pages bien optimizadas como las nuestras)
- CPA medio sector: 50-100€ por lead
- Quality Score medio objetivo: 7-8+

### Estimaciones con 500€/mes
| Métrica | Estimación conservadora | Estimación optimista |
|---|---|---|
| CPC medio | 3,00€ | 2,20€ |
| Clics/mes | 167 | 227 |
| Tasa conversión | 3% | 5% |
| Leads/mes | 5 | 11 |
| CPA | 100€ | 45€ |

---

## 2. Best Practices Aplicadas (investigación 2026)

### Estructura: STAGs > SKAGs para presupuestos bajos
- Los STAGs (Single Theme Ad Groups) concentran datos de conversión y dan al algoritmo suficiente señal para optimizar
- Con 500€/mes, **2 campañas máximo** para no dispersar datos
- No usar Performance Max con <3.000€/mes
- No usar Broad Match hasta validar conversiones con exact/phrase

### RSA: Framework de 5 categorías
Cada anuncio RSA usa 15 headlines distribuidos en:
1. **Keyword-centric** (3-4): Reflejan exactamente lo que busca el usuario
2. **Beneficio** (3-4): Lo que gana el cliente
3. **CTA** (2-3): Acción clara que debe tomar
4. **USP/Social proof** (2-3): Diferenciación y confianza
5. **Urgencia/Escasez** (2): Motivo para actuar ahora

No pinear más de 1 headline (reduce CTR 10-15%). Ad Strength objetivo: Good o Excellent.

### Negativas: ~120 términos en 9 categorías
- Empleo/Carrera (20 términos)
- Informativas/DIY (15 términos)
- Software/Apps (17 términos)
- Competidores baratos/Gratis (16 términos)
- Países fuera de España (15 términos)
- Trámites DIY/Hacienda (16 términos)
- Formación/Educación (15 términos)
- Servicios no ofrecidos (15 términos)
- Comparativas/Reviews (9 términos)

### Bidding progresivo
- **Mes 1**: Manual CPC + Enhanced CPC (aprender, recopilar datos)
- **Mes 2-3**: Maximize Conversions (cuando haya 15+ conversiones)
- **Mes 3+**: Target CPA (cuando haya datos estables de CPA)

---

## 3. Estructura de Campañas

### Distribución del presupuesto (500€/mes = ~16,50€/día)

| Campaña | % Presupuesto | €/día | Objetivo |
|---|---|---|---|
| **TF \| Search \| Asesoría Fiscal** | 60% | 10€ | Captar autónomos, PYMES y clientes premium |
| **TF \| Search \| Cambiar de Gestoría** | 40% | 6,50€ | Captar descontentos con su gestor actual |

### Por qué 2 campañas y no 3-4
- Concentra datos de conversión (más rápido para que el algoritmo aprenda)
- Evita fragmentar un presupuesto ya limitado
- Las campañas cubren intenciones distintas: búsqueda activa vs. intención de cambio

---

## 4. Campaña A: Asesoría Fiscal (3 Ad Groups)

### AG1 — Asesoría Fiscal Autónomos
- **Landing**: `/asesoria-fiscal-para-autonomos`
- **Keywords** (10): Exact + Phrase match
- **CPC base**: 2,80€
- **Intención**: Autónomo buscando asesoría activamente

### AG2 — Asesoría Fiscal PYMES/Empresas
- **Landing**: `/asesoria-fiscal-para-pymes`
- **Keywords** (10): Exact + Phrase match
- **CPC base**: 3,00€
- **Intención**: PYME/empresa buscando servicio fiscal integral

### AG3 — Asesoría Fiscal Premium/Boutique
- **Landing**: `/asesoria-fiscal-premium`
- **Keywords** (8): Exact + Phrase match
- **CPC base**: 2,50€
- **Intención**: Quien busca servicio diferenciado, no gestoría de volumen

---

## 5. Campaña B: Cambiar de Gestoría (1 Ad Group)

### AG1 — Intención de cambio
- **Landing**: `/cambiar-de-asesoria`
- **Keywords** (12): Exact + Phrase match
- **CPC base**: 2,50€
- **Intención**: Persona descontenta con su gestor/gestoría actual

Estos leads suelen tener mayor tasa de conversión porque ya saben que necesitan el servicio y tienen una referencia de lo que NO quieren.

---

## 6. Extensiones de Anuncio (Assets)

### Sitelinks
| Texto | URL | Descripción |
|---|---|---|
| Diagnóstico Gratuito | /aplicar | Análisis de tu situación sin compromiso |
| Servicio Premium | /servicio-premium | Fiscal, contable, laboral y legal |
| Casos Reales | /casos | Resultados reales con clientes |
| Calculadora Fiscal | /calculadora | Estima tu ahorro fiscal gratis |
| Cómo Trabajamos | /como-trabajamos | Método en 3 pasos claros |
| Ver Precio | /precio | Cuota personalizada y transparente |

### Callouts
- Máximo 20 Clientes
- Respuesta en 24h
- Sin Permanencia
- Diagnóstico Gratuito
- Toda España
- Asesor Personal Dedicado
- Reuniones Periódicas
- Previsión de Impuestos

### Structured Snippets
- **Servicios**: Fiscalidad, Contabilidad, Laboral, Legal, Planificación, Seguimiento
- **Tipos**: Autónomos, PYMES, Empresas, Freelancers, Startups, Sociedades

---

## 7. Configuración Técnica

### Segmentación geográfica
- **Ubicación**: España
- **Opción**: "Personas que se encuentran en esta ubicación" (PRESENCE, no INTEREST)

### Idioma
- Español

### Dispositivos
- Sin ajustes iniciales (recopilar datos primero, ajustar en semana 3-4)

### Conversiones importadas de GA4
| Evento | Tipo | Valor |
|---|---|---|
| `submit_apply_form` | Primaria | 150€ |
| `book_call` | Primaria | 100€ |
| `start_apply_form` | Secundaria | 10€ |
| `click_cta_primary` | Secundaria | 5€ |

---

## 8. Plan de Optimización

### Semana 1-2: Lanzamiento y observación
- Verificar que tracking funciona (GA4 → Realtime)
- Monitorizar Quality Score diario
- Añadir keywords negativas de los informes de términos de búsqueda
- No tocar pujas ni estructura (dejar recopilar datos)

### Semana 3-4: Primer ajuste
- Pausar keywords con CPC > 5€ y 0 conversiones
- Potenciar keywords con CTR > 5%
- Ajustar pujas por dispositivo si hay diferencias claras
- Revisar ad copy: pausar headlines con rendimiento "Low"

### Mes 2: Optimización
- Si hay 15+ conversiones: migrar a Maximize Conversions
- Probar nuevas variaciones de headlines (A/B)
- Expandir keywords que convierten bien
- Revisar términos de búsqueda semanalmente

### Mes 3+: Escala
- Target CPA si hay datos estables
- Incrementar presupuesto en la campaña con mejor CPA
- Considerar Broad Match en keywords validadas
- Valorar añadir campaña de Remarketing Display (si hay budget extra)

---

## 9. KPIs Objetivo

| Métrica | Mes 1 | Mes 3 |
|---|---|---|
| Impresiones | 4.000+ | 7.000+ |
| Clics | 120+ | 200+ |
| CTR | > 4% | > 6% |
| CPC medio | < 3,50€ | < 2,50€ |
| Conversiones (leads) | 4-6 | 8-12 |
| CPA | < 100€ | < 60€ |
| Quality Score medio | > 6 | > 8 |

---

## 10. Scripts de Automatización

| Script | Función | Frecuencia |
|---|---|---|
| `01-crear-campanas.js` | Crea las 2 campañas con toda la estructura | Una vez |
| `02-extensiones-anuncio.js` | Crea sitelinks, callouts, snippets | Una vez |
| `03-optimizacion-semanal.js` | Informe + acciones automáticas por email | Semanal (lunes) |
| `04-alerta-presupuesto.js` | Alerta si gasto se descontrola | Diario |

---

*Estrategia v2 — Optimizada con investigación de best practices 2026*
*Generada para Tu Fiscalista — Abril 2026*
