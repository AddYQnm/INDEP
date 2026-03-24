"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

type VideoItemT = {
  src: string
  poster: string
}

export default function VideoSlider() {
  const videos: VideoItemT[] = useMemo(
    () => [
      {
        src: "https://res.cloudinary.com/dzk0qtcta/video/upload/v1773107355/1_xbj9pq.mp4",
        poster: "/posters/slider-1.jpg",
      },
      {
        src: "https://res.cloudinary.com/dzk0qtcta/video/upload/v1773107485/3_anz1co.mp4",
        poster: "/posters/slider-2.jpg",
      },
      {
        src: "https://res.cloudinary.com/dzk0qtcta/video/upload/v1773107494/4_dhyked.mp4",
        poster: "/posters/slider-3.jpg",
      },
    ],
    []
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: false,
    containScroll: "trimSnaps",
  })

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  // 🔥 PLAY CLEAN (no lag)
  const playActive = useCallback(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return

      if (i === activeIndex) {
        video.currentTime = 0
        video.muted = true
        video.playsInline = true

        const playPromise = video.play()
        if (playPromise) playPromise.catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [activeIndex])

  // Sync Embla
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Play on change
  useEffect(() => {
    playActive()
  }, [activeIndex, playActive])

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex gap-6 will-change-transform">
        {videos.map((v, index) => (
          <div
            key={v.src}
            className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_300px] transform-gpu"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
             <video
  ref={(el) => (videoRefs.current[index] = el)}
  src={v.src}
  muted
  playsInline
  loop
  autoPlay
  preload="auto"
  className="h-full w-full object-cover"
  onLoadedData={(e) => {
    e.currentTarget.play().catch(() => {})
  }}
/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}