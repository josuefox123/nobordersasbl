import { ShoppingBagIcon, UserIcon, HeartIcon, PhoneIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

const STATS = [
  {
    icon: ShoppingBagIcon,
    value: "+120",
    label: "Produits disponibles",
    description: "Vélos, accessoires et équipements sélectionnés pour chaque type de cycliste.",
    bg: "#E8F8F5",       // vert primaire très clair
    iconBg: "#26B997",
    accent: "#26B997",
  },
  {
    icon: UserIcon,
    value: "2.5M",
    label: "Clients satisfaits",
    description: "Des milliers de cyclistes nous font confiance à travers toute la Belgique.",
    bg: "#F0FDF4",       // vert très clair
    iconBg: "#16A34A",
    accent: "#16A34A",
  },
  {
    icon: HeartIcon,
    value: "90%",
    label: "Taux de satisfaction",
    description: "Nos clients recommandent No Borders pour la qualité et le service.",
    bg: "#FFF7ED",       // orange/crème très clair
    iconBg: "#EA580C",
    accent: "#EA580C",
  },
  {
    icon: PhoneIcon,
    value: "24/7",
    label: "Support disponible",
    description: "Notre équipe est toujours disponible pour répondre à vos questions.",
    bg: "#F5F3FF",       // violet très clair
    iconBg: "#7C3AED",
    accent: "#7C3AED",
  },
];

// Symboles décoratifs placés aléatoirement dans chaque card
const DECO = ["✕", "+", "◇", "✕", "+", "◇", "✕", "+"];

export function StatsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container">

        {/* ── En-tête ── */}
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl">
              No Borders en chiffres
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
              Des années d'engagement, de passion et de mobilité douce
              résumées en quelques chiffres qui parlent d'eux-mêmes.
            </p>
          </div>
        </Reveal>

        {/* ── 4 Cards ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: stat.bg }}
                >
                  {/* ── Symboles décoratifs ── */}
                  <span className="pointer-events-none absolute right-5 top-4 text-lg font-light opacity-20 select-none" style={{ color: stat.accent }}>
                    {DECO[i * 2]}
                  </span>
                  <span className="pointer-events-none absolute bottom-6 left-5 text-sm font-light opacity-15 select-none" style={{ color: stat.accent }}>
                    {DECO[i * 2 + 1]}
                  </span>
                  <span className="pointer-events-none absolute bottom-10 right-8 text-xs font-light opacity-10 select-none" style={{ color: stat.accent }}>
                    ◇
                  </span>

                  {/* ── Icône ── */}
                  <div
                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm"
                  >
                    <Icon size={22} style={{ color: stat.iconBg }} />
                  </div>

                  {/* ── Valeur ── */}
                  <div
                    className="mb-2 text-4xl font-black tracking-tight"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </div>

                  {/* ── Titre ── */}
                  <h3 className="mb-2 text-base font-bold text-ink">
                    {stat.label}
                  </h3>

                  {/* ── Description ── */}
                  <p className="text-sm leading-relaxed text-ink/60">
                    {stat.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
