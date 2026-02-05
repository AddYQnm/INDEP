"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import IntroOverlay from "./intro/IntroOverlay";
// adapte le path

export default function Providers({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!introDone && <IntroOverlay onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      {/* ✅ Tant que l'intro n'est pas finie, rien d'autre ne monte */}
      {introDone ? children : null}
    </>
  );
}
