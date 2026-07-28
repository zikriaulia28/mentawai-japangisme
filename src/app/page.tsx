import { Navbar } from "@/components/Navbar";
import { FloatingWA } from "@/components/sections/FooterSection";
import { Hero } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { ItinerarySection } from "@/components/sections/ItinerarySection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { TermsSection } from "@/components/sections/TermsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HighlightsSection />
        <PricingSection />
        <FacilitiesSection />
        <ItinerarySection />
        <GallerySection />
        <TestimonialSection />
        <TermsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
