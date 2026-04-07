import FadeInSection from "./FadeInSection";

const testimonials = [
  {
    stars: 5,
    quote:
      "I used to spend 20 minutes every morning deciding what to wear. Now Lookbook suggests something perfect every day. It's genuinely changed my mornings.",
    avatar: "🧑🏿‍🦱",
    name: "Matthew M.",
    handle: "@matt._06",
  },
  {
    stars: 5,
    quote:
      "I didn’t realize how many clothes I wasn’t wearing until I used The Lookbook. Now I actually use everything in my closet.",
    avatar: "🧑🏿‍🦱",
    name: "Samba S.",
    handle: "@samba.11_lfs",
  },
  {
    stars: 5,
    quote:
      "I love being able to see my whole closet in one place. It’s way easier to decide what to wear.",
    avatar: "👩🏽‍🦱",
    name: "Legacy M.",
    handle: "@legacyalivia",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="px-6 sm:px-10 lg:px-16 py-20 sm:py-28 max-w-7xl mx-auto"
    >
      <FadeInSection>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-px bg-accent" />
          <span className="text-xs tracking-[0.12em] uppercase text-accent font-medium font-dm">
            Real Users
          </span>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-ink mb-4">
          What Our Community Says
        </h2>
        <p className="text-stone font-light leading-relaxed max-w-xl">
          Tens of thousands of style lovers trust Lookbook to manage their
          wardrobes and elevate their daily routines.
        </p>
      </FadeInSection>

      {/* Grid: 3 columns for 3 testimonials */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeInSection key={t.name} delay={i * 0.1}>
            <div className="h-full bg-warm-white border border-sand/50 rounded-2xl p-8 flex flex-col gap-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 transition-all duration-300">
              
              {/* Star Rating */}
              <div className="flex gap-0.5 text-accent text-xs">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-playfair italic text-lg leading-relaxed text-charcoal flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-sand/30">
                <div className="w-11 h-11 rounded-full bg-sand/40 border border-sand/50 flex items-center justify-center text-xl shadow-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-stone font-medium">
                    {t.handle}
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}