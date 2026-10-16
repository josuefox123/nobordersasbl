import Image from "next/image";
import { partners, supporters } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

const allPartners = [...partners, ...supporters];

// Colonnes avec partenaires variés et décalages temporels
const COLUMNS = [
  {
    duration: "18s",
    delay: "0s",
    className: "hidden lg:flex",
    items: [partners[0], partners[4], partners[6], supporters[1]],
  },
  {
    duration: "22s",
    delay: "-5s",
    className: "hidden sm:flex",
    items: [partners[1], partners[3], supporters[0], partners[2]],
  },
  {
    duration: "16s",
    delay: "-9s",
    className: "flex",
    items: [partners[2], partners[5], partners[0], partners[1]],
  },
  {
    duration: "21s",
    delay: "-3s",
    className: "flex",
    items: [partners[3], partners[6], supporters[1], partners[4]],
  },
  {
    duration: "17s",
    delay: "-7s",
    className: "flex",
    items: [partners[4], supporters[0], partners[1], partners[3]],
  },
  {
    duration: "23s",
    delay: "-12s",
    className: "hidden sm:flex",
    items: [partners[5], partners[0], partners[2], partners[6]],
  },
  {
    duration: "19s",
    delay: "-4s",
    className: "hidden lg:flex",
    items: [supporters[0], supporters[1], partners[4], partners[5]],
  },
];

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
          <div className="mb-8 text-center sm:mb-10">
            <h2
              id="partenaires-titre"
              className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
            >
              Ils nous font confiance
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Des partenaires engagés qui partagent notre vision d'une mobilité
              douce, solidaire et respectueuse de l'environnement.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ── Zone d'animation compacte avec défilement oblique ── */}
      <div
        className="relative w-full overflow-hidden hover:[&_[style*='oblique-fall']]:[animation-play-state:paused]"
        style={{ height: "220px" }}
        aria-hidden="true"
      >
        {/* Dégradé haut */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14"
          style={{ backgroundImage: "linear-gradient(to bottom, #F8FAFC, transparent)" }}
        />
        {/* Dégradé bas */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-14"
          style={{ backgroundImage: "linear-gradient(to top, #F8FAFC, transparent)" }}
        />

        {/* ── Colonnes obliques descendantes ── */}
        <div className="flex h-full items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {COLUMNS.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`shrink-0 flex-col items-center ${col.className}`}
              style={{
                transform: "rotate(-12deg)",
              }}
            >
              <div
                className="flex flex-col gap-3.5 sm:gap-4"
                style={{
                  animation: `oblique-fall ${col.duration} linear ${col.delay} infinite`,
                  willChange: "transform",
                }}
              >
                {/* 2 copies complètes pour boucle infinie sans saut */}
                {[...col.items, ...col.items].map((partner, itemIdx) => (
                  <a
                    key={`${partner.name}-${itemIdx}`}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={partner.name}
                    className="group flex h-[62px] w-[116px] items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#0875B9]/40 hover:shadow-md sm:h-[74px] sm:w-[136px] sm:p-3"
                    style={{
                      transform: "rotate(12deg)",
                    }}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-1 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                        sizes="(max-width: 640px) 116px, 136px"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
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
