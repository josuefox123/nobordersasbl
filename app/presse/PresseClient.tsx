"use client";

import Image from "next/image";
import { useState } from "react";
import { press } from "@/lib/content";
import { ArrowUpRight, CalendarIcon, ChevronDownIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";

const ITEMS_PER_PAGE = 3; // 3 cards par page (1 ligne de 3 cards)

export function PresseClient() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(press.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = press.slice(start, start + ITEMS_PER_PAGE);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goTo(p: number) {
    setPage(p);
    scrollToTop();
  }

  return (
    <div className="mt-[84px] lg:mt-[188px] bg-white">
      {/* ── En-tête avec breadcrumb ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Presse" },
        ]}
        title="On parle de nous dans la presse"
        description="Consultez les articles, émissions et reportages consacrés à nos matchs interculturels et à notre projet de vélos écologiques en bambou."
      />

      {/* ── Liste des articles ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container">
          {/* Grille : 3 cards par ligne sur écran large */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent"
                  />
                  {item.source && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      {item.source}
                    </span>
                  )}
                  <time
                    dateTime={item.isoDate}
                    className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm"
                  >
                    <CalendarIcon size={13} className="text-primary" />
                    {item.date}
                  </time>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto border-t border-ink/10 pt-5">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between gap-2 rounded-xl bg-primary/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        <span>Consulter l&apos;article original</span>
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex w-full items-center gap-2 rounded-xl bg-paper px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                        Article archivé par l&apos;ASBL
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── Pagination (Style identique à la page Actualités) ── */}
          {totalPages > 1 && (
            <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
              {/* Précédent */}
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                aria-label="Page précédente"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink/60 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
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
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    p === page
                      ? "bg-primary text-white"
                      : "border border-ink/15 text-ink/60 hover:border-primary hover:text-primary"
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
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink/60 transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronDownIcon size={16} className="-rotate-90" />
              </button>
            </div>
          )}

          {/* Compteur d'articles */}
          <p className="mt-6 text-center text-sm text-ink/40">
            {start + 1}–{Math.min(start + ITEMS_PER_PAGE, press.length)} sur {press.length} articles
          </p>
        </div>
      </section>
    </div>
  );
}
