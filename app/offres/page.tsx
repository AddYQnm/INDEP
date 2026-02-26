// app/offres/page.tsx (SERVER)
import type { Metadata } from "next"
import HeroSection from "./HeroSection.client"
import ProcessSection from "./ProcessSection.client"
import FinalCTA from "./FinalCTA.client"
import OffresInteractive from "./OffresInteractive.client"

export const metadata: Metadata = {
  title: "Offres vidéo | Indépendant Studio",
  description:
    "Offres vidéo à Rouen : direction créative, production, déclinaisons pour ads & réseaux. Une méthode simple, une exécution nette.",
  alternates: { canonical: "/offres" },
}

export default function OffresPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <HeroSection />
      <ProcessSection />
      <OffresInteractive />
      <FinalCTA />
    </main>
  )
}