import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/tracking/Analytics";
import { ScrollTracker } from "@/components/tracking/ScrollTracker";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { MobileContactLayer } from "@/components/ui/MobileContactLayer";
import { ExitIntent } from "@/components/ui/ExitIntent";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Asesoría Fiscal Boutique`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Asesoría Fiscal Boutique`,
    description: SITE.description,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Asesoría Fiscal Boutique`,
    description: SITE.description,
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-default.png`,
    logo: `${SITE.url}/og-default.png`,
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4168,
      longitude: -3.7038,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "€€€",
    serviceType: [
      "Asesoría fiscal",
      "Contabilidad",
      "Fiscalidad para extranjeros",
      "Planificación fiscal",
      "Declaración de la Renta",
      "Impuesto de Sociedades",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "ES",
      availableLanguage: ["Spanish"],
      contactOption: "TollFree",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <ProfessionalServiceSchema />
        <link rel="alternate" hrefLang="es-ES" href={SITE.url} />
        <link rel="alternate" hrefLang="x-default" href={SITE.url} />
      </head>
      <body className="font-sans antialiased">
        <SkipToContent />
        <LoadingBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileContactLayer />
        <ExitIntent />
        <CookieBanner />
        <Analytics />
        <ScrollTracker />
        <SpeedInsights />
        <VercelAnalytics />
      </body>
    </html>
  );
}
