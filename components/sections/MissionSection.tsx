"use client";

import Image from "next/image";
import { intro, values } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function MissionSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id="mission">
      <div className="container">

        {/* ── En-tête ── */}
        {/* <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">Notre Histoire & Notre Mission</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              De la Place du Parc à Mons vers un projet de société durable.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              {intro}
            </p>
          </Reveal>
        </div> */}

        {/* Frise chronologique — commentée temporairement
        <div className="mt-24 border-t border-ink/10 pt-20">
          <div className="mb-12 max-w-xl">
            <span className="eyebrow">Parcours</span>
            <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
              Les grandes étapes de l'ASBL
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, idx) => (
              <Reveal key={item.year} delay={idx * 0.1}>
                <div className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:border-ink hover:shadow-md">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="280px"
                    />
                  </div>
                  <span className="mt-4 inline-block text-lg font-black text-flame">
                    {item.year}
                  </span>
                  <h4 className="mt-1 text-base font-bold text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink/70">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        */}

        {/* ── Nos Valeurs — texte gauche / image droite ── */}
        <div>
          <div className="grid items-center gap-12 lg:grid-cols-12">

            {/* Colonne gauche : titre + valeurs listées */}
            <div className="lg:col-span-6">
              <Reveal>
                <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                  Nos Valeurs
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  Trois piliers fondateurs qui orientent chacune de nos actions
                  et guident notre engagement au quotidien.
                </p>
              </Reveal>

              <div className="mt-10 space-y-8">
                {values.map((val, idx) => (
                  <Reveal key={val.title} delay={0.1 + idx * 0.1}>
                    <div className="flex gap-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-ink">{val.title}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{val.text}</p>
                        {"cite" in val && val.cite && (
                          <span className="mt-2 block text-xs font-bold uppercase tracking-wider text-primary">
                            — {val.cite}
                          </span>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Colonne droite : image */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="group relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-ink/5 shadow-xl ring-1 ring-black/5">
                  <Image
                    src="/images/via-kanana.jpg"
                    alt="Valeurs No Borders ASBL — inclusion, solidarité et interculturalité à Mons"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </Reveal>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
