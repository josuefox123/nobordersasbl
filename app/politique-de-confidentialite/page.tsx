import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité | No Borders ASBL",
  description:
    "Découvrez comment No Borders ASBL protège et traite vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-28 sm:pt-36">
      {/* ── En-tête de page ── */}
      <section className="bg-paper py-16 sm:py-24 border-b border-ink/5">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Protection des données · RGPD</span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
              Politique de confidentialité
            </h1>
            <p className="mt-5 text-base sm:text-lg text-ink/75 leading-relaxed">
              Chez <strong className="text-ink">No Borders ASBL</strong>, la protection de votre vie privée et de vos données personnelles est au cœur de nos engagements associatifs. Cette politique vous informe en toute transparence sur la façon dont nous recueillons, utilisons et protégeons vos données.
            </p>
            <p className="mt-3 text-xs text-ink/50">
              Dernière mise à jour : 16 octobre 2026
            </p>
          </div>
        </div>
      </section>

      {/* ── Contenu légal détaillé ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-12 text-ink/80 text-sm sm:text-base leading-relaxed">
            {/* 1. Responsable du traitement */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                1. Responsable du traitement des données
              </h2>
              <p>
                Le responsable du traitement des données personnelles collectées sur ce site est :
              </p>
              <div className="mt-4 rounded-2xl bg-paper p-5 border border-ink/10 space-y-1.5 text-sm">
                <p><strong className="text-ink">No Borders ASBL</strong></p>
                <p>Numéro d&apos;entreprise (BCE) : <strong className="text-ink">{site.company}</strong></p>
                <p>Adresse du siège : <span className="text-ink">{site.address.street}, {site.address.zip} {site.address.city}, {site.address.country}</span></p>
                <p>Courriel officiel : <a href={`mailto:${site.email}`} className="text-[#0875B9] font-medium underline hover:text-[#065f9a]">{site.email}</a></p>
                <p>Téléphone : <a href={site.phoneHref} className="text-ink font-medium">{site.phone}</a></p>
              </div>
            </div>

            {/* 2. Données collectées */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                2. Quelles données collectons-nous ?
              </h2>
              <p>
                Dans le cadre de nos activités associatives, sportives, culturelles et de notre boutique solidaire, nous pouvons collecter les catégories de données suivantes :
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-ink">Données d&apos;identification :</strong> nom, prénom, adresse e-mail, numéro de téléphone.
                </li>
                <li>
                  <strong className="text-ink">Données relatives au compte membre :</strong> identifiants de connexion, historique des participations aux événements, statut de membre.
                </li>
                <li>
                  <strong className="text-ink">Données de livraison et facturation (boutique) :</strong> adresse postale, historique des commandes de vélos en bambou ou d&apos;équipements. Les paiements en ligne sont traités de façon sécurisée par des prestataires bancaires agréés (nous ne conservons jamais vos numéros complets de carte bancaire).
                </li>
                <li>
                  <strong className="text-ink">Données de dons et soutiens :</strong> montants versés, attestations fiscales éventuelles.
                </li>
                <li>
                  <strong className="text-ink">Données techniques :</strong> adresse IP, données de navigation anonymisées à des fins de bon fonctionnement du site.
                </li>
              </ul>
            </div>

            {/* 3. Finalités du traitement */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                3. Finalités et bases légales
              </h2>
              <p>Vos données sont collectées pour des objectifs précis et légitimes :</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-ink/10 p-4 bg-paper/60">
                  <h3 className="font-bold text-ink text-sm sm:text-base">Gestion des activités & événements</h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink/70">
                    Organisation des sorties vélo, matchs interculturels et ateliers d&apos;artisanat.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-[#0875B9]">Base : Consentement / Contrat</span>
                </div>
                <div className="rounded-xl border border-ink/10 p-4 bg-paper/60">
                  <h3 className="font-bold text-ink text-sm sm:text-base">Commandes & Boutique solidaire</h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink/70">
                    Traitement, fabrication, expédition des commandes et gestion du service après-vente.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-[#0875B9]">Base : Exécution du contrat</span>
                </div>
                <div className="rounded-xl border border-ink/10 p-4 bg-paper/60">
                  <h3 className="font-bold text-ink text-sm sm:text-base">Communications & Informations</h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink/70">
                    Envoi d&apos;actualités sur les projets de l&apos;ASBL (avec possibilité de désinscription en 1 clic).
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-[#0875B9]">Base : Consentement</span>
                </div>
                <div className="rounded-xl border border-ink/10 p-4 bg-paper/60">
                  <h3 className="font-bold text-ink text-sm sm:text-base">Obligations légales et comptables</h3>
                  <p className="mt-1 text-xs sm:text-sm text-ink/70">
                    Respect de la législation belge régissant les ASBL et la tenue de la comptabilité.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-[#0875B9]">Base : Obligation légale</span>
                </div>
              </div>
            </div>

            {/* 4. Durée de conservation */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                4. Durée de conservation des données
              </h2>
              <p>
                Nous conservons vos données uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-1.5">
                <li><strong className="text-ink">Comptes membres :</strong> actifs jusqu&apos;à votre demande de suppression ou après 3 ans d&apos;inactivité.</li>
                <li><strong className="text-ink">Commandes de la boutique :</strong> conservées conformément aux délais légaux de prescription comptable et fiscale en Belgique (7 ans).</li>
                <li><strong className="text-ink">Messages de contact :</strong> conservés le temps du traitement de votre demande puis archivés.</li>
              </ul>
            </div>

            {/* 5. Destinataires et sécurité */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                5. Destinataires et sécurité de vos données
              </h2>
              <p>
                <strong className="text-ink">No Borders ASBL ne vend, ne loue et ne cède aucune donnée personnelle à des tiers à des fins commerciales.</strong>
              </p>
              <p className="mt-3">
                Vos données sont accessibles uniquement aux membres habilités de l&apos;équipe et à nos sous-traitants techniques strictement nécessaires (hébergeur sécurisé, services d&apos;expédition pour la boutique). Tous sont soumis à des clauses strictes de confidentialité et de conformité au RGPD.
              </p>
            </div>

            {/* 6. Vos droits */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                6. Vos droits en vertu du RGPD
              </h2>
              <p>
                Conformément à la réglementation européenne (RGPD), vous disposez des droits suivants :
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-ink/10 p-3.5">
                  <strong className="text-ink block">Droit d&apos;accès</strong>
                  <span className="text-xs text-ink/70">Obtenir la confirmation et copie des données vous concernant.</span>
                </div>
                <div className="rounded-xl border border-ink/10 p-3.5">
                  <strong className="text-ink block">Droit de rectification</strong>
                  <span className="text-xs text-ink/70">Corriger des informations inexactes ou incomplètes.</span>
                </div>
                <div className="rounded-xl border border-ink/10 p-3.5">
                  <strong className="text-ink block">Droit à l&apos;effacement (« droit à l&apos;oubli »)</strong>
                  <span className="text-xs text-ink/70">Demander la suppression définitive de vos données.</span>
                </div>
                <div className="rounded-xl border border-ink/10 p-3.5">
                  <strong className="text-ink block">Droit à la portabilité & limitation</strong>
                  <span className="text-xs text-ink/70">Recevoir vos données dans un format standard ou en limiter l&apos;usage.</span>
                </div>
              </div>
              <p className="mt-4">
                Pour exercer l&apos;un de ces droits, contactez-nous directement par e-mail à :{" "}
                <a href={`mailto:${site.email}`} className="text-[#0875B9] font-bold underline hover:text-[#065f9a]">
                  {site.email}
                </a>. Nous vous répondrons dans un délai maximal d&apos;un mois.
              </p>
            </div>

            {/* 7. Réclamation auprès de l'autorité */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4 pb-2 border-b border-ink/10">
                7. Réclamation
              </h2>
              <p>
                Si vous estimez que le traitement de vos données ne respecte pas la législation en vigueur, vous avez le droit d&apos;introduire une réclamation auprès de l&apos;Autorité de protection des données (APD) en Belgique :
              </p>
              <p className="mt-2 text-xs sm:text-sm text-ink/70">
                Autorité de protection des données · Rue de la Presse 35, 1000 Bruxelles · Site web :{" "}
                <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className="text-[#0875B9] underline">
                  www.autoriteprotectiondonnees.be
                </a>
              </p>
            </div>

            {/* Boutons de navigation */}
            <div className="pt-8 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0875B9] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#065f9a]"
              >
                ← Retour à la connexion
              </Link>
              <Link
                href="/"
                className="text-sm font-medium text-ink/70 hover:text-ink underline transition-colors"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
