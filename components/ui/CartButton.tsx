"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "@/components/ui/Icons";

interface CartButtonProps {
  /** Nombre d'articles dans le panier (badge rouge si > 0). */
  count?: number;
}

/**
 * Bouton panier avec badge optionnel.
 * Lien vers la page panier — à connecter à un cart store si nécessaire.
 */
export function CartButton({ count = 0 }: CartButtonProps) {
  return (
    <Link
      href="/panier"
      aria-label={count > 0 ? `Panier — ${count} article${count > 1 ? "s" : ""}` : "Mon panier"}
      className="relative grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <ShoppingBagIcon size={20} />
      {count > 0 && (
        <span
          aria-hidden="true"
          className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-flame text-[10px] font-bold leading-none text-white"
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </Link>
  );
}
