"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      aria-label="Diaporama No Borders ASBL"
      className="relative w-full overflow-hidden"
      style={{ marginTop: "188px" }}
    >
      {/*
        Technique correcte pour un slider CSS :
        - Wrapper = overflow:hidden (sur la section parente)
        - Piste = flex, largeur = 100% * nombre de slides
        - Chaque slide = 100vw (largeur fixe de la fenêtre)
        - translateX = -(index * 100vw)
      */}
      <div
        className="flex transition-transform duration-700 ease-in-out will-change-transform"
        style={{
          width: `${SLIDES.length * 100}vw`,
          transform: `translateX(-${current * 100}vw)`,
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className="relative shrink-0"
            style={{
              width: "100vw",
              height: "clamp(320px, 55vw, 680px)",
            }}
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

      {/* Dots de navigation */}
      <div
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3"
        role="tablist"
        aria-label="Navigation du diaporama"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Aller à la slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full border-2 border-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
              i === current
                ? "h-3 w-8 bg-white"
                : "h-3 w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Dégradé bas pour lisibilité des dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent"
      />
    </section>
  );
}
