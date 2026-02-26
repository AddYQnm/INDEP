"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type VideoItemT = {
  src: string
  poster: string
}

export default function VideoSlider() {
  const isDev = process.env.NODE_ENV !== "production"

  // ✅ Mets des posters dédiés (petits jpg/webp) dans /public/posters/
  const videos: VideoItemT[] = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261634/1_f0juwg.mp4",
        poster: "/posters/slider-1.jpg",
      },
      {
        src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261694/3_olqt0c.mp4",
        poster: "/posters/slider-2.jpg",
      },
      {
        src: "https://res.cloudinary.com/dba299maa/video/upload/v1770261741/4_udv562.mp4",
        poster: "/posters/slider-3.jpg",
      },
    ],
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const rootRef = useRef<HTMLDivElement | null>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const playLockRef = useRef<WeakMap<HTMLVideoElement, Promise<void>>>(new WeakMap())

  const [inViewport, setInViewport] = useState(false)

  // Observe le conteneur pour ne jouer que quand visible
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => setInViewport(entries[0]?.isIntersecting ?? false),
      // un peu de marge pour démarrer avant d’être totalement au milieu
      { rootMargin: "120px 0px", threshold: 0.35 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const pauseAll = useCallback(() => {
    videoRefs.current.forEach((v) => v?.pause())
  }, [])

  const ensurePlayable = useCallback(async (v: HTMLVideoElement) => {
    // Evite de spam play() sur le même élément
    const locked = playLockRef.current.get(v)
    if (locked) return locked

    v.muted = true
    v.playsInline = true
    v.loop = true

    // Précharge légère
    if (v.preload !== "metadata") v.preload = "metadata"
    // Important si preload était none
    v.load()

    const p = (async () => {
      // iOS/Safari: loadeddata est parfois plus fiable que canplay
      if (v.readyState < 2) {
        await new Promise<void>((resolve) => {
          const done = () => resolve()
          v.addEventListener("loadeddata", done, { once: true })
          v.addEventListener("canplay", done, { once: true })
          setTimeout(resolve, 1500)
        })
      }

      try {
        await v.play()
      } catch {
        // autoplay peut échouer sur certains devices: on ignore
      }
    })()

    playLockRef.current.set(v, p)
    p.finally(() => playLockRef.current.delete(v))

    return p
  }, [])

  const applyPreloadPolicy = useCallback(
    (activeIndex: number) => {
      videoRefs.current.forEach((v, idx) => {
        if (!v) return
        // actif + suivant => metadata ; le reste => none
        const keepWarm = idx === activeIndex || idx === activeIndex + 1
        v.preload = keepWarm ? "metadata" : "none"
      })
    },
    []
  )

  const playVisible = useCallback(() => {
    if (!emblaApi) return

    const selected = emblaApi.selectedScrollSnap()

    // Toujours appliquer la politique preload
    applyPreloadPolicy(selected)

    videoRefs.current.forEach((v, idx) => {
      if (!v) return

      if (!inViewport) {
        v.pause()
        return
      }

      // Actif + suivant (précharge + lecture possible)
      const shouldPlay = idx === selected || idx === selected + 1

      if (shouldPlay) {
        void ensurePlayable(v)
      } else {
        v.pause()
      }
    })
  }, [emblaApi, inViewport, ensurePlayable, applyPreloadPolicy])

  // Embla events: pas de "scroll" (trop fréquent)
  useEffect(() => {
    if (!emblaApi) return

    const onAny = () => requestAnimationFrame(playVisible)
    onAny()

    emblaApi.on("reInit", onAny)
    emblaApi.on("select", onAny)
    emblaApi.on("settle", onAny)

    // Bonus: pendant drag, on pause pour éviter stutters
    emblaApi.on("pointerDown", pauseAll)

    return () => {
      emblaApi.off("reInit", onAny)
      emblaApi.off("select", onAny)
      emblaApi.off("settle", onAny)
      emblaApi.off("pointerDown", pauseAll)
    }
  }, [emblaApi, playVisible, pauseAll])

  // Entrée/sortie viewport
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
      aria-label="Slider vidéos"
    >
      <div className="flex gap-6">
        {videos.map((v, index) => (
          <VideoItem
            key={v.src}
            src={v.src}
            poster={v.poster}
            // petit boost au 1er item: metadata par défaut
            defaultPreload={index === 0}
            setRef={(el) => {
              videoRefs.current[index] = el
            }}
            onDebug={(evt, payload) => {
              if (!isDev) return
              // eslint-disable-next-line no-console
              console.log(evt, payload)
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
  defaultPreload,
  setRef,
  onDebug,
}: {
  src: string
  poster: string
  defaultPreload: boolean
  setRef: (el: HTMLVideoElement | null) => void
  onDebug: (evt: string, payload: any) => void
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
          preload={defaultPreload ? "metadata" : "none"}
          className="h-full w-full object-cover"
          aria-hidden="true"
          tabIndex={-1}
          onError={(e) => {
            const v = e.currentTarget
            onDebug("VIDEO_ERROR", {
              src,
              error: v.error,
              networkState: v.networkState,
              readyState: v.readyState,
              currentSrc: v.currentSrc,
            })
          }}
          onStalled={() => onDebug("VIDEO_STALLED", { src })}
          onWaiting={() => onDebug("VIDEO_WAITING", { src })}
        />
      </div>
    </div>
  )
}