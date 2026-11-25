import { Metadata } from 'next'
import Image from 'next/image'
import SectionTitle from '@/components/common/SectionTitle'
import ContactForm from '@/components/contact/ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import SocialLinks from '@/components/contact/SocialLinks'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Oxford University Racing for partnerships, recruitment, or general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-16 flex justify-center text-center">
          <SectionTitle
            title="Get in Touch"
            subtitle="We are always happy to hear from you."
            centered
          />
        </div>

        
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Enquiries</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">
                For all questions and information use the form below to send us a message or email us at{" "}
                <a
                  href="mailto:our@eng.ox.ac.uk"
                  className="text-accent-red hover:underline font-medium"
                >
                  our@eng.ox.ac.uk
                </a>
              </p>
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            </CardContent>
          </Card>


          {/* <Card>
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
          </Card> */}

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


        {/* Collaborate Section */}
        <div className="mt-16 text-center">
          <Card className="bg-oxford-blue text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
              <p className="text-lg mb-6">
                Interested in sponsoring or collaborating with us?
              </p>
              <a
                href="/sponsors"
                className="inline-block bg-[#FFAB13] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FFAB13]/90 transition-colors"
              >
                See our sponsor page
              </a>
              <p className="text-lg mt-6">
                Get in touch using the email address or form above.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Connect - Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-oxford-blue mb-6">Connect</h3>
          <div className="flex justify-center space-x-6">
            <SocialLinks variant="body" />
          </div>
        </div>
      </div>
    </div>
  )
}