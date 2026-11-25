import Link from 'next/link'
import Image from 'next/image'
import SocialLinks from '@/components/contact/SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-oxford-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 flex items-center justify-center">
                <Image
                  src="/images/general_assets/OUR+new+logo+white+on+transparent.png"
                  alt="OUR Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
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
            <SocialLinks variant="footer" />
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
                <Link href="/cars" className="text-gray-300 hover:text-white transition-colors">
                  Cars
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
                <Link href="/inclusion" className="text-gray-300 hover:text-white transition-colors">
                  Inclusion
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
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
                  href="mailto:our@eng.ox.ac.uk"
                  className="hover:text-white transition-colors"
                >
                  our@eng.ox.ac.uk
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
              <Link href="https://eng.ox.ac.uk/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              {/* <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}