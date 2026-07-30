"use client";

import { Navbar } from "@/components/Navbar";
import { FloatingWA } from "@/components/sections/FooterSection";
import { Hero } from "@/components/sections/HeroSection";
import { Footer } from "@/components/sections/FooterSection";
import dynamic from "next/dynamic";

const HighlightsSection = dynamic(() => import("@/components/sections/HighlightsSection").then((mod) => mod.HighlightsSection), { ssr: false });
const PricingSection = dynamic(() => import("@/components/sections/PricingSection").then((mod) => mod.PricingSection), { ssr: false });
const FacilitiesSection = dynamic(() => import("@/components/sections/FacilitiesSection").then((mod) => mod.FacilitiesSection), { ssr: false });
const ItinerarySection = dynamic(() => import("@/components/sections/ItinerarySection").then((mod) => mod.ItinerarySection), { ssr: false });
const GallerySection = dynamic(() => import("@/components/sections/GallerySection").then((mod) => mod.GallerySection), { ssr: false });
const TestimonialSection = dynamic(() => import("@/components/sections/TestimonialSection").then((mod) => mod.TestimonialSection), { ssr: false });
const TermsSection = dynamic(() => import("@/components/sections/TermsSection").then((mod) => mod.TermsSection), { ssr: false });
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then((mod) => mod.FaqSection), { ssr: false });
const AboutSection = dynamic(() => import("@/components/sections/AboutSection").then((mod) => mod.AboutSection), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HighlightsSection />
        <AboutSection />
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