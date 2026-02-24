import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // ✅ IMPORTANT: enlever output: "export" pour autoriser /api/*
  // output: "export",

  images: {
    // ✅ Sur Vercel, tu peux remettre l’optimisation Next
    unoptimized: false,
  },
}

export default nextConfig