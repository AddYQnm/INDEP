"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";


export default function HomeProjectsSection() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className=" py-28 ">
      <div className="mx-auto max-w-7xl px-6 ">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm text-gray-500">Nos projets</p>
            <h2 className="text-5xl font-bold">
              Quelques{" "}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-[#2e8a96]">
                réalisations
              </span>
            </h2>
          </div>

          <Link
            href="/projets"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Voir tous les projets →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/40" />

              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 transition group-hover:opacity-100">
                <p className="text-xs uppercase tracking-wide opacity-80">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
