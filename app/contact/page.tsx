/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useId, useState } from "react"

export default function ContactPage() {
  const reduceMotion = useReducedMotion()

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
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
        <span className="text-white font-semibold">efficaces</span> : stratégie,
        production, déclinaisons.
      </p>

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
   FORM (fonctionnel : submit + validations + feedback)
========================= */
function ContactForm() {
  const reduceMotion = useReducedMotion()

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

  // champs contrôlés (plus simple pour envoyer)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  const validate = () => {
    const n = name.trim()
    const e = email.trim()
    const m = message.trim()

    if (!n) return "Veuillez renseigner votre nom."
    if (!e) return "Veuillez renseigner votre email."
    // validation email simple
    if (!/^\S+@\S+\.\S+$/.test(e)) return "Email invalide."
    if (m.length < 10) return "Votre message est trop court (10 caractères min)."
    return null
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const err = validate()
    if (err) {
      setStatus("error")
      setErrorMsg(err)
      return
    }

    setStatus("loading")
    setErrorMsg("")

    try {
      // ✅ OPTION A (recommandé) : tu crées une route /api/contact (je te donne le code plus bas)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          message: message.trim(),
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error ?? "Impossible d’envoyer le message.")
      }

      setStatus("success")
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err?.message ?? "Erreur inconnue.")
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      className="relative rounded-3xl bg-white/[0.06] backdrop-blur-xl border border-white/10 p-7 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#2e8a96]/60 to-transparent" />

      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-white/55">Formulaire</p>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
          Dites-nous ce que vous voulez <span className="text-[#2e8a96]">obtenir</span>.
        </h2>
        <p className="mt-2 text-sm text-white/55">
          Plus le brief est clair, plus on répond vite et bien.
        </p>
      </div>

      <div className="space-y-8">
        <FloatingInput label="Nom" name="name" value={name} onChange={setName} />
        <FloatingInput label="Email" name="email" type="email" value={email} onChange={setEmail} />
        <FloatingInput
          label="Entreprise (optionnel)"
          name="company"
          value={company}
          onChange={setCompany}
        />
        <FloatingTextarea
          label="Parlez-nous de votre projet"
          name="message"
          value={message}
          onChange={setMessage}
        />

        {status === "error" && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {errorMsg}
          </div>
        )}

        {status === "success" && (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            Message envoyé ✅ On revient vers vous sous 24–48h.
          </div>
        )}

        <motion.div
          whileHover={reduceMotion ? undefined : { y: -1 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full py-6 text-base bg-[#2e8a96] hover:bg-[#2e8a96]/90 border-none disabled:opacity-60"
          >
            {status === "loading" ? "Envoi..." : "Envoyer le message"}
          </Button>
        </motion.div>
      </div>

      <p className="mt-7 text-center text-xs text-white/45">
        Réponse sous 24–48h. Si on n’est pas le bon fit, on te le dit.
      </p>
    </motion.form>
  )
}

/* =========================
   INPUTS – FLOATING (contrôlés + label stable)
========================= */
function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
}: {
  label: string
  name: string
  type?: string
  value: string
  onChange: (v: string) => void
}) {
  const [focus, setFocus] = useState(false)
  const id = useId()

  const raised = focus || value.length > 0

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={[
          "absolute left-4 z-10 px-1 transition-all pointer-events-none",
          raised ? "-top-2 text-xs text-[#2e8a96] bg-black" : "top-1/2 -translate-y-1/2 text-white/45",
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
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-4 text-white outline-none transition focus:border-[#2e8a96] placeholder:text-white/35"
        placeholder={raised ? "" : " "}
      />
    </div>
  )
}

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
}: {
  label: string
  name: string
  value: string
  onChange: (v: string) => void
}) {
  const [focus, setFocus] = useState(false)
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
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-2xl bg-black/30 border border-white/10 px-4 py-6 text-white outline-none transition focus:border-[#2e8a96] resize-none"
        placeholder={raised ? "" : " "}
      />
    </div>
  )
}