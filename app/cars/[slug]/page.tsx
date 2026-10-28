
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCar, getCars, markdownToHtml } from '@/lib/content'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return getCars().map((car) => ({
    slug: car.slug,
  }))
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const car = getCar(slug)

  if (!car) {
    return {
      title: 'Car Not Found | Oxford University Racing',
    }
  }

  return {
    title: `${car.title} | Oxford University Racing`,
    description: car.excerpt,
    openGraph: {
      title: car.title,
      description: car.excerpt,
      type: 'article',
      images: car.featuredImage
        ? [car.featuredImage]
        : undefined,
    },
  }
}

export default async function CarPage({ params }: Props) {
  const { slug } = await params
  const car = getCar(slug)

  if (!car) {
    notFound()
  }

  const bodyHtml = await markdownToHtml(car.content)

  const competitionResults = [
    { label: 'Overall', place: car.overallPlace },
    { label: 'Design', place: car.designPlace },
    { label: 'Cost', place: car.costPlace },
    { label: 'Business', place: car.businessPlace },
    { label: 'Acceleration', place: car.accelerationPlace },
    { label: 'Skidpad', place: car.skidpadPlace },
    { label: 'Sprint', place: car.sprintPlace },
    { label: 'Endurance', place: car.endurancePlace },
  ]

  return (
    <article className="py-12 sm:py-16 lg:py-24">
      <div className="container-custom mx-auto max-w-4xl px-4">
        {/* Back navigation */}
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 rounded text-sm font-semibold
                     text-oxford-blue transition-colors hover:text-accent-red
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-accent-red focus-visible:ring-offset-2"
        >
          <span aria-hidden="true">←</span>
          Back to Cars
        </Link>

        {/* Car header */}
        <header className="mt-8 sm:mt-10">
          <p className="text-sm font-medium text-gray-500">
            {car.season} season
          </p>

          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight
                         text-oxford-blue sm:text-4xl lg:text-5xl">
            {car.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            {car.excerpt}
          </p>
        </header>

        {/* Car image */}
        {car.featuredImage && (
          <figure className="relative mt-8 aspect-video w-full
                             overflow-hidden rounded-lg bg-gray-100 sm:mt-10">
            <Image
              src={car.featuredImage}
              alt={car.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </figure>
        )}

        {/* Technical specifications */}
        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-oxford-blue">
            Specifications
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="text-sm text-gray-500">Weight</p>
              <p className="mt-1 text-2xl font-bold text-oxford-blue">
                {car.weight} kg
              </p>
            </div>

            {/* {car.peakPower != null && (
              <div className="rounded-lg border border-gray-200 p-5">
                <p className="text-sm text-gray-500">Peak power</p>
                <p className="mt-1 text-2xl font-bold text-oxford-blue">
                  {car.peakPower} kW
                </p>
              </div>
            )} */}
          </div>
        </section>

        {/* Competition results */}
        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-bold text-oxford-blue">
            Competition Results
          </h2>

          <div className="overflow-hidden rounded-lg border border-gray-200">
            {competitionResults
              .filter(
                (result) =>
                  result.place != null &&
                  String(result.place).trim() !== ''
              )
              .map((result) => (
                <div
                  key={result.label}
                  className="flex items-center justify-between gap-4
                             border-b border-gray-200 px-4 py-3 last:border-b-0
                             sm:px-5"
                >
                  <span className="text-gray-600">
                    {result.label}
                  </span>
                  <span className="font-semibold text-oxford-blue">
                    {result.place}
                  </span>
                </div>
              ))}
          </div>
        </section>

        {/* Car details */}
        {bodyHtml.trim() && (
          <section
            className="
              car-content mt-10 max-w-none
              text-base leading-8 text-gray-800 sm:text-lg
              [&_h1]:mb-4 [&_h1]:mt-8 [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-tight [&_h1]:text-oxford-blue
              [&_h2]:mb-3 [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-oxford-blue
              [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-oxford-blue
              [&_p]:mb-4
              [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6
              [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6
              [&_li]:mb-1
              [&_a]:text-accent-red [&_a]:underline
              [&_strong]:font-bold
            "
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        )}

        {/* Return to cars */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 rounded
                       bg-oxford-blue px-5 py-3 font-semibold text-white
                       transition-colors hover:bg-accent-red
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-accent-red focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">←</span>
            All Cars
          </Link>
        </div>
      </div>
    </article>
  )
}
