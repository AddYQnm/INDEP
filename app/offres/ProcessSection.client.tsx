"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    title: "STRATÉGIE",
    text: "Notre but ? De beaux contenus qui performent. On veille, on analyse et on challenge pour te conseiller précisément.",
  },
  {
    title: "ACCOMPAGNEMENT",
    text: "On gère le suivi de A à Z : organisation, planning, validations. On avance vite et dans la bonne direction.",
  },
  {
    title: "CRÉATION",
    text: "On écrit, on structure et on ose. Objectif : des formats engageants qui marquent et qui retiennent.",
  },
  {
    title: "PRODUCTION",
    text: "Tournage, shooting, motion : matériel, talents et expertise pour créer un contenu propriétaire et pertinent.",
  },
  {
    title: "POST-PRODUCTION",
    text: "Montage, étalonnage, mix son, exports. On rend le contenu différenciant et prêt pour chaque plateforme.",
  },
  {
    title: "DIFFUSION",
    text: "On pousse à grande échelle : stratégie data-driven, testing, optimisation continue et scaling multi-leviers.",
  },
] as const

export default function ProcessSection() {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.25"],
  })

  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "92%"])

  const hoverAnim = reduceMotion ? undefined : { y: -2 }

  return (
    <section
      id="process"
      aria-label="Process de production vidéo"
      ref={ref}
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <div className="mb-14 md:mb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-black/50">Process</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Une méthode simple.
          <br className="hidden md:block" /> Une exécution nette.
        </h2>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-black/60 leading-relaxed">
          Tu sais où tu vas, ce qu’on tourne, et ce que tu reçois. Pas de flou.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-black/10 md:left-1/2" />

        {!reduceMotion && (
          <motion.div
            style={{ height: lineH, willChange: "height" }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 md:left-1/2"
          />
        )}

        {!reduceMotion && (
          <motion.div
            style={{ top: glowY, willChange: "top" }}
            className="pointer-events-none absolute left-4 -translate-x-1/2 md:left-1/2 h-10 w-10 rounded-full bg-pink-500/20 blur-2xl"
          />
        )}

        <div className="space-y-16 md:space-y-24">
          {steps.map((s, i) => {
            const reverse = i % 2 === 0
            return (
              <motion.div
                key={s.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-4 top-7 md:left-1/2 md:-translate-x-1/2">
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-white ring-2 ring-black/15" />
                    {!reduceMotion && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-60 blur-[10px]" />
                    )}
                  </div>
                </div>

                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <motion.div
                    whileHover={hoverAnim}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl p-7 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.35em] text-black/45">
                        Étape {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-black/30">
                        {i + 1}/{steps.length}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-black/60 leading-relaxed">{s.text}</p>

                    <div className="mt-6 h-px w-full bg-black/10">
                      <div className="h-px w-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}