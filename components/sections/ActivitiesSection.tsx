import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

const CATEGORIES = [
  {
    tag: "Éco-mobilité",
    title: "Vélos en Bambou",
    subtitle: "My Boo · Fabrication artisanale",
    description:
      "Des vélos fabriqués à la main au Ghana à partir de bambou naturel. Légers, solides et écologiques, ils allient performance et solidarité Nord-Sud.",
    image: "/images/lancement-myboo.jpg",
    href: "/boutique?categorie=velos-bambou",
  },
  {
    tag: "Mobilité inclusive",
    title: "Hase Bikes",
    subtitle: "Vélos couchés & adaptés",
    description:
      "Des vélos couchés et adaptés pour toutes les morphologies et tous les handicaps. Parce que la mobilité douce est un droit pour chacun.",
    image: "/images/p-hase-bikes.jpg",
    href: "/boutique?categorie=hase-bikes",
  },
  {
    tag: "Cardio & Nature",
    title: "ElliptiGO",
    subtitle: "Vélo elliptique extérieur",
    description:
      "Le vélo elliptique conçu pour l'extérieur. Un entraînement complet et à faible impact articulaire, idéal pour tous les niveaux.",
    image: "/images/vtt.jpg",
    href: "/boutique?categorie=elliptigo",
  },
  {
    tag: "Équipement",
    title: "Accessoires & Pièces",
    subtitle: "Entretien · Sécurité · Confort",
    description:
      "Casques, antivols, lumières, sacoches et pièces détachées sélectionnés pour leur qualité et leur durabilité. Tout pour rouler en sécurité.",
    image: "/images/organisations-sportives.jpg",
    href: "/boutique?categorie=accessoires",
  },
];

export function ActivitiesSection() {
  return (
    <section className="bg-paper py-24 sm:py-32" id="categories">
      <div className="container">

        {/* ── En-tête ── */}
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Nos activités au cœur du territoire
            </h2>
          </Reveal>
        </div>

        {/* ── Grille des 4 catégories ── */}
        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.title}>
              <Link
                href={cat.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-flame/40 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-ink/75 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {cat.tag}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-wider text-flame-deep">
                    {cat.subtitle}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                    {cat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {/* ── Bouton centré sous les cards ── */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-ink px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame"
            >
              Voir toutes les catégories <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
