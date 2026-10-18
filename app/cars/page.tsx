
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
                  <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                    <span>{car.season} season</span>
                    {car.carNumber != null && (
                      <>
                        <span>•</span>
                        <span>Car #{car.carNumber}</span>
                      </>
                    )}
                  </div>

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

                <CardContent>
                  {(car.weight != null) && (
                    <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                      {car.weight != null && (
                        <div>
                          <p className="text-gray-500">Weight</p>
                          <p className="font-medium text-oxford-blue">
                            {car.weight} kg
                          </p>
                        </div>
                      )}

                      {/* {car.peakPower != null && (
                        <div>
                          <p className="text-gray-500">Peak power</p>
                          <p className="font-medium text-oxford-blue">
                            {car.peakPower} kW
                          </p>
                        </div>
                      )} */}
                    </div>
                  )}

                  {car.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {car.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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