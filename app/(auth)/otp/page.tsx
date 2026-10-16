import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vérification OTP",
  description: "Confirmez votre identité avec le code reçu par email.",
};

export default function OtpPage() {
  return (
    <>
      {/* Lien retour */}
      <div className="mb-8">
        <Link
          href="/login"
          id="link-back-to-login-otp"
          className="inline-flex items-center gap-2 text-sm text-[#55555C] hover:text-[#1B3F7B] transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour à la connexion
        </Link>
      </div>

      {/* Icône email animée */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-20 h-20 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1B3F7B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {/* Badge vert */}
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1F6F5C] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#0B0B0C] tracking-tight">Vérification du code</h1>
        <p className="text-sm text-[#55555C] mt-2 text-center leading-relaxed max-w-xs">
          Nous avons envoyé un code de vérification à 6 chiffres à votre adresse mail. Vérifiez votre boîte de réception.
        </p>
        <div className="mt-2 bg-[#F4F3F0] rounded-lg px-4 py-2 inline-flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#55555C" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span className="text-xs font-semibold text-[#0B0B0C]">votre@email.com</span>
        </div>
      </div>

      {/* Formulaire OTP */}
      <form id="form-otp" className="flex flex-col gap-6" noValidate>
        {/* Champs OTP */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-[#0B0B0C] text-center">
            Entrez le code à 6 chiffres
          </label>
          <div className="flex gap-3 justify-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <input
                key={i}
                id={`otp-digit-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                placeholder="–"
                className="w-12 h-14 text-center border border-[#E0DDD8] rounded-xl text-xl font-bold text-[#0B0B0C] placeholder-[#E0DDD8] focus:outline-none focus:border-[#1B3F7B] focus:ring-2 focus:ring-[#1B3F7B]/10 transition-all bg-white caret-transparent"
                aria-label={`Chiffre ${i} du code OTP`}
              />
            ))}
          </div>
        </div>

        {/* Timer */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-[#55555C]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Le code expire dans <span className="font-bold text-[#1B3F7B]">09:47</span></span>
          </div>

          {/* Renvoyer le code */}
          <div className="text-xs text-[#55555C]">
            Vous n'avez pas reçu le code ?{" "}
            <button
              type="button"
              id="btn-resend-otp"
              className="text-[#1B3F7B] font-bold hover:text-[#E2501F] transition-colors underline underline-offset-2"
            >
              Renvoyer le code
            </button>
          </div>
        </div>

        {/* Bouton submit */}
        <button
          id="btn-submit-otp"
          type="submit"
          className="w-full bg-[#0875B9] text-white rounded-lg py-3.5 text-sm font-bold tracking-wide hover:bg-[#065a8f] transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Vérifier le code
        </button>
      </form>

      {/* Aide */}
      <div className="mt-6 bg-[#FFF8F5] border border-[#F5D5C7] rounded-xl p-4 flex gap-3">
        <div className="shrink-0 mt-0.5">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E2501F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <p className="text-[11px] text-[#C84A1A] leading-relaxed">
          Si vous ne trouvez pas l'email, vérifiez votre dossier spam ou indésirables. Le code est valable 10 minutes.
        </p>
      </div>

      {/* Lien connexion */}
      <p className="text-center text-xs text-[#55555C] mt-8">
        Vous avez déjà un compte vérifié ?{" "}
        <Link
          href="/login"
          id="link-login-from-otp"
          className="text-[#0B0B0C] font-bold hover:text-[#E2501F] transition-colors underline underline-offset-2"
        >
          Se connecter
        </Link>
      </p>
    </>
  );
}
