// components/FaitPourVousSection.tsx (SERVER)
import FaitPourVousCards from "./FaitPourVousCards.client";
import { Button } from "@/components/ui/button";

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
    line: "Des visuels et vidéos qui captent l'attention, crédibilisent et donnent envie d'acheter.",
    chips: ["UGC premium", "Shooting", "Montage", "Motion"],
  },
  {
    k: "03",
    tag: "SCALING",
    title: "Publicité",
    line: "On transforme tes assets en résultats : tests, itérations et campagnes pensées pour scaler.",
    chips: ["Meta Ads", "Créa ads", "A/B tests", "Optimisation"],
  },
] as const;

export default function FaitPourVousSection() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Blobs — static divs, zero JS, zero reflow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.25),transparent_60%)] opacity-50 blur-3xl" />
        <div className="absolute left-[8%] top-24 h-[360px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10),transparent_60%)] opacity-35 blur-3xl" />
        <div className="absolute right-[10%] top-24 h-[360px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.18),transparent_65%)] opacity-30 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(0,0,0,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        {/* Header — server rendered, visible instantly */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold tracking-[0.18em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              NOTRE MÉTHODE
            </div>

            <h2 className="mt-5 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Marketing.{" "}
              <span className="text-[#2e8a96]">Production.</span>{" "}
              Publicité.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              Une seule équipe pour{" "}
              <span className="font-semibold text-black">penser</span>,{" "}
              <span className="font-semibold text-black">créer</span> et{" "}
              <span className="font-semibold text-black">scaler</span>. Des contenus premium + une
              stratégie claire + des campagnes qui performent.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild className="rounded-full">
                <a href="#contact">Prendre rendez-vous</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="rounded-full border-black/20 text-black transition hover:bg-black hover:text-white"
              >
                <a href="#contact">Voir contact</a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-black/45 lg:text-right">Réponse sous 24–48h.</p>
          </div>
        </div>

        {/* Cards — client component for interactions only */}
        <FaitPourVousCards items={items} />
      </div>
    </section>
  );
}