import FadeInSection from "./FadeInSection";

const features = [
  {
    icon: "📅",
    title: "Outfit Builder",
    description:
      "Effortlessly mix and match pieces from your closet with an intuitive interface. Create, experiment, and save your favorite looks in seconds.",
  },
  {
    icon: "🗂",
    title: "Wardrobe Tracking",
    description:
      "Digitize your entire closet and keep track of every item. Stay organized and always know what you own.",
  },
  {
    icon: "📸",
    title: "Quick Upload",
    description:
      "Snap a photo or import images to instantly add items to your closet—no hassle, just style.",
  },
  {
    icon: "⚡️",
    title: "Fast & Offline Access",
    description:
      "Enjoy lightning-fast performance and full access to your closet—even without an internet connection.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 max-w-7xl mx-auto"
    >
      <FadeInSection>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs tracking-[0.12em] uppercase text-accent font-medium font-dm">
            What We Offer
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-ink mb-4 max-w-2xl">
          Everything Your Wardrobe Has Been Waiting For
        </h2>
        <p className="text-stone font-light leading-relaxed max-w-xl">
          Designed for everyday use, Lookbook makes it easy to organize your wardrobe, create outfits, and take the guesswork out of getting dressed.
        </p>
      </FadeInSection>

      {/* Grid changed to a consistent 4-column layout on large screens */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <FadeInSection key={f.title} delay={0.1 + i * 0.1}>
            <div className="h-full bg-warm-white border border-sand/50 rounded-2xl p-7 relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 transition-all duration-300">
              
              {/* Subtle hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 to-blush/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              
              <h3 className="text-ink text-lg font-medium mb-3">
                {f.title}
              </h3>
              
              <p className="text-stone text-sm leading-relaxed font-light">
                {f.description}
              </p>
              
              {/* Subtle background glow on hover */}
              <div 
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
              />
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}