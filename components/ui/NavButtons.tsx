"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface NavButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

/**
 * Bouton de navigation stylé (fond sombre, icône + texte).
 * Utilisé dans la barre de navigation desktop du Header.
 */
export function NavButton({ href, icon, label }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    >
      <span className="shrink-0">{icon}</span>
      {label}
    </Link>
  );
}
