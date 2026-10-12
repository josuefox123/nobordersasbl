"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials, Testimonial } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { QuoteIcon, CloseIcon } from "@/components/ui/Icons";

export function TestimonialsSection() {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  return (
    <section className="bg-white py-24 sm:py-32" id="temoignages">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">Paroles de Membres</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Ils sont passés par No Borders !
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-base text-ink/75 sm:text-lg">
              Témoignages authentiques et vérifiés de sportifs, bénévoles et acteurs engagés au sein de notre collectif.
            </p>
          </Reveal>
        </div>

        {/* Grille des 4 témoignages vérifiés */}
        <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="card flex flex-col justify-between h-full rounded-3xl border border-ink/10 bg-paper p-8 transition-all duration-300 hover:border-flame/40 hover:shadow-lg">
                <div>
                  <QuoteIcon size={32} className="text-flame mb-6" />
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-ink/90 italic">
                    « {t.quote} »
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-ink/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-ink/10 bg-white">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink text-base">{t.name}</h3>
                      <span className="text-xs font-medium text-ink/60 uppercase tracking-wider">
                        Membre No Borders
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelected(t)}
                    className="btn btn-ghost btn-sm text-xs font-bold uppercase tracking-wider text-flame-deep hover:bg-flame-soft"
                  >
                    Lire la suite →
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Modale d'affichage du témoignage complet */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl sm:p-10 text-ink max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-ink/70"
              aria-label="Fermer"
            >
              <CloseIcon size={20} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-ink/10 bg-paper">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ink">{selected.name}</h3>
                <span className="text-xs uppercase tracking-wider text-flame-deep font-bold">
                  Témoignage complet
                </span>
              </div>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-ink/80">
              {selected.full.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-ink/10 pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="btn btn-ink btn-sm"
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
