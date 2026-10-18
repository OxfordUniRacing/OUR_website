
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { getCars } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Cars',
  description:
    'Explore the Formula Student cars designed and built by Oxford University Racing across the years.',
}

export default function CarsPage() {
  const cars = getCars()

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        {/* Page Heading */}
        <div className="mb-16 flex justify-center text-center">
          <SectionTitle
            title="Our Cars"
            subtitle="Explore the cars designed and built by Oxford University Racing across the years."
            centered
          />
        </div>

        {/* All Cars */}
        {cars.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <Card
                key={car.slug}
                className="group overflow-hidden transition-shadow hover:shadow-lg"
              >
                {car.featuredImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={car.featuredImage}
                      alt={car.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                )}

                <CardHeader>
                  <p className="text-sm text-gray-500">
                    {car.season} season
                  </p>

                  <CardTitle className="text-xl">
                    <Link
                      href={`/cars/${car.slug}`}
                      className="transition-colors hover:text-accent-red"
                    >
                      {car.title}
                    </Link>
                  </CardTitle>

                  <CardDescription>{car.excerpt}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technical Specifications */}
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Specifications
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-md bg-gray-50 p-3">
                        <p className="text-sm text-gray-500">Weight</p>
                        <p className="font-semibold text-oxford-blue">
                          {car.weight} kg
                        </p>
                      </div>

                      {/* <div className="rounded-md bg-gray-50 p-3">
                        <p className="text-sm text-gray-500">Peak power</p>
                        <p className="font-semibold text-oxford-blue">
                          {car.peakPower} kW
                        </p>
                      </div> */}
                    </div>
                  </div>

                  {/* Competition Results */}
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Competition Results
                    </h3>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-gray-600">Overall</span>
                        <span className="font-semibold text-oxford-blue">
                          {car.overallPlace}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-gray-600">Design</span>
                        <span className="font-semibold text-oxford-blue">
                          {car.designPlace}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-gray-600">Cost</span>
                        <span className="font-semibold text-oxford-blue">
                          {car.costPlace}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-gray-600">Business</span>
                        <span className="font-semibold text-oxford-blue">
                          {car.buisinessPlace}
                        </span>
                      </div>

                      {[
                        ['Acceleration', car.accelerationPlace],
                        ['Skidpad', car.skidpadPlace],
                        ['Sprint', car.sprintPlace],
                        ['Endurance', car.endurancePlace],
                      ].map(
                        ([event, place]) =>
                          place && (
                            <div
                              key={event}
                              className="flex items-center justify-between gap-3"
                            >
                              <span className="text-gray-600">{event}</span>
                              <span className="font-semibold text-oxford-blue">
                                {place}
                              </span>
                            </div>
                          )
                      )}
                    </div>
                  </div>

                  <Link
                    href={`/cars/${car.slug}`}
                    className="inline-block text-sm font-medium text-oxford-blue transition-colors hover:text-accent-red"
                  >
                    Explore car details →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {cars.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-600">
              No cars yet
            </h3>
            <p className="text-gray-500">
              Check back soon to explore our Formula Student cars.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}