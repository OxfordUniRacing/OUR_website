
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNewsArticle, getNewsArticles, markdownToHtml } from '@/lib/content'
import { formatDate } from '@/lib/utils'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getNewsArticles().map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Oxford University Racing',
    }
  }

  return {
    title: `${article.title} | Oxford University Racing`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
      images: article.featuredImage
        ? [article.featuredImage]
        : undefined,
    },
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getNewsArticle(slug)

  if (!article) {
    notFound()
  }

  const bodyHtml = await markdownToHtml(article.content)

  return (
    <article className="py-12 sm:py-16 lg:py-24">
      <div className="container-custom mx-auto max-w-4xl px-4">
        {/* Back navigation */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold
                     text-oxford-blue transition-colors hover:text-accent-red
                     focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-accent-red focus-visible:ring-offset-2
                     rounded"
        >
          <span aria-hidden="true">←</span>
          Back to News
        </Link>

        {/* Article header */}
        <header className="mt-8 sm:mt-10">
          {article.featured && (
            <span className="mb-4 inline-block rounded bg-accent-red
                             px-3 py-1 text-sm font-semibold text-white">
              Featured Story
            </span>
          )}

          <h1 className="text-3xl font-bold leading-tight tracking-tight
                         text-oxford-blue sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            {article.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2
                          border-b border-gray-200 pb-6 text-sm text-gray-500">
            <time dateTime={article.date}>
              {formatDate(article.date)}
            </time>

            {article.author && (
              <>
                <span aria-hidden="true">·</span>
                <span>By {article.author}</span>
              </>
            )}
          </div>
        </header>

        {/* Featured image */}
        {article.featuredImage && (
          <figure className="relative mt-8 aspect-video w-full
                             overflow-hidden rounded-lg bg-gray-100 sm:mt-10">
            <Image
              src={article.featuredImage}
              alt={`Featured image for ${article.title}`}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </figure>
        )}

        {/* Article body */}
        <div
          className="
            news-article-content mt-8 sm:mt-10 max-w-none
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

        {/* Article tags */}
        {article.tags.length > 0 && (
          <div className="mt-10 border-t border-gray-200 pt-6">
            <h2 className="mb-3 text-sm font-semibold uppercase
                           tracking-wide text-oxford-blue">
              Topics
            </h2>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-gray-100 px-3 py-1.5
                             text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Return to news */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded
                       bg-oxford-blue px-5 py-3 font-semibold text-white
                       transition-colors hover:bg-accent-red
                       focus-visible:outline-none focus-visible:ring-2
                       focus-visible:ring-accent-red focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">←</span>
            All News
          </Link>
        </div>
      </div>
    </article>
  )
}