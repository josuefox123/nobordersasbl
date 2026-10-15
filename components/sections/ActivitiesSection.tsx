"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

// Images Unsplash vérifiées par photo ID (format stable)
const CATEGORIES = [
  {
    title: "Vélos de ville",
    description:
      "Des vélos pratiques et confortables, idéals pour les déplacements quotidiens en ville et les trajets domicile-travail.",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-de-ville",
  },
  {
    title: "VTT (vélos tout-terrain)",
    description:
      "Des vélos robustes conçus pour explorer les sentiers, les chemins accidentés et les terrains difficiles.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=vtt",
  },
  {
    title: "Vélos gravel",
    description:
      "Des vélos polyvalents adaptés aussi bien aux routes goudronnées qu'aux chemins de gravier et aux pistes.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-gravel",
  },
  {
    title: "Vélos trekking",
    description:
      "Des vélos confortables et polyvalents, parfaits pour les longues balades, les randonnées et les voyages à vélo.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-trekking",
  },
  {
    title: "Vélos tandem",
    description:
      "Des vélos conçus pour deux personnes, permettant de pédaler ensemble et de partager des balades ou des aventures.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-tandem",
  },
  {
    title: "Vélos elliptiques",
    description:
      "Des vélos innovants qui reproduisent le mouvement d'un appareil elliptique, combinant déplacement en extérieur et entraînement physique.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-elliptiques",
  },
  {
    title: "Vélos debout (Stand Up Bikes)",
    description:
      "Des vélos permettant de pédaler en position debout, offrant une expérience de conduite originale axée sur le mouvement et le fitness.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=stand-up-bikes",
  },
  {
    title: "Vélos cargo",
    description:
      "Des vélos conçus pour transporter des marchandises, des courses ou des équipements grâce à leur capacité de chargement adaptée.",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-cargo",
  },
];

export function ActivitiesSection() {
  const total = CATEGORIES.length;
  const [displayIndex, setDisplayIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Duplication pour défilement circulaire fluide
  const loopItems = [...CATEGORIES, ...CATEGORIES];

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const children = Array.from(scroller.children) as HTMLElement[];
    const target = children[displayIndex];
    if (!target) return;

    if (displayIndex === total) {
      scroller.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
      const t = window.setTimeout(() => {
        const first = children[0];
        if (first) scroller.scrollTo({ left: first.offsetLeft, behavior: "auto" });
        setDisplayIndex(0);
      }, 550);
      return () => window.clearTimeout(t);
    }

    scroller.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  }, [displayIndex, total]);

  useEffect(() => {
    const handleResize = () => {
      const scroller = scrollRef.current;
      if (!scroller) return;
      const children = Array.from(scroller.children) as HTMLElement[];
      const target = children[displayIndex];
      if (target) {
        scroller.scrollTo({ left: target.offsetLeft, behavior: "auto" });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [displayIndex]);

  const handleNext = () => {
    setDisplayIndex((i) => i + 1);
  };

  const handlePrev = () => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const children = Array.from(scroller.children) as HTMLElement[];

    if (displayIndex === 0) {
      const dup = children[total];
      if (dup) {
        scroller.scrollTo({ left: dup.offsetLeft, behavior: "auto" });
      }
      requestAnimationFrame(() => {
        setDisplayIndex(total - 1);
      });
    } else {
      setDisplayIndex((i) => i - 1);
    }
  };

  const goTo = (i: number) => {
    setDisplayIndex(i);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  const activeDot = displayIndex % total;

  return (
    <section className="bg-paper py-24 sm:py-32" id="categories">
      <div className="container">

        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Nos activités au cœur du territoire
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Découvrez notre sélection de vélos adaptés à chaque style de vie.
              Mobilité douce, sport ou aventure — nous avons le vélo qu'il vous faut.
            </p>
          </div>
        </Reveal>

        {/* ── Carrousel 3 par 3 (Desktop: 3, Tablette: 2, Mobile: 1) ── */}
        <div className="relative">
          {/* Flèche gauche desktop */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Catégorie précédente"
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white border border-ink/10 text-ink shadow-lg transition-all hover:bg-[#0875B9] hover:text-white hover:border-[#0875B9] hover:scale-105"
          >
            <ChevronLeftIcon size={20} />
          </button>

          {/* Track du carrousel */}
          <div
            ref={scrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth py-3 -mx-3 px-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {loopItems.map((cat, i) => (
              <div
                key={`${cat.title}-${i}`}
                className="w-full shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/3"
              >
                <Link
                  href={cat.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-bold tracking-tight text-ink">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">{cat.description}</p>
                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#0875B9" }}>
                        Voir tous les vélos <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Flèche droite desktop */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Catégorie suivante"
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white border border-ink/10 text-ink shadow-lg transition-all hover:bg-[#0875B9] hover:text-white hover:border-[#0875B9] hover:scale-105"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>

        {/* ── Dots + flèches mobiles ── */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Catégorie précédente"
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-[#0875B9] hover:text-[#0875B9]"
          >
            <ChevronLeftIcon size={18} />
          </button>

          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller à ${cat.title}`}
                aria-current={i === activeDot ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot
                    ? "h-2.5 w-7 bg-[#0875B9]"
                    : "h-2.5 w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Catégorie suivante"
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-[#0875B9] hover:text-[#0875B9]"
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0875B9" }}
            >
              Voir toutes les catégories <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
