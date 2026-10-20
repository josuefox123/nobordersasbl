"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-[84px] lg:mt-[188px] min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] bg-[#FAF9F5] text-[#141413] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#E5E3DC]">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
        {/* ── COLONNE GAUCHE : Formulaire & Identité No Borders ── */}
        <div className="w-full max-w-[440px] flex flex-col items-center">
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

            {/* Séparateur OU */}
            <div className="py-0.5 text-center">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9B9994]">
                OU
              </span>
            </div>

            {/* Formulaire Connexion */}
            <form id="form-login" onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-[#E5E3DC] bg-white px-4 py-3 text-sm text-[#141413] placeholder-[#9B9994] focus:outline-none focus:border-primary transition-colors"
              />

              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-[#E5E3DC] bg-white px-4 py-3 pr-11 text-sm text-[#141413] placeholder-[#9B9994] focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  id="btn-toggle-login-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9B9994] hover:text-[#141413] transition-colors"
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Lien mot de passe oublié */}
              <div className="flex items-center justify-end -mt-0.5">
                <Link
                  href="/forgot-password"
                  id="link-forgot-password"
                  className="text-xs font-medium text-[#55555C] hover:text-primary transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                id="btn-submit-login"
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover shadow-xs mt-0.5"
              >
                Se connecter
              </button>
            </form>

            {/* Texte légal */}
            <p className="text-[11px] text-[#787672] text-center leading-normal mt-1">
              En continuant, vous acceptez la{" "}
              <Link
                href="/politique-de-confidentialite"
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
        <div className="hidden lg:flex w-full max-w-[430px] lg:max-w-[460px] items-center justify-center">
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
