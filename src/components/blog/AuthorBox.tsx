import Image from "next/image";
import Link from "next/link";
import { AUTHOR } from "@/lib/author";
import { SITE } from "@/lib/constants";

/**
 * AuthorBox enriquecido para final de artículos del blog.
 * Refuerza E-E-A-T mostrando credenciales reales del autor (cuando estén
 * disponibles) y enlaces a perfiles externos verificables.
 */
export function AuthorBox() {
  const topCredentials = AUTHOR.credentials.slice(0, 2);
  const externalLinks = Object.entries(AUTHOR.socialProfiles).filter(
    ([, url]) => typeof url === "string" && url.length > 0,
  ) as [string, string][];

  return (
    <section className="blog-reading-area blog-reading-area--warm pt-12 pb-16 md:pt-14 md:pb-20">
      <div className="container-premium max-w-3xl mx-auto">
        <div className="rounded-xl border border-[#e6dcc4] bg-[#fefcf6] p-6 md:p-8">
          <div className="flex items-start gap-5">
            <Link
              href="/sobre-nosotros"
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#C8A977]/30 shrink-0"
            >
              <Image
                src="/ali.jpg"
                alt={`${AUTHOR.name}, ${AUTHOR.jobTitle}`}
                fill
                sizes="80px"
                className="object-cover"
                quality={80}
              />
            </Link>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium tracking-wider uppercase text-[#b08d4c] mb-1">
                Escrito por
              </p>
              <Link
                href="/sobre-nosotros"
                className="font-semibold text-[#1a1a1a] text-lg hover:text-[#b08d4c] transition-colors"
              >
                {AUTHOR.name}
              </Link>
              <p className="text-sm text-[#6b6b6b] mt-0.5">
                {AUTHOR.jobTitle} en {SITE.name}
                {AUTHOR.yearsExperience > 0 && (
                  <> · {AUTHOR.yearsExperience}+ años de experiencia</>
                )}
              </p>

              <p className="text-sm text-[#3a3a3a] mt-3 leading-relaxed">
                {AUTHOR.shortBio}
              </p>

              {topCredentials.length > 0 && (
                <ul className="mt-3 space-y-1 text-xs text-[#6b6b6b]">
                  {topCredentials.map((c) => (
                    <li key={c.name} className="flex items-start gap-1.5">
                      <span className="text-[#b08d4c] mt-0.5">·</span>
                      <span>
                        <strong className="text-[#3a3a3a]">{c.name}</strong> —{" "}
                        {c.institution}
                        {c.year ? ` (${c.year})` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center gap-1 text-[#b08d4c] hover:text-[#96783e] transition-colors font-medium"
                >
                  Conocer más sobre {AUTHOR.shortName} →
                </Link>
                {externalLinks.length > 0 && (
                  <span className="text-[#9a9a9a]">|</span>
                )}
                {externalLinks.map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-[#6b6b6b] hover:text-[#b08d4c] transition-colors text-xs uppercase tracking-wider"
                  >
                    {key === "googleBusiness" ? "Google" : key}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
