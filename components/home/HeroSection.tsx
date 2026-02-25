'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-community.jpg"
        alt="Community coming together for HIV awareness"
        fill
        className="object-cover opacity-50 absolute inset-0"
      />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,215,0,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(227,27,35,0.15),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center z-20">
        <div className="max-w-3xl mx-auto animate-fade-in">
          {/* Logo Badge */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 relative mx-auto animate-bounce bg-transparent" style={{ animationDuration: '3s' }}>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2Fd262aa17ef624b1d94677905217b9bcb%2F5a9d4a72e1ef46559e7146d1f695acbd?format=webp&width=800&height=1200"
                alt="BE A CHAMPION FOR AIDS-HIV"
                fill
                className="object-contain filter drop-shadow-lg"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary leading-tight">
            BE A CHAMPION
          </h1>
          <p className="text-3xl md:text-4xl font-bold mb-8 text-primary animate-pulse">
            FOR AIDS-HIV
          </p>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            We Are In This Fight Together
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 font-light">
            Educating • Empowering • Ending Stigma
          </p>

          {/* Tagline */}
          <p className="text-sm md:text-base text-gray-400 mb-12 px-4">
            HIV/AIDS Doesn't Discriminate — Neither Do We | 501(c)(3) Approved
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-involved#donate"
              className="px-8 py-3 bg-primary hover:bg-red-800 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/programs"
              className="px-8 py-3 bg-secondary hover:bg-yellow-500 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Join Speak Out Club
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-black font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="flex flex-col items-center">
            <p className="text-gray-400 text-xs mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
