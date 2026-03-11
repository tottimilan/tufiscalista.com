"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { HeroBackground } from "@/components/three/HeroBackground";

export function HeroHome() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="container-premium relative z-10 pt-28 pb-16 md:pt-40 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="gold">
              Asesoría fiscal boutique
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight"
          >
            Máximo 20 clientes.{" "}
            <span className="text-gradient-gold">
              Asesoría fiscal premium
            </span>{" "}
            con atención real.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Planificación, seguimiento y criterio para que tu negocio no viva
            apagando fuegos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              href="/aplicar"
              size="lg"
              trackAs="click_cta_primary"
            >
              Aplicar a una plaza
            </Button>
            <Button
              href="/como-trabajamos"
              variant="secondary"
              size="lg"
              trackAs="click_cta_secondary"
            >
              Ver cómo trabajamos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <Counter />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
