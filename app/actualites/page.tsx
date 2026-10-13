import type { Metadata } from "next";
import { ActualitesClient } from "./ActualitesClient";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Retrouvez toutes les actualités, événements et activités de No Borders ASBL — sport, culture, mobilité douce et solidarité à Mons.",
};

export default function ActualitesPage() {
  return <ActualitesClient />;
}
