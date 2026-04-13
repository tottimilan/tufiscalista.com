"use client";

import { useState, useCallback } from "react";
import { trackEvent } from "@/lib/tracking";

interface LeadMagnetGateProps {
  title: string;
  description: string;
  downloadUrl: string;
  magnetId: string;
}

export function LeadMagnetGate({
  title,
  description,
  downloadUrl,
  magnetId,
}: LeadMagnetGateProps) {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Introduce un email válido");
        return;
      }
      setLoading(true);
      setError("");

      try {
        const res = await fetch("/api/lead-magnet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, magnetId }),
        });

        if (!res.ok) throw new Error("Error al procesar");

        trackEvent("download_lead_magnet", { magnetId });
        setUnlocked(true);
      } catch {
        setError("Algo salió mal. Inténtalo de nuevo.");
      } finally {
        setLoading(false);
      }
    },
    [email, magnetId],
  );

  if (unlocked) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent-muted p-8 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mx-auto text-accent mb-4"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h3 className="font-serif text-xl font-semibold mb-2">
          ¡Descarga lista!
        </h3>
        <p className="text-sm text-text-secondary mb-4">
          Hemos enviado también una copia a tu email.
        </p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg-primary hover:bg-accent-hover transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Descargar {title}
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-bg-secondary/50 p-8">
      <h3 className="font-serif text-xl md:text-2xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="flex-1 rounded-lg border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg-primary hover:bg-accent-hover transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? "Enviando..." : "Descargar gratis"}
        </button>
      </form>

      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

      <p className="mt-3 text-xs text-text-muted">
        Tu email solo se usará para enviarte el recurso. Sin spam.
      </p>
    </div>
  );
}
