"use client";

import Link from "next/link";
import { HeartIcon } from "@/components/ui/Icons";

interface WishlistButtonProps {
  /** Nombre d'articles dans la liste de souhaits. */
  count?: number;
}

/**
 * Bouton favoris (cœur) menant vers la page /wishlist.
 */
export function WishlistButton({ count = 3 }: WishlistButtonProps) {
  return (
    <Link
      href="/wishlist"
      aria-label={count > 0 ? `Favoris — ${count} article${count > 1 ? "s" : ""}` : "Ma liste de souhaits"}
      className="relative grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
    >
      <HeartIcon
        size={20}
        className="transition-colors duration-200 fill-current"
      />
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

