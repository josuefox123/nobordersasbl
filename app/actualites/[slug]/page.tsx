import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { gallery, news } from "@/lib/content";

type Props = { params: { slug: string } };

/* ── Données fictives (fake data) pour le contenu détaillé ── */
const fakeIntro =
  "Organisée par No Borders ASBL, cette activité a réuni des participants de tous horizons autour d’un même objectif : se rencontrer, partager et faire de notre diversité culturelle une richesse.";

const fakeBody = [
  "Dès les premières minutes, l’ambiance était au rendez-vous. Bénévoles, familles et jeunes se sont retrouvés dans un climat chaleureux et convivial, loin des barrières culturelles et linguistiques.",
  "Tout au long de la journée, les échanges se sont multipliés : découvertes, discussions et moments de partage ont permis à chacun de mieux connaître l’autre et de tisser de nouveaux liens.",
  "Cette initiative s’inscrit pleinement dans la mission de No Borders : briser les frontières mentales et favoriser l’inclusion de tous dans la société locale, à Mons et partout en Wallonie.",
];

const fakeFaq = [
  {
    q: "Qui peut participer aux activités de No Borders ?",
    a: "Nos activités sont ouvertes à toutes et à tous, quels que soient l’âge, l’origine ou le niveau. Il suffit de nous contacter pour s’inscrire.",
  },
  {
    q: "Les activités sont-elles payantes ?",
    a: "La plupart de nos activités sont gratuites ou proposées à un prix symbolique afin de rester accessibles au plus grand nombre.",
  },
  {
    q: "Comment être informé des prochains événements ?",
    a: "Suivez nos actualités sur ce site et sur nos réseaux sociaux (Facebook, Instagram, YouTube), ou contactez-nous directement.",
  },
  {
    q: "Comment devenir bénévole ?",
    a: "Rendez-vous sur la page « Nous contacter » et choisissez le sujet « Bénévolat ». Notre équipe vous recontactera rapidement.",
  },
];

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = news.find((n) => n.slug === params.slug);
  if (!item) return { title: "Actualité introuvable" };
  return {
    title: `${item.title} — Actualités`,
    description: item.excerpt,
    openGraph: { title: item.title, description: item.excerpt, images: [item.image] },
  };
}

export default function ActualiteDetailPage({ params }: Props) {
  const index = news.findIndex((n) => n.slug === params.slug);
  if (index === -1) notFound();

  const item = news[index];
  const pool = gallery.filter((g) => g.src !== item.image);
  const secondImage = pool[index % pool.length].src;
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 4);

  return (
    <div className="mt-[84px] lg:mt-[188px]">
      {/* ── En-tête avec PageHeader & breadcrumb standard ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Actualités", href: "/actualites" },
          { label: item.title },
        ]}
        title={item.title}
        description={item.excerpt}
        image={item.image}
      />

      {/* ── Contenu principal : métadonnées & introduction ── */}
      <section className="bg-paper py-12 sm:py-16" aria-labelledby="actualite-intro-heading">
        <div className="container">
          <Reveal>
            <div className="grid items-center gap-8 rounded-2xl sm:rounded-3xl border border-ink/10 bg-white p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 shadow-sm">
              {/* Texte */}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                  <span className="text-primary">{item.category}</span>
                  <span className="h-3 w-px bg-ink/20" aria-hidden="true" />
                  <time dateTime={item.isoDate} className="inline-flex items-center gap-1.5 text-ink/50">
                    <CalendarIcon size={14} className="text-primary" /> {item.date}
                  </time>
                </div>
                <h2
                  id="actualite-intro-heading"
                  className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl"
                >
                  À propos de cette initiative
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">{item.excerpt}</p>
                <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">{fakeIntro}</p>

                <div className="mt-8">
                  <Link
                    href="/nous-contacter"
                    id="actualite-nous-contacter"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    Nous contacter <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-ink/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Image gauche / texte droite : Déroulement ── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="actualite-deroulement">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-40} y={0}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl bg-ink/5 shadow-xl ring-1 ring-black/5">
              <Image
                src={secondImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="actualite-deroulement"
              className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
            >
              Retour sur l’événement
            </h2>
            {[fakeIntro, ...fakeBody].map((p, idx) => (
              <p key={idx} className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">
                {p}
              </p>
            ))}
            <div className="mt-8">
              <Link
                href="/nous-contacter"
                id="actualite-retour-contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Participer à nos activités <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Articles similaires : À lire aussi ── */}
      <section className="bg-paper py-16 sm:py-24" aria-labelledby="actualite-similaires">
        <div className="container">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Continuer la lecture
              </p>
              <h2
                id="actualite-similaires"
                className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
              >
                À lire aussi
              </h2>
            </div>
          </Reveal>

          <Stagger className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-ink/10 bg-white shadow-sm transition-all duration-200 hover:border-primary hover:shadow-md">
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-1 flex-col items-center p-5 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-bold leading-snug text-ink transition-colors group-hover:text-primary">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-ink/70">
                      {r.excerpt}
                    </p>

                    {/* Bouton centré */}
                    <div className="mt-auto flex w-full justify-center pt-5 sm:pt-6">
                      <Link
                        href={`/actualites/${r.slug}`}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        En savoir plus <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="actualite-faq">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Questions fréquentes
              </p>
              <h2
                id="actualite-faq"
                className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl md:text-4xl"
              >
                Foire aux questions
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {fakeFaq.map((f, i) => (
              <details key={f.q} className="group py-2" id={`faq-${i + 1}`}>
                <summary className="flex cursor-pointer list-none items-center gap-3 sm:gap-4 py-4 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg [&::-webkit-details-marker]:hidden">
                  <span
                    className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-xs sm:text-sm font-bold text-ink transition-colors group-hover:border-primary group-hover:text-primary group-open:border-primary group-open:bg-primary/10 group-open:text-primary"
                    aria-hidden="true"
                  >
                    ?
                  </span>
                  <span className="flex-1 font-semibold text-sm sm:text-base text-ink transition-colors group-hover:text-primary group-open:text-primary">
                    {f.q}
                  </span>
                  <span
                    className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-open:rotate-45 group-open:border-primary group-open:bg-primary group-open:text-white"
                    aria-hidden="true"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-5 pl-11 sm:pl-13 pr-2 sm:pr-4 text-sm sm:text-base leading-relaxed text-ink/70">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="mt-12 sm:mt-14 flex justify-center">
            <Link
              href="/actualites"
              id="actualite-cta"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Voir toutes les actualités <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
