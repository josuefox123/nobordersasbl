import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { projectSlider } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notre Projet",
  description:
    "Découvrez les objectifs, les valeurs et les perspectives de No Borders ASBL : inclusion sociale, interculturalité, mobilité douce et solidarité.",
};

const sections = [
  {
    id: "inclusion",
    title: "Intégration et inclusion sociale",
    paragraphs: [
      "Dans l’objectif d’améliorer le vivre ensemble, nous accueillons et accompagnons les primo-arrivants et nous organisons des activités qui permettent la mixité sociale. Nous motivons ainsi les personnes d’origine étrangère à s’adapter à la vie socio-culturelle de leur pays d’accueil et à mettre leur savoir-faire à son service. En parallèle, nous facilitons des rencontres qui suscitent de l’intérêt à la population locale et qui permettent à mieux connaître les étrangers et à briser les préjuges et les clichés dans les deux sens.",
    ],
    image: "/images/projet-reunion.jpg",
  },
  {
    id: "interculturalite",
    title: "Promotion de l’interculturalité",
    paragraphs: [
      "Notre société actuelle devient de plus en plus multiculturelle. Nous organisons diverses activités qui permettent de rendre la diversité culturelle une richesse et non un frein à l’intégration et à l’inclusion sociale. A cet égard, plusieurs thématiques abordant l’interculturalité sont animées par différents intervenants (ex : le rôle la musique dans les apprentissages, la sexualité en milieu interculturel, la communication non verbale, le mariage, la fracture numérique,…). Nous luttons également contre le racisme et d’autres formes d’exclusion basée sur l’âge, le genre, la religion, le handicap et l’orientation sexuelle.",
    ],
    image: "/images/educ-art.jpg",
  },
  {
    id: "mobilite",
    title: "Promotion de la mobilité douce et sensibilisation à la protection de l’environnement",
    paragraphs: [
      "Face aux enjeux environnementaux (pollution, saturation du réseau routier, réchauffement climatique) et pour promouvoir les bienfaits de faire du vélo (sur l’esprit, sur le corps et sur le portefeuille), nous préconisons l’usage fréquent du vélo dans nos déplacements. Nous motivons en particulier les femmes africaines à utiliser le vélo afin de créer une activité plus inclusive.",
      "Nous sensibilisons la population à l’usage de produits écologiques et/ou issus du circuit de l’économie circulaire.",
    ],
    image: "/images/bxl-tour.jpg",
  },
  {
    id: "nord-sud",
    title: "Promotion de la solidarité Nord-Sud",
    paragraphs: [
      "Notre propre parcours et les origines de nos différents membres nous poussent à soutenir les initiatives entrepreneuriales développées dans les Sud et à établir les partenariats dans le but de créer un réel impact social.",
    ],
    image: "/images/ghana-booomers.jpg",
  },
  {
    id: "horizon-2025",
    title: "Notre horizon 2025",
    paragraphs: [
      "Une amélioration de notre vivre ensemble et une création d’emplois. Nous sommes intimement convaincus qu’une intégration socio-culturelle réussie va de pair avec une intégration professionnelle. Notre volonté est d’utiliser nos différents leviers, culturels et sportifs, afin de créer quelques emplois durables.",
    ],
    image: "/images/lancement-myboo.jpg",
  },
];

export default function NotreProjetPage() {
  return (
    <div className="mt-[84px] lg:mt-[188px]">
      {/* ── En-tête avec breadcrumb ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Notre projet" },
        ]}
        title="Notre projet"
        description="Pour améliorer le vivre-ensemble à Mons et en Wallonie, nous accompagnons les primo-arrivants, facilitons la mixité sociale et luttons activement contre toute forme d’exclusion."
      />

      {/* ── Sections éditoriales alternées (texte & images d'appui) ── */}
      <div className="bg-white py-16 sm:py-24">
        <div className="container flex flex-col gap-20 sm:gap-28">
          {sections.map((sec, i) => {
            const isReversed = i % 2 === 1; // alterne image gauche/droite
            return (
              <article
                key={sec.id}
                id={sec.id}
                className="scroll-mt-48 grid items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-ink/5 shadow-md">
                      <Image
                        src={sec.image}
                        alt={sec.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Texte */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={0.1}>
                    <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
                      {sec.title}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {sec.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-base leading-relaxed text-ink/75 sm:text-lg"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ── Galerie photos (slider d'images en mosaïque) ── */}
      <section className="bg-paper py-16 sm:py-24" aria-label="Galerie photos">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 sm:grid-rows-2 lg:gap-6">
            {projectSlider.map((img, i) => (
              <Reveal
                key={img.src}
                delay={i * 0.08}
                className={i === 0 ? "sm:row-span-2" : ""}
              >
                <figure
                  className={`relative h-full overflow-hidden rounded-2xl bg-ink/5 ${
                    i === 0
                      ? "aspect-[4/3] sm:aspect-auto sm:min-h-[420px]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 pb-4 pt-10 text-sm font-semibold text-white">
                    {img.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
