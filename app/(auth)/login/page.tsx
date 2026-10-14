"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {/* Logo */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/images/logo/logoFichier 2logo_2.png"
          alt="No Borders ASBL"
          width={192}
          height={64}
          className="mb-4 object-contain"
        />
        <h1 className="text-2xl font-bold text-[#0B0B0C] tracking-tight">Connexion</h1>
        <p className="text-sm text-[#55555C] mt-1">Connectez-vous pour accéder à votre compte</p>
      </div>

      {/* Boutons sociaux */}
      <div className="flex flex-col gap-3 mb-5">
        <button
          id="btn-login-google"
          type="button"
          className="flex items-center justify-center gap-3 w-full border border-[#E0DDD8] rounded-lg py-3 px-4 text-sm font-medium text-[#0B0B0C] bg-white hover:bg-[#F4F3F0] transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.332 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
            <path d="M6.306 14.691l6.571 4.819C14.655 15.108 19.0 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
            <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.311 0-9.823-3.438-11.388-8.165l-6.495 5.004C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
            <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
          </svg>
          Se connecter avec Google
        </button>
      </div>

      {/* Séparateur */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex-1 h-px bg-[#E0DDD8]" />
        <span className="text-xs text-[#55555C] font-medium">Ou</span>
        <div className="flex-1 h-px bg-[#E0DDD8]" />
      </div>

      {/* Formulaire */}
      <form id="form-login" className="flex flex-col gap-4" noValidate>
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="login-email" className="text-xs font-semibold text-[#0B0B0C] flex items-center gap-1">
            Entrez votre adresse mail <span className="text-[#E2501F]">*</span>
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="votre@email.com"
            autoComplete="email"
            className="w-full border border-[#E0DDD8] rounded-lg px-4 py-3 text-sm text-[#0B0B0C] placeholder-[#A8A5A0] focus:outline-none focus:border-[#1B3F7B] transition-colors bg-white"
          />
        </div>

        {/* Mot de passe */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="login-password" className="text-xs font-semibold text-[#0B0B0C] flex items-center gap-1">
            Entrez votre mot de passe <span className="text-[#E2501F]">*</span>
          </label>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Votre mot de passe"
              autoComplete="current-password"
              className="w-full border border-[#E0DDD8] rounded-lg px-4 py-3 pr-11 text-sm text-[#0B0B0C] placeholder-[#A8A5A0] focus:outline-none focus:border-[#1B3F7B] transition-colors bg-white"
            />
            <button
              type="button"
              id="btn-toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A5A0] hover:text-[#55555C] transition-colors"
              aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mot de passe oublié */}
        <div className="flex justify-end -mt-1">
          <Link
            href="/forgot-password"
            id="link-forgot-password"
            className="text-xs text-[#0B0B0C] hover:text-[#0B0B0C] font-medium transition-colors underline underline-offset-2"
          >
            Mot de passe oublié
          </Link>
        </div>

        {/* CGU */}
        <p className="text-[11px] text-[#55555C] leading-relaxed text-center">
          En vous connectant, vous acceptez nos{" "}
          <Link href="#" className="text-[#1B3F7B] underline hover:text-[#E2501F] transition-colors">
            conditions générales
          </Link>{" "}
          et la{" "}
          <Link href="#" className="text-[#1B3F7B] underline hover:text-[#E2501F] transition-colors">
            politique de confidentialité
          </Link>
        </p>

        {/* Bouton submit */}
        <button
          id="btn-submit-login"
          type="submit"
          className="w-full bg-[#0875B9] text-white rounded-lg py-3.5 text-sm font-bold tracking-wide hover:bg-[#065a8f] transition-colors duration-200 mt-1"
        >
          Se connecter
        </button>
      </form>

      {/* Lien inscription */}
      <p className="text-center text-xs text-[#55555C] mt-6">
        Vous n'avez pas de compte ?{" "}
        <Link
          href="/register"
          id="link-register"
          className="text-[#0B0B0C] font-bold hover:text-[#E2501F] transition-colors underline underline-offset-2"
        >
          Créer un compte
        </Link>
      </p>
    </>
  );
}
