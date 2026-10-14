"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/content";
import {
  ArrowRight,
  CloseIcon,
  CopyIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingBagIcon,
  SparkIcon,
  socialIcons,
} from "@/components/ui/Icons";
import { LoginDropdown } from "@/components/ui/LoginDropdown";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LocationButton } from "@/components/ui/LocationButton";
import { WishlistButton } from "@/components/ui/WishlistButton";
import { CartButton } from "@/components/ui/CartButton";
import { SearchBar } from "@/components/ui/SearchBar";
import { NavButton } from "@/components/ui/NavButtons";
import { AnnouncementBar } from "@/components/ui/AnnouncementBar";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 80));
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Lien d'évitement */}
      <a
        href="#contenu"
        className="sr-only z-[100] rounded-md bg-flame-deep px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>

      {/* Barre de progression — pointer-events-none pour ne jamais bloquer les clics */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-flame"
        style={{ scaleX: reduce ? scrollYProgress : progress }}
      />

      <header className="fixed inset-x-0 top-0 z-[60]">
        {/* ── HeaderTop : barre noire ── */}
        <div
          className="relative bg-ink text-white transition-[height] duration-500"
          style={{ height: compact ? "64px" : "84px" }}
        >
          <div className="container flex h-full items-center gap-4">

            {/* Bouton menu hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="menu-principal"
              style={{ position: "relative", zIndex: 10 }}
              className="-ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <MenuIcon size={24} />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="No Borders ASBL — accueil"
            >
              <Image
                src="/images/logo/logoFichier 2logo_2.png"
                alt="No Borders ASBL"
                width={192}
                height={64}
                className="h-11 w-auto object-contain transition-transform duration-500 ease-out-expo group-hover:scale-105"
                priority
              />
            </Link>

            {/* Actions droite */}
            <div className="ml-auto flex items-center gap-2" style={{ position: "relative", zIndex: 10 }}>
              <LoginDropdown />
              <LanguageSwitcher />
              <span className="h-6 w-px bg-white/20" aria-hidden="true" />
              <LocationButton />
              <WishlistButton />
              <CartButton />
              <span className="hidden h-6 w-px bg-white/20 sm:block" aria-hidden="true" />
              <div className="hidden w-56 lg:block xl:w-72">
                <SearchBar />
              </div>
            </div>

          </div>
        </div>

        {/* ── Nav desktop ── */}
        <nav
          aria-label="Navigation principale"
          className={`hidden border-b border-ink/5 bg-white/95 backdrop-blur transition-shadow duration-500 lg:block ${
            compact ? "shadow-[0_12px_30px_-18px_rgba(0,0,0,0.35)]" : ""
          }`}
        >
          <div className="container flex h-14 items-stretch">
            <Link
              href="/"
              className="relative -ml-5 mr-6 flex items-center gap-2 bg-flame-deep px-5 font-bold text-white transition-colors hover:bg-ink md:-ml-8 md:px-8 xl:-ml-10 xl:px-10"
            >
              <SparkIcon
                size={12}
                className="absolute left-2 top-2 animate-sparkle text-sun"
              />
              Accueil
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
              <NavButton
                href="/boutique"
                label="Boutique"
                icon={<ShoppingBagIcon size={16} />}
              />
              <NavButton
                href="/fourniture"
                label="Fourniture"
                icon={<CopyIcon size={16} />}
              />
            </div>
          </div>
        </nav>

        {/* ── HeaderBottom : bande d'annonces défilante ── */}
        <AnnouncementBar />
      </header>

      {/* Menu mobile — rendu dans un portail pour échapper au stacking context du header */}
      {mounted &&
        createPortal(
          <MobileMenu open={open} onClose={() => setOpen(false)} isActive={isActive} />,
          document.body
        )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Menu mobile                                                */
/* ─────────────────────────────────────────────────────────── */

function MobileMenu({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [search, setSearch] = useState("");

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          "a, button, input"
        );
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
    const t = window.setTimeout(
      () => panelRef.current?.querySelector<HTMLElement>("button")?.focus(),
      50
    );
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
        <div
          id="menu-principal"
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        >
          {/* Overlay sombre */}
          <motion.div
            aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}
            className="bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Panneau blanc slide-in depuis la gauche */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            style={{ position: "absolute", top: 0, bottom: 0, left: 0 }}
            className="flex w-full max-w-[280px] flex-col overflow-y-auto bg-white shadow-2xl sm:max-w-[320px]"
            initial={reduce ? { opacity: 0 } : { x: "-100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "-100%" }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* ── En-tête sombre ── */}
            <div className="flex items-center justify-between bg-ink px-5 py-4">
              <span className="text-sm font-bold uppercase tracking-widest text-white">
                Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="grid h-8 w-8 place-items-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <CloseIcon size={18} />
              </button>
            </div>

            {/* ── Boutons d'action rapide ── */}
            <div className="flex flex-col gap-2 border-b border-ink/8 px-4 py-4">
              <Link
                href="/boutique"
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink/80"
              >
                <ShoppingBagIcon size={17} />
                Boutique
              </Link>
              <Link
                href="/fourniture"
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg bg-ink px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink/80"
              >
                <CopyIcon size={17} />
                Fourniture
              </Link>
              <Link
                href="/nous-contacter?sujet=benevolat"
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg bg-flame px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-flame-deep"
              >
                <SparkIcon size={14} />
                Agir avec nous
              </Link>
            </div>

            {/* ── Barre de recherche ── */}
            <div className="border-b border-ink/8 px-4 py-3">
              <div className="flex items-center gap-2 rounded-lg border border-ink/15 bg-paper px-3 py-2.5">
                <SearchIcon size={15} className="shrink-0 text-ink/40" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un produit…"
                  aria-label="Rechercher un produit"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
              </div>
            </div>

            {/* ── Liens de navigation ── */}
            <nav aria-label="Menu principal" className="flex-1">
              <ul className="divide-y divide-ink/6">
                {links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="flex items-center justify-between px-5 py-4 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper aria-[current=page]:font-semibold aria-[current=page]:text-flame"
                    >
                      {item.label}
                      <ArrowRight size={16} className="text-ink/30" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Bas du panneau : coordonnées ── */}
            <div className="border-t border-ink/8 px-5 py-5 text-sm text-ink/50">
              <a href={site.phoneHref} className="flex items-center gap-2 hover:text-ink">
                <PhoneIcon size={15} /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 flex items-center gap-2 hover:text-ink">
                <MailIcon size={15} /> {site.email}
              </a>
              <div className="mt-4 flex gap-2">
                {site.socials.map((s) => {
                  const Icon = socialIcons[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (nouvel onglet)`}
                      className="grid h-8 w-8 place-items-center rounded-lg border border-ink/15 text-ink/50 transition-colors hover:border-flame hover:bg-flame hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
