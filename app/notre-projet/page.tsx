import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { objectives, horizon } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight, SparkIcon } from "@/components/ui/Icons";

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
            <div className="mt-12">
              <Link href="/nous-contacter" className="btn btn-primary btn-lg gap-2">
                Participer à nos projets <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
