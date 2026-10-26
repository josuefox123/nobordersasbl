import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export function AboutPreview() {
  return (
    <section className="bg-paper py-14 sm:py-20" aria-labelledby="about-preview-heading">
      <div className="container">

        {/* ── En-tête de section ── */}
        <Reveal>
          <div className="mb-14 text-center sm:mb-20">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.35em] text-flame">
              No Borders
            </p>
            <h2
              id="about-preview-heading"
              className="mt-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
            >
              Raison d&apos;être
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Le vélo comme trait d&apos;union : un puissant levier d&apos;émancipation, d&apos;inclusion sociale et de transition écologique au service du vivre-ensemble.
            </p>
          </div>
        </Reveal>

        {/* ── Deux colonnes : texte gauche / image droite ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Colonne gauche : texte + bouton */}
          <Reveal delay={0.1}>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-primary">
                Pourquoi le vélo ?
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
                Un vecteur de liberté, d&apos;émancipation et de solidarité
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
                Chez No Borders ASBL, le vélo est bien plus qu&apos;un simple moyen de déplacement : c&apos;est un véritable briseur de frontières mentales. Accessible, universel et populaire, il permet de décloisonner les communautés et d&apos;encourager l&apos;autonomie — en motivant tout particulièrement les femmes et les personnes issues de la diversité à s&apos;approprier l&apos;espace public et les mobilités quotidiennes.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
                Face à l&apos;urgence climatique et à la congestion urbaine, nous agissons pour une mobilité douce bénéfique pour l&apos;esprit, le corps et le portefeuille. À travers nos sorties collectives, nos ateliers d&apos;apprentissage et nos vélos éco-conçus en bambou issus du commerce équitable, chaque coup de pédale construit un projet de société plus juste, solidaire et durable.
              </p>

              <Link
                href="/notre-projet"
                className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Découvrir notre projet
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          {/* Colonne droite : image */}
          <Reveal delay={0.18} x={40}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/bxl-tour.jpg"
                  alt="Sortie à vélo solidaire avec No Borders ASBL — mobilité douce et inclusion"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-primary px-5 py-3.5 text-white shadow-xl">
                <span className="text-2xl font-black leading-none">100%</span>
                <div className="h-8 w-px bg-white/30" />
                <span className="text-xs font-semibold uppercase leading-tight tracking-wide">
                  Mobilité<br />solidaire
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
