"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

const SLIDES = [
  {
    src: "/images/hero-groupe.jpg",
    alt: "No Borders ASBL — membres réunis pour une activité interculturelle",
  },
  {
    src: "/images/organisations-sportives.jpg",
    alt: "No Borders ASBL — activités sportives inclusives",
  },
  {
    src: "/images/bxl-tour.jpg",
    alt: "No Borders ASBL — tour à vélo à Bruxelles",
  },
  {
    src: "/images/lancement-myboo.jpg",
    alt: "No Borders ASBL — lancement des vélos en bambou My Boo",
  },
];

const INTERVAL = 5000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, INTERVAL);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goTo(index: number) {
    setCurrent(index);
    startTimer();
  }

  return (
    <section
      aria-label="Accueil No Borders ASBL"
      className="relative w-full overflow-hidden mt-[84px] lg:mt-[188px] min-h-[380px] sm:min-h-[460px] lg:h-[calc(100vh-188px)] lg:min-h-[520px] flex flex-col justify-center"
    >
      {/* ── Slideshow d'arrière-plan ── */}
      <div className="absolute inset-0 overflow-hidden">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
            }`}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* ── Overlays dégradés pour contraste et lisibilité ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/60 to-black/35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-transparent to-black/25"
      />

      {/* ── Contenu texte & boutons ── */}
      <div className="container relative z-10 py-5 sm:py-6">
        <div className="max-w-2xl space-y-3 sm:space-y-3.5">

          {/* Titre */}
          <h1 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            Découvrez l&apos;Excellence du{" "}
            <span className="relative inline-block text-white">
              Sport
              <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-primary" />
            </span>{" "}
            et de la Mobilité
          </h1>

          {/* Description */}
          <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            No Borders ASBL allie engagement social et passion du cyclisme.
            Participez à nos activités sportives inclusives et découvrez notre
            boutique solidaire de vélos haut de gamme.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/boutique"
              className="btn px-6 py-2.5 sm:py-3 text-sm sm:text-[0.95rem] gap-2 border-0 bg-primary text-white shadow-xl shadow-black/30 ring-1 ring-white/20 hover:bg-primary-hover"
            >
              Découvrir nos vélos <ArrowRight size={18} />
            </Link>
            <Link
              href="/nos-activites"
              className="btn px-6 py-2.5 sm:py-3 text-sm sm:text-[0.95rem] border border-white/40 bg-white/10 text-white backdrop-blur-md hover:border-white hover:bg-white hover:text-ink"
            >
              Nos activités
            </Link>
          </div>

        </div>
      </div>

      {/* ── Dots de navigation (Desktop) ── */}
      <div
        className="absolute bottom-6 right-8 z-20 hidden items-center gap-2.5 sm:flex"
        role="tablist"
        aria-label="Navigation du diaporama"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Aller à la diapositive ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === current
                ? "h-2.5 w-8 bg-primary ring-2 ring-white"
                : "h-2.5 w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* ── Dots de navigation (Mobile) ── */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex sm:hidden items-center gap-2"
        role="tablist"
        aria-label="Navigation du diaporama"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Diapositive ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "h-2 w-6 bg-primary" : "h-2 w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
