import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Organize your wardrobe, discover what you own, and build outfits from the clothes you already have. Free on iPhone.";

export const metadata: Metadata = {
  metadataBase: new URL("https://trythelookbook.com"),
  title: "The Lookbook — Your closet, in your pocket",
  description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "The Lookbook — Your closet, in your pocket",
    description,
    url: "https://trythelookbook.com",
    siteName: "The Lookbook",
    images: [{ url: "/Preview.png" }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fdfcfa",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable} font-dm antialiased`}>
        {children}
      </body>
    </html>
  );
}
