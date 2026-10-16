"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";

export function AboutIntro() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <span className="eyebrow">Notre Histoire</span>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
        À propos de No Borders
      </h1>

      <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink/80">
        Née en 2007 à Mons, No Borders ASBL œuvre pour briser les frontières
        mentales et faire de la diversité culturelle une richesse partagée à
        travers le sport, la culture et la solidarité.
      </p>

      {expanded && (
        <div className="mt-4 space-y-3 text-base leading-relaxed text-ink/75 transition-all duration-300">
          <p>
            Dans la capitale culturelle de la Wallonie, les communautés vivaient
            souvent en vase clos selon leur pays d’origine, créant des cloisonnements
            qui freinaient leur pleine intégration dans la société locale.
          </p>
          <p>
            Pour surmonter ces barrières et unir nos forces, nous avons fondé
            l&apos;ASBL afin de favoriser les rencontres authentiques et l&apos;inclusion
            par le biais d&apos;activités sportives, socio-culturelles et de projets durables.
          </p>
        </div>
      )}

      <div className="mt-7 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0875B9] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#065f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0875B9]"
        >
          {expanded ? "Voir moins" : "Voir plus"}
          <ChevronDownIcon
            size={16}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
