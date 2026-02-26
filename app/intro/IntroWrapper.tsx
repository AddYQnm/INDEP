/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import IntroOverlay from "./IntroOverlay"

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(false)

  // ✅ l’intro ne s’affiche qu’après hydration (côté client)
  useEffect(() => {
    setShowIntro(true)
  }, [])

  return (
    <div className="relative">
      {/* ✅ le contenu est TOUJOURS rendu (SSR) */}
      {children}

      {/* ✅ overlay au-dessus, n’empêche pas l’indexation */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroOverlay
            onDone={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}