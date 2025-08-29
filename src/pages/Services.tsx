import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Cloud, Database, Smartphone, BarChart3, Headphones, CheckCircle } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "VoIP Solutions",
      description: "Advanced Voice over Internet Protocol services for cost-effective business communication with crystal-clear audio quality.",
      features: [
        "HD Voice Quality",
        "Global Coverage",
        "Cost Reduction up to 60%",
        "Easy Integration",
        "24/7 Support",
        "Scalable Infrastructure"
      ],
      pricing: "Starting at $0.005/min",
      badge: "Most Popular"
    },
    {
      icon: Cloud,
      title: "Dialer Termination",
      description: "High-performance dialer termination services for call centers and telemarketing operations with superior success rates.",
      features: [
        "High Success Rates",
        "Real-Time Monitoring",
        "Advanced Routing",
        "Quality Assurance",
        "Detailed Analytics",
        "API Integration"
      ],
      pricing: "Custom Pricing",
      badge: null
    },
    {
      icon: Database,
      title: "Inbound Origination",
      description: "Reliable inbound call services ensuring your business is always reachable worldwide with guaranteed uptime.",
      features: [
        "99.9% Uptime",
        "Call Analytics",
        "Multi-Channel Support",
        "Geographic Flexibility",
        "DID Numbers",
        "Call Recording"
      ],
      pricing: "Starting at $2/month per DID",
      badge: null
    },
    {
      icon: Smartphone,
      title: "Enterprise Communication",
      description: "Comprehensive telecom solutions for large-scale enterprise communication needs with dedicated support.",
      features: [
        "Custom Solutions",
        "Dedicated Support",
        "SLA Guarantees",
        "Integration Services",
        "Redundancy",
        "Priority Routing"
      ],
      pricing: "Enterprise Pricing",
      badge: "Enterprise"
    },
    {
      icon: BarChart3,
      title: "Call Analytics",
      description: "Advanced call monitoring and analytics for optimized communication performance and business insights.",
      features: [
        "Real-time Reporting",
        "Performance Metrics",
        "Quality Monitoring",
        "ROI Analysis",
        "Custom Dashboards",
        "Data Export"
      ],
      pricing: "Starting at $50/month",
      badge: null
    },
    {
      icon: Headphones,
      title: "Telecom Consulting",
      description: "Expert consultation services to optimize your telecommunication infrastructure and reduce operational costs.",
      features: [
        "Infrastructure Review",
        "Cost Optimization",
        "Strategy Planning",
        "Implementation Support",
        "Training Programs",
        "Ongoing Support"
      ],
      pricing: "Contact for Quote",
      badge: null
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-primary/10 via-background to-primary-glow/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive telecom solutions designed to scale with your business needs 
            and deliver exceptional communication experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <GlassmorphismCard key={service.title} className="p-10 group relative overflow-hidden">
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {service.badge}
                    </Badge>
                  </div>
                )}

                {/* Service Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Pricing</div>
                    <div className="text-lg font-semibold text-primary">{service.pricing}</div>
                  </div>
                </div>

                {/* Service Details */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-primary to-primary-glow"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <GlassmorphismCard className="p-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-foreground">Ready to Transform Your</span>{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Communication?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a custom solution that 
              perfectly fits your business needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Pricing
              </Button>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services