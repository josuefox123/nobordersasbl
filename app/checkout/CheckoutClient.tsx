"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

interface CheckoutItem {
  id: number;
  name: string;
  color: string;
  size: string;
  qty: number;
  price: number;
  image: string;
}

const initialItems: CheckoutItem[] = [
  {
    id: 1,
    name: "Sacoche imperméable 20 L",
    color: "Noir",
    size: "M",
    qty: 1,
    price: 89.99,
    image: "/images/vente-velo.jpg",
  },
  {
    id: 2,
    name: "Casque recyclé Ecobirdy",
    color: "Blanc",
    size: "L",
    qty: 2,
    price: 59.99,
    image: "/images/ghana-booomers.jpg",
  },
];

export function CheckoutClient() {
  // Informations client
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Adresse de livraison
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("Belgique");
  const [saveAddress, setSaveAddress] = useState(false);
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  // Mode de paiement
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal" | "applepay">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");

  // Code promo
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);

  // CGV & commande
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculs
  const subtotal = initialItems.reduce((acc, item) => acc + item.price * item.qty, 0); // 209.97
  const shipping = 9.99;
  const tax = 21.00;
  const total = Math.max(0, subtotal - discount + shipping + tax);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (!clean) return;
    if (clean === "NOBORDERS" || clean === "PROMO10" || clean === "SOLIDAIRE") {
      setDiscount(20);
      setPromoApplied(true);
      setPromoMessage("Code promo appliqué (-20,00 €) !");
    } else {
      setPromoMessage("Code promo invalide.");
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Veuillez accepter les Conditions Générales et la Politique de confidentialité.");
      return;
    }
    setOrderPlaced(true);
  };

  return (
    <div className="mt-[84px] lg:mt-[188px] min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] bg-paper pb-20">
      {/* ── Breadcrumb & En-tête ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Boutique", href: "/boutique" },
          { label: "Panier", href: "/panier" },
          { label: "Commander" },
        ]}
        title="Finaliser ma commande"
        description="Renseignez vos coordonnées, votre adresse de livraison et choisissez votre mode de paiement sécurisé."
      />

      <div className="container mt-10 lg:mt-14">
        {orderPlaced ? (
          /* Confirmation après commande */
          <div className="mx-auto max-w-2xl rounded-3xl border border-primary/20 bg-white p-8 sm:p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-ink">
              Merci pour votre commande !
            </h2>
            <p className="mt-3 text-sm sm:text-base text-ink/75 leading-relaxed">
              Votre commande d&apos;un montant de <strong className="text-primary">{total.toFixed(2).replace(".", ",")} €</strong> a été enregistrée avec succès. Un e-mail de confirmation avec votre récapitulatif vient de vous être envoyé.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/boutique"
                className="rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover shadow-sm"
              >
                Retour à la boutique
              </Link>
              <Link
                href="/"
                className="rounded-xl border border-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        ) : (
          /* Grille principale 2 colonnes */
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            {/* ══════════════════════════════════════════════════════════ */}
            {/*  COLONNE GAUCHE (Défile normalement)                       */}
            {/* ══════════════════════════════════════════════════════════ */}
            <form onSubmit={handlePlaceOrder} className="space-y-6 lg:col-span-7 xl:col-span-8">
              
              {/* ── SECTION 1 : Customer Information ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                    1
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink">
                    Customer Information
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="checkout-first-name" className="block text-xs font-semibold text-ink mb-1.5">
                        First Name
                      </label>
                      <input
                        id="checkout-first-name"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Your First Name"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-last-name" className="block text-xs font-semibold text-ink mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="checkout-last-name"
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Your Last Name"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="checkout-email" className="block text-xs font-semibold text-ink mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="checkout-phone" className="block text-xs font-semibold text-ink mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your Phone Number"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* ── SECTION 2 : Shipping Address ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                    2
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink">
                    Shipping Address
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Street Address */}
                  <div>
                    <label htmlFor="checkout-street" className="block text-xs font-semibold text-ink mb-1.5">
                      Street Address
                    </label>
                    <input
                      id="checkout-street"
                      type="text"
                      required
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="Street Address"
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Apartment, Suite, etc. (optional) */}
                  <div>
                    <label htmlFor="checkout-apartment" className="block text-xs font-semibold text-ink mb-1.5">
                      Apartment, Suite, etc. (optional)
                    </label>
                    <input
                      id="checkout-apartment"
                      type="text"
                      value={apartment}
                      onChange={(e) => setApartment(e.target.value)}
                      placeholder="Apartment, Suite, Unit, etc."
                      className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>

                  {/* City, State, ZIP Code */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="checkout-city" className="block text-xs font-semibold text-ink mb-1.5">
                        City
                      </label>
                      <input
                        id="checkout-city"
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-state" className="block text-xs font-semibold text-ink mb-1.5">
                        State
                      </label>
                      <input
                        id="checkout-state"
                        type="text"
                        required
                        value={stateRegion}
                        onChange={(e) => setStateRegion(e.target.value)}
                        placeholder="State"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-zip" className="block text-xs font-semibold text-ink mb-1.5">
                        ZIP Code
                      </label>
                      <input
                        id="checkout-zip"
                        type="text"
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        placeholder="ZIP Code"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label htmlFor="checkout-country" className="block text-xs font-semibold text-ink mb-1.5">
                      Country
                    </label>
                    <div className="relative">
                      <select
                        id="checkout-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-ink/15 bg-white px-4 py-3 pr-10 text-sm text-ink focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="Belgique">Belgique</option>
                        <option value="France">France</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Pays-Bas">Pays-Bas</option>
                        <option value="Allemagne">Allemagne</option>
                        <option value="Suisse">Suisse</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-ink/50">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="pt-2 space-y-2.5">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-ink/80 select-none">
                      <input
                        type="checkbox"
                        checked={saveAddress}
                        onChange={(e) => setSaveAddress(e.target.checked)}
                        className="h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary"
                      />
                      <span>Save this address for future orders</span>
                    </label>

                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-ink/80 select-none">
                      <input
                        type="checkbox"
                        checked={billingSameAsShipping}
                        onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                        className="h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary"
                      />
                      <span>Billing address same as shipping</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* ── SECTION 3 : Payment Method ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                    3
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink">
                    Payment Method
                  </h2>
                </div>

                {/* 3 boutons de choix de paiement */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {/* Credit Card */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border p-4 text-xs font-bold transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5 text-primary shadow-xs ring-1 ring-primary"
                        : "border-ink/15 bg-white text-ink hover:border-ink/30"
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    <span>Credit / Debit Card</span>
                  </button>

                  {/* PayPal */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border p-4 text-xs font-bold transition-all ${
                      paymentMethod === "paypal"
                        ? "border-primary bg-primary/5 text-primary shadow-xs ring-1 ring-primary"
                        : "border-ink/15 bg-white text-ink hover:border-ink/30"
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.79.79 0 0 1 .78-.66h6.772c2.22 0 3.92.518 5.05 1.54 1.13 1.022 1.55 2.502 1.25 4.4-.35 2.22-1.39 3.93-3.09 5.08-1.7 1.15-3.87 1.72-6.45 1.72h-1.52a.79.79 0 0 0-.78.66l-.88 4.877z" />
                    </svg>
                    <span>PayPal</span>
                  </button>

                  {/* Apple Pay */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("applepay")}
                    className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border p-4 text-xs font-bold transition-all ${
                      paymentMethod === "applepay"
                        ? "border-primary bg-primary/5 text-primary shadow-xs ring-1 ring-primary"
                        : "border-ink/15 bg-white text-ink hover:border-ink/30"
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.79 1.06-1.88.94-2.98-.93.04-2.02.63-2.67 1.4-.57.66-1.06 1.77-.93 2.85 1.03.08 2.06-.52 2.66-1.27z" />
                    </svg>
                    <span>Apple Pay</span>
                  </button>
                </div>

                {/* Formulaire carte bancaire */}
                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-4">
                    {/* Card Number */}
                    <div>
                      <label htmlFor="checkout-card-number" className="block text-xs font-semibold text-ink mb-1.5">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="checkout-card-number"
                          type="text"
                          required
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 pr-24 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center gap-1.5 pointer-events-none opacity-60">
                          <span className="rounded border border-ink/15 bg-paper px-1.5 py-0.5 text-[10px] font-bold">VISA</span>
                          <span className="rounded border border-ink/15 bg-paper px-1.5 py-0.5 text-[10px] font-bold">MC</span>
                        </div>
                      </div>
                    </div>

                    {/* Expiration Date & CVV */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="checkout-card-expiry" className="block text-xs font-semibold text-ink mb-1.5">
                          Expiration Date
                        </label>
                        <input
                          id="checkout-card-expiry"
                          type="text"
                          required
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="checkout-card-cvv" className="text-xs font-semibold text-ink">
                            Security Code (CVV)
                          </label>
                          <span title="Code de 3 ou 4 chiffres au dos de votre carte" className="cursor-help text-ink/40 hover:text-ink text-xs">
                            ⓘ
                          </span>
                        </div>
                        <input
                          id="checkout-card-cvv"
                          type="text"
                          required
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="123"
                          maxLength={4}
                          className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Name on Card */}
                    <div>
                      <label htmlFor="checkout-card-name" className="block text-xs font-semibold text-ink mb-1.5">
                        Name on Card
                      </label>
                      <input
                        id="checkout-card-name"
                        type="text"
                        required
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder-ink/40 focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="mt-6 rounded-xl bg-paper p-5 text-center text-xs text-ink/75">
                    Vous serez redirigé vers l&apos;interface sécurisée de PayPal pour valider votre transaction.
                  </div>
                )}

                {paymentMethod === "applepay" && (
                  <div className="mt-6 rounded-xl bg-paper p-5 text-center text-xs text-ink/75">
                    Authentifiez-vous avec Touch ID ou Face ID pour confirmer le paiement avec Apple Pay.
                  </div>
                )}
              </div>

              {/* ── SECTION 4 : Review & Place Order ── */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                    4
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink">
                    Review & Place Order
                  </h2>
                </div>

                <div className="space-y-5">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-ink/80 leading-relaxed select-none">
                    <input
                      type="checkbox"
                      required
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-ink/20 text-primary focus:ring-primary"
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/politique-de-confidentialite" className="font-semibold text-primary underline hover:text-primary-hover">
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/politique-de-confidentialite" className="font-semibold text-primary underline hover:text-primary-hover">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  {/* Bouton Place Order */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-between rounded-xl bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-primary-hover shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span>Place Order</span>
                    <span className="rounded-lg bg-white/20 px-3 py-1 text-sm font-semibold tracking-wide backdrop-blur-xs">
                      {total.toFixed(2).replace(".", ",")} €
                    </span>
                  </button>
                </div>
              </div>
            </form>

            {/* ══════════════════════════════════════════════════════════ */}
            {/*  COLONNE DROITE (Sticky pendant le scroll sur desktop)     */}
            {/* ══════════════════════════════════════════════════════════ */}
            <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-[170px] self-start">
              <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-7 shadow-sm">
                
                {/* En-tête Order Summary */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-5">
                  <h3 className="text-lg font-bold text-ink">Order Summary</h3>
                  <span className="text-xs font-semibold text-ink/60">
                    {initialItems.length} Items
                  </span>
                </div>

                {/* Liste des articles */}
                <div className="divide-y divide-ink/5 py-2">
                  {initialItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3.5 py-4">
                      {/* Image miniature avec cadre arrondi */}
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-ink/10 bg-[#FAF9F5]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Informations article */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-ink truncate">
                          {item.name}
                        </h4>
                        <p className="mt-0.5 text-xs text-ink/60">
                          Color: {item.color} | Size: {item.size}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-ink">
                          {item.qty} × {item.price.toFixed(2).replace(".", ",")} €
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Code promo */}
                <form onSubmit={handleApplyPromo} className="border-t border-ink/10 pt-4 pb-2">
                  <div className="flex items-center rounded-xl border border-ink/15 bg-white p-1 focus-within:border-primary transition-colors">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo Code"
                      className="w-full bg-transparent px-3 py-2 text-xs text-ink placeholder-ink/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 rounded-lg bg-paper px-4 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`mt-2 text-xs font-medium ${promoApplied ? "text-emerald-600" : "text-rose-500"}`}>
                      {promoMessage}
                    </p>
                  )}
                </form>

                {/* Totaux & détails */}
                <div className="border-t border-ink/10 pt-4 space-y-2.5 text-sm text-ink/75">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-ink">
                      {subtotal.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex items-center justify-between text-emerald-600">
                      <span>Discount</span>
                      <span className="font-semibold">
                        -{discount.toFixed(2).replace(".", ",")} €
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold text-ink">
                      {shipping.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>Tax</span>
                    <span className="font-semibold text-ink">
                      {tax.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>

                  {/* Total final */}
                  <div className="flex items-baseline justify-between border-t border-dashed border-ink/15 pt-3.5 mt-2">
                    <span className="text-base font-extrabold text-ink">Total</span>
                    <span className="text-xl font-extrabold text-ink">
                      {total.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                </div>

                {/* Badge de sécurité & Moyens de paiement */}
                <div className="mt-6 border-t border-ink/5 pt-5 text-center">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>Secure Checkout</span>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2.5 opacity-60 text-ink">
                    {/* Carte */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    {/* Carte alternative */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="1" y="4" width="22" height="16" rx="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    {/* PayPal */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.79.79 0 0 1 .78-.66h6.772c2.22 0 3.92.518 5.05 1.54 1.13 1.022 1.55 2.502 1.25 4.4-.35 2.22-1.39 3.93-3.09 5.08-1.7 1.15-3.87 1.72-6.45 1.72h-1.52a.79.79 0 0 0-.78.66l-.88 4.877z" />
                    </svg>
                    {/* Apple Pay */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.79 1.06-1.88.94-2.98-.93.04-2.02.63-2.67 1.4-.57.66-1.06 1.77-.93 2.85 1.03.08 2.06-.52 2.66-1.27z" />
                    </svg>
                  </div>
                </div>

              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
