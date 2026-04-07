"use client";

import { motion, Variants, Easing } from "framer-motion";
import Image from "next/image";

// Stagger children animation
const staggerChildren: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

// Define a proper easing type
const easeOut: Easing = "easeOut";

// Fade-up animation for text
const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Fade animation for phone image
const phoneFade: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-0px)] grid md:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-16 pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-warm-white via-cream to-blush/60 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(155,142,196,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Left: copy */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative z-10 md:pr-6"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-accent/20">
            ✦ Style. Simplified.
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-playfair text-4xl sm:text-5xl lg:text-[4rem] leading-[1.1] text-ink mb-5"
        >
          Your Closet,{" "}
          <em className="text-accent not-italic font-playfair">In Your Pocket.</em>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-stone leading-relaxed max-w-[480px] mb-8 font-light"
        >
          Organize your wardrobe, style outfits with ease, and save your favorite
          looks—all in one place.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <a
            href="#beta"
            onClick={(e) => scrollToSection(e, "beta")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full border-2 border-ink hover:bg-ink/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            ⬇ Download App
          </a>

          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full border-2 border-ink hover:bg-charcoal hover:border-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/20"
          >
            Explore Features
          </a>
        </motion.div>
      </motion.div>

      {/* Right: Phone Image */}
      <motion.div
        variants={phoneFade}
        initial="initial"
        animate="animate"
        className="relative flex items-center justify-center h-[420px] sm:h-[520px] md:h-[600px] w-full"
      >
        <div className="relative w-full h-full max-w-[800px]">
          <Image
            src="/Preview.png"
            alt="App previews"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}