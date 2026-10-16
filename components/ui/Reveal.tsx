"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Décalage vertical initial en px */
  y?: number;
  x?: number;
  as?: "div" | "section" | "li" | "article" | "span" | "p" | "figure";
  once?: boolean;
};

/** Apparition progressive au défilement (fade + slide), désactivée si prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, y = 40, x = 0, as = "div", once = true }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as ElementType;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </Comp>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/** Conteneur dont les enfants <StaggerItem> apparaissent les uns après les autres. */
export function Stagger({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "ul" | "ol" }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as ElementType;
  return (
    <Comp
      className={className}
      variants={containerVariants}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px" }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" }) {
  const Comp = motion[as] as ElementType;
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}

/** Titre révélé mot par mot avec un masque (effet « rideau »). */
export function SplitHeading({
  text,
  className,
  as = "h2",
  delay = 0,
  highlight,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  /** Mots à colorer en orange */
  highlight?: string[];
}) {
  const reduce = useReducedMotion();
  const Tag = as as ElementType;
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
            <motion.span
              className={`inline-block ${highlight?.includes(word) ? "text-flame" : ""}`}
              initial={reduce ? false : { y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.06 }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
