import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mot de passe oublié",
  description: "Réinitialisez votre mot de passe No Borders ASBL.",
};

export default function ForgotPasswordPage() {
  return (
    <>
      {/* Lien retour */}
      <div className="mb-8">
        <Link
          href="/login"
          id="link-back-to-login"
          className="inline-flex items-center gap-2 text-sm text-[#55555C] hover:text-[#1B3F7B] transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour à la connexion
        </Link>
      </div>

      {/* Logo + titre */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3F7B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#0B0B0C] tracking-tight">Mot de passe oublié ?</h1>
        <p className="text-sm text-[#55555C] mt-2 text-center leading-relaxed max-w-xs">
          Saisissez votre adresse mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.
        </p>
      </div>

      {/* Formulaire */}
      <form id="form-forgot-password" className="flex flex-col gap-4" noValidate>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="forgot-email" className="text-xs font-semibold text-[#0B0B0C] flex items-center gap-1">
            Adresse mail <span className="text-[#E2501F]">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A8A5A0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <input
              id="forgot-email"
              type="email"
              placeholder="votre@email.com"
              autoComplete="email"
              className="w-full border border-[#E0DDD8] rounded-lg pl-10 pr-4 py-3 text-sm text-[#0B0B0C] placeholder-[#A8A5A0] focus:outline-none focus:border-[#1B3F7B] transition-colors bg-white"
            />
          </div>
        </div>

        {/* Bouton submit */}
        <button
          id="btn-submit-forgot-password"
          type="submit"
          className="w-full bg-[#0875B9] text-white rounded-lg py-3.5 text-sm font-bold tracking-wide hover:bg-[#065a8f] transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
          Envoyer le lien de réinitialisation
        </button>
      </form>

      {/* Infobull */}
      <div className="mt-6 bg-[#F0F4FF] border border-[#C7D6F5] rounded-xl p-4 flex gap-3">
        <div className="shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1B3F7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <p className="text-[11px] text-[#1B3F7B] leading-relaxed">
          Si un compte est associé à cette adresse mail, vous recevrez un email contenant les instructions pour réinitialiser votre mot de passe. Vérifiez également vos courriers indésirables.
        </p>
      </div>

      {/* Lien connexion */}
      <p className="text-center text-xs text-[#55555C] mt-8">
        Vous vous souvenez de votre mot de passe ?{" "}
        <Link
          href="/login"
          id="link-login-from-forgot"
          className="text-[#0B0B0C] font-bold hover:text-[#E2501F] transition-colors underline underline-offset-2"
        >
          Se connecter
        </Link>
      </p>
    </>
  );
}
