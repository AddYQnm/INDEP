export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;

  year?: string;
  client?: string;
  description?: string;

  services: string[];
  gallery: string[];
};

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
      "Shooting photo et vidéo pour un restaurant à l’identité forte. Travail sur l’ambiance, les couleurs et la mise en scène pour valoriser l’expérience et les plats.",
    services: ["Direction artistique", "Shooting photo", "Contenus réseaux"],
    gallery: [
      "/maaraja/1.JPG",
      "/maaraja/2.JPG",
      "/maaraja/3.JPG",
    ],
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
      "Production de contenus visuels pour un restaurant urbain : plans larges, détails, ambiance de salle et focus produits pour une communication digitale cohérente.",
    services: ["Production photo", "Cadrage", "Post-production"],
    gallery: [
      "/drugstore/1.JPG",
      "/drugstore/2.JPG",
      "/drugstore/3.JPG",
    ],
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
      "Shooting orienté bar & restauration : lumière chaude, textures, boissons et plats mis en valeur pour les supports web et sociaux.",
    services: ["Shooting photo", "Mise en scène", "Retouches"],
    gallery: [
      "/mypub/1.JPG",
      "/mypub/2.JPG",
      "/mypub/3.JPG",
    ],
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
      "Création de contenus visuels pour un restaurant traditionnel : focus sur l’authenticité, les plats et l’atmosphère du lieu.",
    services: ["Photo culinaire", "Ambiance", "Contenus digitaux"],
    gallery: [
      "/ptit/1.JPG",
      "/ptit/2.JPG",
      "/ptit/3.JPG",
    ],
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
      "Shooting complet pour un restaurant gastronomique : direction de la prise de vue, travail des matières et valorisation des assiettes.",
    services: ["Shooting photo", "Direction artistique", "Retouches"],
    gallery: [
      "/veau/1.JPG",
      "/veau/2.JPG",
      "/veau/3.JPG",
    ],
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
      "Formats courts et spontanés pour les réseaux sociaux : images naturelles, détails food et ambiance salle pour nourrir le contenu quotidien.",
    services: ["Contenus sociaux", "Formats courts", "Photo & vidéo"],
    gallery: [
      "/ptit/1.JPG",
      "/ptit/2.JPG",
      "/ptit/3.JPG",
    ],
  },
];
