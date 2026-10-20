import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { timeline } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire, la mission et les valeurs de No Borders ASBL : briseur de frontières mentales à Mons depuis 2007.",
};

const keyStats = [
  { value: "2007", label: "Fondation à Mons" },
  { value: "15+", label: "Ans d'engagement" },
  { value: "8+", label: "Nationalités dès nos débuts" },
];

export default function AProposPage() {
  return (
    <div className="mt-[84px] lg:mt-[188px]">
      {/* ── Breadcrumb & En-tête ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "À propos" },
        ]}
        title="À propos de No Borders"
        description="Découvrez l'histoire, la mission et les valeurs de No Borders ASBL : briseur de frontières mentales à Mons depuis 2007."
        image="/images/hero-groupe.jpg"
      />

      {/* ── Section 1 : Notre Histoire ── */}
      <section className="border-b border-ink/5 bg-paper py-16 sm:py-24">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div>
                  <h2 className="text-display-md font-extrabold tracking-tight text-ink">
                    Briser les frontières mentales par la rencontre
                  </h2>

                  <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-ink/80">
                    <p>
                      Née en 2007 à Mons, No Borders ASBL œuvre pour briser les frontières
                      mentales et faire de la diversité culturelle une richesse partagée à
                      travers le sport, la culture et la solidarité.
                    </p>
                    <p className="text-base text-ink/70">
                      Dans la capitale culturelle de la Wallonie, les communautés vivaient
                      souvent en vase clos selon leur pays d’origine, créant des cloisonnements
                      qui freinaient leur pleine intégration dans la société locale.
                    </p>
                    <p className="text-base text-ink/70">
                      Pour surmonter ces barrières et unir nos forces, nous avons fondé
                      l&apos;ASBL afin de favoriser les rencontres authentiques et l&apos;inclusion
                      par le biais d&apos;activités sportives, socio-culturelles et de projets durables.
                    </p>
                  </div>

                  {/* Chiffres clés */}
                  <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-ink/10">
                    {keyStats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl sm:text-3xl font-black text-primary font-mono">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs sm:text-sm font-medium text-ink/65 leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 shadow-xl">
                  <Image
                    src="/images/hero-groupe.jpg"
                    alt="Membres de No Borders ASBL réunis à Mons"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur shadow-md">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Engagement citoyen
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-ink">
                      Une équipe unie pour le vivre-ensemble
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2 : Raison d'être & Vision (Nos Racines) ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <h2 className="text-display-md font-extrabold tracking-tight text-ink">
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
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover active:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Notre projet de société
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/nous-contacter"
                    className="inline-flex items-center gap-2 rounded-xl border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary active:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Nous rejoindre
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/debut-2.jpg"
                  alt="Équipe fondatrice de No Borders ASBL à Mons"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur shadow-lg border-l-4 border-primary">
                  <p className="text-sm font-bold text-ink">
                    « Briseur de frontières mentales »
                  </p>
                  <p className="mt-1 text-xs text-ink/70">
                    Notre devise depuis plus de 15 ans à Mons et en Wallonie.
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
              <h2 className="text-display-md font-extrabold tracking-tight text-ink">
                Notre parcours depuis 2007
              </h2>
              <p className="mt-4 text-base text-ink/75 sm:text-lg">
                Des terrains de football de Mons aux projets d&apos;inclusion durable et de solidarité internationale.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-16">
            {/* Ligne verticale du parcours */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 lg:left-1/2"
            />

            <Stagger as="ol">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0; // alterne gauche/droite sur grand écran
                return (
                  <StaggerItem
                    as="li"
                    key={item.year}
                    className={`relative pl-14 lg:grid lg:grid-cols-2 lg:gap-20 lg:pl-0 ${i > 0 ? "mt-12 lg:-mt-48" : ""}`}
                  >
                    {/* Jalon numéroté */}
                    <span
                      aria-hidden="true"
                      className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-paper bg-primary text-sm font-bold text-white shadow-md lg:left-1/2"
                    >
                      {i + 1}
                    </span>

                    {/* Card (design Presse) */}
                    <article
                      className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md lg:max-w-md ${
                        isLeft ? "lg:col-start-1 lg:justify-self-end" : "lg:col-start-2 lg:justify-self-start"
                      }`}
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 448px"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                          {item.year}
                        </span>
                      </div>

                      {/* Contenu */}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mb-5 mt-3 text-sm leading-relaxed text-ink/70">
                          {item.text}
                        </p>

                        <div className="mt-auto border-t border-ink/10 pt-5">
                          <span className="inline-flex w-full items-center gap-2 rounded-xl bg-paper px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink/50">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                            Étape {i + 1} sur {timeline.length}
                          </span>
                        </div>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>
    </div>
  );
}
