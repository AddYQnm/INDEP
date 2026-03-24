"use client"

import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"

// Lazy load (perf)
const VideoSliderClient = dynamic(() => import("./VideoSlider"), {
  ssr: false,
})

// Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function SurMesureSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* Background optimisé */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.25),transparent_60%)]" />
        <div className="absolute bottom-0 left-1/2 h-[180px] w-[min(900px,92vw)] -translate-x-1/2 rounded-full blur-2xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.22),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-12 items-end"
        >
          <div className="lg:col-span-7">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              SUR-MESURE
            </motion.div>

            <motion.h2
              variants={item}
              className="mt-5 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]"
            >
              Des contenus{" "}
              <span className="text-[#2e8a96]">pensés</span> pour convertir.
            </motion.h2>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-black/70"
            >
              On adapte la stratégie et la production à ton business, ton audience et ton
              objectif. Pas de contenu “joli pour joli” : du contenu utile, performant,
              et scalable.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button className="rounded-full transition-transform duration-300 hover:scale-105 active:scale-95">
                <a href="/contact">Prendre rendez-vous</a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-black/20 text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95"
              >
                <a href="#works">Voir des réalisations</a>
              </Button>

              <p className="text-xs text-black/45 ml-1">
                Réponse sous 24–48h.
              </p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-5">
            <motion.div
              variants={container}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
            >
              <motion.div
                variants={item}
                className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-xs font-bold tracking-[0.28em] text-black/45">
                  STRATÉGIE
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight">
                  Angles & messages
                </div>
                <p className="mt-2 text-sm text-black/65 leading-relaxed">
                  Hooks, offres, structure de vidéos, scripts — alignés sur ton funnel.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Positionnement</Chip>
                  <Chip>Copy</Chip>
                  <Chip>Scripts</Chip>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-xs font-bold tracking-[0.28em] text-black/45">
                  PRODUCTION
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight">
                  Vidéos & photos
                </div>
                <p className="mt-2 text-sm text-black/65 leading-relaxed">
                  Captation, montage, déclinaisons ads, formats réseaux — prêts à publier.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>UGC premium</Chip>
                  <Chip>Shooting</Chip>
                  <Chip>Montage</Chip>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-black/10" />

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-black/45">
                EXTRAITS
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                Quelques formats que l’on produit
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-black/60">
              <span className="h-2 w-2 rounded-full bg-[#2e8a96]/60" />
              Faites glisser
            </div>
          </div>

          <div className="relative mt-8 lg:pl-[calc((100vw-80rem)/2)] will-change-transform">
            <VideoSliderClient />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65 transition duration-300 hover:bg-black hover:text-white">
      {children}
    </span>
  )
}