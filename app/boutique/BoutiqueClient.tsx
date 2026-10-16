"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  productBrands,
  productCategories,
  productColors,
  products,
  type Product,
} from "@/lib/content";
import {
  ArrowRight,
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";

/* ─────────────────────────────────────────────────────────── */
/*  Composant principal Boutique                               */
/* ─────────────────────────────────────────────────────────── */

export function BoutiqueClient() {
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q");
  const catParam = searchParams.get("categorie") || searchParams.get("category");

  // Filtres
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "velos-bambou": true,
    "hase-bikes": true,
  });

  const [maxPrice, setMaxPrice] = useState<number>(4000);
  const [tempMaxPrice, setTempMaxPrice] = useState<number>(4000);

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [tempColors, setTempColors] = useState<string[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [tempBrands, setTempBrands] = useState<string[]>([]);
  const [brandSearch, setBrandSearch] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");

  const [pricePreset, setPricePreset] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Synchronisation avec les paramètres d'URL (recherche et catégories)
  useEffect(() => {
    if (qParam) {
      setSearchQuery(qParam);
      setSearchInput(qParam);
    }
    if (catParam) {
      if (catParam === "velos-de-ville") {
        setSelectedCategory("velos-bambou");
        setSelectedSub("ville");
      } else if (catParam === "vtt") {
        setSelectedCategory("velos-bambou");
        setSelectedSub("vtt");
      } else if (catParam === "velos-elliptiques") {
        setSelectedCategory("elliptigo");
      } else if (catParam === "velos-tandem") {
        setSelectedCategory("hase-bikes");
        setSelectedSub("tandems");
      } else {
        const directMatch = productCategories.find((c) => c.slug === catParam);
        if (directMatch) {
          setSelectedCategory(directMatch.slug);
        } else {
          for (const c of productCategories) {
            const sub = c.subs.find((s) => s.slug === catParam);
            if (sub) {
              setSelectedCategory(c.slug);
              setSelectedSub(sub.slug);
              break;
            }
          }
        }
      }
    }
  }, [qParam, catParam]);

  // Toggle accordéon catégories
  const toggleCategoryExpand = (slug: string) => {
    setExpandedCategories((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  // Sélection catégorie
  const handleSelectCategory = (catSlug: string, subSlug?: string) => {
    if (selectedCategory === catSlug && !subSlug && !selectedSub) {
      setSelectedCategory(null);
      setSelectedSub(null);
    } else {
      setSelectedCategory(catSlug);
      setSelectedSub(subSlug || null);
    }
    setCurrentPage(1);
  };

  // Toggle couleur temporaire
  const toggleTempColor = (slug: string) => {
    setTempColors((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  const applyColors = () => {
    setSelectedColors(tempColors);
    setCurrentPage(1);
  };

  const clearColors = () => {
    setTempColors([]);
    setSelectedColors([]);
    setCurrentPage(1);
  };

  // Toggle marque temporaire
  const toggleTempBrand = (brand: string) => {
    setTempBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const applyBrands = () => {
    setSelectedBrands(tempBrands);
    setCurrentPage(1);
  };

  const clearBrands = () => {
    setTempBrands([]);
    setSelectedBrands([]);
    setCurrentPage(1);
  };

  // Preset prix
  const handlePricePresetChange = (preset: string) => {
    setPricePreset(preset);
    if (preset === "all") {
      setMaxPrice(4000);
      setTempMaxPrice(4000);
    } else if (preset === "under-50") {
      setMaxPrice(50);
      setTempMaxPrice(50);
    } else if (preset === "50-500") {
      setMaxPrice(500);
      setTempMaxPrice(500);
    } else if (preset === "500-2000") {
      setMaxPrice(2000);
      setTempMaxPrice(2000);
    } else if (preset === "over-2000") {
      setMaxPrice(4000);
      setTempMaxPrice(4000);
    }
    setCurrentPage(1);
  };

  // Reset tous les filtres
  const resetAllFilters = () => {
    setSelectedCategory(null);
    setSelectedSub(null);
    setMaxPrice(4000);
    setTempMaxPrice(4000);
    setSelectedColors([]);
    setTempColors([]);
    setSelectedBrands([]);
    setTempBrands([]);
    setBrandSearch("");
    setSearchQuery("");
    setSearchInput("");
    setPricePreset("all");
    setSortBy("featured");
    setCurrentPage(1);
  };

  // Notification d'ajout au panier
  const handleAddToCart = (product: Product) => {
    setAddedNotice(`${product.name} ajouté au panier !`);
    setTimeout(() => setAddedNotice(null), 3000);
  };

  // Filtrage des produits
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Catégorie
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedSub && p.sub !== selectedSub) return false;

      // Prix max
      if (p.price > maxPrice) return false;
      if (pricePreset === "under-50" && p.price > 50) return false;
      if (pricePreset === "50-500" && (p.price < 50 || p.price > 500)) return false;
      if (pricePreset === "500-2000" && (p.price < 500 || p.price > 2000)) return false;
      if (pricePreset === "over-2000" && p.price <= 2000) return false;

      // Couleurs
      if (
        selectedColors.length > 0 &&
        !selectedColors.some((c) => p.colors.includes(c as any))
      ) {
        return false;
      }

      // Marques
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
        return false;
      }

      // Recherche
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCategory = p.category.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCategory) return false;
      }

      return true;
    });
  }, [
    selectedCategory,
    selectedSub,
    maxPrice,
    pricePreset,
    selectedColors,
    selectedBrands,
    searchQuery,
  ]);

  // Tri
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }
    return list;
  }, [filteredProducts, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage, itemsPerPage]);

  // Comptage par marque
  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    productBrands.forEach((b) => {
      counts[b] = products.filter((p) => p.brand === b).length;
    });
    return counts;
  }, []);

  const filteredBrandsList = useMemo(() => {
    if (!brandSearch.trim()) return productBrands;
    return productBrands.filter((b) =>
      b.toLowerCase().includes(brandSearch.toLowerCase())
    );
  }, [brandSearch]);

  // Nombre de filtres actifs
  const activeFiltersCount =
    (selectedCategory ? 1 : 0) +
    (selectedSub ? 1 : 0) +
    (maxPrice < 4000 ? 1 : 0) +
    selectedColors.length +
    selectedBrands.length +
    (searchQuery ? 1 : 0);

  return (
    <div className="mt-[84px] lg:mt-[188px] pb-24 bg-white">
      {/* ── Toast de notification ajout panier ── */}
      {addedNotice && (
        <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all animate-bounce">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-600 text-white">
            <CheckIcon size={14} />
          </span>
          {addedNotice}
        </div>
      )}

      {/* ── En-tête avec breadcrumb ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Boutique" },
        ]}
        title="Boutique vélo & accessoires"
        description="Vélos en bambou artisanaux, vélos adaptés Hase Bikes, ElliptiGO et équipement éco-responsable."
        image="https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&q=80&auto=format&fit=crop"
        action={
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm lg:hidden hover:bg-white/20"
          >
            <span>Filtres</span>
            {activeFiltersCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0875B9]">
                {activeFiltersCount}
              </span>
            )}
          </button>
        }
      />

      {/* ── Contenu principal : Sidebar gauche + Grille droite ── */}
      <div className="container mt-8 sm:mt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* ═══════════════════════════════════════════════════════ */}
          {/*  COLONNE GAUCHE : FILTRES (Desktop + Mobile modal)     */}
          {/* ═══════════════════════════════════════════════════════ */}
          <aside
            className={`fixed inset-y-0 left-0 z-50 w-80 overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 lg:static lg:z-auto lg:w-auto lg:overflow-visible lg:bg-transparent lg:p-0 lg:shadow-none lg:transition-none lg:col-span-4 xl:col-span-3 ${
              mobileFiltersOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
          >
            {/* Header mobile */}
            <div className="mb-6 flex items-center justify-between border-b border-ink/10 pb-4 lg:hidden">
              <span className="font-bold text-ink">Filtres</span>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-lg text-ink/70 hover:bg-paper"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {/* ── Entête sidebar avec compte et reset rapide ── */}
              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-bold text-ink">
                  Filtres {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                </span>
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="text-xs font-semibold text-[#0875B9] hover:underline"
                  >
                    Tout effacer
                  </button>
                )}
              </div>

              {/* ── Carte 1 : Trier par ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-[#0875B9]" />
                  <h2 className="text-base font-bold text-ink">Trier par</h2>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-xl border border-ink/15 bg-paper py-2.5 px-3 text-xs font-medium text-ink focus:border-[#0875B9] focus:outline-none"
                >
                  <option value="featured">En vedette</option>
                  <option value="price-asc">Prix : croissant</option>
                  <option value="price-desc">Prix : décroissant</option>
                  <option value="rating">Mieux notés</option>
                  <option value="newest">Nouveautés</option>
                </select>
              </div>

              {/* ── Carte 2 : Catégories ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-[#0875B9]" />
                  <h2 className="text-base font-bold text-ink">Catégories</h2>
                </div>

                <ul className="space-y-1">
                  {productCategories.map((cat) => {
                    const isSelected = selectedCategory === cat.slug && !selectedSub;
                    const hasSubs = cat.subs.length > 0;
                    const isExpanded = expandedCategories[cat.slug];

                    return (
                      <li key={cat.slug} className="text-sm">
                        <div className="flex items-center justify-between rounded-lg py-1.5 px-2 transition-colors hover:bg-paper">
                          <button
                            type="button"
                            onClick={() => handleSelectCategory(cat.slug)}
                            className={`flex-1 text-left font-medium transition-colors ${
                              isSelected
                                ? "font-bold text-[#0875B9]"
                                : "text-ink/80 hover:text-ink"
                            }`}
                          >
                            {cat.label}
                          </button>
                          {hasSubs && (
                            <button
                              type="button"
                              onClick={() => toggleCategoryExpand(cat.slug)}
                              aria-label={`Développer ${cat.label}`}
                              className="p-1 text-ink/40 hover:text-ink"
                            >
                              <ChevronDownIcon
                                size={14}
                                className={`transition-transform duration-200 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Sous-catégories */}
                        {hasSubs && isExpanded && (
                          <ul className="ml-4 mt-1 space-y-1 border-l-2 border-ink/10 pl-2">
                            {cat.subs.map((sub) => {
                              const isSubSelected =
                                selectedCategory === cat.slug &&
                                selectedSub === sub.slug;
                              return (
                                <li key={sub.slug}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleSelectCategory(cat.slug, sub.slug)
                                    }
                                    className={`block w-full py-1 text-left text-xs transition-colors ${
                                      isSubSelected
                                        ? "font-bold text-[#0875B9]"
                                        : "text-ink/70 hover:text-ink"
                                    }`}
                                  >
                                    {sub.label}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* ── Carte 3 : Fourchette de prix ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-[#0875B9]" />
                  <h2 className="text-base font-bold text-ink">Fourchette de prix</h2>
                </div>

                <div className="space-y-4">
                  {/* Presets rapides */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-1.5">
                      Palier de prix
                    </label>
                    <select
                      value={pricePreset}
                      onChange={(e) => handlePricePresetChange(e.target.value)}
                      className="w-full rounded-xl border border-ink/15 bg-paper py-2 px-3 text-xs font-medium text-ink focus:border-[#0875B9] focus:outline-none"
                    >
                      <option value="all">Tous les prix</option>
                      <option value="under-50">Moins de 50 €</option>
                      <option value="50-500">50 € à 500 €</option>
                      <option value="500-2000">500 € à 2 000 €</option>
                      <option value="over-2000">Plus de 2 000 €</option>
                    </select>
                  </div>

                  {/* Slider de prix */}
                  <div className="pt-3 border-t border-ink/10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-semibold text-ink/70">
                      <span>0 €</span>
                      <span className="rounded-md bg-paper px-2 py-1 text-ink font-bold">
                        jusqu&apos;à {tempMaxPrice.toLocaleString("fr-BE")} €
                      </span>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="4000"
                      step="50"
                      value={tempMaxPrice}
                      onChange={(e) => setTempMaxPrice(Number(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-ink/10 accent-[#0875B9]"
                    />

                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setMaxPrice(4000);
                          setTempMaxPrice(4000);
                          setPricePreset("all");
                          setCurrentPage(1);
                        }}
                        className="text-xs text-ink/50 hover:text-ink underline"
                      >
                        Réinitialiser
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setMaxPrice(tempMaxPrice);
                          setCurrentPage(1);
                        }}
                        className="rounded-lg bg-[#0875B9] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#065f9a]"
                      >
                        Appliquer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Carte 4 : Filtrer par marque ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-4 w-1 rounded-full bg-[#0875B9]" />
                  <h2 className="text-base font-bold text-ink">Filtrer par marque</h2>
                </div>

                {/* Champ recherche de marque */}
                <div className="relative mb-3">
                  <input
                    type="text"
                    value={brandSearch}
                    onChange={(e) => setBrandSearch(e.target.value)}
                    placeholder="Rechercher une marque..."
                    className="w-full rounded-lg border border-ink/15 bg-paper py-2 pl-3 pr-8 text-xs text-ink placeholder:text-ink/40 focus:border-[#0875B9] focus:outline-none"
                  />
                  <SearchIcon
                    size={14}
                    className="pointer-events-none absolute right-2.5 top-2.5 text-ink/40"
                  />
                </div>

                {/* Liste des marques avec compteurs */}
                <div className="max-h-48 space-y-2 overflow-y-auto pr-1">
                  {filteredBrandsList.map((brand) => {
                    const isChecked = tempBrands.includes(brand);
                    const count = brandCounts[brand] || 0;
                    return (
                      <label
                        key={brand}
                        className="flex cursor-pointer items-center justify-between text-xs text-ink/80 hover:text-ink"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleTempBrand(brand)}
                            className="h-4 w-4 rounded border-ink/20 text-[#0875B9] accent-[#0875B9] focus:ring-0"
                          />
                          <span>{brand}</span>
                        </div>
                        <span className="text-ink/40">({count})</span>
                      </label>
                    );
                  })}
                  {filteredBrandsList.length === 0 && (
                    <p className="py-2 text-center text-xs text-ink/40">
                      Aucune marque trouvée
                    </p>
                  )}
                </div>

                {/* Boutons Apply Filter & Clear All */}
                <div className="mt-5 flex items-center justify-between gap-2 border-t border-ink/5 pt-4">
                  <button
                    type="button"
                    onClick={applyBrands}
                    className="rounded-lg border border-[#0875B9] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0875B9] transition-colors hover:bg-[#0875B9] hover:text-white"
                  >
                    Appliquer le filtre
                  </button>
                  <button
                    type="button"
                    onClick={clearBrands}
                    className="text-xs text-ink/50 hover:text-ink underline"
                  >
                    Tout effacer
                  </button>
                </div>
              </div>

              {/* ── Carte 5 : Articles par page & Réinitialisation ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-1.5">
                    Articles par page
                  </label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="w-full rounded-xl border border-ink/15 bg-paper py-2 px-3 text-xs font-medium text-ink focus:border-[#0875B9] focus:outline-none"
                  >
                    <option value="6">6 articles</option>
                    <option value="12">12 articles</option>
                    <option value="24">24 articles</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/15 bg-paper py-2.5 px-3 text-xs font-semibold text-ink/80 transition-colors hover:bg-ink hover:text-white"
                >
                  <span className="text-sm">↺</span> Effacer tous les filtres
                </button>
              </div>
            </div>
          </aside>

          {/* Overlay sombre mobile */}
          {mobileFiltersOpen && (
            <div
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
            />
          )}

          {/* ═══════════════════════════════════════════════════════ */}
          {/*  COLONNE DROITE : PRODUITS & CONTRÔLES                 */}
          {/* ═══════════════════════════════════════════════════════ */}
          <main className="lg:col-span-8 xl:col-span-9">
            {/* ── Barre de recherche & vue (Top bar simplifiée) ── */}
            <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Input de recherche */}
                <div className="relative flex-1">
                  <SearchIcon
                    size={16}
                    className="pointer-events-none absolute left-3.5 top-3.5 text-ink/40"
                  />
                  <input
                    type="search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setSearchQuery(searchInput);
                        setCurrentPage(1);
                      }
                    }}
                    placeholder="Rechercher des produits, catégories, marques..."
                    className="w-full rounded-xl border border-ink/15 bg-paper py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-[#0875B9] focus:outline-none"
                  />
                </div>

                {/* Bouton Rechercher */}
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery(searchInput);
                    setCurrentPage(1);
                  }}
                  className="rounded-xl bg-[#0875B9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f9a]"
                >
                  Rechercher
                </button>
              </div>

              {/* ── Sous-barre : compteur de résultats et sélecteur de vue ── */}
              <div className="mt-3 flex items-center justify-between border-t border-ink/10 pt-3">
                <p className="text-xs sm:text-sm font-medium text-ink/70">
                  <span className="font-bold text-ink">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
                </p>

                {/* Sélecteur Vue Grille / Liste */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink/50">
                    Vue
                  </span>
                  <div className="flex rounded-lg border border-ink/15 p-0.5">
                    {/* Bouton Grille (3x3) */}
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      aria-label="Affichage en grille"
                      className={`grid h-8 w-8 place-items-center rounded-md transition-colors ${
                        viewMode === "grid"
                          ? "bg-[#0875B9] text-white"
                          : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="1" y="1" width="3.5" height="3.5" rx="0.5" />
                        <rect x="6.25" y="1" width="3.5" height="3.5" rx="0.5" />
                        <rect x="11.5" y="1" width="3.5" height="3.5" rx="0.5" />
                        <rect x="1" y="6.25" width="3.5" height="3.5" rx="0.5" />
                        <rect x="6.25" y="6.25" width="3.5" height="3.5" rx="0.5" />
                        <rect x="11.5" y="6.25" width="3.5" height="3.5" rx="0.5" />
                        <rect x="1" y="11.5" width="3.5" height="3.5" rx="0.5" />
                        <rect x="6.25" y="11.5" width="3.5" height="3.5" rx="0.5" />
                        <rect x="11.5" y="11.5" width="3.5" height="3.5" rx="0.5" />
                      </svg>
                    </button>

                    {/* Bouton Liste */}
                    <button
                      type="button"
                      onClick={() => setViewMode("list")}
                      aria-label="Affichage en liste"
                      className={`grid h-8 w-8 place-items-center rounded-md transition-colors ${
                        viewMode === "list"
                          ? "bg-[#0875B9] text-white"
                          : "text-ink/60 hover:text-ink"
                      }`}
                    >
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                        <rect x="2" y="2" width="12" height="2.5" rx="0.5" />
                        <rect x="2" y="6.75" width="12" height="2.5" rx="0.5" />
                        <rect x="2" y="11.5" width="12" height="2.5" rx="0.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Filtres actifs (Chips) ── */}
            {activeFiltersCount > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-ink/60">
                  Filtres actifs :
                </span>

                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#0875B9]/10 px-2.5 py-1 text-xs font-medium text-[#0875B9]">
                    Catégorie : {selectedCategory}
                    <button
                      type="button"
                      onClick={() => setSelectedCategory(null)}
                      className="hover:text-ink"
                    >
                      ×
                    </button>
                  </span>
                )}

                {selectedSub && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#0875B9]/10 px-2.5 py-1 text-xs font-medium text-[#0875B9]">
                    Sous-catégorie : {selectedSub}
                    <button
                      type="button"
                      onClick={() => setSelectedSub(null)}
                      className="hover:text-ink"
                    >
                      ×
                    </button>
                  </span>
                )}

                {maxPrice < 4000 && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#0875B9]/10 px-2.5 py-1 text-xs font-medium text-[#0875B9]">
                    ≤ {maxPrice.toLocaleString("fr-FR")} €
                    <button
                      type="button"
                      onClick={() => {
                        setMaxPrice(4000);
                        setTempMaxPrice(4000);
                        setPricePreset("all");
                      }}
                      className="hover:text-ink"
                    >
                      ×
                    </button>
                  </span>
                )}

                {selectedColors.map((color) => (
                  <span
                    key={color}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0875B9]/10 px-2.5 py-1 text-xs font-medium text-[#0875B9]">
                    Couleur : {color}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedColors((prev) => prev.filter((c) => c !== color))
                      }
                      className="hover:text-ink"
                    >
                      ×
                    </button>
                  </span>
                ))}

                {selectedBrands.map((brand) => (
                  <span
                    key={brand}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0875B9]/10 px-2.5 py-1 text-xs font-medium text-[#0875B9]">
                    {brand}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedBrands((prev) => prev.filter((b) => b !== brand))
                      }
                      className="hover:text-ink"
                    >
                      ×
                    </button>
                  </span>
                ))}

                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#0875B9]/10 px-2.5 py-1 text-xs font-medium text-[#0875B9]">
                    « {searchQuery} »
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setSearchInput("");
                      }}
                      className="hover:text-ink"
                    >
                      ×
                    </button>
                  </span>
                )}

                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="ml-auto text-xs font-semibold text-ink/50 hover:text-[#0875B9] underline"
                >
                  Tout réinitialiser
                </button>
              </div>
            )}

            {/* ── Liste des produits (Grille ou Liste) ── */}
            {paginatedProducts.length === 0 ? (
              <div className="mt-8 rounded-2xl border border-dashed border-ink/20 p-12 text-center">
                <ShoppingBagIcon size={36} className="mx-auto text-ink/30" />
                <h3 className="mt-3 text-lg font-bold text-ink">
                  Aucun produit ne correspond à vos critères
                </h3>
                <p className="mt-1 text-sm text-ink/60">
                  Essayez d&apos;élargir vos filtres ou de réinitialiser votre recherche.
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-flame"
                >
                  Réinitialiser tous les filtres
                </button>
              </div>
            ) : viewMode === "grid" ? (
              /* Vue Grille (3 colonnes) */
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProducts.map((p) => (
                  <article
                    key={p.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lg"
                  >
                    {/* Image du produit */}
                    <Link href={`/boutique/produit?id=${p.id}`} aria-label={`Voir ${p.name}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-ink/5">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </Link>

                    {/* Contenu carte */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* Catégorie */}
                      <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
                        {p.category.replace("-", " ")}
                      </p>

                      {/* Titre */}
                      <h3 className="mt-1 text-base font-bold leading-snug text-ink group-hover:text-[#CF4318] transition-colors">
                        <Link href={`/boutique/produit?id=${p.id}`}>{p.name}</Link>
                      </h3>

                      {/* Avis étoiles */}
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/50">
                        <span className="text-amber-400">★★★★★</span>
                        <span>{p.reviews} avis</span>
                      </div>

                      {/* Prix sur la même ligne */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-lg font-extrabold text-ink">
                          {p.price.toLocaleString("fr-BE")} €
                        </span>
                        {p.oldPrice && (
                          <span className="text-sm text-ink/40 line-through">
                            {p.oldPrice.toLocaleString("fr-BE")} €
                          </span>
                        )}
                      </div>

                      {/* Bouton centré en bas, pleine largeur */}
                      <div className="mt-auto pt-5">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(p)}
                          className="w-full rounded-xl bg-[#CF4318] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B03815] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CF4318]"
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Vue Liste */
              <div className="mt-6 flex flex-col gap-4">
                {paginatedProducts.map((p) => (
                  <article
                    key={p.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:border-ink/30 sm:flex-row"
                  >
                    {/* Image */}
                    <Link href={`/boutique/produit?id=${p.id}`} aria-label={`Voir ${p.name}`} className="relative block aspect-[16/10] w-full shrink-0 overflow-hidden bg-ink/5 sm:w-56 sm:aspect-auto">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Contenu */}
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
                          {p.brand} · {p.category.replace("-", " ")}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-ink/50">
                          <span className="text-amber-400">★★★★★</span>
                          <span>({p.reviews})</span>
                        </div>
                      </div>

                      <h3 className="mt-1 text-lg font-bold text-ink group-hover:text-[#CF4318]">
                        <Link href={`/boutique/produit?id=${p.id}`}>{p.name}</Link>
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-ink/70">
                        Produit officiel disponible auprès de No Borders ASBL ou de notre partenaire {p.brand}.
                      </p>

                      {/* Prix sur la même ligne */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-lg font-extrabold text-ink">
                          {p.price.toLocaleString("fr-BE")} €
                        </span>
                        {p.oldPrice && (
                          <span className="text-sm text-ink/40 line-through">
                            {p.oldPrice.toLocaleString("fr-BE")} €
                          </span>
                        )}
                      </div>

                      {/* Bouton centré en bas, pleine largeur */}
                      <div className="mt-auto pt-5">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(p)}
                          className="w-full rounded-xl bg-[#CF4318] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B03815] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CF4318]"
                        >
                          Ajouter au panier
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* ── Pagination (Sans fond) ── */}
            <div className="mt-10 pt-6">
              <div className="flex items-center justify-center">
                {/* Boutons pages */}
                <div className="flex items-center gap-1.5">
                  {/* Flèche gauche */}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    aria-label="Page précédente"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-ink/15 text-xs text-ink/70 hover:border-ink hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ←
                  </button>

                  {/* Numéros */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setCurrentPage(p)}
                      aria-current={p === currentPage ? "page" : undefined}
                      className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-semibold transition-colors ${
                        p === currentPage
                          ? "bg-[#CF4318] text-white"
                          : "border border-ink/15 text-ink/70 hover:border-ink hover:text-ink"
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  {/* Flèche droite */}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    aria-label="Page suivante"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-ink/15 text-xs text-ink/70 hover:border-ink hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

