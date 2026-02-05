import Image from "next/image";
import { Button } from "@/components/ui/button";
import VideoSlider from "./VideoSlider";

export default function SurMesureSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* GLOW BAS */}
            <div className="pointer-events-none absolute top-0 left-0 h-[60px] w-full bg-[#2e8a96] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[60px] w-full bg-[#2e8a96] blur-3xl" />

      {/* CONTENU CENTRÉ */}
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="mb-2 text-sm font-medium text-gray-600">
          Nos services
        </p>

        <h2 className="mb-6 text-6xl font-bold tracking-tight">
          <span className="text-black">Sur</span>{" "}
          <span className="text-[#2e8a96]">Mesure</span>
        </h2>

        <p className="mb-16 max-w-2xl text-gray-600">
          Notre métier, c&apos;est d&apos;accélérer votre croissance de façon rentable.
          Voici nos expertises :
        </p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              01. Stratégie créative
            </h3>
            <p className="mb-4 font-medium">
              Objectif : capturer l&apos;attention, nourrir l&apos;intérêt,
              déclencher l&apos;action.
            </p>
            <p className="mb-8 max-w-md text-gray-600">
              Production de vidéos et visuels captivants adaptés au niveau de
              conscience de chaque prospect pour un maximum de conversions.
            </p>

            <Button variant="outline" className="rounded-full px-6">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>

      {/* SLIDER FULL WIDTH */}
      <div className="relative mt-12 lg:mt-0 lg:pl-[calc((100vw-80rem)/2)]">
        <VideoSlider />
      </div>
    </section>
  );
}
