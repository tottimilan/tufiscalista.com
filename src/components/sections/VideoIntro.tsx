"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FEATURE_FLAGS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const VIDEO_URL = "";

export function VideoIntro() {
  const [playing, setPlaying] = useState(false);

  if (!FEATURE_FLAGS.showVideo || !VIDEO_URL) return null;

  return (
    <section className="py-20 md:py-28">
      <div className="container-premium">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-text-primary">
              Conoce a tu futuro asesor
            </h2>
            <p className="mt-4 text-text-secondary">
              En 2 minutos te explicamos cómo trabajamos y por qué somos
              diferentes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-border aspect-video bg-bg-secondary">
              {playing ? (
                <iframe
                  src={`${VIDEO_URL}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-bg-primary/40" />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="var(--color-bg-primary)"
                    >
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </motion.div>
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
