"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type Item = {
  k: string;
  tag: string;
  title: string;
  line: string;
  chips: string[];
  accent: string;
};

export default function FaitPourVousSection() {
  const reduceMotion = useReducedMotion();

  const items: Item[] = useMemo(
    () => [
      {
        k: "01",
        tag: "VENTES",
        title: "E-commerce & DNVB",
        line: "Des créas qui convertissent. Prêtes à scaler.",
        chips: ["UGC premium", "Ads social", "Landing clips"],
        accent: "from-orange-500 via-pink-500 to-purple-600",
      },
      {
        k: "02",
        tag: "ACQUISITION",
        title: "SaaS & Lead Gen",
        line: "Du message clair. De la preuve. Des tests.",
        chips: ["Hooks", "Proof", "A/B créas"],
        accent: "from-pink-500 via-purple-600 to-orange-500",
      },
      {
        k: "03",
        tag: "PRÉSENCE",
        title: "Entreprises physiques",
        line: "Une présence cohérente. Activable au quotidien.",
        chips: ["Brand story", "Local ads", "Social content"],
        accent: "from-purple-600 via-pink-500 to-orange-500",
      },
    ],
    []
  );

  return (
    <section className="relative bg-white text-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="pointer-events-none absolute bottom-0 left-0 h-[60px] w-full bg-[#2e8a96] blur-3xl" />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/55">
              Un studio indépendant
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-[0.92] tracking-tight">
              Fait{" "}
              <span className="text-black font-light italic">pour</span>{" "}
              <span className="text-[#2e8a96]">
                vous
              </span>
            </h2>

            <p className="mt-6 text-lg text-black leading-relaxed max-w-2xl">
              Contenus premium pour l’acquisition.{" "}
              <span className="text-[#2e8a96]">Beaux, simples, efficaces.</span>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button className="rounded-full">Prendre rendez-vous</Button>
              <Button
                variant="outline"
                className="rounded-full border-black text-black hover:bg-black hover:text-black transition"
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Voir contact
              </Button>
            </div>
            <p className="mt-3 text-xs text-black/40 lg:text-right">
              Réponse sous 24–48h.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.k}
              initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] p-7"
            >
              {/* Glow accent */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full  opacity-20 blur-2xl transition group-hover:opacity-30`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.35em] text-black/50">
                    {it.tag}
                  </p>
                  <p className="text-sm font-semibold text-black/30">{it.k}</p>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-tight">
                  {it.title}
                </h3>

                <p className="mt-3 text-sm text-black/60 leading-relaxed">
                  {it.line}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {it.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-black/10 bg-black/0 px-3 py-1 text-xs text-black/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-7 h-px w-full bg-black/10">
                  <div className={`h-px w-20 bg-gradient-to-r ${it.accent}`} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
