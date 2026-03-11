"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
  drift: number;
}

interface FloatingShape {
  x: number;
  y: number;
  radius: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "arc" | "line" | "ring";
}

export function PremiumHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const shapesRef = useRef<FloatingShape[]>([]);

  const initParticles = useCallback((w: number, h: number, count: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
        drift: Math.random() * 40 + 20,
      });
    }
    particlesRef.current = particles;
  }, []);

  const initShapes = useCallback((w: number, h: number) => {
    const types: FloatingShape["type"][] = ["arc", "line", "ring"];
    const shapes: FloatingShape[] = [];
    for (let i = 0; i < 5; i++) {
      shapes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 80 + 40,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        opacity: Math.random() * 0.06 + 0.02,
        type: types[i % types.length],
      });
    }
    shapesRef.current = shapes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
      initParticles(rect.width, rect.height, particleCount);
      initShapes(rect.width, rect.height);
    }

    resize();
    window.addEventListener("resize", resize);

    const gold = { r: 200, g: 169, b: 119 };
    const green = { r: 94, g: 143, b: 121 };

    function draw(time: number) {
      if (!canvas || !ctx) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);
      const t = time * 0.001;

      for (const shape of shapesRef.current) {
        shape.rotation += shape.rotationSpeed;
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity;

        if (shape.type === "arc") {
          ctx.beginPath();
          ctx.arc(0, 0, shape.radius, 0, Math.PI * 1.2);
          ctx.strokeStyle = `rgb(${gold.r}, ${gold.g}, ${gold.b})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (shape.type === "line") {
          ctx.beginPath();
          ctx.moveTo(-shape.radius, 0);
          ctx.lineTo(shape.radius, 0);
          ctx.strokeStyle = `rgb(${gold.r}, ${gold.g}, ${gold.b})`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, shape.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgb(${green.r}, ${green.g}, ${green.b})`;
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }

        ctx.restore();
      }

      for (const p of particlesRef.current) {
        const offsetX = Math.sin(t * p.speed + p.phase) * p.drift;
        const offsetY = Math.cos(t * p.speed * 0.7 + p.phase) * p.drift * 0.6;
        p.x = p.baseX + offsetX;
        p.y = p.baseY + offsetY;

        const pulseOpacity =
          p.opacity * (0.7 + 0.3 * Math.sin(t * 0.8 + p.phase));

        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 4
        );
        gradient.addColorStop(
          0,
          `rgba(${gold.r}, ${gold.g}, ${gold.b}, ${pulseOpacity})`
        );
        gradient.addColorStop(
          1,
          `rgba(${gold.r}, ${gold.g}, ${gold.b}, 0)`
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${gold.r}, ${gold.g}, ${gold.b}, ${pulseOpacity * 1.5})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initParticles, initShapes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
