"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HomeFAQ() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
        />

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion items={[...FAQ_ITEMS]} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
