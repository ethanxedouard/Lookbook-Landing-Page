import Image from "next/image";
import FadeInSection from "./FadeInSection";

const steps = [
  {
    num: "1",
    title: "Upload",
    description:
      "Add your clothes in seconds by snapping a photo or importing images from your camera roll.",
    active: true,
    img: "/screens/item-upload.png",
    alt: "Quick upload screen: snap a photo of a piece to add it",
  },
  {
    num: "2",
    title: "Organize",
    description:
      "Keep your wardrobe structured by sorting items with categories, colors, seasons, and custom tags.",
    img: "/screens/closet-mockup.png",
    alt: "Closet screen with search and filters",
  },
  {
    num: "3",
    title: "Style",
    description:
      "Create outfits by combining pieces from your closet, then save your favorite looks for later.",
    img: "/screens/outfit.png",
    alt: "Outfit builder with a complete outfit",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream px-6 sm:px-10 lg:px-16 py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-px bg-accent" />
            <span className="text-xs tracking-[0.12em] uppercase text-accent font-medium font-dm">
              Simple Process
            </span>
          </div>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-ink mb-4 max-w-2xl">
            Three Steps to Your Dream Wardrobe
          </h2>
          <p className="text-stone font-light leading-relaxed max-w-xl">
            Getting started takes minutes, not hours. No complicated setup —
            just effortless style management from day one.
          </p>
        </FadeInSection>

        <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-7 left-[20%] right-[20%] h-px bg-sand z-0" />

          {steps.map((step, i) => (
            <FadeInSection key={step.num} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center relative z-10">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-playfair text-xl mb-5 border transition-colors duration-200 ${
                    step.active
                      ? "bg-ink text-cream border-ink"
                      : "bg-warm-white text-ink border-sand"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className="text-lg font-medium text-ink mb-2">{step.title}</h3>
                <p className="text-stone text-sm leading-relaxed font-light max-w-xs">
                  {step.description}
                </p>
                <div className="mt-8 w-full max-w-[210px] overflow-hidden rounded-[28px] border border-sand/60 bg-white shadow-xl shadow-ink/10">
                  <Image src={step.img} alt={step.alt} width={483} height={1049} sizes="210px" className="w-full h-auto" />
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
