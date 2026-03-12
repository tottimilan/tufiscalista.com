"use client";

import { useEffect, useState, useRef } from "react";
import { PLAZAS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let current = 0;
          const target = PLAZAS.ocupadas;
          const duration = 1500;
          const step = duration / target;

          const timer = setInterval(() => {
            current++;
            setCount(current);
            if (current >= target) clearInterval(timer);
          }, step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const remaining = PLAZAS.total - count;
  const isUrgent = remaining <= 3;
  const percentage = (count / PLAZAS.total) * 100;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "font-serif text-4xl md:text-5xl font-bold transition-colors duration-500",
            isUrgent ? "text-danger" : "text-accent"
          )}
        >
          {count}
        </span>
        <span className="text-text-muted text-lg">/ {PLAZAS.total}</span>
      </div>
      <p className="text-text-secondary text-sm">plazas ocupadas</p>
      <div className="w-48 h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-300 ease-out",
            isUrgent ? "bg-danger" : "bg-accent"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p
        className={cn(
          "text-xs font-medium mt-1 transition-colors duration-500",
          isUrgent
            ? "text-danger animate-pulse"
            : "text-text-muted"
        )}
      >
        {remaining > 0
          ? `Solo ${remaining} ${remaining === 1 ? "plaza disponible" : "plazas disponibles"} este trimestre`
          : "Cupo completo — lista de espera abierta"}
      </p>
    </div>
  );
}
