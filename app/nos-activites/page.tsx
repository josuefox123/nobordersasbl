import type { Metadata } from "next";
import { NosActivitesClient } from "./NosActivitesClient";

export const metadata: Metadata = {
  title: "Nos activités",
  description:
    "Activités socio-culturelles, sorties culturelles, organisations sportives et promotion de vélos en bambou : découvrez les activités de No Borders ASBL à Mons.",
};

export default function NosActivitesPage() {
  return <NosActivitesClient />;
}
