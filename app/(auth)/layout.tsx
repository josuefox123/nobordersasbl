import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Authentification | No Borders ASBL",
    template: "%s | No Borders ASBL",
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Colonne gauche — formulaire */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 xl:px-24 bg-white overflow-y-auto">
        <div className="mx-auto w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Colonne droite — fond bleu (masquée sur mobile) */}
      <div
        className="hidden lg:flex lg:w-[45%] xl:w-[48%] relative overflow-hidden bg-[#0875B9] flex-col justify-center px-16 xl:px-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        {/* Cercles décoratifs */}
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-white/[0.04]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-80 h-80 rounded-full bg-white/[0.04]" />

        {/* Contenu — aligné à gauche */}
        <div className="relative z-10 flex flex-col w-full max-w-lg">
          {/* Badge marque */}
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 mb-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
            </svg>
            <span className="text-white font-semibold text-sm">No Borders ASBL</span>
          </div>

          {/* Titre principal */}
          <h2 className="text-white text-[2.75rem] xl:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight mb-6">
            Brisez les frontières,<br />vivez ensemble.
          </h2>

          {/* Description */}
          <p className="text-white/70 text-base leading-relaxed max-w-md mb-12">
            Rejoignez notre communauté et participez à nos activités socio-culturelles et sportives à Mons. Ensemble, construisons un monde plus inclusif.
          </p>

          {/* Liste des fonctionnalités — icônes circulaires */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                label: "Intégration & inclusion sociale",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                ),
                label: "Promotion de l'interculturalité",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="15" cy="5" r="1" />
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                  </svg>
                ),
                label: "Mobilité douce & environnement",
              },
            ].map((item: { icon: ReactNode; label: string }) => (
              <div key={item.label} className="flex items-center gap-4">
                {/* Icône circulaire */}
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white backdrop-blur-sm">
                  {item.icon}
                </div>
                <span className="text-white/85 text-base font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
