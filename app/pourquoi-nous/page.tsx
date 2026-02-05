"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/* =========================
   POURQUOI NOUS
========================= */
export default function PourquoiNousPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <Hero />
      <Values />
      <Mindset />
      <FinalCTA />
    </main>
  );
}

/* =========================
   HERO
========================= */
function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
      <span className="absolute inset-0 flex justify-center pt-24 text-[18vw] font-black text-black/5 select-none">
        WHY
      </span>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gray-500">
          Pourquoi nous
        </p>

        <h1 className="text-6xl font-bold leading-[0.95]">
          Parce que
          <br />
          la vidéo doit{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            performer
          </span>
          .
        </h1>

        <p className="mt-8 text-lg text-gray-600">
          On ne fait pas des vidéos pour faire joli.
          <br />
          On crée des contenus qui génèrent de l’attention,
          de l’engagement et des ventes.
        </p>
      </motion.div>
    </section>
  );
}

/* =========================
   VALEURS
========================= */
function Values() {
  const items = [
    {
      title: "Création guidée par le business",
      text: "Chaque décision créative sert un objectif clair.",
    },
    {
      title: "Exécution rapide",
      text: "On avance vite, sans compromis sur la qualité.",
    },
    {
      title: "Vision long terme",
      text: "Des contenus qui construisent une marque.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <div className="my-4 h-px w-12 bg-gradient-to-r from-orange-500 to-pink-500" />
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   MINDSET
========================= */
function Mindset() {
  return (
    <section className="bg-black text-white py-32">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-4xl font-bold mb-10">
          Notre mindset
        </h2>

        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
          On mélange stratégie marketing, culture internet
          et direction artistique forte.
          <br />
          Résultat : des vidéos qui sortent du lot
          et qui font avancer les marques.
        </p>
      </div>
    </section>
  );
}

/* =========================
   CTA
========================= */
function FinalCTA() {
  return (
    <section className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Travaillons ensemble
      </h2>
      <Button className="rounded-full px-10">
        Nous contacter
      </Button>
    </section>
  );
}
