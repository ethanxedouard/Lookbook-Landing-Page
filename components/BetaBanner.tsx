import Link from "next/link";

export default function BetaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-ink via-charcoal to-ink text-cream py-3 px-4 text-sm flex justify-center items-center gap-3 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_70%)] animate-pulse pointer-events-none" />

      <span className="relative z-10 flex items-center gap-3 text-center flex-wrap justify-center">
        <span className="px-3 py-0.5 text-xs font-semibold bg-cream text-ink rounded-full tracking-wide">
          BETA
        </span>
        <span className="font-medium font-dm">
          We&apos;re in beta — get early access to Lookbook
        </span>
        <a
          href="https://testflight.apple.com/join/eGXwRXrS"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-sand transition-colors font-dm"
        >
          Join now →
        </a>
      </span>
    </div>
  );
}
