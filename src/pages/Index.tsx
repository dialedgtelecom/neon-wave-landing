import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import FloatingElements from "@/components/FloatingElements"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <HeroSection />
      <FloatingElements />
    </div>
  );
};

export default Index;
