const values = [
  "Créateur & diffuseur de contenus vidéo",
  "Maîtrise complète de la chaîne de production",
  "Culture visuelle moderne",
  "Visibilité & notoriété",
]

export default function ProductionValue() {
  return (
    <section
      style={{
        padding: "140px 24px",
        background: "var(--primary)",
        color: "var(--secondary)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontSize: 40, marginBottom: 32 }}>
          Une expérience vidéo unique
        </h2>

        <ul style={{ fontSize: 18, lineHeight: 1.8 }}>
          {values.map((value) => (
            <li key={value}>✔ {value}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
