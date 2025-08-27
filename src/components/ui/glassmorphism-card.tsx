import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "floating" | "glow"
  children: React.ReactNode
}

const GlassmorphismCard = React.forwardRef<HTMLDivElement, GlassmorphismCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "backdrop-blur-md bg-glass-bg border border-glass-border shadow-glass",
      floating: "backdrop-blur-lg bg-glass-bg border border-glass-border shadow-elevated animate-float",
      glow: "backdrop-blur-md bg-glass-bg border border-primary/30 shadow-glow animate-glow-pulse"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300 hover:shadow-elevated hover:border-primary/40",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassmorphismCard.displayName = "GlassmorphismCard"

export { GlassmorphismCard }