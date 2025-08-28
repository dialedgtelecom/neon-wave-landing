import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { ArrowRight, Code, Cloud, Database, Smartphone, Palette, Search } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "VoIP Solutions",
      description: "Advanced Voice over Internet Protocol services for cost-effective business communication.",
      features: ["Crystal Clear Audio", "Global Coverage", "Cost Reduction", "Easy Integration"],
      price: "Contact Us"
    },
    {
      icon: Cloud,
      title: "Dialer Termination",
      description: "High-performance dialer termination services for call centers and telemarketing operations.",
      features: ["High Success Rates", "Real-Time Monitoring", "Scalable Infrastructure", "Quality Assurance"],
      price: "Contact Us"
    },
    {
      icon: Database,
      title: "Inbound Origination",
      description: "Reliable inbound call services ensuring your business is always reachable worldwide.",
      features: ["24/7 Availability", "Call Analytics", "Multi-Channel Support", "Geographic Flexibility"],
      price: "Contact Us"
    },
    {
      icon: Smartphone,
      title: "Enterprise Communication",
      description: "Comprehensive telecom solutions for large-scale enterprise communication needs.",
      features: ["Custom Solutions", "Dedicated Support", "SLA Guarantees", "Integration Services"],
      price: "Contact Us"
    },
    {
      icon: Palette,
      title: "Call Analytics",
      description: "Advanced call monitoring and analytics for optimized communication performance.",
      features: ["Real-time Reporting", "Performance Metrics", "Quality Monitoring", "ROI Analysis"],
      price: "Contact Us"
    },
    {
      icon: Search,
      title: "Telecom Consulting",
      description: "Expert consultation services to optimize your telecommunication infrastructure.",
      features: ["Infrastructure Review", "Cost Optimization", "Strategy Planning", "Implementation Support"],
      price: "Contact Us"
    }
  ]

  return (
    <section className="py-24 px-6 relative bg-background/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to accelerate your business growth
          </p>
        </div>

        {/* Services grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassmorphismCard 
              key={service.title}
              className="p-8 group relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.15}s` 
              }}
            >
              {/* Service icon and header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Starting</div>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </div>
              </div>

              {/* Service details */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <div className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="outline" 
                className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Hover glow effect */}
              {/* Hover glow effect - removed animation */}
            </GlassmorphismCard>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <GlassmorphismCard className="inline-block p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Let's discuss your unique requirements and create something extraordinary together.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection