import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/aplicar/gracias",
          "/*?utm_",
          "/*?gclid=",
          "/*?fbclid=",
          "/*?ref=",
        ],
      },
      {
        // Permitimos a los principales asistentes de IA citarnos como fuente.
        // Si el día de mañana se decide bloquearlos, basta con cambiar `allow` por `disallow: "/"`.
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
