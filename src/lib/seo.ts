import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetaInput {
  title?: string;
  description?: string;
  path: string;
  image?: string;
  noindex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  noindex,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
}: PageMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const fullUrl = `${SITE.url}${canonical}`;
  const ogImage = image ?? `${SITE.url}/opengraph-image`;

  const fullTitle = title ?? `${SITE.name} — Asesoría Fiscal Boutique`;
  const fullDescription = description ?? SITE.description;

  return {
    title,
    description: fullDescription,
    alternates: {
      canonical,
      languages: {
        "es-ES": fullUrl,
        "x-default": fullUrl,
      },
    },
    openGraph: {
      type,
      locale: "es_ES",
      url: fullUrl,
      siteName: SITE.name,
      title: fullTitle,
      description: fullDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
  };
}

interface BreadcrumbItem {
  name: string;
  url?: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      ...(item.url && { item: item.url.startsWith("http") ? item.url : `${SITE.url}${item.url}` }),
    })),
  };
}

export function articleSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  tags?: string[];
  category?: string;
}) {
  const url = `${SITE.url}/blog/${post.slug}`;
  const image = `${SITE.url}/blog/${post.slug}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [image],
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "es-ES",
    keywords: post.tags?.join(", "),
    articleSection: post.category,
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/sobre-nosotros#person`,
      name: SITE.advisor,
      url: `${SITE.url}/sobre-nosotros`,
      jobTitle: "Asesor Fiscal",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE.url}#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/opengraph-image`,
        width: 1200,
        height: 630,
      },
    },
  };
}

export function jsonLd(schema: object) {
  return {
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  };
}
