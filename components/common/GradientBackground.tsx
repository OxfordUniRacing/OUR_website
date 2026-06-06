interface GradientBackgroundProps {
  className?: string
  children?: React.ReactNode
}

export default function GradientBackground({ className = '', children }: GradientBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated Oxford-blue gradient background */}
      <div className="absolute inset-0 hero-animated-gradient" />

      {/* Subtle radial vignette for depth behind the logo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,17,31,0.55)_100%)]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
