/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand tokens. The components already use these class names
      // (text-ink, bg-cream, font-playfair, ...); they were never defined.
      colors: {
        ink: "#1a1a18",
        cream: "#f7f4ef",
        "warm-white": "#fdfcfa",
        stone: "#6e695e", // darkened from #8a8578 to pass WCAG AA on cream/white
        sand: "#d4c9b8",
        accent: { DEFAULT: "#1a1a18", light: "D3D3D3" }, // text-safe purple
        blush: "#e8d5c8",
        charcoal: "#2d2d2b",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm: ["var(--font-dm)", "DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}