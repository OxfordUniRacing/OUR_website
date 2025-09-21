import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-oxford-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-oxford-blue font-bold text-lg">OUR</span>
              </div>
              <div>
                <div className="text-xl font-bold">Oxford University Racing</div>
                <div className="text-sm text-gray-300">Formula Student Team</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Oxford University Racing is Oxford&apos;s Formula Student team, designing and building
              single-seater racing cars to compete in international competitions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/oxforduniracing"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM12 18.15c-3.404 0-6.15-2.746-6.15-6.15s2.746-6.15 6.15-6.15 6.15 2.746 6.15 6.15-2.746 6.15-6.15 6.15zm6.857-13.006a1.43 1.43 0 11-2.86 0 1.43 1.43 0 012.86 0zm-2.156 2.853c-.855-.191-1.79-.3-2.701-.3-4.09 0-7.404 3.315-7.404 7.404 0 .911.109 1.846.3 2.701.855.191 1.79.3 2.701.3 4.09 0 7.404-3.315 7.404-7.404 0-.911-.109-1.846-.3-2.701z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/oxforduniracing"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/oxforduniracing"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-300 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="block">University of Oxford</span>
                <span className="block">Department of Engineering Science</span>
                <span className="block">Parks Road, Oxford OX1 3PJ</span>
              </li>
              <li>
                <a
                  href="mailto:contact@oxforduniracing.com"
                  className="hover:text-white transition-colors"
                >
                  contact@oxforduniracing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Oxford University Racing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}