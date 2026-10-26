import Image from "next/image";
import { partners, supporters } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const allPartners = [...partners, ...supporters].filter(
  (p) => p.name !== "BMW" && p.name !== "EcoBirdy"
);
// Répété pour garantir une boucle infinie continue et fluide
const marqueeList = [...allPartners, ...allPartners];

export function PartnersMarquee() {
  return (
    <section
      className="overflow-hidden py-12 sm:py-16"
      style={{ backgroundColor: "#F8FAFC" }}
      aria-labelledby="partenaires-titre"
    >
      <div className="container">
        {/* ── En-tête compact ── */}
        <Reveal>
          <div className="mb-8 text-center sm:mb-12">
            <h2
              id="partenaires-titre"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Ils nous font confiance
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Des partenaires engagés qui partagent notre vision d&apos;une mobilité
              douce, solidaire et respectueuse de l&apos;environnement.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── Défilement horizontal continu ── */}
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        {/* Dégradés latéraux pour estomper les bords */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 lg:w-36"
          style={{ backgroundImage: "linear-gradient(to right, #F8FAFC, transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 lg:w-36"
          style={{ backgroundImage: "linear-gradient(to left, #F8FAFC, transparent)" }}
        />

        {/* Piste de défilement horizontal sans fond sur les logos */}
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] py-2">
          {[...marqueeList, ...marqueeList].map((partner, idx) => (
            <a
              key={`${partner.name}-${idx}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
              className="group mx-6 sm:mx-8 lg:mx-12 flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-12 w-28 sm:h-14 sm:w-36 lg:h-16 lg:w-44 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain mix-blend-multiply opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Liste accessible pour les lecteurs d'écran ── */}
      <ul className="sr-only">
        {allPartners.map((p) => (
          <li key={p.name}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}