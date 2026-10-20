import {
  CheckIcon,
  HeartIcon,
  MapPinIcon,
  ShoppingBagIcon,
  SparkIcon,
} from "@/components/ui/Icons";

const MESSAGES = [
  { icon: <ShoppingBagIcon size={14} />, text: "Boutique solidaire : vélos en bambou artisanaux et accessoires éco-responsables." },
  { icon: <SparkIcon size={14} />,      text: "Sorties vélo et activités sportives inclusives à Mons et en Wallonie." },
  { icon: <HeartIcon size={14} />,      text: "Briseur de frontières mentales : inclusion sociale et diversité culturelle depuis 2007." },
  { icon: <CheckIcon size={14} />,       text: "Vélos adaptés Hase Bikes & ElliptiGO accessibles à toutes et tous." },
  { icon: <MapPinIcon size={14} />,      text: "Retrait et conseils à Mons · Livraison solidaire partout en Belgique." },
];

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Annonces"
      className="relative h-12 overflow-hidden bg-primary"
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
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-primary to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-primary to-transparent" />
    </div>
  );
}
