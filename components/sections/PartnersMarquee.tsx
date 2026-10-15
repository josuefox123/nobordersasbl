import Image from "next/image";
import { partners, supporters } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const allPartners = [...partners, ...supporters];
const COUNT = allPartners.length;

/**
 * Chaque "colonne de pluie" — trajectoire diagonale indépendante.
 * left       : position horizontale de départ
 * duration   : durée du cycle (vitesses différentes = effet naturel)
 * delay      : décalage de départ (évite que tout parte en même temps)
 * skew       : angle oblique de la colonne
 * logoIndex  : quel logo utiliser (cyclé sur allPartners)
 */
const COLUMNS = [
  { left: "4%",  duration: "9s",  delay: "0s",    skew: "-10deg", logoIndex: 0 },
  { left: "14%", duration: "13s", delay: "-3.5s", skew: "-10deg", logoIndex: 1 },
  { left: "24%", duration: "10s", delay: "-1s",   skew: "-10deg", logoIndex: 2 },
  { left: "34%", duration: "15s", delay: "-5s",   skew: "-10deg", logoIndex: 3 },
  { left: "44%", duration: "11s", delay: "-2.5s", skew: "-10deg", logoIndex: 4 },
  { left: "54%", duration: "8s",  delay: "-4s",   skew: "-10deg", logoIndex: 5 },
  { left: "64%", duration: "14s", delay: "-0.5s", skew: "-10deg", logoIndex: 6 },
  { left: "74%", duration: "12s", delay: "-3s",   skew: "-10deg", logoIndex: 7 },
  { left: "84%", duration: "9.5s", delay: "-1.5s", skew: "-10deg", logoIndex: 8 },
];

export function PartnersMarquee() {
  return (
    <section
      className="overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#F1F5F9" }}
      aria-labelledby="partenaires-titre"
    >
      <div className="container">
        {/* ── En-tête centré ── */}
        <Reveal>
          <div className="mb-16 text-center">
            <h2
              id="partenaires-titre"
              className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              Ils nous font confiance
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Des partenaires engagés qui partagent notre vision d'une mobilité
              douce, solidaire et respectueuse de l'environnement.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── Zone d'animation — pleine largeur ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "280px" }}
        aria-hidden="true"
      >
        {/* Dégradé haut */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b"
          style={{ backgroundImage: "linear-gradient(to bottom, #F1F5F9, transparent)" }}
        />
        {/* Dégradé bas */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t"
          style={{ backgroundImage: "linear-gradient(to top, #F1F5F9, transparent)" }}
        />

        {/* ── Colonnes de logos en pluie diagonale ── */}
        {COLUMNS.map((col, colIdx) => {
          const partner = allPartners[col.logoIndex % COUNT];
          return (
            <div
              key={colIdx}
              className="absolute top-0"
              style={{
                left: col.left,
                transform: `skewX(${col.skew})`,
                width: "88px",
              }}
            >
              {/* 3 copies — chacune = hauteur complète du conteneur, une seule visible à la fois */}
              <div
                style={{
                  animation: `rain-fall ${col.duration} linear ${col.delay} infinite`,
                  willChange: "transform",
                }}
              >
                {[0, 1, 2].map((copy) => (
                  <div
                    key={copy}
                    className="flex items-center justify-center"
                    style={{ height: "280px" }}
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-sm grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-md"
                      style={{ width: "72px", height: "48px" }}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-1"
                        sizes="72px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Liste accessible ── */}
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
