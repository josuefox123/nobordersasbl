"use client";

import Image from "next/image";
import Link from "next/link";
import { press, events } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight, ArrowUpRight, CalendarIcon } from "@/components/ui/Icons";

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
          {press.map((item) => (
            <StaggerItem key={item.title}>
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
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-flame focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                      >
                        En savoir plus <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <Link
                        href="/presse"
                        className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-flame focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                      >
                        En savoir plus <ArrowRight size={15} />
                      </Link>
                    )}
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

        {/* ── Bloc Prochains Événements ── */}
        <div className="mt-20 rounded-3xl border border-ink/10 bg-white p-8 sm:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-flame-soft text-flame-deep shrink-0">
                <CalendarIcon size={28} />
              </div>
              <div>
                <span className="eyebrow text-xs">Agenda Associatif</span>
                <h3 className="text-xl font-bold text-ink sm:text-2xl">
                  Prochains événements & rendez-vous
                </h3>
              </div>
            </div>
            <Link
              href="/nous-contacter?sujet=evenement"
              className="btn btn-ink btn-sm sm:btn-md"
            >
              Proposer une rencontre ou un match
            </Link>
          </div>

          <div className="mt-8 border-t border-ink/10 pt-6">
            {events.length === 0 ? (
              <p className="text-sm text-ink/70 leading-relaxed">
                Les prochaines dates d'animations, tournois interculturels et sorties de groupe sont en cours de planification. Suivez nos canaux pour les annonces officielles ou contactez directement l'équipe pour organiser une action conjointe.
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {events.map((evt) => (
                  <div key={evt.title} className="rounded-xl border border-ink/10 p-4">
                    <span className="text-xs font-bold text-flame uppercase">{evt.date}</span>
                    <h4 className="font-bold text-ink">{evt.title}</h4>
                    <span className="text-xs text-ink/60">{evt.place}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
