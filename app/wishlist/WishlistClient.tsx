"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckIcon, HeartIcon, ShoppingBagIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";

type WishlistItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
};

const initialWishlist: WishlistItem[] = [
  {
    id: 12,
    name: "Sacoche imperméable 20 L",
    category: "Accessoires · Sacoches",
    price: 45,
    oldPrice: 56,
    rating: 4.5,
    reviews: 14,
    image: "/images/vente-velo.jpg",
    inStock: true,
  },
  {
    id: 1,
    name: "My Boo Kumasi — Route",
    category: "Vélos en bambou",
    price: 1630,
    rating: 4.8,
    reviews: 36,
    image: "/images/lancement-myboo.jpg",
    inStock: true,
  },
  {
    id: 8,
    name: "Casque recyclé Ecobirdy",
    category: "Équipement · Sécurité",
    price: 58000,
    rating: 5.0,
    reviews: 48,
    image: "/images/ghana-booomers.jpg",
    badge: { text: "Épuisé", type: "soldout" },
    inStock: false,
  },
];

type TabId =
  | "orders"
  | "favorites"
  | "payments"
  | "feedback"
  | "locations"
  | "preferences"
  | "support";

export function WishlistClient() {
  const [items, setItems] = useState<WishlistItem[]>(initialWishlist);
  const [activeTab, setActiveTab] = useState<TabId>("favorites");
  const [notice, setNotice] = useState<string | null>(null);

  const notify = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    notify("Article retiré de vos favoris");
  };

  const handleAddToCart = (item: WishlistItem) => {
    notify(`« ${item.name} » ajouté au panier !`);
  };

  const handleMoveAllToCart = () => {
    const availableItems = items.filter((i) => i.inStock);
    if (availableItems.length === 0) {
      notify("Aucun article disponible en stock à transférer.");
      return;
    }
    notify(`${availableItems.length} articles disponibles ont été ajoutés à votre panier !`);
  };

  return (
    <div className="mt-[84px] lg:mt-[188px] pb-24 bg-white min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] flex flex-col">
      {/* ── Notification toast ── */}
      {notice && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white shadow-2xl animate-fade-in"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0875B9]/10 text-[#0875B9]">
            <CheckIcon size={14} />
          </span>
          {notice}
        </div>
      )}

      {/* ── En-tête avec breadcrumb ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Boutique", href: "/boutique" },
          { label: "Favoris" },
        ]}
        title="Mes Favoris & Espace Membre"
        description="Retrouvez tous vos articles coups de cœur et gérez vos préférences d'achat en toute simplicité."
      />

      {/* ── Corps principal sur fond blanc jusqu'au footer ── */}
      <section className="flex-1 bg-white py-12 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            {/* ═══════════════════════════════════════════════════════ */}
            {/*  COLONNE GAUCHE : PROFIL UTILISATEUR & ONGLETS         */}
            {/* ═══════════════════════════════════════════════════════ */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                {/* Photo de profil & Nom */}
                <div className="text-center">
                  <div className="relative mx-auto inline-block">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-emerald-500 bg-emerald-50 shadow-inner">
                      <Image
                        src="https://i.pravatar.cc/160?u=elena-mitchell"
                        alt="Elena Mitchell"
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    {/* Badge vérifié vert */}
                    <span
                      title="Compte vérifié"
                      className="absolute bottom-0 right-0 grid h-6 w-6 place-items-center rounded-full bg-emerald-600 text-white ring-2 ring-white"
                    >
                      <CheckIcon size={12} />
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-ink">Elena Mitchell</h2>
                  
                  {/* Badge statut */}
                  <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <span className="text-[10px]">💎</span>
                    <span>Membre Gold</span>
                  </div>

                  {/* Compteurs statistiques */}
                  <div className="mt-6 grid grid-cols-3 divide-x divide-ink/10 border-y border-ink/10 py-3.5 text-center">
                    <div>
                      <div className="text-lg font-extrabold text-ink">3</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                        Commandes
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-[#0875B9]">{items.length}</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                        Favoris
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-ink">8</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-ink/50">
                        Avis
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation par onglets verticaux */}
                <nav className="mt-6 flex flex-col gap-1" aria-label="Menu du compte">
                  <button
                    type="button"
                    onClick={() => setActiveTab("orders")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "orders"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span>Commandes</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("favorites")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "favorites"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <HeartIcon size={16} className={activeTab === "favorites" ? "fill-current" : ""} />
                    <span>Favoris</span>
                    {items.length > 0 && (
                      <span className="ml-auto rounded-full bg-[#0875B9] px-2 py-0.5 text-[11px] font-bold text-white">
                        {items.length}
                      </span>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("payments")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "payments"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Paiements</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("feedback")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "feedback"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Avis & Retours</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("locations")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "locations"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Adresses</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("preferences")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "preferences"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span>Préférences</span>
                  </button>

                  {/* Séparateur */}
                  <div className="my-3 border-t border-ink/10" />

                  <button
                    type="button"
                    onClick={() => setActiveTab("support")}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "support"
                        ? "bg-[#E1F0FA] text-[#0875B9] font-bold"
                        : "text-ink/75 hover:bg-paper hover:text-ink"
                    }`}
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>Assistance</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => notify("Vous êtes actuellement connecté.")}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#E51C45] transition-colors hover:bg-[#E51C45]/10"
                  >
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Déconnexion</span>
                  </button>
                </nav>
              </div>
            </aside>

            {/* ═══════════════════════════════════════════════════════ */}
            {/*  COLONNE DROITE : CONTENU DES ONGLETS                  */}
            {/* ═══════════════════════════════════════════════════════ */}
            <main className="lg:col-span-8 xl:col-span-9">
              {/* ONGLET FAVORIS (Actif par défaut) */}
              {activeTab === "favorites" && (
                <div>
                  {/* Barre supérieure : Titre & Bouton d'action globale */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold font-heading text-ink sm:text-3xl">
                        Favoris enregistrés
                      </h2>
                      <p className="mt-1 text-sm text-ink/60">
                        {items.length} article{items.length > 1 ? "s" : ""} dans votre liste de souhaits
                      </p>
                    </div>

                    {items.length > 0 && (
                      <button
                        type="button"
                        onClick={handleMoveAllToCart}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0875B9] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#065f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0875B9]"
                      >
                        <ShoppingBagIcon size={18} />
                        <span>Tout ajouter au panier</span>
                      </button>
                    )}
                  </div>

                  {/* Grille des produits enregistrés */}
                  {items.length === 0 ? (
                    <div className="mt-8 rounded-2xl border border-dashed border-ink/15 p-12 text-center sm:p-16">
                      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0875B9]/10 text-[#0875B9]">
                        <HeartIcon size={32} />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-ink">Aucun favori enregistré</h3>
                      <p className="mt-2 text-sm text-ink/60">
                        Explorez notre boutique et cliquez sur l&apos;icône cœur pour sauvegarder vos produits favoris ici.
                      </p>
                      <Link
                        href="/boutique"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0875B9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f9a]"
                      >
                        Explorer les produits →
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((item) => (
                        <article
                          key={item.id}
                          className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0875B9] hover:shadow-lg"
                        >
                          {/* Image du produit avec badge */}
                          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink/5">
                            <Link href="/boutique/produit" aria-label={`Voir ${item.name}`} className="block h-full w-full">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </Link>
                          </div>

                          {/* Contenu de la carte (Strictement identique à BoutiqueClient) */}
                          <div className="flex flex-1 flex-col p-5">
                            {/* Catégorie */}
                            <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
                              {item.category}
                            </p>

                            {/* Titre */}
                            <h3 className="mt-1 text-base font-bold leading-snug text-ink group-hover:text-[#0875B9] transition-colors">
                              <Link href="/boutique/produit">{item.name}</Link>
                            </h3>

                            {/* Avis étoiles */}
                            <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/50">
                              <span className="text-amber-400">★★★★★</span>
                              <span className="font-medium text-ink/70">({item.rating.toFixed(1)})</span>
                            </div>

                            {/* Prix en Francs CFA */}
                            <div className="mt-4 flex items-center gap-2.5">
                              <span className="text-lg font-extrabold text-ink">
                                {item.price.toLocaleString("fr-FR")} FCFA
                              </span>
                              {item.oldPrice && (
                                <span className="text-xs text-ink/40 line-through">
                                  {item.oldPrice.toLocaleString("fr-FR")} FCFA
                                </span>
                              )}
                            </div>

                            {/* Boutons d'action en bas : Ajouter au panier + Supprimer (✕) */}
                            <div className="mt-auto pt-5 flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleAddToCart(item)}
                                className="flex-1 rounded-xl bg-[#0875B9] py-2.5 px-3 text-xs font-bold text-white transition-colors hover:bg-[#065f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0875B9]"
                              >
                                Ajouter au panier
                              </button>

                              {/* Bouton de suppression du favori */}
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                aria-label={`Supprimer ${item.name} des favoris`}
                                title="Retirer des favoris"
                                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-[#0875B9]/20 bg-[#0875B9]/5 text-[#0875B9] transition-colors hover:border-[#0875B9]/40 hover:bg-[#0875B9]/10 hover:text-[#065f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0875B9]"
                              >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ONGLET COMMANDES */}
              {activeTab === "orders" && (
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold font-heading text-ink">Historique de vos commandes</h2>
                  <p className="mt-1 text-sm text-ink/60">Suivez l&apos;état de vos livraisons et téléchargez vos reçus.</p>
                  
                  <div className="mt-6 flex flex-col gap-4">
                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-ink/50">Commande #NB-84920</span>
                          <div className="text-xs text-ink/60">Passée le 12 octobre 2026</div>
                        </div>
                        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                          ● En cours de livraison
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-sm font-semibold text-ink">
                          Maillot No Borders + Casque recyclé (2 articles)
                        </div>
                        <div className="text-base font-extrabold text-ink">
                          87 500 FCFA
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-ink/50">Commande #NB-79301</span>
                          <div className="text-xs text-ink/60">Passée le 28 septembre 2026</div>
                        </div>
                        <span className="rounded-full bg-paper border border-ink/15 px-3 py-1 text-xs font-bold text-ink/70">
                          ✓ Livrée
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="text-sm font-semibold text-ink">
                          My Boo Bolga — Ville (1 article)
                        </div>
                        <div className="text-base font-extrabold text-ink">
                          1 240 000 FCFA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET PAIEMENTS */}
              {activeTab === "payments" && (
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold font-heading text-ink">Modes de paiement</h2>
                  <p className="mt-1 text-sm text-ink/60">Gérez vos cartes bancaires et comptes sécurisés.</p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border-2 border-[#0875B9] bg-[#E1F0FA]/20 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-ink">Visa Classic</span>
                        <span className="rounded-md bg-[#0875B9] px-2 py-0.5 text-[10px] font-bold text-white">Par défaut</span>
                      </div>
                      <div className="mt-4 text-base font-mono font-bold text-ink">•••• •••• •••• 4242</div>
                      <div className="mt-2 text-xs text-ink/60">Expire le 08/28</div>
                    </div>

                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-ink">Mastercard</span>
                      </div>
                      <div className="mt-4 text-base font-mono font-bold text-ink">•••• •••• •••• 8891</div>
                      <div className="mt-2 text-xs text-ink/60">Expire le 11/27</div>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET AVIS & RETOURS */}
              {activeTab === "feedback" && (
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold font-heading text-ink">Mes avis et évaluations</h2>
                  <p className="mt-1 text-sm text-ink/60">Consultez vos retours d&apos;expérience partagés sur la boutique.</p>

                  <div className="mt-6 flex flex-col gap-4">
                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-ink">My Boo Kumasi — Route</h4>
                        <span className="text-amber-400">★★★★★</span>
                      </div>
                      <p className="mt-2 text-sm text-ink/75 italic">
                        « Un vélo extraordinaire, d&apos;une robustesse et d&apos;un confort inégalés. Et en plus, un achat solidaire à fort impact social. »
                      </p>
                      <span className="mt-2 block text-xs text-ink/40">Publié le 05 octobre 2026</span>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET ADRESSES */}
              {activeTab === "locations" && (
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold font-heading text-ink">Adresses enregistrées</h2>
                  <p className="mt-1 text-sm text-ink/60">Vos adresses de livraison et de facturation pour vos commandes.</p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-ink">Domicile</span>
                        <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">Principale</span>
                      </div>
                      <div className="mt-3 text-sm text-ink/80 leading-relaxed">
                        Elena Mitchell<br />
                        Rue Aux Vignes, 42<br />
                        7012 Mons, Belgique
                      </div>
                    </div>

                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-ink">Bureau</span>
                      </div>
                      <div className="mt-3 text-sm text-ink/80 leading-relaxed">
                        No Borders ASBL<br />
                        Place du Parc, 12<br />
                        7000 Mons, Belgique
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ONGLET PRÉFÉRENCES */}
              {activeTab === "preferences" && (
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold font-heading text-ink">Préférences du compte</h2>
                  <p className="mt-1 text-sm text-ink/60">Personnalisez votre expérience et vos notifications.</p>

                  <div className="mt-6 flex flex-col gap-4">
                    <label className="flex items-center justify-between rounded-xl border border-ink/10 p-4">
                      <div>
                        <div className="font-semibold text-ink text-sm">Notifications par email</div>
                        <div className="text-xs text-ink/60">Recevoir le suivi de vos colis et alertes de stock</div>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#0875B9]" />
                    </label>

                    <label className="flex items-center justify-between rounded-xl border border-ink/10 p-4">
                      <div>
                        <div className="font-semibold text-ink text-sm">Offres & Nouveautés solidaires</div>
                        <div className="text-xs text-ink/60">Être informé(e) des nouvelles collections d&apos;artisanat</div>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 accent-[#0875B9]" />
                    </label>
                  </div>
                </div>
              )}

              {/* ONGLET ASSISTANCE */}
              {activeTab === "support" && (
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <h2 className="text-2xl font-bold font-heading text-ink">Centre d&apos;assistance</h2>
                  <p className="mt-1 text-sm text-ink/60">Une question sur vos commandes ou un retour ? Notre équipe est à votre écoute.</p>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="text-sm font-bold text-ink">Contact par téléphone</div>
                      <p className="mt-1 text-xs text-ink/60">Du lundi au vendredi de 9h à 18h</p>
                      <a href="tel:+32496969125" className="mt-3 inline-block text-sm font-bold text-[#0875B9] hover:underline">
                        +32 (0)496 96 91 25
                      </a>
                    </div>

                    <div className="rounded-xl border border-ink/10 p-5">
                      <div className="text-sm font-bold text-ink">Contact par email</div>
                      <p className="mt-1 text-xs text-ink/60">Réponse sous 24 heures ouvrées</p>
                      <a href="mailto:gmunyanziza@yahoo.fr" className="mt-3 inline-block text-sm font-bold text-[#0875B9] hover:underline">
                        gmunyanziza@yahoo.fr
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
