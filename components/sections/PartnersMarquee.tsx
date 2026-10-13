import Image from "next/image";
import { partners, supporters } from "@/lib/content";

const allPartners = [...partners, ...supporters];
const COUNT = allPartners.length; // 9 logos

export function PartnersMarquee() {
  return (
    <section
      className="border-y border-ink/5 bg-white py-12 sm:py-16"
      aria-labelledby="partenaires-titre"
    >
      {/* ── Titre ── */}
      <div className="container mb-10">
        <h2
          id="partenaires-titre"
          className="text-4xl font-extrabold uppercase tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          Ils nous font confiance
        </h2>
      </div>

      {/*
        Effet pluie oblique :
        - Chaque logo est une colonne indépendante
        - Tous inclinés à -12deg (skewX)
        - Répartis uniformément sur la largeur
        - Délai et vitesse légèrement différents par logo
      */}
      <div
        className="relative overflow-hidden"
        style={{ height: "240px" }}
        aria-hidden="true"
      >
        {/* Dégradés haut/bas */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white to-transparent" />

        {allPartners.map((partner, idx) => {
          const leftPct = 5 + (idx / (COUNT - 1)) * 88;
          const duration = 8 + (idx % 4) * 1.5;
          const delay = -(idx * (duration / COUNT));

          return (
            <div
              key={partner.name}
              className="absolute top-0"
              style={{
                left: `${leftPct}%`,
                transform: "skewX(-12deg)",
              }}
            >
              <div
                style={{
                  animation: `rain-fall ${duration}s linear ${delay}s infinite`,
                  willChange: "transform",
                }}
              >
                {/* Copie 1 */}
                <div className="flex h-[240px] w-24 items-center justify-center">
                  <div className="relative h-14 w-20 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                </div>
                {/* Copie 2 */}
                <div className="flex h-[240px] w-24 items-center justify-center">
                  <div className="relative h-14 w-20 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Liste accessible pour les lecteurs d'écran */}
      <ul className="sr-only">
        {allPartners.map((p) => (
          <li key={p.name}>
            <a href={p.href} target="_blank" rel="noopener noreferrer">{p.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
