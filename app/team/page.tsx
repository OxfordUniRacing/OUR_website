import { Metadata } from 'next'
import SectionTitle from '@/components/common/SectionTitle'
import { getTeamMembers } from '@/lib/content'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the talented individuals behind Oxford University Racing.',
}

export default function TeamPage() {
  const teamMembers = getTeamMembers()

  const subteams = [
    { name: 'Leadership', slug: 'leadership', description: 'Strategic direction and team management' },
    { name: 'Aerodynamics', slug: 'aerodynamics', description: 'Airflow optimization and downforce generation' },
    { name: 'Chassis', slug: 'chassis', description: 'Frame design and structural engineering' },
    { name: 'Powertrain', slug: 'powertrain', description: 'Engine performance and drivetrain systems' },
    { name: 'Electronics', slug: 'electronics', description: 'Control systems and data acquisition' },
    { name: 'Operations', slug: 'operations', description: 'Logistics, manufacturing, and project management' },
  ]

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the passionate engineers and innovators who make Oxford University Racing possible. Our diverse team brings together students from across the university, united by a shared commitment to engineering excellence."
            centered
          />
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-oxford-blue">{teamMembers.length}+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-oxford-blue">6</div>
            <div className="text-sm text-gray-600">Sub-teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-oxford-blue">15+</div>
            <div className="text-sm text-gray-600">Disciplines</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-oxford-blue">25+</div>
            <div className="text-sm text-gray-600">Colleges</div>
          </div>
        </div>

        {/* Sub-teams Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-oxford-blue mb-8 text-center">Sub-teams</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subteams.map((subteam) => (
              <Card key={subteam.slug} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <Link
                      href={`/team/${subteam.slug}`}
                      className="hover:text-accent-red transition-colors"
                    >
                      {subteam.name}
                    </Link>
                  </CardTitle>
                  <CardDescription>{subteam.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    {teamMembers.filter(member => member.subteam === subteam.slug).length} members
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Team Members */}
        {teamMembers.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-oxford-blue mb-8 text-center">Featured Members</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.slice(0, 6).map((member) => (
                <Card key={member.slug} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    {member.image && (
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    )}
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                    <div className="text-sm text-gray-500">
                      {member.course} • Year {member.year}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center space-x-2">
                      <span className="bg-oxford-blue text-white px-2 py-1 text-xs rounded">
                        {member.subteam}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-oxford-blue mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate students to join our team. Whether you're interested in
            engineering, business, or operations, there's a place for you at Oxford University Racing.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-6 py-3 text-lg font-medium"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  )
}