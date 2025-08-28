import { Button } from "@/components/ui/button"
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card"
import { ArrowRight, Sparkles } from "lucide-react"
import digitalWavesBg from "@/assets/digital-waves-bg.jpg"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Glow background */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#AB0F25]/40 to-transparent opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative z-10 max-w-4xl px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Empowering <span className="text-[#AB0F25]">Communication</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Next-gen VoIP, cloud, and app solutions designed for speed, scale, and security.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Button size="lg" className="bg-[#AB0F25] hover:bg-[#8c0c1d] rounded-2xl shadow-lg">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl border-gray-600 text-gray-200 hover:bg-gray-800">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
export default HeroSection
