"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, SparkIcon, StoreIcon, HeartIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-[120px] lg:pt-[180px]"
      style={{
        // Dégradé diagonal bleu → noir avec paliers intermédiaires
        // pour une transition douce, sans « marche » visible à l'œil
        backgroundImage:
          "linear-gradient(135deg, #0875B9 0%, #076699 26%, #04405f 56%, #001b2b 82%, #000000 100%)",
      }}
    >
      {/* Lueurs décoratives discrètes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-white/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[420px] w-[420px] -translate-x-1/2 translate-y-1/3 rounded-full bg-[#0875B9]/40 blur-[120px]"
      />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Texte - Colonne gauche */}
          <div className="flex flex-col items-start space-y-8 py-12 lg:py-20">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white ring-1 ring-white/15 backdrop-blur-sm">
              Nouveautés 2026
            </div>

            {/* Titre */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Découvrez l'Excellence du{" "}
              <span className="relative inline-block">
                Sport
                <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#0875B9]" />
              </span>{" "}
              et de la Mobilité
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              No Borders ASBL allie engagement social et passion du cyclisme.
              Participez à nos activités sportives inclusives et découvrez notre
              boutique de vélos haut de gamme.
            </p>

            {/* Boutons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/boutique"
                className="btn btn-lg gap-2 border-0 bg-[#0875B9] text-white shadow-lg shadow-black/25 ring-1 ring-white/20 hover:bg-[#065f9a]"
              >
                Découvrir nos vélos <ArrowRight size={20} />
              </Link>
              <Link
                href="/notre-projet"
                className="btn btn-lg border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-ink"
              >
                Nos activités
              </Link>
            </div>

            {/* Features au bas */}
            <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white/75">
                <StoreIcon size={18} className="text-white" />
                Boutique Solidaire
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-white/75">
                <SparkIcon size={18} className="text-white" />
                Activités Inclusives
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-white/75">
                <HeartIcon size={18} className="text-white" />
                Impact Social
              </div>
            </div>
          </div>

          {/* Image - Colonne droite (Masquée sur mobile) */}
          <div className="hidden lg:relative lg:block lg:h-[700px]">
            {/* Image principale avec effet Ken Burns léger */}
            <div className="relative h-full w-full overflow-hidden rounded-[40px]">
              <Image
                src="/images/cool-helmet-studio-removebg-preview.png"
                alt="Vélo de route haut de gamme No Borders"
                fill
                className="object-cover animate-kenburns"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
