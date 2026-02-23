import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function AllProjectsGallery() {
  return (
    <section className="relative py-28 md:py-32 bg-black text-white overflow-hidden">
      {/* background premium dark */}
      <div className="pointer-events-none absolute inset-0">
        {/* halo principal */}
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-45 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.25),transparent_60%)]" />
        {/* halo bas */}
        <div className="absolute bottom-0 left-1/2 h-[260px] w-[min(1100px,92vw)] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,rgba(46,138,150,0.18),transparent_65%)]" />
        {/* grain / grid */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:44px_44px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 md:mb-20 max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
            NOS PROJETS
          </p>

          <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
            L’ensemble de nos{" "}
            <span className="text-[#2e8a96]">réalisations</span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
            Des projets tous secteurs confondus, avec une approche créative et
            orientée performance.
          </p>
        </div>

        {/* ✅ Grid (plus stable + sans “bug” d’images/hover) */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, idx) => (
            <Link
              key={project.id ?? project.slug}
              href={`/projets/${project.slug}`}
              className="group block focus:outline-none"
              prefetch={false} // ✅ évite du jank si tu as beaucoup de projets
              aria-label={`Découvrir ${project.title}`}
            >
              <article
                className={[
                  "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
                  "shadow-[0_4px_12px_rgba(0,0,0,0.2)]",
                  "transition-transform duration-200",
                  "focus-within:ring-2 focus-within:ring-[#2e8a96]/70",
                ].join(" ")}
              >
                {/* ✅ ratio stable + évite certains glitches Safari avec images en transform */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    // ✅ transform GPU + évite micro-saccades
                    className="object-cover transform-gpu transition-transform duration-500 will-change-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    priority={idx < 2}
                    // ✅ IMPORTANT: placeholder blur only si blurDataURL existe vraiment
                    // Si tu n’as pas de blurDataURL par image, ne mets pas placeholder="blur"
                    placeholder={project.blurDataURL ? "blur" : "empty"}
                    blurDataURL={project.blurDataURL}
                  />

                  {/* ✅ overlay: pas de click “bloqué”, et transition clean */}
                  <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

                  {/* ✅ mini badge (optionnel, mais utile + stable) */}
                  {project.category ? (
                    <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/75 backdrop-blur">
                      {project.category}
                    </div>
                  ) : null}
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  {project.shortDesc ? (
                    <p className="mt-2 text-sm text-white/60 line-clamp-2">
                      {project.shortDesc}
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-white/60">
                      Découvrir le projet →
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-white/70">
                      Découvrir{" "}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>

                    <span className="h-9 w-9 rounded-full border border-white/15 bg-white/5 grid place-items-center transition-colors duration-200 group-hover:bg-white/10">
                      <span className="text-white/85">↗</span>
                    </span>
                  </div>
                </div>

                {/* ✅ hover lift léger (moins “buggy” que sur l’image) */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute inset-0 shadow-[0_18px_60px_rgba(46,138,150,0.12)]" />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* ✅ petits détails utiles si beaucoup de cards */}
        <p className="mt-10 text-xs text-white/45">
          Astuce : clique sur une card pour voir le détail du projet.
        </p>
      </div>
    </section>
  )
}