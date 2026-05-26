const items = [
  "Saishruti Enterprises",
  "Interior Design",
  "AutoCAD",
  "3DS Max",
  "Maya",
  "Civil Contractor",
];

export default function Marquee() {
  const sequence = [...items, ...items];
  return (
    <section
      data-testid="marquee-section"
      aria-hidden="true"
      className="relative border-y border-foreground/10 bg-foreground text-background py-6 md:py-8 overflow-hidden"
    >
      <div className="marquee-track whitespace-nowrap flex">
        {sequence.map((item, i) => (
          <span
            key={i}
            className="font-serif italic text-4xl md:text-6xl px-8 md:px-14 flex items-center gap-8 md:gap-14"
          >
            {item}
            <span className="text-[#9B6A4A] not-italic">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
