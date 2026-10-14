import type { Metadata } from "next";
import { WishlistClient } from "./WishlistClient";

export const metadata: Metadata = {
  title: "Ma Liste de souhaits & Favoris — Boutique No Borders",
  description:
    "Gérez vos articles favoris, vos commandes et vos préférences au sein de la boutique solidaire No Borders ASBL.",
};

export default function WishlistPage() {
  return <WishlistClient />;
}
