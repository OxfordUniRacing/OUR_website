import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
      <section className="relative overflow-hidden bg-gradient-to-br from-oxford-blue to-oxford-royal">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/general_assets/car+side.png"
            alt="OUR Formula Student Car"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
              Welcome to Oxford University Racing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl drop-shadow">
              The University of Oxford's official team for the Formula Student racing competition
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-oxford-peach hover:bg-accent-peach text-white">
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
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-oxford-blue">About Our Team</h2>

            {/* Team Photo Gallery */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/general/MicrosoftTeams-image.jpg"
                    alt="Team working together"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/general_assets/hands+in.jpg"
                    alt="Team unity"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/general/20190720_143451.jpg"
                    alt="Team at work"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

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
              <div className="bg-gradient-to-br from-oxford-blue to-oxford-royal p-8 rounded-lg text-white">
                <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
                <ul className="space-y-2">
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
      <section className="py-16 bg-gray-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/general_assets/Drawing2.jpg"
            alt="Engineering drawings"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-8 text-oxford-blue">Formula Student Competition</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                "The proving ground for the next generation of world class engineers, Formula Student
                is an internationally renowned student motorsport competition."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oxford-blue to-oxford-royal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">D</span>
                </div>
                <h3 className="font-semibold mb-4 text-oxford-blue text-lg">Design</h3>
                <p className="text-gray-600">Research and develop innovative engineering solutions</p>
                <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/general_assets/Aerodynamics.jpg"
                    alt="Design process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oxford-green to-oxford-mauve rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">B</span>
                </div>
                <h3 className="font-semibold mb-4 text-oxford-blue text-lg">Build</h3>
                <p className="text-gray-600">Manufacture and assemble our electric race car</p>
                <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/general_assets/electric.jpg"
                    alt="Building process"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center group hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-oxford-peach to-oxford-royal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">R</span>
                </div>
                <h3 className="font-semibold mb-4 text-oxford-blue text-lg">Race</h3>
                <p className="text-gray-600">Compete in international Formula Student events</p>
                <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/general_assets/OURdriver.jpg"
                    alt="Racing"
                    fill
                    className="object-cover"
                  />
                </div>
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
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={64}
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
      <section className="py-16 bg-gradient-to-br from-oxford-blue via-oxford-royal to-oxford-mauve">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Get Involved</h2>
            <p className="text-lg text-gray-100 mb-8">
              Interested in collaboration or sponsorship? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-oxford-peach hover:bg-accent-peach text-white">
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