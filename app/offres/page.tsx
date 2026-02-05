"use client";

import { Button } from "@/components/ui/button";
import VideoSlider from "@/components/VideoSlider";
import { Demo } from "@/components/Demo";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef } from "react";

/* =========================
   PAGE OFFRES
========================= */
export default function OffresPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <HeroSection />
      <div className="flex justify-center">
        <VideoSlider />
      </div>
      <ProcessSection />
      <OffersSection />
      <Demo />
      <FinalCTA />
    </main>
  );
}

/* =========================
   HERO
========================= */
function HeroSection() {
  const reduceMotion = useReducedMotion();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-24">
      {/* Background aurora + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.22),transparent_55%)]" />
        <div className="absolute -top-10 left-[8%] h-[420px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_55%)]" />
        <div className="absolute top-10 right-[10%] h-[380px] w-[520px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.16),transparent_60%)]" />

        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      {/* mot géant background */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <span className="mt-6 text-[22vw] font-black tracking-tight text-black/5 select-none">
          VIDÉO
        </span>
      </div>

      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 grid gap-16 md:grid-cols-12 items-end"
      >
        {/* TEXTE */}
        <div className="md:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-black/70" />
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">
              Offres vidéo
            </p>
          </div>

          <h1 className="text-[clamp(44px,6vw,82px)] font-bold leading-[0.92] tracking-tight">
            Des vidéos
            <br />
            qui{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              déclenchent
            </span>{" "}
            l’action.
          </h1>

          <p className="mt-8 max-w-xl text-[15px] md:text-lg text-black/60 leading-relaxed">
            Direction créative, production, déclinaisons.{" "}
            <span className="font-medium text-black">
              Une esthétique forte
            </span>{" "}
            + des formats prêts pour ads & réseaux.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              className="rounded-full px-10 py-6 text-sm"
              onClick={() => scrollToId("offres")}
            >
              Voir les offres
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-10 bg-white text-black hover:bg-gray-100 py-6 text-sm border-black/15"
              onClick={() => scrollToId("contact")}
            >
              Prendre rendez-vous
            </Button>
          </div>

          <p className="mt-6 text-xs text-black/45">
            Réponse sous 24–48h. Si on n’est pas le bon fit, on te le dit.
          </p>
        </div>

        {/* BLOC ÉDITORIAL */}
        <div className="md:col-span-5">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/75 backdrop-blur-xl p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-15 blur-2xl" />

            <p className="relative text-xs uppercase tracking-[0.35em] text-black/50">
              Ce qu’on livre
            </p>
            <p className="relative mt-4 text-xl font-semibold leading-tight">
              Une DA lisible.
              <br />
              Un rythme propre.
              <br />
              Des formats qui tournent.
            </p>

            <div className="relative mt-6 h-px w-full bg-black/10">
              <div className="h-px w-28 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
            </div>

            <p className="relative mt-6 text-sm text-black/60 leading-relaxed">
              Contenus social, ads, lancement, restaurant/événement.
              <br />
              On pense <span className="text-black font-medium">usage</span> avant
              volume.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================
   PROCESS – TIMELINE (modern)
========================= */
function ProcessSection() {
  const reduceMotion = useReducedMotion();

  const steps = useMemo(
    () => [
      {
        title: "Brief & angle créatif",
        text: "Objectif, audience, références. On fixe une direction claire.",
      },
      {
        title: "Pré-prod",
        text: "Scénario, shotlist, organisation. Tout est prêt avant de tourner.",
      },
      {
        title: "Production & montage",
        text: "Tournage + montage. Déclinaisons multi-formats et sous-titres si besoin.",
      },
      {
        title: "Livraison & itérations",
        text: "Exports prêts à publier. Variantes possibles selon retours & perf.",
      },
    ],
    []
  );

  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.25"],
  });

  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "92%"]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 md:mb-20">
        <p className="text-xs uppercase tracking-[0.35em] text-black/50">
          Process
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          Une méthode simple.
          <br className="hidden md:block" /> Une exécution nette.
        </h2>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-black/60 leading-relaxed">
          Tu sais où tu vas, ce qu’on tourne, et ce que tu reçois. Pas de flou.
        </p>
      </div>

      <div className="relative">
        {/* Rail */}
        <div className="absolute left-4 top-0 h-full w-px bg-black/10 md:left-1/2" />

        {/* Progress */}
        <motion.div
          style={reduceMotion ? undefined : { height: lineH }}
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600 md:left-1/2"
        />

        {/* Glow */}
        <motion.div
          style={reduceMotion ? undefined : { top: glowY }}
          className="pointer-events-none absolute left-4 -translate-x-1/2 md:left-1/2 h-10 w-10 rounded-full bg-pink-500/20 blur-2xl"
        />

        <div className="space-y-16 md:space-y-24">
          {steps.map((s, i) => {
            const reverse = i % 2 === 0;

            return (
              <motion.div
                key={s.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-7 md:left-1/2 md:-translate-x-1/2">
                  <div className="relative">
                    <div className="h-3.5 w-3.5 rounded-full bg-white ring-2 ring-black/15" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-60 blur-[10px]" />
                  </div>
                </div>

                {/* Card */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xl p-7 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.35em] text-black/45">
                        Étape {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-black/30">
                        {i + 1}/{steps.length}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-black/60 leading-relaxed">{s.text}</p>

                    <div className="mt-6 h-px w-full bg-black/10">
                      <div className="h-px w-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600" />
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   OFFRES
========================= */
function OffersSection() {
  return (
    <section id="offres" className="relative py-24 md:py-32 bg-[#fbf7ef] text-black overflow-hidden">
      {/* texture + accents rétro */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.22)_1px,transparent_0)] [background-size:22px_22px]" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-[-60px] h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/60">
              Tarifs
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight leading-[0.95]">
              Les packs (infos)
              <br />
              <span className="inline-block -rotate-1 border border-black/70 px-3 py-1">
                pas de paiement ici
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-black/65 leading-relaxed">
              Ces prix servent de repère. On ajuste selon ton besoin (volume,
              durée, formats, diffusion). Pour réserver un créneau : contact.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Demander un devis
              <span className="translate-y-[1px]">↗</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/60 bg-white/60 px-6 py-3 text-sm font-medium hover:bg-white transition"
            >
              Prendre rendez-vous
              <span className="translate-y-[1px]">→</span>
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <OfferCard
            title="Création"
            price="À partir de 1 249€"
            stamp="BASIC"
            desc="Pour produire des visuels propres, prêts à publier."
            bullets={["Tournage", "Montage", "Exports social"]}
          />
          <OfferCard
            title="Création + Diffusion"
            price="À partir de 2 399€"
            stamp="BEST"
            highlight
            desc="Idéal si tu veux créer ET pousser la vidéo (ads)."
            bullets={["Créa + déclinaisons", "Setup diffusion", "Optimisations"]}
          />
          <OfferCard
            title="Full Pack"
            price="Sur devis"
            stamp="PRO"
            desc="Pour les marques qui veulent un rythme régulier."
            bullets={["Planning", "Séries de contenus", "Suivi & itérations"]}
          />
        </div>

        <p className="mt-10 text-xs text-black/50">
          * Tarifs indicatifs. Le prix final dépend du lieu, du volume et des
          formats demandés.
        </p>
      </div>
    </section>
  );
}


function OfferCard({
  title,
  price,
  desc,
  bullets,
  stamp,
  highlight,
}: {
  title: string;
  price: string;
  desc: string;
  bullets: string[];
  stamp: string;
  highlight?: boolean;
}) {
  return (
    <div className="relative">
      {/* contour rétro “ticket” */}
      <div
        className={[
          "relative rounded-[28px] border border-black/20 bg-white",
          "shadow-[0_18px_50px_rgba(0,0,0,0.10)] overflow-hidden",
          highlight ? "ring-1 ring-black/30" : "",
        ].join(" ")}
      >
        {/* mini perforation look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-4">
          <div className="absolute left-[-8px] top-10 h-6 w-6 rounded-full bg-[#fbf7ef]" />
          <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-[#fbf7ef]" />
          <div className="absolute left-[-8px] bottom-10 h-6 w-6 rounded-full bg-[#fbf7ef]" />
        </div>

        {/* stamp */}
        <div className="absolute right-5 top-5">
          <div
            className={[
              "rotate-6 rounded-full border-2 px-3 py-1 text-xs font-black tracking-[0.22em]",
              highlight
                ? "border-black bg-orange-200"
                : "border-black/70 bg-white",
            ].join(" ")}
          >
            {stamp}
          </div>
        </div>

        <div className="p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-black/60">
            Pack
          </p>

          <h3 className="mt-3 text-2xl font-black tracking-tight leading-tight">
            {title}
          </h3>

          <div className="mt-4 flex items-baseline justify-between gap-4">
            <p className="text-lg font-semibold">{price}</p>
            <span className="text-xs text-black/55 uppercase tracking-[0.25em]">
              indicatif
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-black/15" />

          <p className="mt-6 text-sm text-black/70 leading-relaxed">{desc}</p>

          <ul className="mt-5 space-y-2 text-sm text-black/70">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-black/50" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* CTA (info-only) */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Discuter de ce pack
              <span className="translate-y-[1px]">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/60 bg-white px-5 py-2.5 text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Devis rapide
              <span className="translate-y-[1px]">↗</span>
            </a>
          </div>
        </div>

        {/* petit accent rétro */}
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-purple-600/10 blur-2xl" />
      </div>
    </div>
  );
}


/* =========================
   CTA FINAL (NE PAS MODIFIER)
========================= */
function FinalCTA() {
  return (
    <section id="contact" className="relative bg-black py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-[-80px] h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Parlons de votre prochain contenu
        </h2>
        <p className="mt-6 text-white/65">
          On transforme une idée en vidéo qui performe.
        </p>
        <Button className="mt-10 rounded-full px-10 bg-white text-black hover:bg-white/90">
          Prendre rendez-vous
        </Button>
        <p className="mt-5 text-xs text-white/40">
          Réponse sous 24–48h.
        </p>
      </div>
    </section>
  );
}
