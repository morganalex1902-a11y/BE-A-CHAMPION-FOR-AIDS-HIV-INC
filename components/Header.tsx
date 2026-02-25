'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Events', href: '/events' },
    { label: 'Get Involved', href: '/get-involved' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-sm border-b-2 border-primary shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-20 h-20 relative">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F5a9d4a72e1ef46559e7146d1f695acbd?format=webp&width=800&height=1200"
                alt="BE A CHAMPION FOR AIDS-HIV"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary">BE A CHAMPION</div>
              <div className="text-xs text-gray-600">FOR AIDS-HIV</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/get-involved#donate"
              className="px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-red-800 transition-colors shadow-md"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 bg-gray-50 border-t border-primary/20">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-2 bg-primary text-white font-semibold rounded-md hover:bg-red-800 transition-colors text-center"
            >
              Donate Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
