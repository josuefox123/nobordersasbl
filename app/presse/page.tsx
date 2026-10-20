import type { Metadata } from "next";
import { PresseClient } from "./PresseClient";

export const metadata: Metadata = {
  title: "Presse & Médias",
  description:
    "Retrouvez les articles, reportages et interventions médias consacrés à No Borders ASBL.",
};

export default function PressePage() {
  return <PresseClient />;
}
