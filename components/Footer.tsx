import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* glow / texture */}
      <div className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[780px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
              Independant Studio — Rouen
            </p>

            <h2 className="text-4xl md:text-6xl leading-[1.05] font-bold tracking-[-0.02em]">
              Des contenus & expériences
              <br />
              qui{" "}
              <span className="italic font-light text-white/75">
                captent l’attention
              </span>
              .
            </h2>

            <p className="mt-5 max-w-xl text-sm md:text-base text-white/60 leading-relaxed">
              Branding, production, design et développement web. Une approche
              précise, cinématographique, orientée conversion.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                Démarrer un projet <span className="translate-y-[1px]">→</span>
              </Link>

              <Link
                href="/projets"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                Voir les projets
              </Link>
            </div>
          </div>

          {/* Quick facts */}
          <div className="md:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-xs font-bold tracking-[0.2em] text-white/60">
                  BASÉ À
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Rouen, France
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-xs font-bold tracking-[0.2em] text-white/60">
                  DISPONIBILITÉ
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  Nouveaux projets
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-xs font-bold tracking-[0.2em] text-white/60">
                CONTACT
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <a
                  className="block text-white/85 hover:text-white transition"
                  href="mailto:contact@independantstudio.fr"
                >
                  contact@independantstudio.fr
                </a>
                <a
                  className="block text-white/60 hover:text-white/85 transition"
                  href="tel:+33600000000"
                >
                  +33 6 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <ul className="space-y-3 text-base">
              <li>
                <Link className="text-white/80 hover:text-white" href="/offres">
                  Offres
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 hover:text-white"
                  href="/pourquoi-nous"
                >
                  Réalisationson
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 hover:text-white"
                  href="/magazines"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/80 hover:text-white"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
              Services
            </p>
            <ul className="space-y-3 text-base text-white/80">
              <li>Production & contenus</li>
              <li>Direction artistique</li>
              <li>Web design & développement</li>
              <li>Facebook Ads & conversion</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/40">
              Social
            </p>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  className="text-white/80 hover:text-white"
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-white/80 hover:text-white"
                  href="https://vimeo.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vimeo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* bottom */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-white/45">
          <p>© {new Date().getFullYear()} Independant Studio. Tous droits réservés.</p>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link className="hover:text-white" href="/mentions-legales">
              Mentions légales
            </Link>
            <Link className="hover:text-white" href="/confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
