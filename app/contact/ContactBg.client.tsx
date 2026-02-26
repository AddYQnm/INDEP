"use client"

import { motion, useReducedMotion } from "framer-motion"

export default function ContactBg() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0"
      aria-hidden="true"
    >
      <div className="absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full bg-[#2e8a96]/25 blur-[120px]" />
      <div className="absolute bottom-0 right-[-80px] h-[560px] w-[560px] rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute top-20 right-[8%] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[140px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
    </motion.div>
  )
}