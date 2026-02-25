'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Speak Out Club - January Meeting',
    date: 'January 11, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center, Pompano Beach, FL',
    category: 'Youth Program',
    description: 'Monthly Speak Out Club meeting for youth education and discussion.',
    attendees: 45
  },
  {
    id: 2,
    title: 'Monthly Speak Out Club Meeting',
    date: 'February 8, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center, Pompano Beach, FL',
    category: 'Youth Program',
    description: 'Connect with peers and learn about HIV/AIDS awareness and stigma reduction.',
    attendees: 50
  },
  {
    id: 3,
    title: 'Community Giveaway - School Supplies',
    date: 'March 1, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Pompano Beach City Park',
    category: 'Community Service',
    description: 'Free school supplies, backpacks, and educational resources for students.',
    attendees: 200
  },
  {
    id: 4,
    title: 'South Florida AIDS Walk',
    date: 'April 15, 2026',
    time: '8:00 AM - 2:00 PM',
    location: 'Las Olas Boulevard, Fort Lauderdale, FL',
    category: 'Awareness Event',
    description: 'Annual AIDS Walk bringing thousands together in the fight against HIV/AIDS.',
    attendees: 5000
  },
  {
    id: 5,
    title: 'Monthly Speak Out Club Meeting',
    date: 'April 12, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center, Pompano Beach, FL',
    category: 'Youth Program',
    description: 'Spring session of Speak Out Club.',
    attendees: 48
  },
  {
    id: 6,
    title: 'Community Giveaway - Toy Drive',
    date: 'May 1, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Pompano Beach Community Center',
    category: 'Community Service',
    description: 'Enjoy free toys, games, and recreational activities for children.',
    attendees: 150
  },
  {
    id: 7,
    title: 'Community Giveaway Drive',
    date: 'May 20, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Pompano Beach City Park',
    category: 'Community Service',
    description: 'Free haircuts, supplies, and support services.',
    attendees: 180
  },
  {
    id: 8,
    title: 'Zero HIV Stigma Campaign Launch',
    date: 'June 1-30, 2026',
    time: 'All Day',
    location: 'Multiple Locations',
    category: 'Campaign',
    description: 'Month-long campaign promoting zero tolerance for HIV stigma.',
    attendees: 500
  },
  {
    id: 9,
    title: 'National HIV Testing Day Event',
    date: 'June 18, 2026',
    time: '10:00 AM - 6:00 PM',
    location: 'Pompano Beach Community Center',
    category: 'Testing & Health',
    description: 'Free and confidential HIV testing with healthcare professionals on site.',
    attendees: 300
  },
  {
    id: 10,
    title: 'Monthly Speak Out Club Meeting',
    date: 'June 8, 2026',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center, Pompano Beach, FL',
    category: 'Youth Program',
    description: 'Summer session kickoff meeting.',
    attendees: 52
  },
]

const categories = ['All Events', 'Youth Program', 'Community Service', 'Awareness Event', 'Campaign', 'Testing & Health']

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All Events')

  const filteredEvents = selectedCategory === 'All Events'
    ? events
    : events.filter(event => event.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">Events & Calendar</h1>
            <p className="text-xl opacity-95">
              Join us for upcoming events in South Florida
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b-2 border-secondary sticky top-20 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-primary flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-foreground hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No events found in this category.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left Side - Date */}
                      <div className="md:w-32 flex-shrink-0">
                        <div className="bg-gradient-to-br from-primary to-red-700 text-white p-4 rounded-lg text-center">
                          <div className="text-3xl font-bold">
                            {(() => {
                              const parts = event.date.split(' ')
                              const day = parseInt(parts[1])
                              return String(isNaN(day) ? parts[0].substring(0, 3) : day)
                            })()}
                          </div>
                          <div className="text-sm">
                            {(() => {
                              const parts = event.date.split(' ')
                              const day = parseInt(parts[1])
                              return isNaN(day) ? parts.slice(0, 2).join(' ') : parts[0]
                            })()}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-1">{event.title}</h3>
                            <span className="inline-block px-3 py-1 bg-secondary text-black text-xs font-semibold rounded-full">
                              {event.category}
                            </span>
                          </div>
                        </div>

                        <p className="text-foreground mb-4">{event.description}</p>

                        <div className="space-y-2 text-foreground">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{event.attendees}+ Expected</span>
                          </div>
                        </div>

                        <button className="mt-4 px-6 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Info Box */}
            <div className="mt-12 bg-secondary/10 p-6 rounded-lg border-2 border-secondary">
              <h3 className="text-lg font-bold text-primary mb-2">Can't find the event you're looking for?</h3>
              <p className="text-foreground mb-4">
                Check back soon for our complete 2026 calendar or contact us to stay updated on upcoming events.
              </p>
              <a
                href="/contact"
                className="inline-block px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
