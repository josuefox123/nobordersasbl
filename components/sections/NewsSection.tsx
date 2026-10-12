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
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Vie de l’ASBL & Médias</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
                Actualités, presse et événements
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base text-ink/75 sm:text-lg">
                Revivez nos interventions, nos tournois solidaires et les reportages consacrés à nos projets.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link href="/presse" className="btn btn-outline-ink gap-2 self-start md:self-auto">
              Tous les articles <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* Grille des articles de presse */}
        <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {press.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group flex flex-col h-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-ink">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  {item.source && (
                    <span className="absolute top-3 right-3 badge badge-primary font-bold text-xs uppercase tracking-wider">
                      {item.source}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <time dateTime={item.isoDate} className="text-xs font-semibold text-ink/50 uppercase tracking-wider">
                    {item.date}
                  </time>
                  <h3 className="mt-2 text-lg font-bold text-ink leading-snug group-hover:text-flame transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/70 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto pt-6">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-flame-deep hover:underline"
                      >
                        Consulter la source <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <Link
                        href="/presse"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink/70 hover:text-ink"
                      >
                        Lire les détails <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bloc Prochains Événements (structure prête & vérifiée) */}
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
                Les prochaines dates d’animations, tournois interculturels et sorties de groupe sont en cours de planification. Suivez nos canaux pour les annonces officielles ou contactez directement l’équipe pour organiser une action conjointe.
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
