"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "@/components/ui/Icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Retour en haut de page"
      className={`fixed bottom-8 right-6 z-[200] flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#0875B9" }}
    >
      {/* Flèche vers le haut via rotation */}
      <ArrowRight size={20} className="-rotate-90" />
    </button>
  );
}
