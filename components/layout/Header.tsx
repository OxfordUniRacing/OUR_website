import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-oxford-blue flex items-center justify-center">
            <span className="text-white font-bold text-lg">OUR</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-xl font-bold text-oxford-blue">Oxford University Racing</div>
            <div className="text-sm text-gray-600">Formula Student Team</div>
          </div>
        </Link>

        {/* Navigation */}
        <Navigation />

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-accent px-4 py-2 text-sm font-medium"
          >
            Join the Team
          </Link>
        </div>
      </div>
    </header>
  )
}