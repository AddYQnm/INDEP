"use client"

import { motion, useReducedMotion } from "framer-motion"

type Item = {
  k: string
  tag: string
  title: string
  line: string
  chips: readonly string[]
}

export default function FaitPourVousCards({ items }: { items: readonly Item[] }) {
  const reduceMotion = useReducedMotion()

  return (
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
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(600px circle at 20% 0%, rgba(46,138,150,0.22), transparent 40%), radial-gradient(600px circle at 100% 60%, rgba(0,0,0,0.10), transparent 35%)",
            }}
          />

          <div className="relative flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold tracking-[0.28em] text-black/45">{it.tag}</div>
              <div className="mt-3 text-2xl font-semibold tracking-tight">{it.title}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/60 px-3 py-2 text-sm font-semibold text-black/50">
              {it.k}
            </div>
          </div>

          <p className="relative mt-4 text-sm leading-relaxed text-black/70">{it.line}</p>

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

          <div className="relative mt-8 h-px w-full bg-black/10">
            <div className="h-px w-24 bg-gradient-to-r from-[#2e8a96] to-transparent" />
          </div>

          <div className="pointer-events-none absolute inset-0 transition-transform duration-500 group-hover:-translate-y-0.5" />
        </motion.article>
      ))}
    </div>
  )
}