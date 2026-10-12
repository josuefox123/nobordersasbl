import type { Metadata } from "next";
import Image from "next/image";
import { press } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Presse & Médias",
  description:
    "Retrouvez les articles, reportages et interventions médias consacrés à No Borders ASBL.",
};

export default function PressePage() {
  return (
    <div className="pt-28 sm:pt-36">
      <section className="bg-paper py-16 sm:py-24 border-b border-ink/5">
        <div className="container">
          <div className="max-w-3xl">
            <span className="eyebrow">Médias & Parutions</span>
            <h1 className="mt-4 text-display-lg font-extrabold tracking-tight text-ink">
              On parle de nous dans la presse
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink/75 leading-relaxed">
              Consultez les articles, émissions et reportages consacrés à nos matchs interculturels et à notre projet de vélos écologiques en bambou.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2">
            {press.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-sm transition-all duration-300 hover:border-flame/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {item.source && (
                    <span className="absolute top-4 right-4 badge badge-primary font-bold text-xs uppercase tracking-wider">
                      {item.source}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <time
                    dateTime={item.isoDate}
                    className="text-xs font-semibold text-ink/50 uppercase tracking-wider"
                  >
                    {item.date}
                  </time>
                  <h2 className="mt-3 text-2xl font-bold text-ink leading-snug group-hover:text-flame transition-colors">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base text-ink/75 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-auto pt-8">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-flame-deep hover:underline"
                      >
                        Consulter l'article original <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="text-xs text-ink/50 uppercase font-semibold">
                        Article archivé par l’ASBL
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
