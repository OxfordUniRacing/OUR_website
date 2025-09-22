import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import { getSponsors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'Meet our valued partners and sponsors who support Oxford University Racing.',
}

export default function SponsorsPage() {
  const sponsors = getSponsors()

  if (sponsors.length === 0) {
    return (
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTitle
              title="Our Partners"
              subtitle="Oxford University Racing is proud to work with outstanding organizations who share our commitment to engineering excellence and innovation."
              centered
            />
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-12 mb-16">
            <p className="text-gray-500 text-lg mb-8">
              Partner information will appear here once added through the CMS
            </p>
            <Button asChild>
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle
            title="Our Partners"
            subtitle="Oxford University Racing is proud to work with these outstanding organizations who share our commitment to engineering excellence and innovation."
            centered
          />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.slug}
              className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300"
            >
              {/* Logo */}
              <div className="p-8 border-b">
                {sponsor.website ? (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="h-24 flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={120}
                        height={96}
                        className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                      />
                    </div>
                  </a>
                ) : (
                  <div className="h-24 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={96}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-oxford-blue mb-2">{sponsor.name}</h3>

                {sponsor.since && (
                  <p className="text-sm text-gray-500 mb-4">Partner since {sponsor.since}</p>
                )}

                {sponsor.description && (
                  <div className="text-gray-600 mb-4 line-clamp-3">
                    {sponsor.description}
                  </div>
                )}

                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-oxford-blue hover:text-accent-red font-medium transition-colors"
                  >
                    Visit Website
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Information */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Partner with Us</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our mission to develop the next generation of engineers while gaining valuable exposure
            to top talent at one of the world's leading universities. Our partnerships offer unique
            opportunities for brand visibility, talent recruitment, and technical collaboration.
          </p>

          <div className="grid gap-8 md:grid-cols-3 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-oxford-blue mb-2">100+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-oxford-blue mb-2">International</div>
              <div className="text-gray-600">Competition Exposure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-oxford-blue mb-2">University</div>
              <div className="text-gray-600">of Oxford Prestige</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Become a Partner</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:our@eng.ox.ac.uk">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}