'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Be a Champion Today</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>

        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          Whether you want to donate, volunteer, join our programs, or simply spread awareness,
          there are many ways to make a difference in the fight against HIV/AIDS stigma.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* Donate Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-gray-400 p-6 rounded-lg hover:bg-white/20 transition-all">
            <h3 className="text-xl font-bold mb-2 text-white">Donate</h3>
            <p className="text-gray-300 mb-4 text-sm">Your contribution helps us continue our mission</p>
            <Link
              href="/get-involved#donate"
              className="inline-block px-6 py-2 bg-primary hover:bg-red-800 text-white font-semibold rounded-lg transition-colors"
            >
              Give Now
            </Link>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-gray-400 p-6 rounded-lg hover:bg-white/20 transition-all">
            <h3 className="text-xl font-bold mb-2 text-white">Volunteer</h3>
            <p className="text-gray-300 mb-4 text-sm">Join our team and help make a real impact</p>
            <Link
              href="/get-involved#volunteer"
              className="inline-block px-6 py-2 bg-primary hover:bg-red-800 text-white font-semibold rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Learn Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-gray-400 p-6 rounded-lg hover:bg-white/20 transition-all">
            <h3 className="text-xl font-bold mb-2 text-white">Learn More</h3>
            <p className="text-gray-300 mb-4 text-sm">Explore our programs and resources</p>
            <Link
              href="/programs"
              className="inline-block px-6 py-2 bg-primary hover:bg-red-800 text-white font-semibold rounded-lg transition-colors"
            >
              Discover
            </Link>
          </div>
        </div>

        {/* Main CTA */}
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary hover:bg-red-800 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Get in Touch with Us
        </Link>

        <p className="text-sm text-gray-400 mt-8">
          Questions? Contact us at (954) 740-2146 or beachampaid.hivinc@gmail.com
        </p>
      </div>
    </section>
  )
}
