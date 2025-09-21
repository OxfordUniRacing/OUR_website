import { Metadata } from 'next'
import SectionTitle from '@/components/common/SectionTitle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Oxford University Racing, our mission, and our approach to Formula Student competition.',
}

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="About Oxford University Racing"
            subtitle="Pioneering automotive engineering excellence through Formula Student competition."
            centered
          />
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-oxford-blue">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To provide Oxford University students with hands-on engineering experience through
                the design, manufacture, and competition of Formula Student racing cars, fostering
                innovation, teamwork, and technical excellence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-oxford-blue">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To be recognized as a leading Formula Student team, known for innovative engineering
                solutions, competitive performance, and the development of future automotive industry
                leaders.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What is Formula Student */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-oxford-blue mb-8 text-center">What is Formula Student?</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p>
              Formula Student is the world's largest student motorsport competition, organized by the
              Institution of Mechanical Engineers. Each year, teams from universities around the globe
              design, build, and race single-seater racing cars to compete against each other.
            </p>
            <p>
              The competition isn't just about speed – teams are judged on various criteria including
              engineering design, cost analysis, business planning, and driving performance. This
              comprehensive evaluation mirrors real-world automotive industry challenges.
            </p>
          </div>
        </div>

        {/* Competition Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-oxford-blue mb-8 text-center">Competition Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Technical Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous safety and technical compliance checks ensuring all cars meet strict
                  regulations before competing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engineering Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Teams present their design to industry judges, defending engineering decisions
                  and innovations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cost & Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analysis of the car's cost and manufacturing processes, emphasizing efficiency
                  and feasibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Presentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Teams pitch their car as a prototype production vehicle to potential investors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dynamic Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  On-track performance tests including acceleration, skid pad, autocross, and
                  endurance racing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fuel Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Efficiency challenge measuring fuel consumption during the endurance event.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-oxford-blue mb-8 text-center">Our Approach</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-oxford-blue mb-2">Innovation</h3>
              <p className="text-gray-600">
                Pushing boundaries with cutting-edge engineering solutions and advanced technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-oxford-blue mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Fostering teamwork across disciplines to achieve exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-oxford-blue mb-2">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in design, manufacturing, and competition.
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Join Our Journey</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're interested in engineering, business, or simply passionate about
            motorsport, there's a place for you in Oxford University Racing. Join us in
            pushing the boundaries of automotive engineering.
          </p>
          <a
            href="/contact"
            className="btn-primary px-8 py-3 text-lg font-medium"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  )
}