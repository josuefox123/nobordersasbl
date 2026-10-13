import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StatsSection } from "@/components/sections/StatsSection";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProductSearchSection } from "@/components/sections/ProductSearchSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <StatsSection />
      <PartnersMarquee />
      <TestimonialsSection />
      <CtaSection />
      <ActivitiesSection />
      {/* <ProjectsSection /> — "Des projets à fort impact social et humain" + axes Intégration, Interculturalité, Mobilité douce, Solidarité Nord-Sud — commenté */}
      <ProductSearchSection />
      <MissionSection />
      {/* <NewsletterSection /> — "Faisons de la diversité une richesse" — commentée */}
      <NewsSection />
    </>
  );
}
