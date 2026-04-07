/**
 * Google Ads Script — Tu Fiscalista
 * Script 1: Crear estructura completa de campañas
 *
 * INSTRUCCIONES:
 * 1. Ve a tu cuenta de Google Ads → Herramientas → Scripts
 * 2. Crea un nuevo script
 * 3. Pega este código
 * 4. Ejecuta "Preview" primero para verificar
 * 5. Si todo se ve bien, ejecuta "Run"
 *
 * IMPORTANTE: Las campañas se crean en estado PAUSED
 * para que puedas revisarlas antes de activar.
 */

var CONFIG = {
  DAILY_BUDGET_C1: 5.80,   // Autónomos Insatisfechos (35%)
  DAILY_BUDGET_C2: 5.00,   // PYMES Búsqueda Activa (30%)
  DAILY_BUDGET_C3: 4.15,   // Cambiar de Gestoría (25%)
  DAILY_BUDGET_C4: 1.65,   // Remarketing Display (10%)
  BASE_URL: "https://tufiscalista.com",
  START_DATE: getFormattedDate(1),
  END_DATE: getFormattedDate(90),
};

function main() {
  Logger.log("=== Tu Fiscalista — Creación de Campañas Google Ads ===");
  Logger.log("Fecha: " + new Date().toISOString());

  createCampaign1_Autonomos();
  createCampaign2_PYMES();
  createCampaign3_CambiarGestoria();

  Logger.log("\n=== COMPLETADO ===");
  Logger.log("Revisa las campañas en tu cuenta (están en PAUSED).");
  Logger.log("Actívalas cuando hayas verificado que todo es correcto.");
  Logger.log("NOTA: La campaña de Remarketing (C4) requiere configuración");
  Logger.log("manual de audiencia en la interfaz de Google Ads.");
}

// ==========================================
// CAMPAÑA 1: AUTÓNOMOS INSATISFECHOS
// ==========================================
function createCampaign1_Autonomos() {
  Logger.log("\n--- Creando Campaña 1: Autónomos Insatisfechos ---");

  var campaignName = "TF | Search | Autónomos Insatisfechos";

  var campaignIterator = AdsApp.campaigns()
    .withCondition("campaign.name = '" + campaignName + "'")
    .get();

  if (campaignIterator.hasNext()) {
    Logger.log("⚠ La campaña '" + campaignName + "' ya existe. Saltando.");
    return;
  }

  var campaignOperation = AdsApp.newCampaignBuilder()
    .withName(campaignName)
    .withBudget(CONFIG.DAILY_BUDGET_C1)
    .withBiddingStrategy("MANUAL_CPC")
    .withAdSchedules([
      {dayOfWeek: "MONDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "TUESDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "WEDNESDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "THURSDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "FRIDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "SATURDAY", startHour: 9, startMinute: 0, endHour: 14, endMinute: 0},
      {dayOfWeek: "SUNDAY", startHour: 9, startMinute: 0, endHour: 14, endMinute: 0},
    ])
    .withStartDate(CONFIG.START_DATE)
    .withEndDate(CONFIG.END_DATE)
    .build();

  var campaign = campaignOperation.getResult();
  campaign.pause();
  campaign.addLocation(2724); // España

  // Grupo 1A: Búsqueda directa asesoría autónomos
  var adGroup1A = campaign.newAdGroupBuilder()
    .withName("1A | Asesoría Autónomos Directa")
    .withCpc(2.80)
    .build()
    .getResult();

  // Keywords - Grupo 1A
  var keywords1A = [
    {text: "[asesoría fiscal autónomos]", bid: 3.00},
    {text: "[asesor fiscal para autónomos]", bid: 2.80},
    {text: "\"asesoría fiscal autónomos online\"", bid: 2.50},
    {text: "\"asesoría fiscal para autónomos\"", bid: 2.80},
    {text: "\"gestoría para autónomos online\"", bid: 2.20},
    {text: "\"asesor fiscal autónomos España\"", bid: 2.50},
    {text: "[mejor asesoría fiscal autónomos]", bid: 3.20},
    {text: "\"asesoría fiscal autónomos personalizada\"", bid: 2.00},
    {text: "\"asesoría online autónomos\"", bid: 2.00},
    {text: "[asesoría fiscal freelance]", bid: 2.20},
  ];

  keywords1A.forEach(function(kw) {
    adGroup1A.newKeywordBuilder()
      .withText(kw.text)
      .withCpc(kw.bid)
      .build();
  });

  // Anuncio RSA - Grupo 1A
  adGroup1A.newAd().responsiveSearchAdBuilder()
    .withHeadlines([
      {text: "Asesoría Fiscal Autónomos", pinnedField: "HEADLINE_1"},
      {text: "Solo 20 Clientes · Premium"},
      {text: "Tu Asesor Fiscal Personal"},
      {text: "Máximo 20 Clientes al Año"},
      {text: "Diagnóstico Fiscal Gratuito"},
      {text: "Respuesta en Menos de 24h"},
      {text: "Planificación Fiscal Real"},
      {text: "Sin Permanencia · Sin Letra"},
      {text: "Asesoría Boutique España"},
      {text: "Quedan Solo 5 Plazas"},
      {text: "Deja de Apagar Fuegos"},
      {text: "Asesor Dedicado · Directo"},
      {text: "Optimiza Tu IRPF e IVA"},
      {text: "Tu Fiscalista · Premium"},
      {text: "Atención Real, No Robots"},
    ])
    .withDescriptions([
      {text: "Asesoría fiscal boutique. Máximo 20 clientes. Planificación, seguimiento y criterio real."},
      {text: "Solo 5 plazas disponibles este trimestre. Diagnóstico fiscal gratuito. Sin permanencia."},
      {text: "Tu asesor te conoce, anticipa y responde en menos de 24h. No eres un número más."},
      {text: "Deja de perder horas con modelos trimestrales. Nosotros gestionamos, tú facturas."},
    ])
    .withFinalUrl(CONFIG.BASE_URL + "/asesoria-fiscal-para-autonomos")
    .withPath1("asesoria")
    .withPath2("autonomos")
    .build();

  // Grupo 1B: Dolor específico
  var adGroup1B = campaign.newAdGroupBuilder()
    .withName("1B | Dolor Autónomos")
    .withCpc(2.50)
    .build()
    .getResult();

  var keywords1B = [
    {text: "\"mi gestor no me responde\"", bid: 2.00},
    {text: "\"cambiar de asesor fiscal\"", bid: 2.80},
    {text: "\"asesoría fiscal que responda rápido\"", bid: 2.50},
    {text: "\"asesoría fiscal con seguimiento\"", bid: 2.20},
    {text: "\"asesoría fiscal proactiva\"", bid: 2.50},
    {text: "\"asesor fiscal dedicado\"", bid: 2.20},
    {text: "\"asesor fiscal personal\"", bid: 2.50},
    {text: "\"gestor fiscal rápido\"", bid: 2.00},
  ];

  keywords1B.forEach(function(kw) {
    adGroup1B.newKeywordBuilder()
      .withText(kw.text)
      .withCpc(kw.bid)
      .build();
  });

  adGroup1B.newAd().responsiveSearchAdBuilder()
    .withHeadlines([
      {text: "¿Tu Gestor No Responde?", pinnedField: "HEADLINE_1"},
      {text: "Cambia a Asesoría Premium"},
      {text: "Respuesta Real en 24 Horas"},
      {text: "Solo 20 Clientes al Año"},
      {text: "Diagnóstico Gratuito Ahora"},
      {text: "Asesor Fiscal Personal"},
      {text: "Sin Permanencia Ni Riesgo"},
      {text: "Quedan Solo 5 Plazas"},
      {text: "Planificación Fiscal Real"},
      {text: "Tu Fiscalista · Boutique"},
      {text: "Deja de Perder el Tiempo"},
      {text: "Asesor Dedicado a Ti"},
      {text: "Trato Directo · Criterio"},
      {text: "Cansado de Esperar?"},
      {text: "Mereces Algo Mejor"},
    ])
    .withDescriptions([
      {text: "Tu asesor te responde en 24h, te conoce y anticipa problemas. Solo 20 clientes. Boutique."},
      {text: "Harto de esperar respuestas? Diagnóstico gratuito y traspaso sin complicaciones."},
      {text: "Asesoría fiscal con criterio. Reuniones periódicas, previsiones claras y soporte directo."},
      {text: "No mereces un gestor que no te escucha. Solo 5 plazas este trimestre. Solicita la tuya."},
    ])
    .withFinalUrl(CONFIG.BASE_URL + "/asesoria-fiscal-premium")
    .withPath1("asesoria")
    .withPath2("premium")
    .build();

  addNegativeKeywords(campaign);
  Logger.log("✓ Campaña 1 creada con 2 grupos de anuncios.");
}

// ==========================================
// CAMPAÑA 2: PYMES BÚSQUEDA ACTIVA
// ==========================================
function createCampaign2_PYMES() {
  Logger.log("\n--- Creando Campaña 2: PYMES Búsqueda Activa ---");

  var campaignName = "TF | Search | PYMES Búsqueda Activa";

  var campaignIterator = AdsApp.campaigns()
    .withCondition("campaign.name = '" + campaignName + "'")
    .get();

  if (campaignIterator.hasNext()) {
    Logger.log("⚠ La campaña '" + campaignName + "' ya existe. Saltando.");
    return;
  }

  var campaignOperation = AdsApp.newCampaignBuilder()
    .withName(campaignName)
    .withBudget(CONFIG.DAILY_BUDGET_C2)
    .withBiddingStrategy("MANUAL_CPC")
    .withAdSchedules([
      {dayOfWeek: "MONDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "TUESDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "WEDNESDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "THURSDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "FRIDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "SATURDAY", startHour: 9, startMinute: 0, endHour: 14, endMinute: 0},
    ])
    .withStartDate(CONFIG.START_DATE)
    .withEndDate(CONFIG.END_DATE)
    .build();

  var campaign = campaignOperation.getResult();
  campaign.pause();
  campaign.addLocation(2724); // España

  // Grupo 2A: PYMES general
  var adGroup2A = campaign.newAdGroupBuilder()
    .withName("2A | Asesoría PYMES Directa")
    .withCpc(3.00)
    .build()
    .getResult();

  var keywords2A = [
    {text: "[asesoría fiscal pymes]", bid: 3.20},
    {text: "[asesoría fiscal para pymes]", bid: 3.00},
    {text: "\"asesoría fiscal empresas pequeñas\"", bid: 2.50},
    {text: "\"asesor fiscal para empresas\"", bid: 3.00},
    {text: "\"gestoría para pymes España\"", bid: 2.50},
    {text: "\"asesoría fiscal y contable pymes\"", bid: 2.80},
    {text: "[asesoría integral pymes]", bid: 2.80},
    {text: "\"asesoría fiscal estratégica empresa\"", bid: 2.50},
    {text: "\"asesoría fiscal empresa online\"", bid: 2.50},
    {text: "[asesor fiscal empresa]", bid: 3.00},
  ];

  keywords2A.forEach(function(kw) {
    adGroup2A.newKeywordBuilder()
      .withText(kw.text)
      .withCpc(kw.bid)
      .build();
  });

  adGroup2A.newAd().responsiveSearchAdBuilder()
    .withHeadlines([
      {text: "Asesoría Fiscal PYMES", pinnedField: "HEADLINE_1"},
      {text: "Solo 20 Clientes · Premium"},
      {text: "Asesoría Integral Empresas"},
      {text: "Fiscal + Contable + Laboral"},
      {text: "Máximo 20 Clientes al Año"},
      {text: "Diagnóstico Gratuito PYMES"},
      {text: "Respuesta en Menos de 24h"},
      {text: "Tu Departamento Fiscal"},
      {text: "Planificación Estratégica"},
      {text: "Sin Permanencia · Premium"},
      {text: "Quedan Solo 5 Plazas"},
      {text: "No Somos Gestoría Más"},
      {text: "Reuniones de Seguimiento"},
      {text: "Tu Fiscalista · Boutique"},
      {text: "Asesor Dedicado a Tu PYME"},
    ])
    .withDescriptions([
      {text: "No somos una gestoría de volumen. Solo 20 clientes. Fiscal, contable, laboral y legal incluido."},
      {text: "Diagnóstico gratuito para tu empresa. Planificación fiscal, reuniones periódicas y criterio."},
      {text: "Tu empresa merece un asesor que responda en 24h, anticipe problemas y optimice fiscalidad."},
      {text: "Asesoría integral premium. Reuniones de seguimiento, previsión impuestos y soporte directo."},
    ])
    .withFinalUrl(CONFIG.BASE_URL + "/asesoria-fiscal-para-pymes")
    .withPath1("asesoria")
    .withPath2("pymes")
    .build();

  // Grupo 2B: Búsqueda de valor
  var adGroup2B = campaign.newAdGroupBuilder()
    .withName("2B | PYMES Valor Diferencial")
    .withCpc(2.50)
    .build()
    .getResult();

  var keywords2B = [
    {text: "\"asesoría fiscal con reuniones\"", bid: 2.20},
    {text: "\"asesoría fiscal con planificación\"", bid: 2.50},
    {text: "\"asesoría fiscal proactiva empresas\"", bid: 2.50},
    {text: "\"asesoría fiscal premium empresas\"", bid: 3.00},
    {text: "\"departamento fiscal externo\"", bid: 2.50},
    {text: "\"asesoría fiscal personalizada empresa\"", bid: 2.50},
    {text: "\"contabilidad y fiscal empresa\"", bid: 2.20},
  ];

  keywords2B.forEach(function(kw) {
    adGroup2B.newKeywordBuilder()
      .withText(kw.text)
      .withCpc(kw.bid)
      .build();
  });

  adGroup2B.newAd().responsiveSearchAdBuilder()
    .withHeadlines([
      {text: "Tu Departamento Fiscal", pinnedField: "HEADLINE_1"},
      {text: "Asesoría Premium Empresas"},
      {text: "Reuniones de Seguimiento"},
      {text: "Solo 20 Clientes al Año"},
      {text: "Fiscal + Contable + Legal"},
      {text: "Planificación Estratégica"},
      {text: "Diagnóstico Gratuito Hoy"},
      {text: "Respuesta en Menos de 24h"},
      {text: "Sin Permanencia · Premium"},
      {text: "Quedan Solo 5 Plazas"},
      {text: "Tu Fiscalista · Boutique"},
      {text: "Previsión de Impuestos"},
      {text: "Soporte Directo · Asesor"},
      {text: "No Más Gestoría Genérica"},
      {text: "Criterio Fiscal en Cada"},
    ])
    .withDescriptions([
      {text: "Somos tu departamento fiscal externo. Reuniones, planificación y seguimiento personalizado."},
      {text: "Asesoría que va más allá del trámite. Criterio estratégico para cada decisión de tu empresa."},
      {text: "Previsión de impuestos trimestral, soporte directo y reuniones periódicas. Solo 20 clientes."},
      {text: "Deja la gestoría genérica. Trabaja con un equipo que entiende tu negocio y anticipa por ti."},
    ])
    .withFinalUrl(CONFIG.BASE_URL + "/servicio-premium")
    .withPath1("servicio")
    .withPath2("premium")
    .build();

  addNegativeKeywords(campaign);
  Logger.log("✓ Campaña 2 creada con 2 grupos de anuncios.");
}

// ==========================================
// CAMPAÑA 3: CAMBIAR DE GESTORÍA
// ==========================================
function createCampaign3_CambiarGestoria() {
  Logger.log("\n--- Creando Campaña 3: Cambiar de Gestoría ---");

  var campaignName = "TF | Search | Cambiar de Gestoría";

  var campaignIterator = AdsApp.campaigns()
    .withCondition("campaign.name = '" + campaignName + "'")
    .get();

  if (campaignIterator.hasNext()) {
    Logger.log("⚠ La campaña '" + campaignName + "' ya existe. Saltando.");
    return;
  }

  var campaignOperation = AdsApp.newCampaignBuilder()
    .withName(campaignName)
    .withBudget(CONFIG.DAILY_BUDGET_C3)
    .withBiddingStrategy("MANUAL_CPC")
    .withAdSchedules([
      {dayOfWeek: "MONDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "TUESDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "WEDNESDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "THURSDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "FRIDAY", startHour: 7, startMinute: 0, endHour: 22, endMinute: 0},
      {dayOfWeek: "SATURDAY", startHour: 9, startMinute: 0, endHour: 14, endMinute: 0},
    ])
    .withStartDate(CONFIG.START_DATE)
    .withEndDate(CONFIG.END_DATE)
    .build();

  var campaign = campaignOperation.getResult();
  campaign.pause();
  campaign.addLocation(2724); // España

  // Grupo 3A: Intención de cambio
  var adGroup3A = campaign.newAdGroupBuilder()
    .withName("3A | Cambiar Gestoría Directa")
    .withCpc(2.50)
    .build()
    .getResult();

  var keywords3A = [
    {text: "[cambiar de gestoría]", bid: 2.80},
    {text: "[cambiar de asesor fiscal]", bid: 2.50},
    {text: "\"quiero cambiar de gestoría\"", bid: 2.50},
    {text: "\"cambiar gestoría online\"", bid: 2.20},
    {text: "\"cómo cambiar de asesor fiscal\"", bid: 2.00},
    {text: "\"no estoy contento con mi gestor\"", bid: 1.80},
    {text: "\"mi gestoría no funciona\"", bid: 1.80},
    {text: "\"cambiar asesor fiscal España\"", bid: 2.50},
    {text: "[cambiar asesoría fiscal]", bid: 2.50},
    {text: "\"gestoría que responda rápido\"", bid: 2.20},
    {text: "\"mejor gestoría que la mía\"", bid: 2.00},
    {text: "\"traspaso de gestoría\"", bid: 2.00},
    {text: "\"dejar mi gestoría\"", bid: 1.80},
  ];

  keywords3A.forEach(function(kw) {
    adGroup3A.newKeywordBuilder()
      .withText(kw.text)
      .withCpc(kw.bid)
      .build();
  });

  adGroup3A.newAd().responsiveSearchAdBuilder()
    .withHeadlines([
      {text: "Cambiar de Gestoría Fácil", pinnedField: "HEADLINE_1"},
      {text: "Nosotros Gestionamos Todo"},
      {text: "Solo 5 Plazas Disponibles"},
      {text: "Diagnóstico Gratuito Ahora"},
      {text: "Sin Permanencia Ni Riesgo"},
      {text: "Respuesta Real en 24h"},
      {text: "Cambio Guiado Paso a Paso"},
      {text: "Traspaso Sin Complicación"},
      {text: "Tu Fiscalista · Boutique"},
      {text: "Deja la Gestoría Volumen"},
      {text: "Asesor Personal Dedicado"},
      {text: "Nota la Diferencia Hoy"},
      {text: "Cansado de Tu Gestor?"},
      {text: "Atención Premium España"},
      {text: "Máximo 20 Clientes"},
    ])
    .withDescriptions([
      {text: "¿Tu gestor no responde? Nosotros gestionamos el traspaso completo. Sin complicaciones."},
      {text: "Máximo 20 clientes. Trato directo, respuesta en 24h y diagnóstico gratuito. Sin permanencia."},
      {text: "Cambiar de gestoría en 1-3 semanas. Te guiamos paso a paso. Solo 5 plazas este trimestre."},
      {text: "Deja de aguantar un servicio que no te aporta. Cambia a asesoría que escucha y anticipa."},
    ])
    .withFinalUrl(CONFIG.BASE_URL + "/cambiar-de-asesoria")
    .withPath1("cambiar")
    .withPath2("gestoria")
    .build();

  addNegativeKeywords(campaign);
  Logger.log("✓ Campaña 3 creada con 1 grupo de anuncios.");
}

// ==========================================
// KEYWORDS NEGATIVAS (compartidas)
// ==========================================
function addNegativeKeywords(campaign) {
  var negatives = [
    "gratis", "gratuita", "gratuito", "free",
    "curso", "formación", "master", "máster",
    "empleo", "trabajo", "ofertas empleo", "oposiciones",
    "becas", "prácticas",
    "software", "programa", "app", "excel", "plantilla", "descargar",
    "hacienda cita", "sede electrónica", "agencia tributaria",
    "modelo 303", "modelo 130", "modelo 390", "modelo 349",
    "barata", "económica", "low cost", "más barata",
    "comparativa", "ranking", "opiniones", "reviews",
    "qué es", "definición", "wikipedia",
    "sueldo asesor", "cuánto gana", "estudiar", "carrera",
  ];

  negatives.forEach(function(neg) {
    campaign.createNegativeKeyword("[" + neg + "]");
  });
}

// ==========================================
// UTILIDADES
// ==========================================
function getFormattedDate(daysFromNow) {
  var date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return year + month + day;
}
