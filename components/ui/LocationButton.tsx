"use client";

import Link from "next/link";
import { MapPinIcon } from "@/components/ui/Icons";

/**
 * Bouton icône localisation (Maps).
 * Redirige vers la page de contact qui contient l'adresse / carte.
 */
export function LocationButton() {
  return (
    <Link
      href="/nous-contacter#adresse"
      aria-label="Notre localisation"
      className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <MapPinIcon size={20} />
    </Link>
  );
}
