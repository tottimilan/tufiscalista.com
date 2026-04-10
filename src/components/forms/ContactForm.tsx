"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trackEvent } from "@/lib/tracking";
import { Turnstile } from "@/components/ui/Turnstile";

const schema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  email: z.string().email("Email no válido"),
  mensaje: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);
  const mountTime = useRef(Date.now());
  const turnstileToken = useRef("");

  const handleTurnstile = useCallback((token: string) => {
    turnstileToken.current = token;
  }, []);

  useEffect(() => {
    mountTime.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    if (honeypotRef.current?.value) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _t: mountTime.current, _turnstile: turnstileToken.current }),
      });
      if (res.status === 429) {
        setStatus("error");
        return;
      }
      if (!res.ok) throw new Error();
      trackEvent("submit_contact_form");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-success/30 bg-success-muted p-8 text-center">
        <p className="font-serif text-xl font-semibold text-success">
          Mensaje enviado correctamente
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="absolute opacity-0 h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          ref={honeypotRef}
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="contact-nombre" className="block text-sm font-medium text-text-secondary mb-1.5">
          Nombre
        </label>
        <input
          id="contact-nombre"
          {...register("nombre")}
          className="w-full rounded-lg border border-border bg-bg-secondary/50 px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
          placeholder="Tu nombre"
        />
        {errors.nombre && (
          <p className="mt-1 text-xs text-danger">{errors.nombre.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-border bg-bg-secondary/50 px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-danger">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-mensaje" className="block text-sm font-medium text-text-secondary mb-1.5">
          Mensaje
        </label>
        <textarea
          id="contact-mensaje"
          rows={5}
          {...register("mensaje")}
          className="w-full rounded-lg border border-border bg-bg-secondary/50 px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs text-danger">{errors.mensaje.message}</p>
        )}
      </div>

      <Turnstile onVerify={handleTurnstile} onExpire={() => { turnstileToken.current = ""; }} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-bg-primary transition-all hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "error" && (
        <p className="text-center text-sm text-danger">
          Error al enviar. Inténtalo de nuevo o escríbenos a info@tufiscalista.com
        </p>
      )}
    </form>
  );
}
