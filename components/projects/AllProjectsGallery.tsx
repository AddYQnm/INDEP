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
            Des projets tous secteurs confondus, avec une approche créative et orientée performance.
          </p>
        </div>

        {/* Grid */}
<div className="grid gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
  {projects.map((project, idx) => (
    <Link key={project.id} href={`/projets/${project.slug}`} className="group">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
        <div className="relative aspect-[3/4]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            priority={idx < 2}
            placeholder="blur"
            blurDataURL="/low-res-placeholder.jpg"
          />
          {/* overlay hover seulement */}
          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.26em] text-white/50">{project.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-white/60">Découvrir le projet →</p>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  )
}
