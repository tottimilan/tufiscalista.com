"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "tf_cookie_consent";

export type CookieConsent = "accepted" | "rejected" | null;

export function getCookieConsent(): CookieConsent {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COOKIE_KEY) as CookieConsent;
}

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lectura cliente-only de localStorage
    if (!consent) setShow(true);
  }, []);

  function respond(value: "accepted" | "rejected") {
    localStorage.setItem(COOKIE_KEY, value);
    setShow(false);
    if (value === "accepted") window.location.reload();
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 rounded-xl border border-border bg-bg-secondary/95 backdrop-blur-md p-5 shadow-2xl"
        >
          <p className="text-sm text-text-secondary leading-relaxed">
            Usamos cookies analíticas para mejorar la experiencia. No vendemos
            tus datos. Puedes aceptar o rechazar.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => respond("accepted")}
              className="flex-1 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-bg-primary transition-colors hover:bg-accent/90 cursor-pointer"
            >
              Aceptar
            </button>
            <button
              onClick={() => respond("rejected")}
              className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-secondary cursor-pointer"
            >
              Rechazar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
