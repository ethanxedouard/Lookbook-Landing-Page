"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

// Fade-in wrapper
export function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Animated Email Capture CTA
function EmailCapture({ emailRef }: { emailRef: React.RefObject<HTMLElement | null> }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        const { error } = await res.json();
        alert(error || "Error submitting email. Please try again.");
      }
    } catch (err) {
      console.error("Waitlist submission error:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <FadeInSection>
      <section
        ref={emailRef}
        className="w-full max-w-5xl px-6 py-16 text-center bg-gray-100 rounded-2xl"
      >
        <h2 className="text-3xl font-bold">Be the first to try The Lookbook</h2>
        <p className="mt-2 text-gray-600">Coming soon on iOS and Android</p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex justify-center gap-3 flex-col sm:flex-row items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 w-64 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-xl font-medium"
            >
              Join Waitlist
            </motion.button>
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-green-600 font-medium"
          >
            🎉 Thanks for joining! We’ll keep you updated.
          </motion.p>
        )}
      </section>
    </FadeInSection>
  );
}

export default function Home() {
  const emailRef = useRef<HTMLElement | null>(null);

  const scrollToWaitlist = () => {
    emailRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <FadeInSection>
        <section className="w-full max-w-5xl px-6 py-24 text-center">
          <Image
            src="/lookbookLogo.png"
            alt="The Lookbook logo"
            width={160}
            height={160}
            className="mx-auto mb-6"
          />
          <h1 className="text-5xl font-bold">Your closet, in your pocket.</h1>
          <p className="mt-4 text-lg text-gray-600">
            Organize, save, and style your outfits effortlessly.
          </p>
          <button
            onClick={scrollToWaitlist}
            className="mt-6 px-8 py-3 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Join the Waitlist
          </button>
        </section>
      </FadeInSection>

      {/* Features */}
      <FadeInSection>
        <section className="w-full max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Digitize Your Closet",
              description: "Upload and organize all your pieces in one place.",
            },
            {
              title: "Plan Outfits",
              description: "Create and save looks for any occasion.",
            },
            {
              title: "Carry It Anywhere",
              description: "Your wardrobe, always with you on your phone.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl shadow-md bg-gray-50"
            >
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </FadeInSection>

      {/* How It Works */}
      <section className="w-full max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              step: 1,
              title: "Upload",
              description:
                "Snap a pic of your clothes or import from your camera roll.",
            },
            {
              step: 2,
              title: "Organize",
              description:
                "Sort by category, color, or season with smart tags.",
            },
            {
              step: 3,
              title: "Style",
              description:
                "Mix & match pieces to plan outfits and save your favorite looks.",
            },
          ].map((item) => (
            <FadeInSection key={item.step}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Screenshots / Demo */}
      <FadeInSection>
        <section className="w-full max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Preview the App</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <Image
              src="/LoginScreenPreview.png"
              alt="App Screenshot 1"
              width={240}
              height={480}
              className="rounded-xl shadow-lg"
            />
            <Image
              src="/HomeScreenPreview.png"
              alt="App Screenshot 2"
              width={240}
              height={480}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>
      </FadeInSection>

      {/* Email Capture CTA */}
      <EmailCapture emailRef={emailRef} />

      {/* Footer */}
      <footer className="mt-20 py-10 text-center text-gray-500">
        <div className="flex justify-center gap-6 mb-4 flex-wrap">
          {[
            { href: "https://www.instagram.com/trythelookbook/", label: "Instagram" },
            { href: "https://www.tiktok.com/@trythelookbook?lang=en", label: "TikTok" },
            { href: "https://x.com/trythelookbook", label: "X" },
            { href: "mailto:trythelookbook@gmail.com", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} The Lookbook · All rights reserved</p>
      </footer>
    </main>
  );
}
