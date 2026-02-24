'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Monthly Speak Out Club Meeting',
    date: 'Every 2nd Saturday',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center, Pompano Beach',
    category: 'Youth Program'
  },
  {
    id: 2,
    title: 'South Florida AIDS Walk',
    date: 'April 15, 2026',
    time: '8:00 AM',
    location: 'Las Olas Boulevard, Fort Lauderdale',
    category: 'Awareness Event'
  },
  {
    id: 3,
    title: 'Zero HIV Stigma Campaign',
    date: 'June 1-30, 2026',
    time: 'All Day',
    location: 'Multiple Locations',
    category: 'Campaign'
  },
  {
    id: 4,
    title: 'Community Giveaway Drive',
    date: 'May 20, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Pompano Beach City Park',
    category: 'Community Service'
  },
]

export default function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest Events</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for upcoming events and be part of our mission
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 relative h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/community-event.jpg"
            alt="Community event - AIDS awareness walk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Join Our Community Events</h3>
              <p className="text-lg">Be part of the movement to end HIV/AIDS stigma</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg border border-primary/20 hover:shadow-lg hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-block px-8 py-3 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:scale-105"
          >
            View Full Event Calendar
          </Link>
        </div>
      </div>
    </section>
  )
}
