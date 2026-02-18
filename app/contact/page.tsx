"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useId, useState } from "react"

export default function ContactPage() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND (plus proche de ta DA #2e8a96) */}
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

        {/* grain / grid subtil */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </motion.div>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32 grid gap-14 lg:gap-20 lg:grid-cols-2 items-start">
        <LeftEditorial />
        <ContactForm />
      </section>
    </main>
  )
}

/* =========================
   LEFT – EDITORIAL
========================= */
function LeftEditorial() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="lg:pt-6"
    >
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-[#2e8a96]" />
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">Contact</p>
      </div>

      <h1 className="text-[clamp(44px,6vw,86px)] font-black leading-[0.9] tracking-tight">
        Parlons
        <br />
        de votre
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2e8a96] to-white/70">
          prochain projet
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-base md:text-lg text-white/65 leading-relaxed">
        Un besoin, une idée, un lancement. On transforme ça en contenus{" "}
        <span className="text-white font-semibold">beaux</span> et{" "}
        <span className="text-white font-semibold">efficaces</span> :
        stratégie, production, déclinaisons.
      </p>

      {/* mini “preuves” */}
      <div className="mt-10 grid grid-cols-2 gap-4 max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Basés à</p>
          <p className="mt-1 text-sm font-semibold">Rouen</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-white/50">Délai</p>
          <p className="mt-1 text-sm font-semibold">24–48h</p>
        </div>
      </div>

      <div className="mt-10 text-sm text-white/45">
        Disponible partout en France — déplacements possibles selon projet.
      </div>
    </motion.div>
  )
}

/* =========================
   FORM
========================= */
function ContactForm() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.form
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      className="relative rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-7 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
    >
      {/* accent top */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#2e8a96]/60 to-transparent" />

      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-white/55">Formulaire</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
          Dites-nous ce que vous voulez{" "}
          <span className="text-[#2e8a96]">obtenir</span>.
        </h2>
        <p className="mt-2 text-sm text-white/55">
          Plus le brief est clair, plus on répond vite et bien.
        </p>
      </div>

      <div className="space-y-8">
        <FloatingInput label="Nom" name="name" />
        <FloatingInput label="Email" name="email" type="email" />
        <FloatingInput label="Entreprise (optionnel)" name="company" />
        <FloatingTextarea label="Parlez-nous de votre projet" name="message" />

        <motion.div whileHover={reduceMotion ? undefined : { y: -1 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full rounded-full py-6 text-base bg-[#2e8a96] hover:bg-[#2e8a96]/90 border-none">
            Envoyer le message
          </Button>
        </motion.div>
      </div>

      {/* hint */}
      <p className="mt-7 text-center text-xs text-white/45">
        Réponse sous 24–48h. Si on n’est pas le bon fit, on te le dit.
      </p>
    </motion.form>
  )
}

/* =========================
   INPUTS – FLOATING (fix label + accessibilité)
========================= */
function FloatingInput({
  label,
  name,
  type = "text",
}: {
  label: string
  name: string
  type?: string
}) {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const id = useId()

  const raised = focus || value.length > 0

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={[
          "absolute left-4 z-10 px-1 transition-all pointer-events-none",
          raised
            ? "-top-2 text-xs text-[#2e8a96] bg-black"
            : "top-1/2 -translate-y-1/2 text-white/45",
        ].join(" ")}
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        autoComplete={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-4 text-white outline-none transition focus:border-[#2e8a96] placeholder:text-white/35"
        placeholder={raised ? "" : " "}
      />
    </div>
  )
}

function FloatingTextarea({ label, name }: { label: string; name: string }) {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const id = useId()

  const raised = focus || value.length > 0

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={[
          "absolute left-4 z-10 px-1 transition-all pointer-events-none",
          raised ? "-top-2 text-xs text-[#2e8a96] bg-black" : "top-6 text-white/45",
        ].join(" ")}
      >
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        rows={6}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-6 text-white outline-none transition focus:border-[#2e8a96] resize-none"
        placeholder={raised ? "" : " "}
      />
    </div>
  )
}
