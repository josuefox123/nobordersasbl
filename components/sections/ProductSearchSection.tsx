"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SearchIcon, CheckIcon, ShoppingBagIcon, HeartIcon } from "@/components/ui/Icons";

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
      aria-labelledby="product-search-title"
      className="relative min-h-[420px] overflow-hidden py-28 sm:py-36"
    >
      {/* ── Image de fond ── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1600&q=80&auto=format&fit=crop"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* ── Overlay dégradé bleu + flou ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 backdrop-blur-sm"
        style={{
          background:
            "linear-gradient(135deg, rgba(8,117,185,0.92) 0%, rgba(5,80,130,0.96) 100%)",
        }}
      />

      {/* ── Contenu centré ── */}
      <div className="container relative z-10 flex flex-col items-center text-center">

        {/* Titre */}
        <h2
          id="product-search-title"
          className="max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Trouvez le vélo fait pour vous
        </h2>

        {/* Sous-titre */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Vélos de ville, VTT, gravel, cargo ou elliptiques — explorez notre
          catalogue et trouvez votre compagnon de route idéal.
        </p>

        {/* ── Barre de recherche ── */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="product-search-input" className="sr-only">
            Rechercher un produit
          </label>

          {/* Input */}
          <div className="relative flex-1">
            <SearchIcon
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              id="product-search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Vélo de ville, VTT, cargo, marque…"
              className="w-full rounded-2xl border-0 bg-white py-4 pl-14 pr-5 text-base text-ink placeholder:text-ink/40 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/40"
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="shrink-0 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            style={{ backgroundColor: "#0B0B0C" }}
          >
            Rechercher
          </button>
        </form>

        {/* ── Badges de réassurance (style Tontigo) ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/80">
          <span className="flex items-center gap-2">
            <CheckIcon size={16} className="text-white" />
            Livraison gratuite dès 50 €
          </span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <ShoppingBagIcon size={16} className="text-white" />
            +120 produits disponibles
          </span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <HeartIcon size={16} className="text-white" />
            90 % de clients satisfaits
          </span>
        </div>

      </div>
    </section>
  );
}
