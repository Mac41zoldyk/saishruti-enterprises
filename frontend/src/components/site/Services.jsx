import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "interior",
    no: "01",
    title: "Interior Design",
    blurb:
      "Residential, hospitality and retail interiors crafted around how a space is actually lived in.",
    image:
      "https://images.pexels.com/photos/33394157/pexels-photo-33394157.jpeg",
  },
  {
    id: "autocad",
    no: "02",
    title: "AutoCAD Drafting",
    blurb:
      "Precision technical drawings, working layouts and execution-ready CAD documentation.",
    image:
      "https://images.unsplash.com/photo-1757344454333-cc666252e596",
  },
  {
    id: "3dsmax",
    no: "03",
    title: "3DS Max Visualisation",
    blurb:
      "Photoreal interior and architectural renders that let clients see the build before it begins.",
    image:
      "https://images.pexels.com/photos/12281850/pexels-photo-12281850.jpeg",
  },
  {
    id: "maya",
    no: "04",
    title: "Maya Modeling",
    blurb:
      "Detailed 3D modeling for custom furniture, fixtures and product-level architectural detail.",
    image:
      "https://images.unsplash.com/photo-1640109229792-a26a0ee366ff",
  },
  {
    id: "civil",
    no: "05",
    title: "Civil Contracting",
    blurb:
      "Full-scope civil execution — structure, finishes, MEP coordination and on-site delivery.",
    image:
      "https://images.pexels.com/photos/17843703/pexels-photo-17843703.jpeg",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-foreground text-background py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-background/60">
              (Services) — №02
            </span>
            <h2 className="font-serif mt-6 text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              What we
              <br />
              <span className="italic text-[#C89B7B]">make.</span>
            </h2>
          </div>
          <p className="hidden md:block max-w-sm text-background/60 leading-relaxed">
            Five disciplines under one roof. From the first sketch to the
            final coat of paint, we work the whole arc of a project.
          </p>
        </div>

        <ul className="relative">
          {services.map((s, i) => (
            <li
              key={s.id}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative border-t border-background/15 last:border-b"
              data-testid={`service-row-${s.id}`}
            >
              <a
                href="#contact"
                className="grid grid-cols-12 gap-4 items-center py-8 md:py-10 px-1 cursor-pointer"
              >
                <span className="col-span-2 md:col-span-1 text-sm md:text-base font-sans text-background/50">
                  {s.no}
                </span>
                <h3 className="col-span-9 md:col-span-6 font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight transition-transform duration-500 group-hover:translate-x-3">
                  {s.title}
                </h3>
                <p className="hidden md:block col-span-4 text-sm text-background/60 leading-relaxed">
                  {s.blurb}
                </p>
                <span className="col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={28}
                    className="text-background/70 transition-transform duration-500 group-hover:rotate-45 group-hover:text-[#C89B7B]"
                  />
                </span>
              </a>
            </li>
          ))}

          {/* Hover floating image */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[320px] aspect-[4/5] overflow-hidden shadow-2xl"
                style={{ zIndex: 5 }}
              >
                <img
                  src={services.find((x) => x.id === hovered)?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}
