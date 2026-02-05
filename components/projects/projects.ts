export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Campagne lifestyle",
    category: "Brand content",
    image: "/veau/1.JPG",
  },
  {
    id: 2,
    title: "Retail experience",
    category: "Commercial",
    image: "/mypub/2.JPG",
  },
  {
    id: 3,
    title: "Portrait dirigeant",
    category: "Corporate",
    image: "/veau/3.jpg",
  },
  {
    id: 4,
    title: "Événement entreprise",
    category: "Event",
    image: "/PTIT/4.jpg",
  },
  {
    id: 5,
    title: "Interview CEO",
    category: "Corporate",
    image: "/drugstore/6.jpg",
  },
  {
    id: 6,
    title: "Activation de marque",
    category: "Branding",
    image: "/maaraja/6.jpg",
  },
];
