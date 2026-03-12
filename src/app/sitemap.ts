import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;

  const corePages = [
    "",
    "/aplicar",
    "/servicio-premium",
    "/como-trabajamos",
    "/precio",
    "/casos",
    "/sobre-nosotros",
    "/contacto",
    "/faq",
    "/blog",
  ];

  const bofuPages = [
    "/asesoria-fiscal-premium",
    "/gestoria-premium-autonomos",
    "/asesoria-premium-pymes",
    "/cambiar-de-asesoria",
    "/asesor-fiscal-espana",
    "/asesoria-fiscal-para-autonomos",
    "/asesoria-fiscal-para-pymes",
  ];

  const legalPages = ["/politica-privacidad", "/aviso-legal"];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...corePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...bofuPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPages,
    ...legalPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
