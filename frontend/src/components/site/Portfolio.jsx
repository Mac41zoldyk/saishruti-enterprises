import { motion } from "framer-motion";

const projects = [
  {
    title: "Bandra Residence",
    location: "Mumbai",
    type: "Interior Design",
    src: "https://images.unsplash.com/photo-1719782758766-f0a4a3808afe",
    span: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Adajan Apartment",
    location: "Surat",
    type: "Civil + Interior",
    src: "https://images.pexels.com/photos/12281850/pexels-photo-12281850.jpeg",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Hospitality Suite",
    location: "Guwahati",
    type: "3DS Max Render",
    src: "https://images.unsplash.com/photo-1774301266018-57c0b190ed43",
    span: "lg:col-span-5",
    aspect: "aspect-square",
  },
  {
    title: "Garden Villa",
    location: "Mumbai",
    type: "Architecture",
    src: "https://images.pexels.com/photos/6283973/pexels-photo-6283973.jpeg",
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Studio Loft",
    location: "Surat",
    type: "Interior + Render",
    src: "https://images.pexels.com/photos/33296839/pexels-photo-33296839.jpeg",
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Modern Living",
    location: "Guwahati",
    type: "Interior Design",
    src: "https://images.unsplash.com/photo-1640109229792-a26a0ee366ff",
    span: "lg:col-span-6",
    aspect: "aspect-[5/4]",
  },
  {
    title: "Civil Build",
    location: "Mumbai",
    type: "Civil Contractor",
    src: "https://images.pexels.com/photos/17843703/pexels-photo-17843703.jpeg",
    span: "lg:col-span-6",
    aspect: "aspect-[5/4]",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="relative max-w-[1600px] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <div className="flex items-end justify-between mb-12 md:mb-20">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">
            (Selected work) — №03
          </span>
          <h2 className="font-serif mt-6 text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Recent
            <br />
            <span className="italic text-[#9B6A4A]">projects.</span>
          </h2>
        </div>
        <p className="hidden md:block max-w-xs text-foreground/60 leading-relaxed text-right">
          A short edit of homes, hospitality and civil builds completed across
          three Indian cities.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-auto">
        {projects.map((p, i) => (
          <motion.figure
            key={p.title}
            data-testid={`project-card-${i}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`col-span-12 ${p.span} group relative cursor-pointer overflow-hidden`}
          >
            <div className={`relative ${p.aspect} overflow-hidden`}>
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between">
              <div>
                <div className="font-serif text-xl md:text-2xl">
                  {p.title}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-foreground/55 mt-1">
                  {p.location} · {p.type}
                </div>
              </div>
              <span className="text-xs text-foreground/40">
                0{i + 1}/0{projects.length}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
