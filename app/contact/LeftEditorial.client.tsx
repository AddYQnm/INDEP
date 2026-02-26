"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function LeftEditorial() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:pt-6"
    >
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-[#2e8a96]" />
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Contact</p>
      </div>

      <h1 className="text-[clamp(44px,6vw,86px)] font-black leading-[0.9] tracking-tight">
        Parlons
        <br />
        de votre
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2e8a96] to-white/70">
          prochain projet
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">
        Un besoin, une idée, un lancement. On transforme ça en contenus{" "}
        <span className="text-white font-semibold">beaux</span> et{" "}
        <span className="text-white font-semibold">efficaces</span> : stratégie,
        production, déclinaisons.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Basés à</p>
          <p className="mt-1 text-sm font-semibold">Rouen</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Délai</p>
          <p className="mt-1 text-sm font-semibold">24–48h</p>
        </div>
      </div>

      <div className="mt-10 text-sm text-white/45">
        Disponible partout en France — déplacements possibles selon projet.
      </div>
    </motion.div>
  )
}