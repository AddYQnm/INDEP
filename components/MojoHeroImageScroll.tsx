'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function MojoHeroImageScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !imageWrapperRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=160%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      tl.to(imageWrapperRef.current, {
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        x: 0,
        y: 0,
        borderRadius: 0,
        ease: 'power4.inOut',
      })
        .to(textRef.current, {
          opacity: 0,
          y: -60,
          ease: 'power3.out',
        }, 0)
        .fromTo(
          imageWrapperRef.current,
          { scale: 1 },
          { scale: 1.06, ease: 'none' },
          0
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl w-full px-8 pl-[30%] grid grid-cols-2 gap-20 items-center">
          <div ref={textRef} className="max-w-xl">
            <h1 className="text-6xl font-bold leading-tight mb-6">
              We craft brands through motion
            </h1>
            <p className="text-lg opacity-80">
              Scroll to reveal our cinematic approach to visual storytelling.
            </p>
          </div>

          <div
            ref={imageWrapperRef}
            className="absolute top-[25%] w-[20%] h-[30%] bottom-0 left-[15%] overflow-hidden bg-neutral-900 flex items-center justify-center"
          >
            <img
              src="/hero.jpg"
              alt="Hero visual"
              className="w- h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
