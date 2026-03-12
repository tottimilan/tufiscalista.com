import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/tracking/Analytics";
import { ScrollTracker } from "@/components/tracking/ScrollTracker";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ExitIntent } from "@/components/ui/ExitIntent";
import { LoadingBar } from "@/components/ui/LoadingBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Asesoría Fiscal Boutique`,
    description: SITE.description,
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
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    priceRange: "€€€",
    serviceType: [
      "Asesoría fiscal",
      "Contabilidad",
      "Gestión laboral",
      "Planificación fiscal",
    ],
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
      </head>
      <body className="font-sans antialiased">
        <LoadingBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ExitIntent />
        <CookieBanner />
        <Analytics />
        <ScrollTracker />
        <SpeedInsights />
      </body>
    </html>
  );
}
