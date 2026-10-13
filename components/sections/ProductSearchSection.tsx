"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function ProductSearchSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/boutique?q=${encodeURIComponent(q)}`);
  }

  return (
    <section
      className="py-16 sm:py-20"
      style={{ backgroundColor: "#0875B9" }}
      aria-labelledby="product-search-title"
    >
      <div className="container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Titre gauche ── */}
          <Reveal>
            <div className="shrink-0 lg:max-w-xs">
              <h2
                id="product-search-title"
                className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
              >
                Trouver nos produits
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">
                Recherchez parmi notre sélection de produits écologiques,
                sportifs et solidaires.
              </p>
            </div>
          </Reveal>

          {/* ── Input + bouton : prend tout l'espace restant ── */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center"
          >
            <label htmlFor="product-search-input" className="sr-only">
              Rechercher un produit
            </label>
            <div className="relative flex-1">
              <SearchIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
              />
              <input
                id="product-search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un produit, une marque…"
                className="w-full rounded-xl border-0 bg-white py-4 pl-12 pr-4 text-base text-ink placeholder:text-ink/40 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl px-10 py-4 text-base font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto sm:shrink-0"
              style={{ backgroundColor: "#0B0B0C" }}
            >
              Rechercher
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
