"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

type TipoNegocio = "autonomo" | "sl";

interface Results {
  currentTax: number;
  optimizedTax: number;
  savings: number;
  savingsPercent: number;
}

function calculateTaxes(
  tipo: TipoNegocio,
  facturacion: number,
  gastos: number
): Results {
  const beneficio = Math.max(facturacion - gastos, 0);

  let currentTax: number;
  let optimizedTax: number;

  if (tipo === "autonomo") {
    currentTax = calculateIRPF(beneficio);
    const optimizedDeductions = gastos * 1.15;
    const optimizedBeneficio = Math.max(facturacion - optimizedDeductions, 0);
    optimizedTax = calculateIRPF(optimizedBeneficio);
  } else {
    const isRate = beneficio <= 50000 ? 0.23 : 0.25;
    currentTax = beneficio * isRate;
    const optimizedDeductions = gastos * 1.12;
    const optimizedBeneficio = Math.max(facturacion - optimizedDeductions, 0);
    const optimizedIsRate = optimizedBeneficio <= 50000 ? 0.23 : 0.25;
    optimizedTax = optimizedBeneficio * optimizedIsRate;
  }

  const savings = Math.max(currentTax - optimizedTax, 0);
  const savingsPercent =
    currentTax > 0 ? (savings / currentTax) * 100 : 0;

  return {
    currentTax: Math.round(currentTax),
    optimizedTax: Math.round(optimizedTax),
    savings: Math.round(savings),
    savingsPercent: Math.round(savingsPercent),
  };
}

function calculateIRPF(base: number): number {
  const tramos = [
    { hasta: 12450, tipo: 0.19 },
    { hasta: 20200, tipo: 0.24 },
    { hasta: 35200, tipo: 0.3 },
    { hasta: 60000, tipo: 0.37 },
    { hasta: 300000, tipo: 0.45 },
    { hasta: Infinity, tipo: 0.47 },
  ];

  let tax = 0;
  let prev = 0;

  for (const tramo of tramos) {
    if (base <= prev) break;
    const taxable = Math.min(base, tramo.hasta) - prev;
    tax += taxable * tramo.tipo;
    prev = tramo.hasta;
  }

  return tax;
}

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export function FiscalCalculator() {
  const [tipo, setTipo] = useState<TipoNegocio>("autonomo");
  const [facturacion, setFacturacion] = useState("");
  const [gastos, setGastos] = useState("");
  const [showResults, setShowResults] = useState(false);

  const facturacionNum = Number(facturacion) || 0;
  const gastosNum = Number(gastos) || 0;

  const results = useMemo(
    () => calculateTaxes(tipo, facturacionNum, gastosNum),
    [tipo, facturacionNum, gastosNum]
  );

  const canCalculate = facturacionNum > 0;

  function handleCalculate() {
    if (!canCalculate) return;
    setShowResults(true);
    trackEvent("calculator_used");
  }

  function handleReset() {
    setShowResults(false);
    setFacturacion("");
    setGastos("");
    setTipo("autonomo");
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-colors";

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-3">
                Tipo de negocio
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    { value: "autonomo", label: "Autónomo" },
                    { value: "sl", label: "Sociedad (SL)" },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTipo(option.value)}
                    className={cn(
                      "rounded-lg border p-4 text-center transition-all duration-300 cursor-pointer",
                      tipo === option.value
                        ? "border-accent bg-accent-muted text-accent"
                        : "border-border bg-bg-secondary/30 text-text-secondary hover:border-border-light"
                    )}
                  >
                    <span className="font-semibold">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="facturacion"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Facturación anual estimada
              </label>
              <div className="relative">
                <input
                  id="facturacion"
                  type="number"
                  value={facturacion}
                  onChange={(e) => setFacturacion(e.target.value)}
                  placeholder="Ej: 80000"
                  className={inputClasses}
                  min="0"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                  €/año
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="gastos"
                className="block text-sm font-medium text-text-secondary mb-2"
              >
                Gastos deducibles estimados
              </label>
              <div className="relative">
                <input
                  id="gastos"
                  type="number"
                  value={gastos}
                  onChange={(e) => setGastos(e.target.value)}
                  placeholder="Ej: 20000"
                  className={inputClasses}
                  min="0"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted">
                  €/año
                </span>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              size="lg"
              className="w-full"
              disabled={!canCalculate}
              trackAs="click_cta_primary"
            >
              Calcular ahorro estimado
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ScrollReveal delay={0}>
                <div className="rounded-xl border border-border bg-bg-secondary/30 p-6">
                  <p className="text-xs uppercase tracking-wider text-text-muted mb-2">
                    Sin optimización
                  </p>
                  <p className="font-serif text-3xl font-bold text-text-primary">
                    {formatCurrency(results.currentTax)}
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    impuestos estimados / año
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="rounded-xl border border-accent/30 bg-accent-muted/30 p-6">
                  <p className="text-xs uppercase tracking-wider text-accent mb-2">
                    Con planificación fiscal
                  </p>
                  <p className="font-serif text-3xl font-bold text-accent">
                    {formatCurrency(results.optimizedTax)}
                  </p>
                  <p className="text-sm text-text-muted mt-1">
                    impuestos estimados / año
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-success/30 bg-success-muted/30 p-8 text-center">
                <p className="text-sm text-success mb-2 font-medium">
                  Ahorro potencial estimado
                </p>
                <p className="font-serif text-5xl font-bold text-success">
                  {formatCurrency(results.savings)}
                </p>
                <p className="text-sm text-text-muted mt-2">
                  {results.savingsPercent}% menos en impuestos
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-xl border border-accent/20 bg-accent-muted/20 p-6 text-center">
                <p className="font-serif text-xl font-semibold text-text-primary mb-2">
                  ¿Quieres saber tu cifra exacta?
                </p>
                <p className="text-text-secondary text-sm mb-5 max-w-md mx-auto">
                  Estos son cálculos orientativos. En tu diagnóstico gratuito
                  analizamos tu caso concreto y te damos números reales.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    href="/aplicar"
                    size="md"
                    trackAs="click_cta_primary"
                  >
                    Solicitar diagnóstico gratuito
                  </Button>
                  <a
                    href="https://cal.com/el-asesor-fiscal/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
                  >
                    Agendar llamada →
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <button
              onClick={handleReset}
              className="block mx-auto text-sm text-text-muted hover:text-accent transition-colors underline underline-offset-4 cursor-pointer"
            >
              Calcular de nuevo
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-8 text-xs text-text-muted text-center leading-relaxed max-w-lg mx-auto">
        * Cálculo orientativo basado en los tramos de IRPF e Impuesto de
        Sociedades vigentes en España. No constituye asesoramiento fiscal. Las
        cifras reales dependen de tu situación particular.
      </p>
    </div>
  );
}
