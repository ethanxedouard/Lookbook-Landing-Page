import Link from "next/link";

const socialLinks = [
  { href: "https://www.instagram.com/trythelookbook/", label: "Instagram" },
  { href: "https://www.tiktok.com/@trythelookbook", label: "TikTok" },
  { href: "https://x.com/trythelookbook", label: "X (Twitter)" },
  { href: "https://apps.apple.com/us/app/lookbook-virtual-closet/id6760507376", label: "App Store" },
  { href: "mailto:trythelookbook@gmail.com", label: "Contact" },
];

const pageLinks = [
  { href: "/#features", label: "Features" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/40 px-6 sm:px-10 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-playfair text-xl text-ink hover:opacity-80 transition-opacity"
          >
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            Lookbook
          </Link>

          {/* Page links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {pageLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-stone hover:text-ink transition-colors font-dm"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-sand/30 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Social */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone hover:text-ink transition-colors font-dm"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-stone font-dm">
            © {new Date().getFullYear()} Lookbook · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
