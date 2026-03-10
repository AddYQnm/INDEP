"use client"

import { useEffect, useRef } from "react"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

const YOUTUBE_ID = "K1iTABNOuaU"

export default function HeroMedia({ poster }: { poster: string }) {
  const mediaRef = useRef<HTMLDivElement | null>(null)

  const rafRef = useRef<number | null>(null)
  const currentY = useRef(0)
  const targetY = useRef(0)

  useEffect(() => {
    const el = mediaRef.current
    if (!el) return

    const applyTransform = (y: number) => {
      el.style.setProperty("--parallax-y", `${y.toFixed(2)}px`)
    }

    const updateTarget = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = (vh - rect.top) / (vh + rect.height)
      const t = clamp(progress, 0, 1)
      targetY.current = (t - 0.5) * 80
    }

    const tick = () => {
      const next = currentY.current + (targetY.current - currentY.current) * 0.1
      currentY.current = next
      applyTransform(next)

      if (Math.abs(targetY.current - currentY.current) < 0.1) {
        rafRef.current = null
        return
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    let scrollScheduled = false
    const requestTick = () => {
      if (scrollScheduled) return
      scrollScheduled = true
      requestAnimationFrame(() => {
        scrollScheduled = false
        updateTarget()
        if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick)
      })
    }

    requestTick()
    window.addEventListener("scroll", requestTick, { passive: true })
    window.addEventListener("resize", requestTick)

    return () => {
      window.removeEventListener("scroll", requestTick)
      window.removeEventListener("resize", requestTick)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={mediaRef}
      className="mt-10 relative h-[clamp(260px,38vw,520px)] w-full rounded-3xl border border-border/70 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 will-change-transform transform-gpu"
        style={{ transform: "translateY(var(--parallax-y, 0px)) scale(1.10)" }}
      >
        <div className="relative h-full w-full bg-black">
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <iframe
            className="absolute left-1/2 top-1/2 h-[140%] w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1`}
            title="Showreel video"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        </div>
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
  )
}