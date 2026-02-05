import { Video, TrendingUp, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Production Vidéo",
      description:
        "Création de contenus vidéo HD professionnels : films d’entreprise, publicités, réseaux sociaux, événementiel.",
      icon: <Video className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Agence Marketing",
      description:
        "Stratégie digitale, gestion de campagnes, social media management et optimisation des performances.",
      icon: <TrendingUp className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Publicité & Diffusion",
      description:
        "Achat média, gestion publicitaire multicanal et optimisation du ROI sur toutes les plateformes.",
      icon: <Megaphone className="h-6 w-6 text-red-600" />,
    },
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-xs font-semibold tracking-widest text-red-600 uppercase">
          Nos expertises
        </span>

        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Un studio, trois métiers
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Production vidéo, marketing digital et diffusion publicitaire : tout
          ce dont vous avez besoin pour réussir.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 text-left rounded-lg hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-red-600 rounded mb-6">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-500 text-sm">
                {service.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center mt-6 text-sm font-semibold text-red-600 hover:underline"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
