import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="hero-gradient absolute inset-0 z-10 opacity-90"></div>
        <div className="h-full w-full bg-gray-900">
          {/* Placeholder for hero image */}
          <div className="h-full w-full bg-gradient-to-br from-oxford-blue to-primary-800 opacity-80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Oxford University
            <span className="block text-accent-red">Racing</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
            Designing, building, and racing single-seater Formula Student cars.
            Where engineering excellence meets competitive motorsport.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/team">Meet the Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-oxford-blue">
              <Link href="/news">Latest News</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">50+</div>
              <div className="text-sm text-gray-300">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">6</div>
              <div className="text-sm text-gray-300">Sub-teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">15+</div>
              <div className="text-sm text-gray-300">Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">2024</div>
              <div className="text-sm text-gray-300">Current Car</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white/80">Scroll to explore</span>
          <div className="h-6 w-4 rounded-full border-2 border-white/50">
            <div className="mx-auto mt-1 h-2 w-1 animate-bounce rounded-full bg-white/80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}