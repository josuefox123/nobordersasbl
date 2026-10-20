import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StatsSection } from "@/components/sections/StatsSection";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProductSearchSection } from "@/components/sections/ProductSearchSection";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { CookieConsent } from "@/components/ui/CookieConsent";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ActivitiesSection />
      <MissionSection />
      <ProductSearchSection />
      <FeaturedProducts />
      <StatsSection />
      <PartnersMarquee />
      <TestimonialsSection />
      <CtaSection />
      {/* <ProjectsSection /> — commenté */}
      {/* <NewsletterSection /> — commentée */}
      <NewsSection />
      <CookieConsent />
    </>
  );
}
