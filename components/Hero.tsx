// components/Hero.tsx (SERVER)
import HeroMedia from "./HeroMedia.client"

export default function Hero() {
  const poster = "/hero/poster.jpg"

  return (
    <section className="relative px-4 pt-12 pb-12 overflow-hidden">
      {/* BACKGROUND IMMERSIF */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute top-0 left-[8%] h-[420px] w-[520px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_55%)]" />
        <div className="absolute top-16 right-[10%] h-[380px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
      </div>

      <div className="relative mx-auto w-full max-w-[1100px]">
        {/* SEO: H1 + sous-texte clair */}
        <h1 className="mt-10 text-[clamp(48px,10vw,120px)] leading-[0.9] tracking-[-0.03em] font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/60">
            Indépendant
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40">
            Studio
          </span>
        </h1>

        {/* Option SEO (recommandé) : une phrase “service + ville” très explicite */}
        <p className="sr-only">
          Agence marketing et création de contenus à Rouen : stratégie, production
          photo/vidéo, réseaux sociaux et publicité.
        </p>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[580px]">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Agence marketing & création de contenus basée à Rouen. Stratégie,
              production vidéos et photos, gestion des réseaux sociaux, publicité.
              Votre partenaire de croissance digitale en Normandie.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md transition"
              >
                Démarrer un projet
                <span className="inline-block transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/30 px-5 py-2.5 text-sm font-semibold backdrop-blur hover:bg-background/45 transition"
              >
                À propos
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-border/60 bg-background/30 px-4 py-3 backdrop-blur">
              <div className="text-xs font-bold tracking-[0.18em]">BASÉ À</div>
              <div className="mt-1 text-sm font-semibold">Rouen</div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/30 px-4 py-3 backdrop-blur">
              <div className="text-xs font-bold tracking-[0.18em]">PROJETS</div>
              <div className="mt-1 text-sm font-semibold">200+</div>
            </div>
          </div>
        </div>

        {/* Media = client-only */}
        <HeroMedia poster={poster} />
      </div>
    </section>
  )
}