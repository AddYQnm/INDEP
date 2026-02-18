"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

export default function EventsPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      <HeroEvents />
      <IntroEvents />
      <EventsGrid />
      <FeaturedEvent />
      <EventsFooter />
    </main>
  )
}

/* =========================
   DATA
========================= */
const events = [
  {
    tag: "Club Night",
    title: "Soirée Résidents — House & Grooves",
    img: "/ibiza/4.png",
    date: "Jeudi 12 mars 2026",
    location: "Rouen",
    excerpt: "Warm-up, peak time, closing. Tables & guests sur réservation.",
    size: "md:col-span-4 md:row-span-2",
  },
  {
    tag: "Special Guest",
    title: "Guest DJ — Night Session",
    img: "/ibiza/2.png",
    date: "Samedi 28 mars 2026",
    location: "Rouen / Club",
    excerpt: "Line-up annoncé bientôt. Early tickets & tables limitées.",
    size: "md:col-span-5 md:row-span-1",
  },
  {
    tag: "Showcase",
    title: "Showcase — Live + DJ Set",
    img: "/ibiza/carré.png",
    date: "Mardi 7 avril 2026",
    location: "Rouen (live)",
    excerpt: "Teasers, coulisses, annonces. Replay disponible 24h.",
    size: "md:col-span-3 md:row-span-1",
  },
  {
    tag: "Afterparty",
    title: "After — Jusqu’au matin",
    img: "/ibiza/b3.png",
    date: "Vendredi 17 avril 2026",
    location: "Rouen",
    excerpt: "Accès tardif, ambiance sombre, grosse énergie. Dress code conseillé.",
    size: "md:col-span-3 md:row-span-1",
  },
  {
    tag: "Takeover",
    title: "Takeover — Collectif invité",
    img: "/ibiza/3.png",
    date: "Jeudi 30 avril 2026",
    location: "Rouen",
    excerpt: "Un label prend le contrôle : scénographie, invités, vibe unique.",
    size: "md:col-span-5 md:row-span-2",
  },
  {
    tag: "Open Bar",
    title: "Midweek — Packs & bouteilles",
    img: "/ibiza/6.png",
    date: "Mercredi 13 mai 2026",
    location: "Rouen",
    excerpt: "Entrée + offres packs. Idéal anniversaires & groupes.",
    size: "md:col-span-4 md:row-span-1",
  },
]

/* =========================
   HERO
========================= */
function HeroEvents() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative px-6 pt-28 md:pt-32 pb-20 md:pb-24">
      {/* Background premium léger */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.16),transparent_60%)]" />
        <div className="absolute top-0 left-[10%] h-[360px] w-[520px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.h1
          initial={reduceMotion ? undefined : { opacity: 0, y: 36 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(64px,10vw,160px)] leading-[0.88] font-extrabold tracking-tight"
        >
          EVENTS
          <br />
          &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            AGENDA
          </span>
        </motion.h1>

        <p className="mt-6 max-w-xl text-sm md:text-base text-gray-600 leading-relaxed">
          Une page simple pour suivre les dates : soirées, showcases, guests & formats spéciaux.
          Tout est ici, mis à jour régulièrement —{" "}
          <span className="text-black font-medium">à Rouen</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#agenda"
            className="rounded-full bg-black px-7 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Voir l’agenda
          </a>
          <a
            href="#infos"
            className="rounded-full border border-black/15 bg-white/70 px-7 py-3 text-sm font-medium text-black hover:bg-white transition"
          >
            Infos pratiques
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-7 md:pr-10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/ibiza/b6.png"
                alt="Cover events"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-6 bottom-6">
                <p className="text-white/80 text-xs uppercase tracking-[0.35em]">À la une</p>
                <h2 className="text-white text-2xl font-semibold">
                  Prochaine date — ouverture des inscriptions.
                </h2>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Infos rapides</p>
              <div className="mt-4 grid gap-3 text-sm text-gray-700">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-gray-500">Ville</span>
                  <span className="font-medium text-black">Rouen</span>
                </div>
                <div className="h-px w-full bg-black/10" />
                <div className="flex items-center justify-between gap-6">
                  <span className="text-gray-500">Accès</span>
                  <span className="font-medium text-black">Tickets / tables</span>
                </div>
                <div className="h-px w-full bg-black/10" />
                <div className="flex items-center justify-between gap-6">
                  <span className="text-gray-500">MàJ</span>
                  <span className="font-medium text-black">Régulière</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ “01” retiré */}
      </div>
    </section>
  )
}

/* =========================
   INTRO
========================= */
function IntroEvents() {
  return (
    <section className="px-6 py-20 md:py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Informations</p>
        </div>

        <div className="md:col-span-8">
          <p className="text-3xl md:text-5xl leading-[1.05] font-semibold">
            Ici, on partage les{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
              événements
            </span>{" "}
            à venir à Rouen.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2 text-gray-700">
            <p>
              Formats : club nights, guests, showcases, afters, sessions spéciales.
              Le but : vivre, rencontrer, et garder le rythme.
            </p>
            <p>
              Certains événements sont gratuits, d’autres sur inscription.
              Les détails (dates, lieu, horaires) sont indiqués sur chaque carte.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================
   GRID
========================= */
function EventsGrid() {
  return (
    <section id="agenda" className="px-6 py-20 md:py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Agenda</p>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Prochaines dates
          </h2>
        </div>

        <p className="hidden md:block max-w-sm text-gray-600">
          Un aperçu “magazine” pour parcourir rapidement les dates et les formats.
        </p>
      </div>

      <div className="mx-auto mt-12 md:mt-14 max-w-6xl grid gap-5 md:grid-cols-12 md:auto-rows-[180px]">
        {events.map((ev, idx) => (
          <EventCard key={idx} {...ev} />
        ))}
      </div>
    </section>
  )
}

function EventCard({
  tag,
  title,
  img,
  size,
  date,
  location,
  excerpt,
}: {
  tag: string
  title: string
  img: string
  size: string
  date: string
  location: string
  excerpt: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      className={`group relative overflow-hidden rounded-3xl border border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.08)] ${size}`}
    >
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      <div className="absolute left-6 right-6 bottom-6">
        <p className="text-white/80 text-xs uppercase tracking-[0.35em]">{tag}</p>
        <h3 className="mt-2 text-white text-2xl font-semibold leading-tight">{title}</h3>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-white/85 text-xs">
          <span className="uppercase tracking-[0.25em]">{date}</span>
          <span className="opacity-70">•</span>
          <span className="uppercase tracking-[0.25em]">{location}</span>
        </div>

        <p className="mt-3 text-white/80 text-sm max-w-md">{excerpt}</p>
      </div>

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
    </motion.article>
  )
}

/* =========================
   FEATURED
========================= */
function FeaturedEvent() {
  return (
    <section className="px-6 py-20 md:py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="relative aspect-[21/9]">
            <Image
              src="/ibiza/bb.png"
              alt="Featured event"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
          </div>

          <div className="absolute left-6 md:left-14 top-10 md:top-14 max-w-xl">
            <p className="text-white/80 text-xs uppercase tracking-[0.35em]">
              Événement à la une
            </p>
            <h2 className="mt-4 text-white text-4xl md:text-6xl font-black leading-[0.95]">
              Workshop — Hooks & montage
              <br />
              en conditions réelles.
            </h2>

            <p className="mt-6 text-white/80 text-base md:text-lg">
              Un format pratique : on écrit, on tourne, on monte. Objectif : repartir
              avec une structure réutilisable pour vos contenus.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#infos"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90 transition"
              >
                Voir infos pratiques
              </a>
              <a
                href="#agenda"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-black transition"
              >
                Retour à l’agenda
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-14 grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-500">À savoir</p>
          </div>
          <div className="md:col-span-9 grid gap-8 md:grid-cols-2 text-gray-700">
            <p>
              Les horaires, adresses et modalités (gratuit / inscription) peuvent évoluer :
              cette page fait foi.
            </p>
            <p>
              Pour proposer un partenariat, une salle, ou une intervention : écris-nous via la section infos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================
   FOOTER
========================= */
function EventsFooter() {
  return (
    <section id="infos" className="px-6 py-20 md:py-24 border-t border-black/10">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-12 items-end">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Infos pratiques</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
            Rester informé,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
              s’inscrire
            </span>
            , participer.
          </h2>
          <p className="mt-6 max-w-xl text-gray-700 text-lg">
            Tu veux recevoir les prochaines dates à Rouen ? On peut te partager les infos
            (lieu, heure, accès, inscription) dès qu’un événement est annoncé.
          </p>
        </div>

        <div className="md:col-span-5 md:justify-self-end">
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-8">
            <p className="text-sm text-gray-600">Rouen — mises à jour régulières</p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white text-center hover:opacity-90 transition"
              >
                Contacter / proposer un event
              </a>
              <a
                href="/offres"
                className="rounded-full border border-black px-6 py-3 text-sm font-medium text-black text-center hover:bg-black hover:text-white transition"
              >
                Voir les offres
              </a>
            </div>

            <div className="mt-6 text-xs text-gray-500 leading-relaxed">
              Tu peux aussi ajouter un lien “Newsletter” ou “WhatsApp” ici si tu as une liste.
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-14 flex items-center justify-between text-xs text-gray-500">
        <span>© INDPDT — Events</span>
        <span className="uppercase tracking-[0.35em]">Agenda</span>
      </div>
    </section>
  )
}
