"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, PLAZAS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { cn } from "@/lib/utils";

type MenuKey = "servicio" | "recursos" | "nosotros" | null;

interface MenuLink {
  href: string;
  label: string;
  desc?: string;
}

interface MenuGroup {
  title?: string;
  links: MenuLink[];
}

const MENUS: Record<Exclude<MenuKey, null>, { label: string; groups: MenuGroup[] }> = {
  servicio: {
    label: "Servicio",
    groups: [
      {
        links: [
          { href: "/servicio-premium", label: "Servicio Premium", desc: "Qué incluye nuestro plan" },
          { href: "/como-trabajamos", label: "Cómo Trabajamos", desc: "Método y proceso" },
          { href: "/precio", label: "Precio", desc: "Planes transparentes" },
          { href: "/casos", label: "Casos de Éxito", desc: "Clientes reales" },
        ],
      },
    ],
  },
  recursos: {
    label: "Recursos",
    groups: [
      {
        title: "Guías",
        links: [
          { href: "/declaracion-renta-2026", label: "Renta 2026" },
          { href: "/guia-factura-electronica", label: "Factura Electrónica" },
          { href: "/verifactu-que-es", label: "VeriFactu" },
          { href: "/gastos-deducibles-autonomos", label: "Gastos Deducibles" },
          { href: "/autonomo-vs-sl", label: "Autónomo vs SL" },
          { href: "/modelos-trimestrales-autonomos", label: "Modelos Trimestrales" },
        ],
      },
      {
        title: "Herramientas",
        links: [
          { href: "/calculadora", label: "Calculadora Fiscal" },
          { href: "/calendario-fiscal", label: "Calendario Fiscal" },
          { href: "/recursos", label: "Todos los Recursos" },
        ],
      },
      {
        title: "Contenido",
        links: [
          { href: "/blog", label: "Blog" },
          { href: "/comparativa-boutique-vs-gestoria", label: "Boutique vs Gestoría" },
        ],
      },
    ],
  },
  nosotros: {
    label: "Nosotros",
    groups: [
      {
        links: [
          { href: "/sobre-nosotros", label: "Sobre Nosotros", desc: "El asesor y la firma" },
          { href: "/testimonios", label: "Testimonios", desc: "Lo que dicen los clientes" },
          { href: "/faq", label: "Preguntas Frecuentes", desc: "Resolvemos dudas" },
        ],
      },
    ],
  },
};

const SIMPLE_LINKS: MenuLink[] = [{ href: "/contacto", label: "Contacto" }];

function DesktopDropdown({
  menuKey,
  open,
  setOpen,
}: {
  menuKey: Exclude<MenuKey, null>;
  open: boolean;
  setOpen: (key: MenuKey) => void;
}) {
  const menu = MENUS[menuKey];
  const isWide = menu.groups.length > 1;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(menuKey)}
      onMouseLeave={() => setOpen(null)}
    >
      <button
        className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 flex items-center gap-1 cursor-pointer py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {menu.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={cn("transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        >
          <path d="M2 4l3 3 3-3" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute top-full mt-1 rounded-xl border border-border bg-bg-secondary/95 backdrop-blur-md shadow-xl p-4",
              isWide ? "w-80 right-0" : "w-64 left-1/2 -translate-x-1/2",
            )}
          >
            {menu.groups.map((group, gi) => (
              <div
                key={gi}
                className={cn(gi > 0 && "mt-3 pt-3 border-t border-border")}
              >
                {group.title && (
                  <p className="text-[10px] font-medium tracking-widest uppercase text-text-muted mb-2 px-3">
                    {group.title}
                  </p>
                )}
                <div className="space-y-0.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 rounded-md hover:bg-accent-muted/30 transition-colors group"
                    >
                      <div className="text-sm text-text-secondary group-hover:text-accent transition-colors">
                        {link.label}
                      </div>
                      {link.desc && (
                        <div className="text-xs text-text-muted mt-0.5">
                          {link.desc}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenuSection({
  title,
  links,
  onClose,
}: {
  title: string;
  links: MenuLink[];
  onClose: () => void;
}) {
  return (
    <div className="border-b border-border pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
      <p className="text-[10px] font-semibold tracking-widest uppercase text-accent mb-3">
        {title}
      </p>
      <div className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block py-2 px-1 text-base text-text-primary hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const remaining = PLAZAS.total - PLAZAS.ocupadas;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-glass py-3" : "bg-transparent py-5",
        )}
      >
        <div className="container-premium flex items-center justify-between gap-4">
          <Link
            href="/"
            className="relative z-50 font-serif text-xl md:text-2xl font-semibold text-text-primary hover:text-accent transition-colors shrink-0"
          >
            {SITE.name}
          </Link>

          {/* Desktop nav: 4 grupos */}
          <nav className="hidden lg:flex items-center gap-7">
            <DesktopDropdown
              menuKey="servicio"
              open={openMenu === "servicio"}
              setOpen={setOpenMenu}
            />
            <DesktopDropdown
              menuKey="recursos"
              open={openMenu === "recursos"}
              setOpen={setOpenMenu}
            />
            <DesktopDropdown
              menuKey="nosotros"
              open={openMenu === "nosotros"}
              setOpen={setOpenMenu}
            />
            {SIMPLE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right: phone + plazas + CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <PhoneLink
              source="header_desktop"
              className="text-sm text-text-secondary hover:text-accent"
              showLabel={true}
            />
            <AnimatePresence>
              {scrolled && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 10 }}
                  className={cn(
                    "text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap",
                    remaining <= 3
                      ? "text-danger border-danger/30 bg-danger/10"
                      : "text-accent border-accent/30 bg-accent-muted",
                  )}
                >
                  {remaining} plazas
                </motion.span>
              )}
            </AnimatePresence>
            <Button href="/aplicar" size="sm" trackAs="click_cta_primary">
              Aplicar a una plaza
            </Button>
          </div>

          {/* Mobile right: phone icon + hamburger */}
          <div className="flex items-center gap-1 lg:hidden">
            <PhoneLink
              source="header_mobile"
              className="relative z-50 text-text-primary hover:text-accent p-2"
              showLabel={false}
              iconSize={22}
            />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 flex flex-col gap-1.5 p-2 cursor-pointer"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
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
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-bg-primary flex flex-col"
          >
            {/* Top spacing for header */}
            <div className="h-20 shrink-0" />

            {/* Scrollable content */}
            <div
              ref={mobileScrollRef}
              className="flex-1 overflow-y-auto px-6 py-4"
            >
              <MobileMenuSection
                title={MENUS.servicio.label}
                links={MENUS.servicio.groups[0].links}
                onClose={() => setMobileOpen(false)}
              />
              {MENUS.recursos.groups.map((group, i) => (
                <MobileMenuSection
                  key={i}
                  title={group.title ?? "Recursos"}
                  links={group.links}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <MobileMenuSection
                title={MENUS.nosotros.label}
                links={MENUS.nosotros.groups[0].links}
                onClose={() => setMobileOpen(false)}
              />
              <MobileMenuSection
                title="Contacto"
                links={SIMPLE_LINKS}
                onClose={() => setMobileOpen(false)}
              />
            </div>

            {/* Sticky bottom: CTA + phone + plazas */}
            <div className="shrink-0 p-4 border-t border-border bg-bg-secondary/50 backdrop-blur space-y-3">
              <div className="flex items-center justify-between text-xs">
                <PhoneLink
                  source="mobile_menu_bottom"
                  className="text-accent hover:text-accent-hover font-medium"
                />
                <span
                  className={cn(
                    "px-2.5 py-1 rounded-full border",
                    remaining <= 3
                      ? "text-danger border-danger/30 bg-danger/10"
                      : "text-accent border-accent/30 bg-accent-muted",
                  )}
                >
                  {remaining} plazas disponibles
                </span>
              </div>
              <Button
                href="/aplicar"
                size="lg"
                className="w-full"
                onClick={() => setMobileOpen(false)}
                trackAs="click_cta_primary"
              >
                Aplicar a una plaza
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
