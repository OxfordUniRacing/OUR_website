import { Metadata } from 'next'
import SectionTitle from '@/components/common/SectionTitle'
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
            title="Contact Us"
            subtitle="Get in touch with Oxford University Racing for partnerships, recruitment, or general inquiries."
            centered
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>General Inquiries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">For general questions and information</p>
                <a
                  href="mailto:contact@oxforduniracing.com"
                  className="text-accent-red hover:underline font-medium"
                >
                  contact@oxforduniracing.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>🤝</span>
                  <span>Partnerships & Sponsorship</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Interested in partnering with us?</p>
                <a
                  href="mailto:partnerships@oxforduniracing.com"
                  className="text-accent-red hover:underline font-medium"
                >
                  partnerships@oxforduniracing.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>👥</span>
                  <span>Join the Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Interested in joining our team?</p>
                <a
                  href="mailto:recruitment@oxforduniracing.com"
                  className="text-accent-red hover:underline font-medium"
                >
                  recruitment@oxforduniracing.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>📍</span>
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
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="recruitment">Join the Team</option>
                      <option value="partnership">Partnership/Sponsorship</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-oxford-blue focus:border-transparent"
                      placeholder="Tell us more about your inquiry..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-3 text-lg font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-oxford-blue mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM12 18.15c-3.404 0-6.15-2.746-6.15-6.15s2.746-6.15 6.15-6.15 6.15 2.746 6.15 6.15-2.746 6.15-6.15 6.15zm6.857-13.006a1.43 1.43 0 11-2.86 0 1.43 1.43 0 012.86 0zm-2.156 2.853c-.855-.191-1.79-.3-2.701-.3-4.09 0-7.404 3.315-7.404 7.404 0 .911.109 1.846.3 2.701.855.191 1.79.3 2.701.3 4.09 0 7.404-3.315 7.404-7.404 0-.911-.109-1.846-.3-2.701z"/>
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
              href="https://twitter.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}