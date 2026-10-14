import type { Metadata } from "next";
import { ProduitClient } from "@/app/boutique/produit/ProduitClient";

export const metadata: Metadata = {
  title: "Détails du produit — Boutique",
  description:
    "Découvrez tous les détails de nos vélos en bambou et accessoires : caractéristiques, spécifications techniques et avis clients.",
};

export default function ProduitPage() {
  return <ProduitClient />;
}
