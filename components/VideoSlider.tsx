"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useRef, useState } from "react"

const videos = [
  {
    src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261634/1_f0juwg.mp4",
    poster: "/hero/poster.jpg", // mets un vrai poster si tu peux
  },
  {
    src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261694/3_olqt0c.mp4",
    poster: "/hero/poster.jpg",
  },
  {
    src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261741/4_udv562.mp4",
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

  // Observe le conteneur pour play/pause global
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => setInViewport(!!entries[0]?.isIntersecting),
      { rootMargin: "200px" }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pauseAll = () => {
    videoRefs.current.forEach((v) => v?.pause())
  }

  const playVisible = () => {
    if (!emblaApi) return

    const visible = new Set(emblaApi.slidesInView())

    videoRefs.current.forEach((v, idx) => {
      if (!v) return

      if (!inViewport || !visible.has(idx)) {
        v.pause()
        return
      }

      // ✅ On autorise un petit preload seulement pour celles visibles
      if (v.preload !== "metadata") v.preload = "metadata"

      // ✅ Assure une frame affichée (iOS/Safari aime bien)
      v.muted = true
      v.playsInline = true

      v.play().catch(() => {
        // Si autoplay policy bloque, au moins le poster s’affiche
      })
    })
  }

  // Sync sur events Embla + viewport
  useEffect(() => {
    if (!emblaApi) return

    const onAny = () => {
      // force un cycle après layout
      requestAnimationFrame(() => playVisible())
    }

    onAny()
    emblaApi.on("reInit", onAny)
    emblaApi.on("select", onAny)
    emblaApi.on("scroll", onAny)

    return () => {
      emblaApi.off("reInit", onAny)
      emblaApi.off("select", onAny)
      emblaApi.off("scroll", onAny)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi, inViewport])

  useEffect(() => {
    if (!inViewport) pauseAll()
    else playVisible()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inViewport])

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
            key={index}
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
        />
      </div>
    </div>
  )
}
