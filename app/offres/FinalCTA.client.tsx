"use client"

import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-black py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-[-80px] h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Parlons de votre prochain contenu
        </h2>
        <p className="mt-6 text-white/65">On transforme une idée en vidéo qui performe.</p>

        <Button asChild className="mt-10 rounded-full px-10 bg-white text-black hover:bg-white/90">
          <a href="/contact">Prendre rendez-vous</a>
        </Button>

        <p className="mt-5 text-xs text-white/40">Réponse sous 24–48h.</p>
      </div>
    </section>
  )
}