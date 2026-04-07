/**
 * Google Ads Script — Tu Fiscalista
 * Script 4: Alerta de presupuesto y rendimiento
 *
 * INSTRUCCIONES:
 * Programar ejecución DIARIA.
 * Envía alerta si el gasto diario supera el umbral
 * o si hay anomalías en el rendimiento.
 */

var CONFIG = {
  EMAIL: "info@tufiscalista.com",
  MONTHLY_BUDGET: 500,
  DAILY_ALERT_THRESHOLD: 20, // alertar si se gasta >20€ en un día
  LOW_CTR_ALERT: 0.02,       // alertar si CTR < 2%
};

function main() {
  var today = Utilities.formatDate(new Date(), "Europe/Madrid", "yyyyMMdd");
  var monthStart = today.substring(0, 6) + "01";
  var alerts = [];

  // Gasto del mes hasta hoy
  var monthlySpend = 0;
  var dailySpend = 0;

  var campaigns = AdsApp.campaigns()
    .withCondition("campaign.name CONTAINS 'TF |'")
    .get();

  while (campaigns.hasNext()) {
    var campaign = campaigns.next();
    var monthStats = campaign.getStatsFor(monthStart, today);
    var dayStats = campaign.getStatsFor(today, today);

    monthlySpend += monthStats.getCost();
    dailySpend += dayStats.getCost();
  }

  // Alerta de gasto diario excesivo
  if (dailySpend > CONFIG.DAILY_ALERT_THRESHOLD) {
    alerts.push("⚠ GASTO DIARIO ALTO: " + dailySpend.toFixed(2) + "€ (umbral: " +
                CONFIG.DAILY_ALERT_THRESHOLD + "€)");
  }

  // Alerta de presupuesto mensual
  var daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  var currentDay = new Date().getDate();
  var paceEstimate = (monthlySpend / currentDay) * daysInMonth;

  if (paceEstimate > CONFIG.MONTHLY_BUDGET * 1.1) {
    alerts.push("⚠ RITMO DE GASTO ALTO: Proyección mensual = " + paceEstimate.toFixed(2) +
                "€ (presupuesto: " + CONFIG.MONTHLY_BUDGET + "€)");
  }

  // Alerta de bajo rendimiento
  var campaigns2 = AdsApp.campaigns()
    .withCondition("campaign.name CONTAINS 'TF |'")
    .withCondition("campaign.status = ENABLED")
    .get();

  while (campaigns2.hasNext()) {
    var c = campaigns2.next();
    var stats = c.getStatsFor(today, today);
    var impressions = stats.getImpressions();
    var clicks = stats.getClicks();

    if (impressions > 100 && clicks > 0) {
      var ctr = clicks / impressions;
      if (ctr < CONFIG.LOW_CTR_ALERT) {
        alerts.push("⚠ CTR BAJO en '" + c.getName() + "': " +
                    (ctr * 100).toFixed(2) + "% (umbral: " +
                    (CONFIG.LOW_CTR_ALERT * 100) + "%)");
      }
    }
  }

  // Enviar alerta si hay algo
  if (alerts.length > 0) {
    var body = "ALERTAS Tu Fiscalista — Google Ads\n" +
               "Fecha: " + today + "\n\n" +
               alerts.join("\n") + "\n\n" +
               "Gasto hoy: " + dailySpend.toFixed(2) + "€\n" +
               "Gasto mes: " + monthlySpend.toFixed(2) + "€ / " +
               CONFIG.MONTHLY_BUDGET + "€\n" +
               "Proyección mes: " + paceEstimate.toFixed(2) + "€";

    MailApp.sendEmail({
      to: CONFIG.EMAIL,
      subject: "[⚠ ALERTA] Tu Fiscalista Ads — " + today,
      body: body,
    });

    Logger.log("Alertas enviadas: " + alerts.length);
  } else {
    Logger.log("Sin alertas. Gasto hoy: " + dailySpend.toFixed(2) +
               "€ | Mes: " + monthlySpend.toFixed(2) + "€");
  }
}
