import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { Star, Quote } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVision Inc.",
      company: "Fortune 500 Company",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face",
      content: "The team delivered an exceptional digital transformation solution that exceeded our expectations. Their innovative approach reduced our processing time by 75%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "NextGen Startups",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Working with this team was a game-changer. They built our entire platform from scratch and helped us scale from 0 to 100K users in just 6 months.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Digital Innovation",
      company: "MedTech Solutions",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      content: "Their AI-powered analytics platform revolutionized how we handle patient data. The security features are top-notch and compliance was seamless.",
      rating: 5
    },
    {
      name: "James Park",
      role: "VP of Engineering",
      company: "CloudScale Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Impressive technical expertise and attention to detail. They migrated our entire infrastructure to the cloud with zero downtime. Absolutely phenomenal work.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Creative Director",
      company: "Digital Agency Pro",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The design and user experience they created for our clients consistently wins awards. Their creative vision combined with technical skill is unmatched.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "Startup Founder",
      company: "FinTech Innovations",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "From MVP to Series A, they've been our technology partner every step of the way. Their solutions helped us secure $5M in funding.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-to-l from-primary-glow/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Client</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassmorphismCard 
              key={testimonial.name}
              className="p-8 group hover:scale-105 transition-all duration-500 hover:shadow-glow relative"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-primary fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Client info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary/70">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </GlassmorphismCard>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20">
          <GlassmorphismCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </GlassmorphismCard>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection