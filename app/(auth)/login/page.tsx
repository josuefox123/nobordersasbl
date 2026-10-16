"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141413] flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8 selection:bg-[#E5E3DC]">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
        {/* ── COLONNE GAUCHE : Formulaire & Identité No Borders ── */}
        <div className="w-full max-w-[440px] flex flex-col items-center">
          {/* Logo officiel No Borders */}
          <Link
            href="/"
            className="mb-5 inline-block transition-transform hover:scale-[1.02]"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/images/logo/logoFichier 2logo_2.png"
              alt="No Borders ASBL"
              width={200}
              height={60}
              className="h-11 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Titre & sous-titre contextualisés */}
          <h1 className="font-serif text-[2.35rem] sm:text-[2.75rem] text-[#141413] tracking-[-0.03em] leading-tight text-center font-normal whitespace-nowrap">
            Brisez les frontières
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-[#55555C] text-center font-normal">
            Connectez-vous pour accéder à votre espace membre
          </p>

          {/* Carte blanche flottante */}
          <div className="mt-7 w-full max-w-[390px] bg-white rounded-[28px] border border-[#ECE9E2] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-6 sm:p-7 flex flex-col gap-3">
            {/* Bouton Google */}
            <button
              id="btn-login-google"
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-[#E5E3DC] bg-white hover:bg-[#F9F8F5] text-sm font-medium text-[#141413] transition-colors shadow-2xs"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.88c2.28-2.09 3.66-5.18 3.66-9.14z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.26 21.36 7.36 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.28c-.25-.72-.38-1.49-.38-2.28s.13-1.56.38-2.28V6.59H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.41l4.03-3.13z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.59l4.03 3.13c.95-2.83 3.6-4.97 6.72-4.97z"
                />
              </svg>
              Continuer avec Google
            </button>

            {/* Bouton Apple */}
            <button
              id="btn-login-apple"
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-[#E5E3DC] bg-white hover:bg-[#F9F8F5] text-sm font-medium text-[#141413] transition-colors shadow-2xs"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.79 1.06-1.88.94-2.98-.93.04-2.02.63-2.67 1.4-.57.66-1.06 1.77-.93 2.85 1.03.08 2.06-.52 2.66-1.27z" />
              </svg>
              Continuer avec Apple
            </button>

            {/* Séparateur OU */}
            <div className="py-0.5 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9B9994]">
                OU
              </span>
            </div>

            {/* Formulaire Email */}
            <form id="form-login" onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-[#E5E3DC] bg-white px-4 py-3 text-sm text-[#141413] placeholder-[#9B9994] focus:outline-none focus:border-[#0875B9] transition-colors"
              />

              <button
                id="btn-submit-login"
                type="submit"
                className="w-full rounded-xl bg-[#141413] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-black mt-0.5"
              >
                Continuer avec l&apos;e-mail
              </button>
            </form>

            {/* Texte légal */}
            <p className="text-[11px] text-[#787672] text-center leading-normal mt-1">
              En continuant, vous acceptez la{" "}
              <Link
                href="/notre-projet"
                className="underline hover:text-[#141413] transition-colors"
              >
                politique de confidentialité
              </Link>{" "}
              de No Borders ASBL.
            </p>
          </div>

          {/* Action membre & Navigation */}
          <div className="mt-6 flex flex-col items-center gap-3.5">
            <Link
              href="/register"
              id="link-register"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E3DC] bg-white/80 px-4 py-2.5 text-xs font-semibold text-[#141413] transition-colors hover:bg-white hover:border-[#D0CDC6] shadow-2xs"
            >
              <span>✦</span> Pas encore de compte ? Créer un compte
            </Link>

            <div className="flex items-center gap-3 text-xs text-[#8C8A84]">
              <Link href="/" className="hover:text-[#141413] transition-colors">
                ← Accueil
              </Link>
              <span>•</span>
              <Link href="/boutique" className="hover:text-[#141413] transition-colors">
                Boutique solidaire
              </Link>
              <span>•</span>
              <Link href="/nos-activites" className="hover:text-[#141413] transition-colors">
                Nos activités
              </Link>
            </div>
          </div>
        </div>

        {/* ── COLONNE DROITE : Photo No Borders ASBL (Vélos en bambou) ── */}
        <div className="w-full max-w-[430px] lg:max-w-[460px] flex items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[32px] sm:rounded-[36px] shadow-sm border border-black/5 bg-[#EFECE6]">
            <Image
              src="/images/auth/login-noborders.jpg"
              alt="No Borders ASBL — Vélos artisanaux en bambou"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
