/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { useMemo, useRef } from "react"

// ✅ Lazy-load des blocs lourds (réduit le bundle initial)
const VideoSlider = dynamic(() => import("@/components/VideoSlider"), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] w-full max-w-5xl rounded-3xl bg-black/5" />
  ),
})

const Demo = dynamic(
  () => import("@/components/Demo").then((m) => ({ default: m.Demo })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] w-full max-w-5xl rounded-3xl bg-black/5 mx-auto" />
    ),
  }
)

/* =========================
   PAGE OFFRES
========================= */
export default function OffresPageClient() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <HeroSection />

      {/* ✅ min-height pour éviter les sauts quand le composant dynamique se charge */}
      <div className="flex justify-center px-6 min-h-[520px]">
        <VideoSlider />
      </div>

      <ProcessSection />

      {/* <OffersSection /> */}
      <div className="min-h-[420px]">
        <Demo />
      </div>

      <FinalCTA />
    </main>
  )
}

/* =========================
   HERO
========================= */
function HeroSection() {
  const reduceMotion = useReducedMotion()

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
      {/* Background aurora + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_55%)]" />
        <div className="absolute -top-10 left-[8%] h-[420px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_55%)]" />
        <div className="absolute top-10 right-[10%] h-[380px] w-[520px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.16),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      {/* mot géant background */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <span className="mt-6 text-[22vw] font-black tracking-tight text-black/5 select-none">
          VIDÉO
        </span>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 grid gap-16 md:grid-cols-12 items-end"
      >
        {/* TEXTE */}
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-black/70" />
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">
              Offres vidéo
            </p>
          </div>

          <h1 className="text-[clamp(44px,6vw,82px)] font-bold leading-[0.92] tracking-tight">
            Des vidéos
            <br />
            qui{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              déclenchent
            </span>{" "}
            l’action.
          </h1>

          <p className="mt-8 max-w-xl text-[15px] md:text-lg text-black/60 leading-relaxed">
            Direction créative, production, déclinaisons.{" "}
            <span className="font-medium text-black">Une esthétique forte</span>{" "}
            + des formats prêts pour ads & réseaux.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              className="rounded-full px-10 py-6 text-sm"
              onClick={() => scrollToId("process")} // ✅ id existe
            >
              Voir les offres
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-10 bg-white text-black hover:bg-gray-100 py-6 text-sm border-black/15"
              onClick={() => scrollToId("contact")}
            >
              Prendre rendez-vous
            </Button>
          </div>

          <p className="mt-6 text-xs text-black/45">
            Réponse sous 24–48h. Si on n’est pas le bon fit, on te le dit.
          </p>
        </div>

        {/* BLOC ÉDITORIAL */}
        <div className="md:col-span-5">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/75 backdrop-blur-xl p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-15 blur-2xl" />

            <p className="relative text-xs uppercase tracking-[0.35em] text-black/50">
              Ce qu’on livre
            </p>
            <p className="relative mt-4 text-xl font-semibold leading-tight">
              Une DA lisible.
              <br />
              Un rythme propre.
              <br />
              Des formats qui tournent.
            </p>

            <div className="relative mt-6 h-px w-full bg-black/10">
              <div className="h-px w-28 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
            </div>

            <p className="relative mt-6 text-sm text-black/60 leading-relaxed">
              Contenus social, ads, lancement, restaurant/événement.
              <br />
              On pense{" "}
              <span className="text-black font-medium">usage</span> avant volume.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

/* =========================
   PROCESS
========================= */
function ProcessSection() {
  const reduceMotion = useReducedMotion()

  const steps = useMemo(
    () => [
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
    ],
    []
  )

  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.25"],
  })

  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "92%"])

  return (
    <section
      id="process"
      ref={ref}
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >
      <div className="mb-14 md:mb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-black/50">
          Process
        </p>
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
            style={{ height: lineH, willChange: "height" as any }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 md:left-1/2"
          />
        )}

        {!reduceMotion && (
          <motion.div
            style={{ top: glowY, willChange: "top" as any }}
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
                className={`relative flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
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
                    whileHover={reduceMotion ? undefined : { y: -2 }}
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

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-black/60 leading-relaxed">
                      {s.text}
                    </p>

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

/* =========================
   CTA FINAL
========================= */
function FinalCTA() {
  return (
    <section id="contact" className="relative bg-black py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-[-80px] h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Parlons de votre prochain contenu
        </h2>
        <p className="mt-6 text-white/65">On transforme une idée en vidéo qui performe.</p>

        <Button
          className="mt-10 rounded-full px-10 bg-white text-black hover:bg-white/90"
          onClick={() => {
            window.location.href = "/contact"
          }}
        >
          Prendre rendez-vous
        </Button>

        <p className="mt-5 text-xs text-white/40">Réponse sous 24–48h.</p>
      </div>
    </section>
  )
}