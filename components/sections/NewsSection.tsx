"use client";

import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function NewsSection() {
  return (
    <section className="bg-paper py-24 sm:py-32" id="actualites">
      <div className="container">

        {/* ── En-tête de section ── */}
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Actualités, presse et événements
            </h2>
          </Reveal>
        </div>

        {/* ── Grille des cards ── */}
        <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, 4).map((item) => (
            <StaggerItem key={item.slug}>
              <article className="group flex flex-col h-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-ink">

                {/* Image — sans badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Contenu : titre + description + bouton centré */}
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="text-lg font-bold text-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/70 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Bouton centré en bas de la card */}
                  <div className="mt-auto pt-6 w-full flex justify-center">
                    <Link
                      href={`/actualites/${item.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-flame focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                    >
                      En savoir plus <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ── Bouton "Tous les articles" centré sous les cards ── */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
            >
              Tous les articles <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* ── Bloc Prochains Événements — commenté
        <div className="mt-20 rounded-3xl border border-ink/10 bg-white p-8 sm:p-12">
          ...
        </div>
        */}

      </div>
    </section>
  );
}
