"use client";

import Image from "next/image";
import { intro, timeline, values } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { QuoteIcon, SparkIcon } from "@/components/ui/Icons";

export function MissionSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id="mission">
      <div className="container">
        {/* En-tête éditorial */}
        <div className="max-w-3xl">
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
        </div>

        {/* Bloc Nos Valeurs */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="eyebrow">Nos Piliers</span>
            <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
              Ce qui guide nos actions au quotidien
            </h3>
          </div>

          <Stagger className="grid gap-6 md:grid-cols-3">
            {values.map((val, idx) => (
              <StaggerItem key={val.title}>
                <div className="card h-full border border-ink/10 bg-paper p-8 transition-all duration-300 hover:border-flame/40 hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm text-flame">
                    <SparkIcon size={22} />
                  </div>
                  <h4 className="text-xl font-bold text-ink">{val.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{val.text}</p>
                  {"cite" in val && val.cite && (
                    <span className="mt-4 block text-xs font-bold uppercase tracking-wider text-flame-deep">
                      — {val.cite}
                    </span>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Frise chronologique visuelle */}
        <div className="mt-24 border-t border-ink/10 pt-20">
          <div className="mb-12 max-w-xl">
            <span className="eyebrow">Parcours</span>
            <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
              Les grandes étapes de l’ASBL
            </h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((item, idx) => (
              <Reveal key={item.year} delay={idx * 0.1}>
                <div className="group flex flex-col h-full rounded-2xl border border-ink/10 bg-white p-5 transition-all duration-300 hover:border-ink hover:shadow-md">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-ink/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="280px"
                    />
                  </div>
                  <span className="mt-4 inline-block font-black text-flame text-lg">
                    {item.year}
                  </span>
                  <h4 className="mt-1 font-bold text-ink text-base">
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
      </div>
    </section>
  );
}
