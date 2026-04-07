import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Support — Lookbook",
  description: "Get help with Lookbook. Browse FAQs or contact our team.",
};

const sidebarLinks = [
  { href: "#contact", label: "Contact Us" },
  { href: "#categories", label: "Browse Topics" },
  { href: "#faq", label: "FAQs" },
];

const faqItems = [
  {
    question: "What is TheLookbook?",
    answer:
      "The Lookbook is a virtual closet app that lets you upload your clothes, organize your wardrobe, and create outfits all in one place.",
  },
  // {
  //   question: "I can't log in to my account. What should I do?",
  //   answer:
  //     'Try tapping "Forgot Password" on the login screen to reset your password. If you signed in with Apple or Google, make sure you’re using the same method you originally used. If you’re still having trouble, contact us at support@lookbook.app with your account email.',
  // },
  // {
  //   question: "My clothes or outfits are missing. How do I fix this?",
  //   answer:
  //     "Your wardrobe is linked to your account. Make sure you’re logged into the correct account and connected to the internet so your data can sync. If items are still missing, contact support and we’ll help restore your data.",
  // },
  {
    question: "Can I use The Lookbook offline?",
    answer:
      "Yes. Your wardrobe data is stored locally on your device, so you can view and create outfits without an internet connection. Some features like syncing require internet access.",
  },
  {
    question: "How do I add clothes to my closet?",
    answer:
      "You can add items by taking a photo in the app or importing images from your camera roll. Once added, you can organize them with categories, colors, and tags.",
  },
  {
    question: "How do I create and save outfits?",
    answer:
      "Select items from your closet and combine them to create an outfit. You can save outfits to view later or reuse when planning what to wear.",
  },
  {
    question: "Is Lookbook free to use?",
    answer:
      "Yes, The Lookbook is completely free and all features are available at no cost.",
  },
  // {
  //   question: "How do I delete my account?",
  //   answer:
  //     "You can delete your account from the app settings or by emailing support@lookbook.app. Once deleted, your data will be permanently removed and cannot be recovered.",
  // },
];

const categories = [
  { icon: "🔐", title: "Account", desc: "Login issues, password reset, account access" },
  { icon: "👗", title: "Wardrobe", desc: "Adding items, organizing clothes, managing your closet" },
  { icon: "🎨", title: "Outfits", desc: "Creating, saving, and editing outfits" },
  { icon: "📱", title: "App Issues", desc: "Crashes, bugs, performance problems" },
  { icon: "☁️", title: "Sync & Data", desc: "Missing items, syncing across devices" },
  { icon: "🔒", title: "Privacy", desc: "Data storage, account security, permissions" },
];

export default function SupportPage() {
  return (
    <PolicyLayout
      badge="💬 Support Center"
      title="We're Here to Help"
      heroBg="light"
      sidebarLinks={sidebarLinks}
    >
      {/* Intro */}
      <p className="text-stone font-light leading-relaxed mb-10 font-dm text-base">
        Having an issue or need a hand? Our team is always ready to assist.
        Reach out and we'll get back to you as soon as possible.
      </p>

      {/* Contact card */}
      <section id="contact" className="mb-12">
        <div className="bg-ink rounded-2xl p-8 relative overflow-hidden">
          <div
            className="absolute -top-1/2 -right-1/4 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(155,142,196,0.25) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 text-center">
            <span className="text-4xl block mb-4">📬</span>
            <h3 className="font-playfair text-2xl text-cream mb-3">
              Email Us Directly
            </h3>
            <p className="text-sand text-sm leading-relaxed mb-6 font-light font-dm max-w-sm mx-auto">
              For bugs, account issues, billing questions, or anything else —
              just drop us a message and we'll take care of it.
            </p>
            <a
              href="mailto:trythelookbook@gmail.com"
              className="inline-flex items-center gap-2 bg-cream text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-colors font-dm"
            >
              ✉ trythelookbook@gmail.com
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 text-sand text-xs font-dm">
              <span>⏱ Avg. response: under 24 hours</span>
              <span>📅 Mon–Fri, 9am–6pm EST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section id="categories" className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-accent" />
          <span className="text-xs tracking-widest uppercase text-accent font-medium font-dm">Browse Topics</span>
        </div>
        <h2 className="font-playfair text-2xl text-ink mb-6">What Can We Help With?</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border border-sand/50 rounded-xl p-4 text-center hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer bg-warm-white"
            >
              <span className="text-2xl block mb-2">{cat.icon}</span>
              <h3 className="text-xs font-medium text-ink mb-1 font-dm">{cat.title}</h3>
              <p className="text-xs text-stone font-light font-dm leading-snug">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-5 h-px bg-accent" />
          <span className="text-xs tracking-widest uppercase text-accent font-medium font-dm">Frequently Asked</span>
        </div>
        <h2 className="font-playfair text-2xl text-ink mb-6">Common Questions</h2>
        <FaqAccordion items={faqItems} />
      </section>
    </PolicyLayout>
  );
}
