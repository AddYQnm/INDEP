// app/production/page.tsx
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


export default function ProductionPage() {
  return (
    
    <section className="relative bg-grain min-h-screen bg-white text-black">
  <GradientBackground />

  <div className="relative z-10">
    {/* Ton contenu ici */}
  
      <Hero />
      <RevealLinks />
      <InfiniteSliderBasic />
      <FaitPourVousSection />
      <SurMesureSection />
      <FeatureStepsDemo />
      <HomeProjectsSection />
      
      <BentoGridThirdDemo />
      
      
      <ProductionCTA /></div>
</section>
  )
}
