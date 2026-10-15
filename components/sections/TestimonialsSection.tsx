"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { testimonials, Testimonial } from "@/lib/content";
import { ChevronDownIcon, CloseIcon, QuoteIcon } from "@/components/ui/Icons";

const INTERVAL = 4000;

export function TestimonialsSection() {
  const total = testimonials.length;
  // displayIndex va de 0 à total : total correspond au doublon du 1er item (boucle fluide)
  const [displayIndex, setDisplayIndex] = useState(0);
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Items dupliqués pour permettre une boucle visuellement fluide
  const loopItems = [...testimonials, ...testimonials];

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDisplayIndex((i) => (i + 1) % (total + 1));
    }, INTERVAL);
  }

  useEffect(() => {
    if (!paused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  // Fait défiler le conteneur vers l'item courant
  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const children = Array.from(scroller.children) as HTMLElement[];
    const target = children[displayIndex];
    if (!target) return;

    if (displayIndex === total) {
      // Scroll fluide vers le doublon, puis reset instantané sur l'original
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

  function goTo(i: number) {
    setDisplayIndex(i);
    startTimer();
  }

  const activeDot = displayIndex % total;

  return (
    <section
      className="bg-white py-24 sm:py-32"
      id="temoignages"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">

        {/* ── En-tête ── */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Les témoignages de nos clients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Ils ont choisi No Borders pour leur mobilité douce. Découvrez leurs
            expériences authentiques et ce qui les a conquis.
          </p>
        </div>

        {/* ── Carrousel horizontal (desktop & mobile) ── */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-hidden scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopItems.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-full shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/3"
            >
              <div
                className="flex h-full cursor-pointer flex-col justify-between rounded-3xl border border-ink/10 bg-paper p-7 transition-all duration-500 hover:border-[#0875B9]/40 hover:shadow-lg"
                onClick={() => setSelected(t)}
              >
                {/* Citation */}
                <div>
                  <QuoteIcon size={28} className="mb-4 text-[#0875B9]" />

                  {/* ── Étoiles ── */}
                  <div className="mb-3 flex items-center gap-0.5">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#F6C51B" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm font-medium italic leading-relaxed text-ink/85 sm:text-base">
                    « {t.quote} »
                  </p>
                </div>

                {/* Avatar + nom */}
                <div className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0B0B0C&color=ffffff&size=128&bold=true&rounded=true`}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">{t.name}</p>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-wider text-ink/50">
                      Membre No Borders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Dots + flèches ── */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {/* Flèche gauche */}
          <button
            type="button"
            onClick={() => goTo((activeDot - 1 + total) % total)}
            aria-label="Témoignage précédent"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/50 transition-colors hover:border-ink hover:text-ink"
          >
            <ChevronDownIcon size={16} className="rotate-90" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Témoignage ${i + 1}`}
                aria-current={i === activeDot ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  i === activeDot
                    ? "h-2.5 w-7 bg-ink"
                    : "h-2.5 w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          {/* Flèche droite */}
          <button
            type="button"
            onClick={() => goTo((activeDot + 1) % total)}
            aria-label="Témoignage suivant"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/50 transition-colors hover:border-ink hover:text-ink"
          >
            <ChevronDownIcon size={16} className="-rotate-90" />
          </button>
        </div>
      </div>

      {/* ── Modale témoignage complet ── */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Fermer"
              className="absolute right-5 top-5 grid h-8 w-8 place-items-center rounded-full text-ink/50 transition-colors hover:bg-paper hover:text-ink"
            >
              <CloseIcon size={18} />
            </button>

            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-ink/10 shadow">
                <Image
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(selected.name)}&background=0B0B0C&color=ffffff&size=128&bold=true&rounded=true`}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink">{selected.name}</h3>
                <span className="text-xs font-bold uppercase tracking-wider text-flame-deep">
                  Témoignage complet
                </span>
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-ink/80">
              {selected.full.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex justify-end border-t border-ink/10 pt-4">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-flame"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
