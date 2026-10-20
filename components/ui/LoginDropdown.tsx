"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, UserIcon } from "@/components/ui/Icons";

export function LoginDropdown() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Ferme au clic extérieur ou à Escape
  useEffect(() => {
    if (!open) return;

    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      {/* Bouton déclencheur */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Espace connexion"
        style={{ position: "relative", zIndex: 10 }}
        className="flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <UserIcon size={17} />
        <span className="hidden sm:inline">Me connecter</span>
        <ChevronDownIcon
          size={15}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Menu déroulant */}
      {open && (
        <div
          role="menu"
          className="absolute top-[calc(100%+8px)] left-0 sm:left-auto sm:right-0 z-[9999] min-w-[200px] max-w-[calc(100vw-24px)] overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl"
        >
          <Link
            href="/wishlist?tab=settings"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            <UserIcon size={16} className="text-primary" />
            Profil
          </Link>

          <div className="mx-4 h-px bg-ink/10" aria-hidden="true" />

          <Link
            href="/login"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            <svg className="h-4 w-4 shrink-0 text-ink/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Se connecter
          </Link>

          <div className="mx-4 h-px bg-ink/10" aria-hidden="true" />

          <Link
            href="/register"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            <span
              aria-hidden="true"
              className="flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-ink/30 text-[11px] font-bold text-ink/50"
            >
              +
            </span>
            Créer un compte
          </Link>
        </div>
      )}
    </div>
  );
}
