/**
 * Google Ads Script — Tu Fiscalista
 * Script 2: Crear extensiones de anuncio (Assets)
 *
 * INSTRUCCIONES:
 * Ejecutar DESPUÉS del Script 01.
 * Crea sitelinks, callouts y structured snippets a nivel de cuenta.
 */

var BASE_URL = "https://tufiscalista.com";

function main() {
  Logger.log("=== Tu Fiscalista — Extensiones de Anuncio ===");

  createSitelinks();
  createCalloutExtensions();
  createStructuredSnippets();

  Logger.log("\n=== COMPLETADO ===");
  Logger.log("Las extensiones se han creado a nivel de cuenta.");
  Logger.log("Google Ads las mostrará automáticamente con tus anuncios.");
}

function createSitelinks() {
  Logger.log("\n--- Creando Sitelinks ---");

  var sitelinks = [
    {
      text: "Diagnóstico Gratuito",
      url: BASE_URL + "/aplicar",
      desc1: "Análisis completo de tu situación",
      desc2: "Sin compromiso ni permanencia",
    },
    {
      text: "Servicio Premium",
      url: BASE_URL + "/servicio-premium",
      desc1: "Fiscal, contable, laboral y legal",
      desc2: "Todo con un solo interlocutor",
    },
    {
      text: "Casos Reales",
      url: BASE_URL + "/casos",
      desc1: "Resultados con clientes reales",
      desc2: "Hostelería, marketing, digital",
    },
    {
      text: "Calculadora Fiscal",
      url: BASE_URL + "/calculadora",
      desc1: "Estima tu ahorro fiscal",
      desc2: "Herramienta gratuita online",
    },
    {
      text: "Cómo Trabajamos",
      url: BASE_URL + "/como-trabajamos",
      desc1: "Nuestro método en 3 pasos",
      desc2: "Diagnóstico, plan, seguimiento",
    },
    {
      text: "Ver Precio",
      url: BASE_URL + "/precio",
      desc1: "Cuota personalizada clara",
      desc2: "Sin sorpresas ni permanencia",
    },
  ];

  sitelinks.forEach(function(sl) {
    var builder = AdsApp.extensions.newSitelinkBuilder()
      .withLinkText(sl.text)
      .withFinalUrl(sl.url)
      .withDescription1(sl.desc1)
      .withDescription2(sl.desc2);

    var result = builder.build();

    if (result.isSuccessful()) {
      Logger.log("  ✓ Sitelink: " + sl.text);
    } else {
      Logger.log("  ✗ Error creando sitelink: " + sl.text);
      var errors = result.getErrors();
      errors.forEach(function(e) { Logger.log("    - " + e); });
    }
  });
}

function createCalloutExtensions() {
  Logger.log("\n--- Creando Callout Extensions ---");

  var callouts = [
    "Máximo 20 Clientes",
    "Respuesta en 24h",
    "Sin Permanencia",
    "Diagnóstico Gratuito",
    "Toda España",
    "Asesor Personal Dedicado",
    "Reuniones Periódicas",
    "Previsión de Impuestos",
  ];

  callouts.forEach(function(text) {
    var result = AdsApp.extensions.newCalloutBuilder()
      .withText(text)
      .build();

    if (result.isSuccessful()) {
      Logger.log("  ✓ Callout: " + text);
    } else {
      Logger.log("  ✗ Error: " + text);
    }
  });
}

function createStructuredSnippets() {
  Logger.log("\n--- Creando Structured Snippets ---");

  var result = AdsApp.extensions.newSnippetBuilder()
    .withHeader("Servicios")
    .withValues([
      "Fiscalidad",
      "Contabilidad",
      "Laboral",
      "Legal",
      "Planificación",
      "Seguimiento",
    ])
    .build();

  if (result.isSuccessful()) {
    Logger.log("  ✓ Snippet: Servicios");
  } else {
    Logger.log("  ✗ Error creando snippet de servicios");
  }

  var result2 = AdsApp.extensions.newSnippetBuilder()
    .withHeader("Tipos")
    .withValues([
      "Autónomos",
      "PYMES",
      "Empresas",
      "Freelancers",
      "Startups",
      "Sociedades",
    ])
    .build();

  if (result2.isSuccessful()) {
    Logger.log("  ✓ Snippet: Tipos");
  } else {
    Logger.log("  ✗ Error creando snippet de tipos");
  }
}
