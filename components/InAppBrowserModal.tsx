"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {
  appStoreUrl: string;
  onRetry: () => void;
  onClose: () => void;
};

export default function InAppBrowserModal({ appStoreUrl, onRetry, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(appStoreUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — copy is a nice-to-have, not critical.
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/10 backdrop-blur-[2px] px-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.98 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="iabf-title"
          className="relative w-full max-w-[400px] rounded-[28px] border border-black/[0.06] bg-[#FAFAF7] px-8 pt-9 pb-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
        >
          {/* Hanger mark, consistent with the site's logo */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
            <Image
              src="/LookbookLogo.png"
              alt="The Lookbook"
              width={32}
              className="object-contain"
            />
          </div>

          <h3 id="iabf-title" className="text-xl font-semibold tracking-tight text-black mb-2">
            Open in Your Browser
          </h3>
          <p className="text-sm leading-relaxed text-black/55 mb-7 max-w-[280px] mx-auto">
            Instagram and Facebook block App Store downloads inside their
            built-in browser. Open this page in Safari or Chrome to continue.
          </p>

          <button
            type="button"
            onClick={onRetry}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/85 mb-2.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 5l7 7-7 7M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Open in My Browser
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full rounded-full border border-black/12 px-7 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-black/[0.04]"
          >
            {copied ? "Copied ✓" : "Copy Link Instead"}
          </button>

          {/* Manual steps, as a quiet pill row rather than a paragraph */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/[0.04] px-4 py-2 text-xs text-black/50">
            <span>Tap</span>
            <span className="font-medium text-black/70">•••</span>
            <span className="text-black/30">→</span>
            <span className="font-medium text-black/70">Open in browser</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}