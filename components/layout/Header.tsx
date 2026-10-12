"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/content";
import { ArrowRight, CloseIcon, HeartIcon, MailIcon, MenuIcon, PhoneIcon, SparkIcon, socialIcons } from "@/components/ui/Icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 80));

  // Ferme le menu lors d'un changement de page
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <a
        href="#contenu"
        className="sr-only z-[100] rounded-md bg-flame-deep px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>

      {/* Barre de progression de lecture */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-flame"
        style={{ scaleX: reduce ? scrollYProgress : progress }}
      />

      <header className="fixed inset-x-0 top-0 z-50">
        {/* Niveau 1 : barre noire */}
        <motion.div
          initial={false}
          animate={{ height: compact ? 64 : 84 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative bg-ink text-white"
        >
          <div className="container flex h-full items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="menu-principal"
              className="btn btn-ghost btn-square -ml-2 rounded-full text-white hover:bg-white/10"
            >
              <MenuIcon size={26} />
            </button>

            <Link href="/" className="group flex items-center gap-3" aria-label="No Borders ASBL — accueil">
              <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white p-0.5 transition-transform duration-500 ease-out-expo group-hover:rotate-[20deg]">
                <Image src="/images/logo.png" alt="" width={44} height={44} className="h-full w-full object-contain" priority />
              </span>
              <span className="leading-none">
                <span className="block text-xl font-extrabold tracking-tight sm:text-2xl">
                  NO BORDERS<span className="text-flame">!</span>
                </span>
                <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/60 sm:block">
                  ASBL · Mons
                </span>
              </span>
            </Link>

            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              <a
                href={site.phoneHref}
                className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white lg:inline-flex"
              >
                <PhoneIcon size={18} /> {site.phone}
              </a>
              <span className="hidden h-8 w-px bg-white/15 lg:block" aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                aria-label={`Écrire à ${site.email}`}
                className="btn btn-ghost btn-square rounded-lg text-white hover:bg-white/10"
              >
                <MailIcon size={22} />
              </a>
              <Link href="/nous-soutenir" className="btn btn-primary btn-sm ml-1 gap-2 rounded-lg px-4 py-2.5 sm:btn-md">
                <HeartIcon size={18} />
                <span className="hidden sm:inline">Nous soutenir</span>
                <span className="sr-only sm:hidden">Nous soutenir</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Niveau 2 : barre de navigation blanche (desktop) */}
        <nav
          aria-label="Navigation principale"
          className={`hidden border-b border-ink/5 bg-white/95 backdrop-blur transition-shadow duration-500 lg:block ${compact ? "shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]" : ""}`}
        >
          <div className="container flex h-14 items-stretch">
            <Link
              href="/nous-contacter?sujet=benevolat"
              className="relative -ml-5 mr-6 flex items-center gap-2 bg-flame-deep px-5 font-bold text-white transition-colors hover:bg-ink md:-ml-8 md:px-8 xl:-ml-10 xl:px-10"
            >
              <SparkIcon size={12} className="absolute left-2 top-2 animate-sparkle text-sun" />
              Agir avec nous
            </Link>
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="link-underline mx-3 py-1 text-[0.95rem] font-medium text-ink/80 transition-colors hover:text-ink aria-[current=page]:font-semibold aria-[current=page]:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-auto flex items-center gap-2">
              <Link href="/#actualites" className="btn btn-ink btn-sm rounded-lg px-4 py-2.5">
                Actualités & événements
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} isActive={isActive} />
    </>
  );
}

function MobileMenu({ open, onClose, isActive }: { open: boolean; onClose: () => void; isActive: (href: string) => boolean }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Piège de focus simple
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => panelRef.current?.querySelector<HTMLElement>("button")?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      previous?.focus();
    };
  }, [open, onKey]);

  const links = [
    ...navigation,
    { label: "Nous soutenir", href: "/nous-soutenir" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80]" id="menu-principal">
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            tabIndex={-1}
            className="absolute inset-0 h-full w-full cursor-default bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="grain relative flex h-full w-full max-w-[min(92vw,560px)] flex-col overflow-y-auto bg-ink px-6 pb-8 pt-5 text-white sm:px-10"
            initial={reduce ? { opacity: 0 } : { x: "-100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "-100%" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="btn btn-circle btn-ghost text-white hover:rotate-90 hover:bg-white/10"
              >
                <CloseIcon size={26} />
              </button>
            </div>

            <ul className="menu mt-10 gap-1 p-0">
              {links.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="group flex items-center justify-between rounded-xl px-2 py-3 text-3xl font-extrabold tracking-tight text-white hover:bg-white/5 focus:bg-white/5 active:!bg-white/10 aria-[current=page]:text-flame sm:text-4xl"
                  >
                    {item.label}
                    <ArrowRight
                      size={28}
                      className="-translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-auto space-y-6 pt-12"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
            >
              <Link href="/nous-contacter?sujet=benevolat" onClick={onClose} className="btn btn-primary btn-block btn-lg">
                Devenir bénévole
              </Link>
              <div className="grid gap-2 text-white/75">
                <a href={site.phoneHref} className="inline-flex items-center gap-3 hover:text-white">
                  <PhoneIcon size={18} /> {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:text-white">
                  <MailIcon size={18} /> {site.email}
                </a>
              </div>
              <div className="flex gap-2">
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (nouvel onglet)`}
                      className="btn btn-circle border-white/20 bg-transparent text-white hover:border-flame hover:bg-flame"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
