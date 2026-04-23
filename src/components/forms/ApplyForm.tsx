"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";
import { Turnstile } from "@/components/ui/Turnstile";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "tf_apply_step1";

const step1Schema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(9, "Introduce un teléfono válido"),
});

const step2Schema = z.object({
  tipo: z.enum(["autonomo", "pyme"]).optional(),
  facturacion: z.string().optional(),
  mensaje: z.string().optional(),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;

const facturacionRanges = [
  "Menos de 30.000€",
  "30.000€ – 100.000€",
  "100.000€ – 300.000€",
  "300.000€ – 1.000.000€",
  "Más de 1.000.000€",
];

function FormInput({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-secondary mb-2">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1.5 text-xs text-text-muted">{hint}</p>
      )}
      {error && <p className="mt-1.5 text-xs text-danger">{error}</p>}
    </div>
  );
}

const inputClasses =
  "w-full rounded-md border border-border bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors";

export function ApplyForm() {
  const [step, setStep] = useState<1 | 2 | "success">(1);
  const [sending, setSending] = useState(false);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const mountTime = useRef(Date.now());
  const turnstileToken = useRef("");
  const lastFocusedField = useRef<string | null>(null);

  const handleTurnstile = useCallback((token: string) => {
    turnstileToken.current = token;
  }, []);

  const trackFieldFocus = useCallback((fieldName: string) => {
    lastFocusedField.current = fieldName;
    trackEvent("apply_form_field_focus", { field_name: fieldName });
  }, []);

  // Step 1 form
  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
  });

  // Step 2 form
  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
  });

  // Auto-save step 1 on change + restore on mount
  useEffect(() => {
    mountTime.current = Date.now();
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Step1Data>;
        if (parsed.nombre) step1Form.setValue("nombre", parsed.nombre);
        if (parsed.email) step1Form.setValue("email", parsed.email);
        if (parsed.telefono) step1Form.setValue("telefono", parsed.telefono);
      }
    } catch {}

    const sub = step1Form.watch((value) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      } catch {}
    });
    return () => sub.unsubscribe();
  }, [step1Form]);

  // Track abandon on page unload during step 1
  useEffect(() => {
    if (step !== 1) return;
    function handleUnload() {
      if (lastFocusedField.current) {
        trackEvent("apply_form_field_abandon", { last_field: lastFocusedField.current });
      }
    }
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [step]);

  async function onStep1Submit(data: Step1Data) {
    if (honeypotRef.current?.value) return;

    setSending(true);
    trackEvent("submit_apply_form");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          _step: "lead",
          _t: mountTime.current,
          _turnstile: turnstileToken.current,
        }),
      });
      if (res.status === 429) {
        alert("Demasiadas solicitudes. Espera un momento.");
        return;
      }
      if (!res.ok) {
        alert("Error al enviar. Inténtalo de nuevo.");
        return;
      }
      setStep1Data(data);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
      setStep(2);
    } catch {
      alert("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  }

  async function onStep2Submit(data: Step2Data) {
    if (!step1Data) return;
    setSending(true);
    trackEvent("submit_apply_form_qualified");

    try {
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...step1Data,
          ...data,
          _step: "qualified",
          _t: mountTime.current,
          _turnstile: turnstileToken.current,
        }),
      });
    } catch {}
    setStep("success");
    setSending(false);
  }

  function skipStep2() {
    setStep("success");
  }

  return (
    <AnimatePresence mode="wait">
      {step === "success" && (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-success-muted flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-success">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3">
            Solicitud recibida
          </h3>
          <p className="text-text-secondary max-w-md mx-auto">
            Te contactaremos en menos de 48h para agendar tu diagnóstico
            gratuito. Mientras tanto, puedes <a href="https://cal.com/el-asesor-fiscal/15min" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:text-accent-hover">agendar directamente una llamada de 15 min</a>.
          </p>
        </motion.div>
      )}

      {step === 1 && (
        <motion.form
          key="step1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={step1Form.handleSubmit(onStep1Submit)}
          onFocus={() => trackEvent("start_apply_form")}
          className="space-y-5"
          noValidate
        >
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="w-6 h-6 rounded-full bg-accent text-bg-primary flex items-center justify-center font-semibold text-[11px]">1</span>
              <span className="font-medium text-text-primary">Tus datos</span>
              <span className="mx-1 text-text-muted">·</span>
              <span className="w-6 h-6 rounded-full border border-border text-text-muted flex items-center justify-center font-semibold text-[11px]">2</span>
              <span>Contexto (opcional)</span>
            </div>
            <span className="text-xs text-text-muted">~30 segundos</span>
          </div>

          {/* Honeypot */}
          <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="apply-website">Website</label>
            <input
              ref={honeypotRef}
              id="apply-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <FormInput label="Nombre completo" error={step1Form.formState.errors.nombre?.message}>
            <input
              {...step1Form.register("nombre")}
              placeholder="Tu nombre"
              autoFocus
              autoComplete="name"
              onFocus={() => trackFieldFocus("nombre")}
              className={inputClasses}
            />
          </FormInput>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput label="Email" error={step1Form.formState.errors.email?.message}>
              <input
                {...step1Form.register("email")}
                type="email"
                placeholder="tu@email.com"
                autoComplete="email"
                onFocus={() => trackFieldFocus("email")}
                className={inputClasses}
              />
            </FormInput>

            <FormInput label="Teléfono" error={step1Form.formState.errors.telefono?.message}>
              <input
                {...step1Form.register("telefono")}
                type="tel"
                placeholder="+34 600 000 000"
                autoComplete="tel"
                onFocus={() => trackFieldFocus("telefono")}
                className={inputClasses}
              />
            </FormInput>
          </div>

          <Turnstile onVerify={handleTurnstile} onExpire={() => { turnstileToken.current = ""; }} />

          <Button type="submit" size="lg" className="w-full" disabled={sending}>
            {sending ? "Enviando…" : "Solicitar diagnóstico gratuito"}
          </Button>

          <p className="text-xs text-text-muted text-center">
            Te contactamos en menos de 48h. Sin compromiso, sin spam.
          </p>
        </motion.form>
      )}

      {step === 2 && (
        <motion.form
          key="step2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          onSubmit={step2Form.handleSubmit(onStep2Submit)}
          className="space-y-5"
        >
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="w-6 h-6 rounded-full bg-success text-white flex items-center justify-center font-semibold text-[11px]">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
              </span>
              <span className="text-text-secondary">Tus datos</span>
              <span className="mx-1 text-text-muted">·</span>
              <span className="w-6 h-6 rounded-full bg-accent text-bg-primary flex items-center justify-center font-semibold text-[11px]">2</span>
              <span className="font-medium text-text-primary">Contexto</span>
            </div>
            <span className="text-xs text-success">Solicitud guardada</span>
          </div>

          <div className="rounded-md border border-success/30 bg-success-muted/40 p-4 text-sm">
            <p className="text-text-primary font-medium mb-1">
              Solicitud recibida correctamente
            </p>
            <p className="text-text-secondary text-xs leading-relaxed">
              Cuéntanos un poco más sobre tu situación para que podamos
              prepararte mejor el diagnóstico. <strong>Es opcional.</strong>
            </p>
          </div>

          <FormInput label="Tipo de cliente" error={step2Form.formState.errors.tipo?.message}>
            <div className="flex gap-3">
              {(["autonomo", "pyme"] as const).map((type) => (
                <label
                  key={type}
                  className="flex-1 rounded-md border border-border px-4 py-3 text-center text-sm cursor-pointer transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/10 has-[:checked]:text-accent hover:border-accent/40"
                >
                  <input
                    {...step2Form.register("tipo")}
                    type="radio"
                    value={type}
                    className="sr-only"
                  />
                  {type === "autonomo" ? "Autónomo" : "Pyme / SL"}
                </label>
              ))}
            </div>
          </FormInput>

          <FormInput label="Facturación anual aproximada" error={step2Form.formState.errors.facturacion?.message}>
            <div className="relative">
              <select {...step2Form.register("facturacion")} className={cn(inputClasses, "appearance-none pr-10")}>
                <option value="">Selecciona un rango</option>
                {facturacionRanges.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </FormInput>

          <FormInput label="Mensaje" error={step2Form.formState.errors.mensaje?.message} hint="Cuéntanos brevemente tu situación o tus dudas principales">
            <textarea
              {...step2Form.register("mensaje")}
              rows={4}
              placeholder="Por ejemplo: facturo X, tengo dudas sobre Y, mi gestor actual no Z…"
              className={cn(inputClasses, "resize-none")}
            />
          </FormInput>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button type="submit" size="lg" className="flex-1" disabled={sending}>
              {sending ? "Enviando…" : "Enviar contexto"}
            </Button>
            <button
              type="button"
              onClick={skipStep2}
              className="text-sm text-text-muted hover:text-accent transition-colors px-4 py-2 cursor-pointer"
            >
              Omitir y terminar →
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
