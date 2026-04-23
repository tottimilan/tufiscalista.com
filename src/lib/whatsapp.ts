import { SITE } from "@/lib/constants";

const WA_TEXT = "Hola, me interesa el servicio de asesoría fiscal";

/** wa.me con el mismo número que `SITE.phone` y mensaje predefinido. */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(WA_TEXT)}`;
