/**
 * Google Ads Script — Tu Fiscalista
 * Script 3: Optimización automática semanal
 *
 * INSTRUCCIONES:
 * Programar ejecución SEMANAL (lunes por la mañana).
 * Este script analiza rendimiento y toma acciones automáticas:
 *   - Pausa keywords sin rendimiento (alto gasto, 0 conversiones)
 *   - Alerta de keywords con quality score bajo
 *   - Genera informe de rendimiento por email
 */

var CONFIG = {
  EMAIL: "info@tufiscalista.com",
  DAYS_LOOKBACK: 7,
  MAX_CPC_NO_CONVERSION: 5.00,
  MIN_CLICKS_TO_EVALUATE: 10,
  LOW_QUALITY_SCORE: 5,
  HIGH_CPC_THRESHOLD: 4.00,
  LOW_CTR_THRESHOLD: 0.02,
};

function main() {
  var dateRange = getDateRange(CONFIG.DAYS_LOOKBACK);
  var report = [];

  report.push("=== INFORME SEMANAL — Tu Fiscalista Google Ads ===");
  report.push("Período: " + dateRange.start + " — " + dateRange.end);
  report.push("");

  var campaignSummary = getCampaignSummary(dateRange);
  report.push("--- RESUMEN POR CAMPAÑA ---");
  campaignSummary.forEach(function(line) { report.push(line); });

  var keywordActions = optimizeKeywords(dateRange);
  report.push("\n--- ACCIONES AUTOMÁTICAS ---");
  keywordActions.forEach(function(line) { report.push(line); });

  var qualityAlerts = checkQualityScores();
  report.push("\n--- ALERTAS QUALITY SCORE ---");
  qualityAlerts.forEach(function(line) { report.push(line); });

  var searchTerms = getNewNegativesSuggestions(dateRange);
  report.push("\n--- TÉRMINOS DE BÚSQUEDA A REVISAR ---");
  searchTerms.forEach(function(line) { report.push(line); });

  var fullReport = report.join("\n");
  Logger.log(fullReport);

  MailApp.sendEmail({
    to: CONFIG.EMAIL,
    subject: "[Tu Fiscalista Ads] Informe semanal — " + dateRange.end,
    body: fullReport,
  });

  Logger.log("\nInforme enviado a " + CONFIG.EMAIL);
}

function getCampaignSummary(dateRange) {
  var lines = [];
  var totalCost = 0;
  var totalClicks = 0;
  var totalImpressions = 0;
  var totalConversions = 0;

  var campaigns = AdsApp.campaigns()
    .withCondition("campaign.name CONTAINS 'TF |'")
    .get();

  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var stats = campaign.getStatsFor(dateRange.start, dateRange.end);

    var cost = stats.getCost();
    var clicks = stats.getClicks();
    var impressions = stats.getImpressions();
    var conversions = stats.getConversions();
    var ctr = impressions > 0 ? (clicks / impressions * 100).toFixed(2) : 0;
    var cpc = clicks > 0 ? (cost / clicks).toFixed(2) : 0;

    totalCost += cost;
    totalClicks += clicks;
    totalImpressions += impressions;
    totalConversions += conversions;

    lines.push(campaign.getName());
    lines.push("  Impresiones: " + impressions + " | Clics: " + clicks +
               " | CTR: " + ctr + "% | CPC: " + cpc + "€ | Coste: " +
               cost.toFixed(2) + "€ | Conv: " + conversions);
  }

  lines.push("\nTOTAL:");
  lines.push("  Gasto: " + totalCost.toFixed(2) + "€ | Clics: " + totalClicks +
             " | Impresiones: " + totalImpressions +
             " | Conversiones: " + totalConversions);

  if (totalClicks > 0) {
    lines.push("  CPC medio: " + (totalCost / totalClicks).toFixed(2) + "€");
  }
  if (totalConversions > 0) {
    lines.push("  CPA: " + (totalCost / totalConversions).toFixed(2) + "€");
  }

  return lines;
}

function optimizeKeywords(dateRange) {
  var lines = [];
  var paused = 0;
  var lowered = 0;

  var keywords = AdsApp.keywords()
    .withCondition("campaign.name CONTAINS 'TF |'")
    .withCondition("ad_group_criterion.status = ENABLED")
    .get();

  while (keywords.hasNext()) {
    var keyword = keywords.next();
    var stats = keyword.getStatsFor(dateRange.start, dateRange.end);

    var cost = stats.getCost();
    var clicks = stats.getClicks();
    var conversions = stats.getConversions();

    // Pausar keywords con alto gasto y sin conversiones
    if (clicks >= CONFIG.MIN_CLICKS_TO_EVALUATE &&
        conversions === 0 &&
        cost > CONFIG.MAX_CPC_NO_CONVERSION * CONFIG.MIN_CLICKS_TO_EVALUATE) {
      keyword.pause();
      lines.push("PAUSADA: '" + keyword.getText() + "' — " +
                 clicks + " clics, " + cost.toFixed(2) + "€, 0 conv");
      paused++;
    }

    // Bajar puja en keywords con CPC muy alto
    if (clicks > 0) {
      var avgCpc = cost / clicks;
      if (avgCpc > CONFIG.HIGH_CPC_THRESHOLD && conversions === 0) {
        var currentBid = keyword.bidding().getCpc();
        if (currentBid) {
          var newBid = currentBid * 0.8;
          keyword.bidding().setCpc(newBid);
          lines.push("PUJA REDUCIDA: '" + keyword.getText() + "' — CPC: " +
                     avgCpc.toFixed(2) + "€ → Puja: " + newBid.toFixed(2) + "€");
          lowered++;
        }
      }
    }
  }

  if (paused === 0 && lowered === 0) {
    lines.push("Ninguna acción automática necesaria esta semana.");
  } else {
    lines.push("\nResumen: " + paused + " keywords pausadas, " +
               lowered + " pujas reducidas.");
  }

  return lines;
}

function checkQualityScores() {
  var lines = [];

  var report = AdsApp.report(
    "SELECT ad_group_criterion.keyword.text, " +
    "ad_group_criterion.quality_info.quality_score, " +
    "campaign.name, ad_group.name " +
    "FROM keyword_view " +
    "WHERE campaign.name LIKE '%TF |%' " +
    "AND ad_group_criterion.status = 'ENABLED' " +
    "AND ad_group_criterion.quality_info.quality_score IS NOT NULL"
  );

  var rows = report.rows();
  var lowQsCount = 0;

  while (rows.hasNext()) {
    var row = rows.next();
    var qs = parseInt(row["ad_group_criterion.quality_info.quality_score"]);
    if (qs <= CONFIG.LOW_QUALITY_SCORE) {
      lines.push("⚠ QS=" + qs + " → '" +
                 row["ad_group_criterion.keyword.text"] + "' en " +
                 row["ad_group.name"]);
      lowQsCount++;
    }
  }

  if (lowQsCount === 0) {
    lines.push("Todas las keywords tienen Quality Score aceptable (>5).");
  } else {
    lines.push("\n" + lowQsCount + " keywords con QS bajo. Revisa relevancia de anuncios y landing.");
  }

  return lines;
}

function getNewNegativesSuggestions(dateRange) {
  var lines = [];

  var report = AdsApp.report(
    "SELECT search_term_view.search_term, " +
    "metrics.impressions, metrics.clicks, metrics.cost_micros, " +
    "metrics.conversions, campaign.name " +
    "FROM search_term_view " +
    "WHERE campaign.name LIKE '%TF |%' " +
    "AND segments.date BETWEEN '" + dateRange.start + "' AND '" + dateRange.end + "' " +
    "AND metrics.clicks > 0 " +
    "ORDER BY metrics.cost_micros DESC"
  );

  var rows = report.rows();
  var count = 0;

  while (rows.hasNext() && count < 20) {
    var row = rows.next();
    var clicks = parseInt(row["metrics.clicks"]);
    var cost = parseInt(row["metrics.cost_micros"]) / 1000000;
    var conversions = parseFloat(row["metrics.conversions"]);
    var searchTerm = row["search_term_view.search_term"];

    if (clicks >= 3 && conversions === 0 && cost > 5) {
      lines.push("REVISAR: '" + searchTerm + "' — " +
                 clicks + " clics, " + cost.toFixed(2) + "€, 0 conv → ¿Añadir como negativa?");
      count++;
    }
  }

  if (count === 0) {
    lines.push("No se detectaron términos de búsqueda problemáticos esta semana.");
  }

  return lines;
}

function getDateRange(daysBack) {
  var end = new Date();
  var start = new Date();
  start.setDate(start.getDate() - daysBack);

  return {
    start: Utilities.formatDate(start, "Europe/Madrid", "yyyyMMdd"),
    end: Utilities.formatDate(end, "Europe/Madrid", "yyyyMMdd"),
  };
}
