"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PLAZAS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

const SESSION_KEY = "tf_exit_shown";

export function ExitIntent() {
  const [show, setShow] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (
      e.clientY > 0 ||
      window.innerWidth < 1024 ||
      sessionStorage.getItem(SESSION_KEY)
    )
      return;

    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);
    trackEvent("exit_intent_shown" as never);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [handleMouseLeave]);

  const remaining = PLAZAS.total - PLAZAS.ocupadas;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-primary/80 backdrop-blur-sm"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md rounded-xl border border-border bg-bg-secondary p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent-muted flex items-center justify-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl font-semibold text-text-primary mb-2">
              ¿Te vas sin tu diagnóstico gratuito?
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Es sin compromiso. Solo{" "}
              <span className="text-accent font-semibold">
                {remaining} plazas disponibles
              </span>{" "}
              este trimestre.
            </p>

            <div className="flex flex-col gap-3">
              <Button
                href="https://cal.com/el-asesor-fiscal/15min"
                size="md"
                className="w-full"
                trackAs="click_cta_primary"
              >
                Agendar llamada gratuita
              </Button>
              <Button
                href="/aplicar"
                variant="outline"
                size="md"
                className="w-full"
              >
                Solicitar plaza
              </Button>
            </div>

            <p className="mt-4 text-xs text-text-muted">
              Sin compromiso · Respuesta en 24h
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
