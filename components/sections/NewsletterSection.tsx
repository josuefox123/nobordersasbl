"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckIcon, MailIcon } from "@/components/ui/Icons";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim().includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28 text-white" aria-labelledby="newsletter-title">
      {/* Image de fond inspirée de la section newsletter de Oh! Les Lunettes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/airspace.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-flame mb-4">
              <MailIcon size={24} />
            </div>
            <h2 id="newsletter-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Ne manquez plus nos rendez-vous
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Inscrivez-vous à notre lettre d’information pour recevoir nos annonces de matchs, sorties culturelles et nouveaux projets associatifs.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon size={18} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm">Merci pour votre intérêt !</p>
                  <p className="text-xs text-white/70">
                    Votre adresse <span className="underline">{email}</span> a bien été notée pour nos prochaines publications.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center justify-center">
                <div className="relative flex-1 max-w-md">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Votre adresse e-mail
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre adresse e-mail"
                    className="input input-lg w-full rounded-xl bg-white/10 text-white placeholder-white/50 border-white/20 focus:border-flame focus:bg-white/20 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-xl whitespace-nowrap"
                >
                  S'abonner maintenant
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-white/50">
              Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
