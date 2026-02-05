// components/production/ProductionCases.tsx
export default function ProductionCases() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-semibold mb-12">
        Nos productions
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="aspect-video bg-gray-200 rounded-lg"
          />
        ))}
      </div>
    </section>
  )
}
