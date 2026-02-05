export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Glow subtil */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* MANIFESTO */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/50">
            Brainlab Studio
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight font-bold">
            Nous créons des contenus
            <br />
            qui <span className="italic font-light text-white/70">
              traversent l’attention
            </span>
          </h2>
        </div>

        {/* NAV / INFOS */}
        <div className="grid gap-16 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <ul className="space-y-4 text-lg">
              <li className="text-white/80">Offres</li>
              <li className="text-white/80">Pourquoi nous</li>
              <li className="text-white/80">Magazine</li>
              <li className="text-white/80">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
              Contact
            </p>
            <ul className="space-y-4 text-lg text-white/80">
              <li>contact@brainlab.studio</li>
              <li>Paris · France</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-widest text-white/40">
              Social
            </p>
            <ul className="space-y-4 text-lg">
              <li className="text-white/80">Instagram</li>
              <li className="text-white/80">LinkedIn</li>
              <li className="text-white/80">Vimeo</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-sm text-white/40">
          <p>© {new Date().getFullYear()} Brainlab Studio</p>

          <div className="flex gap-8">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
