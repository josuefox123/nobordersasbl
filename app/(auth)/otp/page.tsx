"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OtpPage() {
  const router = useRouter();
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/reset-password");
  };

  const handleDigitChange = (index: number, val: string) => {
    const clean = val.slice(-1);
    const newDigits = [...digits];
    newDigits[index] = clean;
    setDigits(newDigits);
    if (clean && index < 5) {
      const nextInput = document.getElementById(`otp-digit-${index + 2}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="mt-[84px] lg:mt-[188px] min-h-[calc(100vh-84px)] lg:min-h-[calc(100vh-188px)] bg-[#FAF9F5] text-[#141413] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#E5E3DC]">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-20">
        {/* ── COLONNE GAUCHE : Formulaire & Identité No Borders ── */}
        <div className="w-full max-w-[440px] flex flex-col items-center">
          {/* Titre & sous-titre contextualisés */}
          <h1 className="font-serif text-[2.35rem] sm:text-[2.75rem] text-[#141413] tracking-[-0.03em] leading-tight text-center font-normal whitespace-nowrap">
            Vérification OTP
          </h1>
          <p className="mt-2 text-sm sm:text-[15px] text-[#55555C] text-center font-normal">
            Saisissez le code à 6 chiffres reçu par e-mail
          </p>

          {/* Carte blanche flottante */}
          <div className="mt-7 w-full max-w-[390px] bg-white rounded-[28px] border border-[#ECE9E2] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-6 sm:p-7 flex flex-col gap-4">
            <form id="form-otp" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex gap-2 sm:gap-2.5 justify-center">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input
                    key={i}
                    id={`otp-digit-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digits[i - 1]}
                    onChange={(e) => handleDigitChange(i - 1, e.target.value)}
                    placeholder="–"
                    className="w-10 h-12 sm:w-11 sm:h-12 text-center border border-[#E5E3DC] rounded-xl text-lg sm:text-xl font-bold text-[#141413] placeholder-[#D0CDC6] focus:outline-none focus:border-primary transition-colors bg-white caret-transparent"
                    aria-label={`Chiffre ${i} du code OTP`}
                  />
                ))}
              </div>

              {/* Renvoyer le code */}
              <div className="text-xs text-[#55555C] text-center flex items-center justify-center gap-1">
                <span>Code non reçu ?</span>
                <button
                  type="button"
                  id="btn-resend-otp"
                  className="font-semibold text-primary hover:underline"
                >
                  Renvoyer (09:47)
                </button>
              </div>

              <button
                id="btn-submit-otp"
                type="submit"
                className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover shadow-xs mt-1"
              >
                Vérifier le code
              </button>
            </form>

            <p className="text-[11px] text-[#787672] text-center leading-normal">
              Le code expire dans 10 minutes. Vérifiez vos courriers indésirables si besoin.
            </p>
          </div>

          {/* Action membre & Navigation */}
          <div className="mt-6 flex flex-col items-center gap-3.5">
            <Link
              href="/forgot-password"
              id="link-back-to-forgot-otp"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E3DC] bg-white/80 px-4 py-2.5 text-xs font-semibold text-[#141413] transition-colors hover:bg-white hover:border-[#D0CDC6] shadow-2xs"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Modifier l&apos;e-mail
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
