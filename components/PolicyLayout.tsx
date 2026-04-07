import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface PolicyLayoutProps {
  badge: string;
  title: string;
  meta?: string;
  heroBg?: "light" | "dark";
  children: ReactNode;
  sidebarLinks?: { href: string; label: string }[];
}

export default function PolicyLayout({
  badge,
  title,
  meta,
  heroBg = "light",
  children,
  sidebarLinks,
}: PolicyLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <div
          className={`pt-24 pb-14 px-6 sm:px-10 text-center ${
            heroBg === "dark"
              ? "bg-gradient-to-br from-ink to-charcoal"
              : "bg-gradient-to-br from-cream to-blush/60"
          }`}
        >
          <span
            className={`inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 border ${
              heroBg === "dark"
                ? "bg-accent/20 text-accent border-accent/20"
                : "bg-accent-light text-accent border-accent/20"
            }`}
          >
            {badge}
          </span>
          <h1
            className={`font-playfair text-3xl sm:text-5xl mb-3 ${
              heroBg === "dark" ? "text-cream" : "text-ink"
            }`}
          >
            {title}
          </h1>
          {meta && (
            <p
              className={`text-sm font-dm ${
                heroBg === "dark" ? "text-sand" : "text-stone"
              }`}
            >
              {meta}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-start">
          {/* Sidebar */}
          {sidebarLinks && sidebarLinks.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-cream rounded-2xl p-5 border border-sand/40">
                <p className="text-xs tracking-widest uppercase text-stone font-medium mb-4 font-dm">
                  Contents
                </p>
                <ul className="space-y-1">
                  {sidebarLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="block text-sm text-stone hover:text-accent hover:bg-accent-light/50 px-3 py-2 rounded-lg transition-colors font-dm"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          {/* Main content */}
          <div className="max-w-2xl w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
