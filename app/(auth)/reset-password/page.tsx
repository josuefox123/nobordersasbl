"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      {/* Lien retour */}
      <div className="mb-8">
        <Link
          href="/login"
          id="link-back-to-login-reset"
          className="inline-flex items-center gap-2 text-sm text-[#55555C] hover:text-[#1B3F7B] transition-colors font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour à la connexion
        </Link>
      </div>

      {/* Icône + titre */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1B3F7B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#0B0B0C] tracking-tight">Nouveau mot de passe</h1>
        <p className="text-sm text-[#55555C] mt-2 text-center leading-relaxed max-w-xs">
          Votre nouveau mot de passe doit être différent des mots de passe précédemment utilisés.
        </p>
      </div>

      {/* Formulaire */}
      <form id="form-reset-password" className="flex flex-col gap-4" noValidate>
        {/* Nouveau mot de passe */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="reset-password-new" className="text-xs font-semibold text-[#0B0B0C] flex items-center gap-1">
            Nouveau mot de passe <span className="text-[#E2501F]">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A8A5A0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <input
              id="reset-password-new"
              type={showNewPassword ? "text" : "password"}
              placeholder="Entrez votre nouveau mot de passe"
              autoComplete="new-password"
              className="w-full border border-[#E0DDD8] rounded-lg pl-10 pr-11 py-3 text-sm text-[#0B0B0C] placeholder-[#A8A5A0] focus:outline-none focus:border-[#1B3F7B] transition-colors bg-white"
            />
            <button
              type="button"
              id="btn-toggle-new-password"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A5A0] hover:text-[#55555C] transition-colors"
              aria-label={showNewPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              {showNewPassword ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Indicateur de force */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1.5">
            {["bg-[#E0DDD8]", "bg-[#E0DDD8]", "bg-[#E0DDD8]", "bg-[#E0DDD8]"].map((color, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full ${color} transition-colors duration-300`} />
            ))}
          </div>
          <p className="text-[11px] text-[#A8A5A0]">Force du mot de passe : saisissez pour évaluer</p>
        </div>

        {/* Critères */}
        <div className="flex flex-col gap-1.5 bg-[#F4F3F0] rounded-xl p-4">
          <p className="text-xs font-semibold text-[#0B0B0C] mb-1">Critères requis :</p>
          {[
            "Au moins 8 caractères",
            "Au moins 1 chiffre",
            "Au moins 1 majuscule",
            "Au moins 1 caractère spécial",
          ].map((crit) => (
            <div key={crit} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-[#E0DDD8] flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E0DDD8]" />
              </div>
              <span className="text-[11px] text-[#55555C]">{crit}</span>
            </div>
          ))}
        </div>

        {/* Confirmation mot de passe */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="reset-password-confirm" className="text-xs font-semibold text-[#0B0B0C] flex items-center gap-1">
            Confirmer le mot de passe <span className="text-[#E2501F]">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A8A5A0]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <input
              id="reset-password-confirm"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmez votre nouveau mot de passe"
              autoComplete="new-password"
              className="w-full border border-[#E0DDD8] rounded-lg pl-10 pr-11 py-3 text-sm text-[#0B0B0C] placeholder-[#A8A5A0] focus:outline-none focus:border-[#1B3F7B] transition-colors bg-white"
            />
            <button
              type="button"
              id="btn-toggle-confirm-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A5A0] hover:text-[#55555C] transition-colors"
              aria-label={showConfirmPassword ? "Masquer la confirmation" : "Afficher la confirmation"}
            >
              {showConfirmPassword ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Bouton submit */}
        <button
          id="btn-submit-reset-password"
          type="submit"
          className="w-full bg-[#0875B9] text-white rounded-lg py-3.5 text-sm font-bold tracking-wide hover:bg-[#065a8f] transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Réinitialiser le mot de passe
        </button>
      </form>

      {/* Lien connexion */}
      <p className="text-center text-xs text-[#55555C] mt-8">
        Mot de passe déjà réinitialisé ?{" "}
        <Link
          href="/login"
          id="link-login-from-reset"
          className="text-[#0B0B0C] font-bold hover:text-[#E2501F] transition-colors underline underline-offset-2"
        >
          Se connecter
        </Link>
      </p>
    </>
  );
}
