import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" }
  ]

  const services = [
    { label: "VoIP Solutions", href: "#" },
    { label: "Dialer Termination", href: "#" },
    { label: "Inbound Origination", href: "#" },
    { label: "Enterprise Communication", href: "#" },
    { label: "Call Analytics", href: "#" },
    { label: "Telecom Consulting", href: "#" }
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ]

  return (
    <footer className="relative py-20 px-6 bg-background/80 backdrop-blur-sm">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Newsletter section */}
        <GlassmorphismCard className="p-8 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-foreground">Stay</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Connected
            </span>
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest insights on technology trends, industry news, and exclusive updates delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 bg-background/50 border-primary/30 focus:border-primary"
            />
            <Button 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow hover:scale-105 transition-all duration-300 group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </GlassmorphismCard>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg shadow-glow" />
              <span className="text-2xl font-bold text-foreground">Dial Edge Telecom</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Revolutionizing business communication through innovative telecom solutions, reliable infrastructure, and world-class voice connectivity services.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>contact@dialedgetelecom.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <div className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                >
                  {service.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Connect With Us</h4>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:text-primary-glow hover:scale-110 hover:shadow-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <GlassmorphismCard className="p-6">
              <h5 className="text-lg font-semibold text-foreground mb-3">Ready to Start?</h5>
              <p className="text-sm text-muted-foreground mb-4">
                Let's discuss your next project and bring your vision to life.
              </p>
              <Button 
                size="sm"
                variant="outline"
                className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </GlassmorphismCard>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Dial Edge Telecom. All rights reserved. Founded by Mr. Umair Malik.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating network connections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-network-flow" />
        <div className="absolute bottom-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-network-flow" style={{ animationDelay: '2s' }} />
      </div>
    </footer>
  )
}

export default Footer