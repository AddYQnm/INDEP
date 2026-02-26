"use client"

import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion, useReducedMotion } from "framer-motion"

// ✅ Déclarer le dynamic import EN DEHORS du composant
const VideoSlider = dynamic(() => import("@/components/VideoSlider"), {
  ssr: false,
  loading: () => (
    <div className="h-[520px] w-full max-w-5xl rounded-3xl bg-black/5" />
  ),
})

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
      {/* background + déco */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_55%)]" />
        <div className="absolute -top-10 left-[8%] h-[420px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_55%)]" />
        <div className="absolute top-10 right-[10%] h-[380px] w-[520px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.16),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

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
            <Button asChild className="rounded-full px-10 py-6 text-sm">
              <a href="#process">Voir les offres</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full px-10 bg-white text-black hover:bg-gray-100 py-6 text-sm border-black/15"
            >
              <a href="#contact">Prendre rendez-vous</a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-black/45">
            Réponse sous 24–48h. Si on n’est pas le bon fit, on te le dit.
          </p>
        </div>

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
              On pense <span className="text-black font-medium">usage</span> avant volume.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 flex justify-center px-6 min-h-[520px] mt-12">
        <VideoSlider />
      </div>
    </section>
  )
}