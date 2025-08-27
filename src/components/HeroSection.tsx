import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { ArrowRight, Sparkles } from "lucide-react"
import digitalWavesBg from "@/assets/digital-waves-bg.jpg"

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${digitalWavesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        <GlassmorphismCard variant="glow" className="inline-flex items-center space-x-2 px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Welcome to the Future</span>
        </GlassmorphismCard>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-up">
          <span className="bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
            Next-Gen
          </span>
          <br />
          <span className="text-foreground">
            Digital Solutions
          </span>
        </h1>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Experience the convergence of innovation and design. 
          We craft digital experiences that transcend boundaries and redefine possibilities.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow hover:scale-105 transition-all duration-300 group px-8 py-4"
          >
            Explore Solutions
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300 px-8 py-4"
          >
            Watch Demo
          </Button>
        </div>
        
        {/* Stats or features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <GlassmorphismCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </GlassmorphismCard>
          
          <GlassmorphismCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-primary mb-2">10ms</div>
            <div className="text-muted-foreground">Response Time</div>
          </GlassmorphismCard>
          
          <GlassmorphismCard className="p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  )
}

export default HeroSection