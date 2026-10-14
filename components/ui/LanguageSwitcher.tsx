"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@/components/ui/Icons";

const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "be", label: "Belgique", flag: "🇧🇪" },
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
        <span className="text-base leading-none">{current.flag}</span>
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
              <span className="text-base">{lang.flag}</span>
              {lang.label}
              {current.code === lang.code && (
                <span className="ml-auto h-2 w-2 rounded-full bg-flame" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
