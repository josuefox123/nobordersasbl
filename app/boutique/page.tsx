import type { Metadata } from "next";
import { Suspense } from "react";
import { BoutiqueClient } from "@/app/boutique/BoutiqueClient";

export const metadata: Metadata = {
  title: "Boutique — Vélos en bambou, vélos adaptés & accessoires",
  description:
    "Découvrez notre sélection de vélos en bambou artisanaux, vélos adaptés Hase Bikes, ElliptiGO et accessoires pour une mobilité douce, durable et solidaire à Mons.",
};

export default function BoutiquePage() {
  return (
    <Suspense fallback={<div className="container py-24 text-center text-ink/60">Chargement de la boutique...</div>}>
      <BoutiqueClient />
    </Suspense>
  );
}
