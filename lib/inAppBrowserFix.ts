/**
 * lib/inAppBrowserFix.ts
 * -------------------------------------------------------------------------
 * Pure detection + breakout logic. No DOM injection here — the fallback UI
 * lives in <InAppBrowserModal /> so it's a normal React component you can
 * style with Tailwind and keep on-theme.
 * -------------------------------------------------------------------------
 */

export function getUA(): string {
  if (typeof navigator === 'undefined') return '';
  return navigator.userAgent || (navigator as any).vendor || '';
}

export function isIOS(): boolean {
  const ua = getUA();
  return /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
}

export function isAndroid(): boolean {
  return /Android/i.test(getUA());
}

// Instagram + Threads share the same embedded webview and both respond
// to the instagram:// scheme handoff.
export function isInstagram(): boolean {
  return /Instagram|Barcelona/i.test(getUA());
}

// Facebook app, FB Lite, and Messenger all use these UA tokens.
export function isFacebook(): boolean {
  return /FBAN|FBAV|FB_IAB|Messenger/i.test(getUA());
}

export function isInAppBrowser(): boolean {
  return isInstagram() || isFacebook();
}

function stripScheme(url: string): string {
  return url.replace(/^https?:\/\//i, '');
}

/**
 * Fires the platform-correct scheme/intent handoff. Must run synchronously
 * inside the click handler — iOS discards deferred navigation attempts.
 */
export function breakout(appStoreUrl: string): void {
  if (isIOS() && isInstagram()) {
    // IG/Threads intercept this and hand off to Safari.
    // x-safari-https:// via location.href is silently swallowed by IG's webview.
    window.location.href =
      'instagram://extbrowser/?url=' + encodeURIComponent(appStoreUrl);
    return;
  }

  if (isIOS() && isFacebook()) {
    window.open('x-safari-' + appStoreUrl, '_blank');
    return;
  }

  if (isAndroid()) {
    window.location.href =
      'intent://' + stripScheme(appStoreUrl) + '#Intent;scheme=https;end';
    return;
  }

  window.location.href = appStoreUrl;
}

const FALLBACK_DELAY_MS = 1500;

/**
 * Fires the breakout, then watches for the tab losing focus/visibility
 * (= handoff succeeded). Calls onFail if nothing happens within the window.
 * Returns a cleanup function in case the component unmounts mid-wait.
 */
export function attemptBreakout(appStoreUrl: string, onFail: () => void): () => void {
  let settled = false;

  const markSuccess = () => {
    settled = true;
    cleanup();
  };

  function cleanup() {
    document.removeEventListener('visibilitychange', markSuccess);
    window.removeEventListener('pagehide', markSuccess);
    window.removeEventListener('blur', markSuccess);
  }

  document.addEventListener('visibilitychange', markSuccess);
  window.addEventListener('pagehide', markSuccess);
  window.addEventListener('blur', markSuccess);

  breakout(appStoreUrl);

  const timer = window.setTimeout(() => {
    cleanup();
    if (!settled) onFail();
  }, FALLBACK_DELAY_MS);

  return () => {
    cleanup();
    window.clearTimeout(timer);
  };
}