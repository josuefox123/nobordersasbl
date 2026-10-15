import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos activités",
  description:
    "Activités socio-culturelles, sorties culturelles, organisations sportives et promotion de vélos en bambou : découvrez les activités de No Borders ASBL à Mons.",
};

type Activity = {
  id: string;
  title: string;
  tags: string;
  text: string;
  image: string;
  href: string;
  external?: boolean;
};

const activities: Activity[] = [
  {
    id: "socio-culturelles",
    title: "Activités socio-culturelles",
    tags: "Basées sur diverses thématiques",
    text: "Ateliers, jeux, échanges et débats autour de thématiques variées : des moments conviviaux pour se rencontrer, apprendre les uns des autres et faire de notre diversité culturelle une richesse.",
    image: "/images/socio-culturelles.jpg",
    href: "/notre-projet#interculturalite",
  },
  {
    id: "sorties-culturelles",
    title: "Sorties culturelles",
    tags: "Musées · Visites · Découvertes",
    text: "Visites de musées, de villes et de lieux emblématiques de Belgique : nos sorties ouvrent de nouveaux horizons et favorisent l’inclusion des familles et des jeunes dans la société locale.",
    image: "/images/sorties-culturelles.jpg",
    href: "/actualites",
  },
  {
    id: "organisations-sportives",
    title: "Organisations sportives",
    tags: "Football · Natation · Cyclisme · Marche",
    text: "Né autour d’un ballon à la Place du Parc, No Borders fait du sport un formidable outil de rencontre. Tournois, sorties vélo et marches rassemblent des participants de toutes origines.",
    image: "/images/organisations-sportives.jpg",
    href: "/notre-projet#inclusion",
  },
  {
    id: "promotion-vente",
    title: "Promotion & vente d’articles",
    tags: "Vélos en bambou · Hase Bikes · …",
    text: "Nous promouvons une mobilité douce et durable à travers la vente de vélos en bambou, de vélos adaptés Hase Bikes et d’accessoires, au service de projets solidaires Nord-Sud.",
    image: "/images/vente-velo.jpg",
    href: site.eshop.href,
    external: true,
  },
];

export default function NosActivitesPage() {
  return (
    <div className="mt-[84px] lg:mt-[188px]">
      {/* ── En-tête de page : badge, fil d'Ariane, titre, intro ── */}
      <section className="border-b border-ink/5 bg-paper py-16 sm:py-20" aria-labelledby="activites-heading">
        <div className="container">
          <Reveal>
            <nav aria-label="Fil d'Ariane">
              <ol className="flex items-center gap-2 text-sm text-ink/50">
                <li>
                  <Link href="/" className="transition-colors hover:text-flame">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-semibold text-ink">
                  Activités
                </li>
              </ol>
            </nav>

            <h1
              id="activites-heading"
              className="mt-4 text-display-lg font-extrabold tracking-tight text-ink"
            >
              Nos activités
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/75 sm:text-xl">
              Sport, culture, découvertes et mobilité douce : à Mons et partout en
              Wallonie, nos activités créent des ponts entre les communautés et
              brisent les frontières mentales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Liste des activités : texte gauche / image droite ── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Liste des activités">
        <div className="container flex flex-col gap-10 sm:gap-14">
          {activities.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.05}>
              <article
                id={a.id}
                className="group grid scroll-mt-48 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:border-ink hover:shadow-xl lg:grid-cols-2"
              >
                {/* Texte */}
                <div className="order-2 flex flex-col justify-center p-8 sm:p-12 lg:order-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flame">
                    {a.tags}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    {a.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                    {a.text}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href={a.href}
                      id={`activite-${a.id}-en-savoir-plus`}
                      {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2.5 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-flame focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                    >
                      En savoir plus
                      <ArrowRight size={17} />
                    </Link>
                    <Link
                      href="/nous-contacter"
                      id={`activite-${a.id}-contact`}
                      className="inline-flex items-center gap-2 rounded-xl border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="relative order-1 aspect-[4/3] w-full overflow-hidden bg-ink/5 lg:order-2 lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Deux blocs d'appel à l'action ── */}
      <section className="bg-paper py-20 sm:py-24" aria-label="Rejoindre No Borders">
        <div className="container grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl bg-ink p-10 text-white sm:p-12">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.35em] text-flame">
                Participer
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Rejoignez nos activités
              </h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Bénévole, participant ou curieux : chacun a sa place chez No Borders.
              </p>
              <Link
                href="/nous-contacter?sujet=benevolat"
                id="activites-cta-benevole"
                className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-xl bg-flame px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-flame-deep"
              >
                Devenir bénévole <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-10 sm:p-12">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.35em] text-flame">
                Soutenir
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Soutenez nos projets
              </h2>
              <p className="mt-4 leading-relaxed text-ink/70">
                Vos dons permettent de faire vivre nos activités et nos projets solidaires.
              </p>
              <Link
                href="/nous-soutenir"
                id="activites-cta-soutenir"
                className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-xl bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-flame"
              >
                Nous soutenir <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
