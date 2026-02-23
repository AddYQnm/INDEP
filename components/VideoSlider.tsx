"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useRef, useState } from "react"

const videos = [
  {
    src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261634/1_f0juwg.mp4",
    poster: "/hero/poster.jpg",
  },
  {
    src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261694/3_olqt0c.mp4",
    poster: "/hero/poster.jpg",
  },
  {
    src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261741/4_udv562.mp4",
    poster: "/hero/poster.jpg",
  },
]

export default function VideoSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const rootRef = useRef<HTMLDivElement | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [inViewport, setInViewport] = useState(false)

  // Observe le conteneur pour ne jouer que quand visible
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => setInViewport(entries[0]?.isIntersecting ?? false),
      { rootMargin: "0px", threshold: 0.5 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pauseAll = useCallback(() => {
    videoRefs.current.forEach((v) => {
      if (!v) return
      v.pause()
    })
  }, [])

  // Attend canplay + force load() (important quand preload était "none")
  const ensurePlayable = useCallback(async (v: HTMLVideoElement) => {
    v.muted = true
    v.playsInline = true
    v.loop = true

    // Plus stable que jouer au yoyo avec preload
    v.preload = "metadata"
    v.load()

    // Attend que ça puisse jouer (Safari/iOS est capricieux)
    if (v.readyState < 3) {
      await new Promise<void>((resolve) => {
        const onCanPlay = () => resolve()
        v.addEventListener("canplay", onCanPlay, { once: true })
        // filet de sécurité
        setTimeout(resolve, 1500)
      })
    }

    try {
      await v.play()
    } catch {
      // autoplay peut échouer selon device/OS; on ignore
    }
  }, [])

  const playVisible = useCallback(() => {
    if (!emblaApi) return
    const selected = emblaApi.selectedScrollSnap()

    videoRefs.current.forEach((v, idx) => {
      if (!v) return

      if (!inViewport) {
        v.pause()
        return
      }

      // active + suivante (précharge légère)
      const shouldPlay = idx === selected || idx === selected + 1

      if (shouldPlay) {
        void ensurePlayable(v)
      } else {
        v.pause()
        // si tu veux économiser plus: "none"
        // si tu veux plus stable iOS: "metadata"
        v.preload = "none"
      }
    })
  }, [emblaApi, inViewport, ensurePlayable])

  // Embla events: évite "scroll" (trop fréquent), utilise "settle"
  useEffect(() => {
    if (!emblaApi) return

    const onAny = () => requestAnimationFrame(playVisible)
    onAny()

    emblaApi.on("reInit", onAny)
    emblaApi.on("select", onAny)
    emblaApi.on("settle", onAny)

    return () => {
      emblaApi.off("reInit", onAny)
      emblaApi.off("select", onAny)
      emblaApi.off("settle", onAny)
    }
  }, [emblaApi, playVisible])

  // Quand on sort/entre dans le viewport
  useEffect(() => {
    if (!inViewport) pauseAll()
    else playVisible()
  }, [inViewport, pauseAll, playVisible])

  return (
    <div
      ref={(node) => {
        emblaRef(node)
        rootRef.current = node
      }}
      className="overflow-hidden mt-10"
    >
      <div className="flex gap-6">
        {videos.map((v, index) => (
          <VideoItem
            key={v.src}
            src={v.src}
            poster={v.poster}
            setRef={(el) => {
              videoRefs.current[index] = el
            }}
          />
        ))}
      </div>
    </div>
  )
}

function VideoItem({
  src,
  poster,
  setRef,
}: {
  src: string
  poster?: string
  setRef: (el: HTMLVideoElement | null) => void
}) {
  return (
    <div className="flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_280px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
        <video
          ref={setRef}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          preload="none"
          className="h-full w-full object-cover"
          // Debug (tu peux supprimer après)
          onError={(e) => {
            const v = e.currentTarget
            console.log("VIDEO ERROR", src, v.error, {
              networkState: v.networkState,
              readyState: v.readyState,
              currentSrc: v.currentSrc,
            })
          }}
          onStalled={() => console.log("VIDEO STALLED", src)}
          onWaiting={() => console.log("VIDEO WAITING", src)}
        />
      </div>
    </div>
  )
}