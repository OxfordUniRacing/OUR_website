import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import { getSponsors } from '@/lib/content'
import { getSponsorTierColor } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Meet our valued partners and sponsors who support Oxford University Racing.',
}

export default function SponsorsPage() {
  const sponsors = getSponsors()

  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = []
    }
    acc[sponsor.tier].push(sponsor)
    return acc
  }, {} as Record<string, typeof sponsors>)

  const tierOrder = ['title', 'platinum', 'gold', 'silver', 'bronze']
  const tierNames = {
    title: 'Title Sponsor',
    platinum: 'Platinum Partners',
    gold: 'Gold Partners',
    silver: 'Silver Partners',
    bronze: 'Bronze Partners',
  }

  const tierDescriptions = {
    title: 'Our premier partner supporting all aspects of our program',
    platinum: 'Key partners providing substantial technical and financial support',
    gold: 'Important partners contributing to our competitive success',
    silver: 'Valued partners supporting specific team initiatives',
    bronze: 'Supporting partners helping us achieve our goals',
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Our Partners"
            subtitle="Oxford University Racing is proud to work with these outstanding organizations who share our commitment to engineering excellence and innovation."
            centered
          />
        </div>

        {/* Sponsorship Tiers */}
        <div className="space-y-16">
          {tierOrder.map((tier) => {
            const tierSponsors = sponsorsByTier[tier]
            if (!tierSponsors || tierSponsors.length === 0) return null

            return (
              <div key={tier} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-oxford-blue">
                    {tierNames[tier as keyof typeof tierNames]}
                  </h2>
                  <div className={`mx-auto mt-2 h-1 w-20 rounded ${getSponsorTierColor(tier)}`} />
                  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    {tierDescriptions[tier as keyof typeof tierDescriptions]}
                  </p>
                </div>

                <div className={`grid gap-8 ${
                  tier === 'title'
                    ? 'grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto'
                    : tier === 'platinum'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto'
                    : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}>
                  {tierSponsors.map((sponsor) => (
                    <div
                      key={sponsor.slug}
                      className="group flex flex-col items-center text-center space-y-4"
                    >
                      <div className={`
                        relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all group-hover:shadow-md border
                        ${tier === 'title' ? 'h-48 w-full max-w-sm' : tier === 'platinum' ? 'h-32 w-full' : 'h-24 w-full'}
                      `}>
                        {sponsor.website ? (
                          <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full w-full"
                          >
                            <Image
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              fill
                              className="object-contain p-4 transition-transform group-hover:scale-105"
                            />
                          </a>
                        ) : (
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        )}
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-semibold text-oxford-blue">{sponsor.name}</h3>
                        {sponsor.since && (
                          <p className="text-sm text-gray-500">Partner since {sponsor.since}</p>
                        )}
                        {sponsor.website && (
                          <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent-red hover:underline"
                          >
                            Visit Website
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Sponsorship Information */}
        <div className="mt-20 text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Partner with Us</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our mission to develop the next generation of engineers while gaining valuable exposure
            to top talent at one of the world's leading universities. Our partnerships offer unique
            opportunities for brand visibility, talent recruitment, and technical collaboration.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-oxford-blue mb-2">50,000+</div>
              <div className="text-gray-600">Annual Event Attendance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-oxford-blue mb-2">100+</div>
              <div className="text-gray-600">International Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-oxford-blue mb-2">50+</div>
              <div className="text-gray-600">Talented Students</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Become a Partner</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sponsorship-packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}