export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-foreground text-background"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Saishruti
              <br />
              <span className="italic text-[#C89B7B]">Enterprises.</span>
            </div>
            <p className="mt-8 max-w-md text-background/60 leading-relaxed">
              Interior design, architectural visualisation and civil
              contracting — across Mumbai, Surat and Guwahati.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-background/55">
              Studio
            </div>
            <ul className="mt-4 space-y-2 text-background/85">
              <li><a href="#about" className="hover:text-[#C89B7B] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[#C89B7B] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#C89B7B] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#C89B7B] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-6 lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-background/55">
              Cities
            </div>
            <ul className="mt-4 space-y-2 text-background/85">
              <li>Mumbai</li>
              <li>Surat</li>
              <li>Guwahati</li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.25em] text-background/55">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-background/85">
              <li>hello@saishruti.studio</li>
              <li>+91 98XXX 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/15 mt-16 pt-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/50 uppercase tracking-[0.25em]">
          <span>© {new Date().getFullYear()} Saishruti Enterprises</span>
          <span>Designed in India · Built to last</span>
        </div>
      </div>
    </footer>
  );
}
