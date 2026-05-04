import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { buildPersonSchema } from "@/lib/author";
import { jsonLd } from "@/lib/seo";
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

const OG_IMAGE = `${SITE.url}/opengraph-image`;

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Asesoría Fiscal Boutique`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.advisor, url: `${SITE.url}/sobre-nosotros` }],
  creator: SITE.advisor,
  publisher: SITE.name,
  category: "finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Asesoría Fiscal Boutique`,
    description: SITE.description,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Asesoría Fiscal Boutique`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

function GlobalSchemas() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.name,
    url: SITE.url,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    image: OG_IMAGE,
    logo: {
      "@type": "ImageObject",
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      // Coordenadas aproximadas de Calle de Abtao, 44 (Retiro, Madrid)
      latitude: 40.4061,
      longitude: -3.6736,
    },
    hasMap: "https://maps.google.com/?q=Calle+de+Abtao+44+Madrid",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "14:00",
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
      availableLanguage: ["Spanish", "Arabic", "English"],
    },
    founder: { "@id": `${SITE.url}/sobre-nosotros#person` },
    employee: { "@id": `${SITE.url}/sobre-nosotros#person` },
    sameAs: ["https://share.google/IfxM9fZ4CMdeMjysB"],
  };

  const person = buildPersonSchema();

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "es-ES",
    publisher: { "@id": `${SITE.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organization)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(person)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(website)} />
    </>
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
        <GlobalSchemas />
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
