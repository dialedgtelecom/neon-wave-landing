import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#AB0F25]/40 to-transparent opacity-70" />

      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Empowering <span className="text-[#AB0F25]">Communication</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Next-gen VoIP, cloud, and app solutions designed for speed, scale, and security.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#AB0F25] hover:bg-[#8c0c1d] rounded-2xl shadow-lg">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl border-gray-600 text-gray-200 hover:bg-gray-800">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}