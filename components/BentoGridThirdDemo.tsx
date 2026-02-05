"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function BentoGridThirdDemo() {
  return (
    <>
     <section className=" py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-[-5%] max-w-2xl">
          <p className="mb-2 text-sm text-gray-500">Nos projets</p>
          <h1 className="mb-6 text-6xl text-black font-bold">
            L’ensemble de nos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-[#2e8a96]">
              réalisations
            </span>
          </h1>
          <p className="text-gray-600">
            Découvrez les projets que nous avons accompagnés, tous secteurs
            confondus, avec une approche créative et orientée performance.
          </p>
        </div>
        </div>

      </ section>

    <BentoGrid className="max-w-4xl mx-auto mb-7 mt-7 md:auto-rows-[20rem]">
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
    </BentoGrid></>
  );
}

/**
 * 1) EXPERTISE
 * -> on garde TES animations (variants + hover "animate")
 * -> on change juste le contenu pour refléter "expertise sectorielle"
 */
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  const chipsA = ["Santé", "Tech", "Immobilier"];
  const chipsB = ["Retail", "Industrie"];

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
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
  );
};

/**
 * 2) QUALITÉ ULTRA HD
 * -> on garde TES animations (variants width + hover)
 * -> on change juste l'intention visuelle: "pipeline" + barres dynamiques
 */
const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.2 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };

  const steps = ["Tournage", "Montage", "Étalonnage", "Diffusion", "Qualité", "Livraison"];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-2"
    >
      {steps.map((label, i) => (
        <div key={label} className="flex items-center gap-2">
          <span className="text-[10px] w-16 text-neutral-500 dark:text-neutral-400">
            {label}
          </span>
          <motion.div
            key={"skeleton-two-" + i}
            variants={variants}
            style={{
              // eslint-disable-next-line react-hooks/purity
              maxWidth: Math.random() * (100 - 55) + 55 + "%",
            }}
            className="flex-1 rounded-full border border-neutral-100 dark:border-white/[0.2] bg-neutral-100 dark:bg-black w-full h-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/25 via-sky-400/10 to-transparent" />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

/**
 * 3) MAÎTRISE DES COÛTS
 * -> on garde TES animations (backgroundPosition qui boucle)
 * -> on change juste le "fond" + overlay texte "budget / abonnement / ROI"
 */
const SkeletonThree = () => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };

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
  );
};

/**
 * 4) ACCOMPAGNEMENT
 * -> on garde TES animations (first/second x+rotate)
 * -> on remplace les cards + textes + badges
 */
const SkeletonFour = () => {
  const first = {
    initial: { x: 20, rotate: -5 },
    hover: { x: 0, rotate: 0 },
  };
  const second = {
    initial: { x: -20, rotate: 5 },
    hover: { x: 0, rotate: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 p-2"
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
  );
};

/**
 * 5) VISIBILITÉ & NOTORIÉTÉ
 * -> on garde TES animations (variants + variantsSecond, même structure "chat")
 * -> on change les textes pour "campagnes, online, villes, objectifs"
 */
const SkeletonFive = () => {
  const variants = {
    initial: { x: 0 },
    animate: {
      x: 10,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: {
      x: -10,
      rotate: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
      >
        <div className="rounded-full h-10 w-10 bg-gradient-to-r from-emerald-500 to-teal-500 shrink-0" />
        <div className="flex flex-col gap-2">
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            Campagnes publicitaires multi-canal pour booster votre visibilité.
          </p>
          <div className="flex gap-1 flex-wrap">
            {["Online", "Villes", "Ciblage"].map((t) => (
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
  );
};

const items = [
  {
    title: "Expertise",
    description: (
      <span className="text-sm">
        Avec une approche expertise sectorielle, nous réalisons des vidéos
        engageantes intégrant parfaitement les codes de chaque secteur d’activité.
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
        Un système de production vidéo sur-mesure garantissant de magnifiques
        vidéos, diffusée à grande échelle, tout le temps&nbsp;!
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
        Des tarifs maîtrisés permettant d’intégrer la vidéo et la diffusion de
        façon récurrente à votre stratégie de communication.
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
        Bénéficiez de l’accompagnement d’un chef de projet vidéo dédié et d’un
        responsable marketing du début à la fin de votre projet.
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
        Bénéficiez de nos campagnes publicitaires pour être visible partout en
        ligne et partout dans les villes pour atteindre vos objectifs.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
