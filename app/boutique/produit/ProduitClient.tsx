"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { productCategories, productColors, products } from "@/lib/content";
import { CheckIcon, HeartIcon, ShoppingBagIcon } from "@/components/ui/Icons";

/* ─────────────────────────────────────────────────────────── */
/*  Données de démonstration (mode test : un seul produit)     */
/* ─────────────────────────────────────────────────────────── */

const product = products.find((p) => p.id === 3) ?? products[0];
const category = productCategories.find((c) => c.slug === product.category);
const colors = productColors.filter((c) =>
  (product.colors as readonly string[]).includes(c.slug)
);
const gallery = [
  product.image,
  "/images/vente-velo.jpg",
  "/images/lancement-myboo.jpg",
  "/images/tour-anvers.jpg",
  "/images/bxl-tour.jpg",
];
const stock = 8;

const description =
  "Fabriqué à la main au Ghana à partir de bambou naturel, ce VTT allie robustesse, légèreté et absorption naturelle des vibrations. Chaque cadre est unique et soutient des projets éducatifs et solidaires.";

const highlights: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Bambou durable",
    text: "Un matériau renouvelable, solide et naturellement amortissant.",
    icon: <path d="M12 22V2M8 6h8M8 12h8M8 18h8" />,
  },
  {
    title: "Légèreté",
    text: "Seulement 11,8 kg pour une conduite agile sur tous les terrains.",
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />,
  },
  {
    title: "Fabrication solidaire",
    text: "Chaque achat soutient l'emploi local et la scolarisation au Ghana.",
    icon: <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />,
  },
  {
    title: "Confort de conduite",
    text: "Géométrie étudiée et selle ergonomique pour les longues sorties.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </>
    ),
  },
];

const included = [
  "Vélo pré-assemblé à 90 %",
  "Kit d'outils de montage",
  "Paire de pédales plates",
  "Manuel d'utilisation en français",
  "Certificat d'authenticité My Boo",
  "Garantie 5 ans sur le cadre",
];

const specs: { title: string; rows: [string, string][] }[] = [
  {
    title: "Cadre & Dimensions",
    rows: [
      ["Matériau du cadre", "Bambou naturel traité"],
      ["Taille", "M (54 cm)"],
      ["Poids", "11,8 kg"],
      ["Fourche", "Suspension 100 mm"],
      ["Hauteur de selle", "72 – 84 cm"],
    ],
  },
  {
    title: "Transmission & Freinage",
    rows: [
      ["Transmission", "Shimano Deore 1×11"],
      ["Vitesses", "11"],
      ["Freins", "Disques hydrauliques"],
      ["Plateau", "32 dents"],
      ["Chaîne", "KMC X11"],
    ],
  },
  {
    title: "Roues & Pneus",
    rows: [
      ["Diamètre", "29 pouces"],
      ["Jantes", "Aluminium double paroi"],
      ["Pneus", "29 × 2,25\""],
      ["Valves", "Presta"],
    ],
  },
  {
    title: "Équipements",
    rows: [
      ["Selle", "Ergonomique en liège"],
      ["Guidon", "Aluminium 760 mm"],
      ["Béquille", "En option"],
      ["Origine", "Fait main au Ghana"],
    ],
  },
];

const reviews = [
  { name: "Aminata K.", rating: 5, date: "12 septembre 2026", text: "Un vélo magnifique et incroyablement confortable. On sent la qualité du travail artisanal." },
  { name: "Julien D.", rating: 5, date: "28 août 2026", text: "Léger, robuste et très agréable sur les chemins. En plus, c'est un achat qui a du sens." },
  { name: "Fatou S.", rating: 4, date: "3 août 2026", text: "Très satisfaite ! Le montage est simple grâce au kit fourni. Livraison rapide." },
];

const fcfa = (n: number) => `${n.toLocaleString("fr-FR")} FCFA`;

/* ─────────────────────────────────────────────────────────── */

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <span className="inline-flex text-sun" aria-label={`Note : ${value} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < Math.round(value) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

function Svg({ children, size = 18 }: { children: ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function ProduitClient() {
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState<string>(colors[0]?.slug ?? "");
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [tab, setTab] = useState<"description" | "specs" | "avis">("description");
  const [notice, setNotice] = useState<string | null>(null);

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  const colorLabel = colors.find((c) => c.slug === color)?.label;

  const notify = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 3000);
  };

  const tabs = [
    { id: "description" as const, label: "Description" },
    { id: "specs" as const, label: "Spécifications" },
    { id: "avis" as const, label: `Avis (${product.reviews})` },
  ];

  const similarProducts = useMemo(() => {
    const sameCat = products.filter(
      (p) => p.id !== product.id && p.category === product.category
    );
    if (sameCat.length >= 4) return sameCat.slice(0, 4);
    const others = products.filter(
      (p) => p.id !== product.id && p.category !== product.category
    );
    return [...sameCat, ...others].slice(0, 4);
  }, []);

  return (
    <div className="mt-[84px] lg:mt-[188px] pb-24 bg-white min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] flex flex-col">
      {/* Notification */}
      {notice && (
        <div role="status" className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white shadow-2xl">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-flame-soft text-flame-deep">
            <CheckIcon size={14} />
          </span>
          {notice}
        </div>
      )}

      {/* ── Fil d'Ariane (Design identique à la page Actualités) ── */}
      <section className="border-b border-ink/5 bg-paper py-8 sm:py-10">
        <div className="container">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/50">
              <li>
                <Link href="/" className="transition-colors hover:text-flame">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/boutique" className="transition-colors hover:text-flame">
                  Boutique
                </Link>
              </li>
              {category && (
                <>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/boutique" className="transition-colors hover:text-flame">
                      {category.label}
                    </Link>
                  </li>
                </>
              )}
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="line-clamp-1 font-semibold text-ink">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* ── Contenu principal : Galerie, Détails & Onglets sur fond blanc jusqu'au footer ── */}
      <section className="flex-1 bg-white py-12 sm:py-16">
        <div className="container">
          {/* ═══════════ Galerie + Infos ═══════════ */}
          <div className="grid gap-8 lg:grid-cols-12">
          {/* Galerie */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-ink/10 bg-white sm:aspect-[4/3.6]">
              <Image
                key={gallery[activeImage]}
                src={gallery[activeImage]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {discount > 0 && (
                <span className="absolute left-4 top-4 rounded-md bg-flame-soft px-2.5 py-1 text-xs font-bold text-flame-deep shadow-sm">
                  -{discount}%
                </span>
              )}
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`Voir l'image ${i + 1}`}
                  aria-pressed={i === activeImage}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-colors sm:h-20 sm:w-20 ${
                    i === activeImage ? "border-flame-deep" : "border-ink/10 hover:border-ink/30"
                  }`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          </div>

          {/* Infos produit */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-flame-deep/20 bg-flame-soft px-3 py-1 text-[11px] font-semibold text-flame-deep">
                  {category?.label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-leaf">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> En stock
                </span>
              </div>

              <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                {product.name}
              </h1>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink/50">
                <Stars value={product.rating} />
                <span className="font-bold text-ink">{product.rating.toLocaleString("fr-FR")}</span>
                <span aria-hidden="true">·</span>
                <button type="button" onClick={() => setTab("avis")} className="font-semibold text-flame-deep hover:underline">
                  {product.reviews} avis
                </button>
                <span aria-hidden="true">·</span>
                <span>{stock} en stock</span>
              </div>

              {/* Prix */}
              <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-4">
                <span className="text-2xl font-extrabold text-ink">{fcfa(product.price)}</span>
                {product.oldPrice && (
                  <>
                    <span className="text-sm text-ink/40 line-through">{fcfa(product.oldPrice)}</span>
                    <span className="rounded-full bg-flame-soft px-2.5 py-0.5 text-[11px] font-bold text-flame-deep">
                      Économisez {fcfa(product.oldPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-ink/70">{description}</p>

              {/* Couleurs */}
              <div className="mt-6">
                <p className="text-sm font-bold text-ink">
                  Couleur <span className="font-normal text-ink/50">— {colorLabel}</span>
                </p>
                <div className="mt-3 flex gap-3">
                  {colors.map((c) => (
                    <button
                      key={c.slug}
                      type="button"
                      onClick={() => setColor(c.slug)}
                      aria-label={c.label}
                      aria-pressed={color === c.slug}
                      className={`grid h-9 w-9 place-items-center rounded-full border transition-transform hover:scale-110 ${
                        color === c.slug ? "ring-2 ring-flame-deep ring-offset-2" : "border-black/15"
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {color === c.slug && (
                        <CheckIcon size={14} className={c.slug === "blanc" ? "text-ink" : "text-white"} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantité + panier + favoris */}
              <div className="mt-6 flex items-stretch gap-3">
                <div className="flex items-center rounded-xl border border-ink/15">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Diminuer la quantité" className="h-11 w-10 text-lg text-ink/60 hover:text-ink">−</button>
                  <span className="w-8 text-center text-sm font-bold text-ink" aria-live="polite">{qty}</span>
                  <button type="button" onClick={() => setQty((q) => Math.min(stock, q + 1))} aria-label="Augmenter la quantité" className="h-11 w-10 text-lg text-ink/60 hover:text-ink">+</button>
                </div>
                <button
                  type="button"
                  id="produit-ajouter-panier"
                  onClick={() => notify(`${qty} × ${product.name} ajouté au panier !`)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-flame-soft px-4 text-sm font-bold text-flame-deep transition-colors hover:bg-flame-deep hover:text-white"
                >
                  <ShoppingBagIcon size={17} /> Ajouter au panier
                </button>
                <button
                  type="button"
                  onClick={() => setLiked((v) => !v)}
                  aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
                  aria-pressed={liked}
                  className={`grid w-11 place-items-center rounded-xl border transition-colors ${
                    liked ? "border-flame-deep bg-flame-soft text-flame-deep" : "border-ink/15 text-ink/60 hover:border-ink hover:text-ink"
                  }`}
                >
                  <HeartIcon size={18} fill={liked ? "currentColor" : "none"} />
                </button>
              </div>

              <button
                type="button"
                id="produit-acheter"
                onClick={() => notify("Redirection vers le paiement (démo)")}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-flame-deep/30 py-3 text-sm font-semibold text-ink transition-colors hover:bg-flame-soft hover:text-flame-deep"
              >
                <Svg size={16}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></Svg>
                Acheter maintenant
              </button>

              {/* Garanties */}
              <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-xl border border-ink/10 text-xs text-ink/60">
                {[
                  { label: "Livraison offerte dès 50 000 FCFA", icon: <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /> },
                  { label: "Retours sous 30 jours", icon: <path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" /> },
                  { label: "Garantie 5 ans (cadre)", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /> },
                  { label: "Assistance 7j/7", icon: <path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1v-6h3v4ZM3 19a2 2 0 0 0 2 2h1v-6H3v4Z" /> },
                ].map((g, i) => (
                  <div key={g.label} className={`flex items-center gap-2 p-3 ${i % 2 === 0 ? "border-r border-ink/10" : ""} ${i < 2 ? "border-b border-ink/10" : ""}`}>
                    <span className="shrink-0 text-flame-deep"><Svg size={15}>{g.icon}</Svg></span>
                    {g.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ Onglets ═══════════ */}
        <section className="mt-12 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm sm:mt-16" aria-label="Informations détaillées">
          <div role="tablist" className="flex overflow-x-auto border-b border-ink/10 bg-paper/60">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`onglet-${t.id}`}
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 border-b-2 px-5 py-4 text-sm font-semibold transition-colors sm:px-7 ${
                  tab === t.id
                    ? "border-flame-deep bg-white text-flame-deep"
                    : "border-transparent text-ink/50 hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="p-5 sm:p-8">
            {/* ── Description ── */}
            {tab === "description" && (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-bold text-ink">À propos de ce produit</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {description} Pensé pour les sentiers comme pour la ville, il offre une
                    expérience de conduite unique tout en réduisant l&apos;empreinte écologique de vos déplacements.
                  </p>

                  <h3 className="mt-8 text-base font-bold text-ink">Points forts</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {highlights.map((h) => (
                      <div key={h.title} className="flex gap-3 rounded-xl border border-ink/10 p-4 transition-colors hover:border-flame-deep/30">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-flame-soft text-flame-deep">
                          <Svg>{h.icon}</Svg>
                        </span>
                        <div>
                          <p className="text-sm font-bold text-ink">{h.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-ink/60">{h.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="h-fit rounded-xl border border-ink/10 bg-paper p-5">
                  <h3 className="flex items-center gap-2 text-base font-bold text-ink">
                    <span className="text-flame-deep">
                      <Svg><path d="M21 8 12 3 3 8v8l9 5 9-5V8ZM3 8l9 5 9-5M12 13v8" /></Svg>
                    </span>
                    Contenu du colis
                  </h3>
                  <ul className="mt-4 divide-y divide-ink/10">
                    {included.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 py-2.5 text-sm text-ink/70">
                        <CheckIcon size={15} className="shrink-0 text-flame-deep" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            )}

            {/* ── Spécifications ── */}
            {tab === "specs" && (
              <div className="grid gap-8 md:grid-cols-2">
                {specs.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-ink">
                      <span className="h-4 w-1 rounded-full bg-flame-deep" />
                      {group.title}
                    </h3>
                    <table className="w-full border border-ink/10 text-sm">
                      <tbody>
                        {group.rows.map(([label, value]) => (
                          <tr key={label} className="border-b border-ink/10 last:border-0">
                            <th scope="row" className="w-1/2 px-4 py-2.5 text-left text-xs font-semibold text-ink">{label}</th>
                            <td className="px-4 py-2.5 text-xs text-ink/60">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}

            {/* ── Avis ── */}
            {tab === "avis" && (
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="h-fit rounded-xl border border-ink/10 bg-paper p-6 text-center">
                  <p className="text-5xl font-extrabold text-ink">{product.rating.toLocaleString("fr-FR")}</p>
                  <div className="mt-2"><Stars value={product.rating} size={18} /></div>
                  <p className="mt-2 text-sm text-ink/60">Basé sur {product.reviews} avis</p>
                </div>
                <ul className="space-y-4 lg:col-span-2">
                  {reviews.map((r) => (
                    <li key={r.name} className="rounded-xl border border-ink/10 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="grid h-9 w-9 place-items-center rounded-full bg-flame-soft text-sm font-bold text-flame-deep">
                            {r.name.charAt(0)}
                          </span>
                          <div>
                            <p className="text-sm font-bold text-ink">{r.name}</p>
                            <p className="text-xs text-ink/40">{r.date}</p>
                          </div>
                        </div>
                        <Stars value={r.rating} />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">{r.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════ Produits similaires ═══════════ */}
        <section className="mt-16 sm:mt-24 border-t border-ink/10 pt-12 sm:pt-16" aria-labelledby="similar-products-heading">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#CF4318]">
                Découvrez aussi
              </p>
              <h2 id="similar-products-heading" className="mt-1 text-2xl font-bold font-heading text-ink sm:text-3xl">
                Produits similaires
              </h2>
              <p className="mt-1.5 text-sm text-ink/60">
                D&apos;autres articles et équipements qui pourraient vous intéresser.
              </p>
            </div>
            <Link
              href="/boutique"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CF4318] hover:text-[#B03815] transition-colors"
            >
              <span>Voir toute la boutique</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {similarProducts.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lg"
              >
                {/* Image */}
                <Link
                  href="/boutique/produit"
                  aria-label={`Voir ${p.name}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-ink/5"
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {p.isNew && (
                    <span className="absolute left-3 top-3 rounded-md bg-[#CF4318] px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      Nouveauté
                    </span>
                  )}
                  {p.oldPrice && !p.isNew && (
                    <span className="absolute left-3 top-3 rounded-md bg-[#CF4318] px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      -{Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}%
                    </span>
                  )}
                </Link>

                {/* Contenu carte */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
                    {p.category.replace("-", " ")}
                  </p>

                  <h3 className="mt-1 text-base font-bold leading-snug text-ink group-hover:text-[#CF4318] transition-colors">
                    <Link href="/boutique/produit">{p.name}</Link>
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/50">
                    <span className="text-amber-400">★★★★★</span>
                    <span>({p.rating.toFixed(1)})</span>
                  </div>

                  <div className="mt-4 flex items-center gap-2.5">
                    <span className="text-lg font-extrabold text-ink">
                      {fcfa(p.price)}
                    </span>
                    {p.oldPrice && (
                      <span className="text-xs text-ink/40 line-through">
                        {fcfa(p.oldPrice)}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-5">
                    <button
                      type="button"
                      onClick={() => notify(`« ${p.name} » ajouté au panier !`)}
                      className="w-full rounded-xl bg-[#CF4318] py-2.5 px-4 text-xs font-bold text-white transition-colors hover:bg-[#B03815] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CF4318]"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  </div>
);
}
