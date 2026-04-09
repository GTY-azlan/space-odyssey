import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ArtemisII from "@/components/ArtemisII";
import LiveDashboard from "@/components/LiveDashboard";
import Pricing from "@/components/Pricing";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ArtemisII />
      <LiveDashboard />
      <Pricing />
      <Quotes />
      <Footer />
    </main>
  );
}
