// app/page.tsx
import type { Metadata } from "next"
import ProductionCTA from "@/components/production/ProductionCTA"
import Hero from "@/components/Hero"
import { RevealLinks } from "@/components/RevealLinks"
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo"
import SurMesureSection from "@/components/SurMesureSection"
import FaitPourVousSection from "@/components/FaitPourVousSection"
import { FeatureStepsDemo } from "@/components/FeatureSteps"
import HomeProjectsSection from "@/components/projects/HomeProjectsSection"
import InfiniteSliderBasic from "@/components/InfiniteSliderBasic"
import GradientBackground from "@/components/GradientBackground"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  // optionnel: si tu veux un title plus précis que celui du layout pour la home :
  // title: "Indépendant Studio | Agence marketing & création de contenus à Rouen",
}

export default function ProductionPage() {
  return (
    <main className="relative bg-grain min-h-screen bg-white text-black">
      <GradientBackground />

      <div className="relative z-10">
        <Hero />
        <RevealLinks />
        <InfiniteSliderBasic />
        <FaitPourVousSection />
        <SurMesureSection />
        <FeatureStepsDemo />
        <HomeProjectsSection />
        <BentoGridThirdDemo />
        <ProductionCTA />
      </div>
    </main>
  )
}