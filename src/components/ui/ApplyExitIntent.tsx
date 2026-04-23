"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/tracking";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { PhoneLink } from "@/components/ui/PhoneLink";

const SESSION_KEY = "tf_apply_exit_shown";

export function ApplyExitIntent() {
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const nombreRef = useRef<HTMLInputElement>(null);
  const telefonoRef = useRef<HTMLInputElement>(null);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (
      e.clientY > 0 ||
      window.innerWidth < 1024 ||
      sessionStorage.getItem(SESSION_KEY)
    )
      return;

    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);
    trackEvent("exit_intent_apply_shown");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nombre = nombreRef.current?.value.trim() ?? "";
    const telefono = telefonoRef.current?.value.trim() ?? "";

    if (nombre.length < 2 || telefono.length < 9) {
      setError("Introduce nombre y teléfono válidos");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      // Usamos la misma API /api/apply con email placeholder reservado
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email: `exit-intent+${Date.now()}@callback.tufiscalista.com`,
          telefono,
          _step: "lead",
          _t: Date.now() - 5000,
        }),
      });

      if (!res.ok) {
        setError("Error al enviar. Inténtalo de nuevo.");
        setSubmitting(false);
        return;
      }

      trackEvent("submit_apply_form", { source: "exit_intent_callback" });
      setSubmitted(true);
    } catch {
      setError("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  }

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
            className="relative w-full max-w-md rounded-xl border border-border bg-bg-secondary p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-success-muted flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-text-primary mb-2">
                  Te llamamos en menos de 24h
                </h3>
                <p className="text-text-secondary text-sm">
                  Tu solicitud se ha enviado correctamente.
                </p>
              </div>
            ) : (
              <>
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent-muted flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-text-primary mb-2 text-center">
                  Espera. Te llamamos nosotros gratis.
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-5 text-center">
                  Déjanos tu nombre y teléfono. Te contactamos en menos de 24h
                  laborables. Sin compromiso.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    ref={nombreRef}
                    type="text"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    className="w-full rounded-md border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                    required
                  />
                  <input
                    ref={telefonoRef}
                    type="tel"
                    placeholder="+34 600 000 000"
                    autoComplete="tel"
                    className="w-full rounded-md border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
                    required
                  />
                  {error && (
                    <p className="text-xs text-danger">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-md font-sans transition-all duration-300 cursor-pointer whitespace-nowrap bg-accent text-bg-primary hover:bg-accent-hover font-semibold shadow-lg shadow-accent/10 px-6 py-3 text-base disabled:opacity-50"
                  >
                    {submitting ? "Enviando…" : "Que me llamen gratis"}
                  </button>
                </form>

                <div className="mt-5 pt-4 border-t border-border text-center">
                  <p className="text-xs text-text-muted mb-2">
                    O contacta directamente:
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <PhoneLink
                      source="apply_exit_intent"
                      className="text-accent hover:text-accent-hover font-medium"
                    />
                    <span className="text-text-muted">·</span>
                    <TrackedCalLink
                      href="https://cal.com/el-asesor-fiscal/15min"
                      source="apply_exit_intent"
                      showIcon={false}
                      className="text-accent hover:text-accent-hover font-medium"
                    >
                      Agendar llamada
                    </TrackedCalLink>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
