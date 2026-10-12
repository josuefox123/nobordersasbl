import Image from "next/image";
import { partners, supporters } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function PartnersMarquee() {
  const allPartners = [...partners, ...supporters];

  return (
    <section className="border-y border-ink/5 bg-white py-12 sm:py-16 overflow-hidden" aria-labelledby="partenaires-titre">
      <div className="container mb-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <span className="eyebrow">Réseau & Collaborations</span>
            <h2 id="partenaires-titre" className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Ils soutiennent nos initiatives
            </h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-ink/50 font-medium">
            Partenaires associatifs & institutionnels
          </span>
        </div>
      </div>

      {/* Marquee en défilement infini */}
      <div className="marquee relative flex w-full overflow-hidden select-none">
        <div className="marquee-track flex shrink-0 items-center gap-12 sm:gap-16 animate-marquee py-2">
          {allPartners.concat(allPartners).map((partner, idx) => (
            <a
              key={`${partner.name}-${idx}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-16 w-36 sm:w-44 shrink-0 items-center justify-center grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
              title={partner.name}
            >
              <div className="relative h-12 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="180px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
