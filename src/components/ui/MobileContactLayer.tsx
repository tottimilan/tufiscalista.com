"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { trackEvent } from "@/lib/tracking";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const SHOW_STICKY_AFTER_PX = 600;
const HIDE_ON_PATHS = ["/aplicar", "/contacto"];

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function WhatsAppFab({ className }: { className?: string }) {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackEvent("click_whatsapp", { source: "floating_button" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-110",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d={WA_PATH} />
      </svg>
    </motion.a>
  );
}

function WhatsAppOutlineLink({ source }: { source: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      onClick={() => trackEvent("click_whatsapp", { source })}
      className="flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent-muted text-accent transition-colors hover:bg-accent/10"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
        <path d={WA_PATH} />
      </svg>
    </a>
  );
}

/**
 * Capa de contacto persistente.
 * - Desktop (lg+): WhatsApp FAB siempre visible.
 * - Mobile (<lg):
 *    - Antes de hacer scroll: WhatsApp FAB visible.
 *    - Tras pasar SHOW_STICKY_AFTER_PX: el FAB desaparece y se muestra la
 *      barra inferior con [Solicitar diagnóstico + teléfono + WhatsApp]
 *      para evitar que el FAB se solape con la barra.
 * - Se oculta toda la capa móvil en rutas de conversión donde ya hay un
 *   formulario / CTA principal (HIDE_ON_PATHS).
 */
export function MobileContactLayer() {
  const [scrolled, setScrolled] = useState(false);
  const [hideMobile, setHideMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- detección de ruta cliente-only
    setHideMobile(HIDE_ON_PATHS.some((p) => path.startsWith(p)));

    const onScroll = () => setScrolled(window.scrollY > SHOW_STICKY_AFTER_PX);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showMobileSticky = scrolled && !hideMobile;
  const showMobileFab = !showMobileSticky && !hideMobile;

  return (
    <>
      {/* Desktop FAB: siempre visible */}
      <div className="hidden lg:block">
        <WhatsAppFab />
      </div>

      {/* Mobile FAB: visible hasta que aparece la barra inferior */}
      <div className="lg:hidden">
        <AnimatePresence>{showMobileFab && <WhatsAppFab key="mobile-fab" />}</AnimatePresence>
      </div>

      {/* Mobile sticky bar */}
      <AnimatePresence>
        {showMobileSticky && (
          <motion.div
            key="sticky-bar"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border bg-bg-primary/95 p-3 backdrop-blur-sm"
          >
            <Button
              href="/aplicar"
              size="sm"
              trackAs="click_cta_primary"
              className="flex-1"
            >
              Solicitar diagnóstico
            </Button>
            <PhoneLink
              source="sticky_mobile"
              showLabel={false}
              iconSize={20}
              className="flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent-muted text-accent hover:bg-accent/10"
            />
            <WhatsAppOutlineLink source="sticky_mobile" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
