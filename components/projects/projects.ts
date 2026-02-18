export type Project = {
  id: number
  slug: string
  title: string
  category: string
  image: string

  year?: string
  client?: string
  description?: string

  services: string[]
  gallery: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "maaraja",
    title: "Maaraja",
    category: "Restaurant",
    image: "/maaraja/5.jpg",
    year: "2025",
    client: "Maaraja",
    description:
      "Production photo & vidéo pensée pour convertir : mise en avant des plats, de l’ambiance et des détails qui font l’expérience. Objectif : renforcer l’image de marque et alimenter une communication régulière sur le web et les réseaux.",
    services: ["Direction artistique", "Production photo", "Production vidéo", "Contenus réseaux"],
    gallery: ["/maaraja/1.JPG", "/maaraja/2.JPG", "/maaraja/3.JPG"],
  },
  {
    id: 2,
    slug: "drugstore",
    title: "Drugstore",
    category: "Restaurant",
    image: "/drugstore/6.jpg",
    year: "2025",
    client: "Drugstore",
    description:
      "Création d’une banque d’assets cohérente et premium : plans larges, détails produits, ambiance de salle. Un contenu prêt à décliner en formats social, site et campagnes publicitaires.",
    services: ["Direction artistique", "Production photo", "Post-production", "Déclinaisons social"],
    gallery: ["/drugstore/1.JPG", "/drugstore/2.JPG", "/drugstore/3.JPG"],
  },
  {
    id: 3,
    slug: "mypub",
    title: "MyPub",
    category: "Bar & Food",
    image: "/mypub/5.JPG",
    year: "2024",
    client: "MyPub",
    description:
      "Shooting orienté ‘bar & food’ avec une approche performance : lumière, textures, produits clés et plans exploitables. Objectif : nourrir les réseaux et améliorer la perception (qualité) sur l’ensemble des supports.",
    services: ["Production photo", "Mise en scène", "Retouches", "Contenus réseaux"],
    gallery: ["/mypub/1.JPG", "/mypub/2.JPG", "/mypub/3.JPG"],
  },
  {
    id: 4,
    slug: "ptit-veau",
    title: "Le P’tit Veau d’Or",
    category: "Restaurant",
    image: "/ptit/5.JPG",
    year: "2024",
    client: "Le P’tit Veau d’Or",
    description:
      "Contenus visuels qui valorisent l’authenticité du lieu : plats, ambiance, détails et moments de service. Une base solide pour une présence digitale cohérente et régulière.",
    services: ["Production photo", "Contenus digitaux", "Ambiance & détails", "Déclinaisons social"],
    gallery: ["/ptit/1.JPG", "/ptit/2.JPG", "/ptit/3.JPG"],
  },
  {
    id: 5,
    slug: "veau-dor",
    title: "Le Veau d’Or",
    category: "Restaurant",
    image: "/veau/5.JPG",
    year: "2025",
    client: "Le Veau d’Or",
    description:
      "Shooting premium pour une table gastronomique : direction artistique, travail des matières, lumière et composition. Objectif : élever la perception de marque et produire des visuels ‘hero’ pour web, presse et campagnes.",
    services: ["Direction artistique", "Production photo", "Retouches", "Assets campagne"],
    gallery: ["/veau/1.JPG", "/veau/2.JPG", "/veau/3.JPG"],
  },
  {
    id: 6,
    slug: "ptit-veau-ugc",
    title: "Le P’tit Veau d’Or — Social",
    category: "Restaurant / Social",
    image: "/ptit/3.JPG",
    year: "2025",
    client: "Le P’tit Veau d’Or",
    description:
      "Formats courts ‘social-first’ : contenu naturel, dynamique, pensé pour l’attention et la régularité. Objectif : nourrir la communauté, générer de l’engagement et soutenir la fréquentation au quotidien.",
    services: ["Contenus sociaux", "Formats courts", "Photo & vidéo", "Optimisation publication"],
    gallery: ["/ptit/1.JPG", "/ptit/2.JPG", "/ptit/3.JPG"],
  },
]
