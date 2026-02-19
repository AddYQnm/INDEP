import Image from "next/image"
import Link from "next/link"
import { projects } from "./projects"

export default function HomeProjectsSection() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-black/50">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2e8a96]" />
              NOS PROJETS
            </p>

            <h2 className="text-[clamp(34px,4.5vw,56px)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Quelques{" "}
              <span className="text-[#2e8a96]">réalisations</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-black/60">
              Des contenus pensés pour performer : créativité, production et exécution.
            </p>
          </div>

          <Link
            href="/projets"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-black transition"
          >
            Voir tous les projets
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <Link
              key={project.id}
              href="/projets"
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >
          <Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.06]"
  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 360px"
  priority={idx < 2}
  placeholder="blur"
  blurDataURL="/path/to/low-res-placeholder.jpg"
/>


              {/* overlay premium */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-0 bg-black/5" />

              {/* bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/70">
                  {project.category}
                </p>
                <h3 className="mt-1 text-base sm:text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              {/* subtle top badge (always visible) */}
              <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-white/80 backdrop-blur">
                {project.category}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
