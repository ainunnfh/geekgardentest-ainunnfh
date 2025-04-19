import Clients from "@/components/Clients";
import Community from "@/components/Community";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Clients />
      <Community />
    </div>
  );
}
