import { ShoppingBagIcon, UserIcon, HeartIcon, PhoneIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  {
    icon: <ShoppingBagIcon size={32} />,
    value: "+120",
    label: "Produits",
  },
  {
    icon: <UserIcon size={32} />,
    value: "2.5M",
    label: "Clients",
  },
  {
    icon: <HeartIcon size={32} />,
    value: "90%",
    label: "Taux de satisfaction",
  },
  {
    icon: <PhoneIcon size={32} />,
    value: "24/7",
    label: "Assistance",
  },
];

export function StatsSection() {
  return (
    <section className="bg-ink py-16 sm:py-20 text-white grain relative overflow-hidden">
      {/* Halo décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/3 h-80 w-80 rounded-full bg-flame/15 blur-[120px]"
      />

      <div className="container relative">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-4 text-center">
                {/* Icône dans un cercle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-flame">
                  {stat.icon}
                </div>
                {/* Valeur */}
                <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </span>
                {/* Label */}
                <span className="text-sm font-semibold uppercase tracking-widest text-white/60">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
