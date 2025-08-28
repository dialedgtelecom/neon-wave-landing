import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <GlassmorphismCard 
        variant="floating" 
        className="absolute top-20 left-10 w-16 h-16"
        style={{ animationDelay: '0s' }}
      >
        <div />
      </GlassmorphismCard>
      <GlassmorphismCard 
        variant="floating" 
        className="absolute top-40 right-20 w-12 h-12"
        style={{ animationDelay: '2s' }}
      >
        <div />
      </GlassmorphismCard>
      <GlassmorphismCard 
        variant="floating" 
        className="absolute bottom-32 left-1/4 w-20 h-20"
        style={{ animationDelay: '4s' }}
      >
        <div />
      </GlassmorphismCard>
      <GlassmorphismCard 
        variant="floating" 
        className="absolute bottom-20 right-10 w-14 h-14"
        style={{ animationDelay: '1s' }}
      >
        <div />
      </GlassmorphismCard>
      
      {/* Network connection lines */}
      <div className="absolute top-1/4 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-2/3 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-1/3 left-1/5 w-28 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
    </div>
  )
}

export default FloatingElements