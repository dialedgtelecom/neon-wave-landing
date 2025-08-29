import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Globe } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize business communication through innovative telecom solutions that connect the world."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Over 150 professionals dedicated to delivering world-class communication infrastructure."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We maintain 99.9% uptime and crystal-clear voice quality across all our services."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers in 50+ countries with reliable, scalable telecom solutions."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-primary/10 via-background to-primary-glow/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">About</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Dial Edge Telecom
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded by Mr. Umair Malik, we're pioneering the future of business communication 
            with cutting-edge VoIP solutions and enterprise-grade telecom infrastructure.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassmorphismCard className="p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Dial Edge Telecom was born from a vision to transform how businesses communicate. 
                  Founded with the belief that reliable, high-quality voice communication should be 
                  accessible to companies of all sizes, we've grown to become a trusted partner 
                  for organizations worldwide.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  From our headquarters in San Francisco, we've built a global network that delivers 
                  crystal-clear voice quality, innovative routing algorithms, and enterprise-grade 
                  security to over 500 satisfied clients across 50+ countries.
                </p>
                <Button className="bg-gradient-to-r from-primary to-primary-glow">
                  Contact Our Team
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">2019</div>
                    <div className="text-muted-foreground">Founded</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-foreground">Our</span>{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <GlassmorphismCard key={value.title} className="p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassmorphismCard className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About