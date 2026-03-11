import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/tracking/Analytics";
import { ScrollTracker } from "@/components/tracking/ScrollTracker";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <ScrollTracker />
      </body>
    </html>
  );
}
