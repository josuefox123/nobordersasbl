"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartIcon, SparkIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36">
      {/* Halo subtil en arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-flame/10 blur-[120px]"
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Colonne gauche : typographie percutante */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 shadow-sm">
                <SparkIcon size={14} className="text-sun animate-sparkle" />
                <span className="text-xs font-bold uppercase tracking-wider text-ink/80">
                  Association citoyenne · Mons
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2} y={30}>
              <h1 className="mt-6 text-display-xl font-extrabold tracking-tight text-ink">
                Briser les <br />
                <span className="text-flame underline decoration-flame/30 decoration-wavy">
                  frontières
                </span>{" "}
                mentales.
              </h1>
            </Reveal>

            <Reveal delay={0.3} y={30}>
              <p className="mt-6 max-w-xl text-lg text-ink/75 sm:text-xl font-normal leading-relaxed">
                Faire de notre diversité culturelle une richesse partagée. Depuis 2007, No Borders ASBL favorise l’inclusion sociale et les rencontres interculturelles par le sport, la culture et l’engagement écologique.
              </p>
            </Reveal>

            <Reveal delay={0.4} y={30}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/notre-projet"
                  className="btn btn-primary btn-lg shadow-lg shadow-flame/20 gap-2 btn-arrow"
                >
                  Découvrir notre projet <ArrowRight size={18} />
                </Link>
                <Link
                  href="/nous-soutenir"
                  className="btn btn-outline-ink btn-lg gap-2"
                >
                  <HeartIcon size={18} className="text-flame" /> Nous soutenir
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.5} y={20}>
              <div className="mt-12 flex items-center gap-8 border-t border-ink/10 pt-6">
                <div>
                  <span className="block text-2xl font-black text-ink">2007</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink/60">
                    Fondation à Mons
                  </span>
                </div>
                <div className="h-8 w-px bg-ink/15" />
                <div>
                  <span className="block text-2xl font-black text-ink">+8</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink/60">
                    Nationalités réunies
                  </span>
                </div>
                <div className="h-8 w-px bg-ink/15" />
                <div>
                  <span className="block text-2xl font-black text-ink">100%</span>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink/60">
                    Engagement solidaire
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Colonne droite : composition visuelle asymétrique */}
          <div className="lg:col-span-5">
            <Reveal delay={0.25} x={40}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Cadre photo principal avec coin arrondi prononcé */}
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-ink shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/images/organisations-sportives.jpg"
                    alt="Membres de No Borders ASBL en activité sportive et citoyenne"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  
                  {/* Badge intégré dans la photo */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur-md text-ink shadow-lg">
                    <span className="eyebrow text-xs">Vivre ensemble</span>
                    <p className="mt-1 text-sm font-semibold">
                      « Le sport et la culture pour rassembler au-delà de toute origine. »
                    </p>
                  </div>
                </div>

                {/* Petite carte flottante superposée */}
                <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-flame p-4 text-white shadow-xl animate-bounce-subtle">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/20">
                    <HeartIcon size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-white/80">
                      Impact local
                    </span>
                    <span className="text-sm font-bold">Inclusion & Solidarité</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
