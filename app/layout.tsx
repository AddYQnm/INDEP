import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import IntroWrapper from "./intro/IntroWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// ✅ Mets ton vrai domaine ici
const SITE_URL = "https://independantstudio.fr"
const SITE_NAME = "Indépendant Studio"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Agence marketing & création de contenus à Rouen`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Agence marketing & création de contenus basée à Rouen : stratégie, production photo/vidéo, réseaux sociaux et publicité. Partenaire de croissance digitale en Normandie.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Agence marketing & création de contenus à Rouen`,
    description:
      "Stratégie, production photo/vidéo, réseaux sociaux et publicité. Basé à Rouen, en Normandie.",
    // ✅ Ajoute une image OG (1200x630) dans /public/og.jpg
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE_NAME }],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Agence marketing à Rouen`,
    description:
      "Création de contenus & marketing digital à Rouen : photo/vidéo, social media, publicité.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ JSON-LD (à personnaliser: adresse exacte, téléphone, réseaux…)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/og.jpg`,
    description:
      "Agence marketing & création de contenus basée à Rouen : stratégie, production photo/vidéo, réseaux sociaux et publicité.",
    areaServed: ["Rouen", "Normandie", "Seine-Maritime"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rouen",
      addressRegion: "Normandie",
      addressCountry: "FR",
      // streetAddress: "…",        // optionnel
      // postalCode: "…",           // optionnel
    },
    // telephone: "+33…",            // optionnel
    // sameAs: ["https://instagram.com/…", "https://www.linkedin.com/company/…"],
  }

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased fixed-grain`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="content-above-grain">
          <IntroWrapper>
            <Navbar />
            {children}
            <Footer />
          </IntroWrapper>
        </div>
      </body>
    </html>
  )
}