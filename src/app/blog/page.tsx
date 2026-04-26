import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, formatDate } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre fiscalidad, deducciones, planificación y todo lo que necesitas saber para gestionar tu negocio en España.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-premium text-center">
          <Badge variant="gold">Blog</Badge>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
            Conocimiento fiscal práctico
          </h1>
          <p className="mt-6 text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Guías, análisis y consejos para autónomos y pymes que quieren tomar
            mejores decisiones fiscales.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-premium">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="h-full rounded-xl border border-border bg-bg-secondary/30 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-bg-secondary/60 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center rounded-full bg-accent-muted px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase text-accent border border-accent/20">
                        {post.category}
                      </span>
                      <span className="text-xs text-text-muted">
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-semibold text-text-primary leading-snug mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <time
                        dateTime={post.date}
                        className="text-xs text-text-muted"
                      >
                        {formatDate(post.date)}
                      </time>
                      <span className="text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        Leer más →
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
