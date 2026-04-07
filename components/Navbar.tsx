"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/support", label: "Support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && isHome) {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "nav-glass border-b border-sand/30 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Lookbook home"
            >
              <Image
                src="/lookbookLogo.png"
                alt="Lookbook"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav links — absolutely centered */}
            <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-stone hover:text-ink transition-colors duration-200 font-dm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://testflight.apple.com/join/eGXwRXrS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone hover:text-ink transition-colors font-dm"
              >
                Beta Testing
              </a>
              <Link
                href="/#beta"
                onClick={(e) => handleAnchorClick(e, "/#beta")}
                className="px-5 py-2 bg-ink text-cream text-sm font-medium rounded-full hover:bg-charcoal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md font-dm"
              >
                Download App →
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-ink hover:bg-cream/60 transition-colors"
            >
              <span className="block w-5 h-0.5 bg-current mb-1.5 transition-all duration-200" />
              <span
                className={`block w-5 h-0.5 bg-current mb-1.5 transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span className="block w-5 h-0.5 bg-current transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-6 pt-2 space-y-1 bg-warm-white/95 border-t border-sand/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="block px-3 py-3 text-stone hover:text-ink hover:bg-cream rounded-xl transition-colors text-sm font-dm"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="https://testflight.apple.com/join/eGXwRXrS"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-center border border-sand rounded-xl text-sm text-stone hover:text-ink hover:border-ink transition-colors font-dm"
              >
                Join Beta Testing
              </a>
              <Link
                href="/#beta"
                onClick={(e) => handleAnchorClick(e, "/#beta")}
                className="block px-3 py-3 text-center bg-ink text-cream rounded-xl text-sm font-medium hover:bg-charcoal transition-colors font-dm"
              >
                Download App →
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}