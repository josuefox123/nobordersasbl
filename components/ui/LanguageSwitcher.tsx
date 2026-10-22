"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";

function FlagFR() {
  return (
    <svg className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm overflow-hidden" viewBox="0 0 900 600" aria-hidden="true">
      <rect width="300" height="600" fill="#002395" />
      <rect x="300" width="300" height="600" fill="#FFFFFF" />
      <rect x="600" width="300" height="600" fill="#ED2939" />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm overflow-hidden" viewBox="0 0 60 30" aria-hidden="true">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" strokeWidth="3" />
      <path d="M30 0 v30 M0 15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0 v30 M0 15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagNL() {
  return (
    <svg className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm overflow-hidden" viewBox="0 0 900 600" aria-hidden="true">
      <rect width="900" height="200" fill="#AE1C28" />
      <rect y="200" width="900" height="200" fill="#FFFFFF" />
      <rect y="400" width="900" height="200" fill="#21468B" />
    </svg>
  );
}

const LANGUAGES = [
  { code: "fr", label: "Français", Flag: FlagFR },
  { code: "en", label: "English", Flag: FlagGB },
  { code: "nl", label: "Nederlands", Flag: FlagNL },
];

export function LanguageSwitcher() {
  const [open, setOpen]       = useState(false);
  const [current, setCurrent] = useState(LANGUAGES[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Fermeture au clic extérieur
  useEffect(() => {
    if (!open) return;
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Changer de langue"
        className="flex items-center gap-1.5 rounded-lg border border-white/25 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <current.Flag />
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
        <ChevronDownIcon
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, zIndex: 9999 }}
          className="w-44 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-xl"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="menuitem"
              type="button"
              onClick={() => { setCurrent(lang); setOpen(false); }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-paper ${
                current.code === lang.code
                  ? "font-bold text-ink"
                  : "font-medium text-ink/70"
              }`}
            >
              <lang.Flag />
              {lang.label}
              {current.code === lang.code && (
                <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
