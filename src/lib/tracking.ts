type EventName =
  | "view_landing"
  | "click_cta_primary"
  | "click_cta_secondary"
  | "start_apply_form"
  | "submit_apply_form"
  | "submit_apply_form_qualified"
  | "submit_contact_form"
  | "book_call"
  | "click_whatsapp"
  | "click_phone"
  | "download_lead_magnet"
  | "scroll_50"
  | "scroll_90"
  | "compare_table_interaction"
  | "calculator_used"
  | "exit_intent_shown"
  | "exit_intent_apply_shown"
  | "apply_form_field_focus"
  | "apply_form_field_abandon";

export function trackEvent(
  event: EventName,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", event, params);
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}
