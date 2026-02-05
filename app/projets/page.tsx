"use client";

import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";
import AllProjectsGallery from "@/components/projects/AllProjectsGallery";

export default function ProjetsPage() {
  return (
    <>
      <main className="pt-40 bg-black">
        <AllProjectsGallery />
      </main>

      <BentoGridThirdDemo />
    </>
  );
}
