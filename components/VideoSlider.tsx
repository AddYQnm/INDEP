"use client";

import useEmblaCarousel from "embla-carousel-react";

const videos = [
  "https://res.cloudinary.com/dba299maa/video/upload/v1770261634/1_f0juwg.mp4",

  // ❗ TEMPORAIRE : remplace la vidéo trop lourde
  "https://res.cloudinary.com/dba299maa/video/upload/v1770261694/3_olqt0c.mp4",

  "https://res.cloudinary.com/dba299maa/video/upload/v1770261741/4_udv562.mp4",

  // on duplique la dernière pour garder 4 slides
  "https://res.cloudinary.com/dba299maa/video/upload/v1770261741/4_udv562.mp4",
];

export default function VideoSlider() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden mt-10" ref={emblaRef}>
      <div className="flex gap-6">
        {videos.map((src, index) => (
          <VideoItem key={index} src={src} />
        ))}
      </div>
    </div>
  );
}

function VideoItem({ src }: { src: string }) {
  return (
    <div className="flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_280px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-black">
        <video
          src={src}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
