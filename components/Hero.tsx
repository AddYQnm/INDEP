"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export default function Hero() {
  const poster = "/hero/poster.jpg"

  const mediaRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const rafRef = useRef<number | null>(null)
  const currentY = useRef(0)
  const targetY = useRef(0)

  useEffect(() => {
    const el = mediaRef.current
    if (!el) return

    // ✅ helper: applique la transform sans setState (pas de re-render)
    const applyTransform = (y: number) => {
      el.style.setProperty("--parallax-y", `${y.toFixed(2)}px`)
    }

    const updateTarget = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight

      const progress = (vh - rect.top) / (vh + rect.height)
      const t = clamp(progress, 0, 1)

      targetY.current = (t - 0.5) * 80 // -40..+40
    }

    // ✅ RAF “intelligent” : tourne seulement le temps d’atteindre la cible
    const tick = () => {
      const next = currentY.current + (targetY.current - currentY.current) * 0.10
      currentY.current = next
      applyTransform(next)

      // stop quand c’est quasi stable
      if (Math.abs(targetY.current - currentY.current) < 0.1) {
        rafRef.current = null
        return
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    const requestTick = () => {
      updateTarget()
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick)
    }

    // ✅ 1) Parallax : on déclenche sur scroll/resize (pas en boucle infinie)
    requestTick()
    window.addEventListener("scroll", requestTick, { passive: true })
    window.addEventListener("resize", requestTick)

    // ✅ 2) Vidéo : play/pause quand visible (énorme gain mobile)
    const v = videoRef.current
    let io: IntersectionObserver | null = null

    if (v) {
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting
          if (!visible) {
            v.pause()
          } else {
            // play peut échouer (policy), on ignore
            v.play().catch(() => {})
          }
        },
        { rootMargin: "200px" }
      )
      io.observe(el)
    }

    return () => {
      window.removeEventListener("scroll", requestTick)
      window.removeEventListener("resize", requestTick)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (io) io.disconnect()
    }
  }, [])

  return (
    <section className="relative px-4 pt-12 pb-12 overflow-hidden">
      {/* BACKGROUND IMMERSIF */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute top-0 left-[8%] h-[420px] w-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_55%)]" />
        <div className="absolute top-16 right-[10%] h-[380px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </div>

      <div className="relative mx-auto w-full max-w-[1100px]">
        {/* TOP BAR */}

        {/* TITRE */}
        <h1 className="mt-10 text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.03em] font-bold animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/60">
            Independant
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40">
            Studio
          </span>
        </h1>

        {/* TEXTE + CTA */}
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          <div className="max-w-[580px]">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              AGENCE MARKETING & CRÉATION DE CONTENUS basée à Rouen. Stratégie,
              Production vidéos et photos, gestion des réseaux sociaux, Publicité.
              NOUS SOMMES VOTRE PARTENAIRE DE CROISSANCE DIGITAL EN NORMANDIE
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md transition"
              >
                Démarrer un projet
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-background/45 transition"
              >
                À propos
              </a>

              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                <span>Branding</span>
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                <span>Web</span>
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
                <span>Digital</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-border/60 bg-background/30 px-4 py-3 backdrop-blur">
              <div className="text-xs font-bold tracking-[0.18em]">BASÉ À</div>
              <div className="mt-1 text-sm font-semibold">Rouen</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/30 px-4 py-3 backdrop-blur">
              <div className="text-xs font-bold tracking-[0.18em]">PROJETS</div>
              <div className="mt-1 text-sm font-semibold">200+</div>
            </div>
          </div>
        </div>

        {/* VIDEO PARALLAX */}
        <div
          ref={mediaRef}
          className="mt-10 relative h-[clamp(260px,38vw,520px)] w-full rounded-3xl border border-border/70 overflow-hidden bg-black animate-in fade-in zoom-in-95 duration-700 delay-500"
        >
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: "translateY(var(--parallax-y, 0px)) scale(1.10)",
            }}
          >
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster={poster}
            >
              <source
                src="https://res.cloudinary.com/dba299maa/video/upload/3_s5r0qc.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/dba299maa/video/upload/3_s5r0qc.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -inset-[40%] bg-[conic-gradient(from_180deg_at_50%_50%,transparent,rgba(255,255,255,0.10),transparent)] blur-2xl animate-[spin_9s_linear_infinite]" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20" />
          <div className="absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2260%22 height=%2260%22 filter=%22url(%23n)%22 opacity=%220.4%22/></svg>')]" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.18em] opacity-80 text-white">
                SHOWREEL
              </div>
              <div className="mt-1 text-lg md:text-xl font-semibold text-white">
                Expériences digitales — made in Rouen.
              </div>
            </div>
            <div className="hidden md:inline-flex items-center gap-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-white/40" />
              Scroll
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
