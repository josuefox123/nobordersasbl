"use client";

import Link from "next/link";
import { ArrowRight, HeartIcon, SparkIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-32" style={{ backgroundColor: "#0B0B0C" }}>

      {/* Halo bleu — cohérent avec notre couleur primaire */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full blur-[130px]"
        style={{ backgroundColor: "rgba(8,117,185,0.25)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full blur-[100px]"
        style={{ backgroundColor: "rgba(8,117,185,0.15)" }}
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* ── Texte principal ── */}
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Devenez acteur du changement avec{" "}
                <span style={{ color: "#0875B9" }}>No Borders</span>.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Vous partagez notre vision d'une mobilité douce, inclusive et solidaire ?
                Rejoignez-nous en tant que bénévole, partenaire ou donateur — chaque
                contribution compte pour faire avancer notre projet.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                {/* Bouton primaire bleu */}
                <Link
                  href="/nous-contacter?sujet=benevolat"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  style={{ backgroundColor: "#0875B9" }}
                >
                  <SparkIcon size={17} /> Devenir bénévole
                </Link>

                {/* Bouton secondaire blanc contour */}
                <Link
                  href="/nous-soutenir"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <HeartIcon size={17} /> Faire un don
                </Link>

                {/* Bouton tertiaire outline */}
                <Link
                  href="/nous-contacter?sujet=partenariat"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Proposer un partenariat <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ── Card engagement ── */}
          <div className="lg:col-span-4">
            <Reveal delay={0.25} x={30}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white">Notre engagement</h3>
                <ul className="mt-6 space-y-4 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: "#0875B9" }}
                    />
                    <span>Transparence totale et statut ASBL légal en Belgique (n° 0837.069.715).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: "#0875B9" }}
                    />
                    <span>Activités ouvertes à tous sans distinction d'origine, d'âge ou de condition.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: "#0875B9" }}
                    />
                    <span>100 % des dons réinvestis dans nos projets d'inclusion et nos sorties.</span>
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
