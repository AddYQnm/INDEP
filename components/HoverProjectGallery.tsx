"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Project {
  title: string;
  type: string;
  img: string;
}

interface HoverGalleryProps {
  projects: Project[];
  thumbnailWidth?: string; // Tailwind width class, e.g., "w-80"
  thumbnailHeight?: string; // Tailwind height class, e.g., "h-[300px]"
}

export default function HoverGallery({
  projects,
  thumbnailWidth = "w-80",
  thumbnailHeight = "h-[300px]",
}: HoverGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !thumbnailRef.current || !sliderRef.current)
      return;

    const container = containerRef.current;
    const thumbnail = thumbnailRef.current;
    const projectItems = container.querySelectorAll(".project-item");

    // Initialize hidden state
    gsap.set(thumbnail, { scale: 0, xPercent: -50, yPercent: -50 });

    // Smooth mouse following
    const xTo = gsap.quickTo(thumbnail, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(thumbnail, "y", { duration: 0.4, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeave = () => {
      gsap.to(thumbnail, { scale: 0, duration: 0.3, ease: "power2.out" });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    projectItems.forEach((el, index) => {
      el.addEventListener("mouseenter", () => {
        // Reveal the thumbnail
        gsap.to(thumbnail, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Move slider based on project index
        gsap.to(sliderRef.current, {
          yPercent: -100 * index,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [projects]);

  return (
    <div className="bg-[#266455] min-h-screen text-white font-sans selection:bg-white selection:text-black">
      {/* Project List */}
      <section ref={containerRef} className="max-w-5xl mx-auto py-20 px-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="project-item group relative flex items-center justify-between py-8 border-t border-white/10 last:border-b cursor-none transition-all duration-300 hover:opacity-40"
          >
            <h2 className="text-3xl md:text-4xl font-light uppercase tracking-tighter transition-transform duration-500 group-hover:translate-x-6">
              {project.title}
            </h2>
            <p className="text-sm md:text-base font-mono text-white/60 transition-transform duration-500 group-hover:-translate-x-6">
              {project.type}
            </p>
          </div>
        ))}
      </section>

      {/* Floating Thumbnail */}
      <div
        ref={thumbnailRef}
        className={`fixed top-0 left-0 ${thumbnailWidth} ${thumbnailHeight} overflow-hidden pointer-events-none z-50 rounded-sm shadow-2xl`}
      >
        <div ref={sliderRef} className="w-full h-full">
          {projects.map((project, i) => (
            <div key={i} className={`w-full ${thumbnailHeight} p-2 bg-white`}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
