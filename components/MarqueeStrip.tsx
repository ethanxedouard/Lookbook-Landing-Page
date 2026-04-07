const items = [
  "Smart Closet Organization",
  "Quick & Easy Item Upload",
  "Outfit Builder",
  "Visual Wardrobe Experience",
  "Save & Reuse Outfits",
  "Outfit Planning",
  "Lightning-Fast Performance",
  "Offline Access",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-4 border-y border-sand/30 bg-cream">
      <div className="marquee-track gap-10">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-playfair text-sm text-stone whitespace-nowrap"
          >
            {item}
            <span className="text-accent text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
