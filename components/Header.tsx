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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-20 h-20 relative">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2Fdcb2c7fbb2b04f0c8a3d3d99f08c65fc?format=webp&width=800&height=1200"
                alt="BE A CHAMPION FOR AIDS-HIV"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary">BE A CHAMPION</div>
              <div className="text-xs text-muted-foreground">FOR AIDS-HIV</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/get-involved#donate"
              className="px-5 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-md transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-involved#donate"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-2 bg-primary text-white font-semibold rounded-md hover:bg-red-700 transition-colors text-center"
            >
              Donate Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
