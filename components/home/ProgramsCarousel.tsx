'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Users, Gift, Megaphone, Footprints } from 'lucide-react'

const programs = [
  {
    id: 1,
    title: 'Speak Out Club',
    description: 'Youth education meetings designed to motivate and empower the next generation with knowledge about HIV/AIDS awareness and stigma reduction.',
    icon: Users,
    color: 'bg-blue-50',
    accentColor: 'text-blue-600',
    image: '/images/youth-education.jpg'
  },
  {
    id: 2,
    title: 'Community Giveaways',
    description: 'Regular giveaway events including free haircuts, school supplies, backpacks, toy drives, and turkey distributions to support our community.',
    icon: Gift,
    color: 'bg-green-50',
    accentColor: 'text-green-600',
    image: '/images/community-support.jpg'
  },
  {
    id: 3,
    title: 'Awareness Campaigns',
    description: 'National HIV/AIDS Days recognition, stigma reduction initiatives, and campaigns featuring slogans like "HIV is Not a Crime" to promote understanding.',
    icon: Megaphone,
    color: 'bg-purple-50',
    accentColor: 'text-purple-600',
    image: '/images/resources-support.jpg'
  },
  {
    id: 4,
    title: 'Walks & Events',
    description: 'South Florida AIDS Walk, Zero HIV Stigma Walk, 5K/3K events, and community gatherings that unite people in the fight against HIV/AIDS.',
    icon: Footprints,
    color: 'bg-orange-50',
    accentColor: 'text-orange-600',
    image: '/images/community-event.jpg'
  },
]

export default function ProgramsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2350] mb-4">Our Programs</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our impactful programs designed to educate, empower, and unite our community
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              const isActive = index === currentIndex
              return (
                <div
                  key={program.id}
                  className={`rounded-lg transition-all transform duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? `border-2 border-yellow-400 scale-105 shadow-lg`
                      : 'border border-gray-200 hover:border-yellow-400 hover:shadow-md'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-colors"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`p-6 bg-gradient-to-b from-yellow-50 to-white`}>
                    <Icon className={`w-10 h-10 mb-4 text-primary`} />
                    <h3 className="text-xl font-bold text-[#0A2350] mb-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-primary hover:bg-red-800 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {programs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-yellow-400' : 'w-3 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-primary hover:bg-red-800 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-8">
            <Link
              href="/programs"
              className="inline-block px-8 py-3 bg-primary hover:bg-red-800 text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
