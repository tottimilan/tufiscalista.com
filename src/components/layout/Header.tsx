"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE, PLAZAS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const RESOURCE_LINKS = {
  guias: [
    { href: "/guia-factura-electronica", label: "Factura Electrónica" },
    { href: "/verifactu-que-es", label: "VeriFactu" },
    { href: "/gastos-deducibles-autonomos", label: "Gastos Deducibles" },
    { href: "/autonomo-vs-sl", label: "Autónomo vs SL" },
    { href: "/modelos-trimestrales-autonomos", label: "Modelos Trimestrales" },
  ],
  herramientas: [
    { href: "/calculadora", label: "Calculadora Fiscal" },
    { href: "/calendario-fiscal", label: "Calendario Fiscal" },
    { href: "/recursos", label: "Todos los Recursos" },
  ],
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-glass py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container-premium flex items-center justify-between">
          <Link
            href="/"
            className="relative z-50 font-serif text-xl md:text-2xl font-semibold text-text-primary hover:text-accent transition-colors"
          >
            {SITE.name}
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 relative after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* Resources dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1 cursor-pointer">
                Recursos
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("transition-transform duration-200", resourcesOpen && "rotate-180")}>
                  <path d="M2 4l3 3 3-3" />
                </svg>
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-72 rounded-xl border border-border bg-bg-secondary/95 backdrop-blur-md shadow-xl p-4"
                  >
                    <p className="text-[10px] font-medium tracking-widest uppercase text-text-muted mb-2">Guías</p>
                    <div className="space-y-0.5 mb-3">
                      {RESOURCE_LINKS.guias.map((link) => (
                        <Link key={link.href} href={link.href} className="block px-3 py-1.5 text-sm text-text-secondary hover:text-accent hover:bg-accent-muted/30 rounded-md transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border pt-3">
                      <p className="text-[10px] font-medium tracking-widest uppercase text-text-muted mb-2">Herramientas</p>
                      <div className="space-y-0.5">
                        {RESOURCE_LINKS.herramientas.map((link) => (
                          <Link key={link.href} href={link.href} className="block px-3 py-1.5 text-sm text-text-secondary hover:text-accent hover:bg-accent-muted/30 rounded-md transition-colors">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <AnimatePresence>
              {scrolled && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 10 }}
                  className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full border",
                    PLAZAS.total - PLAZAS.ocupadas <= 3
                      ? "text-danger border-danger/30 bg-danger/10"
                      : "text-accent border-accent/30 bg-accent-muted"
                  )}
                >
                  {PLAZAS.total - PLAZAS.ocupadas} plazas
                </motion.span>
              )}
            </AnimatePresence>
            <Button href="/aplicar" size="sm" trackAs="click_cta_primary">
              Aplicar a una plaza
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary origin-center"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-0.5 bg-text-primary origin-center"
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-text-primary origin-center"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-bg-primary flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.15 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Button
                href="/aplicar"
                size="lg"
                onClick={() => setMobileOpen(false)}
                trackAs="click_cta_primary"
              >
                Aplicar a una plaza
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
