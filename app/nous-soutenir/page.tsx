import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";
import { ArrowUpRight, CopyIcon, HeartIcon, SparkIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Nous Soutenir",
  description:
    "Faites un don ou soutenez les actions d'inclusion sociale et sportive de No Borders ASBL en Belgique.",
};

export default function SoutienPage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="bg-paper py-16 sm:py-24 border-b border-ink/5">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Engagement Solidaire</span>
            <h1 className="mt-4 text-display-lg font-extrabold tracking-tight text-ink">
              Nous soutenir
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed">
              Toute contribution, financière, matérielle ou humaine, nous permet de poursuivre notre travail et de faire évoluer notre ASBL en organisant de nouvelles activités inclusives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Colonne Don bancaire direct */}
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-3xl border border-ink/10 bg-paper p-8 sm:p-12 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-flame text-white shadow-md">
                    <HeartIcon size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-flame-deep">
                      Virement bancaire direct
                    </span>
                    <h2 className="text-2xl font-bold text-ink">Faire un don financier</h2>
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base text-ink/75 leading-relaxed">
                  Votre don sert directement à financer le matériel pour les jeunes, l’organisation des tournois de football interculturels, les visites de musées et les sorties à vélo.
                </p>

                <div className="mt-8 space-y-4 rounded-2xl bg-white p-6 border border-ink/10">
                  <div>
                    <span className="text-xs uppercase font-bold text-ink/50 tracking-wider">
                      Bénéficiaire
                    </span>
                    <p className="font-bold text-ink text-base">No Borders ASBL Belgium</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold text-ink/50 tracking-wider">
                      Numéro de compte (IBAN)
                    </span>
                    <p className="font-mono font-bold text-flame-deep text-lg sm:text-xl select-all">
                      {site.iban}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold text-ink/50 tracking-wider">
                      Numéro d'entreprise
                    </span>
                    <p className="font-medium text-ink/80 text-sm">{site.company}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold text-ink/50 tracking-wider">
                      Communication suggérée
                    </span>
                    <p className="font-medium text-ink/80 text-sm">Don de soutien No Borders + votre nom</p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-ink/60">
                  Note : No Borders ASBL garantit une gestion transparente et rigoureuse de l’ensemble des dons reçus conformément à la législation belge sur les ASBL.
                </p>
              </div>
            </div>

            {/* Colonne E-shop & Bénévolat */}
            <div className="lg:col-span-5 space-y-8">
              {/* E-shop Bambou */}
              <div className="rounded-3xl border border-ink/10 bg-paper p-8 shadow-sm">
                <span className="badge badge-primary font-bold text-xs uppercase tracking-wider">
                  Boutique solidaire
                </span>
                <h3 className="mt-3 text-xl font-bold text-ink">Bamboo4OurPlanet.com</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  Découvrez nos articles et nos solutions de mobilité douce en bambou au profit d’initiatives écologiques et équitables.
                </p>
                <div className="mt-6">
                  <a
                    href={site.eshop.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm gap-2"
                  >
                    Visiter notre boutique en ligne <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Bénévolat */}
              <div className="rounded-3xl border border-ink/10 bg-ink text-white p-8 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-sun mb-4">
                  <SparkIcon size={20} />
                </div>
                <h3 className="text-xl font-bold">Donner de votre temps</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">
                  Vous préférez vous investir sur le terrain ? Nous recherchons des personnes motivées pour encadrer nos activités sportives et animer nos sorties.
                </p>
                <div className="mt-6">
                  <Link
                    href="/nous-contacter?sujet=benevolat"
                    className="btn btn-outline border-white/30 text-white hover:bg-white hover:text-ink btn-sm"
                  >
                    Rejoindre notre équipe bénévole
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
