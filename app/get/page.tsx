import { headers } from "next/headers";
import { redirect } from "next/navigation";
import GetClient from "./GetClient";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/lookbook-virtual-closet/id6760507376";

function isInAppUA(ua: string) {
  return /Instagram|Barcelona|FBAN|FBAV|FB_IAB|Messenger/i.test(ua);
}

export default async function GetPage() {
  const headersList = await headers();
  const ua = headersList.get("user-agent") || "";

  if (!isInAppUA(ua)) {
    // Normal browser (Safari, Chrome, or any non-Meta webview): skip the
    // client round-trip entirely and redirect before any JS loads.
    redirect(APP_STORE_URL);
  }

  // Instagram/Facebook webview: needs the client-side scheme handoff,
  // since only a page running in the browser can fire instagram://... etc.
  return <GetClient appStoreUrl={APP_STORE_URL} />;
}