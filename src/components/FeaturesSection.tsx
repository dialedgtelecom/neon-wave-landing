import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { Cpu, Shield, Zap, Globe, Brain, Rocket } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your data patterns in real-time, providing actionable insights."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Military-grade encryption with quantum-resistant protocols ensures your data stays protected."
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Edge computing infrastructure delivers sub-10ms response times across global networks."
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Seamlessly scale from startup to enterprise with our distributed cloud architecture."
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "Neural networks predict user behavior and system needs before they happen."
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Deploy complex applications in minutes with our automated CI/CD pipelines."
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
            className="p-8 group hover:scale-105 transition-all duration-500 hover:shadow-glow"
            style={{ 
              animationDelay: `${index * 0.1}s` 
            }}
          >
            {/* Icon */}
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
          </GlassmorphismCard>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection