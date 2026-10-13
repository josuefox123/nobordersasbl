import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { MissionSection } from "@/components/sections/MissionSection";
import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProductSearchSection } from "@/components/sections/ProductSearchSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PartnersMarquee />
      <MissionSection />
      <ActivitiesSection />
      <ProjectsSection />
      <NewsSection />
      <ProductSearchSection />
      <TestimonialsSection />
      <NewsletterSection />
      <CtaSection />
    </>
  );
}
