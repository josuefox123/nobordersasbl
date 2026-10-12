"use client";

import Image from "next/image";
import Link from "next/link";
import { objectives } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export function ProjectsSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id="projets">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">Nos Chantiers Majeurs</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Des projets à fort impact social et humain
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-ink/75 sm:text-lg">
              Chaque axe stratégique répond à une réalité concrète : bâtir des ponts entre les cultures et accompagner chacun vers l’autonomie et le respect mutuel.
            </p>
          </Reveal>
        </div>

        {/* Liste alternée de projets */}
        <div className="mt-20 space-y-24 sm:space-y-32">
          {objectives.map((obj, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={obj.id}
                id={obj.id}
                className={`grid items-center gap-12 lg:grid-cols-12 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal delay={0.15}>
                    <div className="group relative aspect-[16/11] overflow-hidden rounded-[2rem] bg-ink/5 shadow-xl ring-1 ring-black/5">
                      <Image
                        src={obj.image}
                        alt={obj.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    </div>
                  </Reveal>
                </div>

                {/* Texte */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={0.25}>
                    <span className="text-xs font-bold uppercase tracking-widest text-flame-deep">
                      Projet 0{idx + 1}
                    </span>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                      {obj.title}
                    </h3>
                    <p className="mt-6 text-base text-ink/75 leading-relaxed sm:text-lg">
                      {obj.text}
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/nous-contacter"
                        className="btn btn-primary btn-sm sm:btn-md gap-2"
                      >
                        Agir sur ce projet <ArrowRight size={16} />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
