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
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            zIndex: 9999,
            minWidth: "200px",
          }}
          className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl"
        >
          <Link
            href="/login"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-paper"
          >
            <UserIcon size={16} className="text-ink/40" />
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
