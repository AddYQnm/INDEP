"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const timeoutRef = useRef<number | null>(null);

  const TOTAL_MS = 4000;
  const EXIT_MS = 650;
  const FILL_MS = Math.max(0, TOTAL_MS - EXIT_MS);

  const BUFFER_MS = 180; // ✅ petit temps de respiration

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDone();
    };
    window.addEventListener("keydown", onKey);

    timeoutRef.current = window.setTimeout(() => onDone(), FILL_MS + BUFFER_MS);

    return () => {
      window.removeEventListener("keydown", onKey);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [onDone, FILL_MS]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-auto"
      initial="hidden"
      animate="show"
      exit="exit"
      onPointerDown={onDone}
    >
      {/* Panel (fond) */}
      <motion.div className="absolute inset-0 bg-neutral-950" variants={panel} />

      {/* Center */}
      <motion.div
        className="absolute inset-0 grid place-content-center text-center text-white px-6"
        variants={center}
      >
        <div className="grid place-items-center gap-6">
          <motion.div variants={logo}>
            <div className="relative w-[min(72vw,420px)] aspect-[3/1]">
              <Image
                src="/logo/logo2.png"
                alt="Independant Studio"
                fill
                priority
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="grid gap-2">
            <motion.div
              className="text-[clamp(18px,2.2vw,26px)] tracking-[0.38em] uppercase text-white/80"
              variants={spacedLine}
            >
              Independant Studio
            </motion.div>

            <motion.div
              className="text-[clamp(12px,1.4vw,16px)] tracking-[0.32em] uppercase text-white/55"
              variants={spacedLine}
            >
              Rouen • Production & contenus
            </motion.div>
          </div>

          {/* barre de progression */}
          <motion.div
            className="mt-4 h-[2px] w-44 overflow-hidden rounded-full bg-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.35 } }}
          >
            <motion.div
              className="h-full w-full bg-white/70 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: FILL_MS / 1000,
                ease: "linear", // ✅ garde linear pour un “vrai” progress
              }}
            />
          </motion.div>

          <motion.p
            className="mt-2 text-[11px] uppercase tracking-[0.35em] text-white/35"
            variants={hint}
          >
            Cliquez pour passer
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

const easeInOutCine = cubicBezier(0.22, 0.95, 0.3, 1);
const easeOutCine = cubicBezier(0.16, 1, 0.3, 1);

const center = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.10, delayChildren: 0.18 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: easeInOutCine },
  },
};

const logo = {
  hidden: { y: 18, opacity: 0, filter: "blur(10px)", scale: 0.985 },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: easeOutCine },
  },
  exit: {
    y: -6,
    opacity: 0,
    transition: { duration: 0.25, ease: easeInOutCine },
  },
};

const spacedLine = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.65, ease: easeOutCine } },
  exit: { y: -4, opacity: 0, transition: { duration: 0.22, ease: easeInOutCine } },
};

const hint = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 0.55, duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.12 } },
};

const panel = {
  hidden: { y: 0 },
  show: { y: 0 },
  exit: {
    y: "-110%",
    transition: { duration: 0.75, ease: cubicBezier(0.2, 0.9, 0.2, 1) }, // ✅ plus smooth
  },
};
