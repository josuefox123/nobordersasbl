"use client";

import { useState } from "react";
import { HeartIcon } from "@/components/ui/Icons";

/**
 * Bouton favoris (cœur).
 * Toggle local — à brancher sur un store/context global si nécessaire.
 */
export function WishlistButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive((v) => !v)}
      aria-label={active ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={active}
      className={`grid h-10 w-10 place-items-center rounded-lg transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
        active ? "text-flame" : "text-white"
      }`}
    >
      <HeartIcon
        size={20}
        className={`transition-colors duration-200 ${active ? "fill-current" : ""}`}
      />
    </button>
  );
}
