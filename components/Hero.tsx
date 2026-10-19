"use client";

import { motion, Variants, Easing } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DownloadButton from "./DownloadButton";

const staggerChildren: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const easeOut: Easing = "easeOut";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const phoneFade: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-warm-white via-cream to-blush/60">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(155,142,196,0.15) 0%, transparent 65%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-16 pt-24 pb-10 md:pt-24 md:pb-12">
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
            className="font-playfair text-[2.6rem] sm:text-5xl lg:text-[4rem] leading-[1.05] text-ink mb-5"
          >
            Your closet,{" "}
            <span className="text-accent">in your pocket.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-stone leading-relaxed max-w-[480px] mb-8"
          >
            Organize your wardrobe, discover what you own, and build outfits
            from the clothes you already have — all in one app.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <DownloadButton className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-ink text-cream text-sm font-semibold rounded-full hover:bg-charcoal hover:shadow-lg hover:shadow-ink/20">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </DownloadButton>

            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="btn-press inline-flex items-center justify-center px-7 py-3.5 text-ink text-sm font-medium rounded-full border border-ink/20 hover:border-ink/50 hover:bg-white/60"
            >
              See how it works
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-stone"
          >
            <li className="flex items-center gap-2">
              <span className="text-accent tracking-wider" aria-hidden="true">★★★★★</span>
              5.0 on the App Store
            </li>
            <li>Free, no subscription</li>
            <li>No item limits</li>
          </motion.ul>

          {/* Style quiz teaser */}
          <motion.div variants={fadeUp} className="mt-7">
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
                aria-hidden="true"
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
          className="relative flex items-center justify-center w-full"
        >
          <Image
            src="/screens/mockup.png"
            alt="The Lookbook app: closet, outfit builder and saved outfits"
            width={666}
            height={543}
            priority
            sizes="(max-width: 768px) 100vw, 620px"
            className="w-[85%] max-w-full md:max-w-[450px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
