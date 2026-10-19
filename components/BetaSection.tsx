"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "./FadeInSection";
import InAppBrowserModal from "./InAppBrowserModal";
import { isInAppBrowser, attemptBreakout } from "@/lib/inAppBrowserFix";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/lookbook-virtual-closet/id6760507376";

export default function BetaSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showFallback, setShowFallback] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isInAppBrowser()) return; // normal browser: let the real link behave
    e.preventDefault();
    attemptBreakout(APP_STORE_URL, () => setShowFallback(true));
  };

  const handleRetry = () => {
    setShowFallback(false);
    attemptBreakout(APP_STORE_URL, () => setShowFallback(true));
  };

  return (
    <section
      id="beta"
      className="px-6 sm:px-10 lg:px-16 pb-20 sm:pb-28 max-w-7xl mx-auto"
    >
      <FadeInSection>
        <div className="bg-ink rounded-3xl px-8 sm:px-14 py-14 sm:py-20 text-center relative overflow-hidden">
          {/* Background glows */}
          <div
            className="absolute -top-1/2 -left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(155,142,196,0.25) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-1/2 -right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(232,213,200,0.12) 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-light text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-accent/20">
              ✦ Now Available
            </span>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
              Your closet<br />is waiting.
            </h2>
            <p className="text-sand font-light text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Download Lookbook free on the App Store and start building outfits
              from the clothes you already own.
            </p>

            {/* App Store Button */}
            <motion.a
              href={APP_STORE_URL}
              onClick={handleDownloadClick}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-cream text-ink text-sm font-semibold rounded-xl hover:bg-white transition-colors duration-200 whitespace-nowrap font-dm shadow-lg shadow-black/20 mb-10"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </motion.a>

            {/* Community signup form */}
            <div className="border-t border-white/10 pt-10">
              <p className="text-sand text-sm font-light mb-6 font-dm">
                Want updates & early access to new features? Join the community.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex flex-col items-center gap-3"
                  >
                    <span className="text-4xl">🎉</span>
                    <p className="text-cream text-lg font-medium font-playfair">
                      Welcome to the community!
                    </p>
                    <p className="text-sand text-sm font-light">
                      We&apos;ll keep you in the loop on everything Lookbook.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center max-w-2xl mx-auto"
                  >
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full sm:w-48 px-5 py-3.5 rounded-xl bg-white/[0.12] border border-white/30 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-accent focus:bg-white/[0.18] focus:ring-2 focus:ring-accent/30 transition-all font-dm"
                    />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-white/[0.12] border border-white/30 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-accent focus:bg-white/[0.18] focus:ring-2 focus:ring-accent/30 transition-all font-dm"
                    />
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto px-7 py-3.5 bg-cream text-ink text-sm font-semibold rounded-xl hover:bg-white transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap font-dm shadow-lg shadow-black/20"
                    >
                      {loading ? "Joining…" : "Join Community →"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

              {error && (
                <p className="mt-4 text-red-400 text-sm font-dm">{error}</p>
              )}
            </div>
          </div>

          {showFallback && (
            <InAppBrowserModal
              appStoreUrl={APP_STORE_URL}
              onRetry={handleRetry}
              onClose={() => setShowFallback(false)}
            />
          )}
        </div>
      </FadeInSection>
    </section>
  );
}