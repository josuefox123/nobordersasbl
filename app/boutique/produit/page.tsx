import type { Metadata } from "next";
import { Suspense } from "react";
import { ProduitClient } from "@/app/boutique/produit/ProduitClient";

export const metadata: Metadata = {
  title: "Détails du produit — Boutique",
  description:
    "Découvrez tous les détails de nos vélos en bambou et accessoires : caractéristiques, spécifications techniques et avis clients.",
};

export default function ProduitPage() {
  return (
    <Suspense fallback={<div className="container py-24 text-center text-ink/60">Chargement du produit...</div>}>
      <ProduitClient />
    </Suspense>
  );
}
