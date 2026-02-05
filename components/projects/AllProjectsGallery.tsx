"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function AllProjectsGallery() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <p className="mb-2 text-sm text-gray-500">Nos projets</p>
          <h1 className="mb-6 text-6xl text-white font-bold">
            L’ensemble de nos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-[#2e8a96]">
              réalisations
            </span>
          </h1>
          <p className="text-gray-600">
            Découvrez les projets que nous avons accompagnés, tous secteurs
            confondus, avec une approche créative et orientée performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projets/${project.slug}`}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
