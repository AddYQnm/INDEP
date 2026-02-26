// components/FaitPourVousSection.tsx (SERVER)
import FaitPourVousCards from "./FaitPourVousCards.client"
import { Button } from "@/components/ui/button"

const items = [
  {
    k: "01",
    tag: "STRATÉGIE",
    title: "Marketing",
    line: "Positionnement, message, offers, contenu : on construit un système qui attire et convertit.",
    chips: ["Stratégie", "Copywriting", "Social media", "Tunnel"],
  },
  {
    k: "02",
    tag: "CRÉATION",
    title: "Production",
    line: "Des visuels et vidéos qui captent l’attention, crédibilisent et donnent envie d’acheter.",
    chips: ["UGC premium", "Shooting", "Montage", "Motion"],
  },
  {
    k: "03",
    tag: "SCALING",
    title: "Publicité",
    line: "On transforme tes assets en résultats : tests, itérations et campagnes pensées pour scaler.",
    chips: ["Meta Ads", "Créa ads", "A/B tests", "Optimisation"],
  },
] as const

export default function FaitPourVousSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.25),transparent_60%)]" />
        <div className="absolute top-24 left-[8%] h-[360px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10),transparent_60%)]" />
        <div className="absolute top-24 right-[10%] h-[360px] w-[520px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.18),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              NOTRE MÉTHODE
            </div>

            <h2 className="mt-5 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Marketing. <span className="text-[#2e8a96]">Production.</span> Publicité.
            </h2>

            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-black/70">
              Une seule équipe pour <span className="text-black font-semibold">penser</span>,{" "}
              <span className="text-black font-semibold">créer</span> et{" "}
              <span className="text-black font-semibold">scaler</span>. Des contenus premium + une
              stratégie claire + des campagnes qui performent.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild className="rounded-full">
                <a href="#contact">Prendre rendez-vous</a>
              </Button>

              {/* ✅ fallback SSR (scroll normal). Le smooth sera géré client */}
              <Button
                variant="outline"
                className="rounded-full border-black/20 text-black hover:bg-black hover:text-white transition"
                asChild
              >
                <a href="#contact">Voir contact</a>
              </Button>
            </div>

            <p className="mt-3 text-xs text-black/45 lg:text-right">Réponse sous 24–48h.</p>
          </div>
        </div>

        {/* ✅ Cards SSR + animations gérées par un composant client */}
        <FaitPourVousCards items={items} />
      </div>
    </section>
  )
}