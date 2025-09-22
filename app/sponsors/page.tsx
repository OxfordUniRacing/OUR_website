import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSponsors } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'

export const metadata: Metadata = {
  title: 'OUR Sponsors',
  description: 'Meet our valued partners and sponsors who support Oxford University Racing.',
}

export default function SponsorsPage() {
  const sponsors = getSponsors()

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-16">
          <SectionTitle
            title="OUR SPONSORS"
            subtitle="OUR SPONSORS RACE WITH US. Their support enables us to push the boundaries of engineering innovation and compete at the highest level of student motorsport. When we win, our sponsors win."
          />
        </div>

        {/* Introduction */}
        <div className="mb-16 text-center">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are grateful to work with these outstanding organizations who share our commitment to engineering excellence and innovation.
          </p>
        </div>

        {/* Sponsors Listing */}
        <div className="space-y-16 mb-20">
          {sponsors.length > 0 ? (
            sponsors.map((sponsor) => (
              <div key={sponsor.slug} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                <h3 className="text-2xl font-bold text-oxford-blue mb-4">{sponsor.name}</h3>
                <div className="prose max-w-none text-gray-600">
                  {sponsor.description && (
                    <div dangerouslySetInnerHTML={{ __html: sponsor.description }} />
                  )}
                </div>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-oxford-blue hover:text-accent-red font-medium mt-4 transition-colors"
                  >
                    Visit Website
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="text-center bg-gray-50 rounded-lg p-12">
              <p className="text-gray-500 text-lg">
                Partner information will appear here once added through the CMS
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Interested in becoming a Sponsor?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our mission to develop the next generation of engineers while gaining valuable exposure
            to top talent at one of the world's leading universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3 text-lg font-medium"
            >
              Become a Sponsor
            </Link>
            <a
              href="mailto:our@eng.ox.ac.uk"
              className="btn-outline px-8 py-3 text-lg font-medium"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}