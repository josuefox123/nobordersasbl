import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

const PRODUCTS = [
  {
    id: 1,
    category: "Vélos de ville",
    name: "Urban Glide Pro 7",
    reviews: 124,
    price: 899,
    oldPrice: 1099,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-de-ville",
  },
  {
    id: 2,
    category: "VTT",
    name: 'TrailBlazer X 29"',
    reviews: 87,
    price: 1490,
    oldPrice: 1790,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=vtt",
  },
  {
    id: 3,
    category: "Vélos cargo",
    name: "CargoPro Family 300",
    reviews: 56,
    price: 2290,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-cargo",
  },
  {
    id: 4,
    category: "Vélos gravel",
    name: "Gravel King GX 700",
    reviews: 98,
    price: 1199,
    oldPrice: 1399,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-gravel",
  },
  {
    id: 5,
    category: "Vélos trekking",
    name: "Explorer Trek 500",
    reviews: 73,
    price: 749,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-trekking",
  },
  {
    id: 6,
    category: "Vélos elliptiques",
    name: "ElliptiGO Arc 8",
    reviews: 41,
    price: 2999,
    oldPrice: 3299,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-elliptiques",
  },
  {
    id: 7,
    category: "Vélos tandem",
    name: "Duo Cruiser Tandem",
    reviews: 29,
    price: 1650,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=velos-tandem",
  },
  {
    id: 8,
    category: "Stand Up Bikes",
    name: "StandUp Rider S2",
    reviews: 19,
    price: 1350,
    oldPrice: 1550,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/boutique?categorie=stand-up-bikes",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-white py-24 sm:py-32" id="produits-phares">
      <div className="container">

        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Nos produits phares
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Une sélection de nos vélos les plus appréciés — qualité,
              confort et performance pour chaque type de cycliste.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lg">

                <Link
                  href={p.href}
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
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-ink/50">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-base font-bold leading-snug text-ink transition-colors group-hover:text-[#0875B9]">
                    <Link href={p.href}>{p.name}</Link>
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-ink/50">
                    <span className="text-amber-400">★★★★★</span>
                    <span>{p.reviews} avis</span>
                  </div>
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
                  <div className="mt-auto pt-5">
                    <Link
                      href={p.href}
                      className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#0875B9" }}
                    >
                      Ajouter au panier <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0875B9" }}
            >
              Voir tout le catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
