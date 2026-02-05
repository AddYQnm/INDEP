"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND MOTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-pink-500/30 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]" />
      </motion.div>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-32 grid gap-20 lg:grid-cols-2">
        <LeftEditorial />
        <ContactForm />
      </section>
    </main>
  );
}

/* =========================
   LEFT – EDITORIAL
========================= */
function LeftEditorial() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gray-400">
        Contact
      </p>

      <h1 className="text-[clamp(3rem,6vw,6rem)] font-black leading-[0.9]">
        Parlons
        <br />
        de votre
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          prochaine idée
        </span>
      </h1>

      <p className="mt-10 max-w-md text-lg text-gray-300">
        Un projet, une envie, une intuition.
        <br />
        On transforme ça en vidéos qui
        <span className="text-white font-medium"> marquent</span>.
      </p>

      <div className="mt-16 text-sm text-gray-400">
        Basés à Paris — disponibles partout.
      </div>
    </motion.div>
  );
}

/* =========================
   FORM
========================= */
function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      className="relative rounded-sm bg-white/5 backdrop-blur-xl border border-white/10 p-10 shadow-2xl"
    >
      <div className="space-y-10">
        <FloatingInput label="Nom" />
        <FloatingInput label="Email" />
        <FloatingInput label="Entreprise (optionnel)" />
        <FloatingTextarea label="Parlez-nous de votre projet" />

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button className="w-full rounded-full py-6 text-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 border-none">
            Envoyer le message
          </Button>
        </motion.div>
      </div>

      {/* hint */}
      <p className="mt-8 text-center text-xs text-gray-400">
        Réponse sous 24–48h. Toujours.
      </p>
    </motion.form>
  );
}

/* =========================
   INPUTS – FLOATING
========================= */
function FloatingInput({ label }: { label: string }) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all pointer-events-none ${
          focus || value
            ? "-top-3 text-xs text-pink-400"
            : "top-1/2 -translate-y-1/2 text-gray-400"
        }`}
      >
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-sm bg-black/30 border border-white/10 px-4 py-4 text-white outline-none focus:border-pink-500 transition"
      />
    </div>
  );
}

function FloatingTextarea({ label }: { label: string }) {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <label
        className={`absolute left-4 transition-all pointer-events-none ${
          focus || value
            ? "-top-3 text-xs text-pink-400"
            : "top-6 text-gray-400"
        }`}
      >
        {label}
      </label>

      <textarea
        rows={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-6 text-white outline-none focus:border-pink-500 transition resize-none"
      />
    </div>
  );
}
