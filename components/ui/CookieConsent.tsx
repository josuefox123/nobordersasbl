"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const COOKIE_STORAGE_KEY = "noborders_cookie_consent";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Préférences de personnalisation
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!saved) {
      // Petite temporisation pour une apparition douce après le chargement initial
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      COOKIE_STORAGE_KEY,
      JSON.stringify({ necessary: true, analytics: true, marketing: true, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem(
      COOKIE_STORAGE_KEY,
      JSON.stringify({ necessary: true, analytics: false, marketing: false, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      COOKIE_STORAGE_KEY,
      JSON.stringify({ necessary: true, analytics, marketing, date: new Date().toISOString() })
    );
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 z-[95] sm:max-w-[430px]"
        >
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 sm:p-6 shadow-[0_16px_48px_rgba(0,0,0,0.14)]">
        
        {/* En-tête : Icône cookie + Titre */}
        <div className="flex items-start gap-3.5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            {/* Icône Cookie SVG moderne */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12v.01" />
              <path d="M11 17v.01" />
              <path d="M7 14v.01" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-base font-bold text-ink">
              Gestion des cookies
            </h3>
            <p className="mt-1 text-xs text-ink/70 leading-relaxed">
              Nous utilisons des cookies essentiels au fonctionnement de notre boutique solidaire et des outils d&apos;analyse pour améliorer votre expérience de navigation.
            </p>
          </div>
        </div>

        {/* Vue détaillée : Préférences personnalisées */}
        {showPreferences ? (
          <div className="mt-4 space-y-3 border-t border-ink/5 pt-4 text-xs">
            {/* Strictement nécessaires */}
            <div className="flex items-center justify-between rounded-xl bg-paper/60 p-3">
              <div>
                <span className="font-bold text-ink">Cookies essentiels</span>
                <p className="text-[11px] text-ink/60">Panier d&apos;achats, session et sécurité du site</p>
              </div>
              <span className="rounded-md bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">
                Requis
              </span>
            </div>

            {/* Mesure d'audience */}
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-ink/10 p-3 hover:bg-paper/40 transition-colors">
              <div>
                <span className="font-bold text-ink">Mesure d&apos;audience</span>
                <p className="text-[11px] text-ink/60">Statistiques anonymes d&apos;utilisation</p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
            </label>

            {/* Personnalisation & Partenariats */}
            <label className="flex cursor-pointer items-center justify-between rounded-xl border border-ink/10 p-3 hover:bg-paper/40 transition-colors">
              <div>
                <span className="font-bold text-ink">Personnalisation</span>
                <p className="text-[11px] text-ink/60">Mémorisation de vos préférences de navigation</p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
            </label>

            {/* Actions de la vue personnalisée */}
            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="w-1/2 rounded-xl border border-ink/15 bg-white py-2.5 text-xs font-semibold text-ink hover:bg-paper transition-colors"
              >
                Retour
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="w-1/2 rounded-xl bg-primary py-2.5 text-xs font-bold text-white shadow-xs hover:bg-primary-hover transition-colors"
              >
                Enregistrer
              </button>
            </div>
          </div>
        ) : (
          /* Vue par défaut : Choix direct */
          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-[11px] text-ink/60">
              <Link
                href="/politique-de-confidentialite"
                className="text-primary underline hover:text-primary-hover transition-colors font-medium"
              >
                Politique de confidentialité
              </Link>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="text-ink/75 hover:text-ink underline transition-colors"
              >
                Personnaliser
              </button>
            </div>

            {/* Boutons Accepter / Refuser */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                id="btn-cookie-decline"
                onClick={handleDeclineAll}
                className="w-full rounded-xl border border-ink/15 bg-white py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                Refuser
              </button>

              <button
                type="button"
                id="btn-cookie-accept"
                onClick={handleAcceptAll}
                className="w-full rounded-xl bg-primary py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Accepter
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>
  );
}
