"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const AUTH_ROUTES = [
  "/login",
  "/connexion",
  "/register",
  "/inscription",
  "/forgot-password",
  "/mot-de-passe-oublie",
  "/reset-password",
  "/reinitialiser-mot-de-passe",
  "/otp",
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = AUTH_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(route + "/")
  );

  if (isAuth) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
