"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

const PRODUCTS = [
  {
    id: 1,
    category: "Vélos de ville",
    name: "Urban Glide Pro 7",
    reviews: 124,
    price: 899,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-de-ville",
  },
  {
    id: 2,
    category: "VTT",
    name: 'TrailBlazer X 29"',
    reviews: 87,
    price: 1490,
    oldPrice: 1790,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=vtt",
  },
  {
    id: 3,
    category: "Vélos cargo",
    name: "CargoPro Family 300",
    reviews: 56,
    price: 2290,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-cargo",
  },
  {
    id: 4,
    category: "Vélos gravel",
    name: "Gravel King GX 700",
    reviews: 98,
    price: 1199,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-gravel",
  },
  {
    id: 5,
    category: "Vélos trekking",
    name: "Explorer Trek 500",
    reviews: 73,
    price: 749,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-trekking",
  },
  {
    id: 6,
    category: "Vélos elliptiques",
    name: "ElliptiGO Arc 8",
    reviews: 41,
    price: 2999,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-elliptiques",
  },
  {
    id: 7,
    category: "Vélos tandem",
    name: "Duo Cruiser Tandem",
    reviews: 29,
    price: 1650,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-tandem",
  },
  {
    id: 8,
    category: "Stand Up Bikes",
    name: "StandUp Rider S2",
    reviews: 19,
    price: 1350,
    oldPrice: 1550,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=stand-up-bikes",
  },
];

export function FeaturedProducts() {
  const total = PRODUCTS.length;
  const [displayIndex, setDisplayIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Duplication pour défilement circulaire fluide
  const loopItems = [...PRODUCTS, ...PRODUCTS];

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
    <section className="bg-white py-24 sm:py-32" id="produits-phares">
      <div className="container">

        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Nos produits phares
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Une sélection de nos vélos les plus appréciés — qualité,
              confort et performance pour chaque type de cycliste.
            </p>
          </div>
        </Reveal>

        {/* ── Carrousel 4 par 4 (Desktop: 4, Tablette: 2, Mobile: 1) ── */}
        <div className="relative">
          {/* Flèche gauche desktop */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Produit précédent"
            className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white border border-ink/10 text-ink shadow-lg transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-105"
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
            {loopItems.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="w-full shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/4"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:border-ink/30 hover:shadow-lg">
                  <Link
                    href={p.href}
                    aria-label={`Voir ${p.name}`}
                    className="relative block aspect-[4/3] w-full overflow-hidden bg-ink/5"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
                      {p.category}
                    </p>
                    <h3 className="mt-1 text-base font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                      <Link href={p.href}>{p.name}</Link>
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/50">
                      <span className="text-amber-400">★★★★★</span>
                      <span>{p.reviews} avis</span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="text-lg font-extrabold text-ink">
                        {p.price.toLocaleString("fr-BE")} €
                      </span>
                      {p.oldPrice && (
                        <span className="text-sm text-ink/40 line-through">
                          {p.oldPrice.toLocaleString("fr-BE")} €
                        </span>
                      )}
                    </div>
                    <div className="mt-auto pt-5 grid grid-cols-2 gap-2">
                      <Link
                        href={p.href}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 px-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-primary-hover text-center"
                      >
                        Panier <ArrowRight size={14} />
                      </Link>
                      <Link
                        href={`/nous-contacter?sujet=reservation&produit=${encodeURIComponent(p.name)}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-primary/30 py-2.5 px-2 text-xs sm:text-sm font-semibold text-primary transition-colors hover:bg-primary/10 hover:border-primary text-center"
                      >
                        Réserver
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Flèche droite desktop */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Produit suivant"
            className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-white border border-ink/10 text-ink shadow-lg transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-105"
          >
            <ChevronRightIcon size={20} />
          </button>
        </div>

        {/* ── Dots + flèches mobiles ── */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Produit précédent"
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeftIcon size={18} />
          </button>

          <div className="flex items-center gap-2">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Aller au produit ${p.name}`}
                aria-current={i === activeDot ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot
                    ? "h-2.5 w-7 bg-primary"
                    : "h-2.5 w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Produit suivant"
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Voir tout le catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
