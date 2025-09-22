import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import { Sponsor } from '@/lib/types'

interface SponsorShowcaseProps {
  sponsors: Sponsor[]
}

export default function SponsorShowcase({ sponsors }: SponsorShowcaseProps) {
  // Show only the first 8 sponsors on the home page
  const displaySponsors = sponsors.slice(0, 8)

  if (sponsors.length === 0) {
    return (
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTitle
              title="Our Partners"
              subtitle="We're proud to work with outstanding organizations who support our mission."
              centered
            />
          </div>
          <div className="text-center bg-white rounded-lg p-12">
            <p className="text-gray-500 mb-8">Partner logos will appear here once added through the CMS</p>
            <Button asChild>
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle
            title="Our Partners"
            subtitle="We're proud to work with these outstanding organizations who support our mission."
            centered
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
          {displaySponsors.map((sponsor) => (
            <div
              key={sponsor.slug}
              className="group flex items-center justify-center"
            >
              {sponsor.website ? (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all group-hover:shadow-md h-24">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>
                </a>
              ) : (
                <div className="relative overflow-hidden rounded-lg bg-white p-6 shadow-sm h-24 w-full">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Interested in partnering with Oxford University Racing?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild>
                <Link href="/sponsors">View All Partners</Link>
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