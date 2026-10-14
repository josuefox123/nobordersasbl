"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { news } from "@/lib/content";
import { ArrowRight, ChevronDownIcon } from "@/components/ui/Icons";

const PER_PAGE = 8; // cards par page

export function ActualitesClient() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(news.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const paginated = news.slice(start, start + PER_PAGE);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goTo(p: number) {
    setPage(p);
    scrollToTop();
  }

  return (
    <div className="pt-28 sm:pt-36">

      {/* ── Hero de page ── */}
      <section className="border-b border-ink/5 bg-paper py-16 sm:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-extrabold tracking-tight text-ink">
              Actualités
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75 sm:text-xl">
              Sport, culture, environnement, citoyenneté — suivez toutes les activités
              et initiatives de No Borders ASBL à Mons et en Wallonie.
            </p>
          </div>
        </div>
      </section>

      {/* ── Grille des articles ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {paginated.map((item) => (
              <article
                key={item.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h2 className="text-lg font-bold leading-snug text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70">
                    {item.excerpt}
                  </p>

                  {/* Bouton centré */}
                  <div className="mt-auto flex w-full justify-center pt-6">
                    <Link
                      href={`/actualites/${item.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-flame focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                    >
                      En savoir plus <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="mt-16 flex flex-wrap items-center justify-center gap-2">

              {/* Précédent */}
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                aria-label="Page précédente"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink/60 transition-colors hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronDownIcon size={16} className="rotate-90" />
              </button>

              {/* Numéros de pages */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => goTo(p)}
                  aria-current={p === page ? "page" : undefined}
                  aria-label={`Page ${p}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame ${
                    p === page
                      ? "bg-ink text-white"
                      : "border border-ink/15 text-ink/60 hover:border-ink hover:text-ink"
                  }`}
                >
                  {p}
                </button>
              ))}

              {/* Suivant */}
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                aria-label="Page suivante"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink/60 transition-colors hover:border-ink hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronDownIcon size={16} className="-rotate-90" />
              </button>

            </div>
          )}

          {/* Compteur d'articles */}
          <p className="mt-6 text-center text-sm text-ink/40">
            {start + 1}–{Math.min(start + PER_PAGE, news.length)} sur {news.length} articles
          </p>

        </div>
      </section>
    </div>
  );
}
