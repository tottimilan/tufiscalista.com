import Link from "next/link";
import { SITE } from "@/lib/constants";

const footerLinks = {
  servicio: [
    { href: "/servicio-premium", label: "Servicio Premium" },
    { href: "/como-trabajamos", label: "Cómo Trabajamos" },
    { href: "/precio", label: "Precio" },
    { href: "/aplicar", label: "Aplicar a una Plaza" },
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/contacto", label: "Contacto" },
  ],
  recursos: [
    { href: "/blog", label: "Blog" },
    { href: "/recursos", label: "Centro de Recursos" },
    { href: "/calculadora", label: "Calculadora Fiscal" },
    { href: "/calendario-fiscal", label: "Calendario Fiscal" },
    { href: "/gastos-deducibles-autonomos", label: "Gastos Deducibles" },
    { href: "/guia-factura-electronica", label: "Factura Electrónica" },
    { href: "/autonomo-vs-sl", label: "Autónomo vs SL" },
    { href: "/comparativa-boutique-vs-gestoria", label: "Boutique vs Gestoría" },
  ],
  urgente: [
    { href: "/requerimientos-hacienda", label: "Requerimientos Hacienda" },
    { href: "/inspeccion-hacienda", label: "Inspección Hacienda" },
    { href: "/notificaciones-hacienda", label: "Notificaciones Hacienda" },
    { href: "/sanciones-fiscales", label: "Sanciones Fiscales" },
    { href: "/cambiar-de-asesoria", label: "Cambiar de Asesoría" },
  ],
  legal: [
    { href: "/politica-privacidad", label: "Política de Privacidad" },
    { href: "/aviso-legal", label: "Aviso Legal" },
  ],
};

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-4">
        {title}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold text-text-primary hover:text-accent transition-colors"
            >
              {SITE.name}
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-xs">
              Asesoría fiscal boutique. Máximo 20 clientes. Planificación,
              seguimiento y criterio para tu negocio.
            </p>
            <a
              href="mailto:info@tufiscalista.com"
              className="mt-3 block text-sm text-text-muted hover:text-accent transition-colors"
            >
              info@tufiscalista.com
            </a>
          </div>

          <FooterColumn title="Servicio" links={footerLinks.servicio} />
          <FooterColumn title="Recursos" links={footerLinks.recursos} />
          <FooterColumn title="Urgente" links={footerLinks.urgente} />

          <div>
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-text-muted">
            Asesoría fiscal boutique en España
          </p>
        </div>
      </div>
    </footer>
  );
}
