"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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
function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 connect to your backend / waitlist API here
    setSubmitted(true);
  };

  return (
    <FadeInSection>
      <section className="w-full max-w-5xl px-6 py-16 text-center bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold">Be the first to try The Lookbook</h2>
        <p className="mt-2 text-gray-600">Coming soon on iOS and Android</p>

        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex justify-center gap-3"
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
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <FadeInSection>
        <section className="w-full max-w-5xl px-6 py-24 text-center">
          <img
            src="/lookbookLogo.png"
            alt="The Lookbook logo"
            className="mx-auto w-40 mb-6"
          />
          <h1 className="text-5xl font-bold">Your closet, in your pocket.</h1>
          <p className="mt-4 text-lg text-gray-600">
            Organize, save, and style your outfits effortlessly.
          </p>
          <button className="mt-6 px-8 py-3 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition">
            Join the Waitlist
          </button>
        </section>
      </FadeInSection>

      {/* Features */}
      <FadeInSection>
        <section className="w-full max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-2xl shadow-md bg-gray-50">
            <h3 className="font-semibold text-xl">Digitize Your Closet</h3>
            <p className="mt-2 text-gray-600">
              Upload and organize all your pieces in one place.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-gray-50">
            <h3 className="font-semibold text-xl">Plan Outfits</h3>
            <p className="mt-2 text-gray-600">
              Create and save looks for any occasion.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-md bg-gray-50">
            <h3 className="font-semibold text-xl">Carry It Anywhere</h3>
            <p className="mt-2 text-gray-600">
              Your wardrobe, always with you on your phone.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* How It Works */}
      <section className="w-full max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <FadeInSection>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-semibold text-xl">Upload</h3>
              <p className="mt-2 text-gray-600">
                Snap a pic of your clothes or import from your camera roll.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-semibold text-xl">Organize</h3>
              <p className="mt-2 text-gray-600">
                Sort by category, color, or season with smart tags.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black text-white text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-semibold text-xl">Style</h3>
              <p className="mt-2 text-gray-600">
                Mix & match pieces to plan outfits and save your favorite looks.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>


      {/* Screenshots / Demo */}
      <FadeInSection>
        <section className="w-full max-w-5xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Preview the App</h2>
          <div className="flex justify-center gap-6">
            <img
              src="/LoginScreenPreview.png"
              alt="App Screenshot 1"
              className="rounded-xl shadow-lg w-60"
            />
            <img
              src="/HomeScreenPreview.png"
              alt="App Screenshot 2"
              className="rounded-xl shadow-lg w-60"
            />
          </div>
        </section>
      </FadeInSection>

      {/* Email Capture CTA */}
      <EmailCapture />

      {/* Footer */}
      <footer className="mt-20 py-10 text-center text-gray-500">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/trythelookbook/"
            target="_blank"
            className="hover:text-black"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@trythelookbook?lang=en"
            target="_blank"
            className="hover:text-black"
          >
            TikTok
          </a>
          <a
            href="https://x.com/trythelookbook"
            target="_blank"
            className="hover:text-black"
          >
            X
          </a>
          <a href="mailto:trythelookbook@gmail.com" className="hover:text-black">
            Contact
          </a>
        </div>
        <p>© {new Date().getFullYear()} The Lookbook · All rights reserved</p>
      </footer>
    </main>
  );
}
