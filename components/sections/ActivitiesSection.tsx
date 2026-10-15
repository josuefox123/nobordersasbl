import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

// Images Unsplash vérifiées par photo ID (format stable)
const CATEGORIES = [
  {
    title: "Vélos de ville",
    description:
      "Des vélos pratiques et confortables, idéals pour les déplacements quotidiens en ville et les trajets domicile-travail.",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-de-ville",
  },
  {
    title: "VTT (vélos tout-terrain)",
    description:
      "Des vélos robustes conçus pour explorer les sentiers, les chemins accidentés et les terrains difficiles.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=vtt",
  },
  {
    title: "Vélos gravel",
    description:
      "Des vélos polyvalents adaptés aussi bien aux routes goudronnées qu'aux chemins de gravier et aux pistes.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-gravel",
  },
  {
    title: "Vélos trekking",
    description:
      "Des vélos confortables et polyvalents, parfaits pour les longues balades, les randonnées et les voyages à vélo.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-trekking",
  },
  {
    title: "Vélos tandem",
    description:
      "Des vélos conçus pour deux personnes, permettant de pédaler ensemble et de partager des balades ou des aventures.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-tandem",
  },
  {
    title: "Vélos elliptiques",
    description:
      "Des vélos innovants qui reproduisent le mouvement d'un appareil elliptique, combinant déplacement en extérieur et entraînement physique.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-elliptiques",
  },
  {
    title: "Vélos debout (Stand Up Bikes)",
    description:
      "Des vélos permettant de pédaler en position debout, offrant une expérience de conduite originale axée sur le mouvement et le fitness.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=stand-up-bikes",
  },
  {
    title: "Vélos cargo",
    description:
      "Des vélos conçus pour transporter des marchandises, des courses ou des équipements grâce à leur capacité de chargement adaptée.",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-cargo",
  },
];

export function ActivitiesSection() {
  return (
    <section className="bg-paper py-24 sm:py-32" id="categories">
      <div className="container">

        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Nos activités au cœur du territoire
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Découvrez notre sélection de vélos adaptés à chaque style de vie.
              Mobilité douce, sport ou aventure — nous avons le vélo qu'il vous faut.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <StaggerItem key={cat.title}>
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-lg font-bold tracking-tight text-ink">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{cat.description}</p>
                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#0875B9" }}>
                      Voir tous les vélos <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0875B9" }}
            >
              Voir toutes les catégories <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
