// app/offres/page.tsx

import type { Metadata } from "next"
import dynamic from "next/dynamic"

// ✅ Dynamic import SANS ssr:false (important)
const HeroSection = dynamic(() => import("./HeroSection.client"))
const ProcessSection = dynamic(() => import("./ProcessSection.client"))
const OffresInteractive = dynamic(() => import("./OffresInteractive.client"), {
  loading: () => <div className="h-[400px]" />, // skeleton smooth
})
const FinalCTA = dynamic(() => import("./FinalCTA.client"), {
  loading: () => <div className="h-[300px]" />,
})

export const metadata: Metadata = {
  title: "Offres vidéo | Indépendant Studio",
  description:
    "Offres vidéo à Rouen : direction créative, production, déclinaisons pour ads & réseaux. Une méthode simple, une exécution nette.",
  alternates: { canonical: "/offres" },
}

export default function OffresPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero direct (priorité UX) */}
      <HeroSection />

      {/* Sections suivantes */}
      <div className="will-change-transform">
        <ProcessSection />
        <OffresInteractive />
        <FinalCTA />
      </div>

    </main>
  )
}