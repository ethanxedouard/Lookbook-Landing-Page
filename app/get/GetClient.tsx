"use client";

import { useEffect, useState } from "react";
import { attemptBreakout } from "@/lib/inAppBrowserFix";
import InAppBrowserModal from "@/components/InAppBrowserModal";

export default function GetClient({ appStoreUrl }: { appStoreUrl: string }) {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Fires immediately on page load — this is the "tap bio link, land here,
    // instantly bounce to Safari" step. No user click needed for this one,
    // since location.href scheme swaps don't require a gesture the way
    // window.open() does.
    const cleanup = attemptBreakout(appStoreUrl, () => setShowFallback(true));
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRetry = () => {
    setShowFallback(false);
    attemptBreakout(appStoreUrl, () => setShowFallback(true));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF7] px-6 text-center">
      <div className="mb-6 h-8 w-8 animate-spin rounded-full border-2 border-black/10 border-t-black/60" />
      <p className="text-sm text-black/50">Opening the App Store…</p>

      {showFallback && (
        <InAppBrowserModal
          appStoreUrl={appStoreUrl}
          onRetry={handleRetry}
          onClose={() => setShowFallback(false)}
        />
      )}
    </div>
  );
}