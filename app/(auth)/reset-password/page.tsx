"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/login");
  };

  return (
    <div className="mt-[84px] lg:mt-[188px] min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] bg-[#FAF9F5] text-[#141413] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#E5E3DC]">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
        {/* ── COLONNE GAUCHE : Formulaire & Identité No Borders ── */}
        <div className="w-full max-w-[440px] flex flex-col items-center">
          {/* Titre & sous-titre contextualisés */}
          <h1 className="font-serif text-[2.35rem] sm:text-[2.75rem] text-[#141413] tracking-[-0.03em] leading-tight text-center font-normal whitespace-nowrap">
            Nouveau mot de passe
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-[#55555C] text-center font-normal">
            Définissez votre nouveau mot de passe sécurisé
          </p>

          {/* Carte blanche flottante */}
          <div className="mt-7 w-full max-w-[390px] bg-white rounded-[28px] border border-[#ECE9E2] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-6 sm:p-7 flex flex-col gap-3">
            <form id="form-reset-password" onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Nouveau mot de passe */}
              <div className="relative">
                <input
                  id="reset-password-new"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Nouveau mot de passe"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-[#E5E3DC] bg-white px-4 py-3 pr-11 text-sm text-[#141413] placeholder-[#9B9994] focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  id="btn-toggle-new-password"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9B9994] hover:text-[#141413] transition-colors"
                  aria-label={showNewPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showNewPassword ? (
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

              {/* Confirmation mot de passe */}
              <div className="relative">
                <input
                  id="reset-password-confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmer le mot de passe"
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-[#E5E3DC] bg-white px-4 py-3 pr-11 text-sm text-[#141413] placeholder-[#9B9994] focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="button"
                  id="btn-toggle-confirm-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9B9994] hover:text-[#141413] transition-colors"
                  aria-label={showConfirmPassword ? "Masquer la confirmation" : "Afficher la confirmation"}
                >
                  {showConfirmPassword ? (
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

              <button
                id="btn-submit-reset-password"
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover shadow-xs mt-0.5"
              >
                Réinitialiser le mot de passe
              </button>
            </form>

            <p className="text-[11px] text-[#787672] text-center leading-normal mt-1">
              Privilégiez au moins 8 caractères pour une sécurité optimale.
            </p>
          </div>

          {/* Action membre & Navigation */}
          <div className="mt-6 flex flex-col items-center gap-3.5">
            <Link
              href="/login"
              id="link-login-from-reset"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E3DC] bg-white/80 px-4 py-2.5 text-xs font-semibold text-[#141413] transition-colors hover:bg-white hover:border-[#D0CDC6] shadow-2xs"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Retour à la connexion
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

        {/* ── COLONNE DROITE : Photo No Borders ASBL ── */}
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
