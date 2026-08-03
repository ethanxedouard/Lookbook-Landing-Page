"use client";

import { motion, Variants, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const staggerChildren: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const easeOut: Easing = "easeOut";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

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
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(155,142,196,0.15) 0%, transparent 65%)",
        }}
      />

      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="relative z-10 md:pr-6"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-accent/20">
            {/* Reverted back to text symbol */}
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

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <a
            href="#beta"
            onClick={(e) => scrollToSection(e, "beta")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full border-2 border-ink hover:bg-ink/5 transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* Changed ONLY this one to an Image component */}
            <Image
              src="/arrow-down.svg"
              alt=""
              width={18}
              height={18}
              className="w-4.5 h-4.5"
            />
            Download App
          </a>

          <a
            href="#features"
            onClick={(e) => scrollToSection(e, "features")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-full border-2 border-ink hover:bg-charcoal hover:border-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/20"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Style quiz teaser */}
        <motion.div variants={fadeUp} className="mt-6">
          <Link
            href="/quiz"
            className="group inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-accent/20 rounded-full pl-2 pr-5 py-2 hover:border-accent/40 hover:bg-white transition-all duration-200"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-light text-accent text-sm shrink-0">
              ✦
            </span>
            <span className="text-sm text-ink">
              <span className="font-medium">Take the Closet Quiz</span>
              <span className="text-stone"> — get your score in 60 seconds</span>
            </span>
            <svg
              className="w-4 h-4 text-stone group-hover:translate-x-0.5 group-hover:text-accent transition-all duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={phoneFade}
        initial="initial"
        animate="animate"
        className="relative flex items-center justify-center h-[420px] sm:h-[520px] md:h-[600px] w-full"
      >
        <div className="relative w-full h-full max-w-[800px]">
          <Image
            src="/RealSSPreview.png"
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