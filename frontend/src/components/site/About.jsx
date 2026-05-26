import { motion } from "framer-motion";

const ABOUT_IMG =
  "https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg";

const Stat = ({ label, value }) => (
  <div className="border-t border-foreground/15 pt-4">
    <div className="font-serif text-4xl md:text-5xl leading-none">{value}</div>
    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
      {label}
    </div>
  </div>
);

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <div className="grid grid-cols-12 gap-y-12 gap-x-6">
        <div className="col-span-12 lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-foreground/60"
          >
            (About) — №01
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif mt-6 text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight"
          >
            A studio of
            <br />
            <span className="italic text-[#9B6A4A]">quiet detail.</span>
          </motion.h2>

          <div className="mt-10 space-y-6 text-foreground/75 leading-relaxed max-w-md">
            <p>
              For five years Saishruti Enterprises has shaped spaces that move
              between architecture and intimacy — homes, hospitality, retail
              and civil builds across Mumbai, Surat and Guwahati.
            </p>
            <p>
              We work the full thickness of a project: from first AutoCAD line
              and photoreal 3DS Max render through to on-site civil
              contracting. One studio. One vision. End to end.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <Stat label="Years" value="05" />
            <Stat label="Cities" value="03" />
            <Stat label="Disciplines" value="05" />
          </div>
        </div>

        {/* Image column */}
        <div className="col-span-12 lg:col-span-7 lg:pl-10 relative">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden"
          >
            <img
              src={ABOUT_IMG}
              alt="Luxury living room"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -left-2 md:left-0 bottom-6 md:bottom-10 bg-[#F7F5F0] py-4 px-5 max-w-xs border-l-2 border-[#9B6A4A]"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-foreground/60">
              Operating from
            </div>
            <div className="font-serif text-2xl md:text-3xl mt-2 leading-tight">
              Mumbai · Surat
              <br />
              <span className="italic">Guwahati</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
