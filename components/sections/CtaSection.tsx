"use client";

import Link from "next/link";
import { ArrowRight, HeartIcon, SparkIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="bg-ink py-24 sm:py-32 text-white relative overflow-hidden grain">
      {/* Halo coloré */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-flame/20 blur-[130px]"
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Devenez acteur du changement avec <span className="text-flame">No Borders</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base text-white/75 sm:text-lg leading-relaxed">
                Vous partagez notre vision d’une société inclusive et solidaire ? Que ce soit par le bénévolat sur le terrain, une proposition de partenariat institutionnel ou un soutien financier direct, votre apport fait grandir le vivre ensemble.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/nous-contacter?sujet=benevolat"
                  className="btn btn-primary btn-lg shadow-lg shadow-flame/30 gap-2"
                >
                  <SparkIcon size={18} /> Devenir bénévole
                </Link>
                <Link
                  href="/nous-soutenir"
                  className="btn btn-ghost-light btn-lg gap-2"
                >
                  <HeartIcon size={18} className="text-flame" /> Faire un don
                </Link>
                <Link
                  href="/nous-contacter?sujet=partenariat"
                  className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-ink btn-lg gap-2"
                >
                  Proposer un partenariat <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal delay={0.25} x={30}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white">Notre engagement</h3>
                <ul className="mt-6 space-y-4 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 mt-2 rounded-full bg-flame shrink-0" />
                    <span>Transparence totale et statut ASBL légal en Belgique (n° 0837.069.715).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 mt-2 rounded-full bg-flame shrink-0" />
                    <span>Activités ouvertes à tous sans distinction d'origine, d'âge ou de condition.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-2 w-2 mt-2 rounded-full bg-flame shrink-0" />
                    <span>100% des dons réinvestis dans nos projets d’inclusion et nos sorties.</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
