"use client"

import dynamic from "next/dynamic"



const Demo = dynamic(
  () => import("@/components/Demo").then((m) => ({ default: m.Demo })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[420px] w-full max-w-5xl rounded-3xl bg-black/5 mx-auto" />
    ),
  }
)

export default function OffresInteractive() {
  return (
    <>
      

      <div className="min-h-[420px]">
        <Demo />
      </div>
    </>
  )
}