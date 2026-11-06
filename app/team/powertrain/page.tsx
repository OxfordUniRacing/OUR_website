import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTeamMembersBySubteam } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import { TeamMemberCards } from '@/app/team/page'

export const metadata: Metadata = {
  title: 'Powertrain Team',
  description: 'Meet the powertrain team behind Oxford University Racing.',
}

export default function PowertrainTeamPage() {
  const teamMembers = getTeamMembersBySubteam('powertrain')

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex justify-center text-center">
            <SectionTitle
              title="Powertrain Team"
              subtitle="The Powertrain Team is responsible for maximizing the performance of our electric motor and drivetrain. They work on motor control, high voltage power delivery, and gear ratios to ensure our car delivers exceptional acceleration and top speed on the track."
            />
          </div>
          <Link 
            href="/team" 
            className="inline-flex items-center text-oxford-blue hover:text-accent-red mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>
        </div>

        <div className="mb-16">
          <TeamMemberCards members={teamMembers} displayExcessNoImage={true} />
          <div className="text-sm text-gray-500">
            {teamMembers.length} total members
          </div>
        </div>
      </div>
    </div>
  )
}