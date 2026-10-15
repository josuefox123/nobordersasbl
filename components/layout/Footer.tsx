import Image from "next/image";
import Link from "next/link";
import { navigation, site } from "@/lib/content";
import { ArrowUpRight, HeartIcon, MailIcon, PhoneIcon, PinIcon, socialIcons } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="grain relative border-t border-white/10 bg-ink text-white">

      {/* Bande supérieure — "Faisons de la diversité une richesse" — commentée
      <div className="border-b border-white/10 py-16 sm:py-20">
        <div className="container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <span className="eyebrow eyebrow-light">Rejoignez le mouvement</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Faisons de la diversité <span className="text-flame">une richesse</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/70">
              Que vous souhaitiez participer à une sortie, proposer un projet ou rejoindre
              l'équipe bénévole, votre énergie est la bienvenue.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/nous-contacter?sujet=benevolat" className="btn btn-primary btn-lg">
              Devenir bénévole
            </Link>
            <Link href="/nous-soutenir" className="btn btn-ghost-light btn-lg gap-2">
              <HeartIcon size={20} className="text-flame" /> Faire un don
            </Link>
          </div>
        </div>
      </div>
      */}

      {/* Grille de liens et informations */}
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1-2 : identité */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo/logoFichier 2logo_blanc.png"
                alt="No Borders ASBL"
                width={192}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (nouvel onglet)`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#0875B9] hover:bg-[#0875B9] hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3 : Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/75 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/nous-soutenir" className="text-white/75 transition-colors hover:text-white">
                  Nous soutenir
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 : Initiatives */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Initiatives</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.eshop.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-white"
                >
                  Boutique Bamboo <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <Link href="/notre-projet#inclusion" className="text-white/75 transition-colors hover:text-white">
                  Inclusion sociale
                </Link>
              </li>
              <li>
                <Link href="/notre-projet#interculturalite" className="text-white/75 transition-colors hover:text-white">
                  Interculturalité
                </Link>
              </li>
              <li>
                <Link href="/notre-projet#mobilite" className="text-white/75 transition-colors hover:text-white">
                  Mobilité douce
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5 : Contact officiel */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Contact officiel</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <PinIcon size={16} className="mt-1 text-[#0875B9] shrink-0" />
                <span>
                  {site.address.street},<br />
                  {site.address.zip} {site.address.city}, {site.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={16} className="text-[#0875B9] shrink-0" />
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon size={16} className="text-[#0875B9] shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white break-all">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre légale inférieure */}
      <div className="border-t border-white/10 py-6 text-xs text-white/50">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © {new Date().getFullYear()} No Borders ASBL · Entreprise n° {site.company} · IBAN : {site.iban}
          </p>
          <div className="flex gap-4">
            <span>Mons, Belgique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
