// components/production/ProductionProcess.tsx
const steps = [
  {
    title: "Pré-production",
    description:
      "Analyse des objectifs, direction artistique, scripts, storyboard et organisation du tournage.",
  },
  {
    title: "Production",
    description:
      "Tournage et shooting avec une équipe dédiée et du matériel professionnel.",
  },
  {
    title: "Post-production",
    description:
      "Montage, étalonnage, sound design et déclinaisons multi-formats.",
  },
  {
    title: "Adaptation plateformes",
    description:
      "Optimisation des contenus pour Meta, TikTok, Instagram et YouTube.",
  },
]

export default function ProductionProcess() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-semibold mb-12">
        Une production maîtrisée de A à Z
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.title}>
            <span className="text-sm text-gray-400">
              0{index + 1}
            </span>
            <h3 className="text-xl font-semibold mt-2 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
