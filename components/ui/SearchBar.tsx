"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@/components/ui/Icons";

/**
 * Barre de recherche du HeaderTop.
 * Soumet la recherche vers /recherche?q=… au submit ou à l'appui sur Entrée.
 */
export function SearchBar() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    if (!q) {
      inputRef.current?.focus();
      return;
    }
    router.push(`/boutique?q=${encodeURIComponent(q)}`);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm transition-all border-0 ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-white/80 focus-within:shadow-md"
    >
      <SearchIcon size={16} className="shrink-0 text-ink/45" />
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Rechercher un produit, marque etc."
        aria-label="Rechercher un produit, marque etc."
        className="w-full min-w-0 bg-transparent text-sm text-ink placeholder:text-ink/40 border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus:border-0 [outline:none] [box-shadow:none]"
      />
    </form>
  );
}
