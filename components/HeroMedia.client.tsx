"use client"

import { useEffect, useRef, useState } from "react"

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

const YOUTUBE_ID = "K1iTABNOuaU"

export default function HeroMedia({ poster }: { poster: string }) {
  const mediaRef = useRef<HTMLDivElement | null>(null)

  const [videoReady, setVideoReady] = useState(false)

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

    const onScroll = () => {
      updateTarget()
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={mediaRef}
      className="mt-10 relative h-[clamp(260px,38vw,520px)] w-full rounded-3xl overflow-hidden bg-black"
    >
      {/* PARALLAX */}
      <div
        className="absolute inset-0 will-change-transform transform-gpu"
        style={{ transform: "translateY(var(--parallax-y, 0px)) scale(1.1)" }}
      >
        <div className="relative h-full w-full bg-black">

          {/* POSTER instant */}
          <img
            src={poster}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* YOUTUBE (chargement progressif) */}
                    <video
            className={`absolute left-1/2 top-1/2 h-[140%] w-[140%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            src="https://res.cloudinary.com/dnsdrqzi3/video/upload/v1774465094/independant_obnt62.mov"
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoReady(true)}
          />
        </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* content */}
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <div>
          <div className="text-xs font-bold tracking-[0.18em] text-white/80">
            SHOWREEL
          </div>
          <div className="mt-1 text-lg md:text-xl font-semibold text-white">
            Expériences digitales — made in Rouen.
          </div>
        </div>
      </div>
    </div>
  )
}