import {
  CheckIcon,
  HeartIcon,
  MapPinIcon,
  ShoppingBagIcon,
  SparkIcon,
} from "@/components/ui/Icons";

const MESSAGES = [
  { icon: <ShoppingBagIcon size={14} />, text: "Livraison gratuite dès 50 € d'achat sur notre boutique en ligne." },
  { icon: <MapPinIcon size={14} />,      text: "Examen de vue disponible en magasin — sur rendez-vous." },
  { icon: <CheckIcon size={14} />,       text: "Retour gratuit sous 30 jours, sans condition." },
  { icon: <SparkIcon size={14} />,       text: "Équipements scolaires et fournitures disponibles toute l'année." },
  { icon: <HeartIcon size={14} />,       text: "Nos produits éco-responsables : bons pour vous, bons pour la planète." },
];

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Annonces"
      className="relative h-12 overflow-hidden bg-[#0875B9]"
    >
      <div className="flex h-full animate-marquee-bar items-center whitespace-nowrap will-change-transform">
        {/* Copie 1 */}
        {MESSAGES.map((msg, i) => (
          <span
            key={`a-${i}`}
            className="mx-10 inline-flex shrink-0 items-center gap-3 text-[0.95rem] font-medium text-white"
          >
            <span className="text-sun">{msg.icon}</span>
            {msg.text}
          </span>
        ))}
        {/* Copie 2 */}
        {MESSAGES.map((msg, i) => (
          <span
            key={`b-${i}`}
            className="mx-10 inline-flex shrink-0 items-center gap-3 text-[0.95rem] font-medium text-white"
          >
            <span className="text-sun">{msg.icon}</span>
            {msg.text}
          </span>
        ))}
      </div>

      {/* Texte accessible */}
      <ul className="sr-only">
        {MESSAGES.map((msg, i) => (
          <li key={i}>{msg.text}</li>
        ))}
      </ul>

      {/* Dégradés latéraux */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0875B9] to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0875B9] to-transparent" />
    </div>
  );
}
