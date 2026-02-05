"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import IntroOverlay from "./IntroOverlay"; // adapte le chemin

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <>
      {/* ✅ L’overlay arrive en premier */}
      <AnimatePresence mode="wait">
        {!done && <IntroOverlay onDone={() => setDone(true)} />}
      </AnimatePresence>

      {/* ✅ Rien d’autre ne monte avant la fin */}
      {done ? children : null}
    </>
  );
}
