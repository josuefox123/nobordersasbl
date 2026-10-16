"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckIcon, ShoppingBagIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";

type CartItem = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  qty: number;
  color: string;
  size: string;
  image: string;
};

const initialCartItems: CartItem[] = [
  {
    id: 9,
    name: "Maillot No Borders",
    price: 29.5,
    qty: 1,
    color: "Noir / Orange",
    size: "M",
    image: "/images/organisations-sportives.jpg",
  },
  {
    id: 8,
    name: "Casque recyclé Ecobirdy",
    price: 58,
    oldPrice: 70,
    qty: 2,
    color: "Blanc",
    size: "L",
    image: "/images/ghana-booomers.jpg",
  },
  {
    id: 12,
    name: "Sacoche imperméable 20 L",
    price: 45,
    qty: 1,
    color: "Noir",
    size: "Unique",
    image: "/images/vente-velo.jpg",
  },
];

export function PanierClient() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [shippingMethod, setShippingMethod] = useState<"standard" | "priority" | "free">("standard");
  const [notice, setNotice] = useState<string | null>(null);

  const notify = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    notify("Article retiré du panier");
  };

  const clearCart = () => {
    setItems([]);
    notify("Le panier a été vidé");
  };

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!coupon.trim()) return;
    if (coupon.trim().toUpperCase() === "PROMO10" || coupon.trim().toUpperCase() === "NOBORDERS") {
      setCouponApplied(true);
      notify("Code promo appliqué : 10% de réduction !");
    } else {
      notify("Code promo invalide. Essayez PROMO10");
    }
  };

  // Calculs financiers
  const totalItemsCount = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);

  const discountAmount = useMemo(() => {
    return couponApplied ? Math.round(subtotal * 0.1) : 0;
  }, [subtotal, couponApplied]);

  const shippingCost = useMemo(() => {
    if (items.length === 0) return 0;
    if (shippingMethod === "free") return 0;
    if (shippingMethod === "priority") return 6000;
    return 2500; // Standard
  }, [items.length, shippingMethod]);

  const taxAmount = useMemo(() => {
    return Math.round(subtotal * 0.05); // TVA estimée 5%
  }, [subtotal]);

  const total = useMemo(() => {
    if (items.length === 0) return 0;
    return subtotal - discountAmount + shippingCost + taxAmount;
  }, [items.length, subtotal, discountAmount, shippingCost, taxAmount]);

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
          { label: "Panier" },
        ]}
        title="Mon Panier"
        description="Vérifiez vos articles sélectionnés et finalisez votre commande en toute sécurité."
      />

      {/* ── Corps principal sur fond blanc jusqu'au footer ── */}
      <section className="flex-1 bg-white py-12 sm:py-16">
        <div className="container">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ink/15 p-12 text-center sm:p-16">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#0875B9]/10 text-[#0875B9]">
                <ShoppingBagIcon size={32} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-ink sm:text-2xl">Votre panier est vide</h2>
              <p className="mt-2 text-sm text-ink/60">
                Vous n&apos;avez actuellement aucun article dans votre panier d&apos;achats.
              </p>
              <Link
                href="/boutique"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0875B9] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f9a]"
              >
                Découvrir la boutique →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              {/* ═══════════════════════════════════════════════════════ */}
              {/*  COLONNE GAUCHE : TABLEAU DES ARTICLES (8 colonnes)    */}
              {/* ═══════════════════════════════════════════════════════ */}
              <div className="lg:col-span-7 xl:col-span-8">
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
                  {/* En-têtes du tableau (Desktop) */}
                  <div className="hidden border-b border-ink/10 bg-paper/50 px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-ink/60 md:grid md:grid-cols-12 md:gap-4">
                    <div className="md:col-span-6">Produit</div>
                    <div className="text-center md:col-span-2">Prix</div>
                    <div className="text-center md:col-span-2">Quantité</div>
                    <div className="text-right md:col-span-2">Total</div>
                  </div>

                  {/* Lignes du panier */}
                  <div className="divide-y divide-ink/10">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col gap-4 p-5 sm:p-6 md:grid md:grid-cols-12 md:items-center md:gap-4"
                      >
                        {/* Colonne Produit (Image + Infos) */}
                        <div className="flex items-center gap-4 md:col-span-6">
                          <Link
                            href="/boutique/produit"
                            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-ink/10 bg-paper"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </Link>
                          <div>
                            <Link
                              href="/boutique/produit"
                              className="text-sm font-bold text-ink transition-colors hover:text-[#0875B9] sm:text-base"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-1 text-xs text-ink/60">
                              Couleur : {item.color} · Taille : {item.size}
                            </p>
                          </div>
                        </div>

                        {/* Colonne Prix */}
                        <div className="flex items-center justify-between text-sm font-semibold text-ink md:col-span-2 md:justify-center">
                          <span className="text-xs text-ink/50 md:hidden">Prix unitaire :</span>
                          <div>
                            <span>{item.price.toLocaleString("fr-FR")} FCFA</span>
                            {item.oldPrice && (
                              <span className="block text-[11px] text-ink/40 line-through">
                                {item.oldPrice.toLocaleString("fr-FR")} FCFA
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Colonne Quantité */}
                        <div className="flex items-center justify-between md:col-span-2 md:justify-center">
                          <span className="text-xs text-ink/50 md:hidden">Quantité :</span>
                          <div className="flex items-center rounded-lg border border-ink/15 bg-white">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, -1)}
                              aria-label="Diminuer la quantité"
                              className="grid h-8 w-8 place-items-center text-sm font-bold text-ink/60 transition-colors hover:bg-paper hover:text-ink"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs font-bold text-ink">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, 1)}
                              aria-label="Augmenter la quantité"
                              className="grid h-8 w-8 place-items-center text-sm font-bold text-ink/60 transition-colors hover:bg-paper hover:text-ink"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Colonne Total & Suppression */}
                        <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-3">
                          <span className="text-xs text-ink/50 md:hidden">Total ligne :</span>
                          <span className="text-sm font-extrabold text-ink sm:text-base">
                            {(item.price * item.qty).toLocaleString("fr-FR")} FCFA
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Supprimer ${item.name}`}
                            title="Supprimer l'article"
                            className="grid h-8 w-8 place-items-center rounded-lg text-red-600 transition-colors hover:bg-red-50 hover:text-red-700"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Boutons d'action en bas du tableau */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/boutique"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink/75 transition-colors hover:text-[#0875B9]"
                  >
                    <span>←</span> Continuer mes achats
                  </Link>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/50 px-4 py-2.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-100/70"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    Vider le panier
                  </button>
                </div>
              </div>

              {/* ═══════════════════════════════════════════════════════ */}
              {/*  COLONNE DROITE : RÉCAPITULATIF COMMANDE (4 colonnes)   */}
              {/* ═══════════════════════════════════════════════════════ */}
              <div className="lg:col-span-5 xl:col-span-4">
                <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-7">
                  {/* Titre & badge compteur */}
                  <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                    <h2 className="text-lg font-bold text-ink">Récapitulatif</h2>
                    <span className="rounded-full bg-[#0875B9]/10 px-3 py-1 text-xs font-bold text-[#0875B9]">
                      {totalItemsCount} article{totalItemsCount > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Code de réduction */}
                  <div className="mt-5 border-b border-ink/10 pb-5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2">
                      Code promo / Réduction
                    </label>
                    <form onSubmit={applyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Ex: PROMO10"
                        className="w-full rounded-xl border border-ink/15 bg-paper py-2.5 px-3.5 text-xs text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-[#0875B9] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#065f9a]"
                      >
                        Appliquer
                      </button>
                    </form>
                    {couponApplied && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                        <CheckIcon size={13} /> Code PROMO10 actif (-10%)
                      </p>
                    )}
                  </div>

                  {/* Lignes récapitulatives */}
                  <div className="mt-5 space-y-3.5 text-sm">
                    <div className="flex items-center justify-between text-ink/75">
                      <span>Sous-total</span>
                      <span className="font-semibold text-ink">
                        {subtotal.toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>

                    {/* Mode de livraison */}
                    <div className="border-t border-ink/5 pt-3">
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-2.5">
                        Mode de livraison
                      </span>
                      <div className="space-y-2 text-xs">
                        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-ink/10 p-2.5 hover:bg-paper">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod === "standard"}
                              onChange={() => setShippingMethod("standard")}
                              className="accent-[#0875B9]"
                            />
                            <span className="font-medium text-ink">Standard (3–5 jours)</span>
                          </div>
                          <span className="font-bold text-ink">2 500 FCFA</span>
                        </label>

                        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-ink/10 p-2.5 hover:bg-paper">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod === "priority"}
                              onChange={() => setShippingMethod("priority")}
                              className="accent-[#0875B9]"
                            />
                            <span className="font-medium text-ink">Prioritaire (24–48h)</span>
                          </div>
                          <span className="font-bold text-ink">6 000 FCFA</span>
                        </label>

                        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-ink/10 p-2.5 hover:bg-paper">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="shipping"
                              checked={shippingMethod === "free"}
                              onChange={() => setShippingMethod("free")}
                              className="accent-[#0875B9]"
                            />
                            <span className="font-medium text-ink">Retrait en atelier (Mons)</span>
                          </div>
                          <span className="font-bold text-emerald-600">Gratuit</span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-ink/75 border-t border-ink/5 pt-3">
                      <span>TVA estimée (5%)</span>
                      <span className="font-semibold text-ink">
                        {taxAmount.toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex items-center justify-between text-emerald-600">
                        <span>Réduction appliquée</span>
                        <span className="font-semibold">
                          -{discountAmount.toLocaleString("fr-FR")} FCFA
                        </span>
                      </div>
                    )}

                    {/* Total final */}
                    <div className="flex items-baseline justify-between border-t border-ink/10 pt-4">
                      <span className="text-base font-bold text-ink">Total TTC</span>
                      <span className="text-xl font-extrabold text-ink sm:text-2xl">
                        {total.toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>
                  </div>

                  {/* Bouton passer la commande */}
                  <button
                    type="button"
                    onClick={() => notify("Redirection vers la passerelle de paiement sécurisée...")}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0875B9] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#065f9a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0875B9]"
                  >
                    Passer la commande →
                  </button>

                  {/* Paiements acceptés */}
                  <div className="mt-6 text-center border-t border-ink/5 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink/40">
                      Paiements 100% sécurisés
                    </p>
                    <div className="mt-2.5 flex items-center justify-center gap-2 text-[11px] font-semibold text-ink/60">
                      <span className="rounded-md border border-ink/10 bg-paper px-2 py-1">Visa</span>
                      <span className="rounded-md border border-ink/10 bg-paper px-2 py-1">Mastercard</span>
                      <span className="rounded-md border border-ink/10 bg-paper px-2 py-1">Mobile Money</span>
                      <span className="rounded-md border border-ink/10 bg-paper px-2 py-1">Virement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
