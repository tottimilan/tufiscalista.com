"use client";

import { useEffect, useState, useRef } from "react";
import { PLAZAS } from "@/lib/constants";

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

  const percentage = (count / PLAZAS.total) * 100;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-4xl md:text-5xl font-bold text-accent">
          {count}
        </span>
        <span className="text-text-muted text-lg">/ {PLAZAS.total}</span>
      </div>
      <p className="text-text-secondary text-sm">plazas ocupadas</p>
      <div className="w-48 h-1.5 rounded-full bg-border overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
