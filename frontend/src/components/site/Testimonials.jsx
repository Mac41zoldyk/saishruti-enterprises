import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    q: "They translated a vague idea into a home that feels precisely ours. Quiet, considered, and finished to a standard you rarely see.",
    name: "Aarti & Rohan Mehta",
    project: "Residence · Mumbai",
  },
  {
    q: "The renders matched the final build almost line for line. Working with Saishruti was the calmest construction phase of our lives.",
    name: "Devang Patel",
    project: "Apartment · Surat",
  },
  {
    q: "Honest pricing, sharp drawings, and on-site discipline. They handled both interiors and civil work without losing the design intent.",
    name: "Priya Bhuyan",
    project: "Hospitality · Guwahati",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((p) => (p + 1) % quotes.length),
      7000
    );
    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative bg-[#EAE6E1] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
          (Voices) — №04
        </span>

        <div className="mt-10 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-2 hidden lg:block font-serif text-[12rem] leading-none text-[#9B6A4A]/30 select-none">
            “
          </div>

          <div className="col-span-12 lg:col-span-8 relative min-h-[260px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif italic text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-balance"
              >
                {q.q}
              </motion.blockquote>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={`m-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 flex items-baseline gap-4 text-sm"
              >
                <span className="font-sans uppercase tracking-[0.25em]">
                  — {q.name}
                </span>
                <span className="text-foreground/55">{q.project}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-span-12 lg:col-span-2 flex lg:flex-col items-center lg:items-end gap-4 mt-8 lg:mt-0">
            <button
              data-testid="testimonial-prev"
              onClick={() => setI((p) => (p - 1 + quotes.length) % quotes.length)}
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              data-testid="testimonial-next"
              onClick={() => setI((p) => (p + 1) % quotes.length)}
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
            <div className="text-xs tracking-[0.25em] text-foreground/55 lg:mt-4">
              0{i + 1} / 0{quotes.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
