import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" }
  ]

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slide-in-up">
      <GlassmorphismCard className="px-6 py-3">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/d419d9a4-959a-4ee7-b1fc-eaa45b3160e6.png" 
              alt="Dial Edge Telecom" 
              className="w-14 h-14 object-contain"
            />
            <span className="font-bold text-lg text-foreground">Dial Edge Telecom</span>
          </div>
          
          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </GlassmorphismCard>
    </nav>
  )
}

export default Navigation