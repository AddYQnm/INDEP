// components/production/ProductionCTA.tsx
export default function ProductionCTA() {
  return (
    <section className="py-32  text-black px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-[clamp(32px,6vw,56px)] leading-[1.05] font-semibold tracking-tight">
          Créons quelque chose
          <br />
          qui se remarque.
        </h2>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 mt-10 rounded-full border border-black/30 px-8 py-4 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          Démarrer un projet
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
