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
              Une ASBL née de la passion du football et de la conviction profonde
              que la diversité culturelle est une richesse à partager.
            </p>
          </div>
        </Reveal>

        {/* ── Deux colonnes : texte gauche / image droite ── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Colonne gauche : texte + bouton */}
          <Reveal delay={0.1}>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-primary">
                Notre histoire
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
                Du terrain de foot aux projets solidaires
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
                En 2007, à Mons, un groupe de copains unis par leur passion du
                football décide de dépasser les frontières culturelles. Aujourd'hui,
                No Borders ASBL rassemble des dizaines de membres issus de plus de
                huit nationalités, autour du sport, de la culture et de la solidarité.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
                Notre conviction : la diversité est une richesse. Chaque rencontre,
                chaque activité, chaque projet partagé construit un vivre-ensemble
                plus juste et plus humain.
              </p>

              <Link
                href="/"
                className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Découvrir notre histoire
                <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>

          {/* Colonne droite : image */}
          <Reveal delay={0.18} x={40}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink shadow-2xl ring-1 ring-black/5">
                <Image
                  src="/images/mains.jpg"
                  alt="Membres de No Borders ASBL — solidarité et rencontre interculturelle"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-flame px-5 py-3.5 text-white shadow-xl">
                <span className="text-2xl font-black leading-none">2007</span>
                <div className="h-8 w-px bg-white/30" />
                <span className="text-xs font-semibold uppercase leading-tight tracking-wide">
                  Fondée<br />à Mons
                </span>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
