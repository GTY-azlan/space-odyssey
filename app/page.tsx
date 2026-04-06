import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Quotes from "@/components/Quotes";
import LiveDashboard from "@/components/LiveDashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <LiveDashboard />
      <Pricing />
      <Quotes />
      <Footer />
    </main>
  );
}
