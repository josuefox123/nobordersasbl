import Image from "next/image";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  crumbs: Crumb[];
  title: string;
  description?: string;
  action?: React.ReactNode;
  /** Image de fond — par défaut une photo de vélo Unsplash */
  image?: string;
}

export function PageHeader({
  crumbs,
  title,
  description,
  action,
  image = "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&q=80&auto=format&fit=crop",
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-14 sm:py-20">

      {/* ── Image de fond ── */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          aria-hidden="true"
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Overlay léger — laisse l'image bien visible ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* ── Contenu ── */}
      <div className="container relative z-10">

        {/* Fil d'Ariane */}
        <nav aria-label="Fil d'Ariane">
          <ol className="flex items-center gap-2 text-sm text-white/70">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-white/40">/</span>
                  )}
                  {isLast || !crumb.href ? (
                    <span
                      aria-current={isLast ? "page" : undefined}
                      className="font-semibold text-white"
                    >
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-white"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Titre + action */}
        <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {description}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      </div>
    </section>
  );
}
