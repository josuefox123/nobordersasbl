"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

// Images dédiées à chaque catégorie de vélo
const CATEGORIES = [
  {
    title: "ElliptiGO 11R – Vélo elliptique",
    description:
      "Le vélo elliptique ElliptiGO 11R offre une expérience de course à pied sans impact grâce à son mouvement de pédalage elliptique breveté. Équipé de bras de transmission en fibre de carbone qui réduisent le poids et absorbent les vibrations de la route, il dispose de 11 vitesses pour affronter les montées les plus raides et rouler confortablement sur les terrains plats ou vallonnés. Sa colonne de direction réglable et pliable facilite le transport et le rangement, pour un entraînement performant alliant confort et polyvalence.",
    image: "/images/categories/sec-velos-elliptiques.jpg",
    href: "/boutique?q=ElliptiGO",
  },
  {
    title: "Gravel Bikes – Vélos Gravel",
    description:
      "Découvrez notre gamme de vélos Gravel en bambou, conçus pour offrir confort, légèreté et polyvalence sur les routes et les chemins. Grâce à leur cadre en bambou qui absorbe efficacement les vibrations, leurs haubans permettant un dégagement de pneus jusqu’à 40 mm et leurs transmissions Shimano GRX à 11 ou 12 vitesses, ces vélos garantissent une conduite confortable et des performances adaptées aux aventures sur différents terrains. Leurs câbles intégrés et leurs fixations pour accessoires allient design épuré, praticité et fonctionnalité.",
    image: "/images/categories/Gravel Bikes – Vélos Gravel.jpg",
    href: "/boutique?q=Gravel",
  },
  {
    title: "City et Trekking Bikes – Vélos de ville et de randonnée",
    description:
      "Découvrez notre gamme de vélos de ville et de trekking en bambou, conçus pour offrir confort, durabilité et polyvalence au quotidien comme lors de longues randonnées. Grâce aux propriétés naturelles du bambou, qui absorbe efficacement les vibrations, ces vélos garantissent une conduite agréable, même sur les pavés et les routes irrégulières. Disponibles avec différentes formes de cadre — diamant, trapèze ou enjambement bas —, ils sont personnalisables selon vos préférences. Leurs composants robustes et durables assurent une utilisation fiable, tandis que certains modèles sont compatibles avec une transmission par courroie Gates pour un entretien simplifié.",
    image: "/images/categories/City et Trekking Bikes – Vélos de ville et de randonnée.jpg",
    href: "/boutique?q=City",
  },
  {
    title: "Vélos électriques et VTT – E-Mountainbikes",
    description:
      "Découvrez notre gamme de VTT et de vélos électriques tout-terrain en bambou, conçus pour offrir confort, maniabilité et performance sur les sentiers comme sur les routes. Grâce à leur cadre en bambou naturellement amortissant, leurs pneus Schwalbe Smart Sam de 27,5 pouces et leur fourche à suspension pneumatique RockShox Recon, ces vélos assurent une conduite stable et agréable sur différents terrains. Le modèle électrique Atakora EP8 est équipé d’un puissant moteur Shimano EP8 développant un couple de 85 Nm, idéal pour affronter les montées et profiter pleinement de vos aventures en plein air.",
    image: "/images/categories/Vélos électriques et VTT – E-Mountainbikes.jpg",
    href: "/boutique?q=VTT",
  },
  {
    title: "Vélos électriques compacts – E-Kompaktbikes",
    description:
      "Découvrez le Jamasi, le vélo électrique compact en bambou de my Boo, conçu pour faciliter vos déplacements quotidiens. Pratique, innovant et confortable, il est équipé d’un moteur Shimano STEPS EP5 développant un couple de 60 Nm, d’une batterie de 504 Wh et d’une transmission par courroie nécessitant peu d’entretien. Son guidon réglable en hauteur, sa tige de selle à serrage rapide et sa poignée de transport intégrée facilitent son adaptation à chaque utilisateur, son rangement et son transport. Personnalisable avec différents accessoires, le Jamasi allie compacité, technologie et mobilité durable.",
    image: "/images/categories/Vélos électriques compacts – E-Kompaktbikes.jpg",
    href: "/boutique?q=compact",
  },
  {
    title: "Vélos électriques de trekking – E-Trekking",
    description:
      "Découvrez notre gamme de vélos électriques de trekking en bambou, conçus pour vous accompagner aussi bien dans vos déplacements quotidiens en ville que lors de longues randonnées. Grâce à leur cadre en bambou qui absorbe naturellement les vibrations, ces vélos offrent un confort de conduite exceptionnel sur différents types de routes. Équipés de moteurs centraux et de batteries Shimano performants, ils garantissent une assistance électrique fluide, une autonomie adaptée aux longues distances et une expérience de conduite naturelle. Disponibles avec différentes formes de cadre — diamant, trapèze ou enjambement bas —, ils sont personnalisables selon vos préférences et conçus avec des composants robustes et durables pour une mobilité fiable au quotidien.",
    image: "/images/categories/Vélos électriques de trekking – E-Trekking.jpg",
    href: "/boutique?q=trekking",
  },
  {
    title: "Tandems – Vélos pour deux personnes",
    description:
      "Découvrez notre gamme de tandems conçus pour partager le plaisir du vélo à deux. Grâce à leur conception ergonomique et à leurs positions assises décalées, les tandems offrent confort, stabilité et excellente visibilité aux deux cyclistes. Leur cadre réglable s’adapte à différents utilisateurs, adultes comme enfants, tandis que les versions avec assistance électrique facilitent les longues randonnées et les parcours exigeants. Pratiques et polyvalents, ces vélos sont idéaux pour les balades, les voyages et les aventures à deux.",
    image: "/images/categories/Tandems – Vélos pour deux personnes.jpg",
    href: "/boutique?q=Tandem",
  },
  {
    title: "Tricycles pour adultes",
    description:
      "Découvrez notre gamme de tricycles pour adultes, conçus pour offrir confort, stabilité et liberté de mouvement au quotidien. Grâce à leur conception à trois roues, avec une roue directrice à l’avant et deux roues à l’arrière, ils assurent une excellente stabilité sans nécessiter de garder l’équilibre comme sur un vélo classique. Équipés de sièges confortables, de suspensions performantes et disponibles avec assistance électrique, ils s’adaptent aussi bien aux promenades qu’aux déplacements quotidiens. Leur ergonomie réglable permet de répondre aux besoins de différents utilisateurs et de profiter pleinement du plaisir de rouler.",
    image: "/images/categories/Tricycles pour adultes.jpg",
    href: "/boutique?q=Tricycle",
  },
  {
    title: "Vélos électriques de ville – E-Citybikes",
    description:
      "Découvrez notre gamme de vélos électriques de ville en bambou, conçus pour offrir un maximum de confort, de sécurité et de praticité lors de vos déplacements quotidiens. Équipés de moteurs centraux Shimano et d’un cadre en bambou qui absorbe naturellement les vibrations, ces vélos garantissent une assistance électrique agréable et une conduite stable. Leur cadre à enjambement bas facilite la montée et la descente, tandis que la batterie intégrée au porte-bagages et la poignée de transport en bambou apportent davantage de fonctionnalité. Disponibles en plusieurs modèles, les vélos E-City allient design naturel, technologie moderne et mobilité urbaine confortable.",
    image: "/images/categories/Vélos électriques de ville – E-Citybikes.jpg",
    href: "/boutique?q=City",
  },
  {
    title: "Kettwiesel TWO – Tricycle électrique tandem",
    description:
      "Découvrez le Kettwiesel TWO de HASE BIKES, un tricycle électrique tandem innovant conçu pour permettre à deux personnes de pédaler côte à côte en toute sécurité et dans un confort optimal. Équipé d’un moteur Bosch Performance Line CX développant un couple de 100 Nm, il facilite les déplacements, même sur les pentes. Sa suspension intégrale absorbe les irrégularités du terrain, tandis que ses sièges pivotants et réglables s’adaptent aux utilisateurs mesurant de 1,30 m à 2 m. Grâce à son assistance électrique, sa maniabilité et sa conception ergonomique, il est idéal pour les balades à deux, les sorties en famille et la mobilité inclusive.",
    image: "/images/categories/Kettwiesel TWO – Tricycle électrique tandem.jpg",
    href: "/boutique?q=Kettwiesel",
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
              Nos vélos au cœur du territoire
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
                    <h3 className="text-lg font-bold tracking-tight text-ink line-clamp-2 min-h-[3.5rem] flex items-center">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65 line-clamp-3 min-h-[4.5rem]">
                      {cat.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
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
            aria-label="Catégorie précédente"
            className="flex sm:hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-colors hover:border-primary hover:text-primary"
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
                    ? "h-2.5 w-7 bg-primary"
                    : "h-2.5 w-2.5 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Catégorie suivante"
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
              Voir toutes les catégories <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
