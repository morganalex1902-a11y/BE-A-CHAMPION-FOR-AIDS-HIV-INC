'use client'

import Link from 'next/link'
import { Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0A2350] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">About Us</h3>
            <p className="text-sm text-yellow-100">
              BE A CHAMPION FOR AIDS-HIV INC is a 501(c)(3) nonprofit dedicated to fighting HIV/AIDS stigma through education, community events, and empowerment.
            </p>
            <p className="text-xs text-yellow-200 mt-4">EIN: 83-3215091</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-yellow-100 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-yellow-100 hover:text-yellow-400 transition-colors">About</Link></li>
              <li><Link href="/programs" className="text-yellow-100 hover:text-yellow-400 transition-colors">Programs</Link></li>
              <li><Link href="/events" className="text-yellow-100 hover:text-yellow-400 transition-colors">Events</Link></li>
              <li><Link href="/get-involved" className="text-yellow-100 hover:text-yellow-400 transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-100">300 NW 34th Street, Apt. #206<br/>Pompano Beach, FL 33064</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-400" />
                <a href="tel:+19547402146" className="text-yellow-100 hover:text-yellow-400 transition-colors">(954) 740-2146</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-400" />
                <a href="mailto:beachampaid.hivinc@gmail.com" className="text-yellow-100 hover:text-yellow-400 transition-colors text-xs">beachampaid.hivinc@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064505570011"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-red-800 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/get-involved#donate"
                className="inline-block px-4 py-2 bg-primary hover:bg-red-800 text-white font-semibold rounded-lg transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400/20 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-yellow-100">
          <p>© 2026 BE A CHAMPION FOR AIDS-HIV INC | 501(c)(3) Nonprofit | All Rights Reserved</p>
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="mt-4 sm:mt-0 flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              Back to Top
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}
