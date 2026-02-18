"use client"

import { useMemo } from "react"
import { FeatureSteps } from "./ui/feature-section"

const features = [
  {
    step: "Étape 1",
    title: "Trafic & Ventes",
    content:
      "Grâce à Meta Ads et à notre expertise, nous générons rapidement du trafic qualifié vers votre site et transformons les visiteurs en clients grâce à des campagnes ciblées et intelligentes.",
    image: "/ptit/1.jpg",
  },
  {
    step: "Étape 2",
    title: "Notoriété de marque",
    content:
      "La publicité est un levier puissant pour faire connaître votre marque, vos produits et vos services auprès d’une audience large et parfaitement ciblée.",
    image: "/ptit/2.jpg",
  },
  {
    step: "Étape 3",
    title: "Communauté & Fidélisation",
    content:
      "Nous vous aidons à créer une communauté engagée autour de votre marque afin de fidéliser vos clients et transformer votre audience en véritable levier de croissance.",
    image: "/ptit/3.jpg",
  },
]

export function FeatureStepsDemo() {
  // ✅ évite de recréer le JSX title à chaque render
  const title = useMemo(
    () => (
      <span className="block leading-[0.95]">
        <span className="block text-[clamp(36px,6vw,72px)] font-extrabold tracking-[-0.04em]">
          DU SCROLL
        </span>
        <span className="block text-[clamp(36px,6vw,72px)] font-extrabold tracking-[-0.04em] text-[#2e8a96] stroke-text">
          À LA CONVERSION
        </span>
      </span>
    ),
    []
  )

  // ✅ référence stable (au cas où FeatureSteps dépend de l'identité de l'array)
  const stableFeatures = useMemo(() => features, [])

  return (
    <div>
      <FeatureSteps
        features={stableFeatures}
        title={title}
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </div>
  )
}
