import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/20" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto pt-20">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8">
          <span className="text-foreground">Empowering</span>{" "}
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Communication
          </span>
          <br />
          <span className="text-foreground">Excellence</span>
        </h1>

        {/* Supporting subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          Transform your business with next-generation VoIP solutions, enterprise-grade 
          telecom infrastructure, and crystal-clear voice connectivity that scales globally.
        </p>

        {/* Value proposition points */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>99.9% Uptime Guarantee</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>50+ Countries Coverage</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Crystal Clear Voice Quality</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/services">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          
          <Link to="/about">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-4 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-primary/20">
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center space-x-8 text-muted-foreground/60">
            <div className="text-2xl font-bold">500+</div>
            <div className="w-px h-8 bg-primary/20" />
            <div className="text-sm">Projects Delivered</div>
            <div className="w-px h-8 bg-primary/20" />
            <div className="text-2xl font-bold">98%</div>
            <div className="w-px h-8 bg-primary/20" />
            <div className="text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}