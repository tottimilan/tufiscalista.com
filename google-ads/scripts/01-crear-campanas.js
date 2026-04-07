/**
 * Google Ads Script — Tu Fiscalista
 * Campaña Search optimizada — 500€/mes (2 campañas)
 *
 * Basado en best practices 2026:
 * - STAGs (Single Theme Ad Groups) para concentrar datos
 * - Solo exact + phrase match (no broad)
 * - RSA con 5 categorías: keyword, beneficio, CTA, USP, urgencia
 * - ~120 keywords negativas por categoría
 * - Manual CPC con Enhanced CPC (mes 1)
 *
 * Ejecutar UNA sola vez. Campañas se crean en PAUSED.
 */

var nextTempId = -1;
function getTempId() { return nextTempId--; }

function main() {
  var customerId = AdsApp.currentAccount().getCustomerId().replace(/-/g, "");
  Logger.log("=== Tu Fiscalista — Creación de Campañas Optimizadas ===");
  Logger.log("Customer ID: " + customerId);
  Logger.log("Fecha: " + new Date().toISOString());

  // EU Political Ads: declarar campañas existentes sin declarar (obligatorio desde 1 abril 2026)
  fixEuPoliticalDeclarations(customerId);

  // ── CAMPAÑA A: Búsqueda Asesoría Fiscal (60% = ~10€/día) ──
  createCampaign(customerId, {
    name: "TF | Search | Asesoría Fiscal",
    budgetMicros: 10000000, // 10€/día
    adGroups: [

      // ── Ad Group 1: Asesoría Fiscal Autónomos ──
      {
        name: "AG1 | Asesoría Autónomos",
        cpcMicros: 2800000,
        finalUrl: "https://tufiscalista.com/asesoria-fiscal-para-autonomos",
        path1: "asesoria",
        path2: "autonomos",
        keywords: [
          // Exact match — alta intención
          {text: "asesoría fiscal autónomos", match: "EXACT"},
          {text: "asesor fiscal para autónomos", match: "EXACT"},
          {text: "asesoría fiscal freelance", match: "EXACT"},
          {text: "gestoría para autónomos", match: "EXACT"},
          {text: "contratar asesor fiscal autónomo", match: "EXACT"},
          // Phrase match — variaciones naturales
          {text: "asesoría fiscal para autónomos online", match: "PHRASE"},
          {text: "asesoría fiscal autónomos España", match: "PHRASE"},
          {text: "mejor asesoría fiscal autónomos", match: "PHRASE"},
          {text: "asesoría online para autónomos", match: "PHRASE"},
          {text: "asesor fiscal autónomos personalizado", match: "PHRASE"},
        ],
        // RSA — 5 categorías: keyword(3) + beneficio(4) + CTA(3) + USP(3) + urgencia(2) = 15
        headlines: [
          // Keyword-centric (3)
          "Asesoría Fiscal Autónomos",
          "Asesor Fiscal Para Autónomos",
          "Gestoría Autónomos Online",
          // Beneficio (4)
          "Respuesta en Menos de 24h",
          "Planificación Fiscal Incluida",
          "Gestión IVA e IRPF Sin Líos",
          "Reuniones de Seguimiento",
          // CTA (3)
          "Solicita Diagnóstico Gratis",
          "Pide Tu Plaza Ahora",
          "Agenda Tu Consulta Hoy",
          // USP / Social proof (3)
          "Solo 20 Clientes al Año",
          "Asesor Dedicado y Personal",
          "Sin Permanencia · Boutique",
          // Urgencia / Escasez (2)
          "Quedan Solo 5 Plazas",
          "Plazas Limitadas Trimestre",
        ],
        descriptions: [
          "Asesoría fiscal boutique. Máximo 20 clientes. Planificación real, no tramitación.",
          "Diagnóstico fiscal gratuito. Tu asesor responde en 24h y anticipa. Sin permanencia.",
          "Deja de perder horas con modelos trimestrales. Nos encargamos de todo por ti.",
          "Asesor personal que conoce tu caso. Gestión integral: fiscal, contable y laboral.",
        ],
      },

      // ── Ad Group 2: Asesoría Fiscal PYMES / Empresas ──
      {
        name: "AG2 | Asesoría PYMES Empresas",
        cpcMicros: 3000000,
        finalUrl: "https://tufiscalista.com/asesoria-fiscal-para-pymes",
        path1: "asesoria",
        path2: "pymes",
        keywords: [
          {text: "asesoría fiscal pymes", match: "EXACT"},
          {text: "asesoría fiscal para empresas", match: "EXACT"},
          {text: "asesor fiscal para pymes", match: "EXACT"},
          {text: "asesoría fiscal y contable", match: "EXACT"},
          {text: "contratar asesoría fiscal empresa", match: "EXACT"},
          {text: "asesoría fiscal empresas pequeñas", match: "PHRASE"},
          {text: "gestoría para pymes España", match: "PHRASE"},
          {text: "asesoría integral pymes", match: "PHRASE"},
          {text: "asesoría fiscal estratégica empresa", match: "PHRASE"},
          {text: "departamento fiscal externo", match: "PHRASE"},
        ],
        headlines: [
          "Asesoría Fiscal Para PYMES",
          "Asesor Fiscal de Empresas",
          "Gestoría Integral PYMES",
          "Fiscal + Contable + Laboral",
          "Respuesta en Menos de 24h",
          "Previsión de Impuestos",
          "Reuniones de Seguimiento",
          "Solicita Diagnóstico Gratis",
          "Pide Tu Plaza Ahora",
          "Habla Con Tu Asesor Hoy",
          "Solo 20 Clientes al Año",
          "Tu Departamento Fiscal",
          "Sin Permanencia · Premium",
          "Quedan Solo 5 Plazas",
          "Plazas Limitadas Trimestre",
        ],
        descriptions: [
          "No somos gestoría de volumen. Solo 20 clientes. Fiscal, contable, laboral y legal.",
          "Diagnóstico gratuito para tu empresa. Planificación fiscal y reuniones periódicas.",
          "Tu empresa merece un asesor que responda en 24h y anticipe problemas fiscales.",
          "Asesoría integral premium. Previsión de impuestos, soporte directo y seguimiento.",
        ],
      },

      // ── Ad Group 3: Asesoría Fiscal Premium / Boutique ──
      {
        name: "AG3 | Asesoría Premium Boutique",
        cpcMicros: 2500000,
        finalUrl: "https://tufiscalista.com/asesoria-fiscal-premium",
        path1: "asesoria",
        path2: "premium",
        keywords: [
          {text: "asesoría fiscal premium", match: "EXACT"},
          {text: "asesoría fiscal personalizada", match: "EXACT"},
          {text: "asesor fiscal dedicado", match: "EXACT"},
          {text: "asesoría fiscal boutique", match: "EXACT"},
          {text: "asesoría fiscal con seguimiento", match: "PHRASE"},
          {text: "asesoría fiscal proactiva", match: "PHRASE"},
          {text: "asesor fiscal personal", match: "PHRASE"},
          {text: "asesoría fiscal con reuniones", match: "PHRASE"},
        ],
        headlines: [
          "Asesoría Fiscal Premium",
          "Asesor Fiscal Personalizado",
          "Asesoría Boutique España",
          "Respuesta Real en 24 Horas",
          "Planificación Estratégica",
          "Soporte Directo · Criterio",
          "No Más Gestorías Genéricas",
          "Pide Tu Diagnóstico Gratis",
          "Solicita Tu Plaza Ahora",
          "Agenda Consulta Gratuita",
          "Solo 20 Clientes al Año",
          "Asesor Que Te Conoce",
          "Sin Permanencia Ni Letra",
          "Quedan Solo 5 Plazas",
          "Últimas Plazas Trimestre",
        ],
        descriptions: [
          "Asesoría que va más allá del trámite. Criterio estratégico para cada decisión.",
          "Tu asesor te conoce, anticipa y responde en 24h. No eres un número más.",
          "Reuniones periódicas, previsión de impuestos y soporte. Diagnóstico gratuito.",
          "Deja la gestoría de volumen. Trabaja con un equipo que anticipa por ti.",
        ],
      },
    ],
  });

  // ── CAMPAÑA B: Cambiar de Gestoría (40% = ~6.50€/día) ──
  createCampaign(customerId, {
    name: "TF | Search | Cambiar de Gestoría",
    budgetMicros: 6500000, // 6.50€/día
    adGroups: [

      // ── Ad Group 1: Intención de cambio ──
      {
        name: "AG1 | Cambiar Gestoría",
        cpcMicros: 2500000,
        finalUrl: "https://tufiscalista.com/cambiar-de-asesoria",
        path1: "cambiar",
        path2: "gestoria",
        keywords: [
          {text: "cambiar de gestoría", match: "EXACT"},
          {text: "cambiar de asesor fiscal", match: "EXACT"},
          {text: "cambiar asesoría fiscal", match: "EXACT"},
          {text: "quiero cambiar de gestoría", match: "PHRASE"},
          {text: "cómo cambiar de asesor fiscal", match: "PHRASE"},
          {text: "no estoy contento con mi gestor", match: "PHRASE"},
          {text: "mi gestoría no responde", match: "PHRASE"},
          {text: "mi gestor no me responde", match: "PHRASE"},
          {text: "traspaso de gestoría", match: "PHRASE"},
          {text: "cambiar gestoría online", match: "PHRASE"},
          {text: "dejar mi gestoría", match: "PHRASE"},
          {text: "busco mejor asesor fiscal", match: "PHRASE"},
        ],
        headlines: [
          "Cambiar de Gestoría Fácil",
          "Cambiar de Asesor Fiscal",
          "Traspaso de Gestoría",
          "Gestionamos Todo el Cambio",
          "Respuesta Real en 24 Horas",
          "Cambio Guiado Paso a Paso",
          "Sin Complicaciones Ni Riesgo",
          "Solicita Diagnóstico Gratis",
          "Empieza el Cambio Ahora",
          "Pide Tu Plaza Hoy",
          "Solo 20 Clientes al Año",
          "Asesor Dedicado Desde Día 1",
          "Sin Permanencia · Premium",
          "Quedan Solo 5 Plazas",
          "Últimas Plazas Trimestre",
        ],
        descriptions: [
          "¿Tu gestor no responde? Gestionamos el traspaso completo en 1-3 semanas.",
          "Máximo 20 clientes. Trato directo, respuesta en 24h y diagnóstico gratuito.",
          "Cambiar de gestoría es fácil. Te guiamos paso a paso. Solo 5 plazas libres.",
          "Deja un servicio que no te aporta. Cambia a asesoría que escucha y anticipa.",
        ],
      },
    ],
  });

  Logger.log("\n=== COMPLETADO ===");
  Logger.log("2 campañas creadas en PAUSED con 4 ad groups en total.");
  Logger.log("Revisa en tu cuenta y actívalas cuando estés listo.");
}

// ═══════════════════════════════════════════
// CREAR CAMPAÑA COMPLETA VIA mutateAll
// ═══════════════════════════════════════════
function createCampaign(customerId, config) {
  Logger.log("\n--- Creando: " + config.name + " ---");

  var existing = AdsApp.search(
    "SELECT campaign.name FROM campaign WHERE campaign.name = '" + config.name + "'"
  );
  if (existing.hasNext()) {
    Logger.log("Ya existe '" + config.name + "'. Saltando.");
    return;
  }

  var operations = [];
  var startDate = getFormattedDate(1);
  var endDate = getFormattedDate(120);

  // Budget
  var budgetResource = "customers/" + customerId + "/campaignBudgets/" + getTempId();
  operations.push({
    campaignBudgetOperation: {
      create: {
        resourceName: budgetResource,
        name: config.name + " Budget",
        amountMicros: config.budgetMicros,
        deliveryMethod: "STANDARD",
        explicitlyShared: false,
      },
    },
  });

  // Campaign
  var campaignResource = "customers/" + customerId + "/campaigns/" + getTempId();
  operations.push({
    campaignOperation: {
      create: {
        resourceName: campaignResource,
        name: config.name,
        status: "PAUSED",
        advertisingChannelType: "SEARCH",
        campaignBudget: budgetResource,
        manualCpc: { enhancedCpcEnabled: true },
        startDate: startDate,
        endDate: endDate,
        networkSettings: {
          targetGoogleSearch: true,
          targetSearchNetwork: false,
          targetContentNetwork: false,
        },
        geoTargetTypeSetting: {
          positiveGeoTargetType: "PRESENCE",
          negativeGeoTargetType: "PRESENCE",
        },
        containsEuPoliticalAdvertising: "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING",
      },
    },
  });

  // Geo: España (2724)
  operations.push({
    campaignCriterionOperation: {
      create: {
        campaign: campaignResource,
        location: { geoTargetConstant: "geoTargetConstants/2724" },
      },
    },
  });

  // Language: Spanish (1003)
  operations.push({
    campaignCriterionOperation: {
      create: {
        campaign: campaignResource,
        language: { languageConstant: "languageConstants/1003" },
      },
    },
  });

  // ── NEGATIVE KEYWORDS (~120 términos) ──
  var negatives = getNegativeKeywords();
  negatives.forEach(function(neg) {
    operations.push({
      campaignCriterionOperation: {
        create: {
          campaign: campaignResource,
          negative: true,
          keyword: { text: neg.text, matchType: neg.match },
        },
      },
    });
  });

  // ── AD GROUPS, KEYWORDS, ADS ──
  config.adGroups.forEach(function(ag) {
    var adGroupId = getTempId();
    var adGroupResource = "customers/" + customerId + "/adGroups/" + adGroupId;

    operations.push({
      adGroupOperation: {
        create: {
          resourceName: adGroupResource,
          name: ag.name,
          campaign: campaignResource,
          status: "ENABLED",
          type: "SEARCH_STANDARD",
          cpcBidMicros: ag.cpcMicros,
        },
      },
    });

    ag.keywords.forEach(function(kw) {
      operations.push({
        adGroupCriterionOperation: {
          create: {
            adGroup: adGroupResource,
            status: "ENABLED",
            keyword: { text: kw.text, matchType: kw.match },
          },
        },
      });
    });

    var adResource = "customers/" + customerId + "/adGroupAds/" + adGroupId + "~" + getTempId();
    operations.push({
      adGroupAdOperation: {
        create: {
          resourceName: adResource,
          adGroup: adGroupResource,
          status: "ENABLED",
          ad: {
            finalUrls: [ag.finalUrl],
            responsiveSearchAd: {
              headlines: ag.headlines.map(function(h) { return { text: h }; }),
              descriptions: ag.descriptions.map(function(d) { return { text: d }; }),
              path1: ag.path1,
              path2: ag.path2,
            },
          },
        },
      },
    });
  });

  Logger.log("Enviando " + operations.length + " operaciones...");
  var results = AdsApp.mutateAll(operations);

  var errors = 0;
  for (var i = 0; i < results.length; i++) {
    if (!results[i].isSuccessful()) {
      Logger.log("ERROR op " + i + ": " + JSON.stringify(results[i].getErrors()));
      errors++;
    }
  }

  if (errors === 0) {
    Logger.log("OK — " + config.name + " creada correctamente.");
  } else {
    Logger.log("AVISO — " + errors + " errores al crear " + config.name);
  }
}

// ═══════════════════════════════════════════
// NEGATIVE KEYWORDS — ~120 términos
// Organizadas por categoría de intención
// ═══════════════════════════════════════════
function getNegativeKeywords() {
  var negs = [];

  // ── Empleo / Carrera (phrase match) ──
  var empleo = [
    "empleo", "trabajo", "vacante", "vacantes", "salario",
    "sueldo", "ofertas empleo", "bolsa de trabajo", "oposiciones",
    "prácticas", "becas", "cv", "curriculum", "contratar asesor",
    "busco empleo", "oferta de trabajo", "se busca asesor",
    "trabajar de asesor", "cuánto gana un asesor", "sueldo asesor fiscal",
  ];

  // ── Informativas / DIY (phrase match) ──
  var informativas = [
    "qué es", "cómo", "tutorial", "definición", "wikipedia",
    "pdf", "plantilla", "ejemplo", "guía gratis", "manual",
    "cómo hacer la renta", "cómo declarar", "cómo rellenar",
    "modelo ejemplo", "calculadora irpf gratis",
  ];

  // ── Software / Apps (phrase match) ──
  var software = [
    "software", "programa", "app", "aplicación", "excel",
    "taxdown", "contaplus", "sage", "a3", "contasol",
    "holded", "quipu", "factorial", "declarando",
    "programa contabilidad", "software fiscal", "erp",
  ];

  // ── Competidores baratos / Gratis (phrase match) ──
  var baratos = [
    "gratis", "gratuita", "gratuito", "free",
    "barata", "barato", "económica", "económico",
    "low cost", "más barata", "39 euros",
    "desde 39", "la más barata", "precio bajo",
    "tarifa plana 39", "gestoría barata",
  ];

  // ── Países fuera de España (phrase match) ──
  var paises = [
    "méxico", "mexico", "argentina", "colombia", "chile",
    "perú", "peru", "venezuela", "ecuador", "estados unidos",
    "usa", "francia", "italia", "reino unido",
    "latinoamérica", "latinoamerica",
  ];

  // ── Trámites DIY / Hacienda (phrase match) ──
  var tramites = [
    "sede electrónica", "hacienda cita", "agencia tributaria",
    "modelo 303", "modelo 130", "modelo 390", "modelo 349",
    "modelo 036", "modelo 037", "modelo 100", "modelo 200",
    "certificado digital", "clave pin", "declaración renta gratis",
    "borrador renta", "renta web", "presentar declaración solo",
  ];

  // ── Formación / Educación (phrase match) ──
  var formacion = [
    "curso", "máster", "master", "formación", "carrera",
    "grado", "estudiar", "universidad", "escuela",
    "certificación", "temario", "apuntes", "examen",
    "oposición asesor", "estudiar fiscalidad",
  ];

  // ── Servicios no ofrecidos (phrase match) ──
  var noOfrecidos = [
    "abogado", "abogada", "penal", "divorcio", "herencia",
    "hipoteca", "inmobiliaria", "notario", "registro mercantil",
    "seguro", "seguros", "banco", "crédito",
    "extranjería", "inmigración", "visado",
  ];

  // ── Comparativas / Reviews (phrase match) ──
  var comparativas = [
    "comparativa", "ranking", "opiniones", "reviews",
    "mejor gestoría", "top gestorías", "listado gestorías",
    "versus", "vs",
  ];

  function addCategory(terms, matchType) {
    terms.forEach(function(t) {
      negs.push({ text: t, match: matchType || "PHRASE" });
    });
  }

  addCategory(empleo);
  addCategory(informativas);
  addCategory(software);
  addCategory(baratos);
  addCategory(paises);
  addCategory(tramites);
  addCategory(formacion);
  addCategory(noOfrecidos);
  addCategory(comparativas);

  Logger.log("Negativas: " + negs.length + " términos");
  return negs;
}

// ═══════════════════════════════════════════
// UTILIDADES
// ═══════════════════════════════════════════
function fixEuPoliticalDeclarations(customerId) {
  Logger.log("\n--- Verificando declaración EU Political Ads ---");
  var undeclared = AdsApp.search(
    "SELECT campaign.id, campaign.name FROM campaign " +
    "WHERE campaign.missing_eu_political_advertising_declaration = true"
  );

  var ops = [];
  while (undeclared.hasNext()) {
    var row = undeclared.next();
    var campaignId = row.campaign.id;
    var campaignName = row.campaign.name;
    Logger.log("Declarando: " + campaignName + " (ID: " + campaignId + ")");
    ops.push({
      campaignOperation: {
        update: {
          resourceName: "customers/" + customerId + "/campaigns/" + campaignId,
          containsEuPoliticalAdvertising: "DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING",
        },
        updateMask: "contains_eu_political_advertising",
      },
    });
  }

  if (ops.length === 0) {
    Logger.log("OK — Todas las campañas ya están declaradas.");
    return;
  }

  var results = AdsApp.mutateAll(ops);
  var errors = 0;
  for (var i = 0; i < results.length; i++) {
    if (!results[i].isSuccessful()) {
      Logger.log("Error declarando: " + JSON.stringify(results[i].getErrors()));
      errors++;
    }
  }
  Logger.log("Declaradas " + (ops.length - errors) + " de " + ops.length + " campañas.");
}

function getFormattedDate(daysFromNow) {
  var d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  var y = d.getFullYear();
  var m = ("0" + (d.getMonth() + 1)).slice(-2);
  var dd = ("0" + d.getDate()).slice(-2);
  return y + "-" + m + "-" + dd;
}
