import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import Footer from "@/components/Footer"
import FloatingElements from "@/components/FloatingElements"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default Index;
