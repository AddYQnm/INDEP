"use client"

import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import { useMemo } from "react"

type Item = {
  k: string
  tag: string
  title: string
  line: string
  chips: string[]
}

export default function FaitPourVousSection() {
  const reduceMotion = useReducedMotion()

  const items: Item[] = useMemo(
    () => [
      {
        k: "01",
        tag: "STRATÉGIE",
        title: "Marketing",
        line: "Positionnement, message, offers, contenu : on construit un système qui attire et convertit.",
        chips: ["Stratégie", "Copywriting", "Social media", "Tunnel"],
      },
      {
        k: "02",
        tag: "CRÉATION",
        title: "Production",
        line: "Des visuels et vidéos qui captent l’attention, crédibilisent et donnent envie d’acheter.",
        chips: ["UGC premium", "Shooting", "Montage", "Motion"],
      },
      {
        k: "03",
        tag: "SCALING",
        title: "Publicité",
        line: "On transforme tes assets en résultats : tests, itérations et campagnes pensées pour scaler.",
        chips: ["Meta Ads", "Créa ads", "A/B tests", "Optimisation"],
      },
    ],
    []
  )

  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Background (nouveau look) */}
      <div className="pointer-events-none absolute inset-0">
        {/* halo */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.25),transparent_60%)]" />
        <div className="absolute top-24 left-[8%] h-[360px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10),transparent_60%)]" />
        <div className="absolute top-24 right-[10%] h-[360px] w-[520px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.18),transparent_65%)]" />

        {/* grid subtle */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        {/* Header (nouveau) */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              NOTRE MÉTHODE
            </div>

            <h2 className="mt-5 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Marketing.{" "}
              <span className="text-[#2e8a96]">Production.</span>{" "}
              Publicité.
            </h2>

            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-black/70">
              Une seule équipe pour{" "}
              <span className="text-black font-semibold">penser</span>,{" "}
              <span className="text-black font-semibold">créer</span> et{" "}
              <span className="text-black font-semibold">scaler</span>.
              Des contenus premium + une stratégie claire + des campagnes qui performent.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild className="rounded-full">
                <a href="#contact">Prendre rendez-vous</a>
              </Button>

              <Button
                variant="outline"
                className="rounded-full border-black/20 text-black hover:bg-black hover:text-white transition"
                onClick={() => {
                  const el = document.getElementById("contact")
                  el?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Voir contact
              </Button>
            </div>
            <p className="mt-3 text-xs text-black/45 lg:text-right">
              Réponse sous 24–48h.
            </p>
          </div>
        </div>

        {/* Cards (nouveau design) */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.k}
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur"
            >
              {/* Accent gradient */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at 20% 0%, rgba(46,138,150,0.22), transparent 40%), radial-gradient(600px circle at 100% 60%, rgba(0,0,0,0.10), transparent 35%)",
                }}
              />

              {/* top */}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold tracking-[0.28em] text-black/45">
                    {it.tag}
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-tight">
                    {it.title}
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/60 px-3 py-2 text-sm font-semibold text-black/50">
                  {it.k}
                </div>
              </div>

              <p className="relative mt-4 text-sm leading-relaxed text-black/70">
                {it.line}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {it.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65"
                  >
                    {c}
                  </span>
                ))}
              </div>

              {/* bottom line */}
              <div className="relative mt-8 h-px w-full bg-black/10">
                <div className="h-px w-24 bg-gradient-to-r from-[#2e8a96] to-transparent" />
              </div>

              {/* subtle hover lift */}
              <div className="pointer-events-none absolute inset-0 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
