import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { objectives, horizon, testimonials } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight, QuoteIcon, SparkIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Notre Projet",
  description:
    "Découvrez les objectifs, les valeurs et les perspectives de No Borders ASBL : inclusion sociale, interculturalité, mobilité douce et solidarité.",
};

export default function NotreProjetPage() {
  return (
    <div className="pt-28 sm:pt-36">
      {/* En-tête */}
      <section className="bg-paper py-16 sm:py-24 border-b border-ink/5">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Vision & Actions</span>
            <h1 className="mt-4 text-display-lg font-extrabold tracking-tight text-ink">
              Notre Projet de Société
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed">
              Pour améliorer le vivre-ensemble à Mons et en Wallonie, nous accompagnons les primo-arrivants, facilitons la mixité sociale et luttons activement contre toute forme d’exclusion.
            </p>
          </div>
        </div>
      </section>

      {/* Détail des objectifs */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container space-y-24 sm:space-y-32">
          {objectives.map((obj, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={obj.id}
                id={obj.id}
                className="grid gap-12 lg:grid-cols-12 lg:items-center"
              >
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-ink/5 shadow-xl">
                    <Image
                      src={obj.image}
                      alt={obj.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-flame-deep">
                    Axe 0{i + 1}
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink">
                    {obj.title}
                  </h2>
                  <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink/80">
                    {obj.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Horizon 2025 */}
      <section className="bg-ink py-20 sm:py-28 text-white grain relative">
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow eyebrow-light justify-center">Perspectives d'Avenir</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {horizon.title}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
              {horizon.text}
            </p>
            <div className="mt-10 inline-block rounded-2xl border border-white/20 bg-white/5 px-8 py-5 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl font-black text-flame tracking-tight">
                « {horizon.motto} »
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages intégrés */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">Retours d'Expérience</span>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Ils témoignent de leur vécu
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm">
                <QuoteIcon size={28} className="text-flame mb-4" />
                <p className="text-base text-ink/85 italic leading-relaxed">
                  « {t.quote} »
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-paper">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{t.name}</h3>
                    <span className="text-xs text-ink/60 uppercase">Membre</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/nous-contacter" className="btn btn-primary btn-lg gap-2">
              Participer à nos projets <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
