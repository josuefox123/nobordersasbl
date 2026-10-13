"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { MailIcon, PhoneIcon, PinIcon, CheckIcon, ArrowRight } from "@/components/ui/Icons";

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
    <div className="pt-28 sm:pt-36">
      <section className="bg-paper py-16 sm:py-24 border-b border-ink/5">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-lg font-extrabold tracking-tight text-ink">
              Nous contacter
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed">
              Une question sur nos activités, une envie de rejoindre l’équipe bénévole ou un projet commun à proposer ? Nous sommes à votre écoute.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Colonne Coordonnées */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-ink">Coordonnées officielles</h2>
                <p className="mt-2 text-sm text-ink/70">
                  No Borders ASBL est basée à Mons et opère sur toute la région wallonne.
                </p>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-paper p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-flame shrink-0 shadow-sm">
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
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-flame shrink-0 shadow-sm">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-sm">Téléphone</h3>
                    <a href={site.phoneHref} className="mt-1 block text-sm font-semibold text-ink hover:text-flame">
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-flame shrink-0 shadow-sm">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-sm">Courrier électronique</h3>
                    <a href={`mailto:${site.email}`} className="mt-1 block text-sm font-semibold text-ink hover:text-flame break-all">
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-flame/20 bg-flame-soft p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-flame-deep">
                  Identifiants officiels
                </span>
                <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                  Numéro d’entreprise : <strong className="text-ink">{site.company}</strong><br />
                  Compte bancaire (IBAN) : <strong className="text-ink">{site.iban}</strong>
                </p>
              </div>
            </div>

            {/* Colonne Formulaire */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-ink/10 bg-paper p-8 sm:p-12 shadow-sm">
                <h2 className="text-2xl font-bold text-ink">Envoyez-nous un message</h2>
                <p className="mt-2 text-sm text-ink/70">
                  Remplissez ce formulaire pour nous décrire votre demande.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-emerald-900">
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-600 text-white">
                        <CheckIcon size={18} />
                      </div>
                      <h3 className="font-bold text-base">Message prêt à l'envoi !</h3>
                    </div>
                    <p className="mt-3 text-sm text-emerald-800 leading-relaxed">
                      Merci <strong>{formData.name}</strong>. Cliquez ci-dessous pour transmettre directement votre message via votre messagerie à notre équipe :
                    </p>
                    <div className="mt-5 flex gap-4">
                      <a
                        href={mailtoLink}
                        className="btn btn-primary btn-sm gap-2"
                      >
                        Ouvrir ma boîte mail <ArrowRight size={16} />
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn btn-ghost btn-sm"
                      >
                        Modifier le message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="form-control">
                        <label htmlFor="name" className="label text-xs font-bold uppercase tracking-wider text-ink/70">
                          Nom et prénom *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Marie Dupont"
                          className="input rounded-xl bg-white"
                        />
                      </div>

                      <div className="form-control">
                        <label htmlFor="email" className="label text-xs font-bold uppercase tracking-wider text-ink/70">
                          Adresse e-mail *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Ex: marie@exemple.be"
                          className="input rounded-xl bg-white"
                        />
                      </div>
                    </div>

                    <div className="form-control">
                      <label htmlFor="subject" className="label text-xs font-bold uppercase tracking-wider text-ink/70">
                        Objet de votre message *
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="select rounded-xl bg-white"
                      >
                        <option value="benevolat">Rejoindre l'équipe / Bénévolat</option>
                        <option value="partenariat">Proposer un partenariat ou sponsoring</option>
                        <option value="don">Informations sur les dons et soutien</option>
                        <option value="evenement">Proposer un match ou une sortie culturelle</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label htmlFor="message" className="label text-xs font-bold uppercase tracking-wider text-ink/70">
                        Votre message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Expliquez-nous votre projet ou votre demande..."
                        className="textarea rounded-xl bg-white"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-full gap-2">
                      Valider mon message <ArrowRight size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
