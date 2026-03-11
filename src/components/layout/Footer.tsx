import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

const legalLinks = [
  { href: "/politica-privacidad", label: "Política de Privacidad" },
  { href: "/aviso-legal", label: "Aviso Legal" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
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
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-4">
              Navegación
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
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

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-4">
              Servicio
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/aplicar" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Aplicar a una plaza
                </Link>
              </li>
              <li>
                <Link href="/precio" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Precio
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-text-secondary hover:text-accent transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-4">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  href="mailto:info@tufiscalista.com"
                  className="hover:text-accent transition-colors"
                >
                  info@tufiscalista.com
                </a>
              </li>
              <li>Madrid, España</li>
            </ul>

            <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-3 mt-8">
              Legal
            </p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
