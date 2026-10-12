"use client";

import Image from "next/image";
import Link from "next/link";
import { activities } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function ActivitiesSection() {
  return (
    <section className="bg-paper py-24 sm:py-32" id="activites">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Domaines d'action</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
                Nos activités au cœur du territoire
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base text-ink/75 sm:text-lg">
                Du sport à la culture en passant par la mobilité douce, nos projets favorisent l’échange et l’apprentissage mutuel.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <Link href="/notre-projet" className="btn btn-ink gap-2 self-start md:self-auto">
              Voir tous les objectifs <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* Grille asymétrique des 4 activités */}
        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((act, idx) => (
            <StaggerItem key={act.title}>
              <div className="group flex flex-col h-full overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:border-flame/40">
                {/* Photo avec effet de zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-neutral font-semibold text-xs tracking-wider uppercase px-3 py-1">
                      {act.tag}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-flame-deep">
                    {act.subtitle}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                    {act.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                    {act.text}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
