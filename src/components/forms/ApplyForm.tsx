"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const schema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().min(9, "Introduce un teléfono válido"),
  tipo: z.enum(["autonomo", "pyme"], {
    message: "Selecciona una opción",
  }),
  facturacion: z.string().min(1, "Selecciona un rango"),
  mensaje: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

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
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-secondary mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-danger">{error}</p>
      )}
    </div>
  );
}

const inputClasses =
  "w-full rounded-md border border-border bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setSending(true);
    trackEvent("submit_apply_form");

    try {
      await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert("Error al enviar. Inténtalo de nuevo.");
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 rounded-full bg-success-muted flex items-center justify-center mx-auto mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-success"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-semibold text-text-primary mb-3">
            Solicitud recibida
          </h3>
          <p className="text-text-secondary max-w-md mx-auto">
            Revisaremos tu caso y te contactaremos en menos de 48h para agendar
            tu diagnóstico gratuito.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          onFocus={() => trackEvent("start_apply_form")}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput label="Nombre completo" error={errors.nombre?.message}>
              <input
                {...register("nombre")}
                placeholder="Tu nombre"
                className={inputClasses}
              />
            </FormInput>

            <FormInput label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                placeholder="tu@email.com"
                className={inputClasses}
              />
            </FormInput>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormInput label="Teléfono" error={errors.telefono?.message}>
              <input
                {...register("telefono")}
                type="tel"
                placeholder="+34 600 000 000"
                className={inputClasses}
              />
            </FormInput>

            <FormInput label="Tipo de cliente" error={errors.tipo?.message}>
              <div className="flex gap-3">
                {(["autonomo", "pyme"] as const).map((type) => (
                  <label
                    key={type}
                    className="flex-1 rounded-md border border-border px-4 py-3 text-center text-sm cursor-pointer transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/10 has-[:checked]:text-accent hover:border-accent/40"
                  >
                    <input
                      {...register("tipo")}
                      type="radio"
                      value={type}
                      className="sr-only"
                    />
                    {type === "autonomo" ? "Autónomo" : "Pyme / SL"}
                  </label>
                ))}
              </div>
            </FormInput>
          </div>

          <FormInput
            label="Facturación anual aproximada"
            error={errors.facturacion?.message}
          >
            <div className="relative">
              <select {...register("facturacion")} className={cn(inputClasses, "appearance-none pr-10")}>
                <option value="">Selecciona un rango</option>
                {facturacionRanges.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </div>
          </FormInput>

          <FormInput label="Mensaje (opcional)" error={errors.mensaje?.message}>
            <textarea
              {...register("mensaje")}
              rows={3}
              placeholder="Cuéntanos brevemente tu situación…"
              className={cn(inputClasses, "resize-none")}
            />
          </FormInput>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={sending}
          >
            {sending ? "Enviando…" : "Solicitar diagnóstico gratuito"}
          </Button>

          <p className="text-xs text-text-muted text-center">
            Revisaremos tu solicitud y te contactaremos en menos de 48h.
            Sin compromiso.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
