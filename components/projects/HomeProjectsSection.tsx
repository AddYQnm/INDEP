"use client"

import Image from "next/image"
import Link from "next/link"
import { projects } from "./projects"
import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function HomeProjectsSection() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <section className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-black/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              NOS PROJETS
            </p>

            <h2 className="text-[clamp(30px,6vw,56px)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Quelques <span className="text-[#2e8a96]">réalisations</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-black/60">
              Des contenus pensés pour performer : créativité, production et exécution.
            </p>
          </div>

          <Link
            href="/projets"
            className="group inline-flex w-full items-center justify-between gap-2 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-black/70 shadow-sm transition-all duration-300 hover:text-black hover:shadow-md sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none"
          >
            Voir tous les projets
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {featuredProjects.map((project, idx) => (
            <motion.div key={project.id} variants={item}>
              <Link
                href="/projets"
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={idx < 2}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.08]"
                />

                {/* overlay base */}
                <div className="absolute inset-0 bg-black/10 sm:bg-black/5" />

                {/* overlay gradient smooth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 sm:opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-white/70">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-base sm:text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* badge */}
                <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/80 backdrop-blur transition duration-300 group-hover:scale-105">
                  {project.category}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}