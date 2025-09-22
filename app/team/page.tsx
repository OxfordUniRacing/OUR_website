import { Metadata } from 'next'
import Link from 'next/link'
import { getTeamMembers, getTeamMembersBySubteam } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the talented individuals behind Oxford University Racing.',
}

export default function TeamPage() {
  const teamMembers = getTeamMembers()
  
  // Get members for each subteam
  const leadershipMembers = getTeamMembersBySubteam('leadership')
  const aerodynamicsMembers = getTeamMembersBySubteam('aerodynamics')
  const chassisMembers = getTeamMembersBySubteam('chassis')
  const powertrainMembers = getTeamMembersBySubteam('powertrain')
  const electronicsMembers = getTeamMembersBySubteam('electronics')
  const operationsMembers = getTeamMembersBySubteam('operations')

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-16">
          <SectionTitle
            title="MEET THE TEAM"
            subtitle="Oxford University Racing is a student-run organization with over 100 members from across the University of Oxford. We are divided into specialized sub-teams, each focused on different aspects of designing and building our Formula Student race car."
          />
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Leadership Team</h2>
            <Link 
              href="/team/leadership" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Leadership Team is responsible for the strategic direction of the project, ensuring that all sub-teams work together cohesively to deliver an exceptional race car. They manage resources, coordinate with sponsors, and represent the team at events.
          </p>
          <div className="text-sm text-gray-500">
            {leadershipMembers.length} members
          </div>
        </div>

        {/* Bodywork and Cooling Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Bodywork and Cooling Team</h2>
            <Link 
              href="/team/aerodynamics" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Bodywork and Cooling Team focuses on optimizing airflow around and through the car. They use computational fluid dynamics (CFD) tools like Ansys to design bodywork that maximizes downforce while minimizing drag, and develop cooling systems to maintain optimal operating temperatures.
          </p>
          <div className="text-sm text-gray-500">
            {aerodynamicsMembers.length} members
          </div>
        </div>

        {/* Battery Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Battery Team</h2>
            <Link 
              href="/team/electronics" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Battery Team is responsible for the design and integration of our high-performance battery pack. They work with industry-leading tools like MATLAB and Simulink to model cell behavior, develop battery management systems, and ensure safety and reliability in all conditions.
          </p>
          <div className="text-sm text-gray-500">
            {electronicsMembers.filter(m => m.role.toLowerCase().includes('battery')).length} members
          </div>
        </div>

        {/* Chassis Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Chassis Team</h2>
            <Link 
              href="/team/chassis" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Chassis Team designs the structural backbone of our race car. Using SOLIDWORKS and other CAD tools, they create a lightweight yet incredibly strong frame that meets all Formula Student safety requirements while providing the foundation for all other systems.
          </p>
          <div className="text-sm text-gray-500">
            {chassisMembers.length} members
          </div>
        </div>

        {/* Powertrain Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Powertrain Team</h2>
            <Link 
              href="/team/powertrain" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Powertrain Team is responsible for maximizing the performance of our electric motor and drivetrain. They work on motor control, inverter design, and gear ratios to ensure our car delivers exceptional acceleration and top speed on the track.
          </p>
          <div className="text-sm text-gray-500">
            {powertrainMembers.length} members
          </div>
        </div>

        {/* Simulations Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Simulations Team</h2>
            <Link 
              href="/team/chassis" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Simulations Team uses advanced modeling and simulation tools to predict vehicle performance before physical testing. They analyze lap times, cornering speeds, and energy consumption to optimize our design decisions and validate our engineering approaches.
          </p>
          <div className="text-sm text-gray-500">
            {chassisMembers.filter(m => m.role.toLowerCase().includes('simulation')).length} members
          </div>
        </div>

        {/* Electronics & Software Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Electronics & Software Team</h2>
            <Link 
              href="/team/electronics" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Electronics & Software Team develops the control systems that bring our car to life. From the dashboard display to the motor controller, they write code and design circuits that monitor and manage every aspect of vehicle performance in real-time.
          </p>
          <div className="text-sm text-gray-500">
            {electronicsMembers.length} members
          </div>
        </div>

        {/* Wheel Assembly Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Wheel Assembly Team</h2>
            <Link 
              href="/team/operations" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Wheel Assembly Team is responsible for the design and integration of our suspension and steering systems. They work closely with the Chassis Team to ensure optimal handling characteristics and implement innovative solutions for wheel mounting and alignment.
          </p>
          <div className="text-sm text-gray-500">
            {operationsMembers.filter(m => m.role.toLowerCase().includes('wheel')).length} members
          </div>
        </div>

        {/* Operations Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Operations Team</h2>
            <Link 
              href="/team/operations" 
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Operations Team manages the logistics and manufacturing processes that keep our project running smoothly. From sourcing materials to organizing build schedules, they ensure that every team has what they need to succeed and that our car is built to the highest quality standards.
          </p>
          <div className="text-sm text-gray-500">
            {operationsMembers.length} members
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate students to join our team. Whether you're interested in engineering, business, or operations, there's a place for you at Oxford University Racing.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-8 py-3 text-lg font-medium"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  )
}