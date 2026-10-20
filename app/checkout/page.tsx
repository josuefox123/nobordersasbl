import type { Metadata } from "next";
import { CheckoutClient } from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Commander — Boutique solidaire No Borders",
  description:
    "Finalisez votre commande sur la boutique solidaire No Borders ASBL en toute sécurité.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
