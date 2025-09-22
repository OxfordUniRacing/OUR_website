import { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/common/Button'
import { getSponsors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Oxford University Racing - Formula Student Team',
  description: 'Welcome to Oxford University Racing, the University of Oxford\'s official team for the Formula Student racing competition.',
}

export default function HomePage() {
  const sponsors = getSponsors()

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-oxford-blue">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to Oxford University Racing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
              The University of Oxford's official team for the Formula Student racing competition
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-oxford-blue">
                <Link href="/team">Meet the Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-oxford-blue">About Our Team</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-oxford-blue">Established in 2018</h3>
                <p className="text-gray-600 mb-6">
                  Oxford University Racing comprises over 100 student members from across the university.
                  As the official Formula Student team of the University of Oxford, we focus on designing
                  and building a race car that represents the pinnacle of student engineering excellence.
                </p>
                <p className="text-gray-600">
                  We are supported by Oxford's Department of Engineering Science, bringing together
                  students from diverse academic backgrounds to participate in this world-class
                  engineering challenge.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-oxford-blue">Quick Facts</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 100+ student members</li>
                  <li>• Established in 2018</li>
                  <li>• Supported by Engineering Department</li>
                  <li>• University-wide participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formula Student Purpose */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-oxford-blue">Formula Student Competition</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "The proving ground for the next generation of world class engineers, Formula Student
              is an internationally renowned student motorsport competition."
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">D</span>
                </div>
                <h3 className="font-semibold mb-2">Design</h3>
                <p className="text-gray-600 text-sm">Research and develop innovative engineering solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <h3 className="font-semibold mb-2">Build</h3>
                <p className="text-gray-600 text-sm">Manufacture and assemble our electric race car</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <h3 className="font-semibold mb-2">Race</h3>
                <p className="text-gray-600 text-sm">Compete in international Formula Student events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-oxford-blue">Our Partners</h2>
            <p className="text-lg text-gray-600 mb-12">
              Sponsors are crucial to our team's success. They provide the resources that help us innovate
              and are considered an essential part of our team.
            </p>

            {sponsors.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {sponsors.slice(0, 8).map((sponsor) => (
                  <div key={sponsor.slug} className="flex items-center justify-center p-4">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-12 rounded-lg">
                <p className="text-gray-500">Partner logos will appear here once added through the CMS</p>
              </div>
            )}

            <div className="mt-12">
              <Button asChild>
                <Link href="/sponsors">View All Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-oxford-blue">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Get Involved</h2>
            <p className="text-lg text-gray-200 mb-8">
              Interested in collaboration or sponsorship? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-oxford-blue">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-oxford-blue">
                <a href="mailto:our@eng.ox.ac.uk">our@eng.ox.ac.uk</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}