import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import LatestNews from '@/components/home/LatestNews'
import SponsorShowcase from '@/components/home/SponsorShowcase'
import { getLatestNews, getSponsors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Oxford University Racing - Formula Student Team',
  description: 'Oxford University Racing is Oxford\'s Formula Student team, designing and building single-seater racing cars to compete in international competitions.',
}

export default function HomePage() {
  // Get latest news articles (3 most recent)
  const latestNews = getLatestNews(3)

  // Get sponsors
  const sponsors = getSponsors()

  return (
    <>
      <Hero />
      <LatestNews articles={latestNews} />
      <SponsorShowcase sponsors={sponsors} />
    </>
  )
}