// components/production/ProductionTargets.tsx
const targets = [
  "Marques ambitieuses",
  "PME & ETI",
  "E-commerce",
  "Entrepreneurs",
  "Startups",
]

export default function ProductionTargets() {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8">
          À qui s’adresse notre production ?
        </h2>

        <div className="flex flex-wrap gap-4">
          {targets.map((target) => (
            <span
              key={target}
              className="px-6 py-3 bg-white rounded-full shadow-sm"
            >
              {target}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
