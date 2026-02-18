"use client"

import { cn } from "@/lib/utils"
import React, { useMemo } from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"
import { motion } from "motion/react"

export function BentoGridThirdDemo() {
  return (
    <section className="relative overflow-hidden bg-white text-black py-24 md:py-32">
      {/* background premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.22),transparent_60%)]" />
        <div className="absolute bottom-0 left-1/2 h-[220px] w-[min(1100px,92vw)] -translate-x-1/2 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-black/50">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
            NOTRE MÉTHODE
          </p>

          <h2 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            Découvrez notre mode{" "}
            <span className="text-[#2e8a96]">de fonctionnement</span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-black/65 leading-relaxed">
            Une méthode simple : stratégie claire, production premium, diffusion
            orientée performance. On avance vite, proprement, avec du résultat.
          </p>
        </div>

        {/* Bento */}
        <div className="mt-14">
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn("[&>p:text-lg]", item.className)}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

/**
 * 1) EXPERTISE
 */
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  }
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  }

  const chipsA = ["Santé", "Tech", "Immobilier"]
  const chipsB = ["Retail", "Industrie"]

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="flex flex-wrap gap-1 w-full">
          {chipsA.map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="flex flex-wrap gap-1 w-full justify-end">
          {chipsB.map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>

      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-emerald-400/30 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  )
}

/**
 * 2) QUALITÉ ULTRA HD
 * ✅ Fix perf : pas de Math.random() dans le render (valeurs stables)
 */
const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  }

  const steps = ["Tournage", "Montage", "Étalonnage", "Diffusion", "Qualité", "Livraison"]

  // ✅ widths stables (évite re-render jitter)
  const widths = useMemo(() => {
    // 6 valeurs “random” mais stables
    return steps.map((_, i) => {
      const base = 65 + (i * 7) // 65..100 approximatif
      const capped = Math.min(92, base)
      return `${capped}%`
    })
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2 p-2"
    >
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <span className="text-[10px] w-16 text-neutral-500 dark:text-neutral-400">
            {label}
          </span>

          <motion.div
            variants={variants}
            style={{ maxWidth: widths[i] }}
            className="flex-1 rounded-full border border-neutral-100 dark:border-white/[0.2] bg-neutral-100 dark:bg-black w-full h-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/25 via-sky-400/10 to-transparent" />
          </motion.div>
        </div>
      ))}
    </motion.div>
  )
}

/**
 * 3) MAÎTRISE DES COÛTS
 */
const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0 50%", "100% 50%", "0 50%"] },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col"
      style={{
        background: "linear-gradient(-45deg, #0ea5e9, #22c55e, #a855f7, #f97316)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="h-full w-full rounded-lg p-4 flex flex-col justify-end">
        <div className="flex flex-wrap gap-2">
          {["Tarifs maîtrisés", "Récurrence", "ROI"].map((t) => (
            <span
              key={t}
              className="px-2 py-1 rounded-full text-[10px] font-semibold bg-white/80 dark:bg-black/60 text-neutral-700 dark:text-neutral-200 border border-white/40 dark:border-white/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 4) ACCOMPAGNEMENT
 */
const SkeletonFour = () => {
  const first = { initial: { x: 20, rotate: -5 }, hover: { x: 0, rotate: 0 } }
  const second = { initial: { x: -20, rotate: 5 }, hover: { x: 0, rotate: 0 } }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-row space-x-2 p-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-sky-500 to-indigo-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-600 dark:text-neutral-300 mt-4">
          Chef de projet dédié
        </p>
        <p className="border border-sky-500 bg-sky-100 dark:bg-sky-900/20 text-sky-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Suivi
        </p>
      </motion.div>

      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-pink-500 to-violet-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-600 dark:text-neutral-300 mt-4">
          Production & réalisation
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Créa
        </p>
      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-amber-500 to-orange-500" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-600 dark:text-neutral-300 mt-4">
          Marketing & diffusion
        </p>
        <p className="border border-amber-500 bg-amber-100 dark:bg-amber-900/20 text-amber-700 text-xs rounded-full px-2 py-0.5 mt-4">
          Stratégie
        </p>
      </motion.div>
    </motion.div>
  )
}

/**
 * 5) VISIBILITÉ & NOTORIÉTÉ
 */
const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  }
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-emerald-500 to-teal-500 shrink-0" />
        <div className="flex flex-col gap-2">
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            Campagnes multi-canal pour booster votre visibilité là où votre audience est active.
          </p>
          <div className="flex gap-1 flex-wrap">
            {["Online", "Local", "Ciblage"].map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-600 dark:text-neutral-300">
          Objectifs atteints ✅
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shrink-0" />
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: "Expertise",
    description: (
      <span className="text-sm">
        Nous adaptons les codes créatifs à votre secteur pour des vidéos engageantes et pertinentes.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Qualité Ultra HD",
    description: (
      <span className="text-sm">
        Un pipeline de production éprouvé : tournage, montage, étalonnage, livrables prêts à diffuser.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Maîtrise des coûts",
    description: (
      <span className="text-sm">
        Des tarifs maîtrisés et une logique récurrente pour intégrer la vidéo durablement à votre stratégie.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Accompagnement",
    description: (
      <span className="text-sm">
        Un chef de projet dédié + un responsable marketing pour cadrer, produire et délivrer vite.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Visibilité & notoriété",
    description: (
      <span className="text-sm">
        Des campagnes pour être visible partout où compte votre audience — online et localement.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
]
