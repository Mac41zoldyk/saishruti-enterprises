import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMG =
  "https://images.pexels.com/photos/12441654/pexels-photo-12441654.jpeg";

const word = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden pt-28 md:pt-32"
    >
      {/* Top label row */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-foreground/60">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Est. 2020 — Mumbai · Surat · Guwahati
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden md:inline"
        >
          Issue №05 / Interiors & Civil
        </motion.span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mt-10 md:mt-16 grid grid-cols-12 gap-6 items-end">
        {/* Headline */}
        <motion.div
          style={{ y: textY }}
          className="col-span-12 lg:col-span-8 relative z-10"
        >
          <h1
            data-testid="hero-headline"
            className="font-serif text-balance text-[clamp(3.25rem,10vw,9rem)] leading-[0.92] tracking-tight"
          >
            <span className="block overflow-hidden">
              <motion.span variants={word} initial="hidden" animate="show" custom={0} className="block">
                Designed to
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                variants={word}
                initial="hidden"
                animate="show"
                custom={1}
                className="block italic font-light text-[#9B6A4A]"
              >
                live in.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={word} initial="hidden" animate="show" custom={2} className="block">
                Built to last.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-md text-base md:text-lg text-foreground/70 leading-relaxed"
          >
            Saishruti Enterprises is a multidisciplinary studio crafting interiors,
            architectural renders, and civil works across India — five years and counting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#portfolio"
              data-testid="hero-cta-portfolio"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-[#9B6A4A] transition-colors"
            >
              View portfolio
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="text-sm tracking-wide border-b border-foreground/40 hover:border-foreground pb-1"
            >
              Book a consultation
            </a>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          style={{ y: imgY }}
          className="col-span-12 lg:col-span-4 relative aspect-[3/4] lg:aspect-[3/4] mt-10 lg:mt-0"
          data-testid="hero-image"
        >
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={HERO_IMG}
              alt="Elegant interior space"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-4 -left-4 bg-[#F7F5F0] px-3 py-2 text-xs uppercase tracking-[0.25em] text-foreground/70">
            Project · Mumbai Residence
          </div>
        </motion.div>
      </div>

      {/* Footer line */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16 md:mt-24 mb-10 flex items-end justify-between">
        <div className="hidden md:flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/60">
          <ArrowDown size={14} className="animate-bounce" />
          Scroll
        </div>
        <div className="grid grid-cols-3 gap-8 md:gap-14 text-sm">
          <div>
            <div className="font-serif text-3xl md:text-4xl">05</div>
            <div className="text-foreground/60 mt-1">Years</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl">120+</div>
            <div className="text-foreground/60 mt-1">Projects</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl">03</div>
            <div className="text-foreground/60 mt-1">Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
