import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import { formatDate } from '@/lib/utils'
import { NewsArticle } from '@/lib/types'

interface LatestNewsProps {
  articles: NewsArticle[]
}

export default function LatestNews({ articles }: LatestNewsProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <SectionTitle
            title="Latest News"
            subtitle="Stay updated with our latest achievements, competitions, and team updates."
          />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/news">View All News</Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.slug} className="group overflow-hidden hover:shadow-lg transition-shadow">
              {article.featuredImage && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {article.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-red text-white px-2 py-1 text-xs font-medium rounded">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              )}
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  {article.author && (
                    <>
                      <span>•</span>
                      <span>{article.author}</span>
                    </>
                  )}
                </div>
                <CardTitle className="text-xl">
                  <Link
                    href={`/news/${article.slug}`}
                    className="hover:text-accent-red transition-colors"
                  >
                    {article.title}
                  </Link>
                </CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
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

        <div className="mt-12 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}