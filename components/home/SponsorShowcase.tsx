import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import { Sponsor } from '@/lib/types'
import { getSponsorTierColor } from '@/lib/utils'

interface SponsorShowcaseProps {
  sponsors: Sponsor[]
}

export default function SponsorShowcase({ sponsors }: SponsorShowcaseProps) {
  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = []
    }
    acc[sponsor.tier].push(sponsor)
    return acc
  }, {} as Record<string, Sponsor[]>)

  const tierOrder = ['title', 'platinum', 'gold', 'silver', 'bronze']
  const tierNames = {
    title: 'Title Sponsor',
    platinum: 'Platinum Partners',
    gold: 'Gold Partners',
    silver: 'Silver Partners',
    bronze: 'Bronze Partners',
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <SectionTitle
            title="Our Partners"
            subtitle="We're proud to work with these outstanding organizations who support our mission."
            centered
          />
        </div>

        <div className="space-y-12">
          {tierOrder.map((tier) => {
            const tierSponsors = sponsorsByTier[tier]
            if (!tierSponsors || tierSponsors.length === 0) return null

            return (
              <div key={tier} className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-oxford-blue">
                    {tierNames[tier as keyof typeof tierNames]}
                  </h3>
                  <div className={`mx-auto mt-2 h-1 w-16 rounded ${getSponsorTierColor(tier)}`} />
                </div>

                <div className={`grid gap-8 ${
                  tier === 'title'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
                    : tier === 'platinum'
                    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                    : 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
                }`}>
                  {tierSponsors.map((sponsor) => (
                    <div
                      key={sponsor.slug}
                      className="group flex items-center justify-center"
                    >
                      {sponsor.website ? (
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <div className={`
                            relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all group-hover:shadow-md
                            ${tier === 'title' ? 'h-32' : tier === 'platinum' ? 'h-24' : 'h-20'}
                          `}>
                            <Image
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              fill
                              className="object-contain p-4 transition-transform group-hover:scale-105"
                            />
                          </div>
                        </a>
                      ) : (
                        <div className={`
                          relative overflow-hidden rounded-lg bg-white p-6 shadow-sm
                          ${tier === 'title' ? 'h-32' : tier === 'platinum' ? 'h-24' : 'h-20'}
                        `}>
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Interested in partnering with Oxford University Racing?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild>
                <Link href="/sponsors">View Sponsorship Packages</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}