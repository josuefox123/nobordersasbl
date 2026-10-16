import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, intro, timeline } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight, SparkIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la mission et les valeurs de No Borders ASBL : briseur de frontières mentales à Mons depuis 2007.",
};

export default function AProposPage() {
  return (
    <div className="pt-28 sm:pt-36">
      {/* ── En-tête ── */}
      <section className="bg-paper py-16 sm:py-24 border-b border-ink/5">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Notre Histoire</span>
            <h1 className="mt-4 text-display-lg font-extrabold tracking-tight text-ink">
              À propos de No Borders
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed">
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* ── Raison d'être & Vision ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <span className="text-[0.7rem] font-black uppercase tracking-[0.35em] text-[#0875B9]">
                  Nos Racines
                </span>
                <h2 className="mt-2 text-display-md font-extrabold tracking-tight text-ink">
                  Faire de la diversité une force
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink/75 sm:text-lg">
                  Née en 2007 à Mons autour d&apos;un ballon de football, No Borders ASBL
                  a grandi pour devenir une référence de l&apos;inclusion sociale et de
                  l&apos;interculturalité en Wallonie.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
                  Nous croyons que chaque être humain apporte une richesse unique. À
                  travers le sport, les ateliers culturels, la citoyenneté et les
                  projets de mobilité douce, nous créons des ponts là où les frontières
                  mentales persistent.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/notre-projet"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0875B9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f9a]"
                  >
                    Notre projet de société
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/nous-contacter"
                    className="inline-flex items-center gap-2 rounded-xl border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-[#0875B9] hover:text-[#0875B9]"
                  >
                    Nous rejoindre
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/mains.jpg"
                  alt="Membres de No Borders ASBL unis pour l'interculturalité"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur shadow-lg">
                  <p className="text-sm font-bold text-ink">
                    « Briseur de frontières mentales »
                  </p>
                  <p className="mt-1 text-xs text-ink/65">
                    Notre devise depuis plus de 15 ans à Mons et en Belgique.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Frise chronologique (Timeline) ── */}
      <section className="bg-paper py-20 sm:py-28 border-t border-ink/5">
        <div className="container">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">Les grandes étapes</span>
              <h2 className="mt-3 text-display-md font-extrabold tracking-tight text-ink">
                Notre parcours depuis 2007
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 space-y-12">
            <Stagger>
              {timeline.map((item, idx) => (
                <StaggerItem key={item.year}>
                  <div className="grid gap-8 rounded-3xl border border-ink/10 bg-white p-8 sm:p-10 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-3">
                      <span className="inline-block rounded-xl bg-[#0875B9]/10 px-4 py-2 font-mono text-xl font-black text-[#0875B9]">
                        {item.year}
                      </span>
                    </div>
                    <div className="lg:col-span-5">
                      <h3 className="text-xl font-bold text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-base text-ink/75 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink/5 lg:col-span-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </div>
  );
}
