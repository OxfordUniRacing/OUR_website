import { Metadata } from 'next'
import SectionTitle from '@/components/common/SectionTitle'
import ContactForm from '@/components/contact/ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Oxford University Racing for partnerships, recruitment, or general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
        <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Get in Touch"
            subtitle="We are always happy to hear from you"
            centered
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>General Enquiries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">For general questions and information</p>
                <a
                  href="mailto:our@eng.ox.ac.uk"
                  className="text-accent-red hover:underline font-medium"
                >
                  our@eng.ox.ac.uk
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Join the Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Team admissions mainly during weeks 0-1 of Michaelmas Term</p>
                <a
                  href="mailto:our@eng.ox.ac.uk"
                  className="text-accent-red hover:underline font-medium"
                >
                  our@eng.ox.ac.uk
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">
                  <p>University of Oxford</p>
                  <p>Department of Engineering Science</p>
                  <p>Parks Road</p>
                  <p>Oxford OX1 3PJ</p>
                  <p>United Kingdom</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Collaborate Section */}
        <div className="mt-16 text-center">
          <Card className="bg-oxford-blue text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
              <p className="text-lg mb-6">Interested in sponsoring or collaborating with Oxford University Racing?</p>
              <a
                href="/sponsors"
                className="inline-block bg-accent-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Become a Sponsor
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Connect - Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-oxford-blue mb-6">Connect</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8zm4 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://x.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 300 271">
                <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}