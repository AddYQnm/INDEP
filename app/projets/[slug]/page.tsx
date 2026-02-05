import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects
    .filter((p) => typeof p.slug === "string" && p.slug.length > 0)
    .map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  // petite “vibe” par catégorie (uniquement visuel)
  const isBar = project.category.toLowerCase().includes("bar");
  const accent = isBar
    ? "from-cyan-400/20 via-fuchsia-500/15 to-amber-300/10"
    : "from-amber-300/20 via-orange-500/15 to-rose-500/10";

  return (
    <main className="pt-40 bg-[#070707] text-white min-h-screen overflow-hidden">
      {/* ambiance food/editorial */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className={`absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-70 bg-gradient-to-r ${accent}`} />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/25 to-black/80" />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Link
          href="/projets"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition"
        >
          <span className="opacity-70">←</span> Retour aux projets
        </Link>

        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            {project.category}
            {project.year ? ` • ${project.year}` : ""}
            {project.client ? ` • ${project.client}` : ""}
          </p>

          <h1 className="mt-4 text-[clamp(42px,5.2vw,68px)] leading-[0.95] font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/65">
              {project.title}
            </span>
          </h1>

          {project.description ? (
            <p className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">
              {project.description}
            </p>
          ) : null}

          {project.services?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/80 backdrop-blur hover:bg-white/[0.10] transition"
                >
                  {s}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        {/* Cover */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          {/* look “food editorial” : vignette + grain + gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
          <div className="absolute inset-0 [box-shadow:inset_0_-140px_140px_rgba(0,0,0,0.55)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%2260%22 height=%2260%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')]" />

          {/* micro label type “menu” */}
          <div className="absolute left-6 bottom-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              {project.category}
            </p>
            <p className="mt-1 text-sm text-white/85">
              {project.year ? project.year : "Shooting"} —{" "}
              {project.gallery?.length ? `${project.gallery.length} visuels` : "Galerie"}
            </p>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery?.length ? (
          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {project.gallery.map((src, i) => (
              <div
                key={src}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <Image
                  src={src}
                  alt={`${project.title} — visuel ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            ))}
          </section>
        ) : null}
      </section>
    </main>
  );
}
