/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useId, useState } from "react"

export default function ContactForm() {
  const reduceMotion = useReducedMotion()

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

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
        <FloatingInput
          label="Nom"
          name="name"
          autoComplete="name"
          value={name}
          onChange={setName}
        />
        <FloatingInput
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={setEmail}
        />
        <FloatingInput
          label="Entreprise (optionnel)"
          name="company"
          autoComplete="organization"
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

        <motion.div whileHover={reduceMotion ? undefined : { y: -1 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
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

function FloatingInput({
  label,
  name,
  type = "text",
  inputMode,
  autoComplete,
  value,
  onChange,
}: {
  label: string
  name: string
  type?: string
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"]
  autoComplete?: string
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
        inputMode={inputMode}
        autoComplete={autoComplete}
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