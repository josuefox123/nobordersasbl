import type { Metadata } from "next";
import { PanierClient } from "./PanierClient";

export const metadata: Metadata = {
  title: "Panier d'achats — Boutique No Borders",
  description:
    "Consultez et gérez vos articles sélectionnés dans la boutique No Borders ASBL : vélos en bambou, vélos adaptés et accessoires éco-responsables.",
};

export default function PanierPage() {
  return <PanierClient />;
}
