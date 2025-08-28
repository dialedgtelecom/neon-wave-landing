import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { Cpu, Shield, Zap, Globe, Brain, Rocket } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "High-Quality Voice",
      description: "Crystal-clear voice connectivity with premium call quality and minimal latency worldwide."
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "Enterprise-grade security protocols protecting your communication channels and business data."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide telecom infrastructure with reliable connectivity and 99.9% uptime guarantee."
    },
    {
      icon: Cpu,
      title: "Smart Routing",
      description: "Intelligent call routing algorithms that optimize connection quality and reduce costs."
    },
    {
      icon: Brain,
      title: "Real-Time Analytics",
      description: "Comprehensive call analytics and reporting for data-driven communication insights."
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Flexible telecom infrastructure that grows with your business needs and requirements."
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Revolutionary
          </span>{" "}
          <span className="text-foreground">Features</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience next-generation technology that pushes the boundaries of what's possible
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <GlassmorphismCard 
            key={feature.title}
            className="p-8 group"
            style={{ 
              animationDelay: `${index * 0.1}s` 
            }}
          >
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              {/* Glow effect */}
              {/* Glow effect - removed animation */}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Animated border */}
            {/* Background glow effect - removed animation */}
          </GlassmorphismCard>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection