import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"
import GetStartedForm from "./GetStartedForm"

const Navigation = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" }
  ]

  const serviceItems = [
    { label: "VoIP Solutions", href: "/services#voip" },
    { label: "Dialer Termination", href: "/services#dialer" },
    { label: "Inbound Origination", href: "/services#inbound" },
    { label: "Enterprise Communication", href: "/services#enterprise" },
    { label: "Call Analytics", href: "/services#analytics" },
    { label: "Telecom Consulting", href: "/services#consulting" }
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <GlassmorphismCard className="px-6 py-3">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d419d9a4-959a-4ee7-b1fc-eaa45b3160e6.png" 
              alt="Dial Edge Telecom" 
              className="w-16 h-16 object-contain"
            />
            <span className="font-bold text-lg text-foreground">Dial Edge Telecom</span>
          </Link>
          
          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-foreground relative group transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-muted-foreground hover:text-foreground relative group flex items-center transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1 transition-transform" style={{
                  transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-300" />
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.label}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                    <div className="border-t border-primary/20 mt-2 pt-2">
                      <Link
                        to="/services"
                        className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => setIsFormOpen(true)}
          >
            Get Started
          </Button>
        </div>
      </GlassmorphismCard>

      {/* Get Started Form Modal */}
      <GetStartedForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </nav>
  )
}

export default Navigation