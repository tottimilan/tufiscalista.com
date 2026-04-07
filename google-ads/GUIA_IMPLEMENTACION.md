# Guía de Implementación — Google Ads Tu Fiscalista

## Paso 0: Prerrequisitos

Antes de ejecutar los scripts, asegúrate de tener:

1. **Cuenta Google Ads activa** con facturación configurada
2. **Google Analytics 4** vinculado a Google Ads (Tools → Linked accounts → Google Analytics)
3. **Seguimiento de conversiones** configurado:
   - Ve a Tools → Conversions → New conversion action
   - Importa desde GA4: `submit_apply_form` y `book_call` (como conversiones primarias)
   - Importa `start_apply_form` y `click_cta_primary` (como secundarias/observación)

## Paso 1: Verificar tracking en la web

La web ya tiene implementado:
- ✅ GA4 (`NEXT_PUBLIC_GA_ID` en `.env.local`)
- ✅ Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID` en `.env.local`)
- ✅ Eventos: `submit_apply_form`, `start_apply_form`, `click_cta_primary`, `scroll_50/90`
- ✅ Cookie banner con consentimiento

**Añadir UTMs a las URLs de los anuncios** (ya configurado en los scripts con `tracking template`):
```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}
```

## Paso 2: Vincular GA4 con Google Ads

1. En Google Ads: Tools → Linked accounts → Google Analytics (GA4)
2. Selecciona la propiedad de tufiscalista.com
3. Acepta la vinculación
4. En GA4: Admin → Google Ads links → Verifica que está activo
5. En GA4: Admin → Data streams → Web → verifica que Enhanced measurement está ON

## Paso 3: Importar conversiones

1. En Google Ads: Goals → Conversions → New conversion action → Import → Google Analytics 4
2. Importa estos eventos:
   - `submit_apply_form` → Categoría: Lead → Valor: 150€ → Conteo: Una
   - `book_call` → Categoría: Lead → Valor: 100€ → Conteo: Una
   - `start_apply_form` → Categoría: Secondary → Valor: 10€ → Conteo: Una

## Paso 4: Ejecutar los scripts

### Script 01 — Crear campañas
1. Ve a Google Ads → Tools → Bulk Actions → Scripts
2. Haz clic en "+" para crear un nuevo script
3. Pega el contenido de `01-crear-campanas.js`
4. Haz clic en "Preview" para verificar
5. Si no hay errores, haz clic en "Run"
6. Resultado: 3 campañas creadas en PAUSED con 5 grupos de anuncios

### Script 02 — Extensiones de anuncio
1. Crea otro script nuevo
2. Pega `02-extensiones-anuncio.js`
3. Preview → Run
4. Resultado: 6 sitelinks, 8 callouts, 2 structured snippets

### Script 03 — Optimización semanal
1. Crea otro script nuevo
2. Pega `03-optimizacion-semanal.js`
3. **Programar**: Frequency → Weekly → Monday → 8:00 AM (Europe/Madrid)
4. Resultado: Cada lunes recibirás un informe por email con acciones automáticas

### Script 04 — Alerta de presupuesto
1. Crea otro script nuevo
2. Pega `04-alerta-presupuesto.js`
3. **Programar**: Frequency → Daily → 22:00 (Europe/Madrid)
4. Resultado: Alerta diaria si el gasto se descontrola

## Paso 5: Revisar y activar

1. Ve a Campaigns y revisa cada campaña
2. Verifica que las keywords, anuncios y extensiones se ven bien
3. Verifica que las landing pages cargan correctamente con los UTMs
4. **Activa las campañas** cambiando el estado a "Enabled"

## Paso 6: Configurar tracking template (UTMs automáticos)

En cada campaña, ve a Settings → Additional settings → Campaign URL options:

```
Tracking template: {lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={_campaign}&utm_term={keyword}&utm_content={creative}
```

Custom parameters:
- `{_campaign}` = el nombre de la campaña (sin espacios)

## Paso 7: Remarketing (manual)

La campaña de remarketing requiere crear una audiencia:
1. Ve a Tools → Audience manager → Audience lists
2. Crea nueva lista: "Visitantes tufiscalista.com — 30 días"
3. Fuente: Google Analytics
4. Condición: Cualquier visita a tufiscalista.com
5. Duración: 30 días
6. Crear una campaña de Display manualmente:
   - Nombre: "TF | Display | Remarketing"
   - Budget: 1,65€/día
   - Audiencia: la lista que creaste
   - Anuncio responsive de Display con:
     - Título: "¿Sigues Buscando Asesor Fiscal?"
     - Título largo: "Solo Quedan 5 Plazas — Diagnóstico Gratuito"
     - Descripción: "Asesoría fiscal boutique. Solo 20 clientes. Respuesta en 24h. Sin permanencia."
     - URL: https://tufiscalista.com/aplicar
     - Imágenes: captura de la web o logo

## Checklist post-activación

- [ ] Verificar que los anuncios se muestran (buscar "asesoría fiscal autónomos" en modo incógnito)
- [ ] Comprobar que el tracking registra clics (GA4 → Realtime)
- [ ] Comprobar que las conversiones se importan (dar 24-48h)
- [ ] Revisar términos de búsqueda tras 3 días → añadir negativas
- [ ] Revisar Quality Score tras 5-7 días
- [ ] Primer informe semanal automático (lunes)

## Soporte

Si algo no funciona o tienes dudas:
- Verifica que el GA4 Property ID (`NEXT_PUBLIC_GA_ID`) coincide con el que está vinculado en Google Ads
- Verifica que las conversiones aparecen en Goals → Conversions con status "Recording"
- Los scripts usan el prefijo "TF |" para identificar las campañas — no cambies el nombre
