import { Button } from "@/components/ui/button"
import VideoSliderClient from "./VideoSlider"

export default function SurMesureSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* Background premium */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.25),transparent_60%)]" />
        <div className="absolute bottom-0 left-1/2 h-[220px] w-[min(1100px,92vw)] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.22),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              SUR-MESURE
            </div>

            <h2 className="mt-5 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Des contenus{" "}
              <span className="text-[#2e8a96]">pensés</span> pour convertir.
            </h2>

            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-black/70">
              On adapte la stratégie et la production à ton business, ton audience et ton
              objectif. Pas de contenu “joli pour joli” : du contenu utile, performant,
              et scalable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full">
                <a href="/contact">Prendre rendez-vous</a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-black/20 text-black hover:bg-black hover:text-white transition"
              >
                <a href="#works">Voir des réalisations</a>
              </Button>

              <p className="text-xs text-black/45 ml-1">Réponse sous 24–48h.</p>
            </div>
          </div>

          {/* Right: mini “services” cards */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <div className="text-xs font-bold tracking-[0.28em] text-black/45">
                  STRATÉGIE
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight">
                  Angles & messages
                </div>
                <p className="mt-2 text-sm text-black/65 leading-relaxed">
                  Hooks, offres, structure de vidéos, scripts — alignés sur ton funnel.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>Positionnement</Chip>
                  <Chip>Copy</Chip>
                  <Chip>Scripts</Chip>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/60 p-6 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <div className="text-xs font-bold tracking-[0.28em] text-black/45">
                  PRODUCTION
                </div>
                <div className="mt-3 text-xl font-semibold tracking-tight">
                  Vidéos & photos
                </div>
                <p className="mt-2 text-sm text-black/65 leading-relaxed">
                  Captation, montage, déclinaisons ads, formats réseaux — prêts à publier.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip>UGC premium</Chip>
                  <Chip>Shooting</Chip>
                  <Chip>Montage</Chip>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-black/10" />

        {/* Slider block */}
        <div className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-black/45">
                EXTRAITS
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">
                Quelques formats que l’on produit
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-black/60">
              <span className="h-2 w-2 rounded-full bg-[#2e8a96]/60" />
              Faites glisser
            </div>
          </div>

          {/* Full width slider */}
          <div className="relative mt-8 lg:pl-[calc((100vw-80rem)/2)]">
            <VideoSliderClient />
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/65">
      {children}
    </span>
  )
}
