"use client";

import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import InAppBrowserModal from "./InAppBrowserModal";
import { isInAppBrowser, attemptBreakout } from "@/lib/inAppBrowserFix";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/lookbook-virtual-closet/id6760507376";

/**
 * Direct App Store link with the Instagram/Facebook in-app browser breakout.
 * Same behavior as the button in BetaSection, reusable in the nav and hero so
 * visitors reach the App Store in one tap instead of scrolling to #beta first.
 */
export default function DownloadButton({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [showFallback, setShowFallback] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isInAppBrowser()) return; // normal browser: let the real link work
    e.preventDefault();
    attemptBreakout(APP_STORE_URL, () => setShowFallback(true));
  };

  const handleRetry = () => {
    setShowFallback(false);
    attemptBreakout(APP_STORE_URL, () => setShowFallback(true));
  };

  return (
    <>
      <a
        href={APP_STORE_URL}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-press ${className} bg-black text-white`}
      >
        {children}
      </a>
      {showFallback &&
        createPortal(
          <InAppBrowserModal
            appStoreUrl={APP_STORE_URL}
            onRetry={handleRetry}
            onClose={() => setShowFallback(false)}
          />,
          document.body
        )}
    </>
  );
}
