import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Voices" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#F7F5F0]/75 border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-baseline gap-2"
        >
          <span className="font-serif text-2xl md:text-3xl tracking-tight leading-none">
            Saishruti
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.25em] text-foreground/60">
            Enterprises
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <button
                data-testid={`nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="relative text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button
          data-testid="nav-cta-contact"
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-foreground/80 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          Start a project
        </button>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F7F5F0]/95 backdrop-blur-xl border-t border-foreground/10 overflow-hidden"
            data-testid="nav-mobile-menu"
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    data-testid={`nav-mobile-link-${l.id}`}
                    onClick={() => go(l.id)}
                    className="font-serif text-3xl tracking-tight"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
