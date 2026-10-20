"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/otp");
  };

  return (
    <div className="mt-[84px] lg:mt-[188px] min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] bg-[#FAF9F5] text-[#141413] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#E5E3DC]">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
        {/* ── COLONNE GAUCHE : Formulaire & Identité No Borders ── */}
        <div className="w-full max-w-[440px] flex flex-col items-center">
          {/* Titre & sous-titre contextualisés */}
          <h1 className="font-serif text-[2.35rem] sm:text-[2.75rem] text-[#141413] tracking-[-0.03em] leading-tight text-center font-normal whitespace-nowrap">
            Mot de passe oublié
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-[#55555C] text-center font-normal">
            Recevez un code de vérification pour réinitialiser l&apos;accès
          </p>

          {/* Carte blanche flottante */}
          <div className="mt-7 w-full max-w-[390px] bg-white rounded-[28px] border border-[#ECE9E2] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-6 sm:p-7 flex flex-col gap-3">
            <form id="form-forgot-password" onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                id="forgot-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-[#E5E3DC] bg-white px-4 py-3 text-sm text-[#141413] placeholder-[#9B9994] focus:outline-none focus:border-primary transition-colors"
              />

              <button
                id="btn-submit-forgot-password"
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover shadow-xs mt-0.5"
              >
                Envoyer le code
              </button>
            </form>

            {/* Texte informatif */}
            <p className="text-[11px] text-[#787672] text-center leading-normal mt-1">
              Un code de vérification à 6 chiffres vous sera envoyé à cette adresse mail pour sécuriser la réinitialisation.
            </p>
          </div>

          {/* Action membre & Navigation */}
          <div className="mt-6 flex flex-col items-center gap-3.5">
            <Link
              href="/login"
              id="link-back-to-login"
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
