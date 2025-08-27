import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { ArrowRight, Code, Cloud, Database, Smartphone, Palette, Search } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke software solutions crafted with cutting-edge technologies and frameworks.",
      features: ["React & Next.js", "Node.js Backend", "TypeScript", "Progressive Web Apps"],
      price: "From $5,000"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure designed for performance, security, and growth.",
      features: ["AWS/Azure Setup", "Microservices", "Auto-scaling", "CI/CD Pipelines"],
      price: "From $3,000"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Transform raw data into actionable insights with advanced analytics platforms.",
      features: ["Data Warehousing", "ETL Pipelines", "Real-time Analytics", "ML Integration"],
      price: "From $4,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      price: "From $8,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with optimal user experience.",
      features: ["Design Systems", "Prototyping", "User Research", "Accessibility"],
      price: "From $2,500"
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Digital marketing strategies to boost your online presence and conversions.",
      features: ["Technical SEO", "Content Strategy", "PPC Campaigns", "Analytics Setup"],
      price: "From $1,500"
    }
  ]

  return (
    <section className="py-24 px-6 relative bg-background/50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
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
              className="p-8 group hover:scale-105 transition-all duration-500 hover:shadow-glow relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.15}s` 
              }}
            >
              {/* Service icon and header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Starting</div>
                  <div className="text-lg font-semibold text-primary">{service.price}</div>
                </div>
              </div>

              {/* Service details */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
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
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
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
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
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