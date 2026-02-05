"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/projets" },
  { label: "Offres", href: "/offres" },
  { label: "Events", href: "/magazines" },
  { label: "Contact", href: "/contact" },
];

type Theme = "light" | "dark";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  // ✅ Detect theme from page: <main data-theme="dark|light">
  useEffect(() => {
    const readTheme = () => {
      const el =
        (document.querySelector("[data-theme]") as HTMLElement | null) ??
        (document.querySelector("main") as HTMLElement | null);

      const t = el?.getAttribute("data-theme");
      setTheme(t === "dark" ? "dark" : "light");
    };

    readTheme();

    // observe changes if page swaps theme dynamically
    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-theme"],
      childList: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const dark = theme === "dark";

  // ✅ couleurs “auto” selon page
  const textMain = dark ? "text-white" : "text-black";
  const textMuted = dark ? "text-white/75 hover:text-white" : "text-black/70 hover:text-black";
  const borderGlass = dark ? "border-white/15" : "border-black/10";
  const glassBg = scrolled || open
    ? dark
      ? "bg-black/55 shadow-lg"
      : "bg-white/80 shadow-lg"
    : dark
      ? "bg-white/10 shadow-[0_1px_0_rgba(255,255,255,0.08)]"
      : "bg-white/60 shadow-[0_1px_0_rgba(0,0,0,0.06)]";

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={[
              "rounded-2xl border transition-all duration-300 backdrop-blur-xl",
              borderGlass,
              glassBg,
            ].join(" ")}
          >
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <Link
  href="/"
  aria-label="Accueil"
  className="group flex items-center"
>
  <div
    className={[
      "relative h-9 w-auto aspect-[3/1] transition",
      dark ? "invert" : "",
    ].join(" ")}
  >
    <Image
      src="/logo/logo.png"
      alt="Independant Studio"
      fill
      className="object-contain"
      priority
    />
  </div>
</Link>


              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={[
                        "group relative text-sm font-medium transition",
                        textMuted,
                        active ? textMain : "",
                      ].join(" ")}
                    >
                      {item.label}
                      <span
                        className={[
                          "absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full transition-transform duration-300",
                          dark ? "bg-white/80" : "bg-black/80",
                          active ? "scale-x-100" : "group-hover:scale-x-100",
                        ].join(" ")}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* CTA + burger */}
              <div className="flex items-center gap-3">
                <Button
                  className={[
                    "hidden md:inline-flex rounded-full px-6",
                    dark
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-black text-white hover:bg-black/90",
                  ].join(" ")}
                >
                  Prendre rendez-vous
                </Button>

                <button
                  onClick={() => setOpen((v) => !v)}
                  className={[
                    "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full transition",
                    dark ? "hover:bg-white/10 text-white" : "hover:bg-black/5 text-black",
                  ].join(" ")}
                  aria-label="Ouvrir le menu"
                  aria-expanded={open}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        <div
          className={[
            "absolute right-4 top-4 w-[calc(100%-2rem)] rounded-2xl border border-white/10",
            "bg-black/70 backdrop-blur-xl shadow-2xl",
            "p-6 pt-16 transition-transform duration-300",
            open ? "translate-y-0" : "-translate-y-2",
          ].join(" ")}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 text-white"
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>

          <div className="space-y-2">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "flex items-center justify-between rounded-xl px-4 py-3 text-lg transition",
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  <span className="text-white/30">↗</span>
                </Link>
              );
            })}
          </div>

          <Button
            onClick={() => setOpen(false)}
            className="mt-6 w-full rounded-full py-6 text-base bg-white text-black hover:bg-white/90"
          >
            Prendre rendez-vous
          </Button>

          <p className="mt-4 text-xs text-white/45">Réponse sous 24–48h.</p>
        </div>
      </div>
    </>
  );
}
