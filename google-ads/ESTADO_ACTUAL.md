# Estado Actual — Google Ads Tu Fiscalista
## Actualizado: 7 abril 2026

---

## Completado

### Paso 1: Vinculación GA4 con Google Ads
- GA4 (G-1NFWSRKB2F) vinculado con Google Ads (460-714-6998)
- Enhanced Measurement activado
- Etiqueta de Google detectada en tufiscalista.com

### Paso 2: Conversiones importadas
- `start_apply_form` → Envío de formulario para clientes potenciales
- `click_cta_primary` → Envío de formulario para clientes potenciales
- Pendiente de importar cuando aparezcan: `submit_apply_form`, `book_call`

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

### Paso 4: Keywords negativas básicas añadidas
- ~25 términos negativos añadidos a ambas campañas

### Mejoras al código web
- Tracking `book_call` añadido a enlaces Cal.com (HeroHome, ApplySection)
- EventName type ampliado con `calculator_used` y `exit_intent_shown`
- Eliminados los `as never` de ExitIntent y FiscalCalculator

---

## Pendiente

### Prioridad Alta (hacer pronto)

1. **Añadir Ad Group 2 a Campaña 1: PYMES/Empresas**
   - Nombre: AG2 | Asesoría PYMES Empresas
   - Landing: /asesoria-fiscal-para-pymes
   - Keywords:
     - [asesoría fiscal pymes]
     - [asesoría fiscal para empresas]
     - [asesor fiscal para pymes]
     - [asesoría fiscal y contable]
     - [contratar asesoría fiscal empresa]
     - "asesoría fiscal empresas pequeñas"
     - "gestoría para pymes España"
     - "asesoría integral pymes"
     - "asesoría fiscal estratégica empresa"
     - "departamento fiscal externo"
   - Títulos: Asesoría Fiscal Para PYMES, Asesor Fiscal de Empresas, Gestoría Integral PYMES, Fiscal + Contable + Laboral, Respuesta en Menos de 24h, Previsión de Impuestos, Reuniones de Seguimiento, Solicita Diagnóstico Gratis, Pide Tu Plaza Ahora, Habla Con Tu Asesor Hoy, Solo 20 Clientes al Año, Tu Departamento Fiscal, Sin Permanencia · Premium, Quedan Solo 5 Plazas, Plazas Limitadas Trimestre
   - Descripciones:
     - No somos gestoría de volumen. Solo 20 clientes. Fiscal, contable, laboral y legal.
     - Diagnóstico gratuito para tu empresa. Planificación fiscal y reuniones periódicas.
     - Tu empresa merece un asesor que responda en 24h y anticipe problemas fiscales.
     - Asesoría integral premium. Previsión de impuestos, soporte directo y seguimiento.

2. **Añadir Ad Group 3 a Campaña 1: Premium/Boutique**
   - Nombre: AG3 | Asesoría Premium Boutique
   - Landing: /asesoria-fiscal-premium
   - Keywords:
     - [asesoría fiscal premium]
     - [asesoría fiscal personalizada]
     - [asesor fiscal dedicado]
     - [asesoría fiscal boutique]
     - "asesoría fiscal con seguimiento"
     - "asesoría fiscal proactiva"
     - "asesor fiscal personal"
     - "asesoría fiscal con reuniones"
   - Títulos: Asesoría Fiscal Premium, Asesor Fiscal Personalizado, Asesoría Boutique España, Respuesta Real en 24 Horas, Planificación Estratégica, Soporte Directo · Criterio, No Más Gestorías Genéricas, Pide Tu Diagnóstico Gratis, Solicita Tu Plaza Ahora, Agenda Consulta Gratuita, Solo 20 Clientes al Año, Asesor Que Te Conoce, Sin Permanencia Ni Letra, Quedan Solo 5 Plazas, Últimas Plazas Trimestre
   - Descripciones:
     - Asesoría que va más allá del trámite. Criterio estratégico para cada decisión.
     - Tu asesor te conoce, anticipa y responde en 24h. No eres un número más.
     - Reuniones periódicas, previsión de impuestos y soporte. Diagnóstico gratuito.
     - Deja la gestoría de volumen. Trabaja con un equipo que anticipa por ti.

3. **Completar keywords negativas (~120 términos)**
   - Faltan por añadir: software (taxdown, contaplus, sage, a3, holded, quipu, erp), países (méxico, argentina, colombia, chile, perú, venezuela, usa, francia), trámites DIY (modelo 390, 349, 036, 037, certificado digital, clave pin, borrador renta, renta web), formación (máster, carrera, grado, universidad, certificación, temario), servicios no ofrecidos (penal, hipoteca, inmobiliaria, notario, seguros, extranjería, inmigración), comparativas (ranking, reviews, top gestorías, versus)

4. **Importar conversiones pendientes en GA4**
   - Disparar `submit_apply_form` y `book_call` en la web (enviar formulario + clic Cal.com)
   - Esperar 24-48h
   - Importar en Google Ads → Objetivos → Conversiones

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
11. **Deploy cambios de tracking al código web** (git push)

---

## Presupuesto actual

| Campaña | €/día | €/mes (est.) |
|---|---|---|
| TF \| Search \| Asesoría Fiscal | 10€ | ~300€ |
| TF \| Search \| Cambiar de Gestoría | 7€ | ~210€ |
| **Total** | **17€** | **~510€** |
