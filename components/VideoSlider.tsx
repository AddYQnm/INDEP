"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function VideoSlider() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="overflow-hidden mt-10 " ref={emblaRef}>
      <div className="flex gap-6">
        <VideoItem src="/vidéo/1.mp4" />
        <VideoItem src="/vidéo/2.mp4" />
        <VideoItem src="/vidéo/3.mp4" />
        <VideoItem src="/vidéo/4.mp4" />
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
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
