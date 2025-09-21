'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/lib/types'

const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Team',
    href: '/team',
    children: [
      { title: 'Overview', href: '/team' },
      { title: 'Leadership', href: '/team/leadership' },
      { title: 'Aerodynamics', href: '/team/aerodynamics' },
      { title: 'Chassis', href: '/team/chassis' },
      { title: 'Powertrain', href: '/team/powertrain' },
      { title: 'Electronics', href: '/team/electronics' },
      { title: 'Operations', href: '/team/operations' },
    ],
  },
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Sponsors',
    href: '/sponsors',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => item.children && setOpenDropdown(item.title)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent-red',
                isActive(item.href)
                  ? 'text-accent-red'
                  : 'text-gray-700 hover:text-gray-900'
              )}
            >
              {item.title}
              {item.children && (
                <svg
                  className="ml-1 inline h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.children && openDropdown === item.title && (
              <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className={cn(
                      'block px-4 py-2 text-sm transition-colors hover:bg-gray-50',
                      isActive(child.href)
                        ? 'text-accent-red'
                        : 'text-gray-700 hover:text-gray-900'
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-screen bg-white shadow-lg ring-1 ring-black ring-opacity-5 md:hidden">
          <div className="px-2 pb-3 pt-2">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-accent-red text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className={cn(
                          'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                          isActive(child.href)
                            ? 'bg-accent-red text-white'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}