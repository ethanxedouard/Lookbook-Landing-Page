import BetaBanner from "@/components/BetaBanner";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BetaSection from "@/components/BetaSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Features />
        <HowItWorks />
        <Testimonials />
        <BetaSection />
      </main>
      <Footer />
    </>
  );
}
