"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: React.ReactNode
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)

  // Cycle auto-play
  useEffect(() => {
    if (!features.length) return
    const id = window.setInterval(() => {
      if (document.visibilityState === "hidden") return
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, autoPlayInterval)
    return () => window.clearInterval(id)
  }, [features.length, autoPlayInterval])

  // Memoiser current + next pour préchargement minimal
  const current = useMemo(() => features[currentFeature], [features, currentFeature])
  const next = useMemo(() => features[(currentFeature + 1) % features.length], [features, currentFeature])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
          {title}
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Steps statiques */}
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-6 md:gap-8 opacity-60 transition-opacity duration-300",
                  index === currentFeature && "opacity-100"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-primary border-primary text-primary-foreground scale-110"
                      : "bg-muted border-muted-foreground"
                  )}
                >
                  {index <= currentFeature ? <span className="text-lg font-bold">✓</span> : <span className="text-lg font-semibold">{index + 1}</span>}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">{feature.title || feature.step}</h3>
                  <p className="text-sm md:text-lg text-muted-foreground">{feature.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Crossfade */}
          <div className={cn("order-1 md:order-2 relative overflow-hidden rounded-lg", imageHeight)}>
            <AnimatePresence mode="wait">
              {[current].map((feature, index) => (
                <motion.div
                  key={feature.step}
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.step}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={500}
                    placeholder="blur"
                    blurDataURL="/low-res-placeholder.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
