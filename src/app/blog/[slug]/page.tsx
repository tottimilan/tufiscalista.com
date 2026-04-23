import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, getRelatedPosts, formatDate } from "@/lib/blog";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BlogCTA } from "@/components/ui/BlogCTA";
import { TrackedCalLink } from "@/components/ui/TrackedCalLink";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
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
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [SITE.advisor],
      url: `${SITE.url}/blog/${slug}`,
    },
  };
}

function ArticleSchema({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const url = `${SITE.url}/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: SITE.advisor,
      url: `${SITE.url}/sobre-nosotros`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/og-default.png` },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function extractToc(content: string) {
  const regex = /<h2[^>]*>(.*?)<\/h2>/g;
  const items: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "");
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    items.push({ id, text });
  }
  return items;
}

function injectHeadingIds(content: string, toc: { id: string; text: string }[]) {
  let result = content;
  for (const item of toc) {
    const escaped = item.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(
      new RegExp(`<h2([^>]*)>(\\s*${escaped}\\s*)</h2>`),
      `<h2$1 id="${item.id}">$2</h2>`,
    );
  }
  return result;
}

function ArticleContent({ content, toc }: { content: string; toc: { id: string; text: string }[] }) {
  const processed = injectHeadingIds(content, toc);
  const headingPattern = /<h2[^>]*>/g;
  const matches = [...processed.matchAll(headingPattern)];

  if (matches.length >= 3) {
    const midIdx = Math.floor(matches.length / 2);
    const splitPos = matches[midIdx].index!;
    const firstHalf = processed.slice(0, splitPos);
    const secondHalf = processed.slice(splitPos);

    return (
      <>
        <div className="prose-light" dangerouslySetInnerHTML={{ __html: firstHalf }} />
        <BlogCTA />
        <div className="prose-light" dangerouslySetInnerHTML={{ __html: secondHalf }} />
      </>
    );
  }

  return (
    <>
      <div className="prose-light" dangerouslySetInnerHTML={{ __html: processed }} />
      <BlogCTA />
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const toc = extractToc(post.content);

  return (
    <>
      <ArticleSchema post={post} />
      <ReadingProgress />

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

            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-bg-secondary px-3 py-1 text-[11px] font-medium text-text-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div id="article-body" className="blog-reading-area pt-16 pb-20 md:pb-28">
          <div className="container-premium max-w-3xl mx-auto">
            <TableOfContents items={toc} />
            <ArticleContent content={post.content} toc={toc} />
          </div>
        </div>
      </article>

      {/* Author box */}
      <section className="blog-reading-area pb-16 md:pb-20">
        <div className="container-premium max-w-3xl mx-auto">
          <div className="flex items-start gap-4 p-6 rounded-xl border border-[#e0dcd4] bg-[#f7f5f0]">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C8A977]/30 shrink-0">
              <Image
                src="/ali.jpg"
                alt={`${SITE.advisor}, asesor fiscal`}
                fill
                sizes="56px"
                className="object-cover"
                quality={75}
              />
            </div>
            <div>
              <p className="font-semibold text-[#1a1a1a]">{SITE.advisor}</p>
              <p className="text-sm text-[#6b6b6b] mt-0.5">
                Asesor fiscal y fundador de {SITE.name}. Especializado en
                fiscalidad para autónomos y pymes en España.
              </p>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center gap-1 mt-2 text-sm text-[#b08d4c] hover:text-[#96783e] transition-colors"
              >
                Conocer más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-bg-secondary/30">
        <div className="container-premium max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
            ¿Necesitas asesoramiento personalizado?
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Cada situación fiscal es diferente. Solicita tu diagnóstico gratuito
            y analizamos tu caso concreto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <Button href="/aplicar" size="lg" trackAs="click_cta_primary">
              Solicitar diagnóstico gratuito
            </Button>
            <TrackedCalLink
              href="https://cal.com/el-asesor-fiscal/15min"
              source="blog_post_bottom"
            >
              Agendar llamada de 15 min
            </TrackedCalLink>
          </div>
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
                  <Link href={`/blog/${r.slug}`} className="group block h-full">
                    <div className="h-full rounded-xl border border-border bg-bg-secondary/30 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-bg-secondary/60">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center rounded-full bg-accent-muted px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase text-accent border border-accent/20">
                          {r.category}
                        </span>
                        <span className="text-[10px] text-text-muted">
                          {r.readTime}
                        </span>
                      </div>
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
