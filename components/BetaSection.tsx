"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "./FadeInSection";

export default function BetaSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      // If no API route yet, just show success (placeholder behaviour)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
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
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-accent/20">
              ✦ Early Access
            </span>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-cream mb-4">
              Ready to Reinvent<br />Your Wardrobe?
            </h2>
            <p className="text-sand font-light text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Join thousands of early adopters. Be among the first to experience
              Lookbook and shape the future of personal style.
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
                    You&apos;re on the list!
                  </p>
                  <p className="text-sand text-sm font-light">
                    We&apos;ll email you as soon as Lookbook is ready for you.
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
                    {loading ? "Joining…" : "Join Waitlist →"}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {error && (
              <p className="mt-4 text-red-400 text-sm font-dm">{error}</p>
            )}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}