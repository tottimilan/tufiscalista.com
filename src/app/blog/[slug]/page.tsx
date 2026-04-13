import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getRelatedPosts, formatDate } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [SITE.advisor],
    },
  };
}

function ArticleSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: SITE.advisor,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ArticleContent({ content }: { content: string }) {
  const headingPattern = /<h2[^>]*>/g;
  const matches = [...content.matchAll(headingPattern)];

  if (matches.length >= 3) {
    const midIdx = Math.floor(matches.length / 2);
    const splitPos = matches[midIdx].index!;
    const firstHalf = content.slice(0, splitPos);
    const secondHalf = content.slice(splitPos);

    return (
      <>
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: firstHalf }}
        />
        <BlogCTA />
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: secondHalf }}
        />
      </>
    );
  }

  return (
    <>
      <div
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <BlogCTA />
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <ArticleSchema post={post} />

      <article>
        <header className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container-premium max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="gold">{post.category}</Badge>
              <span className="text-sm text-text-muted">{post.readTime}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-balance">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-text-muted">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="text-border">·</span>
              <span>{SITE.advisor}</span>
            </div>
          </div>
        </header>

        <div className="pb-16 md:pb-24">
          <div className="container-premium max-w-3xl mx-auto">
            <ArticleContent content={post.content} />
          </div>
        </div>
      </article>

      <section className="py-16 md:py-24 bg-bg-secondary/30">
        <div className="container-premium text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            ¿Necesitas asesoramiento personalizado?
          </h2>
          <p className="text-text-secondary mb-8">
            Cada situación es diferente. Solicita tu diagnóstico gratuito y te
            ayudamos con tu caso concreto.
          </p>
          <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
            Solicitar diagnóstico gratuito
          </Button>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container-premium">
            <h2 className="font-serif text-2xl font-semibold text-center mb-10">
              Artículos relacionados
            </h2>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {related.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group block h-full"
                  >
                    <div className="h-full rounded-xl border border-border bg-bg-secondary/30 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-bg-secondary/60">
                      <span className="inline-flex items-center rounded-full bg-accent-muted px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase text-accent border border-accent/20 mb-3">
                        {r.category}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-text-primary group-hover:text-accent transition-colors leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
