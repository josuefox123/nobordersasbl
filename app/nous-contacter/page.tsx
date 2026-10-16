"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { MailIcon, PhoneIcon, PinIcon, CheckIcon, ArrowRight, SparkIcon } from "@/components/ui/Icons";
import { PageHeader } from "@/components/ui/PageHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "benevolat",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(
    `Contact No Borders: [${formData.subject}] ${formData.name}`
  )}&body=${encodeURIComponent(
    `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="mt-[84px] lg:mt-[188px]">

      {/* ── Breadcrumb avec image ── */}
      <PageHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Nous contacter" },
        ]}
        title="Nous contacter"
        description="Une question sur nos activités, une envie de rejoindre l'équipe bénévole ou un projet commun à proposer ? Nous sommes à votre écoute."
      />

      {/* ── Contenu principal ── */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container">
          <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-12">

            {/* ── Colonne gauche : infos de contact ── */}
            <div className="flex flex-col gap-4 lg:col-span-4">
              <div className="rounded-3xl border border-ink/10 bg-white p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0875B9] shrink-0 shadow-sm">
                    <PinIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-sm">Adresse du siège</h3>
                    <p className="mt-1 text-sm text-ink/75">
                      {site.address.street}<br />
                      {site.address.zip} {site.address.city}, {site.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0875B9] shrink-0 shadow-sm">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-sm">Téléphone</h3>
                    <a href={site.phoneHref} className="mt-1 block text-sm font-semibold text-ink hover:text-[#0875B9]">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[#0875B9] shrink-0 shadow-sm">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-sm">Courrier électronique</h3>
                    <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-semibold text-ink hover:text-[#0875B9] break-all">
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-[#0875B9]/15 bg-primary-soft">
                {/* En-tête de la card */}
                <div className="flex items-center gap-3 border-b border-[#0875B9]/10 bg-[#0875B9]/[0.07] px-6 py-4">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#0875B9] text-white shadow-sm">
                    <SparkIcon size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0875B9]">
                    Identifiants officiels
                  </span>
                </div>

                {/* Lignes d'informations */}
                <dl className="divide-y divide-[#0875B9]/10 px-6">
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                      N° d&apos;entreprise
                    </dt>
                    <dd className="text-sm font-bold text-ink tabular-nums">{site.company}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink/55">
                      IBAN
                    </dt>
                    <dd className="text-sm font-bold tracking-wide text-ink tabular-nums">
                      {site.iban}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* ── Colonne droite : formulaire ── */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl bg-white p-8 shadow-sm border border-ink/8 sm:p-10">

                <h2 className="text-2xl font-extrabold uppercase tracking-wide text-ink">
                  Nous contacter
                </h2>
                <p className="mt-1 text-sm text-ink/55">
                  Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-emerald-900">
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white">
                        <CheckIcon size={18} />
                      </div>
                      <h3 className="font-bold">Message prêt à l&apos;envoi !</h3>
                    </div>
                    <p className="mt-3 text-sm text-emerald-800">
                      Merci <strong>{formData.name}</strong>. Cliquez ci-dessous pour envoyer :
                    </p>
                    <div className="mt-4 flex gap-3">
                      <a href={mailtoLink} className="btn btn-primary btn-sm gap-2">
                        Ouvrir ma boîte mail <ArrowRight size={15} />
                      </a>
                      <button type="button" onClick={() => setSubmitted(false)} className="btn btn-ghost btn-sm">
                        Modifier
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-7 space-y-4">

                    {/* Nom + Email sur la même ligne */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Votre nom"
                          className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-[#0875B9] focus:outline-none focus:ring-2 focus:ring-[#0875B9]/20"
                        />
                      </div>
                      <div>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Votre adresse e-mail"
                          className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-[#0875B9] focus:outline-none focus:ring-2 focus:ring-[#0875B9]/20"
                        />
                      </div>
                    </div>

                    {/* Sujet */}
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink focus:border-[#0875B9] focus:outline-none focus:ring-2 focus:ring-[#0875B9]/20"
                    >
                      <option value="benevolat">Rejoindre l&apos;équipe / Bénévolat</option>
                      <option value="partenariat">Proposer un partenariat</option>
                      <option value="don">Informations sur les dons</option>
                      <option value="evenement">Proposer un événement</option>
                      <option value="autre">Autre demande</option>
                    </select>

                    {/* Message */}
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      className="w-full rounded-lg border border-ink/15 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 focus:border-[#0875B9] focus:outline-none focus:ring-2 focus:ring-[#0875B9]/20"
                    />

                    {/* Bouton submit pleine largeur */}
                    <button
                      type="submit"
                      className="w-full rounded-lg py-4 text-sm font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0875B9]"
                      style={{ backgroundColor: "#0875B9" }}
                    >
                      Envoyer le message
                    </button>

                  </form>
                )}
              </div>
            </div>

          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
